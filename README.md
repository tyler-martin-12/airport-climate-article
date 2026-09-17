# Airport expansion and climate policy: article workshop

Temporary **public** development repository for ChatGPT. This is a focused scaffold for one interactive article, adapted from Tyler Martin's published Astro website. It is not a replacement website and has no production deployment configuration.

## Start here, ChatGPT

1. Read this README, `STYLE.md`, `AGENTS.md` and `COPY-MANIFEST.json`.
2. Inspect `src/layouts/BlogPost.astro`, `src/styles/global.css` and the worked examples below.
3. Import Tyler's reviewed airport dataset from the current conversation. It has **not** been copied here: `public/airport-climate/data/airports.json` is deliberately empty.
4. Implement the article at `src/pages/blog/airport-climate.md` and the interactive at `public/airport-climate/`. Keep the same root-relative paths so those files can be copied back cleanly.
5. Explain assumptions and source dates. Never invent missing airport records, capacities or climate-policy classifications.

## Run and verify

Use Node 22 LTS and npm:

```bash
npm ci
npm run dev
# local workshop: http://localhost:4321/
npm run build
npm run preview
```

Astro 4.16.19 is locked, matching the source site. There is no React, Tailwind or general chart library dependency. Static HTML files in `public/` are copied unparsed by Astro: separately check their scripts with `node --check`, and test in a real browser. The new `public/airport-climate/resize.js` is an external file so it can be checked directly.

For a remotely shared preview, serve **only `dist/`**, never the development server or repository root. There is no hosting workflow, production domain setting, analytics, newsletter backend or deployment hook in this repository. GitHub's public repository is for sharing code, not an instruction to publish the article.

## Existing examples

| Files | What to reuse |
|---|---|
| `src/pages/blog/where-to-start.md` and `public/vegan-effort-dashboard.html` | Responsive editorial embed, vanilla JS/SVG charts, accessible controls, mobile viewBox, height reporting |
| `src/pages/blog/london-in-three-dimensions.md` and `public/threshold-3d/index.html` | MapLibre 4.7.1 integration, map layers, filters and 2D/3D controls. The original large housing datasets are omitted: empty layers are expected. |
| `src/pages/blog/honest-price-of-a-flight.md` | Published aviation/climate essay voice and context; not a substitute for sources for the new article |
| `src/layouts/BlogPost.astro`, `Base.astro`, `src/styles/global.css` | Shared layout, 720px prose column, cream/ink palette and typography |

These are published reference articles, not private drafts. Their image URLs point to existing public site assets; no photo libraries are copied. Cross-links to articles outside this scaffold point back to the public site. The London prose describes the original full map, not the intentionally empty reference map here.

The original London integration loads MapLibre from unpkg and a CARTO basemap. Those are external network dependencies, not credentials. It demonstrates an existing option, not a requirement to add a heavy map library. Prefer small local assets/scripts where practical; do not add more CDN dependencies by default. The dietary example has no external JavaScript. Google Fonts requests already exist in the shared styles.

## Intended airport interactive

- Responsive world map, with Atlantic/Pacific-centred options if helpful, plus a Europe enlargement.
- Categorise projects by how climate policy constrains the expansion decision; define the categories explicitly. A national target alone is not proof a project is constrained.
- Hover **and tap/keyboard** details: airport, city/country, project type, capacity and units, status/date, national target, international aviation treatment, policy significance and sources.
- A filterable/sortable data table driven by the same records as the map, with a usable phone layout.
- Colourblind-safe colours and redundant labels/shapes. **No red/green distinction.** Keep the editorial styling rather than building a generic dashboard.
- Explicit unknowns, accessible focus, legible mobile labels, no scroll traps. Test at 360px, 390px and desktop widths.

The airport placeholder includes an adapted auto-height implementation: the child reports its content height to the same origin; the parent checks origin, source window, message type and a bounded finite height. Keep the script/HTML blocks in Markdown free of blank lines. Ensure updates after filtering, expanding details and resizing report the new content height. If restructuring the child, preserve or adapt its observed `main` element.

## Porting back to the private site

Deliver changes primarily to:

- `src/pages/blog/airport-climate.md`
- `public/airport-climate/**` (including the canonical dataset)
- Optional article-specific images under `public/images/blog/airport-climate/`

A later Codex session can copy those paths into a **new branch** of `my-blog`, build, and review on mobile before any merge. Do not wholesale merge this scaffold: its homepage, navigation, footer, Astro config and package metadata are development-only adaptations. If shared styles or dependencies need changes, document a minimal patch separately. The destination uses `Astro.glob('./*.md')` for its article list; a Markdown article fits that existing mechanism.

Do not push to `my-blog` or trigger Netlify: its `main` branch auto-deploys. Publishing and newsletter sending remain separate actions requiring Tyler's instruction.

## Public-content boundaries and provenance

No `.env`, credentials, source history, subscriber forms, Netlify functions/configuration, mailing scripts, private drafts or unrelated articles are included. The source repository itself was not modified. `COPY-MANIFEST.json` records source paths, commit and checksums for copied/adapted files; it is provenance, not a mechanism to access the private source.

`package.json` has `private: true` to prevent accidental **npm** publication; this GitHub repository is intentionally public. Public visibility does not automatically add this repository to a ChatGPT GitHub App installation. If connector discovery still fails, provide this repository URL directly for public web/raw-file retrieval.

## Completed implementation handoff

The supplied article and 30-row interactive are now installed. See [current fact-check and limitations](docs/FACT-CHECK.md), [explicit data amendments](docs/data-amendments.json), and [browser QA](docs/QA.md). Source ZIP/XLSX stay outside this checkout. Do not invent missing international-aviation coverage or reconcile the row counts to the workbook's inconsistent synthesis.

For later selective porting, copy only `src/pages/blog/airport-climate.md` and `public/airport-climate/`. This workshop's homepage, shared scaffold and configuration are not production changes. Review the PR; do not deploy or merge automatically.
