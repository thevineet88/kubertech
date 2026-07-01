---
title: "We deleted 40 components from our design system"
date: "2025-11-01"
slug: "2025-11-deleted-design-system-components"
summary: "A design system with a component for every edge case left nobody sure which one to use. We cut 40 of them and confidence went up."
---

## The problem

Design systems have a way of only ever growing. Every new requirement becomes another variant, another prop, another exception nobody wants to remove later. Ours got there faster than we expected. Buttons had a dozen variants, cards had five layouts, forms handled every edge case anyone had ever asked for.

On paper it looked flexible. In practice nobody on the team knew which component to reach for anymore, so people just copied whatever existing screen looked closest and tweaked it, which is exactly the thing a design system is supposed to prevent.

## The call we made

New engineers were spending more time reading component docs than writing features, which is a bad sign for a system meant to make things faster. So instead of writing more documentation to explain the sprawl, we started deleting components.

That felt wrong at first. It's strange watching real engineering hours get thrown out. But every deletion forced a real question: was this solving an actual recurring problem, or just a one off implementation detail that got generalized because nobody wanted to say no at the time.

## Where it broke

A lot of components didn't survive that question. Highly configurable ones got replaced with smaller, more opinionated pieces that only did one thing well. Teams started composing screens out of a handful of predictable primitives instead of hunting for yet another specialized component that half fit.

## The trade-offs

The library got noticeably smaller, and for a system that had been treated as a point of pride internally, that was a hard sell at first. Fewer options can feel like a step backward if you're used to counting features as progress.

## What worked better than expected

Developer confidence actually went up. Fewer choices, fewer props to remember, fewer migration headaches when something changed. The healthiest systems aren't the ones with the most components. They're the ones people reach for without thinking twice.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
