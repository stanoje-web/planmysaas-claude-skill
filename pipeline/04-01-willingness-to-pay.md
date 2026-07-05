# Stage 4.1 — Willingness to pay

Generate `./planmysaas-blueprint/04-01-willingness-to-pay.md`. Read `01-02-customer-personas.md` and `03-01-competitive-landscape.md` first — price points must trace back to the personas' willingness-to-pay figures and the named competitors' real pricing, not be invented fresh.

## Output structure

```markdown
# Willingness to pay — <Project name>

## Summary
2-3 sentences: the headline price band, the confidence label, and the single number a founder would quote if asked "what should I charge."

## Van Westendorp price sensitivity (directional)

No survey was run for this product — say so explicitly, up front, in this section. The four price points below are directional hypotheses built from the personas' stated willingness to pay and the competitor pricing anchors, meant to be validated in the customer interview process, not stated as researched fact.

- **Too cheap** — <$ number> — the price below which the persona would question the product's quality or seriousness
- **Cheap but fair** — <$ number> — a clear bargain relative to the value described in the personas' goals
- **Expensive but acceptable** — <$ number> — starts to sting but the persona would still buy given the pain it resolves
- **Too expensive** — <$ number> — the price at which the persona would not seriously consider it

Each price point: 1-line reasoning tied to a specific persona detail or competitor price point.

## Comparable pricing anchors

Table pulled from the named competitors in `03-01-competitive-landscape.md`:

| Competitor | Plan / tier | Price | What's included |
|---|---|---|---|
| ... | ... | ... | ... |

1-2 sentences on where this product should sit relative to these anchors and why (cheaper to win on price, or pricier to signal a different tier).

## Proposed pricing model

2-3 tiers:

| Tier | Price | Included features | Target persona |
|---|---|---|---|
| ... | ... | ... | ... |

One sentence justifying the number of tiers chosen (why not more, why not one flat price).

## Price sensitivity by persona / segment

For each persona from `01-02-customer-personas.md`: willingness-to-pay range (as stated in the persona's comparison table) · sensitivity notes (what would make them balk, what would make them not blink) · 1-line reasoning.

## Discounting anti-patterns to avoid

3-4 items, each with a 1-line reason:
- Never discount below the "too cheap" threshold — it signals low value and anchors the persona's expectations downward permanently.
- (2-3 more, specific to this pricing model — e.g. annual-only discounts that mask a broken monthly conversion, lifetime-deal traps, discounting the entry tier instead of adding a cheaper tier.)

## Validation plan

3-4 bullets: the fastest way to replace the directional numbers above with real signal (e.g. price-testing in the customer interview script, a fake-door pricing page test, asking "what would make this a no-brainer buy" instead of "would you pay $X").
```

## Quality rules

- Every price number must carry a confidence label (low/medium/high) or be explicitly framed as "hypothesis to validate" — never stated as a researched fact, since no survey data was collected.
- Say "no willingness-to-pay survey was run" plainly in the summary or Van Westendorp section — don't imply Van Westendorp data exists when it's a reasoned estimate.
- Comparable pricing anchors must use the real, named competitors from `03-01-competitive-landscape.md` and their actual public pricing shape — say "unclear from public info" rather than inventing a number.
- Tier features must map to something a persona actually asked for in `01-02-customer-personas.md`'s goals, not generic "basic/pro/enterprise" filler.

## Tone

Pricing strategist advising a founder before their first pricing page ships. Confident about the model, transparent about what's still unvalidated.
