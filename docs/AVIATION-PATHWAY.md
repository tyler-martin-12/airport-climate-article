# Aviation explainer: evidence and calculation, 17 September 2026

## Present-day passenger example

- Route: London Heathrow (LHR) to New York JFK; direct, one way, economy; one passenger.
- [DESNZ 2026 full-set workbook](https://assets.publishing.service.gov.uk/media/6a29392bade52dc0882218a8/ghg-conversion-factors-2026-full-set.xlsx), `Business travel- air!J28`: 0.06826 kg direct CO₂/passenger-km, long-haul to/from UK, economy, without RF. Retrieved from the [current publication](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026); latest July update concerns the flat file. Inspected the actual XLSX cells and sheet guidance, not a third-party calculator.
- Do not use I28 (0.06926 kg CO₂e, including CH₄/N₂O), E28 (0.11704 with non-CO₂ uplift), or add well-to-tank emissions to the CO₂-only number without changing its label.
- [NATS UK AIP, EGLL AD 2.2](https://www.aurora.nats.co.uk/htmlAIP/Publications/2025-12-25-AIRAC/html/eAIP/EG-AD-2.EGLL-en-GB.html): 51°28′39″N, 0°27′41″W. [FAA JFK AD 2.2](https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part3_ad_2.0_new_york.html): 40°38′23.741″N, 73°46′43.292″W. These reference points suffice for a rounded illustrative distance, not navigation.
- Haversine distance with mean Earth radius 6,371.0088 km = 5,539.429319 km. Multiply by 0.06826 = 378.121445 kg CO₂; display **about 380 kg**.
- Workbook guidance A49 and methodology §8.38 say the 8% distance uplift is already in the factor. Do not apply it twice. The fleet-average factor incorporates cabin/freight allocation and is not a measurement of a named flight. “Today” means a reporting estimate using the latest factors, not real-time 2026 aircraft monitoring.
- This excludes upstream fuel emissions and non-CO₂ warming (contrails, NOx, etc.). Government guidance recommends including non-CO₂ effects for full corporate footprint reporting; the deliberate CO₂-only selection here isolates the accounting question. It is not a full climate-impact estimate.

## Why no numerical London–New York 2050 bar

The reviewed published pathway decompositions are sector aggregates, not an economy-passenger LHR–JFK forecast. No directly comparable, cabin-allocated route decomposition was established. DfT has a geographically detailed model; that does not make the report's aggregate wedges a route forecast. A claim that no route-level model exists would be too strong and is not made.

At Tyler's request, both bars now share a rounded 380 kg illustrative starting budget and sit directly together. The lower bar rescales the official shares: 136.8 residual, 76 SAF, 76 efficiency, 91.2 demand, displayed as 137/76/76/91 kg equivalents. This is an explicitly labelled arithmetic analogy, not a physically comparable route forecast: sector CO₂e abatement shares and present-day passenger direct CO₂ have different accounting boundaries. The demand segment describes avoided journeys, never cleaner emissions on a flight still taken. The disclaimer appears above the bars, in the caption and in expanded methodology. No 2050 route emissions value is assigned.

## Older Jet Zero scenario relevant to Gatwick

[2022 analytical annex](https://assets.publishing.service.gov.uk/media/62f21404d3bf7f75b61f8c22/jet-zero-strategy-analytical-annex.pdf), pp. 9–10, 24–25; [strategy](https://assets.publishing.service.gov.uk/media/62e931d48fa8f5033896888a/jet-zero-strategy.pdf), pp. 15–16, 48–51:

- High Ambition: 2% annual fuel-efficiency improvement, 2017–2050; SAF uptake 10% in 2030, 22% in 2040, 50% in 2050; 27% of air transport movements zero-emission by 2050. Zero-emission uptake is concentrated in smaller aircraft/domestic and short-haul routes; it supplies only 4% of overall abatement, not 27% of emissions reduction.
- Strategy p.16 shows approximate 2050 shares against its 52.2 MtCO₂e Policy-Off baseline: 27% fuel efficiency, 17% SAF, 4% zero-emission aircraft, 15% ETS/CORSIA and 37% abatement outside aviation. This is a different scenario, denominator and year of modelling from the CCC graphic.
- Residual illustrative emissions: 35.4 MtCO₂e in 2030, 28.4 in 2040 and 19.3 in 2050. Annex B uses SAF savings of 67–75% in its illustrative presentation. Whole-economy accounting instead gives 15.4 MtCO₂e residual in 2050, with production emissions assigned to other sectors. Neither is a measurement of all physical exhaust CO₂.
- Carbon prices change demand; ETS allowances and CORSIA offsets must not be equated with permanent removals. High Ambition extends and strengthens international carbon pricing beyond the then-agreed CORSIA period. The outside-sector wedge is not labelled as already delivered permanent engineered removal.

## Current forecast versus recommended pathway

[DfT UK Aviation Forecast 2026](https://assets.publishing.service.gov.uk/media/6a33fea9c6e94f095f3efa8a/2026-uk-aviation-forecast.pdf), §§5.135–5.140, 7.10–7.19:

- Current Trends models around 17% SAF uptake from 2040 to 2050; Technology Development about 33% in 2050. The [SAF Mandate guide](https://www.gov.uk/government/publications/about-the-saf-mandate/the-saf-mandate-an-essential-guide) states a 22% headline 2040 obligation. This is not a contradiction or a cut in the target: §5.137 explains the GHG-savings design, with higher assumed savings per unit reducing required physical volume. Do not call 17% the statutory volumetric target.
- Updated aircraft and operational assumptions differ from 2022. Current Trends zero-emission aircraft are only up to 35-seat commuter aircraft, approximately 3% of movements in 2050. The model does not replace transatlantic airliners with zero-emission aircraft.
- Current Trends is not a delivered net-zero pathway. There is an internal 41.4/41.1 Mt discrepancy in forecast §7.15 versus Figure 7-5; no numerical national residual from that passage is introduced here. The existing article uses CCC's consistent Current Trends comparison.

[CCC September 2026 Heathrow advice](https://www.theccc.org.uk/wp-content/uploads/2026/09/Advice-to-the-UK-Government-on-proposed-Heathrow-Airport-expansion-64r872u923i92184y34r2398u.pdf), pp. 27–28, 43–45, 61–64:

- The graphic reproduces Figure 3.1's rounded shares: engineered removals 36%, slower demand growth 24%, efficiency 20%, SAF 20%. Denominator: 2050 emissions in CCC's no-further-decarbonisation-action baseline, including proposed Heathrow expansion, excluding military. This is **not** today's emissions or DfT Current Trends.
- The recommended Net Zero Aviation Pathway assumes 38% SAF in 2050, central fuel-efficiency improvements averaging 0.9% annually across the modelled period, central operational efficiency, and permanent engineered removals sufficient to balance residuals. The rate is not imposed on LHR–JFK.
- Demand effects arise from passing decarbonisation costs into fares, with a small rail-diversion effect. Not a technological improvement to each passenger journey. Aircraft efficiency and fuel use, SAF, demand and costs interact: percentage wedges are not independent causal constants.
- Hydrocarbon fuels persist for most flights; novel aircraft contribute little before 2050, primarily on shorter routes. SAF can recycle carbon rather than add new fossil carbon, with feedstock/production-dependent savings. Capturing CO₂ to make fuel and re-emitting it is not permanent storage. DACCS/BECCS remove and store carbon; generic offsets and nature-based removals do not establish equivalently permanent compensation for fossil CO₂.
- The recommended pathway requires additional policy. It was not the scenario used to approve Gatwick. The article connects the mechanism, not the exact CCC allocation, to Gatwick's reliance on projected decarbonisation.

## Validation

`python3 tests/pathway.py`: independently recomputes distance, single-uplift calculation and rounding, checks complete sector shares, null route forecast and rendered metric caveats. Existing 30-record dataset and syntax checks pass. Browser checks of the actual article at 1280, 390 and 360 px: CSS loaded, both bars rendered, no horizontal overflow, methodology opens by keyboard, map retains 30 records. Screenshots inspected separately; no physical-phone claim.
