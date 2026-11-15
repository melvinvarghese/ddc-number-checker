import test from "node:test";
import assert from "node:assert/strict";
import { extractMarcRecords, matchRecord } from "../catalogue/worker.js";

const source = {
  id: "fixture-library",
  name: "Fixture Library",
  country: "India",
  opacUrl: "https://library.example.org/",
  opacSearchUrl: "https://library.example.org/search"
};

test("extracts DDC only from MARC 082 and retains bibliographic provenance", () => {
  const xml = `
    <zs:searchRetrieveResponse xmlns:zs="http://www.loc.gov/zing/srw/">
      <zs:records><zs:record><zs:recordData>
        <record xmlns="http://www.loc.gov/MARC21/slim">
          <controlfield tag="001">12345</controlfield>
          <datafield tag="020" ind1=" " ind2=" "><subfield code="a">9781234567890</subfield></datafield>
          <datafield tag="100" ind1="1" ind2=" "><subfield code="a">Example Author.</subfield></datafield>
          <datafield tag="245" ind1="1" ind2="0"><subfield code="a">A test book :</subfield><subfield code="b">a catalogue fixture</subfield></datafield>
          <datafield tag="082" ind1="0" ind2="4"><subfield code="a">332.024</subfield><subfield code="2">23</subfield></datafield>
          <datafield tag="090" ind1=" " ind2=" "><subfield code="a">LOCAL 77</subfield></datafield>
        </record>
      </zs:recordData></zs:record></zs:records>
    </zs:searchRetrieveResponse>`;
  const records = extractMarcRecords(xml, source);
  assert.equal(records.length, 1);
  assert.deepEqual(records[0].ddc, ["332.024"]);
  assert.equal(records[0].marcField, "082");
  assert.equal(records[0].title, "A test book : a catalogue fixture");
  assert.equal(records[0].author, "Example Author.");
  assert.deepEqual(records[0].isbn, ["9781234567890"]);
  assert.equal(records[0].recordId, "12345");
  assert.equal(records[0].edition, "23");
});

test("does not treat a local 090 call number as DDC", () => {
  const xml = `<record><datafield tag="090"><subfield code="a">020.1</subfield></datafield></record>`;
  const records = extractMarcRecords(`<recordData>${xml}</recordData>`, source);
  assert.equal(records[0].ddc.length, 0);
  assert.equal(records[0].marcField, null);
});

test("requires exact ISBN when an ISBN is supplied", () => {
  const record = { title: "The same title", author: "A. Writer", isbn: ["9780000000002"] };
  assert.equal(matchRecord(record, { title: "The same title", author: "A. Writer", isbn: "9780000000001" }), "");
  assert.equal(matchRecord(record, { title: "A different title", author: "", isbn: "9780000000002" }), "exact ISBN");
});

test("matches title and author when ISBN is not supplied", () => {
  const record = { title: "The Same Title", author: "A. Writer", isbn: [] };
  assert.equal(matchRecord(record, { title: "The Same Title", author: "Writer", isbn: "" }), "title match");
  assert.equal(matchRecord(record, { title: "The Same Title", author: "Another Person", isbn: "" }), "");
});
