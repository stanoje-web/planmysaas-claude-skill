# Stage 1.1 — Problem validation

Generate `./planmysaas-blueprint/01-01-problem-validation.md` with the structure below. This is the foundation every later stage reads from — get it specific.

## Output structure

```markdown
# <Project name>

> One-line summary

## Problem statement
2-3 sentences. What's broken today? Who feels the pain? Why hasn't it been solved already?

## Evidence the problem is real
Qualitative signals a founder can point to today — forum complaints, subreddit threads, App Store 1-star reviews, manual workarounds people already build, time or money people already spend coping with this. 3-5 signals, each concrete enough to go verify.

## Primary sufferer
Who feels this pain hardest (not the whole market — the sharpest edge of it). One sentence, specific.

## Current workarounds
What people do today in the absence of a tool — spreadsheets, hiring someone, a stack of disconnected apps, doing nothing and eating the cost. List 2-4.

## Cost of the problem
Quantify directionally — hours per week lost, dollars leaked, deals missed, stress/emotional cost. OK to use ranges and label them "directional estimate."

## Root cause (5 whys)
Drill from the symptom to the root cause, 3-4 levels:
1. Why does this problem happen? →
2. Why does that happen? →
3. Why does that happen? →
4. (optional) Why does that happen? →
Land on a root cause that's actually addressable by a product.

## Problem Severity Score
Score 1-10. One-line reasoning — what pushes it up (frequency, cost, urgency) and what caps it (workarounds are tolerable, small audience).

## Validation Status
**Verdict:** Validated / Partially Validated / Unvalidated
Reasoning in 2-3 sentences. State plainly what evidence exists vs. what's assumed. Then: "What would upgrade this verdict" — the specific evidence (e.g. "10 customer interviews confirming willingness to pay") that would move it up a tier.

## Founder's rules
2-3 hard constraints from the founder (e.g. "must work offline", "no AI tokens spent on free tier", "India market only").

## Anti-goals
2-3 things this product is explicitly NOT. Helps scope.
```

## Quality rules

- **Name** must be concrete (not "X for Y"). If user gave only a category, propose 2 names + ask user to pick.
- **Problem statement** must be specific to the primary sufferer — a generic pain ("planning is hard") is rejected.
- **Evidence** must be observable, not asserted — "users complain about X on Y" not "users probably find this hard."
- **Severity score** must be justified by the cost and frequency data above it, not pulled from nowhere.
- **Validation verdict must be honest.** Default assumption: without real customer interviews, most ideas are "Partially Validated" or "Unvalidated." Do not rubber-stamp "Validated" just because the reasoning sounds plausible — reserve it for cases where the evidence section already contains direct, first-hand signal (not just inference).
- **Anti-goals** are mandatory — they prevent feature creep later.

## Tone

Plain English. Active voice. No marketing fluff. Read like a brief, not a pitch deck.
