const tableBody = document.querySelector("#test-results");
const summary = document.querySelector("#summary");
const status = document.querySelector("#run-status");
const runButton = document.querySelector("#run-tests");
const frame = document.querySelector("#app-frame");

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const safe = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
})[char]);

async function runCase(test, doc) {
  const form = doc.querySelector("#search-form");
  const input = test.input;
  doc.querySelector("#book-title").value = input.title;
  doc.querySelector("#book-author").value = input.author;
  doc.querySelector("#book-subject").value = input.subject;
  const languageField = doc.querySelector("#book-language");
  if (languageField) languageField.value = input.language || "";
  doc.querySelector("#book-isbn").value = "";
  form.requestSubmit();
  await wait(80);
  const number = doc.querySelector("#results .ddc-number")?.textContent.trim() || "";
  const noMatch = Boolean(doc.querySelector("#results .empty-state"));
  const catalogue = test.observed_catalogue_numbers || [];
  const compactNumber = value => String(value).replace(/\s+/g, "");
  const matched = Boolean(number && catalogue.some(value => compactNumber(value) === compactNumber(number)));
  let label, css;
  if (matched) { label = "Matches catalogue"; css = "match"; }
  else if (number) { label = "Not in cited records"; css = "mismatch"; }
  else if (noMatch) { label = "No suggestion"; css = "none"; }
  else { label = "Test inconclusive"; css = "none"; }
  return { test, number: number || (noMatch ? "—" : "Not rendered"), label, css, matched };
}

async function run() {
  runButton.disabled = true;
  status.textContent = "Running local-rule checks…";
  tableBody.innerHTML = "";
  try {
    const response = await fetch("./real-book-cases.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load real-book-cases.json");
    const dataset = await response.json();
    const doc = frame.contentDocument;
    if (!doc || !doc.querySelector("#search-form")) throw new Error("The DDC Finder test frame did not load.");
    const results = [];
    for (const test of dataset.cases) results.push(await runCase(test, doc));
    let matches = 0;
    for (const result of results) {
      if (result.matched) matches++;
      const sources = result.test.catalogue_records.map(record =>
        '<a href="' + safe(record.url) + '" target="_blank" rel="noopener noreferrer">' +
        safe(record.library) + ' (' + safe(record.ddc) + ')</a>'
      ).join("<br>");
      const row = document.createElement("tr");
      row.innerHTML =
        '<td>' + safe(result.test.title) + '<div class="details">' + safe(result.test.author) +
        ' · ' + safe(result.test.language) + '</div><div class="details">' + safe(result.test.note) + '</div></td>' +
        '<td><strong>' + safe(result.number) + '</strong></td>' +
        '<td>' + sources + '</td>' +
        '<td><span class="status ' + result.css + '">' + safe(result.label) + '</span></td>';
      tableBody.appendChild(row);
    }
    summary.innerHTML =
      '<span class="pill">' + results.length + ' test books</span>' +
      '<span class="pill">' + matches + ' suggestions match at least one catalogue</span>' +
      '<span class="pill">' + (results.length - matches) + ' need review</span>';
    status.textContent = "Completed. " + matches + " of " + results.length + " suggestions appear in at least one cited catalogue.";
  } catch (error) {
    tableBody.innerHTML = '<tr><td colspan="4">' + safe(error.message) + '</td></tr>';
    status.textContent = "Could not complete checks.";
  } finally {
    runButton.disabled = false;
  }
}

runButton.addEventListener("click", run);
if (frame.contentDocument && frame.contentDocument.readyState === "complete" && frame.contentDocument.querySelector("#search-form")) {
  run();
} else {
  frame.addEventListener("load", run, { once: true });
}
