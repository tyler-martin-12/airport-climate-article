# Article workshop instructions

Read README.md and STYLE.md first. This public repo exists only to develop one article for later selective porting into a private Astro site.

- Keep article and interactive files at the documented destination-compatible paths.
- Never publish/deploy the production website, send newsletters, add credentials or copy unrelated personal content.
- The airport dataset is initially empty. Obtain the actual dataset from Tyler; never fabricate it.
- Preserve colourblind-safe encoding, mobile usability and the shared editorial appearance.
- Inspect the worked examples before adding dependencies. Their published prose is reference material, not a newly validated source for airport policy.
- Validate with `npm run build`, JavaScript syntax checks for public scripts, and mobile/desktop browser checks. A successful Astro build alone does not validate standalone HTML JavaScript.
- Deliver a clear list of article-specific files to port back. Do not merge development navigation, homepage, configuration or footer into production.
