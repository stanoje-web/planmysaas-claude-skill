# Stage 5.1 — Legal & regulatory scan

Generate `./planmysaas-blueprint/05-01-legal-regulatory.md`. Read `01-01-problem-validation.md` first — the target market and primary sufferer determine which regimes actually apply here.

## Output structure

```markdown
# Legal & regulatory scan — <Project name>

> Not legal advice. This is a founder-orientation scan to flag where a lawyer's review is worth the money before launch — it is not a substitute for one.

## Summary
2-3 sentences: the overall regulatory exposure level (Low/Med/High) for this specific product, and the single highest-priority item to resolve before launch.

## Data privacy regime applicability

For each regime that plausibly applies given the target market from `01-01-problem-validation.md` (evaluate GDPR, CCPA/CPRA, DPDP, PIPEDA, LGPD — list only the ones relevant, don't pad):
- **Regime**
- **Applicability** — why it applies (target geography, data types collected, user volume threshold)
- **Risk level** — Low/Med/High
- **Concrete action needed** — the specific mechanism required (consent banner, data subject access request flow, right-to-erasure endpoint, a designated EU representative, etc.)

## Industry-specific regulation flags

If the product touches fintech, health, edtech, legal-tech, or another regulated vertical, flag the specific compliance trigger (e.g. money transmission licensing, HIPAA, FERPA, UPL — unauthorized practice of law). For each: applicability · risk level · concrete action needed. If no vertical-specific regulation applies, say so plainly rather than inventing one.

## Required legal documents

For each, what it must specifically cover for this product (not boilerplate):
- **Terms of Service** — the 3-4 clauses this product specifically needs (liability caps, acceptable use for the actual feature set, termination rights)
- **Privacy Policy** — what data is actually collected and why, matched to the privacy regimes flagged above
- **Data Processing Agreement** — needed if the product processes personal data on behalf of business customers (B2B SaaS almost always needs this)

## IP considerations
2-4 items: trademark clearance for the product name, open-source license compliance for the planned stack, ownership of AI-generated output if relevant, patent landscape risk if the core mechanism is novel.

## Content moderation & liability exposure
If the product has user-generated content: moderation obligations, notice-and-takedown process, Section 230 / equivalent intermediary-liability posture. If no UGC, say so and skip.

## AI-specific disclosure requirements
If the product uses AI in a user-facing way: transparency obligations (e.g. EU AI Act disclosure duties for user-facing generative content, need to label AI-generated output). If no AI use, say so and skip.

## Priority action list
3-5 items ranked by risk level, each a concrete next step with a rough timeframe (before launch / within 90 days).
```

## Quality rules

- Every flagged item needs applicability reasoning tied to the actual product and market from `01-01-problem-validation.md` — not a generic checklist of every regime that exists.
- Do not flag a regime or vertical trigger that clearly doesn't apply just to pad the section. Say "not applicable" and move on.
- Risk levels must be justified in one line, not asserted bare.
- The not-legal-advice disclaimer must appear at the top of the file, verbatim in spirit, before any other content.

## Tone

A knowledgeable friend who has shipped SaaS products before, not a lawyer. Flags risk plainly, defers final judgment to counsel.
