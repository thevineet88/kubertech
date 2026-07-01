---
title: "The frontend felt slow. The backend wasn't."
date: "2026-04-01"
slug: "2026-04-frontend-felt-slow"
summary: "Every dashboard said the app was healthy. Users still called it slow. The fix wasn't performance, it was perceived responsiveness."
---

## The problem

Every dashboard said the app was healthy. API latency was low, database queries were fine, Core Web Vitals looked acceptable. Users still described it as slow. That gap between the metrics and the complaints was the actual problem worth solving.

## The call we made

We watched session recordings instead of dashboards. Every action followed the same pattern: click, spinner, network call, render, done. Technically correct. It just made people wait to feel like anything was happening. So we changed the interaction model, not the backend. Buttons responded immediately. Lists updated optimistically before the server confirmed anything. Routes started preloading before a click even landed. Long-running work moved off the main interaction path and into the background.

## Where it broke

Optimistic updates meant occasionally showing a state that had to be rolled back if the server disagreed, which needed careful handling so it didn't feel worse than a spinner would have. Getting that rollback path right took more care than the happy path did.

## The trade-offs

The app wasn't meaningfully faster by any dashboard metric. It just stopped making people wait to feel like something was happening. That's a real trade-off: engineering effort went into perception, not raw performance numbers.

## What worked better than expected

People don't experience milliseconds. They experience hesitation. Once we treated that as the actual metric, the fixes were smaller than expected but the impact on how the app felt was disproportionate.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
