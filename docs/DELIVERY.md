# Delivery against full handoff

PR: https://github.com/tyler-martin-12/airport-climate-article/pull/1
Branch: `airport-climate-implementation`
Local checkout: `/home/tyler/airport-climate-work/airport-climate-article`
The PR's head commit identifies this final revision. Nothing merged, deployed, published to the website or sent to newsletters. The private website is untouched.

## Exact changed files relative to main

- `AGENTS.md`
- `README.md`
- `docs/DELIVERY.md`
- `docs/FACT-CHECK.md`
- `docs/QA.md`
- `docs/data-amendments.json`
- `docs/qa/article-1280.png`
- `docs/qa/article-360.png`
- `docs/qa/article-390.png`
- `docs/qa/interactive-1280.png`
- `docs/qa/interactive-360.png`
- `docs/qa/interactive-390.png`
- `docs/qa/world-1280.png`
- `docs/qa/world-360.png`
- `docs/qa/world-390.png`
- `public/airport-climate/app.js`
- `public/airport-climate/data/airports.json`
- `public/airport-climate/index.html`
- `public/airport-climate/resize.js`
- `src/pages/blog/airport-climate.md`
- `tests/browser.cjs`
- `tests/data.py`
- `tests/extended.cjs`

## Results

- Plain npm ci: success; 332 packages installed. Inherited dependency audit: 12 advisories (1 low, 2 moderate, 8 high, 1 critical), unresolved here.
- npm run build: success, six Astro pages.
- node --check on app.js and resize.js: passed.
- JSON: 30 unique records, valid coordinates/source fields, exact original workbook reconciliation with explicit subsequent amendments. Coding remains 4 central / 8 significant / 14 secondary / 4 limited.
- Desktop 1280px, mobile 390px and 360px: Chromium browser checks passed, including the rendered article iframe. Extended interaction coverage is enumerated in QA.md.
- Screenshots: docs/qa/world-{1280,390,360}.png; docs/qa/interactive-{1280,390,360}.png; docs/qa/article-{1280,390,360}.png. World and interactive views visually inspected; article captures and automated DOM checks verify rendering. No physical-phone claim.

## Defects and changes

Fixed competing iframe reporters/height feedback; marker selection destroying keyboard focus; excluded or off-view markers remaining interactive; missing keyboard sorting; CSS filling the supposedly hollow category; duplicate legend symbols; unclear dataset fetch failure; and missing aviation-sector goal in details. The supplied visual design and prose were retained.

Editorial/current-source changes: CCC expansion-impact wording; Singapore levy date; Frankfurt opening date; Vienna's later economic abandonment; historical qualification of the US target; Schiphol noise/carbon distinction; narrower evidence-based Oslo wording; sample-scoped geographic generalisations. Toronto now reflects the verified LIFT construction launch. Canadian interpretation confidence remains low.

See FACT-CHECK.md for primary/reputable source URLs and reasoning, and data-amendments.json for every original/new JSON field. The workbook and ZIP remain outside Git.

## Deliberately unresolved

- International-aviation inclusion outside the documented UK/Singapore cases remains unknown, not false. Canadian climate-approval interpretations remain low confidence. US policy continuity and Oslo's claimed decarbonisation condition are not assumed.
- The weakest research element remains cross-country comparability of qualitative climate-constraint scores, especially distinguishing no evidence found from no constraint and separating noise from carbon. This is a selected heterogeneous sample, not a causal league table.
- Dense world-map clusters remain easier in Europe view or the table/cards. No physical-phone, Safari or screen-reader audit. Automated touch emulation does not verify real swipe gestures.
- The supplied coastline lacks upstream provenance/licence documentation. Resolve before production publication.
- npm's existing dependency advisories remain for a separate reviewed maintenance change.

The extended review corrected the local test server's CSS MIME type and regenerated article screenshots. A computed-style assertion now prevents unstyled article renders from passing unnoticed. See QA.md for this distinction from the earlier standalone-interactive checks.
