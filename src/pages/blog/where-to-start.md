---
layout: "../../layouts/BlogPost.astro"
title: "Where to Start"
date: "2026-04-24"
description: "On reading This Is Vegan Propaganda, the gap it left, and building a small tool to fill it."
slug: "where-to-start"
tags: []
image: "https://tyler-alexander-martin.com/daisy.png"
imageAlt: "Daisy the cow outdoors in a grassy field."
---

*On reading* This Is Vegan Propaganda, *the gap it left, and building a small tool to fill it.*

## Update, July 30, 2026

I went back through this post to fix a mistake and ended up changing one of its conclusions, so it's worth saying plainly what moved.

- **There was a duplicated step.** "No red meat (drop pork)" and "Chicken and fish only" were the same diet under two names, since dropping beef, lamb and pork leaves poultry and fish. The ladder is now eight steps rather than nine, and the two rungs are merged into one.
- **The pescatarian step was wrong, and fixing it inverted the advice.** I had scored it as a solid gain on climate and welfare. Checked against the actual emissions data and slaughter numbers, it is close to neither. Its marginal value falls from 1.19 to 0.56, the worst on the ladder bar strict veganism, and the step that gains most is dropping fish. If you read the original and took "go pescatarian" out of it, that was my error and I'd retract it.
- **Two claims contradicted my own table.** Flexible veganism is not easier than strict vegetarianism, it costs more effort and slightly more adherence risk, and its advantage is social. And the final step's cost was quoted as "the last roughly 8% of impact" when it is 2.5%.
- **Marginal gain is now measured against the last step worth taking** rather than the row above, which is what makes the 0.09 figure for strict veganism reproducible from the table instead of an assertion.
- **The dashboard was rebuilt.** Same model, better chart: the rung that sits off the efficient frontier is now drawn as such rather than as a kink, the headline metric is a chart rather than a table column, and it works on a phone.
- **"What I'm actually doing" is current again**, which is a different diet from the one described in April.

Load-bearing figures now have sources attached. The scores are still estimates and I'd rather be corrected on them than quietly wrong for another three months.

---

There's a moment in Ed Winters' *This Is Vegan Propaganda* where he describes skipping a family event because the people there would be eating meat. He's self-aware about the cost. He knows what he's giving up, he knows how it looks, he's made his peace with it. The honesty is disarming. It's also, for me, a hard stop.

I listened to the book over a few days hiking in Taiwan and finished it convinced of the substantive arguments. The case for reducing (or eliminating) animal products on climate, welfare, and health grounds is strong and carefully made. Winters is a better writer than the "vegan propaganda" title suggests, and the anecdotes land. The story about Daisy, a cow who escaped a slaughterhouse and was cheered on by passersby who a few hours earlier had presumably been buying ground beef, stuck with me for days. Most of us are both the person who cheers and the person who eats, and we usually don't have to notice.

I'm not going to rehearse the case for why any of this matters. I've [written about that separately](https://tyler-alexander-martin.com/blog/animal-welfare), and better writers than me have made the argument at length. What I want to write about is what happens *after* you're convinced, which turns out to be the harder problem.

I finished the book persuaded and also a bit stuck. The family-event anecdote was honest, but it was also a version of the choice I wasn't going to make. And the book's broader framing, that vegan is the only serious endpoint, left me with no sense of where to start if I wasn't going to go all the way.

## The gap the book leaves

Winters makes a strong case that a vegan diet is the gold standard across the three axes that matter: climate, welfare, and health. I don't want to poke holes in that. On the whole I think he's right. But the book has an implicit message and an implicit response, and they don't meet in the middle. The message is *you should be vegan.* The response, for most people with an average Western diet, is *I'm not going to do that, so I'll do nothing.* That failure mode is where most of the available real-world impact gets lost.

I think the "vegan is the only serious option" framing is actively counterproductive. It makes the destination so distant that the journey doesn't start. It treats a 90% reduction in meat consumption as a moral failure rather than an enormous win. Almost any move away from the average Western diet is better than not moving, and broadly the further you go the better, with a couple of exceptions I'll come back to. A person who cuts beef and lamb has done something real. A person who goes vegetarian has done something bigger. Neither of them is vegan, and neither should feel like they've failed the assignment.

What I wanted was a roadmap. If I'm going to change one thing, which thing? If two, which two? Where does the effort start to outweigh the gain? The book doesn't answer this, because the book isn't really trying to.

I should say upfront: I'm learning as I go and I don't have all the answers. What follows is my attempt to build a tool that helps me think, not a prescription for anyone else.

## Effort is not one number

The other thing missing from the book, for me, is a serious treatment of the social cost. Winters acknowledges it. The family-event story is exactly that acknowledgement. But the book's answer is essentially *yes, it's hard, do it anyway.* I understand the answer. I'm not going to follow it.

Part of the reason is that "effort" isn't really one thing. It's at least three:

- **Cognitive effort:** knowing what to order, reading labels, meal planning
- **Social effort:** restaurants, travel, dinners with other people, being a guest in someone's home
- **Adherence risk:** the probability you fall off over a year

These move differently across dietary shifts. Pescatarian is low cognitive but can be high social at some dinner tables. A fully flexible "vegan at home, vegetarian when out" position is high cognitive at home but *lower* social than strict vegetarianism, because you've built in a pressure valve. Collapsing these into one number hides the most interesting part of the picture.

## The framework

I built a simple eight-step ladder from an average Western diet to strict vegan, and scored each step on six dimensions. Starting from a baseline Western diet, the steps are:

1. Weekday vegetarian (~50% meat reduction)
2. No beef or lamb
3. No red meat (drop pork, so poultry and fish only)
4. Pescatarian
5. Vegetarian
6. Vegan at home (flexible)
7. Low-dairy vegetarian
8. Strict vegan

Each step gets three impact scores (climate, health, welfare) and three effort scores (cognitive, social, adherence risk), on a 0 to 100 scale, where 0 is baseline and 100 is strict vegan. Aggregate impact is a weighted average of the three impact axes. Average effort is the mean of the three effort axes.

The key metric is **marginal gain per unit effort**: the change in aggregate impact divided by the change in average effort. It tells you how much you get for what you pay at each rung of the ladder. One wrinkle in how that's calculated, which turns out to matter: it's measured against the last step that was actually worth taking, not simply the row above. If a rung costs more effort than an earlier one without delivering more impact, the ladder should skip it, and the step above it should be priced against what you'd realistically be coming from instead.

One note worth flagging: vegan health doesn't score 100. The plant-based cardiometabolic evidence is strong, but a population-level health score has to account for real-world adherence and nutrient adequacy (B12, iron, omega-3, iodine). A careful vegan does great. An average one does less well.

## The dashboard

<div class="dashboard-embed">
  <iframe
    id="vegan-dashboard"
    src="/vegan-effort-dashboard.html"
    title="Interactive dashboard of dietary steps scored on impact and effort"
    scrolling="no"
    loading="lazy"
  ></iframe>
  <p class="dashboard-fallback"><a href="/vegan-effort-dashboard.html">Open the dashboard in its own tab</a> if it doesn't fit here.</p>
</div>
<style>
  .dashboard-embed { margin: 2.5rem 0; }
  .dashboard-embed iframe { display: block; width: 100%; height: 1720px; border: 1px solid var(--mist, #e8ddd0); border-radius: 14px; background: var(--cream, #faf6f0); }
  .dashboard-fallback { margin-top: 0.6rem; font-size: 0.82rem; opacity: 0.7; text-align: right; }
  /* The embed is wider than the prose column, so let it bleed out on desktop. */
  @media (min-width: 1100px) { .dashboard-embed { width: 1000px; margin-left: calc((720px - 1000px) / 2); } }
</style>
<script>
  /* The dashboard reports its own height, which avoids a hard-coded value that
     is always wrong on either desktop or mobile. The inline height above is the
     no-JS fallback. */
  window.addEventListener("message", function (event) {
    if (event.origin !== window.location.origin) return;
    var data = event.data;
    if (!data || data.type !== "vegan-dashboard-height") return;
    var frame = document.getElementById("vegan-dashboard");
    if (frame && data.height > 200) frame.style.height = data.height + 24 + "px";
  });
</script>

The ladder is ordered by effort, so the curve reads as something close to an efficient frontier. Not quite, though, and the exception is the interesting part. Low-dairy vegetarian sits *below* the line: at equal weights it costs more effort than eating vegan at home while delivering less impact. It's drawn hanging off the frontier on a dashed spur for exactly that reason. If you're willing to do that much work, the flexible option is a better use of it.

The qualitative shape of the curve is fairly robust to reweighting. Cutting beef and lamb stays the best-value move across almost the whole slider range, and the expensive steps stay expensive. That's itself a useful finding. Two things do move once you lean hard on one axis, and they're worth playing with. Push welfare past about 70% of the total and going vegetarian overtakes cutting beef and lamb as the best single move, because welfare counts animals rather than emissions and fish are where the counting gets ugly. Lean on health instead and the top of the ladder inverts: past about 65%, *strict veganism* becomes the dominated rung, since it's the one step that scores worse than the step below it on health. Past about 80%, low-dairy vegetarianism climbs back onto the frontier. Otherwise the disagreements are at the margin, not in the overall shape.

## Four things I didn't expect

**Going pescatarian is close to worthless, and it's the finding I'd have bet against.** My first pass scored it as a solid gain on both climate and welfare. Checking it properly, both were wrong. Farmed fish comes in around 13.6 kg CO2e per kg in [Poore and Nemecek's 2018 dataset](https://ourworldindata.org/environmental-impacts-of-food), *higher* than pork at 12.3 and higher again than poultry at 9.9. Trading chicken for salmon is not a climate win. On welfare it's worse: fish are the category where the animal count explodes, with roughly [124 billion farmed fish](https://faunalytics.org/number-of-farmed-fish-slaughtered-yearly/) slaughtered annually plus one to two trillion wild-caught, against about 80 billion land animals. Nor are they a marginal case for sentience any more; the [evidence that fish feel pain](https://www.ciwf.eu/media/7437870/why-fish-welfare-matters_the-evidence-for-fish-sentience_ciwf-2019.pdf) is well established, and unlike broiler chickens they are mostly killed without any stunning requirement at all. Dropping poultry is a real welfare gain and the added fish burden roughly cancels it. Rescored, the step falls from 1.19 to **0.56 on marginal gain**, the poorest value of any step on the ladder bar strict veganism itself, and it costs 16 points of effort to get there. The mirror image is that dropping fish is one of the best moves available: the vegetarian step nearly doubles, from 1.44 to 2.56.

**Cutting beef and lamb is nearly free.** It scores 4.3 on marginal gain per effort, half again as much as the next best move and better than anything else on the ladder by a clear margin. It gets you about 40% of the way to vegan on climate for an effort cost of two points, because it asks you to change what you order rather than where you can eat. If I could give one piece of advice to someone who wanted to start, it would be this step, and only this step, for six months.

**The flexible-vegan pressure valve is social, not psychological.** I'd assumed "vegan at home, vegetarian when out" would show up as lower adherence risk, since the flexibility is meant to stop you falling off. It doesn't: it scores slightly *worse* on adherence than plain vegetarianism, because you're maintaining two sets of rules instead of one. Where it pays off is socially. It carries the same social cost as strict vegetarianism, 55 on both, while delivering considerably more impact, 89 against 73. It also beats low-dairy vegetarianism outright, on both axes at once. It isn't the easiest step and it isn't the best value on the ladder, but it is the best thing left to do once you're already vegetarian, at 1.9 against strict veganism's 0.09.

**Strict vegan has a marginal gain per effort of 0.09.** Measured from flexible vegan, the last 2.3 points of impact cost 27 points of effort, close to half of what the entire climb from a baseline diet to flexible veganism cost in the first place. Put the other way: eating vegan at home and vegetarian out captures about 97% of the impact of strict veganism at roughly two-thirds of the effort. This is where the cost-benefit argument runs out and identity or moral commitment takes over. That's a legitimate reason to do it, and I'm not dismissing it, but it's a different kind of argument, and the numbers point at a real inflection.

Three quick caveats. The scores are estimates, generated with Claude Opus 4.7 and then adjusted by me. Some will argue that using an AI for this is unscientific and I should be reading the primary literature instead. That's a fair objection, and the pescatarian step is the case for it: the first-pass numbers were confidently wrong in the same direction the conventional wisdom is wrong, and it took going to the actual emissions data to catch it. I've since checked the load-bearing figures against sources and linked them. The ordinal structure is defensible; the exact numbers are not. And the effort scores are anchored to urban UK life. Flexible vegan in London is a different animal from flexible vegan in rural France.

## What I'm actually doing

Vegetarian at home, dairy included, and flexible when I'm out. When I do eat meat out I lean towards chicken, and beef or pork only when it looks really good or the context makes it worth it, which in practice means barbecue when I'm in Texas rather than a Tuesday.

Two things about that are worth naming. The first is that it isn't a rung on my own ladder. I've ended up using the same trick as step 6, vegetarian at home and flexible outside instead of vegan at home and vegetarian outside, one level down. That pattern is the most useful thing the framework taught me and it's the thing the ladder is least able to describe, because it assumes each step is a single rule applied everywhere. Somewhere between steps 4 and 5 in impact, but at lower social effort than either, and no row in the table to put it in.

The second is that leaning chicken rather than fish was a lucky accident that the rescoring turned into a deliberate choice. I'd have told you six months ago that fish was the virtuous option. The numbers say the opposite, and now that I've looked at them properly I'd rather have the chicken.

Dairy is the open question. I love yogurt, and I'm not ready to give it up. Low-dairy-ish is probably where I land after some more experimentation. On eggs, we're organic-only at home, which the ladder doesn't capture. It treats egg sourcing as fixed, but the [welfare delta between caged and organic](https://tyler-alexander-martin.com/blog/eggs-you-cant-see/) is large enough that it's worth naming.

So there's still a gap between what the model says and what I'm doing, smaller than it was but real, and I don't want to paper over it. What the framework gives me isn't a prescription, it's a map. I can see where I am, I can see what it would cost to move one step further, and I can decide with open eyes. That's more useful to me than being told what I should do.

The broader point I'd make to anyone reading this: don't try to get to the far right of the curve in one move. Start with a nudge. See how it goes and how it feels. If it sticks, nudge again. A 90% reduction in meat that you can sustain for the rest of your life is worth vastly more than a 100% reduction you abandon in three months. This is about being practical and making changes that stick, not about arriving at an ethically pristine endpoint.

## Close

The book gave me the conviction. The framework gave me a map, and also surfaced, pretty clearly, where I'm not following it. That's fine. I'm learning as I go.

A follow-up post is coming on what the framework doesn't capture: the limits of this kind of analysis, and what policies, defaults, and social norms could shift the curve itself. Most of the effort cost in these decisions isn't really personal. It's structural. That's worth its own piece.

I still eat meat occasionally. The framework and I are both fine with that.
