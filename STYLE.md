# Article style and visual guidance

Adapted from the private site's STYLE.md; unrelated travel/personal examples omitted.

- Warm, concrete, reflective prose. State the question early, support claims with sources, and distinguish evidence from interpretation.
- British spelling. No em dashes, hype, SEO padding, or fabricated precision. Avoid “genuine” and “genuinely”.
- Use an honest analytical voice; acknowledge uncertainty and data limitations. End on a concrete implication rather than repeating the introduction.
- Keep headings concise; use the standard BlogPost layout and description standfirst.
- Preserve the cream/ink/rust/sage CSS variables and Playfair Display / Lora / DM Mono typography from src/styles/global.css. Other existing font imports are retained for compatibility.
- Tyler is colourblind: never rely on a red/green contrast. Use distinguishable blue/orange/violet colours plus labels, marker shapes or patterns. Every category must remain identifiable without colour.
- Keep chart and map text readable at phone widths. Use a narrower layout, not simply a scaled-down desktop chart. Tap and keyboard access must expose the same details as hover.
- Keep touch handlers passive; do not trap page scrolling. Respect reduced motion.
- Put definitions, sources, dates and uncertainty next to the data. Unknown values remain unknown, not zero.
- Image alt text should describe what matters. Use .wide-figure or an intentional responsive embed for visuals wider than the 720px prose column.
- Raw HTML, style and script blocks inside Markdown must contain no blank lines. CommonMark can otherwise turn their contents into visible code. Prefer separate public assets for substantial JavaScript.
- Existing published examples preserve their original wording, including legacy departures from these rules; the rules above apply to the new article.
