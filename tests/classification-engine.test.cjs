const test = require("node:test");
const assert = require("node:assert/strict");
const { rankRules } = require("../classification-engine.js");

const rules = [
  { number: "150", heading: "Psychology", keywords: ["psychology", "cognitive psychology"] },
  { number: "330", heading: "Economics", keywords: ["economics", "personal finance", "finance"] },
  { number: "891.434", heading: "Hindi essays", keywords: ["hindi essays", "hindi essay", "essays in hindi"] },
  { number: "658.4", heading: "Human resources", keywords: ["human resources", "recruitment"] },
  { number: "004", heading: "Computer science", keywords: ["computer science", "computing"] }
];

test("explicit subject takes precedence over title fallback", () => {
  assert.equal(rankRules(rules, { subject: "personal finance", fallbackText: "" })[0].number, "330");
  assert.equal(rankRules(rules, { subject: "personal finance", fallbackText: "Cognitive Psychology" })[0].number, "330");
});

test("subject concepts match regardless of word order", () => {
  assert.equal(rankRules(rules, { subject: "essays Hindi" })[0].number, "891.434");
});

test("common grammatical variants are normalised", () => {
  assert.equal(rankRules(rules, { subject: "Hindi essay" })[0].number, "891.434");
  assert.equal(rankRules(rules, { subject: "human resource recruitment" })[0].number, "658.4");
});

test("title is used only when no subject was supplied", () => {
  assert.equal(rankRules(rules, { subject: "", fallbackText: "Cognitive Psychology" })[0].number, "150");
});

test("empty input does not produce classifications", () => {
  assert.deepEqual(rankRules(rules, { subject: "", fallbackText: "" }), []);
});

test("unrelated concepts do not match", () => {
  assert.deepEqual(rankRules(rules, { subject: "Malayalam essay" }), []);
});

test("language hints can disambiguate a subject phrase", () => {
  assert.equal(rankRules(rules, { subject: "essay", hints: ["hindi essays"] })[0].number, "891.434");
});

test("ranked results are deterministic when scores tie", () => {
  const result = rankRules([
    { number: "330.1", heading: "Economics A", keywords: ["economics"] },
    { number: "330", heading: "Economics B", keywords: ["economics"] }
  ], { subject: "economics" });
  assert.deepEqual(result.map(x => x.number), ["330", "330.1"]);
});
