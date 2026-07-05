# Stage 5.7 — Business Model Canvas

Generate `./planmysaas-blueprint/05-07-business-model-canvas.md`. Read `01-02-customer-personas.md`, `04-01-willingness-to-pay.md`, `04-03-distribution-channels.md`, and `04-02-unit-economics.md` first — every block below should pull from these rather than being invented fresh.

## Output structure

```markdown
# Business Model Canvas — <Project name>

## Summary
2-3 sentences: the core value exchange in one breath — who pays, for what, and why they wouldn't just use a substitute.

## Canvas

For each block, 3-5 items, each grounded in a source file where noted:

1. **Value Propositions** — the specific jobs-to-be-done this resolves for the primary persona in `01-02-customer-personas.md`
2. **Customer Segments** — pulled directly from the personas in `01-02-customer-personas.md`, not invented fresh
3. **Channels** — pulled from `04-03-distribution-channels.md`
4. **Customer Relationships** — the support/engagement model implied by the persona's expectations and the pricing tier structure in `04-01-willingness-to-pay.md` (self-serve vs. high-touch, community vs. concierge)
5. **Revenue Streams** — the pricing tiers and model from `04-01-willingness-to-pay.md`
6. **Key Resources** — what the product needs to exist (data, proprietary content, team expertise, infrastructure) implied by the unit economics in `04-02-unit-economics.md`
7. **Key Activities** — the operational activities the cost structure in `04-02-unit-economics.md` implies matter most (e.g. content production, model fine-tuning, support load)
8. **Key Partnerships** — channel partners or integration partners implied by `04-03-distribution-channels.md`
9. **Cost Structure** — the major cost line items from `04-02-unit-economics.md`, categorized fixed vs. variable

## Canvas summary table
A compact table restating each block in 1 line, so the whole model is scannable in one screen:

| Block | 1-line summary |
|---|---|
| Value Propositions | ... |
| Customer Segments | ... |
| Channels | ... |
| Customer Relationships | ... |
| Revenue Streams | ... |
| Key Resources | ... |
| Key Activities | ... |
| Key Partnerships | ... |
| Cost Structure | ... |

## Where the blocks reinforce (or strain) each other
1 paragraph: does the cost structure actually support the revenue streams at the channels chosen (e.g. a high-touch sales channel with a low-price tier is a contradiction) — call out any internal tension found while assembling the canvas. Name the specific two blocks in tension if one exists.
```

## Quality rules

- Every item must be traceable to one of the four read files — a value proposition, channel, or cost item invented without grounding is rejected.
- Customer Segments must match the personas in `01-02-customer-personas.md` by name, not restate them loosely.
- Revenue Streams and Cost Structure must use the actual numbers/tiers from `04-01-willingness-to-pay.md` and `04-02-unit-economics.md`, not new figures.
- Channels and Key Partnerships must match what `04-03-distribution-channels.md` actually names as viable — don't introduce a channel that file ruled out or didn't consider.
- The closing tension-check paragraph is mandatory — a canvas with no internal consistency check is incomplete.

## Tone

Operator's working document. Terse, itemized, cross-referenced — built to be checked against reality, not admired.
