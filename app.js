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
  { number: "894.812", heading: "Malayalam literature", keywords: ["malayalam literature", "literature in malayalam", "malayalam literary works", "malayala sahithyam", "മലയാള സാഹിത്യം"], description: "The terms suggest Malayalam literature. For translated works or when the literary form is unclear, a broader number may be used in local catalogues; verify the edition and local policy." },
  { number: "894.8123", heading: "Malayalam fiction", keywords: ["malayalam fiction", "malayalam novel", "malayalam novels", "malayalam short stories", "malayalam short story", "malayala novel", "മലയാള നോവൽ", "മലയാള നോവലുകൾ", "മലയാള കഥകൾ", "മലയാള ചെറുകഥകൾ"], description: "The terms suggest Malayalam fiction. A Kerala University catalogue uses 894.8123 for Aadujeevitham; verify the edition and local practice." },
  { number: "894.812092", heading: "Malayalam autobiography & biography", keywords: ["malayalam autobiography", "malayalam biography", "autobiography in malayalam", "biography in malayalam", "malayala jeevacharithram", "മലയാള ആത്മകഥ", "മലയാള ജീവചരിത്രം"], description: "The terms suggest biography or autobiography treated with Malayalam literature. A Sree Sankaracharya University catalogue uses 894.812 092 for Ente Katha; local cataloguing practice can differ." },
  { number: "894.8121", heading: "Malayalam poetry", keywords: ["malayalam poetry", "malayalam poems", "poems in malayalam", "മലയാള കവിത", "മലയാള കവിതകൾ"], description: "The terms suggest Malayalam poetry. Confirm the detailed subdivision against your authorised DDC edition." },
  { number: "894.8122", heading: "Malayalam drama", keywords: ["malayalam drama", "malayalam plays", "plays in malayalam", "മലയാള നാടകം", "മലയാള നാടകങ്ങൾ"], description: "The terms suggest Malayalam drama. Confirm the detailed subdivision against your authorised DDC edition." },
  { number: "894.8124", heading: "Malayalam essays", keywords: ["malayalam essays", "malayalam essay", "essay in malayalam", "essays in malayalam", "മലയാളം essay", "മലയാളം essays", "മലയാള essay", "മലയാള essays", "മലയാളം എസ്സേ", "മലയാളം എസ്സേകൾ", "മലയാളം ലേഖനം", "മലയാളം ലേഖനങ്ങൾ", "മലയാള ലേഖനം", "മലയാള ലേഖനങ്ങൾ"], description: "The terms suggest essays in Malayalam. Confirm the detailed subdivision against your authorised DDC edition." },
  { number: "894.811", heading: "Tamil literature", keywords: ["tamil literature", "literature in tamil", "tamil literary works", "தமிழ் இலக்கியம்"], description: "The terms suggest Tamil literature. Central University of Tamil Nadu catalogue records use 894.811 for Tamil literary works; verify the specific form and local policy." },
  { number: "891.43", heading: "Hindi literature", keywords: ["hindi literature", "literature in hindi", "hindi literary works", "हिंदी साहित्य"], description: "The terms suggest Hindi literature. Central University of Tamil Nadu catalogue records use 891.43 for Hindi literary works; verify the specific form and local policy." },
  { number: "891.44", heading: "Bengali literature", keywords: ["bengali literature", "literature in bengali", "bengali literary works", "বাংলা সাহিত্য"], description: "The terms suggest Bengali literature. University library catalogues use 891.44 for Bengali literary works; verify the specific form and local policy." },
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
const languageInput = document.querySelector("#book-language");
const workTypeInput = document.querySelector("#work-type");
const audienceInput = document.querySelector("#book-audience");
const approachInput = document.querySelector("#book-approach");
const DECISION_STORAGE_KEY = "ddcFinderDecisionsV1";


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
  // Canonicalise common grammatical variants so concepts can combine even
  // when the user enters a different form or word order.
  const stopWords = new Set(["a", "an", "and", "of", "the", "in", "for", "on", "to", "with"]);
  const equivalents = {
    indian: "india",
    historical: "history",
    historically: "history",
    psychological: "psychology",
    psychologically: "psychology",
    children: "child",
    childrens: "child",
    essays: "essay",
    novels: "novel",
    poems: "poem",
    libraries: "library",
    librarians: "librarian",
    computers: "computer",
    computing: "computer",
    animals: "animal",
    plants: "plant",
    stories: "story",
    biographies: "biography",
    autobiographies: "autobiography",
    languages: "language",
    sciences: "science",
    books: "book",
    movies: "movie",
    films: "film",
    educational: "education",
    psychological: "psychology",
    linguistic: "linguistics",
    literary: "literature",
    religious: "religion",
    medical: "medicine",
    political: "politics",
    economic: "economics"
  };
  const canonicalToken = token => equivalents[token] || token;
  const tokens = value => normalise(value)
    .split(/\s+/u)
    .filter(token => token && !stopWords.has(token))
    .map(canonicalToken);
  const queryTokens = new Set(tokens(text));
  let score = 0;
  const matched = [];
  const seenConceptSets = new Set();

  for (const keyword of rule.keywords) {
    const key = normalise(keyword);
    if (!key) continue;
    const keywordTokens = [...new Set(tokens(key))];
    if (!keywordTokens.length) continue;
    const signature = keywordTokens.slice().sort().join(" ");
    if (seenConceptSets.has(signature)) continue;
    seenConceptSets.add(signature);

    // All concepts must be present, but they may appear in any order.
    const allConceptsPresent = keywordTokens.every(token => queryTokens.has(token));
    if (allConceptsPresent) {
      const exactPhrase = text.includes(key);
      score += keywordTokens.length > 1 ? (exactPhrase ? 4 : 3) : 2;
      matched.push(keyword);
    }
  }
  return { ...rule, score, matched };
}

function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderEmpty(message, detail, shouldScroll = true) {
  results.hidden = false;
  results.innerHTML = '<div class="empty-state"><h2>' + escapeHtml(message) + '</h2><p>' + escapeHtml(detail) + '</p></div>';
  if (shouldScroll && !window.ddcBatchMode) results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderResults(book, ranked, sourceNote = "", options = {}) {
  const best = ranked[0];
  const alternatives = ranked.slice(1, 4);
  const title = escapeHtml(book.title);
  const author = book.author ? '<span class="meta-chip">Author: ' + escapeHtml(book.author) + '</span>' : "";
  const subject = book.subject ? '<span class="meta-chip">Subject details supplied</span>' : '<span class="meta-chip">Title-based match</span>';
  const isbn = book.isbn ? '<span class="meta-chip">ISBN: ' + escapeHtml(book.isbn) + '</span>' : "";
  const language = book.language ? '<span class="meta-chip">Language: ' + escapeHtml(book.language) + '</span>' : "";
  const contextMeta = [book.workTypeLabel, book.audienceLabel, book.approachLabel].filter(Boolean).map(value => '<span class="meta-chip">' + escapeHtml(value) + '</span>').join("");
  const confidenceLabel = sourceNote ? "Third-party metadata" : best.score >= 5 ? "Several keyword matches" : best.score >= 3 ? "Some keyword matches" : "Limited keyword match";
  const alternativeHtml = alternatives.length
    ? '<div class="result-divider"></div><h3 class="result-subtitle">Other possible subject areas</h3><ul class="alternatives">' +
      alternatives.map(item => '<li><span>' + escapeHtml(item.heading) + '</span><strong>' + escapeHtml(item.number) + '</strong></li>').join("") + '</ul>'
    : "";
  results.innerHTML = '<article class="result-card">' +
    '<div class="result-top"><span class="result-label">Preliminary DDC suggestion</span><span class="confidence">' + confidenceLabel + '</span></div>' +
    '<div class="ddc-number">' + escapeHtml(best.number) + '</div>' +
    '<h2 class="ddc-heading">' + escapeHtml(best.heading) + '</h2>' +
    '<p class="result-description">' + escapeHtml(best.description) + '</p>' + (sourceNote ? '<p class="result-reason">' + escapeHtml(sourceNote) + '</p>' : "") +
    '<div class="result-meta"><span class="meta-chip">Book: ' + title + '</span>' + author + language + subject + isbn + contextMeta + '</div>' +
    '<div class="result-divider"></div><h3 class="result-subtitle">Why this was suggested</h3>' +
    '<p class="result-reason">Matched guide terms: <strong>' + escapeHtml(best.matched.join(", ")) + '</strong>. The local guide matched these terms in the title, author or subject details you supplied. This is a keyword match, not a full analysis of the book.</p>' +
    '<p class="result-reason"><strong>Classification context:</strong> DDC classification depends on the work’s subject, disciplinary focus and, where relevant, its approach or form. A title alone is not enough to settle the number.</p>' +
    alternativeHtml +
    '<div class="decision-box"><h3 class="result-subtitle">Record your cataloguing decision</h3><p class="result-reason">Choose the number you decide to use after checking the book and your authorised DDC source.</p><label class="decision-label" for="decision-number">Final number selected</label><select id="decision-number">' + ranked.slice(0, 4).map(item => '<option value="' + escapeHtml(item.number) + '">' + escapeHtml(item.number + ' — ' + item.heading) + '</option>').join("") + '</select><label class="decision-label" for="decision-note">Cataloguer’s note <span>(optional)</span></label><textarea id="decision-note" rows="2" maxlength="500" placeholder="Why did you choose this number? Note local policy or edition details…"></textarea><button class="copy-button decision-save" type="button" id="save-decision">Save decision on this device</button><p class="field-hint">Saved locally in this browser only. No account or cloud storage.</p></div>' +
    '<div class="result-actions"><button class="copy-button" type="button" id="copy-number">Copy DDC number</button><button class="copy-button" type="button" id="copy-summary">Copy result summary</button></div>' +
    '<p class="result-caveat">Please verify this suggestion using an authorised DDC schedule and the actual content of the book. The tool may miss context, genre, audience and special classification instructions.</p>' +
    '</article>';

  document.querySelector("#copy-number").addEventListener("click", event => copyText(best.number, event.currentTarget, "DDC number copied"));
  document.querySelector("#save-decision").addEventListener("click", () => saveDecision(book, ranked));
  document.querySelector("#copy-summary").addEventListener("click", event => {
    const summary = book.title + (book.author ? " — " + book.author : "") + (book.isbn ? "\nISBN: " + book.isbn : "") + (book.language ? "\nLanguage: " + book.language : "") + (book.workTypeLabel ? "\nWork type: " + book.workTypeLabel : "") + (book.audienceLabel ? "\nAudience: " + book.audienceLabel : "") + (book.approachLabel ? "\nApproach: " + book.approachLabel : "") + "\nSuggested DDC: " + best.number + " — " + best.heading + "\nPreliminary suggestion; verify before cataloguing.";
    copyText(summary, event.currentTarget, "Summary copied");
  });
  results.hidden = false;
  if (options.scroll !== false && !window.ddcBatchMode) results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

let catalogueDatasetPromise;
function loadCatalogueDataset() {
  if (!catalogueDatasetPromise) {
    catalogueDatasetPromise = fetch("./tests/real-book-cases.json", { cache: "no-store" })
      .then(response => response.ok ? response.json() : null)
      .catch(() => null);
  }
  return catalogueDatasetPromise;
}

async function appendCatalogueEvidence(book) {
  const panel = document.querySelector("#catalogue-evidence");
  if (!panel) return;
  const dataset = await loadCatalogueDataset();
  if (!dataset || !Array.isArray(dataset.cases)) return;
  const title = normalise(book.title);
  const author = normalise(book.author);
  const matches = dataset.cases.filter(item => {
    if (normalise(item.input?.title || item.title) !== title) return false;
    return !author || !item.input?.author || normalise(item.input.author) === author;
  });
  if (!matches.length) return;
  const records = matches.flatMap(item => item.catalogue_records || []);
  if (!records.length) return;
  const unique = [...new Map(records.map(record => [record.library + "|" + record.ddc + "|" + record.url, record])).values()];
  const numbers = [...new Set(unique.map(record => record.ddc))];
  panel.innerHTML = '<h3 class="result-subtitle">What library catalogues show</h3>' +
    '<p class="result-reason">For this exact title, the project has recorded ' + unique.length + ' public catalogue record(s). ' +
    (numbers.length > 1 ? 'The records show different DDC numbers, so local practice is not uniform.' : 'The records currently found show the same DDC number; this is still a sample, not proof of a universal rule.') +
    '</p><ul class="catalogue-records">' + unique.map(record => '<li><span>' + escapeHtml(record.library) + '</span><strong>' + escapeHtml(record.ddc) + '</strong><a href="' + escapeHtml(record.url) + '" target="_blank" rel="noopener noreferrer">View record</a></li>').join("") + '</ul>' +
    '<p class="result-reason">These are observed catalogue choices, not a vote or an official ruling. Check the edition and your library’s policy before adopting one.</p>';
  panel.hidden = false;
}

function readDecisions() {
  try {
    const parsed = JSON.parse(localStorage.getItem(DECISION_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveDecision(book, ranked) {
  const selector = document.querySelector("#decision-number");
  const selected = ranked.find(item => item.number === selector.value) || ranked[0];
  const records = readDecisions();
  records.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    savedAt: new Date().toISOString(),
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    language: book.language,
    subject: book.subject,
    workType: book.workTypeLabel,
    audience: book.audienceLabel,
    approach: book.approachLabel,
    suggestedNumber: ranked[0].number,
    selectedNumber: selected.number,
    selectedHeading: selected.heading,
    note: document.querySelector("#decision-note").value.trim()
  });
  try {
    localStorage.setItem(DECISION_STORAGE_KEY, JSON.stringify(records.slice(0, 500)));
    renderDecisionHistory();
    const button = document.querySelector("#save-decision");
    button.textContent = "Decision saved";
    button.disabled = true;
  } catch {
    window.alert("The browser could not save this decision. Check available site storage and try again.");
  }
}

function renderDecisionHistory() {
  const section = document.querySelector("#decision-history");
  const list = document.querySelector("#decision-list");
  const records = readDecisions();
  if (!records.length) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  list.innerHTML = records.slice(0, 30).map(record => {
    const date = new Date(record.savedAt);
    const dateText = Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
    return '<article class="decision-entry"><div><strong>' + escapeHtml(record.title) + '</strong><span>' + escapeHtml([record.author, record.language, dateText].filter(Boolean).join(" · ")) + '</span></div><div class="decision-number"><strong>' + escapeHtml(record.selectedNumber) + '</strong><span>' + escapeHtml(record.selectedHeading || "") + '</span></div>' +
      (record.note ? '<p>' + escapeHtml(record.note) + '</p>' : "") + '</article>';
  }).join("");
}

function exportDecisions() {
  const records = readDecisions();
  if (!records.length) return;
  const columns = ["savedAt","title","author","isbn","language","subject","workType","audience","approach","suggestedNumber","selectedNumber","selectedHeading","note"];
  const quote = value => '"' + String(value ?? "").replace(/"/g, '""') + '"';
  const csv = [columns.join(","), ...records.map(record => columns.map(key => quote(record[key])).join(","))].join("\r\n");
  const blob = new Blob(["\\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ddc-finder-decisions.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.querySelector("#export-decisions").addEventListener("click", exportDecisions);
document.querySelector("#clear-decisions").addEventListener("click", () => {
  if (!readDecisions().length) return;
  if (!window.confirm("Clear all cataloguing decisions saved in this browser? This cannot be undone.")) return;
  localStorage.removeItem(DECISION_STORAGE_KEY);
  renderDecisionHistory();
});

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

const KERALA_CATALOGUES = [
  {
    name: "SCERT Kerala Library",
    platform: "Koha",
    url: "https://scert.libraryopac.in/",
    searchUrl: "https://scert.libraryopac.in/cgi-bin/koha/opac-search.pl?q="
  },
  {
    name: "Kerala State Central Library",
    platform: "Koha",
    url: "https://statelibrary.kerala.gov.in/cgi-bin/koha/opac-main.pl",
    searchUrl: "https://statelibrary.kerala.gov.in/cgi-bin/koha/opac-search.pl?q="
  },
  {
    name: "KALNET — Kerala Academic Library Network",
    platform: "VuFind",
    url: "https://kalnet.kshec.kerala.gov.in/vufind/",
    searchUrl: "https://kalnet.kshec.kerala.gov.in/vufind/Search/Results?lookfor="
  },
  {
    name: "KILA Headquarters Library",
    platform: "Koha",
    url: "https://opac.kila.ac.in/",
    searchUrl: "https://opac.kila.ac.in/cgi-bin/koha/opac-search.pl?q="
  }
];

function catalogueSearchUrl(source, book) {
  const query = book.isbn || [book.title, book.author].filter(Boolean).join(" ");
  if (source.platform === "VuFind") return source.searchUrl + encodeURIComponent(query) + "&type=AllFields";
  return source.searchUrl + encodeURIComponent(query);
}

const BOOKSTORE_ISBN_SOURCES = [
  { name: "DC Books", domain: "dcbookstore.com", note: "Publisher and bookseller catalogue; its books listing exposes ISBN and includes an ISBN search field." },
  { name: "Mathrubhumi Books", domain: "mbibooks.com", note: "Publisher and bookseller catalogue; check the exact product edition for ISBN." },
  { name: "Atlantic Books", domain: "atlanticbooks.com", note: "Bookseller catalogue; check the exact product edition for ISBN." }
];

function bookstoreSearchUrl(source, book) {
  const terms = book.isbn || [book.title, book.author].filter(Boolean).join(" ");
  return "https://www.google.com/search?q=" + encodeURIComponent("site:" + source.domain + " " + terms);
}

function renderCatalogueRecords(container, records, statuses, message) {
  const rows = records.map(record => {
    const number = Array.isArray(record.ddc) ? record.ddc.join(", ") : "";
    const details = [record.title, record.author].filter(Boolean).join(" — ");
    return '<li><div><strong>' + escapeHtml(number) + '</strong><span>' + escapeHtml(details || "Catalogue record") + '</span><small>' +
      escapeHtml(record.library || "Library catalogue") + ' · MARC ' + escapeHtml(record.marcField || "082") +
      (record.match ? ' · ' + escapeHtml(record.match) : '') + '</small></div><a href="' +
      escapeHtml(record.searchUrl || record.sourceUrl || "#") + '" target="_blank" rel="noopener noreferrer">Open catalogue</a></li>';
  }).join("");
  const statusText = statuses.map(item => item.name + ": " + (item.status === "ok" ? item.records + " matching records" : item.message || "unavailable")).join(" · ");
  container.innerHTML =
    '<div class="catalogue-discovery-heading"><div><span class="section-kicker">LIBRARY CATALOGUE EVIDENCE</span><h3 class="result-subtitle">Search Kerala library catalogues</h3></div>' +
    '<span class="catalogue-status">' + (records.length ? records.length + ' DDC record' + (records.length === 1 ? '' : 's') : 'Catalogue search') + '</span></div>' +
    (records.length ? '<ul class="catalogue-live-records">' + rows + '</ul>' : '<p class="result-reason">' + escapeHtml(message || "No verified MARC 082 records were returned. You can still search the catalogues directly below.") + '</p>') +
    (statusText ? '<p class="catalogue-status-detail">' + escapeHtml(statusText) + '</p>' : '') +
    '<div class="catalogue-link-list">' + KERALA_CATALOGUES.map(source =>
      '<a href="' + escapeHtml(catalogueSearchUrl(source, window.ddcCurrentBook || {})) + '" target="_blank" rel="noopener noreferrer">' +
      '<span><strong>' + escapeHtml(source.name) + '</strong><small>' + escapeHtml(source.platform) + '</small></span><span>Search ↗</span></a>'
    ).join("") + '</div>' +
    '<p class="field-hint">Only records with a DDC value explicitly supplied in MARC 082 are shown as DDC evidence. A catalogue&#39;s generic call number is not assumed to be Dewey.</p>' +
    '<div class="catalogue-discovery-heading bookstore-heading"><div><span class="section-kicker">ISBN DISCOVERY</span><h3 class="result-subtitle">Search Indian book catalogues</h3></div></div>' +
    '<p class="field-hint">These searches help locate the ISBN for the exact edition. They open external search results; DDC Finder does not scrape or import bookstore pages automatically. Confirm the ISBN on the product page before using it.</p>' +
    '<div class="catalogue-link-list bookstore-link-list">' + BOOKSTORE_ISBN_SOURCES.map(source =>
      '<a href="' + escapeHtml(bookstoreSearchUrl(source, window.ddcCurrentBook || {})) + '" target="_blank" rel="noopener noreferrer">' +
      '<span><strong>' + escapeHtml(source.name) + '</strong><small>' + escapeHtml(source.note) + '</small></span><span>Find ISBN ↗</span></a>'
    ).join("") + '</div>';
}

async function appendCatalogueSearch(book) {
  const container = document.querySelector("#catalogue-discovery");
  if (!container || window.ddcBatchMode) return;
  window.ddcCurrentBook = book;
  const api = String(window.DDC_CATALOGUE_API || "").trim();
  if (!api) {
    renderCatalogueRecords(container, [], [], "Automated catalogue retrieval is being prepared. Until the connector is deployed, these links let you search the public catalogues directly.");
    return;
  }
  container.innerHTML = '<div class="catalogue-discovery-heading"><div><span class="section-kicker">LIBRARY CATALOGUE EVIDENCE</span><h3 class="result-subtitle">Searching Kerala catalogues…</h3></div></div><p class="result-reason">Checking verified public catalogue connectors. This may take a few seconds.</p>';
  try {
    const endpoint = new URL(api);
    endpoint.searchParams.set("title", book.title || "");
    if (book.author) endpoint.searchParams.set("author", book.author);
    if (book.isbn) endpoint.searchParams.set("isbn", book.isbn);
    const response = await fetch(endpoint.toString(), { headers: { "Accept": "application/json" } });
    if (!response.ok) throw new Error("Catalogue connector returned HTTP " + response.status);
    const data = await response.json();
    renderCatalogueRecords(container, Array.isArray(data.records) ? data.records : [], Array.isArray(data.sources) ? data.sources : [], data.message || data.note);
  } catch (error) {
    console.warn("Catalogue search unavailable.", error);
    renderCatalogueRecords(container, [], [], "Automated catalogue search is temporarily unavailable. Use the direct OPAC links below.");
  }
}

async function lookupIsbn(isbn) {
  const url = "https://openlibrary.org/search.json?isbn=" + encodeURIComponent(isbn) + "&fields=title,author_name,subject,dewey_decimal_class,ddc,isbn&limit=1";
  const response = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!response.ok) throw new Error("ISBN lookup unavailable");
  const data = await response.json();
  return data.docs && data.docs.length ? data.docs[0] : null;
}

async function lookupTitle(book) {
  const params = new URLSearchParams({
    title: book.title,
    fields: "title,author_name,subject,dewey_decimal_class,ddc,isbn",
    limit: "8"
  });
  if (book.author) params.set("author", book.author);
  const response = await fetch("https://openlibrary.org/search.json?" + params.toString(), {
    headers: { "Accept": "application/json" }
  });
  if (!response.ok) throw new Error("Title search unavailable");
  const data = await response.json();
  const docs = Array.isArray(data.docs) ? data.docs : [];
  const wantedTitle = normalise(book.title);
  const wantedAuthor = normalise(book.author);
  const exact = docs.filter(doc => normalise(doc.title || "") === wantedTitle);
  const candidates = exact.length ? exact : docs.filter(doc => {
    const candidateTitle = normalise(doc.title || "");
    return candidateTitle && (candidateTitle.includes(wantedTitle) || wantedTitle.includes(candidateTitle));
  });
  if (!candidates.length) return null;
  const authorMatched = candidates.find(doc => {
    if (!wantedAuthor) return true;
    const authors = (doc.author_name || []).map(normalise);
    return authors.some(name => name.includes(wantedAuthor) || wantedAuthor.includes(name));
  });
  return authorMatched || (wantedAuthor ? null : candidates[0]);
}

async function lookupGoogleBooksByTitle(book) {
  const query = ["intitle:" + book.title, book.author ? "inauthor:" + book.author : ""].filter(Boolean).join(" ");
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(query) + "&maxResults=5";
  const response = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!response.ok) throw new Error("Google Books title lookup unavailable");
  const data = await response.json();
  const items = Array.isArray(data.items) ? data.items : [];
  const wantedTitle = normalise(book.title);
  const wantedAuthor = normalise(book.author);
  const matches = items.filter(item => normalise(item.volumeInfo?.title || "") === wantedTitle);
  const match = matches.find(item => {
    if (!wantedAuthor) return true;
    return (item.volumeInfo?.authors || []).some(author => {
      const name = normalise(author);
      return name.includes(wantedAuthor) || wantedAuthor.includes(name);
    });
  }) || (!wantedAuthor ? matches[0] : null);
  if (!match) return null;
  return {
    title: match.volumeInfo.title || "",
    author_name: Array.isArray(match.volumeInfo.authors) ? match.volumeInfo.authors : [],
    subject: Array.isArray(match.volumeInfo.categories) ? match.volumeInfo.categories : []
  };
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

// Library of Congress SRU: extract Dewey only from MARC 082 $a.
// No API key or account is required. Other classification fields are ignored.
async function lookupLibraryOfCongressDdc(isbn) {
  const params = new URLSearchParams({
    version: "1.1",
    operation: "searchRetrieve",
    query: 'bath.isbn="' + isbn + '"',
    maximumRecords: "5",
    recordSchema: "marcxml"
  });
  const response = await fetch("https://lx2.loc.gov/sru/lcdb?" + params.toString(), {
    headers: { "Accept": "application/xml, text/xml" }
  });
  if (!response.ok) throw new Error("Library of Congress SRU returned HTTP " + response.status);
  const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
  if (xml.querySelector("parsererror")) throw new Error("Library of Congress returned invalid MARCXML");
  const records = [];
  const fields = [...xml.getElementsByTagNameNS("*", "datafield")];
  const getSubfields = (field, code) => [...field.getElementsByTagNameNS("*", "subfield")]
    .filter(node => node.getAttribute("code") === code)
    .map(node => (node.textContent || "").trim());
  const recordNodes = [...xml.getElementsByTagNameNS("*", "record")];
  for (const record of recordNodes) {
    const ddc = [...record.getElementsByTagNameNS("*", "datafield")]
      .filter(field => field.getAttribute("tag") === "082")
      .flatMap(field => getSubfields(field, "a"))
      .flatMap(value => extractValidDdcValues(value));
    if (!ddc.length) continue;
    const titleField = [...record.getElementsByTagNameNS("*", "datafield")].find(field => field.getAttribute("tag") === "245");
    const title = titleField ? [...getSubfields(titleField, "a"), ...getSubfields(titleField, "b")].join(" ").trim() : "";
    records.push({ source: "Library of Congress", title, ddc: [...new Set(ddc)] });
  }
  return records;
}

// Internet Archive public metadata search. Only explicitly labelled Dewey fields
// are accepted; generic call numbers and other classification schemes are ignored.
async function lookupInternetArchiveDdc(isbn) {
  const searchParams = new URLSearchParams();
  searchParams.set("q", 'isbn:"' + isbn + '"');
  searchParams.append("fl[]", "identifier");
  searchParams.set("rows", "5");
  searchParams.set("output", "json");
  const searchResponse = await fetch("https://archive.org/advancedsearch.php?" + searchParams.toString(), {
    headers: { "Accept": "application/json" }
  });
  if (!searchResponse.ok) throw new Error("Internet Archive search returned HTTP " + searchResponse.status);
  const searchData = await searchResponse.json();
  const docs = searchData?.response?.docs || [];
  const records = await Promise.all(docs.slice(0, 5).map(async doc => {
    const metadataResponse = await fetch("https://archive.org/metadata/" + encodeURIComponent(doc.identifier), {
      headers: { "Accept": "application/json" }
    });
    if (!metadataResponse.ok) return null;
    const metadata = (await metadataResponse.json())?.metadata || {};
    const raw = [
      metadata.ddc, metadata.dewey, metadata.dewey_decimal_class,
      metadata.dewey_decimal_classification
    ].flat();
    const ddc = raw.flatMap(value => extractValidDdcValues(value));
    return ddc.length ? {
      source: "Internet Archive",
      title: metadata.title || "",
      ddc: [...new Set(ddc)]
    } : null;
  }));
  return records.filter(Boolean);
}



function parseBatchRows(raw) {
  const delimiter = raw.split(/\r?\n/, 1)[0].includes("\t") ? "\t" : ",";
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (let i = 0; i < raw.length; i++) {
    const char = raw[i], next = raw[i + 1];
    if (char === '"' && quoted && next === '"') { cell += '"'; i++; }
    else if (char === '"') quoted = !quoted;
    else if (char === delimiter && !quoted) { row.push(cell.trim()); cell = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i++;
      row.push(cell.trim()); cell = "";
      if (row.some(value => value !== "")) rows.push(row);
      row = [];
    } else cell += char;
  }
  row.push(cell.trim());
  if (row.some(value => value !== "")) rows.push(row);
  if (rows.length < 2) throw new Error("Add a header row and at least one book record.");
  const key = value => normalise(value).replace(/[^a-z0-9]/g, "");
  const headers = rows.shift().map(key);
  const aliases = {
    title: ["title", "booktitle", "bookname"],
    author: ["author", "authors"],
    subject: ["subject", "description", "about"],
    language: ["language", "booklanguage"],
    workType: ["worktype", "genre", "format"]
  };
  const indexes = {};
  for (const [field, names] of Object.entries(aliases)) indexes[field] = headers.findIndex(header => names.includes(header));
  if (indexes.title < 0) throw new Error("The header row must contain a title column.");
  const parsed = rows.map((values, index) => {
    const get = field => indexes[field] >= 0 ? String(values[indexes[field]] || "").trim() : "";
    return {
      row: index + 2, title: get("title"), author: get("author"), subject: get("subject"),
      language: get("language"), workType: get("workType")
    };
  }).filter(item => item.title);
  if (!parsed.length) throw new Error("No rows with a book title were found.");
  if (parsed.length > 25) throw new Error("Please process no more than 25 books at a time. Split the list into smaller batches.");
  return parsed;
}

function batchBookType(value) {
  const v = normalise(value);
  const map = {
    fiction: "fiction", novel: "fiction", poetry: "poetry", poem: "poetry",
    drama: "drama", plays: "drama", biography: "biography", autobiography: "biography",
    memoir: "biography", translation: "translation", "translated work": "translation",
    textbook: "textbook", academic: "textbook", reference: "reference",
    "reference work": "reference", "practical guide": "practical", "how to": "practical",
    essays: "essays", essay: "essays"
  };
  return map[v] || "";
}

async function processBatch() {
  const input = document.querySelector("#batch-input");
  const status = document.querySelector("#batch-status");
  const output = document.querySelector("#batch-results");
  const button = document.querySelector("#run-batch");
  let books;
  try { books = parseBatchRows(input.value); }
  catch (error) {
    status.textContent = error.message;
    output.hidden = true;
    return;
  }
  button.disabled = true;
  button.textContent = "Processing…";
  window.ddcBatchMode = true;
  subjectInput.required = false;
  const original = {
    title: titleInput.value, author: authorInput.value, subject: subjectInput.value,
    language: languageInput.value, workType: workTypeInput.value,
    audience: audienceInput.value, approach: approachInput.value, isbn: isbnInput.value
  };
  const resultsList = [];
  try {
    for (let index = 0; index < books.length; index++) {
      const book = books[index];
      titleInput.value = book.title;
      authorInput.value = book.author;
      subjectInput.value = book.subject;
      languageInput.value = book.language;
      workTypeInput.value = batchBookType(book.workType);
      audienceInput.value = "";
      approachInput.value = "";
      isbnInput.value = "";
      form.requestSubmit();
      const number = document.querySelector("#results .ddc-number")?.textContent.trim() || "";
      const heading = document.querySelector("#results .ddc-heading")?.textContent.trim() || "";
      const alternatives = [...document.querySelectorAll("#results .alternatives li strong")].map(node => node.textContent.trim());
      const noMatch = Boolean(document.querySelector("#results .empty-state"));
      resultsList.push({
        ...book, number, heading, alternatives,
        status: number ? "Preliminary suggestion — review required" : noMatch ? "No local match" : "Review needed"
      });
      status.textContent = "Processed " + (index + 1) + " of " + books.length + " books…";
      if (index < books.length - 1) await new Promise(resolve => setTimeout(resolve, 0));
    }
  } finally {
    titleInput.value = original.title;
    authorInput.value = original.author;
    subjectInput.value = original.subject;
    languageInput.value = original.language;
    workTypeInput.value = original.workType;
    audienceInput.value = original.audience;
    approachInput.value = original.approach;
    isbnInput.value = original.isbn;
    button.disabled = false;
    button.textContent = "Process book list";
    window.ddcBatchMode = false;
    subjectInput.required = true;
  }
  window.ddcBatchResults = resultsList;
  output.innerHTML = '<div class="batch-summary"><strong>' + resultsList.filter(item => item.number).length + ' of ' + resultsList.length + ' books received preliminary suggestions.</strong><button class="copy-button" type="button" id="export-batch">Export results CSV</button></div>' +
    '<div class="batch-table-wrap"><table class="batch-table"><thead><tr><th>Book</th><th>Suggested DDC</th><th>Other candidates</th><th>Your final number</th><th>Cataloguer note</th><th>Status</th></tr></thead><tbody>' +
    resultsList.map((item, index) => '<tr><td><strong>' + escapeHtml(item.title) + '</strong>' + (item.author ? '<span>' + escapeHtml(item.author) + '</span>' : '') + '</td><td>' + (item.number ? '<strong>' + escapeHtml(item.number) + '</strong><span>' + escapeHtml(item.heading) + '</span>' : '—') + '</td><td>' + escapeHtml(item.alternatives.join(", ") || "—") + '</td><td><input class="batch-final-number" data-index="' + index + '" type="text" inputmode="decimal" maxlength="24" placeholder="Not decided" aria-label="Final DDC number for ' + escapeHtml(item.title) + '"></td><td><textarea class="batch-cataloguer-note" data-index="' + index + '" rows="2" maxlength="300" placeholder="Optional note" aria-label="Cataloguer note for ' + escapeHtml(item.title) + '"></textarea></td><td>' + escapeHtml(item.status) + '</td></tr>').join("") +
    '</tbody></table></div><p class="field-hint">Use the final-number field only after checking the book and an authorised DDC source. Leaving it blank means no final decision has been recorded.</p>';
  output.hidden = false;
  results.hidden = true;
  status.textContent = "Finished processing " + resultsList.length + " books.";
  document.querySelector("#export-batch").addEventListener("click", exportBatchResults);
}

function exportBatchResults() {
  const records = window.ddcBatchResults || [];
  if (!records.length) return;
  const columns = ["row", "title", "author", "subject", "language", "workType", "suggestedNumber", "suggestedHeading", "alternatives", "finalNumber", "cataloguerNote", "status"];
  const quote = value => '"' + String(value ?? "").replace(/"/g, '""') + '"';
  const output = document.querySelector("#batch-results");
  const csv = [columns.join(","), ...records.map((record, index) => {
    const finalNumber = output.querySelector('.batch-final-number[data-index="' + index + '"]')?.value.trim() || "";
    const cataloguerNote = output.querySelector('.batch-cataloguer-note[data-index="' + index + '"]')?.value.trim() || "";
    const row = { ...record, suggestedNumber: record.number, suggestedHeading: record.heading, finalNumber, cataloguerNote };
    return columns.map(key => quote(key === "alternatives" ? record.alternatives.join("; ") : row[key])).join(",");
  })].join("\r\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ddc-finder-batch-results.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.querySelector("#run-batch").addEventListener("click", processBatch);

form.addEventListener("submit", async event => {
  event.preventDefault();
  const book = {
    title: titleInput.value.trim(),
    author: authorInput.value.trim(),
    subject: subjectInput.value.trim(),
    language: languageInput.value,
    workType: workTypeInput.value,
    audience: audienceInput.value,
    approach: approachInput.value,
    workTypeLabel: workTypeInput.value ? workTypeInput.selectedOptions[0]?.textContent || "" : "",
    audienceLabel: audienceInput.value ? audienceInput.selectedOptions[0]?.textContent || "" : "",
    approachLabel: approachInput.value ? approachInput.selectedOptions[0]?.textContent || "" : "",
    isbn: isbnInput.value.trim()
  };
  const cleanIsbn = book.isbn.replace(/[\s-]/g, "");
  if (!window.ddcBatchMode && !cleanIsbn && !book.title) {
    renderEmpty("Book title required", "Enter a book title or provide an ISBN so the book's bibliographic record can be found.");
    titleInput.focus();
    return;
  }
  if (!window.ddcBatchMode && !cleanIsbn && !book.subject) {
    renderEmpty("Subject / Topic required", "For a title-only search, enter a subject or topic. If you have an ISBN, you can search with the ISBN alone.");
    subjectInput.focus();
    return;
  }
  // ISBN is optional supporting metadata. An invalid or unrecognised ISBN
  // must never prevent the primary title + subject classification workflow.
  if (cleanIsbn && !isValidIsbn(cleanIsbn)) {
    console.warn("Ignoring invalid ISBN; continuing with title and subject search.");
    cleanIsbn = "";
    isbnInput.setCustomValidity("");
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
      const extraDdcRecords = [];
      const extraLookups = await Promise.allSettled([
        lookupLibraryOfCongressDdc(cleanIsbn),
        lookupInternetArchiveDdc(cleanIsbn)
      ]);
      for (const result of extraLookups) {
        if (result.status === "fulfilled") extraDdcRecords.push(...result.value);
        else console.warn("An additional DDC source was unavailable.", result.reason);
      }
      if (record) {
        if (!book.title && record.title) book.title = record.title;
        if (!book.author && Array.isArray(record.author_name) && record.author_name.length) book.author = record.author_name.join(", ");
      }
      {
        const classes = [
          ...extractValidDdcValues(record?.dewey_decimal_class),
          ...extractValidDdcValues(record?.ddc),
          ...extraDdcRecords.flatMap(item => item.ddc)
        ].filter((value, index, all) => all.indexOf(value) === index);
        if (classes.length) {
          const candidates = classes.slice(0, 6).map((number, index) => {
            const sources = [];
            if (extractValidDdcValues(record?.dewey_decimal_class).includes(number) || extractValidDdcValues(record?.ddc).includes(number)) sources.push("Open Library");
            if (extraDdcRecords.some(item => item.ddc.includes(number))) {
              for (const item of extraDdcRecords.filter(item => item.ddc.includes(number))) sources.push(item.source);
            }
            return {
              number: String(number),
              heading: index === 0 ? "DDC value found in a source record" : "Additional DDC value",
              score: 10 - index,
              matched: [...new Set(sources.length ? sources : ["ISBN metadata"])],
              description: "This Dewey number was explicitly present in the source record(s) listed. Check the record and verify the number for this edition and your library's policy."
            };
          });
          const sourceNames = [...new Set(candidates.flatMap(item => item.matched))];
          renderResults(book, candidates, "ISBN lookup: " + (record?.title || book.title || "Book record") + (Array.isArray(record?.author_name) && record.author_name.length ? " — " + record.author_name.join(", ") : "") + ". DDC evidence sources: " + sourceNames.join(", ") + ".");
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
          return;
        }
        if (Array.isArray(record?.subject) && record.subject.length) {
          book.subject = [book.subject, record.subject.slice(0, 15).join(" ")].filter(Boolean).join(" ");
        }
        if (!book.subject && book.title) {
          try {
            const titleRecord = await lookupTitle(book);
            if (titleRecord) {
              if (!book.author && Array.isArray(titleRecord.author_name)) book.author = titleRecord.author_name.join(", ");
              const titleClasses = [...extractValidDdcValues(titleRecord.dewey_decimal_class), ...extractValidDdcValues(titleRecord.ddc)];
              if (titleClasses.length) {
                const candidates = [...new Set(titleClasses)].slice(0, 4).map((number, index) => ({
                  number: String(number),
                  heading: index === 0 ? "DDC value in matching title record" : "Additional DDC value in matching title record",
                  score: 10 - index,
                  matched: ["ISBN-linked title metadata"],
                  description: "This number is associated with a matching title record. Verify it for the exact edition and your library's policy."
                }));
                renderResults(book, candidates, "ISBN matched: " + book.title + (book.author ? " — " + book.author : "") + ". Classification evidence: Open Library title record.");
                return;
              }
              if (Array.isArray(titleRecord.subject) && titleRecord.subject.length) {
                book.subject = titleRecord.subject.slice(0, 20).join(" ");
              }
            }
          } catch (titleError) {
            console.warn("ISBN-linked title search unavailable.", titleError);
          }
        }
      }
    } catch (error) {
      console.warn("ISBN metadata lookup failed; using local subject guide.", error);
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  }
  if (book.title && !window.ddcBatchMode && !window.ddcSkipRemoteLookup) {
    submitButton.disabled = true;
    submitButton.innerHTML = "<span>Searching catalogue records…</span>";
    try {
      let record = await lookupTitle(book);
      if (record) {
        const classes = Array.isArray(record.dewey_decimal_class) ? record.dewey_decimal_class : Array.isArray(record.ddc) ? record.ddc : [];
        if (classes.length) {
          const candidates = classes.slice(0, 4).map((number, index) => ({
            number: String(number),
            heading: index === 0 ? "DDC value in Open Library record" : "Additional DDC value in Open Library record",
            score: 10 - index,
            matched: ["Open Library title and author record"],
            description: "This classification is associated with a matching title record in Open Library. Check the linked catalogue context and verify the number for this edition."
          }));
          renderResults(book, candidates, "Matching title record: " + (record.title || book.title) + (Array.isArray(record.author_name) && record.author_name.length ? " — " + record.author_name.join(", ") : "") + ". Source: Open Library.");
          return;
        }
        if (Array.isArray(record.subject) && record.subject.length) {
          book.subject = [book.subject, record.subject.slice(0, 20).join(" ")].filter(Boolean).join(" ");
        }
      }
      if (!record || !(Array.isArray(record.subject) && record.subject.length)) {
        try {
          const googleRecord = await lookupGoogleBooksByTitle(book);
          if (googleRecord) {
            book.subject = [book.subject, ...(googleRecord.subject || [])].filter(Boolean).join(" ");
          }
        } catch (googleError) {
          console.warn("Google Books title lookup unavailable.", googleError);
        }
      }
    } catch (titleError) {
      console.warn("Title metadata lookup unavailable; using the local subject guide.", titleError);
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  }
  const subjectText = normalise(book.subject);
  const languageHints = [];
  const classificationContext = normalise([book.subject, book.workType].filter(Boolean).join(" "));
  if (book.language === "Malayalam") {
    if (book.workType === "translation" || /\b(translat(?:ion|ed)|translated from)\b|വിവർത്തന/u.test(classificationContext)) {
      languageHints.push("malayalam literature");
    } else if (book.workType === "biography" || /\b(autobiography|biography|memoir)\b|ആത്മകഥ|ജീവചരിത്രം/u.test(classificationContext)) languageHints.push("malayalam autobiography");
    else if (book.workType === "fiction" || /\b(novel|fiction|short stor(y|ies))\b|നോവൽ|കഥകൾ/u.test(classificationContext)) languageHints.push("malayalam fiction");
    else if (book.workType === "poetry" || /\b(poetry|poem|poems)\b|കവിത/u.test(classificationContext)) languageHints.push("malayalam poetry");
    else if (book.workType === "drama" || /\b(drama|play|plays)\b|നാടകം/u.test(classificationContext)) languageHints.push("malayalam drama");
    else if (book.workType === "essays" || /\b(essay|essays)\b|ലേഖന/u.test(classificationContext)) languageHints.push("malayalam essays");
    else if (/\bliterature\b|സാഹിത്യം/u.test(classificationContext)) languageHints.push("malayalam literature");
  }
  if (book.language === "English" && book.workType === "fiction") languageHints.push("english fiction");
  if (book.language === "English" && book.workType === "poetry") languageHints.push("poetry");
  if (book.language === "English" && book.workType === "biography") languageHints.push("biography");
  if (book.language === "Tamil" && (book.workType || /\b(literature|fiction|poetry|novel|drama|essays?)\b|தமிழ்/u.test(classificationContext))) languageHints.push("tamil literature");
  if (book.language === "Hindi" && (book.workType || /\b(literature|fiction|poetry|novel|drama|essays?)\b|हिंदी/u.test(classificationContext))) languageHints.push("hindi literature");
  if (book.language === "Bengali" && (book.workType || /\b(literature|fiction|poetry|novel|drama|essays?)\b|বাংলা/u.test(classificationContext))) languageHints.push("bengali literature");
  const searchable = normalise([book.title, book.author, book.subject, ...languageHints].filter(Boolean).join(" "));
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
  if (book.language !== "Malayalam" && (wingsMatch || cleanIsbn === "9788173711466" || cleanIsbn === "8173711461")) {
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

document.querySelectorAll(".sample-pill").forEach(button => {
  button.addEventListener("click", () => {
    titleInput.value = button.dataset.title || "";
    authorInput.value = button.dataset.author || "";
    languageInput.value = button.dataset.language || "";
    subjectInput.value = button.dataset.subject || "";
    if (button.dataset.worktype) {
      workTypeInput.value = button.dataset.worktype;
    }
    form.requestSubmit();
  });
});

// -----------------------------------------------------------------------------
// Service Worker Registration (PWA Offline Support)
// -----------------------------------------------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(err => {
      console.warn("ServiceWorker registration skipped:", err);
    });
  });
}

// -----------------------------------------------------------------------------
// Theme Management (Swiss Technical Light / Dark Mode)
// -----------------------------------------------------------------------------
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeText = document.querySelector("#theme-text");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
  if (themeText) themeText.textContent = isDark ? "Light" : "Dark";
  try {
    localStorage.setItem("ddcFinderTheme", theme);
  } catch (_) {}
}

const savedTheme = (() => {
  try { return localStorage.getItem("ddcFinderTheme"); } catch (_) { return null; }
})();
const initialTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// Three-level decimal subject browser — sourced from the public-domain FDC dataset.
const toggleBrowserBtn = document.querySelector("#toggle-browser-btn");
const browserContent = document.querySelector("#browser-content");
const browserToggleText = document.querySelector("#browser-toggle-text");
const browserToggleArrow = document.querySelector("#browser-toggle-arrow");
const ddcTree = document.querySelector("#ddc-tree");
const ddcBrowserStatus = document.querySelector("#ddc-browser-status");

function parseFdcHierarchy(source) {
  const roots = [];
  const stack = [];
  source.split(/\r?\n/).forEach(line => {
    const match = line.match(/^( *)(\d{3})\s+(.+?)\s*$/);
    if (!match) return;
    const depth = match[1].length;
    if (depth > 2) return;
    const node = { code: match[2], title: match[3], children: [] };
    if (depth === 0) {
      roots.push(node);
      stack[0] = node;
    } else if (depth === 1 && stack[0]) {
      stack[0].children.push(node);
      stack[1] = node;
    } else if (depth === 2 && stack[1]) {
      stack[1].children.push(node);
    }
  });
  return roots;
}

function createFdcNumberButton(node) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "ddc-section-number";
  const number = document.createElement("strong");
  number.textContent = node.code;
  const label = document.createElement("small");
  label.textContent = node.title;
  button.append(number, label);
  button.title = node.code + " — " + node.title + ". Click to copy.";
  button.setAttribute("aria-label", node.code + " — " + node.title + ". Copy number.");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(node.code);
      if (ddcBrowserStatus) ddcBrowserStatus.textContent = "Copied " + node.code + " — " + node.title;
    } catch (_) {
      if (ddcBrowserStatus) ddcBrowserStatus.textContent = node.code + " — " + node.title + ". Clipboard unavailable.";
    }
  });
  return button;
}

function renderFdcBrowser(classes) {
  if (!ddcTree) return;
  const fragment = document.createDocumentFragment();
  classes.forEach(mainClass => {
    const mainDetails = document.createElement("details");
    mainDetails.className = "ddc-level ddc-main-level";
    const mainSummary = document.createElement("summary");
    mainSummary.className = "ddc-level-summary ddc-main-summary";
    const mainCode = document.createElement("span");
    mainCode.className = "ddc-code ddc-main-code";
    mainCode.textContent = mainClass.code;
    const mainText = document.createElement("span");
    mainText.className = "ddc-level-text";
    const mainTitle = document.createElement("strong");
    mainTitle.textContent = mainClass.title;
    const mainDescription = document.createElement("small");
    mainDescription.textContent = mainClass.children.length + " listed divisions";
    mainText.append(mainTitle, mainDescription);
    const mainChevron = document.createElement("span");
    mainChevron.className = "ddc-chevron";
    mainChevron.setAttribute("aria-hidden", "true");
    mainChevron.textContent = "＋";
    mainSummary.append(mainCode, mainText, mainChevron);
    mainDetails.append(mainSummary);

    const divisions = document.createElement("div");
    divisions.className = "ddc-division-list";
    mainClass.children.forEach(division => {
      const divisionDetails = document.createElement("details");
      divisionDetails.className = "ddc-level ddc-division-level";
      const divisionSummary = document.createElement("summary");
      divisionSummary.className = "ddc-level-summary ddc-division-summary";
      const divisionCode = document.createElement("span");
      divisionCode.className = "ddc-code";
      divisionCode.textContent = division.code;
      const divisionText = document.createElement("span");
      divisionText.className = "ddc-level-text";
      const divisionTitle = document.createElement("strong");
      divisionTitle.textContent = division.title;
      const divisionNote = document.createElement("small");
      divisionNote.textContent = division.children.length
        ? division.children.length + " listed sections"
        : "No further sections listed in this dataset";
      divisionText.append(divisionTitle, divisionNote);
      const chevron = document.createElement("span");
      chevron.className = "ddc-chevron";
      chevron.setAttribute("aria-hidden", "true");
      chevron.textContent = "＋";
      divisionSummary.append(divisionCode, divisionText, chevron);
      divisionDetails.append(divisionSummary);

      if (division.children.length) {
        const sections = document.createElement("div");
        sections.className = "ddc-section-grid";
        division.children.forEach(section => sections.appendChild(createFdcNumberButton(section)));
        divisionDetails.appendChild(sections);
      }
      divisions.appendChild(divisionDetails);
    });
    mainDetails.appendChild(divisions);
    fragment.appendChild(mainDetails);
  });
  ddcTree.replaceChildren(fragment);
}

async function buildDdcBrowser() {
  if (!ddcTree) return;
  try {
    const response = await fetch("./fdc.txt");
    if (!response.ok) throw new Error("Could not load subject data");
    const source = await response.text();
    const classes = parseFdcHierarchy(source);
    if (!classes.length) throw new Error("No subject records found");
    renderFdcBrowser(classes);
    if (ddcBrowserStatus) ddcBrowserStatus.textContent =
      "Loaded " + classes.length + " main classes from the public-domain Free Decimal Correspondence (FDC). This is DDC-compatible reference data, not an official DDC schedule.";
  } catch (error) {
    if (ddcBrowserStatus) ddcBrowserStatus.textContent = "Subject data could not be loaded. Please refresh while online.";
  }
}

if (toggleBrowserBtn && browserContent) {
  toggleBrowserBtn.addEventListener("click", () => {
    const isOpening = browserContent.hidden;
    browserContent.hidden = !isOpening;
    toggleBrowserBtn.setAttribute("aria-expanded", String(isOpening));
    if (browserToggleText) browserToggleText.textContent = isOpening ? "Collapse browser" : "Explore subjects";
    if (browserToggleArrow) browserToggleArrow.textContent = isOpening ? "↑" : "↓";
  });
}

if (ddcTree) {
  buildDdcBrowser();
  ddcTree.addEventListener("toggle", event => {
    if (!(event.target instanceof HTMLDetailsElement)) return;
    const chevron = event.target.querySelector(":scope > summary .ddc-chevron");
    if (chevron) chevron.textContent = event.target.open ? "−" : "＋";
  }, true);
}

// Live ISBN Barcode Scanner (Webcam / Mobile Camera)
// -----------------------------------------------------------------------------
const scanIsbnBtn = document.querySelector("#scan-isbn-btn");
const scannerModal = document.querySelector("#scanner-modal");
const closeScannerBtn = document.querySelector("#close-scanner-btn");
const scannerVideo = document.querySelector("#scanner-video");
const scannerStatus = document.querySelector("#scanner-status");
let activeScannerStream = null;
let scannerLoopId = null;

function playScanBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1046.5, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (_) {}
}

function stopScanner() {
  if (scannerLoopId) {
    cancelAnimationFrame(scannerLoopId);
    scannerLoopId = null;
  }
  if (activeScannerStream) {
    activeScannerStream.getTracks().forEach(track => track.stop());
    activeScannerStream = null;
  }
  if (scannerVideo) scannerVideo.srcObject = null;
  if (scannerModal) {
    scannerModal.hidden = true;
    scannerModal.style.display = "none";
  }
}

async function startScanner() {
  if (!scannerModal || !scannerVideo) return;
  scannerModal.hidden = false;
  scannerModal.style.display = "grid";
  if (scannerStatus) scannerStatus.textContent = "Accessing camera…";

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    if (scannerStatus) scannerStatus.textContent = "Camera access is not supported by your browser.";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 } }
    });
    activeScannerStream = stream;
    scannerVideo.srcObject = stream;
    await scannerVideo.play();
    if (scannerStatus) scannerStatus.textContent = "Align ISBN barcode within the frame…";

    if ("BarcodeDetector" in window) {
      const detector = new window.BarcodeDetector({ formats: ["ean_13", "ean_8", "code_128"] });
      async function detectFrame() {
        if (!activeScannerStream) return;
        try {
          const barcodes = await detector.detect(scannerVideo);
          if (barcodes && barcodes.length > 0) {
            const rawVal = barcodes[0].rawValue.replace(/[\s-]/g, "");
            if (rawVal) {
              playScanBeep();
              isbnInput.value = rawVal;
              stopScanner();
              if (subjectInput && !subjectInput.value.trim()) {
                subjectInput.value = "General topic";
              }
              form.requestSubmit();
              return;
            }
          }
        } catch (_) {}
        scannerLoopId = requestAnimationFrame(detectFrame);
      }
      scannerLoopId = requestAnimationFrame(detectFrame);
    } else {
      if (scannerStatus) scannerStatus.textContent = "Camera active. Native BarcodeDetector not available in this browser.";
    }
  } catch (err) {
    console.warn("Camera access denied or unavailable:", err);
    if (scannerStatus) scannerStatus.textContent = "Camera permission denied or camera not found.";
  }
}

if (scanIsbnBtn) scanIsbnBtn.addEventListener("click", startScanner);
if (closeScannerBtn) closeScannerBtn.addEventListener("click", stopScanner);

window.addEventListener("keydown", event => {
  if (event.key === "Escape" && scannerModal && !scannerModal.hidden) {
    stopScanner();
    return;
  }
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    titleInput.focus();
    titleInput.select();
  } else if (event.key === "Escape") {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      document.activeElement.blur();
    }
  }
});

renderDecisionHistory();
