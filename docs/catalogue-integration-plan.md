# Catalogue integration plan

## Product direction

DDC Finder is being developed as a global catalogue-evidence discovery tool, beginning with Kerala. Kerala is the first pilot region, not a permanent geographic restriction. The source registry lives in `catalogue-sources.json` so additional Indian and international catalogues can be added without rewriting the search interface.

## Why Kerala first

Kerala offers a useful mix of public and academic catalogues and a statewide discovery initiative:

- **SCERT Kerala Library** explicitly documents Koha, MARC cataloguing and use of Dewey Decimal Classification.
- **KILA Headquarters Library** has a public Koha OPAC and a specialised collection in local governance and public administration.
- **Kerala University Libraries** operate a Koha catalogue covering the university, campus and departmental libraries.
- **Kerala State Central Library** offers a public Koha OPAC.
- **KALNET** is a statewide discovery service described by the Kerala State Higher Education Council as connecting 11 universities and 147 libraries, with more than 1.5 million titles.
- **CMD Knowledge Management Centre** documents Koha and public OPAC access.

These are candidate sources, not yet six working automated connectors. The registry deliberately records what is known and what still needs verification.

## Retrieval architecture

### 1. Source registry

Each catalogue entry records:

- institution and region
- official library page and public catalogue URL
- platform (Koha, VuFind or other)
- known classification practice
- evidence for that classification practice
- supported access method, once verified
- automation status

Do not add an endpoint to the production connector list until it has been tested against the live service and its access conditions have been reviewed.

### 2. Connector priority

For Koha and other library systems, investigate interfaces in this order:

1. **SRU** — search/retrieve bibliographic records, preferably MARCXML.
2. **OAI-PMH** — useful for permitted metadata harvesting and indexing, not usually live per-title search.
3. **Documented public REST API** — only where anonymous/public access is explicitly enabled.
4. **Public OPAC search page** — use as a manual fallback or a specifically permitted parser; do not assume its HTML is stable.

Koha supports SRU and OAI-PMH, but each library controls which services are enabled and how they are configured. A Koha installation is not proof that its SRU endpoint is publicly exposed.

### 3. Server-side retrieval

The current site is static GitHub Pages. Browsers cannot reliably query arbitrary OPACs directly because many servers do not allow cross-origin requests (CORS). Do not add a public, unrestricted proxy to the client.

The production design should use a small server-side connector (for example, a Cloudflare Worker) with:

- a fixed allowlist of reviewed catalogue hosts from the source registry
- per-source query builders and parsers
- strict request timeouts and response-size limits
- caching by normalized title/author/ISBN and source
- conservative per-host rate limits and sequential requests
- no arbitrary user-supplied URL fetching
- source attribution and original record links in every result

If a source does not permit automated access, retain a direct OPAC search link instead of scraping it.

### 4. Extracting classification evidence

For MARC21 records:

- Prefer **082** for Dewey Decimal Classification.
- Preserve the complete field value and relevant subfields.
- Capture the edition/source subfield where present.
- Keep author, title, ISBN, language, publication details, institution, record ID and record URL for matching and provenance.
- Record whether the value came from MARC 082 or a separately verified Koha classification-source code.

Do not infer DDC from a generic call number, MARC 090, a shelf label, or an unlabelled OPAC field. Libraries can use LCC, UDC, local schemes and locally adapted call numbers.

### 5. Matching and ranking

A catalogue result is useful only when the edition/work match is credible.

- ISBN exact match: strongest match.
- Title + author + edition/language: strong match.
- Normalized title + author: useful but should be labelled as a likely match.
- Title-only fuzzy match: never silently treated as an exact match.

Show all credible DDC values, grouped by number and accompanied by the number of independent catalogues that reported them. Do not turn frequency into an authoritative verdict. Preserve disagreements and let the librarian inspect source records.

### 6. User-facing result

Each retrieved item should show:

- DDC number and MARC field/source used
- library/institution and country
- matched title, author and edition details
- direct link to the original catalogue record
- match quality
- retrieval timestamp
- a warning when the library's classification source is unknown

Keep third-party catalogue evidence visually separate from DDC Finder's locally generated preliminary suggestions.

## Rollout phases

### Phase 0 — source verification (Kerala)
1. Confirm live OPAC URLs and search behaviour.
2. Determine whether SRU, OAI-PMH or public APIs are enabled.
3. Inspect sample records and confirm MARC 082 or explicit DDC classification-source metadata.
4. Review terms of use, robots guidance and rate limits.
5. Record successful and failed tests in the source registry.

### Phase 1 — first Kerala connectors
Prioritise SCERT (DDC use explicitly documented), KALNET (statewide reach), KILA, Kerala University and State Central Library. Only enable automated retrieval for sources whose endpoint and access policy have been verified.

### Phase 2 — wider India
Add university libraries, national institutions, public libraries and library networks. Prefer shared discovery services and openly documented SRU/Z39.50 targets where available.

### Phase 3 — international
Add public catalogues from other countries, national libraries and open bibliographic services. Support multiple languages, scripts, transliteration and different catalogue systems.

### Phase 4 — community contribution
Allow librarians to nominate a catalogue and submit its public OPAC URL and documentation. New sources remain pending until reviewed and tested. Never accept arbitrary fetch URLs directly from ordinary search requests.

## Success measures

- percentage of searches returning at least one credible catalogue record
- percentage of returned records with verified DDC evidence
- exact ISBN match rate
- source availability and latency
- catalogue coverage by region and language
- disagreement rate between institutions
- proportion of results with a working original-record link

The goal is not to claim that every book has one universally correct number. The goal is to help librarians discover reliable, inspectable classification evidence from more catalogues around the world.

## Important limitations

- Koha does not guarantee that a public SRU endpoint is enabled.
- OAI-PMH is a harvesting protocol, not a universal live search endpoint.
- CORS restrictions mean the GitHub Pages frontend cannot directly query every OPAC.
- DDC is maintained by OCLC and is subject to licensing. Do not copy proprietary schedules or build an unauthorised complete DDC database.
- Catalogue records may be incomplete, edition-specific, locally adapted or inconsistent. Preserve provenance and show uncertainty.
