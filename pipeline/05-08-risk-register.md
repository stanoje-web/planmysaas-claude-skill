# Stage 5.8 — Risk register

Generate `./planmysaas-blueprint/05-08-risk-register.md`. Read `05-01-legal-regulatory.md`, `05-03-tech-stack-lock-in.md`, `05-04-talent-hiring.md`, and `03-01-competitive-landscape.md` first — this file aggregates risk surfaced across all of them plus any market/financial risk visible from the wider research.

## Output structure

```markdown
# Risk register — <Project name>

## Summary
2-3 sentences: the single highest risk-score item, and the overall risk posture of the venture at this stage (Low/Med/High).

## Scoring rubric
State the rubric being used so scores are comparable row to row: likelihood 1-3 = unlikely this year, 4-6 = plausible within the first year, 7-10 = expected to occur without intervention; impact 1-3 = inconvenient, 4-6 = sets the roadmap back materially, 7-10 = existential to the business if realized.

## Risk matrix (7-10 rows)

| Risk | Category | Likelihood (1-10) | Impact (1-10) | Risk score | Reasoning | 30-day mitigation | Owner |
|---|---|---|---|---|---|---|---|
| ... | Execution / Market / Tech / Financial / Regulatory / Legal / Talent | ... | ... | L×I | 1 line | actionable in <30 days | Founder / Engineering / Legal / etc |

Sort rows by risk score, descending. Pull at least one row each from the legal scan, the lock-in analysis, and the hiring plan — plus market/competitive risk from `03-01-competitive-landscape.md` — so the register genuinely aggregates rather than re-deriving from scratch.

Example of an acceptable row (illustrative only — replace with the project's real findings):

| GDPR non-compliance blocks EU launch | Legal | 4 | 8 | 32 | Per `05-01-legal-regulatory.md`, no DPA or consent flow exists yet and the target persona includes EU users | Draft and publish a compliant Privacy Policy and cookie-consent banner before any EU traffic is driven | Founder |

## Long-term watch list (appendix)
Risks that are real but whose mitigation takes longer than 30 days — do not force these into the matrix above. For each: risk · why it can't be fixed in 30 days · the longer-horizon plan and rough timeframe.

## What's not on this register
1 sentence: name a risk category that was considered and deliberately excluded because it's genuinely low-probability or out of scope for this stage (e.g. "no macroeconomic/recession risk row — out of the founder's control and not actionable at this stage"), so the register reads as deliberate rather than incomplete.

## Category concentration check
1-2 sentences: which risk category (Execution/Market/Tech/Financial/Regulatory/Legal/Talent) dominates the register, and what that concentration implies about where this venture is actually most fragile right now.

## Top 3 risks to act on this month
A short prioritized callout — the risk score alone doesn't dictate urgency; pull out the 3 that need action first and why, including the owner responsible for kicking off each one this week.

## Review cadence
1 sentence: how often this register should be revisited (e.g. monthly until launch, then quarterly) and what would trigger an off-cycle review (a new competitor entrant, a failed validation experiment, a legal filing deadline).
```

## Quality rules

- Every mitigation in the main matrix must be genuinely actionable within 30 days — if it isn't, move the risk to the long-term watch list instead of stretching the definition.
- Risk score is always likelihood × impact — compute it, don't eyeball it.
- Draw explicitly from the four read files rather than generating a generic risk list from scratch — at least one row should be directly traceable to each of `05-01-legal-regulatory.md`, `05-03-tech-stack-lock-in.md`, and `05-04-talent-hiring.md`.
- Owners must be specific roles (Founder, Engineering, Legal, Sales), not "the team."
- Do not pad the matrix to hit 10 rows with low-signal risks — 7 well-evidenced rows beat 10 with filler.
- The category-concentration check must name an actual category, not "risk is spread evenly" as a default dodge unless that's genuinely true.

## Tone

Operations lead running a pre-launch risk review. Blunt about scores, precise about ownership and timelines.
