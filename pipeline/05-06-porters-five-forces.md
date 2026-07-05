# Stage 5.6 — Porter's Five Forces

Generate `./planmysaas-blueprint/05-06-porters-five-forces.md`. Read `03-01-competitive-landscape.md` and `03-02-switching-costs.md` first — every force's score and reasoning must ground in the named competitors and switching-cost findings there.

## Output structure

```markdown
# Porter's Five Forces — <Project name>

## Summary
2-3 sentences: which force is the biggest structural threat to this business, and which is the strongest natural moat.

## The five forces

For each force:
- **Score** — 1-10
- **Label** — Low / Medium / High
- **Reasoning** — 1-2 sentences grounded in a specific finding from `03-01-competitive-landscape.md` or `03-02-switching-costs.md`
- **Strategic implication** — 1 sentence on what this force means for how the product should compete

1. **Competitive rivalry** — intensity among named competitors from `03-01-competitive-landscape.md`. Consider how many direct competitors are named, how differentiated their offerings are, and whether the category is consolidating or fragmenting.
2. **Threat of new entrants** — how easily a new player could replicate this, given the switching-cost and moat findings. Consider capital requirements, technical complexity, and any regulatory barrier already flagged elsewhere in the research.
3. **Bargaining power of buyers** — how easily the target persona could walk to a competitor or substitute, per switching costs. Consider price sensitivity and how many alternative options the buyer genuinely has.
4. **Bargaining power of suppliers** — dependence on upstream vendors (AI model providers, data providers, platform APIs) this product would rely on. Consider how concentrated the supplier market is and how replaceable each supplier would be.
5. **Threat of substitutes** — DIY workarounds, adjacent tools, or "do nothing" options identified in the competitive landscape. Consider how tolerable the substitute actually is for the persona, not just whether one exists.

## Summary table

| Force | Score /10 | Label | One-line implication |
|---|---|---|---|
| Competitive rivalry | ... | ... | ... |
| Threat of new entrants | ... | ... | ... |
| Bargaining power of buyers | ... | ... | ... |
| Bargaining power of suppliers | ... | ... | ... |
| Threat of substitutes | ... | ... | ... |

## Force interaction check
1-2 sentences: do any two forces compound each other in a way worth flagging (e.g. low switching costs AND high buyer power together mean pricing power will be structurally weak, not just individually weak)? Note it if so; skip if the forces are genuinely independent here.

## Overall industry-attractiveness verdict
1 paragraph: aggregate read across all five forces — is this a structurally attractive market to enter, or a structurally hard one, and what that implies for strategy (e.g. compete on a narrow wedge rather than head-on, or build a switching-cost moat early since one doesn't exist naturally). Close with the single force most worth actively managing in year one.
```

## Quality rules

- Every score must be justified by a specific fact from `03-01-competitive-landscape.md` or `03-02-switching-costs.md`, not asserted from general industry knowledge.
- Do not default every force to "Medium" — take a real position; if evidence points to High or Low, say so.
- The strategic-implication line is mandatory for each force — a bare score with no implication is incomplete.
- The overall verdict must synthesize across all five, not just restate the highest-scoring force.
- The force-interaction check is mandatory even when the answer is "no meaningful interaction" — say so rather than skipping the section.
- Scores should differ meaningfully across the five forces where the evidence supports it; five forces all scored 5-6 is a signal the analysis wasn't pushed hard enough.

## Tone

Analytical. Data-shaped. Read like a strategy consultant's structural-attractiveness memo, not a business-school template exercise.
