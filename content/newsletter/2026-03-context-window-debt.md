---
title: "Context windows are becoming the new technical debt"
date: "2026-03-01"
slug: "2026-03-context-window-debt"
summary: "Bigger context windows made retrieval lazy. Curated, smaller context beat sending everything, every time we tested it."
---

## The problem

Every model release brags about the same number now. 100k, 200k, half a million tokens. The temptation is obvious: if the window's that big, why bother deciding what to send.

We fell for it too, for a while. Instead of carefully picking what to retrieve, we just sent more. Whole documents, past conversations, old tickets, meeting notes. The assistant had access to everything.

Everything turned out to be the problem.

## The call we made

Contradicting versions of the same document sat next to each other in context. Outdated policy pages sat next to current ones. Retrieval got lazy because it didn't have to be precise anymore, the model could just wade through it all. And once that habit set in, nobody wanted to fix the chunking or build the metadata filters, because why bother when the model could "figure it out."

That worked, for a while. Then costs crept up, latency crept up, and debugging turned into a nightmare because every request carried hundreds of pages nobody could realistically read through. A small doc update somewhere unrelated would quietly change the model's behavior on a completely different question, because it was all sitting in the same blob of context.

## Where it broke

We pulled back. Smaller, curated context beat huge prompts stuffed with loosely related material, every time we tested it side by side. Better retrieval logic did more for output quality than any token limit increase ever did.

## The trade-offs

Going smaller meant more upfront engineering work, cleaner chunking, real metadata, actual filtering logic. It's slower to build than just pointing a bigger window at everything. But it's the difference between a system you can reason about and one you're just hoping behaves.

## What worked better than expected

The biggest gains came from deciding what to leave out, not what to include. A model that can technically read everything doesn't mean it should.

## Where we have room to plan ahead

1-2 new builds this cycle, full-stack, cloud, or AI-integration work. Worth flagging early if capacity needs to shift.
