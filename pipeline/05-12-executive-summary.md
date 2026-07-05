# Stage 5.12 — Executive summary

Generate `./planmysaas-blueprint/05-12-executive-summary.md`. Read every phase 1-4 file plus every phase 5 file generated so far first: `01-01-problem-validation.md`, `01-02-customer-personas.md`, `01-03-jobs-to-be-done.md`, `01-04-founder-market-fit.md`, `01-05-customer-interview-plan.md`, `02-01-tam-sam-som.md`, `02-02-why-now.md`, `02-03-demand-signals.md`, `02-04-analogies-post-mortems.md`, `03-01-competitive-landscape.md`, `03-02-switching-costs.md`, `03-03-brand-naming.md`, `04-01-willingness-to-pay.md`, `04-02-unit-economics.md`, `04-03-distribution-channels.md`, `04-04-content-seo-landscape.md`, `05-01-legal-regulatory.md`, `05-02-founder-side-legal.md`, `05-03-tech-stack-lock-in.md`, `05-04-talent-hiring.md`, `05-05-swot.md`, `05-06-porters-five-forces.md`, `05-07-business-model-canvas.md`, `05-08-risk-register.md`, `05-09-validation-experiments.md`, `05-10-pmf-score.md`, and `05-11-the-roast.md`.

This is the single artifact a founder hands an investor, advisor, or co-founder candidate who has 90 seconds and one page. It is pure distillation — if a sentence just restates something better said elsewhere without adding compression or synthesis, cut it.

Think of this as the file that gets forwarded in an email thread without any of the other 26 attached. It has to stand alone, carry enough substance to be judged on its own, and never require the reader to go dig up a source file to understand a claim.

## Output structure

```markdown
# Executive summary — <Project name>

> One sentence: what this is and who it's for.

## The problem
2 sentences, distilled from `01-01-problem-validation.md` — who hurts, and why it matters now.

## The solution
2 sentences, distilled from the problem-to-product logic across `01-01-problem-validation.md` and `01-03-jobs-to-be-done.md` — what this product does and why it's the right shape of solution.

## Why now
1 line, pulled from `02-02-why-now.md` — the specific timing tailwind, not a generic "the market is growing" claim.

## Market size
1 line, pulled from `02-01-tam-sam-som.md`, with its confidence label carried over (do not silently upgrade a "directional" estimate into a stated fact).

## Competitive edge
1 line, pulled from the sharpest point in `03-01-competitive-landscape.md` or `05-06-porters-five-forces.md` — the one thing that would make a buyer choose this over the named incumbents.

## Business model
1 line: how this makes money, pulled from `05-07-business-model-canvas.md`'s Revenue Streams block.

## Traction plan
1-2 sentences: how this gets its first real signal of demand, drawn from `05-09-validation-experiments.md` and `02-03-demand-signals.md`.

## The ask
What the founder actually needs to move forward — time, money, team — framed honestly against the hiring plan in `05-04-talent-hiring.md` and the risk register in `05-08-risk-register.md`. Do not inflate the ask to sound investor-ready if the honest answer is smaller (e.g. "3 months of runway and one contractor," not a fundraise narrative that isn't earned yet).

## The one-sentence pitch
A single sentence, sharp enough to say out loud at a networking event. This is the sentence a founder should be able to say from memory, unprompted, in an elevator.

## Team
1 line: the founder's specific edge on this problem, pulled from `01-04-founder-market-fit.md` — not a generic "passionate founder" claim, the actual domain experience or unfair advantage that makes them credible to build this.

## Top 3 risks
Pulled directly from the top rows of `05-08-risk-register.md` — risk name and 1-line reasoning each, no re-analysis.

## Recommendation
**Proceed / Proceed with changes / Do not proceed** — one of the three, with 1-line reasoning that is consistent with the verdict in `05-11-the-roast.md` and the score in `05-10-pmf-score.md`.
```

## Length discipline

This entire generated file, including all sections above, should fit on a single printed page — roughly 250-400 words of actual prose plus the risk list. If a draft runs longer, cut adjectives and secondary clauses before cutting substance; if it's still too long after that, the fix is usually that a section is re-explaining something instead of stating the conclusion.

## Quality rules

- Density is the whole point — this must read like an actual investor one-pager, not a recap. If a section repeats a point already made in another section of this same file, cut the repeat.
- Every number (market size, ask, risk) must carry over the confidence label from its source file rather than being restated as flat fact.
- The recommendation must be consistent with `05-10-pmf-score.md` and `05-11-the-roast.md` — a "Proceed" recommendation next to a 42/100 PMF score and a "Pivot" roast verdict is a contradiction and must be reconciled, not glossed over.
- The ask must be honest and specific — a vague "seeking seed funding" is rejected in favor of a concrete need tied to `05-04-talent-hiring.md` or `05-08-risk-register.md`.
- "Why now", "Competitive edge", "Business model", and "Team" must each be a single line pulled from a specific source file — not a paragraph, and not invented fresh here.
- The Team line must name a specific, checkable credential or experience — "founder is passionate about this space" without a concrete fact behind it is rejected.
- No new claims may appear here that weren't established somewhere in the 27 files read above — this stage synthesizes, it does not invent.
- If the founder-market-fit research in `01-04-founder-market-fit.md` found a genuine gap rather than an edge, say that plainly here too — this file does not exist to flatter the team any more than the market.

## Tone

Investor-facing, high-density, zero padding. Read it in 90 seconds and know exactly what this is, how big it could be, and what's being asked for. Every sentence should survive the test: "would this sentence still be here if the founder had to pay $1 per word?"
