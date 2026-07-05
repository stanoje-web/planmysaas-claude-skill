# Stage 5.13 — Research synthesis (capstone)

Generate `./planmysaas-blueprint/05-13-research-synthesis.md`. Read every file produced across phases 1-5 before generating: `01-01-problem-validation.md`, `01-02-customer-personas.md`, `01-03-jobs-to-be-done.md`, `01-04-founder-market-fit.md`, `01-05-customer-interview-plan.md`, `02-01-tam-sam-som.md`, `02-02-why-now.md`, `02-03-demand-signals.md`, `02-04-analogies-post-mortems.md`, `03-01-competitive-landscape.md`, `03-02-switching-costs.md`, `03-03-brand-naming.md`, `04-01-willingness-to-pay.md`, `04-02-unit-economics.md`, `04-03-distribution-channels.md`, `04-04-content-seo-landscape.md`, `05-01-legal-regulatory.md`, `05-02-founder-side-legal.md`, `05-03-tech-stack-lock-in.md`, `05-04-talent-hiring.md`, `05-05-swot.md`, `05-06-porters-five-forces.md`, `05-07-business-model-canvas.md`, `05-08-risk-register.md`, `05-09-validation-experiments.md`, `05-10-pmf-score.md`, `05-11-the-roast.md`, and `05-12-executive-summary.md`.

This is the capstone artifact for the entire research phase — the last thing generated before the engineering stages begin. Its job is to add synthesis value that doesn't exist anywhere else in the blueprint yet. If a sentence could have been lifted from a single one of the files above, it doesn't belong here — every sentence in this file should connect at least two different phases' findings.

By this point 28 files exist across 5 phases. No human reads all 28 start to finish before deciding whether to start building — this file is what they read instead, and it is the last checkpoint before the pipeline moves from "should we build this" to "how do we build this." Everything after this stage assumes the answer here was yes, or yes-with-changes.

## Output structure

```markdown
# Research synthesis — <Project name>

## Key findings by phase

One dense paragraph per phase (5 total). Each paragraph should already start doing light cross-referencing, not just recap:

- **Phase 1 — Problem & customer** — synthesized from `01-01` through `01-05`
- **Phase 2 — Market** — synthesized from `02-01` through `02-04`
- **Phase 3 — Competition** — synthesized from `03-01` through `03-03`
- **Phase 4 — Economics** — synthesized from `04-01` through `04-04`
- **Phase 5 — Risk & legal** — synthesized from `05-01` through `05-12`

## The 3 most important insights overall

Cross-phase, non-obvious. Each insight must explicitly connect findings from at least two different phases (e.g. "the willingness-to-pay ceiling from Phase 4 is below the CAC implied by the distribution channels also in Phase 4, but Phase 2's demand signals suggest a cheaper channel exists that hasn't been tested — that gap is the single highest-leverage thing to resolve"). A single-phase observation dressed up as an "insight" is rejected.

## Contradictions found

Compare findings across stages — especially willingness-to-pay (`04-01`) against unit-economics requirements (`04-02`), and the SWOT/Porter's optimism (`05-05`, `05-06`) against the roast's skepticism (`05-11`). For each genuine contradiction found: name both sides, the stages they come from, and how it's resolved (which one wins, and why, or what experiment would resolve it). If no genuine contradiction exists after honestly checking, state that plainly rather than manufacturing one for the section's sake.

## Confidence map

A short table showing which phases rest on solid evidence versus untested assumption, so the reader knows where the ground is firm:

| Phase | Confidence (High/Med/Low) | Why |
|---|---|---|
| 1 — Problem & customer | ... | ... |
| 2 — Market | ... | ... |
| 3 — Competition | ... | ... |
| 4 — Economics | ... | ... |
| 5 — Risk & legal | ... | ... |

## Go / No-Go recommendation

**Go / No-Go** with reasoning that explicitly weighs findings from at least three different phases against each other — this must be more than a restatement of the PMF score or the roast verdict; it should show the reasoning that led to agreeing or disagreeing with them.

## What to re-validate within 90 days

3-5 items — the assumptions most likely to be wrong that cheap validation could quickly confirm or kill. Each item: the assumption, which phase(s) it came from, why it's still shaky, and the cheapest way to test it (point to a specific experiment in `05-09-validation-experiments.md` where one exists).

## How this differs from the executive summary

1-2 sentences, placed at the very end: the executive summary (`05-12`) is for an outside reader skimming in 90 seconds; this file is for the founder deciding what to do next, and it is allowed to show its reasoning and disagree with earlier stages where the evidence warrants it.

## Handoff note to the engineering stages

1-2 sentences: name the single most important constraint or finding from this research phase that the upcoming architecture and feature stages must not violate (e.g. a hard data-residency requirement from `05-01-legal-regulatory.md`, or a price ceiling from `04-01-willingness-to-pay.md` that caps how much infrastructure cost the unit economics can absorb per user).
```

## Quality rules

- Every sentence should connect at least two different phases' findings — this is the defining constraint of this file. A paragraph that only cites one source file is a summary, not a synthesis, and should be rewritten.
- The "3 most important insights" must be genuinely non-obvious — if an insight is already stated plainly in one of the source files, it doesn't qualify; it has to emerge from combining two or more.
- The contradictions section must be honest — inventing a contradiction to fill the section is worse than reporting none. If none exists, say so in one sentence and move on.
- The confidence map must be honest about weak phases — a phase built on unvalidated hypotheses (e.g. willingness-to-pay with no survey run) should show Low or Medium, not High.
- The Go/No-Go recommendation must show its work across multiple phases, not just import the verdict from `05-11-the-roast.md` or the score from `05-10-pmf-score.md` verbatim. It is allowed to disagree with the roast's verdict if the reasoning is explicit about why.
- Re-validation items must map to something concretely testable, ideally an experiment already designed in `05-09-validation-experiments.md`.
- This file must not simply duplicate `05-12-executive-summary.md` in longer form — it earns its place by showing cross-phase reasoning the summary has no room for.
- The handoff note must name something specific and binding, not a vague "keep the user in mind" — it should read as a constraint the architecture stage could actually violate if ignored.

## Tone

The most senior person in the room, at the end of a long diligence process, giving the final read before a decision gets made. Synthesizing, not summarizing. No new hedging, no new cheerleading — just what the combined evidence actually says.
