# Stage 5.3 — Tech-stack lock-in risk

Generate `./planmysaas-blueprint/05-03-tech-stack-lock-in.md`. Read `01-01-problem-validation.md` first — the likely stack layers depend on what kind of product this is (whether it needs an AI model vendor, heavy payments, etc).

## Output structure

```markdown
# Tech-stack lock-in risk — <Project name>

## Summary
2-3 sentences: overall lock-in exposure (Low/Med/High) and the single layer most worth abstracting from day one.

## Why this matters before a line of code is written
1-2 sentences: retrofitting an abstraction layer after a product has real customers and real data is far more expensive than designing for portability from the first commit — this file exists to make that design decision before the architecture stage locks it in.

## Lock-in risk by layer

For each layer likely relevant to this product (cloud/hosting provider, AI model vendor if the product uses AI, payment processor, auth provider, database/ORM, email/notification provider — skip any layer that's clearly not relevant and say why):

- **Layer**
- **Likely vendor(s)** — the realistic default choice(s) for this stack
- **Lock-in risk level** — Low/Med/High
- **What creates the lock-in** — specific: proprietary API surface, data export limits or format, contract minimums/terms, migration engineering cost, model-specific prompt tuning that doesn't transfer
- **Concrete mitigation** — a specific engineering or contract pattern: an abstraction/adapter layer, a multi-vendor fallback strategy, a scheduled data-export/portability job, or a contract term to negotiate before signing (e.g. no exit fees, data export SLA)

## Highest-risk layer deep dive
1 paragraph on the single riskiest layer identified above — what the actual switching cost would look like in engineering weeks if this vendor doubled prices or shut down, and the specific first abstraction to build to reduce that cost.

## Early warning signs to monitor
2-3 bullets: signals worth watching for the highest-risk vendor specifically (pricing changes announced, API deprecation notices, declining reliability reported by other users of that vendor) so the mitigation isn't only reactive.

## Contract terms to negotiate before signing
3-5 bullets: specific clauses to push for with any vendor in the stack (data export guarantees, price-lock periods, no exclusivity requirements, defined SLA and penalty terms).

## Portability checklist
3-5 items a founder can act on now, before scale makes migration expensive (e.g. "write the DB access layer behind a repository pattern, not raw ORM calls scattered in route handlers", "export a full data dump monthly and store it outside the primary vendor").

## When lock-in is actually fine
1 paragraph: not every layer deserves an abstraction layer on day one — engineering time spent pre-emptively abstracting a low-risk, low-cost-to-switch vendor (e.g. a transactional email provider with a trivial migration path) is time not spent shipping. Name the layer(s) from the table above where accepting the lock-in is the right call for now, and why.

## Vendor concentration risk
1 paragraph: if multiple layers above route through the same underlying vendor (e.g. one cloud provider hosting compute, storage, and managed AI inference all at once), name that concentration explicitly and what a single outage or price change there would do to the whole product at once — this is a distinct risk from any single layer's lock-in.
```

## Quality rules

- Mitigations must be concrete engineering or contract patterns — "use an abstraction layer between the app and the AI provider's SDK" is acceptable, "be careful about lock-in" is rejected.
- Only include layers actually relevant to this product's likely stack — don't force all six if, say, the product has no AI component.
- Risk levels must be justified by a specific mechanism (proprietary format, contract terms, migration cost), not asserted bare.
- The portability checklist must be actionable today, at pre-launch stage, not a "plan to do this later" deferral.
- Not every layer needs heavy abstraction — call out at least one place where over-engineering against lock-in would waste early engineering time better spent shipping.
- The vendor-concentration paragraph is mandatory — flag it even if the honest answer is "no meaningful concentration found," rather than omitting the section.

## Tone

A pragmatic staff engineer flagging technical debt before it's incurred. Specific, unafraid to say "this is fine, don't over-engineer it yet" where the risk is genuinely low.
