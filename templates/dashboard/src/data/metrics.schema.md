# metrics.json — schema reference

This file is the **only** data Claude generates for the dashboard at runtime. Everything else (the 34 markdown files, all React components) already exists. Fill in every field you can find real data for in the blueprint markdown; leave arrays empty (`[]`) or objects `null` if the source stage genuinely has no matching data. Never invent numbers that aren't in the blueprint files.

```jsonc
{
  "project": {
    "name": "string — from 01-01-problem-validation.md",
    "oneLiner": "string — the one-line summary from 01-01-problem-validation.md",
    "generatedAt": "ISO date string, e.g. 2026-07-05"
  },

  // From 05-10-pmf-score.md
  "pmfScore": {
    "overall": 62,
    "label": "Promising demand, weak focus",
    "breakdown": [
      { "dimension": "Problem Clarity", "score": 70, "reasoning": "one line" }
      // exactly 6 dimensions: Problem Clarity, Solution Fit, Market Size,
      // Willingness to Pay, Competitive Advantage, Execution Readiness
    ]
  },

  // From 02-01-tam-sam-som.md — use the midpoint of each range, raw number (no currency symbol/commas)
  "tamSamSom": {
    "tam": 5000000000,
    "sam": 400000000,
    "som": 8000000,
    "currency": "USD",
    "confidence": "medium" // low | medium | high
  },

  // From 03-01-competitive-landscape.md — every competitor listed
  "competitors": [
    { "name": "Notion", "type": "Adjacent", "opportunityScore": 6 }
    // type: Direct | Adjacent | Substitute | Manual alternative
  ],

  // From 05-05-swot.md — short phrases, not full sentences
  "swot": {
    "strengths": ["..."],
    "weaknesses": ["..."],
    "opportunities": ["..."],
    "threats": ["..."]
  },

  // From 05-06-porters-five-forces.md — all 5 forces
  "portersFiveForces": [
    { "force": "Competitive rivalry", "score": 7, "label": "High" }
    // label: Low | Medium | High
  ],

  // From 05-08-risk-register.md — every row
  "riskRegister": [
    { "risk": "Free substitutes (ChatGPT/YouTube)", "category": "Market", "likelihood": 7, "impact": 8 }
  ],

  // From 04-02-unit-economics.md
  "unitEconomics": {
    "cac": 120,
    "ltv": 480,
    "arpu": 29,
    "grossMarginPct": 78,
    "paybackMonths": 4,
    "currency": "USD"
  },

  // From 07-features.md — count of features per priority in the feature index table
  "featurePriority": [
    { "priority": "P0", "count": 6 }
    // priority: P0 | P1 | P2 | P3
  ],

  // From 04-01-willingness-to-pay.md — the proposed pricing tiers
  "willingnessToPay": [
    { "tier": "Starter", "price": 19, "currency": "USD" }
  ],

  // From 09-release-plan.md — one row per phase with its duration in weeks
  "buildPhases": [
    { "phase": "Foundation", "weeks": 1 },
    { "phase": "MVP", "weeks": 4 }
  ],

  // From 05-07-business-model-canvas.md — all 9 blocks, 3-5 items each
  "businessModelCanvas": [
    { "block": "Value Propositions", "items": ["...", "..."] }
  ]
}
```

## Rules

- Numbers are raw (no `$`, no commas, no `%` signs) — the UI formats them.
- If a stage file doesn't exist yet (blueprint generation was stopped early), leave its corresponding field `null`/`[]` rather than guessing.
- `competitors`, `riskRegister`, `portersFiveForces`, `swot` items should be short — the dashboard truncates long strings in charts.
- Keep this file valid JSON (no comments) when you write it — this reference file uses `jsonc`-style comments only to explain the shape.
