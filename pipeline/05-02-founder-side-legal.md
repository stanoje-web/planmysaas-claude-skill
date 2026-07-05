# Stage 5.2 — Founder-side legal

Generate `./planmysaas-blueprint/05-02-founder-side-legal.md`. Read `01-01-problem-validation.md` and `01-04-founder-market-fit.md` first — entity choice and the co-founder framework depend on the target market and who's actually on the team.

## Output structure

```markdown
# Founder-side legal — <Project name>

> Not legal advice. Formation and equity decisions are hard to reverse cheaply — get a lawyer and an accountant before signing anything here.

## Summary
2-3 sentences: the recommended entity type, whether a co-founder split framework is needed (solo vs team, per `01-04-founder-market-fit.md`), and the single most urgent founder-side action.

## Entity type recommendation
Recommend one (Delaware C-Corp, local LLC/equivalent, or other) with reasoning tied to likely investor type, target market geography, and tax posture. Cover: why this entity over the alternatives, when it would make sense to convert later (e.g. LLC now, C-Corp flip before raising), and the rough cost/complexity of the recommended path.

## Co-founder equity split framework
If solo, say so and skip to the next section. If there's a team: not a fixed percentage — a framework. List the contribution dimensions to weigh (idea origination, time committed pre-funding, capital contributed, domain expertise, network/distribution access, opportunity cost taken) and how to turn them into a negotiated split. Include one worked example showing the framework applied to a hypothetical 2-founder scenario.

## Vesting schedule
Standard 4-year vest, 1-year cliff — explain in 3-4 sentences why this protects both a departing co-founder's counterparty and the company (prevents a co-founder who leaves in month 3 from holding 50% forever, prevents the company from unfairly stripping equity from someone who stays and delivers).

## Founder vesting and prior work
1-2 sentences: note that founders should vest their own equity too, not just later hires — and that credit for time already invested pre-incorporation can be handled with a partial-vesting "credit" at grant, agreed explicitly rather than assumed.

## IP assignment
1 paragraph: all code, designs, and IP created for the company must be assigned to the company via a signed IP assignment agreement — including work done by the founder before incorporation ("pre-formation IP assignment"). Flag the specific risk of skipping this (a founder or early contractor personally owning core IP).

## Contractor vs. employee classification
2-3 sentences on the misclassification risk for early hires (fines, back taxes, benefits liability) and the practical test most jurisdictions apply (control over work, exclusivity, integration into the business). Note that this compounds with the hiring plan in `05-04-talent-hiring.md`.

## Key contracts needed early
List with a 1-line purpose each:
- Founder agreement (or operating agreement / shareholders' agreement)
- Mutual NDA template
- Contractor agreement template
- IP assignment agreement (standalone, for contractors and pre-formation work)

## What happens without these
1 short paragraph: the concrete failure mode of skipping formation/equity/IP paperwork early — a co-founder dispute with no agreement to resolve it, an investor's diligence turning up unassigned IP, a departed contributor who still legally owns a piece of the company. Make it specific to the team situation described in `01-04-founder-market-fit.md`.

## Priority action list
3-5 items ranked by urgency, each a concrete next step and a rough timeframe (this week / before first outside dollar / before first hire).
```

## Quality rules

- Entity recommendation must reference the actual target market/investor type implied by `01-01-problem-validation.md` and `01-04-founder-market-fit.md`, not a default answer.
- The equity split section must be a framework (dimensions to weigh), never a fixed number like "50/50" or "60/40" presented as fact.
- The not-legal-advice disclaimer must appear at the top of the file.
- If the founder is solo (per `01-04-founder-market-fit.md`), do not force a co-founder split section — state it's not applicable and move on.
- The "what happens without these" paragraph must describe a plausible, specific failure mode for this team, not a generic scare statement.

## Tone

A startup lawyer's cheat-sheet handed to a first-time founder before their first cap table conversation. Plain, protective, no jargon without explanation. Assume the founder has never formed a company before — explain why each piece of paperwork exists, not just that it's required.
