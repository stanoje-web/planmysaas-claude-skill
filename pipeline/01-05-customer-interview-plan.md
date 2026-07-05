# Stage 1.5 — Customer interview plan

Generate `./planmysaas-blueprint/01-05-customer-interview-plan.md`. Read `01-01-problem-validation.md`, `01-02-customer-personas.md`, and `01-03-jobs-to-be-done.md` first — the plan must target the exact personas and jobs already identified, not a generic audience.

## Output structure

```markdown
# Customer interview plan — <Project name>

## Recruitment criteria
Exactly who to interview (map to the personas), and exactly where to find them — specific subreddits, Facebook/LinkedIn groups, Slack/Discord communities, LinkedIn search strings, or in-person venues. Name real, findable places.

## Target count and rationale
10-15 interviews. One sentence on why this range — enough to see repeating patterns, not so many that it delays action.

## Screening questions
3-5 questions to filter out people who don't match the target persona before booking the interview (e.g. disqualify if they don't currently do X, or don't have budget authority).

## Interview script

Organized into sections, 10-15 open-ended questions total:

**Warm-up (1-2 questions)** — get them talking about their role/context.

**Problem exploration (3-4 questions)** — surface the problem in their own words, without naming it first.

**Current-solution deep-dive (3-4 questions)** — how they solve this today, what they've tried, what they pay for already.

**Willingness-to-pay signal (2-3 questions)** — past spending behavior, budget process — not hypothetical price-tolerance questions.

**Closing (1-2 questions)** — anything missed, who else to talk to.

## Do's and Don'ts (Mom Test principles)

**Do:**
- Ask about specific past instances ("tell me about the last time...") not hypotheticals
- Dig into concrete numbers and specifics, not opinions
- Let them talk 80% of the time

**Don't:**
- Never pitch or describe the product idea during the interview
- Never ask "would you use this?" or any yes/no hypothetical
- Never accept a compliment as a signal ("that's cool" means nothing)

## Synthesis method
How to process notes after all interviews: tag quotes by theme, count how many interviews mention each theme, separate "stated opinion" from "described behavior," identify the loudest recurring pain.

## Decision rule
Explicit thresholds: what pattern of answers validates the idea (e.g. "8+ of 12 describe the same workaround and have already tried to solve this some other way") vs. what pattern signals pivot or kill (e.g. "fewer than 4 of 12 have ever taken action on this problem").

## Timeline
1-2 week realistic schedule: recruiting days, interview days, synthesis day.
```

## Quality rules

- Recruitment sources must be specific and real (named subreddit, named community, named search string) — "social media" or "online forums" alone is rejected.
- Every interview question must be open-ended and behavior-focused. Any yes/no question or "would you use/pay for this?" hypothetical is a Mom Test violation and must be rejected/rewritten.
- The script must never include a step where the product or solution is described to the interviewee — that's a leading pitch, not research.
- The decision rule must use concrete thresholds (a count or ratio), not vague language like "if people seem interested."
- Screening questions must actually filter against the personas defined in `01-02-customer-personas.md`, not be generic demographic questions.

## Tone

Practical and operational — read like a field guide someone could execute tomorrow, not a theory lesson on customer discovery.
