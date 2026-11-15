# DDC Finder catalogue connector

This folder contains a small Cloudflare Worker that queries reviewed Koha SRU endpoints and extracts Dewey numbers only from MARC 082.

## Why a Worker is needed

The DDC Finder website is static GitHub Pages. Browsers cannot reliably call every library OPAC directly because of cross-origin restrictions. This Worker provides a controlled server-side bridge. It does not accept arbitrary URLs from visitors.

## Deploy

1. Install Node.js on your computer if it is not already installed.
2. From the repository folder, run `npx wrangler login` and complete Cloudflare's browser sign-in.
3. Run `npx wrangler deploy`. The included [wrangler.toml](../wrangler.toml) deploys `catalogue/worker.js` as `ddc-finder-catalogue`.
4. In Cloudflare → Workers & Pages → ddc-finder-catalogue → Settings → Variables, replace `CATALOGUE_SOURCES` with a JSON array of reviewed sources (see below). Keep `ALLOWED_ORIGINS` set to `https://melvinvarghese.github.io`.
5. Copy the Worker URL, e.g. `https://ddc-finder-catalogue.<your-subdomain>.workers.dev/search`.
6. Set `window.DDC_CATALOGUE_API` in `catalogue-config.js` to that URL and commit the change.

Do not put API secrets in `catalogue-config.js`. This connector only needs public SRU endpoints.

## Source configuration

Each source must have:
- `id`, `name`
- `sruEndpoint`: exact public HTTPS SRU endpoint verified with its Explain operation
- `opacUrl`: public OPAC home page
- optional `opacSearchUrl`, `country`

Example only (replace with a real endpoint after testing):

```json
[
  {
    "id": "example-library",
    "name": "Example public library",
    "country": "India",
    "opacUrl": "https://library.example.org/",
    "opacSearchUrl": "https://library.example.org/cgi-bin/koha/opac-search.pl",
    "sruEndpoint": "https://library.example.org:9999/biblios"
  }
]
```

**Do not copy the example endpoint as if it were real.** Koha supports SRU, but each library must enable and publish its endpoint. The endpoint is confirmed only after its Explain response and a sample MARCXML search have been tested.

## API

`GET /search?title=...&author=...&isbn=...`

The Worker:
- queries configured sources sequentially
- applies an 8-second timeout and 1 MB response limit per source
- requests at most five records per source
- matches ISBN when supplied, otherwise title and author
- returns only values in MARC 082 subfield $a
- preserves library, edition, ISBN, source URL and matching status
- returns per-source errors rather than hiding failures
- never accepts a user-supplied target URL

## Current Kerala pilot status

SCERT Kerala explicitly states that it uses Koha, MARC cataloguing and DDC, and its public OPAC is indexed at `https://scert.libraryopac.in/`. However, the public SRU endpoint has not yet been verified. Therefore no SCERT endpoint is preconfigured in production. Request its SRU Explain URL from the library or verify it with the library's system administrator before adding it.

The Kerala State Central Library OPAC is publicly searchable, but its SRU endpoint and use of MARC 082 also need verification. KALNET is a VuFind discovery layer and needs a separate connector after its supported API is confirmed.

## Indian bookstore ISBN discovery

The result panel also provides user-initiated searches for DC Books, Mathrubhumi Books and Atlantic Books. These are ISBN discovery sources, not DDC authorities. DC Books' public books listing visibly displays ISBNs and includes an ISBN search field. Mathrubhumi Books and Atlantic Books expose searchable product catalogues; the ISBN must be confirmed on the individual product page for the exact edition.

At present these links open domain-restricted search results. DDC Finder does **not** scrape these stores, claim their pages are APIs, or automatically import ISBNs. Once a user verifies an ISBN, the existing Open Library and Google Books lookups can use it to retrieve matching bibliographic metadata. A future automated connector should only be added if a documented public API, product feed, or explicit permission is available.

## Data and safety policy

- Never interpret MARC 090 or an unlabelled call number as DDC.
- Do not scrape a catalogue that disallows automated access.
- Keep requests sequential and cache results.
- Do not harvest entire library catalogues without permission.
- DDC is copyrighted/licensed by OCLC; the connector only retrieves catalogue-assigned numbers and does not reproduce the DDC schedules.
