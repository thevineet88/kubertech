---
title: "AI made code reviews harder than coding"
date: "2026-05-01"
slug: "2026-05-ai-code-review"
summary: "AI-generated code rarely fails outright, it just looks reasonable enough to merge. That's a harder problem than bad code ever was."
---

## The problem

This year we started spending less time writing code and more time reading it. AI-generated code got good fast, that was never the hard part. The hard part was trust. It rarely produced catastrophic code. It produced code that looked reasonable enough to merge, which is a much harder problem to catch.

## The call we made

Reviewing generated code meant understanding logic none of us had actually written. Variable names looked fine, comments sounded confident, the architecture usually made sense on the surface, until one small assumption broke something in production. We changed the review question itself: instead of "does this work," we started asking "would we accept this pull request if another engineer had written it." That single reframing caught more real issues than any prompt tuning did.

## Where it broke

The new review bar slowed merges down at first. Some reviewers pushed back that it felt like extra process for no clear reason, until the first few real bugs it caught made the case on its own.

## The trade-offs

Slower reviews cost velocity in the short term. But the alternative, trusting confident-looking code because it read well, was costing us more in production incidents than the slower review process cost in time.

## What worked better than expected

Treating AI-written code with the same scrutiny as a stranger's pull request, rather than either blind trust or blind suspicion, turned out to be the calibration that actually worked.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
