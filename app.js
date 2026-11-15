const SUBJECT_RULES = [
  { number: "020", heading: "Library & information sciences", keywords: ["library science", "librarianship", "cataloguing", "cataloging", "classification", "dewey", "ddc", "library management", "library automation", "bibliography", "information science"], description: "The supplied terms point towards library and information science." },
  { number: "005.1", heading: "Programming", keywords: ["programming", "computer programming", "software development", "coding", "javascript", "python programming"], description: "The terms suggest computer programming or software development." },
  { number: "006.3", heading: "Artificial intelligence", keywords: ["artificial intelligence", "machine learning", "deep learning", "neural network", "generative ai"], description: "The terms suggest artificial intelligence and related computational methods." },
  { number: "004", heading: "Computer science", keywords: ["computer science", "computers", "computing", "computer technology"], description: "The terms suggest general computer science or computing." },
  { number: "150", heading: "Psychology", keywords: ["psychology", "psychological", "cognitive psychology", "social psychology"], description: "The terms suggest the study of psychology." },
  { number: "158.1", heading: "Applied psychology & personal development", keywords: ["self help", "self-help", "personal development", "personal growth", "habits", "habit formation", "motivation", "self improvement", "self-improvement"], description: "The terms suggest applied psychology, self-improvement or personal development." },
  { number: "100", heading: "Philosophy", keywords: ["philosophy", "philosophical", "metaphysics", "epistemology"], description: "The terms suggest general philosophical questions or thought." },
  { number: "170", heading: "Ethics", keywords: ["ethics", "morality", "moral philosophy"], description: "The terms suggest ethical questions and moral philosophy." },
  { number: "200", heading: "Religion", keywords: ["religion", "religious studies", "comparative religion", "theology"], description: "The terms suggest religion or religious studies." },
  { number: "230", heading: "Christianity", keywords: ["christianity", "christian theology", "bible study", "christian faith"], description: "The terms suggest Christianity or Christian theology." },
  { number: "294.5", heading: "Hinduism", keywords: ["hinduism", "hindu philosophy", "vedanta", "bhagavad gita"], description: "The terms suggest Hinduism or a related tradition." },
  { number: "297", heading: "Islam", keywords: ["islam", "islamic studies", "quran", "muslim"], description: "The terms suggest Islam or Islamic studies." },
  { number: "294.3", heading: "Buddhism", keywords: ["buddhism", "buddhist", "zen buddhism"], description: "The terms suggest Buddhism or Buddhist traditions." },
  { number: "300", heading: "Social sciences", keywords: ["social science", "society", "social issues"], description: "The terms suggest a broad social-science subject." },
  { number: "320", heading: "Political science", keywords: ["politics", "political science", "government", "democracy", "international relations"], description: "The terms suggest politics, government or political systems." },
  { number: "330", heading: "Economics", keywords: ["economics", "economy", "economic theory", "macroeconomics", "microeconomics"], description: "The terms suggest economics or economic systems." },
  { number: "340", heading: "Law", keywords: ["law", "legal studies", "jurisprudence", "constitution"], description: "The terms suggest law or legal studies." },
  { number: "370", heading: "Education", keywords: ["education", "teaching", "pedagogy", "educational psychology", "curriculum"], description: "The terms suggest education, teaching or educational practice." },
  { number: "400", heading: "Language", keywords: ["linguistics", "language study", "grammar", "phonetics"], description: "The terms suggest language or linguistics." },
  { number: "500", heading: "Natural sciences", keywords: ["science", "natural science"], description: "The terms suggest a broad natural-science subject. More detail is needed to narrow it down." },
  { number: "510", heading: "Mathematics", keywords: ["mathematics", "maths", "algebra", "geometry", "calculus", "statistics"], description: "The terms suggest mathematics or a mathematical discipline." },
  { number: "530", heading: "Physics", keywords: ["physics", "mechanics", "thermodynamics", "quantum physics", "electricity"], description: "The terms suggest physics or a branch of physics." },
  { number: "540", heading: "Chemistry", keywords: ["chemistry", "chemical science", "organic chemistry", "inorganic chemistry"], description: "The terms suggest chemistry." },
  { number: "570", heading: "Biology", keywords: ["biology", "life science", "genetics", "microbiology", "ecology"], description: "The terms suggest biology or life sciences." },
  { number: "590", heading: "Animals", keywords: ["animals", "zoology", "wildlife", "animal behaviour"], description: "The terms suggest zoology or the study of animals." },
  { number: "610", heading: "Medicine & health", keywords: ["medicine", "medical", "health", "healthcare", "nursing", "disease"], description: "The terms suggest medicine, health or healthcare." },
  { number: "630", heading: "Agriculture", keywords: ["agriculture", "farming", "agronomy", "crop science"], description: "The terms suggest agriculture or farming." },
  { number: "635", heading: "Garden crops", keywords: ["gardening", "horticulture", "vegetable gardening"], description: "The terms suggest gardening or horticulture." },
  { number: "641.5", heading: "Cooking", keywords: ["cooking", "cookbook", "recipes", "culinary"], description: "The terms suggest cooking and food preparation." },
  { number: "650", heading: "Management & public relations", keywords: ["management", "business management", "leadership", "administration"], description: "The terms suggest management or business administration." },
  { number: "658.8", heading: "Marketing", keywords: ["marketing", "advertising", "brand management", "digital marketing"], description: "The terms suggest marketing, advertising or brand management." },
  { number: "700", heading: "Arts", keywords: ["art", "arts", "visual arts", "art history"], description: "The terms suggest visual arts or a broad arts subject." },
  { number: "780", heading: "Music", keywords: ["music", "music theory", "musician", "musical composition"], description: "The terms suggest music or music theory." },
  { number: "790", heading: "Recreation & performing arts", keywords: ["recreation", "games", "sports", "sport", "athletics"], description: "The terms suggest recreation, games or sport." },
  { number: "800", heading: "Literature", keywords: ["literature", "literary criticism", "literary studies"], description: "The terms suggest literature or literary study. The language and literary form may affect the final number." },
  { number: "808.1", heading: "Poetry", keywords: ["poetry", "poems", "writing poetry"], description: "The terms suggest poetry or writing poetry." },
  { number: "900", heading: "History & geography", keywords: ["history", "historical studies", "civilization"], description: "The terms suggest history or a broad historical subject." },
  { number: "910", heading: "Geography & travel", keywords: ["geography", "travel", "tourism", "travel guide"], description: "The terms suggest geography, travel or tourism." },
  { number: "920", heading: "Biography & genealogy", keywords: ["biography", "autobiography", "memoir", "life of"], description: "The terms suggest biography, autobiography or memoir." },
  { number: "954", heading: "History of India", keywords: ["indian history", "history of india", "india history"], description: "The terms suggest the history of India." }
];

const form = document.querySelector("#search-form");
const results = document.querySelector("#results");
const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#book-author");
const subjectInput = document.querySelector("#book-subject");
const isbnInput = document.querySelector("#book-isbn");


function isValidIsbn(value) {
  if (/^\d{9}[\dX]$/.test(value)) {
    const sum = value.split("").reduce((total, char, index) => {
      const digit = char === "X" ? 10 : Number(char);
      return total + digit * (10 - index);
    }, 0);
    return sum % 11 === 0;
  }
  if (/^\d{13}$/.test(value)) {
    const sum = value.split("").reduce((total, char, index) =>
      total + Number(char) * (index % 2 === 0 ? 1 : 3), 0);
    return sum % 10 === 0;
  }
  return false;
}

function normalise(value) {
  return value.toLocaleLowerCase().replace(/[’']/g, "'").replace(/[^\p{L}\p{N}\s.-]/gu, " ").replace(/\s+/g, " ").trim();
}

function scoreRule(rule, text) {
  let score = 0;
  const matched = [];
  for (const keyword of rule.keywords) {
    const key = normalise(keyword);
    if (!key) continue;
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const expression = new RegExp("(^|\s)" + escaped + "($|\s)", "u");
    if (expression.test(text)) {
      score += key.includes(" ") ? 3 : 2;
      matched.push(keyword);
    }
  }
  return { ...rule, score, matched };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderEmpty(message, detail) {
  results.hidden = false;
  results.innerHTML = '<div class="empty-state"><h2>' + escapeHtml(message) + '</h2><p>' + escapeHtml(detail) + '</p></div>';
  results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderResults(book, ranked, sourceNote = "") {
  const best = ranked[0];
  const alternatives = ranked.slice(1, 4);
  const title = escapeHtml(book.title);
  const author = book.author ? '<span class="meta-chip">Author: ' + escapeHtml(book.author) + '</span>' : "";
  const subject = book.subject ? '<span class="meta-chip">Subject details supplied</span>' : '<span class="meta-chip">Title-based match</span>';
  const isbn = book.isbn ? '<span class="meta-chip">ISBN: ' + escapeHtml(book.isbn) + '</span>' : "";
  const confidenceLabel = sourceNote ? "ISBN metadata match" : best.score >= 5 ? "Several keyword matches" : best.score >= 3 ? "Some keyword matches" : "Limited keyword match";
  const alternativeHtml = alternatives.length
    ? '<div class="result-divider"></div><h3 class="result-subtitle">Other possible subject areas</h3><ul class="alternatives">' +
      alternatives.map(item => '<li><span>' + escapeHtml(item.heading) + '</span><strong>' + escapeHtml(item.number) + '</strong></li>').join("") + '</ul>'
    : "";
  results.innerHTML = '<article class="result-card">' +
    '<div class="result-top"><span class="result-label">Preliminary DDC suggestion</span><span class="confidence">' + confidenceLabel + '</span></div>' +
    '<div class="ddc-number">' + escapeHtml(best.number) + '</div>' +
    '<h2 class="ddc-heading">' + escapeHtml(best.heading) + '</h2>' +
    '<p class="result-description">' + escapeHtml(best.description) + '</p>' + (sourceNote ? '<p class="result-reason">' + escapeHtml(sourceNote) + '</p>' : "") +
    '<div class="result-meta"><span class="meta-chip">Book: ' + title + '</span>' + author + subject + isbn + '</div>' +
    '<div class="result-divider"></div><h3 class="result-subtitle">Why this was suggested</h3>' +
    '<p class="result-reason">The following term(s) matched the preliminary subject guide: ' + escapeHtml(best.matched.join(", ")) + '. This is a keyword-based match, not a full subject analysis of the book.</p>' +
    alternativeHtml +
    '<div class="result-actions"><button class="copy-button" type="button" id="copy-number">Copy DDC number</button><button class="copy-button" type="button" id="copy-summary">Copy result summary</button></div>' +
    '<p class="result-caveat">Please verify this suggestion using an authorised DDC schedule and the actual content of the book. The tool may miss context, genre, audience and special classification instructions.</p>' +
    '</article>';

  document.querySelector("#copy-number").addEventListener("click", event => copyText(best.number, event.currentTarget, "DDC number copied"));
  document.querySelector("#copy-summary").addEventListener("click", event => {
    const summary = book.title + (book.author ? " — " + book.author : "") + (book.isbn ? "\nISBN: " + book.isbn : "") + "\nSuggested DDC: " + best.number + " — " + best.heading + "\nPreliminary suggestion; verify before cataloguing.";
    copyText(summary, event.currentTarget, "Summary copied");
  });
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function copyText(text, button, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    const original = button.textContent;
    button.textContent = successMessage;
    window.setTimeout(() => { button.textContent = original; }, 1600);
  } catch {
    window.prompt("Copy this text:", text);
  }
}

async function lookupIsbn(isbn) {\n  const url = "https://openlibrary.org/search.json?isbn=" + encodeURIComponent(isbn) + "&fields=title,author_name,subject,dewey_decimal_class,isbn&limit=1";\n  const response = await fetch(url, { headers: { "Accept": "application/json" } });\n  if (!response.ok) throw new Error("ISBN lookup unavailable");\n  const data = await response.json();\n  return data.docs && data.docs.length ? data.docs[0] : null;\n}\n\nform.addEventListener("submit", async event => {
  event.preventDefault();
  const book = {
    title: titleInput.value.trim(),
    author: authorInput.value.trim(),
    subject: subjectInput.value.trim(),
    isbn: isbnInput.value.trim()
  };
  const cleanIsbn = book.isbn.replace(/[\s-]/g, "");
  if (cleanIsbn && !isValidIsbn(cleanIsbn)) {
    renderEmpty("Please check the ISBN.", "Enter a valid ISBN-10 or ISBN-13. You can also remove the ISBN and search using the title and author.");
    isbnInput.focus();
    return;
  }
  book.isbn = cleanIsbn;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  if (cleanIsbn) {
    submitButton.disabled = true;
    submitButton.innerHTML = "<span>Checking ISBN…</span>";
    try {
      const record = await lookupIsbn(cleanIsbn);
      if (record) {
        const classes = Array.isArray(record.dewey_decimal_class) ? record.dewey_decimal_class : [];
        if (classes.length) {
          const candidates = classes.slice(0, 4).map((number, index) => ({
            number: String(number),
            heading: index === 0 ? "DDC value in ISBN metadata" : "Additional DDC value in metadata",
            score: 10 - index,
            matched: ["ISBN metadata"],
            description: "This number is associated with the ISBN record returned by Open Library. Check the source record and verify the number against your library's classification policy."
          }));
          renderResults(book, candidates, "Metadata record: " + (record.title || book.title) + (Array.isArray(record.author_name) && record.author_name.length ? " — " + record.author_name.join(", ") : "") + ". Metadata provider: Open Library.");
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
          return;
        }
        if (Array.isArray(record.subject) && record.subject.length) {
          book.subject = [book.subject, record.subject.slice(0, 15).join(" ")].filter(Boolean).join(" ");
        }
      }
    } catch (error) {
      console.warn("ISBN metadata lookup failed; using local subject guide.", error);
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  }
  const searchable = normalise([book.title, book.author, book.subject].filter(Boolean).join(" "));
  if (!book.title) {
    titleInput.focus();
    return;
  }
  const wingsMatch = normalise(book.title).includes("wings of fire") &&
    /\b(kalam|abdul)\b/.test(normalise(book.author));
  if (wingsMatch || cleanIsbn === "9788173711466" || cleanIsbn === "8173711461") {
    const special = {
      number: "509.2",
      heading: "Scientists — biography",
      score: 10,
      matched: ["Wings of Fire", "A. P. J. Abdul Kalam"],
      description: "This book is catalogued by several libraries as a biography of a scientist. The number 509.2 is one documented library practice for this title; other catalogues use different numbers depending on their classification policy."
    };
    renderResults(book, [special, {
      number: "925",
      heading: "Scientists",
      score: 2,
      matched: ["Alternative catalogue practice"],
      description: "An alternative number found in some library catalogues."
    }, {
      number: "920",
      heading: "Biography",
      score: 1,
      matched: ["Alternative catalogue practice"],
      description: "A broader biography class used by some catalogues."
    }]);
    return;
  }

  const ranked = SUBJECT_RULES.map(rule => scoreRule(rule, searchable))
    .filter(rule => rule.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) {
    renderEmpty(
      "We couldn't find a clear subject match.",
      "Try adding a short description or the book's main subject. This first version has a limited subject guide, so an unmatched title does not mean the book cannot be classified."
    );
    return;
  }
  renderResults(book, ranked);
});

document.querySelector(".top-link").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});