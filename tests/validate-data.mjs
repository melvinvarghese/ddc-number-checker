import { readFileSync } from "node:fs";

const file = new URL("./real-book-cases.json", import.meta.url);
const dataset = JSON.parse(readFileSync(file, "utf8"));
const errors = [];
const ids = new Set();
const compactNumber = value => String(value).replace(/\\s+/g, "");

if (!Array.isArray(dataset.cases) || dataset.cases.length < 1) {
  errors.push("The cases array must contain at least one test case.");
} else {
  for (const [index, test] of dataset.cases.entries()) {
    const label = test.id || `case ${index + 1}`;
    for (const field of ["id", "title", "author", "language", "observed_app_number", "note"]) {
      if (typeof test[field] !== "string" || !test[field].trim()) {
        errors.push(`${label}: missing required string field ${field}`);
      }
    }
    if (ids.has(test.id)) errors.push(`${label}: duplicate id`);
    ids.add(test.id);
    if (!test.input || !test.input.title || test.input.isbn !== "") {
      errors.push(`${label}: test input must include a title and leave ISBN blank`);
    }
    if (!Array.isArray(test.observed_catalogue_numbers) || !test.observed_catalogue_numbers.length) {
      errors.push(`${label}: add at least one observed catalogue DDC number`);
    }
    if (!Array.isArray(test.catalogue_records) || !test.catalogue_records.length) {
      errors.push(`${label}: add at least one source catalogue record`);
    } else {
      for (const record of test.catalogue_records) {
        if (!record.library || !record.ddc || !/^https:\/\//.test(record.url || "")) {
          errors.push(`${label}: each catalogue record needs library, DDC and an HTTPS source URL`);
        }
        if (!test.observed_catalogue_numbers.some(value => compactNumber(value) === compactNumber(record.ddc))) {
          errors.push(`${label}: catalogue record DDC ${record.ddc} is missing from observed_catalogue_numbers`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${dataset.cases.length} real-book fixtures and their catalogue source links.`);
}
