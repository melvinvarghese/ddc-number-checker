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
  { number: "954", heading: "History of India", keywords: ["indian history", "history of india", "india history"], description: "The terms suggest the history of India." },
  { number: "023", heading: "Library operations", keywords: ["library operations", "library administration", "library planning", "library finance"], description: "The terms suggest the administration and operation of libraries." },
  { number: "025.1", heading: "Library administration", keywords: ["library administration", "library management", "library policy", "library planning"], description: "The terms suggest management and administration of library services." },
  { number: "025.3", heading: "Cataloguing & classification", keywords: ["descriptive cataloguing", "subject cataloguing", "bibliographic description", "authority control", "cataloguing rules", "cataloging rules"], description: "The terms suggest the organisation and description of library materials." },
  { number: "025.4", heading: "Subject analysis & classification", keywords: ["subject classification", "knowledge organization", "knowledge organisation", "subject indexing", "indexing languages"], description: "The terms suggest subject analysis, indexing or classification systems." },
  { number: "025.5", heading: "Library reference services", keywords: ["reference services", "reference work", "information services", "reader advisory"], description: "The terms suggest reference and information services in libraries." },
  { number: "025.6", heading: "Circulation & access services", keywords: ["library circulation", "library lending", "interlibrary loan", "document delivery"], description: "The terms suggest lending, circulation or access services." },
  { number: "025.8", heading: "Library materials preservation", keywords: ["library preservation", "book preservation", "book conservation", "document preservation", "archival preservation"], description: "The terms suggest preservation and conservation of library materials." },
  { number: "027", heading: "General libraries", keywords: ["public libraries", "academic libraries", "college libraries", "school libraries", "special libraries", "university libraries"], description: "The terms suggest a type of library or library service setting." },
  { number: "028", heading: "Reading & use of information", keywords: ["reading habits", "reading promotion", "reading skills", "information literacy", "media literacy"], description: "The terms suggest reading, information use or information literacy." },
  { number: "005.74", heading: "Databases", keywords: ["database", "databases", "database management", "sql", "relational database"], description: "The terms suggest database design or management." },
  { number: "005.8", heading: "Computer security", keywords: ["cybersecurity", "cyber security", "computer security", "information security", "network security", "data privacy"], description: "The terms suggest computer, network or information security." },
  { number: "006.7", heading: "Web design & development", keywords: ["web development", "web design", "html", "css", "website development"], description: "The terms suggest creating and developing websites." },
  { number: "150.19", heading: "Psychological schools & systems", keywords: ["psychoanalysis", "behaviourism", "behaviorism", "cognitive science"], description: "The terms suggest a school or theoretical system in psychology." },
  { number: "155.2", heading: "Individual psychology", keywords: ["personality", "personality psychology", "individual differences"], description: "The terms suggest personality and individual psychological differences." },
  { number: "155.4", heading: "Child psychology", keywords: ["child psychology", "child development", "developmental psychology", "early childhood development"], description: "The terms suggest psychological development during childhood." },
  { number: "155.5", heading: "Adolescent psychology", keywords: ["adolescent psychology", "teenage psychology", "adolescent development"], description: "The terms suggest psychological development during adolescence." },
  { number: "158.2", heading: "Interpersonal relations", keywords: ["interpersonal relationships", "communication skills", "conflict resolution", "friendship"], description: "The terms suggest personal relationships and interpersonal skills." },
  { number: "158.3", heading: "Counselling", keywords: ["counselling", "counseling", "guidance", "psychotherapy"], description: "The terms suggest counselling or guidance. Clinical works may require a more specific class." },
  { number: "158.7", heading: "Industrial & organisational psychology", keywords: ["industrial psychology", "organizational psychology", "organisational psychology", "workplace psychology"], description: "The terms suggest psychological aspects of work and organisations." },
  { number: "305", heading: "Social groups", keywords: ["social groups", "gender studies", "men's studies", "women's studies", "identity studies"], description: "The terms suggest the study of social groups and identity." },
  { number: "306", heading: "Culture & institutions", keywords: ["culture", "cultural studies", "customs", "popular culture", "social institutions"], description: "The terms suggest culture, customs or social institutions." },
  { number: "324", heading: "Political processes", keywords: ["elections", "voting", "political campaigns", "political parties"], description: "The terms suggest elections and political processes." },
  { number: "327", heading: "International relations", keywords: ["foreign policy", "diplomacy", "international security", "international politics"], description: "The terms suggest relations between states and international affairs." },
  { number: "338", heading: "Production & economics", keywords: ["economic development", "industrial economics", "economic growth", "development economics"], description: "The terms suggest economic development or production." },
  { number: "341", heading: "International law", keywords: ["international law", "humanitarian law", "law of nations"], description: "The terms suggest international law." },
  { number: "345", heading: "Criminal law", keywords: ["criminal law", "criminal justice", "penal law"], description: "The terms suggest criminal law and justice." },
  { number: "362", heading: "Social problems & services", keywords: ["social work", "social welfare", "child welfare", "community services"], description: "The terms suggest social welfare, social work or community services." },
  { number: "363", heading: "Other social problems", keywords: ["environmental policy", "pollution", "public safety", "disaster management"], description: "The terms suggest public social problems, safety or environmental policy." },
  { number: "371", heading: "Schools & teaching", keywords: ["school education", "classroom teaching", "inclusive education", "special education", "teacher training"], description: "The terms suggest school education, teaching or special education." },
  { number: "372", heading: "Primary education", keywords: ["primary education", "elementary education", "primary school teaching"], description: "The terms suggest primary or elementary education." },
  { number: "378", heading: "Higher education", keywords: ["higher education", "university education", "college education", "higher educational institutions"], description: "The terms suggest colleges, universities or higher education." },
  { number: "410", heading: "Linguistics", keywords: ["linguistics", "historical linguistics", "sociolinguistics", "applied linguistics"], description: "The terms suggest the scientific study of language." },
  { number: "420", heading: "English language", keywords: ["english grammar", "english language", "english vocabulary", "english linguistics"], description: "The terms suggest the English language. Literature in English belongs to a different area." },
  { number: "519.5", heading: "Statistical mathematics", keywords: ["statistics", "statistical analysis", "probability theory", "regression analysis"], description: "The terms suggest statistical methods or probability." },
  { number: "550", heading: "Earth sciences", keywords: ["geology", "earth science", "geophysics", "mineralogy"], description: "The terms suggest geology or the study of the Earth." },
  { number: "560", heading: "Paleontology", keywords: ["paleontology", "palaeontology", "fossils", "prehistoric life"], description: "The terms suggest fossils and prehistoric life." },
  { number: "580", heading: "Plants", keywords: ["botany", "plant science", "plant biology", "plants"], description: "The terms suggest botany or the study of plants." },
  { number: "612", heading: "Human physiology", keywords: ["human physiology", "anatomy and physiology", "human anatomy"], description: "The terms suggest the structure or functioning of the human body." },
  { number: "615", heading: "Pharmacology & therapeutics", keywords: ["pharmacology", "pharmacy", "drug therapy", "medicinal drugs"], description: "The terms suggest medicines, pharmacology or therapeutic use of drugs." },
  { number: "641", heading: "Food & drink", keywords: ["food science", "nutrition", "food and nutrition", "food studies"], description: "The terms suggest food, nutrition or food science." },
  { number: "658.4", heading: "Executive management", keywords: ["strategic management", "project management", "operations management", "quality management"], description: "The terms suggest organisational strategy, operations or executive management." },
  { number: "658.4", heading: "Human resources", keywords: ["human resource management", "personnel management", "talent management", "recruitment"], description: "The terms suggest managing people and staffing in organisations." },
  { number: "741.5", heading: "Comics & graphic novels", keywords: ["comics", "comic books", "graphic novels", "manga"], description: "The terms suggest comics or graphic storytelling; fiction and national-literature treatment may vary." },
  { number: "746", heading: "Textile arts & crafts", keywords: ["embroidery", "weaving", "knitting", "textile crafts", "sewing"], description: "The terms suggest textile-based arts and crafts." },
  { number: "791.4", heading: "Motion pictures & television", keywords: ["cinema", "film studies", "movie history", "television studies", "filmmaking"], description: "The terms suggest film, cinema or television." },
  { number: "808", heading: "Rhetoric & writing", keywords: ["creative writing", "writing skills", "essay writing", "rhetoric"], description: "The terms suggest writing, composition or rhetoric." },
  { number: "823", heading: "English fiction", keywords: ["english fiction", "british fiction", "english novels"], description: "The terms may suggest English-language fiction; use the appropriate literary period and local practice." },
  { number: "894.812", heading: "Malayalam literature", keywords: ["malayalam literature", "literature in malayalam", "malayalam literary works"], description: "The terms suggest Malayalam literature. Narrow this by literary form where possible; catalogues may apply additional subdivisions." },
  { number: "894.8123", heading: "Malayalam fiction", keywords: ["malayalam fiction", "malayalam novel", "malayalam novels", "malayalam short stories", "malayalam short story"], description: "The terms suggest Malayalam fiction. A Kerala University catalogue uses 894.8123 for Aadujeevitham; verify the edition and local practice." },
  { number: "894.812092", heading: "Malayalam autobiography & biography", keywords: ["malayalam autobiography", "malayalam biography", "autobiography in malayalam", "biography in malayalam"], description: "The terms suggest biography or autobiography treated with Malayalam literature. A Sree Sankaracharya University catalogue uses 894.812 092 for Ente Katha; local cataloguing practice can differ." },
  { number: "894.8121", heading: "Malayalam poetry", keywords: ["malayalam poetry", "malayalam poems", "poems in malayalam"], description: "The terms suggest Malayalam poetry. Confirm the detailed subdivision against your authorised DDC edition." },
  { number: "894.8122", heading: "Malayalam drama", keywords: ["malayalam drama", "malayalam plays", "plays in malayalam"], description: "The terms suggest Malayalam drama. Confirm the detailed subdivision against your authorised DDC edition." },
  { number: "894.8124", heading: "Malayalam essays", keywords: ["malayalam essays", "essays in malayalam"], description: "The terms suggest essays in Malayalam. Confirm the detailed subdivision against your authorised DDC edition." },
  { number: "940", heading: "History of Europe", keywords: ["european history", "history of europe", "world war one", "world war two", "second world war"], description: "The terms suggest European history or major events in European history." },
  { number: "950", heading: "History of Asia", keywords: ["asian history", "history of asia", "east asian history"], description: "The terms suggest the history of Asia; use a more specific regional class when possible." },
  { number: "954.83", heading: "History of Kerala", keywords: ["kerala history", "history of kerala", "travancore history", "cochin history"], description: "The terms suggest the history of Kerala or its historical regions; verify the subdivision used by your library." }
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
    const expression = new RegExp("(^|\\s)" + escaped + "($|\\s)", "u");
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

async function lookupIsbn(isbn) {
  const url = "https://openlibrary.org/search.json?isbn=" + encodeURIComponent(isbn) + "&fields=title,author_name,subject,dewey_decimal_class,isbn&limit=1";
  const response = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!response.ok) throw new Error("ISBN lookup unavailable");
  const data = await response.json();
  return data.docs && data.docs.length ? data.docs[0] : null;
}

async function lookupGoogleBooks(isbn) {
  const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + encodeURIComponent(isbn) + "&maxResults=1";
  const response = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!response.ok) throw new Error("Google Books lookup unavailable");
  const data = await response.json();
  const info = data.items && data.items.length ? data.items[0].volumeInfo : null;
  if (!info) return null;
  return {
    title: info.title || "",
    author_name: Array.isArray(info.authors) ? info.authors : [],
    subject: Array.isArray(info.categories) ? info.categories : []
  };
}

form.addEventListener("submit", async event => {
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
      let record = await lookupIsbn(cleanIsbn);
      if (!record || !(Array.isArray(record.subject) && record.subject.length)) {
        try {
          const googleRecord = await lookupGoogleBooks(cleanIsbn);
          if (googleRecord) {
            record = {
              ...(record || {}),
              title: (record && record.title) || googleRecord.title,
              author_name: (record && record.author_name) || googleRecord.author_name,
              subject: [...((record && record.subject) || []), ...googleRecord.subject]
            };
          }
        } catch (googleError) {
          console.warn("Google Books metadata lookup unavailable.", googleError);
        }
      }
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
  const agnichirakukalMatch = normalise(book.title).includes("agnichirakukal") &&
    /\b(kalam|abdul)\b/.test(normalise(book.author));
  if (agnichirakukalMatch) {
    renderResults(book, [{
      number: "894.81296",
      heading: "Malayalam literature — catalogue-specific classification",
      score: 10,
      matched: ["Agnichirakukal", "A. P. J. Abdul Kalam"],
      description: "The KILA Headquarters Library catalogue assigns 894.81296 to its record for this Malayalam edition. Treat this as a documented local catalogue example, not a universal rule for Malayalam biographies or translations."
    }], "Catalogue evidence: KILA Headquarters Library. Check the exact edition and your library's policy.");
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
    }, {
      number: "954.0531092",
      heading: "Indian history — biography",
      score: 1,
      matched: ["Kerala State Central Library catalogue"],
      description: "A more specific number used by the Kerala State Central Library catalogue for its record of this title."
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

document.querySelector('.top-link[href="#about"]').addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});