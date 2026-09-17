# Current-claim review: 16 September 2026

This continues the supplied implementation and reviewed workbook, not a new worldwide census. All 30 original rows matched the workbook's 15 source fields exactly before amendments. `data-amendments.json` records every subsequent JSON difference, including original values. Run `python3 tests/data.py` with the supplied ZIP and workbook in the parent directory to reproduce the comparison.

The underlying coding remains **4 central, 8 significant, 14 secondary, 4 limited**. The workbook synthesis's 5 limited / 13 secondary is inconsistent with its rows and has not been adopted. Scores are qualitative interpretations of heterogeneous projects, not comparable units of capacity or a causal ranking.

| Claim | Verification and disposition |
| --- | --- |
| UK budgets include international aviation | [Current government budget guidance](https://www.gov.uk/guidance/carbon-budgets) confirms inclusion from the Sixth Carbon Budget, 2033–37, and links the 2026 implementing regulations. Distinguish this from national NDC accounting. |
| Current CCC Heathrow advice | [16 September advice](https://www.theccc.org.uk/publication/advice-to-the-uk-government-on-proposed-heathrow-airport-expansion/) says expansion requires stronger aviation emissions policy to be compatible with budgets. Corrected 6.9% wording: full expansion scheduled for 2054 compared with projected 2050 residual CO₂, not the whole expanded airport or a carbon-budget share. See the quantified comparison below. The source was independently retrieved through current search indexing; direct site access was intermittently blocked. |
| Singapore includes international aviation | [CAAS Blueprint](https://www.caas.gov.sg/sustainability/sustainable-air-hub-blueprint/) explicitly targets net-zero domestic and international aviation in 2050, separately from its airport operational target. Retained. |
| Singapore SAF levy timing | [CAAS deferral notice](https://www.caas.gov.sg/resources/media-and-publication/newsroom/sustainable-aviation-fuel--saf--levy-to-be-deferred/) moves passenger departures to 1 January 2027, tickets sold from 1 October 2026. Corrected outdated 2026 departure claim. |
| Changi capacity | [Airport project page](https://www.changiairport.com/en/corporate/about-us/future-developments/terminal-5.html) confirms around 50m annual passenger movements in phase one, expected mid-2030s. This is planned capacity, not realised traffic. |
| France CDG T4 | [Contemporaneous Reuters report](https://news.trust.org/item/20210211095959-s2l9g/) confirms 2021 cancellation citing climate and environmental concerns. Retain the historical case, not a claim that France prohibits all expansion. |
| Vienna | [Court record](https://www.vwgh.gv.at/medien/mitteilungen/2019-03-14-flughafen.html) confirms final approval in March 2019 after earlier litigation. [Operator November 2025 announcement](https://viennaairport.com/jart/prj3/news_press/uploads/db-con_def-uploads/va-news/PA2025/E-68_2025.pdf) discontinues the project, citing economics, airline opposition and capacity changes. Updated current status; retained the historical climate-litigation score. Do not attribute the final abandonment to climate policy. |
| Schiphol | [Dutch government announcement](https://www.rijksoverheid.nl/actueel/nieuws/2025/05/07/kabinet-kiest-voor-nieuwe-aanpak-geluidsoverlast-schiphol-balans-tussen-geluidsreductie-en-beheerste-groei) establishes a noise-based movement cap. Clarified that this is broader environmental gating, not equivalent evidence of a UK-style carbon test. No new precise current cap is asserted in the article. |
| Frankfurt | [Fraport opening announcement](https://www.fraport.com/en/newsroom/press-releases/2026/q1/fraport-inaugurates-the-new-terminal-3.html) confirms operations from 23 April 2026. Corrected article and row status. |
| US federal goal | [FAA 2021 plan](https://www.faa.gov/general/2021-united-states-aviation-climate-action-plan) establishes the historical aviation goal. It does not establish unchanged current policy. Dated the article's claims and marked current federal continuity uncertain in US rows and the commitment filter. |

## Limits that remain visible

International-aviation inclusion outside Britain and Singapore remains unknown in the reviewed handoff; national net-zero targets do not establish it. Toronto and Vancouver remain low-confidence; medium-confidence records have not been silently promoted. This pass independently checks the load-bearing comparisons above, not every current fact across all 30 projects. Historical commitments are not proof of current policy or commitments in force when a project was approved. France and Austria are historical counterexamples; Dutch constraints include noise.

The supplied coastline geometry has no documented upstream provenance in the ZIP. It is retained unchanged as supplied; confirm its attribution/licence before production publication. No production publication has occurred.

## Additional checks against the full handoff

- [Pearson, 11 May 2026](https://www.torontopearson.com/en/corporate/media/press-releases/2026-05-11): the first major LIFT construction programme has launched. Updated the row's status, retaining low confidence in the climate-constraint interpretation. The source describes investment, capacity and operational improvements, not a demonstrated climate approval test.
- [YVR climate policy](https://www.yvr.ca/en/about-yvr/environment/climate): confirms operational net zero by 2030. It does not verify an aircraft-emissions target or resolve the broad expansion programme's approval history. Added verification note; low confidence and international-aviation unknown retained.
- [Avinor progress plan](https://om.avinor.no/en/innovation/third-runway/progress-plan/): reports the 2024 committee's assessment that additional runway capacity is unlikely to be needed before 2040. The supplied prose's assertion of an explicit decarbonisation condition was not established here, so it was replaced with the narrower evidenced statement. The original qualitative row score is retained, with a visible note that it is provisional.
- Scoped the Asian/Gulf and European generalisations explicitly to the selected sample; removed an unsupported assertion that the mixed coding was necessarily conservative. These are editorial qualifications, not a wholesale rewrite.

## Coverage, decision constraints and corporate scopes

The article and interactive now separate emissions coverage from the strength/mechanism of an expansion constraint. The earlier three-stage ladder has been removed. The four existing map categories remain analytical interpretations, with explicit ChatGPT-assisted provenance; they are not official source ratings. No previously uncertain row has been promoted or assigned a new legal category merely from its score.

The [GHG Protocol Corporate Standard, chapters 3–4](https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf) supports the organisation-relative Scope 1/2/3 explanation. [Airport Carbon Accreditation Level 5](https://www.airportcarbonaccreditation.org/about/7-levels-of-accreditation/level-5/) distinguishes operational Scope 1/2 achievement from wider Scope 3 commitments. These references explain accounting boundaries; they do not prove a particular airport's expansion is constrained. The UK budget guidance and CAAS Blueprint cited above support the two contrasting policy examples.

The workbook is now described as an analytical handoff rather than independent evidence. The source footer points to external project/policy references and explains their evidential limits. This framing update is not a claim that every original row's qualitative approval interpretation has been independently verified.

## Editorial consolidation

Moved Gatwick into the opening counterexamples, with the [Planning Inspectorate's September 2025 development-consent announcement](https://www.gov.uk/government/news/gatwick-airport-northern-runway-development-consent-decision-announced) as direct support. Removed the inconclusive Oslo paragraph from the narrative while preserving its dataset record. Singapore is described as a stated strategy requiring delivery, not proof of success or a demonstrated grow-first/decarbonise-later sequence. Removed the unsupported causal implication linking carbon accounting to Heathrow's long history of delay. Regional comparisons explicitly illustrate cases rather than establish a regional ranking.

## Gatwick compatibility clarification

Expanded the prose and Gatwick panel to distinguish binding economy-wide budgets from a mechanical project veto. The decision's reliance on Jet Zero forecasts and policy is documented in [Barclay, Court of Appeal, 2026](https://www.bailii.org/ew/cases/EWCA/Civ/2026/1040.html); the relevant extracts were accessible through search indexing, while direct BAILII access returned an anti-bot block. [39 Essex Chambers' High Court analysis](https://www.39essex.com/our-thinking/gatwicks-northern-runway-project-cleared-for-take-off-r-on-the-application-of-barclay-and-another-v-secretary-of-state-for-transport-and-another-2026-ewhc-1556-admin/) explains the distinction between significant emissions and material impact on meeting targets. The February 2025 ministerial statement supports the qualified approval/conditions timeline. The comparison now acknowledges that both UK and Singapore can approve capacity while relying on future decarbonisation; legal compatibility does not verify delivery. No score or confidence upgrades made.

## Quantified Gatwick–Heathrow comparison (17 September 2026)

Read the primary Gatwick decision letter, paragraphs 154–157 (linked in the article): incremental total emissions 6.344 MtCO₂e in CB6, 0.657%; incremental aviation 5.577 MtCO₂e, under Jet Zero high-ambition assumptions. Dividing by five gives 1.1154 MtCO₂e per year, rounded to 1.12. This is an average over 2033–37, not an estimate for 2050.

Read the full CCC September 2026 report, Table 2.1 and its notes, pp. 33–35 (linked in the article): incremental aviation 0.4 MtCO₂e annual average during CB7, 2.4 in 2050, 4.5 on full expansion in 2054, under Current Trends. Surface access, construction and airport operations are excluded from this table. The 6.9% statistic compares full expansion against 2050 residual CO₂; it does not describe scheduled 2050 expansion or a share of a net-zero budget.

Removed the compressed 6.9% claim from the introduction and explained its denominator beside the comparison. The roughly fourfold scale illustration compares aviation increments only, explicitly qualified by differing dates and assumptions. No like-for-like ratio or spare carbon-budget headroom is claimed. No dataset values or classifications changed.
