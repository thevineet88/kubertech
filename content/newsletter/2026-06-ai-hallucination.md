---
title: "The AI feature everyone wanted, until it started hallucinating"
date: "2026-06-01"
slug: "2026-06-ai-hallucination"
summary: "One decision from a recent build, including where our assumptions were wrong, and where we have room to plan ahead."
---

## The problem

A knowledge assistant needed to answer questions from thousands of internal documents. The obvious move was to connect an LLM to a vector database and call it done.

It worked. Until it didn't.

The assistant was fast, conversational, and convincing. The problem was it sometimes answered with complete confidence using information that didn't exist anywhere in the documentation. The accuracy wasn't bad. It just wasn't reliable enough. "Mostly correct" doesn't hold up when people are making real decisions off the answer.

## The call we made

Instead of making the model smarter, we made the system more honest about what it didn't know. A few things mattered more than expected: smaller retrieval sets instead of pulling everything, better document chunking instead of bigger context windows, metadata filtering before semantic search, confidence thresholds before generating an answer, and letting it say "I couldn't find enough information" instead of forcing a response.

It felt less impressive in a demo. It was far more usable in production.

## Where it broke

We assumed more documents would mean better answers. The opposite happened. As the knowledge base grew, retrieval quality dropped. Similar documents started competing with each other, outdated content surfaced ahead of current content, and the right answer got buried under near duplicates.

The bottleneck was never the model. It was how the information was structured. Good retrieval depends on clean data as much as it depends on embeddings, and we learned that the expensive way.

## The trade-offs

Every choice cost something. A bigger context window meant higher latency and cost. Aggressive filtering improved precision but missed some edge cases. Caching sped things up but risked stale answers after content changed. Streaming made the app feel faster even when the total processing time was identical.

None of it was a clean win. Just trade-offs picked to match what the product actually needed.

## What worked better than expected

Some of the biggest improvements had nothing to do with AI at all. Better loading states made the app feel dramatically faster. Background processing removed dead waiting time from the workflow. Cleaning up API calls cut infra costs more than swapping the model did. Small frontend fixes, fewer re-renders, leaner data fetching, optimistic UI updates, moved user satisfaction more than a bigger model would have.

Sometimes speed is something people feel, not something you measure.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
