const test = require("node:test");
const assert = require("node:assert/strict");
const { extractValidDdcValues } = require("../ddc-validation.js");

test("accepts numeric Dewey notation", () => {
  assert.deepEqual(
    extractValidDdcValues(["823", "894.8123", "509.2", "000", "020.1"]),
    ["823", "894.8123", "509.2", "000", "020.1"]
  );
});

test("rejects collection labels and non-DDC text", () => {
  assert.deepEqual(
    extractValidDdcValues(["FIC", "Fic", "REF", "JUV", "BIO", "LOCAL 77", ""]),
    []
  );
});

test("normalises arrays, removes duplicates and ignores null values", () => {
  assert.deepEqual(
    extractValidDdcValues([" 823 ", "823", null, undefined, "  FIC "]),
    ["823"]
  );
});

test("rejects malformed numeric-looking values", () => {
  assert.deepEqual(
    extractValidDdcValues(["82", "823.", ".823", "823.9.1", "823A", "823/"]),
    []
  );
});
