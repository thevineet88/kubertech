---
title: "We stopped measuring tokens. We started measuring confidence."
date: "2026-01-01"
slug: "2026-01-tokens-vs-confidence"
summary: "Token usage went down, cost went down, satisfaction stayed flat. The real signal was how often the assistant admitted it didn't know."
---

## The problem

Early on, every post-release conversation started the same way: how many tokens did we burn this week. We built dashboards for it, alerts for it, weekly reports for it. It felt like the responsible thing to track since tokens map directly to cost.

Then usage dropped. Latency dropped. Cost per request dropped. And user satisfaction just sat there, flat.

That's an uncomfortable number to stare at when you've spent months optimizing the wrong thing.

## The call we made

We went back through support tickets and session recordings instead of dashboards. Nobody was complaining that a response took two seconds instead of one. They were annoyed when an answer sounded completely sure of itself and turned out to be wrong. Trust broke not because the system was slow, but because it occasionally answered things it had no business answering.

So we swapped the questions we were asking. Not "how many tokens did this cost," but how often the assistant admits it doesn't know, how often people rephrase the same question, which documents keep getting pulled but never actually cited, which answers send someone off to search manually anyway.

We added confidence thresholds. Below a certain retrieval quality, it just says it can't find enough information instead of guessing. The product team was nervous about this, worried users would see too many "I don't know" responses and lose faith in it.

## Where it broke

The opposite happened, and it took us a minute to trust that it wasn't a fluke. People trusted the assistant more once it started admitting uncertainty. Guess that tracks with how trust works with actual humans too.

## The trade-offs

Token usage went up after we added the richer verification steps, which by our original metric made the system worse. It didn't. It made it a product people actually relied on instead of one they double checked out of habit.

## What worked better than expected

None of this shows up on a cloud billing dashboard. Confidence isn't a line item. But it's the thing people actually feel when they use something, and once you lose it, it's slow to earn back.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
