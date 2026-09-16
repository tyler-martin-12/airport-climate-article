---
layout: "../../layouts/BlogPost.astro"
title: "The world is building airports. Britain is arguing about one."
date: "2026-09-16"
description: "Heathrow's third runway has become a test of Britain's carbon budgets. Around the world, countries with climate targets are expanding airports anyway. The difference is not ambition so much as what the target is allowed to constrain."
slug: "airport-climate"
tags: ["aviation", "climate", "policy"]
---

My wife Sarah works for Britain's Climate Change Committee.

Recently she was telling me about Heathrow. The government wants a third runway. Heathrow wants a third runway. And the Climate Change Committee has just said, in unusually plain language, that the government cannot expand the airport under current policy without requiring aviation to clean up its emissions much more aggressively. The Committee estimates that the full impact of Heathrow expansion would account for 6.9% of the UK's remaining positive emissions in 2050. ([CCC, 16 September 2026](https://www.theccc.org.uk/publication/advice-to-the-uk-government-on-proposed-heathrow-airport-expansion/))

At roughly the same time, I kept watching videos from The B1M about airports that made Heathrow look almost quaint, including its films on [Dubai’s Al Maktoum expansion](https://www.theb1m.com/video/dubai-is-building-the-world-s-biggest-airport) and [Singapore’s Changi Airport](https://www.theb1m.com/video/why-the-worlds-most-beautiful-airport-doesnt-collapse). Dubai is building out Al Maktoum into a five-runway mega-hub. Singapore has started work on Changi Terminal 5. India has built new airports for Delhi and Mumbai. Istanbul opened an enormous new hub in 2018. Hong Kong has just completed a third runway system.

This seemed odd. Britain was having an exquisitely detailed argument about whether one more runway could fit inside a carbon budget, while much of the world appeared to be pouring concrete.

So I built a dataset.

It is not a census of every airport project. It is a deliberately mixed sample of 30 major expansions, weighted towards new airports, runways, large hubs and useful rich-country comparisons. For each one I tried to answer a narrower question than "does this country care about climate?"

**Did climate policy materially constrain the decision to add airport capacity?**

<div class="airport-embed">
<iframe id="airport-climate" src="/airport-climate/" title="Interactive map and dataset of major airport expansions and the role of climate policy" loading="lazy" scrolling="no" style="width:100%;height:1700px;border:1px solid var(--mist);border-radius:14px;display:block;background:var(--cream)"></iframe>
<p class="airport-fallback"><a href="/airport-climate/">Open the interactive in its own tab</a>.</p>
</div>
<style>
.airport-embed{margin:2.5rem 0}.airport-fallback{margin-top:.6rem;font-size:.82rem;opacity:.72;text-align:right}@media(min-width:1100px){.airport-embed{width:1040px;margin-left:calc((720px - 1040px)/2)}}
</style>
<script>
window.addEventListener('message',function(event){var frame=document.getElementById('airport-climate');if(!frame||event.origin!==window.location.origin||event.source!==frame.contentWindow)return;var data=event.data;if(!data||data.type!=='airport-climate-height'||!Number.isFinite(data.height))return;if(data.height>=120&&data.height<=20000)frame.style.height=Math.ceil(data.height+16)+'px'});
</script>

## Britain is not alone

The simplest version of the story does not survive contact with Britain itself. [Gatwick's Northern Runway project received development consent in September 2025](https://www.gov.uk/government/news/gatwick-airport-northern-runway-development-consent-decision-announced). The same national carbon-budget framework that makes Heathrow contentious can accommodate airport expansion. The question is what a particular project must demonstrate, not whether Britain builds airports.

That approval was not a quick exemption from the rules. A [provisional decision in February 2025](https://www.gov.uk/government/speeches/transport-planning-gatwick-airport) led to further consideration of conditions, including noise and public transport, before final consent and subsequent litigation.

The carbon reasoning matters more than the headline approval. The government accepted that Gatwick would add emissions, but concluded that these could be managed within its aviation-wide Jet Zero strategy and its plans for meeting national targets. It relied on projected decarbonisation, acknowledging uncertainty about the technologies involved. The budgets constrain the economy as a whole; they do not automatically prohibit every project that increases emissions. ([Court of Appeal's account of the decision](https://www.bailii.org/ew/cases/EWCA/Civ/2026/1040.html))

The legal distinction was between a significant emissions increase and one that would materially undermine meeting the UK's targets. Those are not the same finding. A decision surviving legal challenge does not demonstrate that the forecast reductions will actually arrive. ([Analysis of the High Court judgment](https://www.39essex.com/our-thinking/gatwicks-northern-runway-project-cleared-for-take-off-r-on-the-application-of-barclay-and-another-v-secretary-of-state-for-transport-and-another-2026-ewhc-1556-admin/))

Gatwick therefore exposes a question that a simple approved/refused comparison misses: **how much confidence in future decarbonisation is enough to approve expansion now?**

The European comparisons complicate the picture further.

France is the clearest counterexample. Paris Charles de Gaulle was supposed to get a huge Terminal 4. In 2021 the French government told the airport operator to abandon the project because it no longer matched the country's environmental ambitions. Paris is now planning substantial modernisation again, but the cancellation matters. Climate policy did not merely require a greener terminal. It helped stop a capacity project.

Austria provides an even stranger case. In 2017 a court rejected Vienna Airport's proposed third runway partly because of its climate impact. The decision was later overturned by Austria's Constitutional Court and the runway ultimately survived the legal process. The operator subsequently [abandoned the project in November 2025](https://viennaairport.com/jart/prj3/news_press/uploads/db-con_def-uploads/va-news/PA2025/E-68_2025.pdf), citing costs, airline opposition and reduced runway-capacity pressure. That makes Vienna less a clean story of climate policy defeating expansion than a demonstration that aviation carbon can become a question on which permission itself turns.

Then there is Amsterdam. Schiphol is still investing heavily in its infrastructure, but Dutch governments have also spent years trying to constrain flight numbers, principally around noise and environmental impacts. The exact cap has moved through litigation and politics. The important point is that the policy argument is about how much aviation the hub should accommodate, not simply how efficient the terminal buildings can become.

These cases establish that Britain has peers in bringing climate or wider environmental limits into capacity decisions. A selected sample cannot tell us how much more restrictive Europe is overall.

But that is only half the result. Europe is still expanding airports too. Frankfurt [opened Terminal 3 in April 2026](https://www.fraport.com/en/newsroom/press-releases/2026/q1/fraport-inaugurates-the-new-terminal-3.html). Madrid is planning a major expansion. Lisbon has selected a site for an entirely new airport that could eventually be enormous. Dublin is trying to raise its passenger cap. Copenhagen is expanding Terminal 3.

The dividing line is not "Europe says no, everyone else says yes". It is messier than that.

## Singapore makes the distinction clearer

Singapore is the comparison I find most useful because it removes an easy explanation.

You could look at Dubai or Beijing and say that Britain simply has a more ambitious climate regime. Singapore makes that harder. Its [Sustainable Air Hub Blueprint](https://www.caas.gov.sg/sustainability/sustainable-air-hub-blueprint/) explicitly targets net-zero emissions from **domestic and international aviation by 2050**. A [sustainable aviation fuel levy now starts with departures on 1 January 2027, for tickets sold from 1 October 2026](https://www.caas.gov.sg/resources/media-and-publication/newsroom/sustainable-aviation-fuel--saf--levy-to-be-deferred/). The state is not ignoring aircraft emissions.

It is also building Changi Terminal 5, designed to add roughly 50 million passengers a year in its first phase.

Singapore's policy is therefore not "aviation growth does not matter for climate". It is closer to: **grow the hub and decarbonise the aviation that uses it**. The blueprint describes its approach in almost exactly those terms, balancing environmental sustainability with the competitiveness and continued growth of the air hub.

That is a stated strategy, not evidence that the planned growth and emissions reductions will ultimately be reconciled.

In Britain, the question is not only whether aviation can reach net zero by 2050. The emissions on the way there have to fit inside a sequence of economy-wide carbon budgets. The Sixth Carbon Budget, covering 2033-37, is the first formally to include the UK's share of international aviation and shipping; the Seventh does too. ([UK government](https://www.gov.uk/guidance/carbon-budgets))

That makes the emissions consequences a question for the whole economy. If aviation emits more, something else has to emit less, aviation policy has to become tougher, or removals have to make up the difference. But Gatwick shows that deciding whether a project fits still involves forecasts, policy assumptions and ministerial judgement. A binding budget is not a mechanical project-level veto.

The CCC's new Heathrow advice makes the consequence explicit. Under current policy, it says, aviation emissions would not fall at all by 2050 even without Heathrow expansion. Its answer is not an unconditional ban on the runway. It says expansion could be compatible with the carbon budgets if government legislates stronger measures that make aviation fully address its residual emissions by 2050, including engineered removals where necessary.

The UK–Singapore contrast is therefore one of institutional requirements, not a clean division between restricting growth and trusting technology. Both can approve expansion while relying on future decarbonisation. Britain brings those assumptions into a legally binding economy-wide budget framework; that does not remove the uncertainty or settle every planning decision.

## What is covered, and what is constrained?

Two questions help separate these promises. **Which emissions are covered?** A target might stop at airport operations or include aircraft and international aviation. **What constrains the decision?** It might be an aspiration, a planning consideration or a binding requirement capable of limiting capacity. Our map interprets the evidence about the second question; it is not an official legal classification.

This is different from the [GHG Protocol's Scopes 1, 2 and 3](https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf), which describe emissions relative to an organisation: direct emissions, purchased energy and other indirect value-chain emissions. An airline's fuel burn is its Scope 1; aircraft emissions can sit in an airport operator's Scope 3. Airport operational net zero often concerns the operator's Scopes 1 and 2. A national carbon budget is a different accounting and legal framework, not another corporate scope. Neither a broader footprint nor a higher scope number automatically means a stronger constraint on expansion.

The distinction matters because a compatibility assessment can expose assumptions that a headline target leaves unstated. It can also accept them: the existence of an assessment does not tell us how demanding its evidential threshold will be.

## The rest of the world is building

Once you move outside Europe, the centre of gravity shifts.

In the developing Asian and Gulf projects in this sample, airport capacity is generally framed as strategic infrastructure. Delhi's new Noida airport, Navi Mumbai, Beijing Daxing, Hong Kong's third runway system and Istanbul's mega-airport are responses to congestion, urban growth, tourism, trade and hub competition. Dubai's ambition for Al Maktoum is on another scale again.

Climate policy is not absent from these projects. New airports advertise efficient buildings, solar power, electric ground vehicles and sustainable design. National governments have net-zero or carbon-neutrality pledges. But in most of the cases I reviewed, I found much less evidence that the emissions from the additional flights were allowed to determine whether the capacity should exist.

Australia sits somewhere in between. Western Sydney has gone through a substantial environmental approval process, and Melbourne's third runway is proceeding under a national net-zero framework. Climate and environmental effects are assessed. They have not functioned like the British carbon-budget test.

North America is similar in another way. The United States adopted a federal aviation decarbonisation goal in 2021, alongside very large airport capital investments. That historical plan is not evidence of an unchanged federal climate commitment today. Much of that investment is terminal redevelopment rather than new runway capacity, which makes the comparison imperfect. But the basic policy architecture still looks more like "decarbonise the sector while modernising and growing the system" than "prove this airport project fits within an economy-wide carbon budget".

This is also where my dataset becomes least satisfying. Terminal projects are not the same thing as runways. A replacement concourse at JFK can improve an airport without enabling anything like the capacity jump of a new greenfield airport. The map deliberately shows both because they reveal how different countries talk about airport investment, but the strongest comparisons are runway against runway and new airport against new airport.


## What this comparison can and cannot say

There are two reasons not to turn the four colours on the map into a league table.

First, airport decisions are path-dependent. Brisbane's new parallel runway opened in 2020 after a planning process that long pre-dated Australia's current statutory net-zero framework. Beijing Daxing opened in 2019. Comparing those decisions directly with Heathrow in 2026 would confuse chronology with policy preference. The interactive therefore shows current climate commitments alongside the project status, but the prominence score is based on the role climate played in the capacity decision, not on how ambitious the country looks today.

Second, "environment" is broader than carbon. Schiphol's constraints are inseparable from noise and local pollution. Vienna's runway litigation involved a particular legal context. Dublin's passenger-cap argument includes surface access and planning conditions. The reviewed coding includes broader environmental gating at Schiphol; it should not be read as a climate-only ranking. Its noise constraint is not equivalent to Britain's carbon-budget test.

The categories are therefore best read as an interpretation of **institutional friction**. The dataset was assembled with ChatGPT assistance; the classifications are analytical judgements, not ratings issued by the linked sources. The workbook records that analysis but is not independent evidence for it. At one end, climate is something a project must survive. At the other, it is something the airport is expected to manage while the strategic case for expansion is largely taken as given.

I also left unknowns as unknowns. The phrase "net zero by 2050" is easy to find in national plans; whether it explicitly includes international aviation on a comparable accounting basis often is not. The interactive only marks that inclusion as established for the UK and Singapore, supported by the government sources linked above. Elsewhere, “Not explicit” means it has not been established in this research, not that the country excludes aviation.

## What the argument is really about

I started this expecting to write one of two articles.

The first was that Britain had become an outlier, paralysing itself over Heathrow while the rest of the world built.

The second was that the apparent global airport boom was misleading, and that other rich countries were quietly imposing the same constraints.

Neither is quite right.

Britain has peers. France has cancelled airport capacity on environmental grounds. Dutch policy has tried to constrain Schiphol. Austria has litigated a runway through the climate question. These cases show several ways environmental limits can enter a capacity decision; they do not establish a ranking of continents.

But explicit aviation climate commitments also coexist with substantial expansion. Singapore plans hub growth alongside decarbonisation. Whether the promised reductions can keep pace remains a question of delivery, not something the target settles.

Britain's unusual feature is not that it has a climate target. Almost everyone in this dataset has one of some kind. It is that international aviation is being pulled inside legally binding economy-wide carbon budgets, making the emissions enabled by a runway harder to leave in a separate box.

That compatibility requirement is consequential. It does not, by itself, explain Heathrow's long history of delay, or establish that every proposed expansion should fail.

A net-zero target tells us where a government says aviation should end up. An expansion decision reveals what it requires before allowing more capacity. The useful comparison is between those requirements, the confidence placed in future decarbonisation, and whether the promised emissions reductions arrive.
