# Stage 2.1 — TAM / SAM / SOM

Generate `./planmysaas-blueprint/02-01-tam-sam-som.md`. Read `01-01-problem-validation.md` and `01-02-customer-personas.md` first — the segment definitions and ARPU assumptions must trace back to the primary sufferer and personas in those files, not be invented fresh.

## Output structure

```markdown
# TAM / SAM / SOM — <Project name>

## Summary

One paragraph: the headline SOM range, the confidence label, and the single sentence a founder would repeat when asked "how big is this."

## TAM (Total Addressable Market)

**Top-down**
- Source category / analogous market used as the anchor
- Range + confidence (low/medium/high)
- One-line basis (e.g. "X% of the broader <industry> spend that touches this job")

**Bottom-up**
- Formula: total possible segment size × % who have this job × ARPU
- Show the actual numbers plugged into the formula
- Range + confidence + one-line basis

**Reconciliation:** 1-2 sentences on whether top-down and bottom-up agree, and which one to trust more and why.

## SAM (Serviceable Addressable Market)

Same top-down + bottom-up structure as TAM, narrowed by the real constraints this product has today: geography, language, platform, price point, distribution reach.
- Range + confidence + one-line basis
- Explicitly state which TAM is cut and why (e.g. "English-speaking, card-paying, desktop-first users only")

## SOM (Serviceable Obtainable Market)

Bottom-up only — this is about what's actually winnable.
- Formula: realistic reachable segment in year 1 × plausible conversion/capture rate × ARPU
- Range + confidence + one-line basis
- State the channel(s) that make this number believable (if there's no credible channel, the SOM is fiction — say so)

## 3-year SOM growth trajectory

| Year | SOM range | Confidence | Basis |
|---|---|---|---|
| Year 1 | ... | ... | ... |
| Year 2 | ... | ... | ... |
| Year 3 | ... | ... | ... |

One sentence on what has to be true operationally (channel working, retention holding, pricing power) for the Year 3 number to be reachable.

## Sensitivity check

Name the single assumption that, if wrong, would move the SOM by roughly 2x in either direction (e.g. ARPU, conversion rate, addressable segment size). State the current assumed value, the 2x-swing value, and what evidence would resolve which one is closer to true.

## Key assumptions log

Bullet list of every number used above with its source type: "estimated from persona data" / "analogous market benchmark" / "founder input" / "directional guess — needs validation."
```

## Quality rules

- Never state a market size as a bare fact. Every TAM/SAM/SOM number is a range + confidence label (low/medium/high) + one-line basis — no exceptions.
- Bottom-up math must be shown, not asserted — the reader must be able to re-derive the number from the formula and inputs given.
- SOM must be defensible by a named channel or motion. A SOM with no plausible path to reach those customers gets flagged as low confidence, not smoothed over.
- Don't borrow precision from unrelated markets — if the top-down anchor is a loose analogy, say so and lower the confidence label.
- The sensitivity check must name one real assumption, not a generic disclaimer like "markets are uncertain."

## Tone

Analytical. Show the arithmetic. Confidence labels do the hedging — the prose should still read like a direct, decided answer.
