(function (root) {
  "use strict";

  const STOP_WORDS = new Set(["a", "an", "and", "of", "the", "in", "for", "on", "to", "with"]);
  const EQUIVALENTS = {
    indian: "india", historical: "history", historically: "history",
    psychological: "psychology", psychologically: "psychology",
    children: "child", childrens: "child", essays: "essay", novels: "novel",
    poems: "poem", libraries: "library", librarians: "librarian",
    computers: "computer", computing: "computer", animals: "animal",
    plants: "plant", stories: "story", biographies: "biography",
    autobiographies: "autobiography", languages: "language", sciences: "science",
    books: "book", movies: "movie", films: "film", educational: "education",
    linguistic: "linguistics", literary: "literature", religious: "religion",
    medical: "medicine", political: "politics", economic: "economics"
  };

  function normalize(value) {
    return String(value || "").toLocaleLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^\p{L}\p{N}\s.-]/gu, " ")
      .replace(/\s+/g, " ").trim();
  }

  function tokens(value) {
    return normalize(value).split(/\s+/u)
      .filter(token => token && !STOP_WORDS.has(token))
      .map(token => EQUIVALENTS[token] || token);
  }

  function scoreRule(rule, text) {
    const normalizedText = normalize(text);
    const queryTokens = new Set(tokens(text));
    const concepts = new Map();

    for (const keyword of rule.keywords || []) {
      const key = normalize(keyword);
      if (!key) continue;
      const keywordTokens = [...new Set(tokens(key))];
      if (!keywordTokens.length || !keywordTokens.every(token => queryTokens.has(token))) continue;
      const signature = keywordTokens.slice().sort().join(" ");
      const exactPhrase = normalizedText.includes(key);
      const score = keywordTokens.length > 1 ? (exactPhrase ? 4 : 3) : 2;
      const previous = concepts.get(signature);
      if (!previous || score > previous.score) concepts.set(signature, { score, keyword });
    }

    const matched = [...concepts.values()].map(item => item.keyword);
    return {
      ...rule,
      score: [...concepts.values()].reduce((sum, item) => sum + item.score, 0),
      matched
    };
  }

  function rankRules(rules, input = {}) {
    const suppliedSubject = String(input.subject || "").trim();
    const primaryText = suppliedSubject || String(input.fallbackText || "").trim();
    const hints = Array.isArray(input.hints) ? input.hints.filter(Boolean) : [];
    const searchText = [primaryText, ...hints].join(" ").trim();
    if (!searchText) return [];

    return rules.map(rule => scoreRule(rule, searchText))
      .filter(rule => rule.score > 0)
      .sort((a, b) => b.score - a.score || String(a.number).localeCompare(String(b.number), undefined, { numeric: true }));
  }

  const api = { normalize, tokens, scoreRule, rankRules };
  root.DDCClassification = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
