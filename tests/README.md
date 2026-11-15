# Real-book regression checks

This folder contains a small benchmark built from publicly visible library catalogue records.

## Run it

After GitHub Pages has deployed, open:

`https://melvinvarghese.github.io/ddc-number-checker/tests/`

The page loads the main DDC Finder in a hidden same-origin frame, submits each fixture using the local subject guide, and compares the displayed suggestion with the DDC numbers found in the linked catalogues.

Click **Run checks again** after changing subject rules.

## Files

- `real-book-cases.json` — book inputs, observed catalogue numbers, and source-record URLs.
- `index.html` — small results page.
- `runner.js` — dependency-free browser test runner.

## How to interpret results

- **Matches catalogue:** the app's suggestion appears in at least one linked catalogue record.
- **Not in cited records:** the app returned a number not present in the linked records. This is a review flag, not proof that the suggestion is wrong.
- **No suggestion:** the local guide did not produce a result for that input.
- Multiple catalogue numbers are retained when libraries classify the same work differently.

The test form deliberately leaves ISBN blank. This isolates the local subject-matching rules from external API responses, making repeated runs comparable. ISBN metadata lookup should be tested separately.

## Adding a case

Add a new object to the `cases` array in `real-book-cases.json`. Include the edition and language, the exact form input to reproduce, every catalogue number you can verify, and direct URLs to the catalogue records. Do not invent a number or treat one library's record as universally authoritative.

Prefer records that show ISBN, language/edition, and the DDC field together. Keep translated editions as separate cases when their language or literary classification differs.
