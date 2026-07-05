# Stage 3.2 — Switching costs

Generate `./planmysaas-blueprint/03-02-switching-costs.md`. Read `03-01-competitive-landscape.md` first — it names the incumbents and manual alternatives the audience is switching from, and the gaps this product can exploit while doing it.

## Output structure

```markdown
# Switching costs — <Project name>

## Switching costs FROM current solutions

For each of the 5 dimensions below: switching-cost level (Low / Med / High) for this audience moving away from what they use today · one-phrase reasoning for the level · one concrete tactic to reduce that friction.

1. **Data / migration friction** — how hard it is to move their existing data, history, or configuration in
2. **Learning-curve / retraining cost** — how much new behavior the team or user must learn to get equivalent value
3. **Financial / contract lock-in** — annual contracts, prepaid credits, cancellation penalties, sunk-cost seats
4. **Social / team habit inertia** — shared docs, team-wide muscle memory, "everyone already knows how to use X"
5. **Integration / workflow dependencies** — other tools, scripts, or reports wired to the incumbent

Tactics must be concrete and specific to this product: a named import format to support, a defined parallel-run window (e.g. "30-day dual-run with auto-sync"), a migration concierge offer, a pricing incentive tied to a specific trigger (e.g. "first 3 months free if switching from <competitor>"). Reject vague tactics like "make onboarding easier."

## Switching costs TO build once adopted (the retention moat)

4-6 concrete moat ideas for this product. For each: mechanism name · what specifically creates it for this product (not a generic definition) · how it compounds over time (why month 12 is harder to leave than month 1).

Draw from, but don't force all of:
- **Data lock-in** — accumulated history, personalization, saved work that has no easy equivalent elsewhere
- **Workflow embedding** — becomes the system of record other steps or tools depend on
- **Integrations** — other tools or automations built on top of this one
- **Network effects** — name the exact mechanism that makes each additional user, team, or dataset more valuable to existing ones
- **Switching-cost-by-design** — deliberate structural friction (cumulative configuration, compounding customization) that isn't hostile to the user

## Moat risk check

1 short paragraph: which of the moats above could tip into a dark pattern (data hostage-taking, deliberately broken exports) if implemented carelessly, and how to keep it on the right side of that line.

## Net switching verdict

1-2 sentences: on balance, is switching TO this product easier or harder than switching AWAY from the current incumbent, for this specific audience today? State which side of that balance the go-to-market motion should lean on (e.g. lead with the low-friction migration story vs. lead with a feature the incumbent structurally can't match).
```

## Quality rules

- Every friction item and every moat item must name a concrete mechanism specific to this product and audience. "Network effects" alone is rejected — state what specifically creates the effect (e.g. "shared team templates get more useful as more teammates contribute to them").
- Switching-cost levels must be justified by what `03-01-competitive-landscape.md` says the audience actually uses today, not asserted without reasoning.
- Moats should come from genuine, compounding value to the user — not lock-in that would generate churn complaints or trust damage if surfaced publicly.
- Don't fabricate adoption, retention, or churn numbers. Say "directional" or omit.
- The moat risk check must name at least one real risk — don't skip it just because the moats "seem fine."
- The net switching verdict must take a side — "it depends" is not an acceptable answer. Pick the lean and justify it in one sentence.

## Tone

Analytical. Data-shaped. Read like a McKinsey one-pager, not a blog post.
