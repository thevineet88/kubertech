---
title: "We reduced our cloud bill without touching infrastructure"
date: "2026-02-01"
slug: "2026-02-cloud-cost-without-infra"
summary: "Reserved instances and rightsizing barely moved the needle. The real cost was hiding in services that quietly polled every few minutes doing nothing."
---

## The problem

A client's cloud bill had crept up quietly over several sprints. No single change caused it. Every sprint added one more queue, one more cache, one more managed service that cost "almost nothing" on its own. Collectively, it stopped being nothing.

## The call we made

Our first pass was the obvious one: reserved instances, storage lifecycle policies, rightsizing compute. All worthwhile. None of it moved the number much. The real issue turned out to be architectural. Several background jobs were waking up every few minutes to check if there was anything to do, most of the time there wasn't. We were paying for systems to sit and wait.

We moved that flow to event-driven triggers instead of polling on a timer.

## Where it broke

The migration wasn't dramatic, but it exposed how many small assumptions had gone unquestioned. Some jobs depended on that polling cadence in ways nobody had documented, so a few had to be re-thought before they'd work correctly on triggers instead of timers.

## The trade-offs

CPU usage barely moved. The monthly bill did. That gap was the real lesson: infrastructure doesn't usually get expensive because of one bad service, it gets expensive because of accumulated assumptions nobody goes back and checks.

## What worked better than expected

The cost savings came from architecture, not tuning. Rightsizing and reserved instances are still worth doing, but they weren't where the money was hiding.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
