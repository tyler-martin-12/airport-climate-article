# Implementation QA

Verified on tam-server using the supplied implementation, then targeted fixes. No production deployment, physical-phone test, Safari test or screen-reader test was performed.

## Reproduce

```bash
npm ci --ignore-scripts
npm run build
node --check public/airport-climate/app.js
node --check public/airport-climate/resize.js
python3 tests/data.py
NODE_PATH=/home/tyler/projects/app-for-one/node_modules node tests/browser.cjs
```

The browser test uses the server's existing Playwright installation, launches headless Chromium, and serves only the built files on a temporary loopback port. On another machine install Playwright separately and adjust NODE_PATH; it is not a runtime website dependency.

## Verified

- Full Astro build, including article and all workshop reference pages.
- All 30 records, unique IDs, coordinate bounds, source URL presence, exact workbook import and declared amendment reconciliation.
- Original 4 / 8 / 14 / 4 category distribution; unknown international-aviation inclusion retained.
- Desktop 1280px, touch-enabled 390px and 360px browser contexts.
- Map keyboard selection retains focus. Region filter, Europe zoom and desktop keyboard sorting work; mobile cards respond to touch.
- Article and interactive have no horizontal overflow at these widths.
- Iframe height settles instead of growing in a feedback loop, and shrinks when filtering reduces content.
- Dataset HTTP failure exposes a Retry action; no unhandled JavaScript errors in successful journeys.
- World, Europe/detail and article screenshots captured. World desktop/mobile and full mobile interactive images visually inspected for layout/readability.
- Article retains the supplied raw-HTML block structure and contains no em dashes.

## Fixes to supplied implementation

Competing viewport/content height reporters were replaced by one content-based reporter. Selection previously rebuilt SVG nodes, destroying focus; it now updates existing nodes. Filtering now removes excluded markers and clears excluded details. Off-screen Europe markers are not keyboard stops. Sorting uses actual buttons and announces sort direction. The hollow category stays hollow despite CSS precedence, and the legend no longer duplicates symbols. Details now expose aviation-sector goals and dated verification notes. Failed/malformed dataset loading is explicit.

## Limitations

Dense world-map clusters remain easier to inspect through Europe zoom or the table/cards. Touch emulation is not evidence of physical-phone or assistive-technology behaviour. Source-link presence was checked for all rows; not every external link was availability-tested. Lower-confidence research and coastline provenance remain documented in FACT-CHECK.md. Screenshots are review artifacts, not production assets.

## Full-prompt acceptance extension

The earlier prompt was truncated after “After inspection.” The completed checklist was subsequently reviewed against the implementation. `tests/extended.cjs`, invoked by the browser suite, now exercises the actual embedded article at all three widths: every filter option; region/type combinations including empty matches; clearing filters; both view switches; desktop marker hover and mobile marker tap; Space/Enter and view-button tab order; all 30 detail panels and their source hrefs; responsive iframe height after resize and detail changes; reduced-motion scroll behaviour; and page-wheel scrolling across the iframe. These are automated Chromium checks, not a full accessibility audit or physical touch-gesture test.

Plain `npm ci` was also run successfully (the original run used `--ignore-scripts`). npm reported 12 vulnerabilities in the inherited dependencies: 1 low, 2 moderate, 8 high, 1 critical. No forced dependency/framework upgrade was made. Review these before exposing a development server; the output here is a static build served only on loopback for testing.

The full-prompt visual review also found and fixed a QA harness defect: the temporary HTTP server originally labelled built CSS as text/plain. It now serves CSS and font MIME types correctly, and the browser test asserts that the article's computed body font includes Lora. Article screenshots were regenerated with the site styles applied. This was a test-server correction, not a production layout change. The article's inline iframe-message script also passed a separate node syntax check.

The project explorer is now a native, initially closed details/summary control (“Explore all 30 projects”). Browser regression checks exercise keyboard opening, closing and reopening within the article iframe, verify that its height grows and returns to the original height, then rerun the existing filters/table/cards checks with the explorer open. The map and selected project remain outside the collapsed section.
