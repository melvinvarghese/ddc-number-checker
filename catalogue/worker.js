/**
 * DDC Finder catalogue connector
 *
 * Deploy as a Cloudflare Worker. Configure CATALOGUE_SOURCES as a JSON
 * environment variable containing only reviewed public SRU endpoints.
 * This worker never accepts arbitrary target URLs from callers.
 */

const MAX_RESPONSE_BYTES = 1_000_000;
const MAX_RECORDS_PER_SOURCE = 5;
const REQUEST_TIMEOUT_MS = 8000;

function corsHeaders(origin, allowedOrigins) {
  const allowed = allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || "null";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function json(data, status, origin, allowedOrigins, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders(origin, allowedOrigins),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extra
    }
  });
}

function decodeXml(value) {
  return String(value || "")
    .replace(/&#x([\da-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function subfields(fieldXml, code) {
  const values = [];
  const expression = /<subfield\b([^>]*)>([\s\S]*?)<\/subfield>/gi;
  let match;
  while ((match = expression.exec(fieldXml))) {
    const codeMatch = match[1].match(/code=["']([^"']+)["']/i);
    if (codeMatch && codeMatch[1] === code) values.push(decodeXml(match[2].replace(/<[^>]+>/g, "").trim()));
  }
  return values;
}

function dataFields(recordXml, tag) {
  const fields = [];
  const expression = /<datafield\b([^>]*)>([\s\S]*?)<\/datafield>/gi;
  let match;
  while ((match = expression.exec(recordXml))) {
    const tagMatch = match[1].match(/tag=["']([^"']+)["']/i);
    if (tagMatch && tagMatch[1] === tag) fields.push({ attributes: match[1], xml: match[2] });
  }
  return fields;
}

function controlField(recordXml, tag) {
  const expression = new RegExp("<controlfield\\b[^>]*tag=[\"']" + tag + "[\"'][^>]*>([\\s\\S]*?)<\\/controlfield>", "i");
  const match = recordXml.match(expression);
  return match ? decodeXml(match[1].replace(/<[^>]+>/g, "").trim()) : "";
}

function parseMarcRecord(recordXml, source) {
  const ddcFields = dataFields(recordXml, "082");
  const ddc = ddcFields.flatMap(field => subfields(field.xml, "a"))
    .map(value => value.trim())
    .filter(value => /^\d{3}(?:\.\d+)?$/.test(value));
  const titleField = dataFields(recordXml, "245")[0];
  const title = titleField ? [...subfields(titleField.xml, "a"), ...subfields(titleField.xml, "b")].join(" ").trim() : "";
  const authorField = dataFields(recordXml, "100")[0] || dataFields(recordXml, "110")[0] || dataFields(recordXml, "111")[0];
  const author = authorField ? [...subfields(authorField.xml, "a"), ...subfields(authorField.xml, "b")].join(" ").trim() : "";
  const isbn = dataFields(recordXml, "020").flatMap(field => subfields(field.xml, "a"))
    .map(value => value.replace(/[^0-9X]/gi, "")).filter(Boolean);
  const recordId = controlField(recordXml, "001");
  const edition = ddcFields.flatMap(field => subfields(field.xml, "2"))[0] || "";
  return {
    title, author, isbn, ddc: [...new Set(ddc)], marcField: ddc.length ? "082" : null,
    classification: ddc.length ? "Dewey Decimal Classification (MARC 082)" : null,
    edition, recordId,
    library: source.name,
    country: source.country || "India",
    sourceUrl: source.opacUrl,
    searchUrl: source.opacSearchUrl || source.opacUrl,
    sourceId: source.id
  };
}

function extractMarcRecords(xml, source) {
  const output = [];
  const expression = /<(?:[\w.-]+:)?recordData\b[^>]*>([\s\S]*?)<\/(?:[\w.-]+:)?recordData>/gi;
  let match;
  while ((match = expression.exec(xml)) && output.length < MAX_RECORDS_PER_SOURCE) {
    const recordXml = match[1];
    if (!/<(?:[\w.-]+:)?record\b/i.test(recordXml) || !/<datafield\b/i.test(recordXml)) continue;
    output.push(parseMarcRecord(recordXml, source));
  }
  return output;
}

function escapeCql(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/[\r\n]/g, " ");
}

function buildCql(params) {
  const isbn = (params.get("isbn") || "").replace(/[^0-9X]/gi, "");
  const title = (params.get("title") || "").trim();
  const author = (params.get("author") || "").trim();
  if (isbn) return 'dc.title all "' + escapeCql(title) + '"';
  const parts = ['dc.title all "' + escapeCql(title) + '"'];
  if (author) parts.push('dc.creator all "' + escapeCql(author) + '"');
  return parts.join(" and ");
}

function normalize(value) {
  return String(value || "").normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function matchRecord(record, query) {
  if (query.isbn) {
    const wanted = query.isbn.replace(/[^0-9X]/gi, "").toUpperCase();
    if (record.isbn.some(value => value.toUpperCase() === wanted)) return "exact ISBN";
  }
  const wantedTitle = normalize(query.title);
  const foundTitle = normalize(record.title);
  if (!wantedTitle || !foundTitle || (foundTitle !== wantedTitle && !foundTitle.includes(wantedTitle) && !wantedTitle.includes(foundTitle))) return "";
  if (query.author) {
    const wantedAuthor = normalize(query.author);
    const foundAuthor = normalize(record.author);
    if (!wantedAuthor || !foundAuthor || (!foundAuthor.includes(wantedAuthor) && !wantedAuthor.includes(foundAuthor))) return "";
  }
  return foundTitle === wantedTitle ? "title match" : "probable title match";
}

function loadSources(raw) {
  let sources;
  try { sources = JSON.parse(raw || "[]"); } catch { throw new Error("CATALOGUE_SOURCES must be valid JSON."); }
  if (!Array.isArray(sources)) throw new Error("CATALOGUE_SOURCES must be a JSON array.");
  return sources.filter(source => {
    if (!source || !source.id || !source.name || !source.sruEndpoint || !source.opacUrl) return false;
    try {
      const endpoint = new URL(source.sruEndpoint);
      const opac = new URL(source.opacUrl);
      return endpoint.protocol === "https:" && opac.protocol === "https:";
    } catch { return false; }
  });
}

async function searchSource(source, cql) {
  const endpoint = new URL(source.sruEndpoint);
  endpoint.searchParams.set("version", "1.1");
  endpoint.searchParams.set("operation", "searchRetrieve");
  endpoint.searchParams.set("query", cql);
  endpoint.searchParams.set("maximumRecords", String(MAX_RECORDS_PER_SOURCE));
  endpoint.searchParams.set("recordSchema", "marcxml");
  const response = await fetch(endpoint.toString(), {
    headers: { "Accept": "application/xml, text/xml;q=0.9" },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    redirect: "error"
  });
  if (!response.ok) throw new Error("Catalogue returned HTTP " + response.status);
  const declaredLength = Number(response.headers.get("content-length") || 0);
  if (declaredLength > MAX_RESPONSE_BYTES) throw new Error("Catalogue response exceeded the size limit.");
  const xml = await response.text();
  if (xml.length > MAX_RESPONSE_BYTES) throw new Error("Catalogue response exceeded the size limit.");
  if (/diagnostic/i.test(xml) && !/<recordData\b/i.test(xml)) throw new Error("SRU server returned a diagnostic instead of records.");
  return extractMarcRecords(xml, source);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = (env.ALLOWED_ORIGINS || "https://melvinvarghese.github.io").split(",").map(value => value.trim()).filter(Boolean);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin, allowedOrigins) });
    const url = new URL(request.url);
    if (request.method !== "GET" || url.pathname !== "/search") {
      return json({ error: "Not found", records: [] }, 404, origin, allowedOrigins);
    }
    const title = (url.searchParams.get("title") || "").trim();
    const author = (url.searchParams.get("author") || "").trim();
    const isbn = (url.searchParams.get("isbn") || "").trim();
    if (!title && !isbn) return json({ error: "Enter a title or ISBN.", records: [] }, 400, origin, allowedOrigins);
    if (title.length > 180 || author.length > 120 || isbn.length > 17) {
      return json({ error: "Search input is too long.", records: [] }, 400, origin, allowedOrigins);
    }
    let sources;
    try { sources = loadSources(env.CATALOGUE_SOURCES); }
    catch (error) { return json({ error: error.message, records: [] }, 500, origin, allowedOrigins); }
    if (!sources.length) return json({ records: [], message: "No verified SRU catalogue endpoints are configured yet." }, 200, origin, allowedOrigins);
    const query = { title, author, isbn };
    const cql = buildCql(url.searchParams);
    const records = [];
    const sourceStatus = [];
    // Sequential requests protect small library servers and respect conservative usage.
    for (const source of sources) {
      try {
        const found = await searchSource(source, cql);
        let accepted = 0;
        for (const record of found) {
          const match = matchRecord(record, query);
          if (!match) continue;
          record.match = match;
          if (record.ddc.length) records.push(record);
          accepted++;
        }
        sourceStatus.push({ id: source.id, name: source.name, status: "ok", records: accepted });
      } catch (error) {
        sourceStatus.push({ id: source.id, name: source.name, status: "unavailable", message: error.message });
      }
    }
    return json({
      records,
      sources: sourceStatus,
      searchedAt: new Date().toISOString(),
      note: "Only MARC 082 values are returned as DDC. A missing number does not mean the library has no classification."
    }, 200, origin, allowedOrigins, { "Cache-Control": "public, max-age=300" });
  }
};
