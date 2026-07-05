# Stage 5.4 — Talent & hiring plan

Generate `./planmysaas-blueprint/05-04-talent-hiring.md`. Read `04-02-unit-economics.md` and `01-04-founder-market-fit.md` first — hire priority and timing must trace to specific founder-market-fit gaps and what the economics can actually afford.

## Output structure

```markdown
# Talent & hiring plan — <Project name>

## Summary
2-3 sentences: the biggest skill gap the founder(s) currently have per `01-04-founder-market-fit.md`, and whether the unit economics in `04-02-unit-economics.md` can support any full-time hire yet.

## How this plan should evolve
1-2 sentences: this hiring plan reflects the venture's current stage — the trigger conditions in the sequencing table below, not a calendar date, should drive when it's revisited.

## First hires, in priority order

For each of 3-5 hires:
- **Role title**
- **Why needed at this stage** — tied explicitly to a gap named in `01-04-founder-market-fit.md` or a bottleneck implied by `04-02-unit-economics.md` (e.g. CAC too high without a growth hire, churn undiagnosed without a CS hire)
- **Directional cost range** — salary or contractor rate range for this role in the relevant market, labeled "directional"
- **Build vs. contract vs. co-founder** — which path makes sense and why (equity-only co-founder for a core-product gap vs. contractor for a bounded, well-defined task)
- **Hiring risk** — skill scarcity, retention risk on equity-only comp, ramp time before productive
- **Interim alternative** — the fractional/agency/contractor option that delays the full cost until it's justified, and what triggers upgrading to full-time

## Hiring-sequence table

| Order | Role | Trigger to hire | Interim alternative |
|---|---|---|---|
| 1 | ... | ... | ... |
| 2 | ... | ... | ... |
| ... | ... | ... | ... |

## What not to hire for yet
1-2 sentences on a role that looks tempting but is premature given current stage/economics, and what to do instead in the meantime.

## Equity vs. cash trade-off
1 paragraph: for the highest-priority hire above, what a reasonable equity-for-below-market-cash trade-off would look like given the current stage, and the retention risk of leaning too hard on equity-only comp for someone without founder-level conviction in the idea.

## Signals to watch before hiring goes wrong
2-3 bullets: early warning signs that a hire was made too early or for the wrong reason (e.g. a full-time engineer sitting idle waiting on undefined product direction, a growth hire brought on before there's a repeatable channel to scale per `04-03-distribution-channels.md`).
```

## Quality rules

- Every hire's "why needed" must cite a specific gap from `01-04-founder-market-fit.md` or a specific number/bottleneck from `04-02-unit-economics.md` — not a generic "every startup needs this role."
- Cost ranges must be labeled "directional" — never presented as a firm quote.
- The interim-alternative column is mandatory for every hire — this file exists partly to help the founder delay headcount cost, not just plan it.
- Order hires by actual leverage on the business right now, not by conventional org-chart seniority.
- The equity-vs-cash paragraph must be specific to the top-priority hire named above, not a generic compensation-philosophy statement.
- The early-warning-signs bullets must name a specific, checkable behavior or metric, not a vague feeling like "things feel off."

## Tone

A fractional COO advising a founder on payroll they can't yet afford to get wrong. Cost-conscious, sequenced, unsentimental about what can wait.
