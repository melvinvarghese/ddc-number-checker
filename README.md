# DDC Finder

A lightweight, browser-based preliminary Dewey Decimal Classification discovery aid. Hosted as a static site and designed to be embeddable in a WordPress article.

## Current version

The application accepts a book title, author, edition language, subject description and optional ISBN-10 or ISBN-13. ISBNs are checksum-validated and looked up through Open Library and Google Books. For additional DDC evidence, it also attempts a no-key Library of Congress SRU lookup and an Internet Archive metadata lookup. The Library of Congress integration accepts only MARC 082 $a; Internet Archive metadata is accepted only when it explicitly labels a value as DDC / Dewey. Other classification systems and generic call numbers are ignored. These public services may return no matching record, may have browser cross-origin restrictions, and are not guaranteed to contain a Dewey number. Otherwise, returned subject terms are combined with the local preliminary subject guide. The guide currently contains 100 independently written subject rules, including library science, education, computing, psychology, social sciences, health, arts, literature and history. Edition language is used when interpreting Malayalam, Tamil, Hindi and Bengali literary subjects, and a curated rule recognises the Malayalam edition *Agnichirakukal* separately from the English *Wings of Fire* edition.

**This is not an authoritative DDC classifier.** It does not analyse the full text of a book, consult an official DDC schedule, or guarantee a correct class number. Users must verify suggestions against an authorised DDC source and their library's cataloguing policy.

## Files

- `index.html` — accessible application structure and page content
- `styles.css` — responsive visual design
- `app.js` — application flow, curated preliminary subject rules and metadata lookups
- `classification-engine.js` — isolated subject-token matching and ranking logic, tested independently
- `fdc.txt` — Free Decimal Correspondence v0.06 (2010), a public-domain, DDC-inspired reference; not an official or current DDC schedule

## Run locally

Open `index.html` in a modern browser. No build step or package installation is required.

## Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/(root)`.
4. Save and wait for GitHub Pages to publish the site.

Expected URL: `https://melvinvarghese.github.io/ddc-number-checker/`


### Malayalam literature coverage

The local guide now distinguishes Malayalam literature (894.812), fiction (894.8123), autobiography/biography examples (894.812092), poetry, drama and essays. It also recognises selected Malayalam-script subject phrases. When a Malayalam edition is explicitly described as a translation, the guide stays with a broader Malayalam-literature suggestion rather than assuming a narrower literary-form subdivision. These are preliminary subject suggestions grounded in visible catalogue examples, not a replacement for the authorised DDC schedules. The benchmark includes Aadujeevitham, Ente Katha and the Malayalam edition of Agnichirakukal to keep edition- and library-specific practice visible.

## Subject matching safeguards

The local matcher is maintained separately in `classification-engine.js` so its token normalisation and ranking behaviour can be tested without the browser UI. When a librarian supplies a subject, the matcher uses that subject as its primary evidence; title and author are not mixed into the subject text. Language and work-type hints are fallback evidence only when no explicit subject is supplied. ISBN-derived DDC values are not allowed to bypass an explicitly supplied subject. These safeguards reduce some avoidable false matches, but the guide remains limited and does not perform full DDC number building.

## Real-book regression checks

A small benchmark based on linked library catalogue records is available at:

`https://melvinvarghese.github.io/ddc-number-checker/tests/`

It runs repeatable local-rule searches and flags whether each suggestion appears in at least one cited catalogue. Multiple DDC numbers are preserved when catalogues differ. The benchmark is evidence for review, not a universal gold standard. See [tests/README.md](tests/README.md) for how to add records and interpret results.

GitHub Actions also checks JavaScript syntax and validates the benchmark data on pushes and pull requests.

## Embed in WordPress

After GitHub Pages is live, add a Custom HTML block to the relevant post or page on **melvinvarghese.in**:

```html
<iframe
  src="https://melvinvarghese.github.io/ddc-number-checker/"
  title="DDC Finder — Dewey Decimal Classification helper"
  loading="lazy"
  width="100%"
  height="900"
  style="border:0; border-radius:12px; max-width:100%;"
  allow="clipboard-write">
</iframe>
```

Adjust the height after testing on desktop and mobile. Keep explanatory text, instructions and FAQs as real WordPress content outside the iframe so they remain accessible to search engines. Place AdSense units in the WordPress page layout with clear separation from the tool controls; do not place ads inside the application or near controls in a way that could cause accidental clicks.

The browser hierarchy uses the **Free Decimal Correspondence (FDC) v0.06**, released in 2010. FDC is dedicated to the public domain and was designed to be reasonably compatible with library decimal classifications, but its author explicitly says it is briefer than DDC, does not guarantee compatibility with present-day DDC, and is based substantially on the 1922 11th edition with later editorial adaptations. It must therefore be labelled as FDC, not represented as an official DDC schedule or used as proof that a suggested number is current DDC. See the [FDC description and limitations](https://everybodyslibraries.com/about-the-free-decimal-correspondence/).

## Data and licensing

Dewey Decimal Classification is maintained by OCLC and is protected by copyright and licensing terms. This project must not copy or redistribute proprietary DDC schedules, tables, captions or database content without permission. The initial subject guide is a limited, independently authored set of broad suggestions and must not be presented as an official or complete DDC database.

## Kerala catalogue discovery

The search result now includes direct search links to selected Kerala library catalogues: SCERT Kerala, Kerala State Central Library, KALNET and KILA. These are discovery links, not claims that automated retrieval is already active.

A controlled Koha SRU connector is provided in [catalogue/worker.js](catalogue/worker.js). Deployment and endpoint configuration are documented in [catalogue/README.md](catalogue/README.md). The frontend calls it only after `catalogue-config.js` has been configured with a deployed Worker URL. No SRU endpoint is assumed: each library's Explain response and MARCXML output must be verified first. Only MARC 082 values are treated as DDC evidence.

## Library catalogue integrations

DDC Finder is moving towards a Kerala-first, globally expandable catalogue-evidence search. The initial source registry is in [catalogue-sources.json](catalogue-sources.json), and the technical rollout, MARC field policy, access safeguards and expansion phases are documented in [docs/catalogue-integration-plan.md](docs/catalogue-integration-plan.md).

Kerala pilot candidates include SCERT Kerala, KALNET, KILA, Kerala University Libraries, Kerala State Central Library and the CMD Knowledge Management Centre. These are **candidate sources**, not all active automated connectors. A source will only be enabled for automated retrieval after its endpoint, public access conditions and DDC evidence have been verified. In particular, a generic OPAC call number is not automatically treated as DDC; MARC 082 or explicit classification-source metadata is required.

## Roadmap

- Continue improving subject coverage with documented, appropriately licensed sources.
- Evaluate additional library catalogue integrations only where stable access and reuse permissions are clear.
- Ask clarifying questions when a title is ambiguous.
- Improve alternative suggestions and explain the evidence behind each match.
- Add tests for subject rules and edge cases.
- Add bulk workflows only after validating demand with librarians.


### Additional Indian-language literature coverage

The preliminary guide includes broad language-literature suggestions for Tamil (894.811), Hindi (891.43) and Bengali (891.44). These are supported by individual public university-library catalogue records and are not universal rules for every genre or work. Sanskrit has deliberately not been added yet: the catalogue evidence reviewed so far showed differing treatment for language and literature collections, so more specific records are needed before adding a rule.


### Explainable suggestions and catalogue comparisons

For exact titles included in the real-book benchmark, the result page can display the linked library records and their observed DDC numbers. When records differ, the interface makes that disagreement visible instead of presenting one library's choice as universal. The explanation also identifies the matched guide terms and reminds users that DDC classification depends on subject, discipline and, where relevant, approach or form. The catalogue comparison is illustrative evidence only; it does not replace checking the actual edition against an authorised DDC schedule.


### Classification context and local decision log

The form offers optional fields for work type, intended audience and main approach. Work type may help the preliminary language/genre hints; audience and approach are displayed as context and do not independently generate a DDC number. After reviewing the candidates, a librarian can select the number actually adopted and add a note. Decisions are stored in the current browser's local storage on that device only and can be exported as CSV. They are not sent to a server. Clearing browser site data may remove this local log, so export it for retention.


### Batch cataloguing

The Batch cataloguing panel accepts CSV or tab-separated records with a header row. Supported columns are `title` (required), `author`, `subject`, `language`, and `workType`. It processes up to 25 records per batch using the local preliminary subject guide. Batch mode deliberately does not perform ISBN lookups or external metadata requests. Results can be exported as CSV and are always labelled as preliminary suggestions requiring individual librarian review; they are not automatically added to the local decision log or treated as approved classifications.
