# DDC Finder

A lightweight, browser-based preliminary Dewey Decimal Classification discovery aid. Hosted as a static site and designed to be embeddable in a WordPress article.

## Current version

The application accepts a book title, author, subject description and optional ISBN-10 or ISBN-13. ISBNs are checksum-validated and looked up through Open Library; Google Books is used as a secondary source for bibliographic categories when Open Library has no useful subject terms. If an Open Library ISBN record includes a Dewey value, the tool displays it as third-party metadata. Otherwise, returned subject terms are combined with the local preliminary subject guide. The guide currently contains around 90 independently written subject rules, including library science, education, computing, psychology, social sciences, health, arts, literature and history. A curated title-and-author rule also recognises *Wings of Fire* by A. P. J. Abdul Kalam.

**This is not an authoritative DDC classifier.** It does not analyse the full text of a book, consult an official DDC schedule, or guarantee a correct class number. Users must verify suggestions against an authorised DDC source and their library's cataloguing policy.

## Files

- `index.html` — accessible application structure and page content
- `styles.css` — responsive visual design
- `app.js` — curated preliminary subject rules, ISBN metadata lookups and matching logic

## Run locally

Open `index.html` in a modern browser. No build step or package installation is required.

## Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/(root)`.
4. Save and wait for GitHub Pages to publish the site.

Expected URL: `https://melvinvarghese.github.io/ddc-number-checker/`

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

## Data and licensing

Dewey Decimal Classification is maintained by OCLC and is protected by copyright and licensing terms. This project must not copy or redistribute proprietary DDC schedules, tables, captions or database content without permission. The initial subject guide is a limited, independently authored set of broad suggestions and must not be presented as an official or complete DDC database.

## Roadmap

- Continue improving subject coverage with documented, appropriately licensed sources.
- Evaluate additional library catalogue integrations only where stable access and reuse permissions are clear.
- Ask clarifying questions when a title is ambiguous.
- Improve alternative suggestions and explain the evidence behind each match.
- Add tests for subject rules and edge cases.
- Add bulk workflows only after validating demand with librarians.
