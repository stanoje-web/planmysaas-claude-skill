# Stage 5.9 — Validation experiments

Generate `./planmysaas-blueprint/05-09-validation-experiments.md`. Read `01-05-customer-interview-plan.md`, `01-03-jobs-to-be-done.md`, and `02-03-demand-signals.md` first — experiments should target the specific assumptions those files left unresolved.

This file is the bridge between research and action — everything before this stage has been analysis; this is the first artifact that asks the founder to go do something in the real world this week.

## Output structure

```markdown
# Validation experiments — <Project name>

> Cheap tests before expensive builds. Every experiment below has a number attached to it, not a feeling.

## Summary
2-3 sentences: the single riskiest unvalidated assumption from the earlier research, and the fastest experiment below that would kill or confirm it.

## Why these experiments, not others
1-2 sentences on why the chosen mix of experiment types fits this specific product and persona (e.g. a concierge MVP makes sense for a service-heavy B2B tool but would be pointless for a low-touch consumer app better suited to a fake-door test).

## Experiments (5-8)

Choose from and adapt: landing-page-plus-ads smoke test, concierge MVP, fake-door test, pre-sale/waitlist-with-deposit, Wizard-of-Oz manual-backend test, single-feature paid pilot. Mix at least one cheap/fast experiment (runnable this week, under $200) with at least one deeper experiment (runs 2+ weeks, tests actual willingness to pay rather than just interest) so the sequence builds confidence progressively. For each:

- **Hypothesis** — the specific claim being tested, stated as a falsifiable sentence (e.g. "target persona will pay a $20 deposit for early access before the product exists")
- **Method** — numbered steps, specific enough to execute this week
- **Sample size & duration** — a number and a timeframe (e.g. "200 unique visitors over 14 days")
- **Estimated cost** — directional dollar figure
- **Success threshold** — one specific number (e.g. "3%+ click-to-signup conversion", "10+ deposits at $20 within 2 weeks") — never a vague goal
- **What pass/fail means for the roadmap** — the concrete next step in each case (e.g. "pass → begin building the core feature; fail → revisit the persona in `01-02-customer-personas.md` before building anything")
- **Which prior assumption this tests** — name the specific claim from `01-05-customer-interview-plan.md`, `01-03-jobs-to-be-done.md`, or `02-03-demand-signals.md` this experiment is designed to confirm or kill, so the connection back to earlier research is explicit rather than implied

## Suggested sequencing
1 short paragraph or ordered list: which experiment to run first given cost and speed, and which ones can run in parallel. Justify the order by which unresolved assumption is riskiest to leave untested.

## Total cost & time to signal
1-2 sentences: the rough combined cost and elapsed time to run the sequence above through to a first real signal, so the founder can weigh it against just starting to build.

## If every experiment fails
1-2 sentences: what a clean sweep of failed experiments would mean — is it a signal to kill the idea, revisit the persona in `01-02-customer-personas.md`, or just evidence that the tested price/channel/positioning was wrong while the core problem remains real. Don't let "fail" default to "kill the whole idea" without reasoning why.
```

## Quality rules

- Every success threshold must be a specific, measurable number — "good response" or "positive signal" is rejected outright.
- Hypotheses must be falsifiable — a hypothesis that can't fail isn't a real test.
- Each experiment should target something actually left unresolved by `01-05-customer-interview-plan.md`, `01-03-jobs-to-be-done.md`, or `02-03-demand-signals.md` — not a generic experiment list disconnected from what's already known.
- The pass/fail roadmap implication must be concrete enough to act on immediately, not "reassess."
- Estimated costs must be directional and realistic for the stated method (e.g. a landing-page smoke test's ad spend, not zero).
- Do not propose more experiments than the founder could realistically run in parallel with limited time and budget — 5-8 is the range, not a wishlist of every possible test.

## Tone

Lean-startup practitioner, allergic to vanity metrics. Every experiment is cheap, fast, and has a number attached to it.
