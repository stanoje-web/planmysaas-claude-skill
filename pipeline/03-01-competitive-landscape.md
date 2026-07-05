# Stage 3.1 — Competitive landscape

Generate `./planmysaas-blueprint/03-01-competitive-landscape.md`. Read `01-01-problem-validation.md`, `01-02-customer-personas.md`, and `02-01-tam-sam-som.md` first — they tell you who the buyer is, what pain they feel, and how big the opportunity is, which is what makes a competitor's weakness actually matter here.

## Output structure

```markdown
# Competitive landscape — <Project name>

## Competitors (5-8)

For each competitor:
- **Name**
- **Category** — Direct / Adjacent / Substitute / Manual alternative
- **Description** (2 lines) — what it is, who it's for
- **Pricing model** — freemium, per-seat, usage-based, one-time, unclear
- **Top 3 strengths**
- **Top 3 weaknesses**
- **Opportunity score (1-10)** — one-phrase justification, not a bare number

Categories:
- **Direct** — same audience, same job
- **Adjacent** — solves part of it
- **Substitute** — DIY workaround (YouTube, ChatGPT, spreadsheet)
- **Manual alternative** — what people do without any tool

End with: 1 table sorted by opportunity score (high to low), columns = name / type / key weakness / score.

## Market gaps (top 5)

What no competitor does well. For each: gap statement · opportunity hypothesis (why this is winnable) · who would care (tie back to the persona).

## Positioning whitespace

1 paragraph on where this product can stand that nobody else occupies. Must name at least one specific gap from above and one specific pain point from `01-02-customer-personas.md` — not a generic "better and cheaper" claim.

## Watch list

2-3 competitors or categories not scored above that could become a threat within 12-18 months (a well-funded adjacent player expanding scope, a platform incumbent shipping a native feature that eats this niche). One sentence each on why it's worth watching, not analyzing in full.
```

## Quality rules

- Competitors must be REAL, named companies (Notion, Coursera, ChatGPT, etc.). Never invent a company name. If the niche is too obscure for 5-8 direct competitors, fill remaining slots with real manual alternatives and adjacent tools rather than fabricating direct ones.
- Pricing model must reflect the company's actual, current pricing shape — say "unclear from public info" rather than guessing a number or plan tier.
- Don't fabricate market size, revenue, or user-count figures. Say "directional" or omit entirely.
- Opportunity scores: high = weak competitor + strong gap relative to the persona in `01-02-customer-personas.md`. A strong incumbent with no exploitable weakness scores low even if the category is hot.
- At least 2 of the 5-8 competitors should be Substitute or Manual alternative if the space has any DIY workaround culture — don't limit the field to only funded SaaS players.
- The positioning whitespace paragraph is the one place synthesis happens — it should read like a strategist's conclusion, not a recap of the table above it.
- The watch list is not a rehash of the scored competitors above — it should name emerging or adjacent threats, and each entry must state a concrete reason (funding, feature launch, platform move), not a hunch.

## Tone

Analytical. Data-shaped. Read like a McKinsey one-pager, not a blog post.
