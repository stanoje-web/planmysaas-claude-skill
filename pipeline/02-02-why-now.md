# Stage 2.2 — Why now

Generate `./planmysaas-blueprint/02-02-why-now.md`. Read `01-01-problem-validation.md` first — the tailwinds must explain why the problem stated there is newly solvable or newly urgent, not restate the problem itself.

## Output structure

```markdown
# Why now — <Project name>

## Thesis

2-3 sentences: the single reason this window is open right now, and why it wasn't open 2-3 years ago.

## Tailwinds (4-6)

For each tailwind:
- **Category** — one of: Technology shift / Regulatory or policy change / Behavioral or cultural shift / Cost-curve change / Platform or distribution shift
- **What changed** — the specific, dateable event or trend (a launch, a law, a price drop, a platform policy update — named and roughly timed)
- **Why it matters for this idea** — the direct mechanism connecting the change to this specific product, not a generic industry benefit
- **Timing-risk label** — Too early / Right time / Late (competitors already exploiting it) — with one line of reasoning

Cover at least 3 different categories; don't force all 5 if only 4 genuinely apply.

## Competitive timing snapshot

1-2 sentences: who else is already moving on this window, and whether this idea is ahead of, level with, or behind them.

## Historical false starts

If a similar idea was tried before and failed for timing reasons (too early, missing infrastructure, wrong cost curve), name it and state what's different now. If none is known, say so rather than inventing one.

## What breaks the thesis

1-2 sentences: the event that would close this window (a platform shutting off access, a competitor's feature launch, a cost curve reversing) and roughly how much runway exists before that's likely.

## Window duration estimate

One line: a directional estimate (with confidence label — low/medium/high) of how long this window likely stays open before it's either closed by a competitor or absorbed by a platform feature.

## Verdict

One paragraph: overall "why now" call — Strong / Moderate / Weak timing case — and the one thing the founder should do in the next 90 days to capture the window while it's open.
```

## Quality rules

- Every tailwind must be specific and dateable — a model release, a pricing change, a regulation taking effect, a platform opening an API. Reject vague macro claims like "AI is growing" or "remote work is here to stay" unless tied to a named, dated event.
- Each tailwind must state the mechanism connecting the change to THIS idea specifically — "inference cost per token dropped ~10x since <period>, making always-on AI review affordable at this price point" beats "AI is getting cheaper."
- At least one tailwind should carry a "Late" or "Right time" risk label if that's genuinely the case — don't let every tailwind conveniently read as "perfect timing."
- If fewer than 3 real tailwinds exist across categories, say so plainly rather than padding with weak ones.
- The verdict must be a direct call (Strong/Moderate/Weak), not a hedge.
- The window duration estimate must carry a confidence label — never state a bare "12-18 months" without one.
- Historical false starts must be a real, named prior attempt if one is known — don't fabricate a failed predecessor to make the analysis look thorough.

## Tone

Analytical. Specific and dated. Reads like a VC's timing memo, not a trend-piece.
