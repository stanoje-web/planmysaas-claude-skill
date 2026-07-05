# Stage 4.2 — Unit economics

Generate `./planmysaas-blueprint/04-02-unit-economics.md`. Read `04-01-willingness-to-pay.md` and `02-01-tam-sam-som.md` first — ARPU must trace back to the proposed pricing tiers, and the reachable-customer assumptions must trace back to the SOM math, not be invented fresh.

## Output structure

```markdown
# Unit economics — <Project name>

## Summary
2-3 sentences: the resulting LTV:CAC ratio, the verdict (healthy / marginal / broken), and the one lever that would move it most.

## CAC by acquisition channel

For each of 3-5 plausible channels (drawn from what's realistic for this product, e.g. content/SEO, paid ads, outbound, partnerships, community):

| Channel | Estimated CAC | Confidence | Reasoning |
|---|---|---|---|
| ... | $... | low/med/high | 1 line on how this number was derived |

## LTV calculation

Show the formula and every input, don't just assert the result:

**LTV = ARPU × gross margin % × average customer lifetime (months)**

- **ARPU:** $... — sourced from the tier(s) in `04-01-willingness-to-pay.md`, state which tier or blended assumption
- **Gross margin %:** ...% — see breakdown below
- **Average customer lifetime:** ... months — the churn assumption behind this (e.g. "assumes X% monthly churn, so lifetime = 1/churn") and its confidence label
- **Resulting LTV:** $... (show the multiplication)

## LTV:CAC ratio

| Channel | CAC | LTV | Ratio | Verdict |
|---|---|---|---|---|
| ... | $... | $... | X:1 | healthy / marginal / broken |

1 paragraph: a ratio around 3:1 or higher is generally healthy, below 1:1 means the business loses money on every customer acquired through that channel. State plainly what this project's blended ratio implies about which channels are viable to scale and which are not.

## Payback period

**Payback period (months) = CAC / (ARPU × gross margin %)**

Show the number plugged in per channel, and the resulting months. 1 line on whether this payback period is fundable (sub-12 months is comfortable for most bootstrapped/seed SaaS; 12-18 is workable with runway; 18+ is a red flag without outside capital).

## Gross margin assumption

Cost drivers behind the gross margin %, as a breakdown:

| Cost driver | Estimated % of revenue | Notes |
|---|---|---|
| Infra / hosting | ...% | ... |
| AI inference / tokens (if applicable) | ...% | ... |
| Payment processing fees | ...% | ~2.9% + $0.30 is the standard Stripe-class baseline unless stated otherwise |
| Support / customer success | ...% | ... |

Resulting gross margin %, and 1 line on how it compares to typical SaaS gross margins (70-85% is normal; AI-heavy products with high inference cost often run 50-70%).

## Breakeven timeline

Estimate of months to breakeven given the CAC, LTV, and a directional monthly customer-acquisition rate drawn from the SOM in `02-01-tam-sam-som.md`. Show the arithmetic, not just a final month count. Confidence label on the whole estimate.

## Unit economics summary table

| Metric | Value | Benchmark | Verdict |
|---|---|---|---|
| CAC (blended) | ... | ... | ... |
| ARPU | ... | ... | ... |
| Gross margin | ... | 70-85% typical SaaS | ... |
| LTV | ... | ... | ... |
| LTV:CAC | ... | 3:1+ healthy | ... |
| Payback period | ... | <12mo comfortable | ... |
```

## Quality rules

- Every number must show its formula and inputs, not just a bare result — a reader must be able to recompute LTV, LTV:CAC, payback period, and breakeven from what's written.
- ARPU must come from `04-01-willingness-to-pay.md`'s proposed tiers, not a fresh guess.
- If the product uses AI/LLM calls per user action, inference cost must appear as its own line in the gross margin breakdown — don't fold it into generic "infra."
- Flag honestly when a ratio is broken (below ~1:1) rather than softening the verdict — founders need the truth on whether a channel is viable to scale.
- Payment processing fees default to the standard card-processing baseline (~2.9% + $0.30) unless the product has a stated different billing model — don't omit this cost driver.

## Tone

CFO reviewing the model before it goes to an investor. Numbers-first, formula-first, no verdict without the arithmetic shown.
