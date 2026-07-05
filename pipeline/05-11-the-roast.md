# Stage 5.11 — The roast

Generate `./planmysaas-blueprint/05-11-the-roast.md`. Read `01-01-problem-validation.md`, `01-02-customer-personas.md`, `02-01-tam-sam-som.md`, `03-01-competitive-landscape.md`, `04-01-willingness-to-pay.md`, `04-02-unit-economics.md`, `05-08-risk-register.md`, and `05-10-pmf-score.md` first. This file exists to say the things a founder's friends won't.

This is a deliberately adversarial, devil's-advocate critique. Every other stage in this pipeline is built to help the idea succeed — this one exists purely to stress-test it before real money and time go in. If this file reads like every other stage, it has failed at its one job.

Every founder who has been through an accelerator, a real fundraise, or a brutal customer call has heard some version of this file said out loud by someone else, usually at the worst possible moment. The entire value of generating it now, on paper, before that moment happens, is that it costs nothing to read and a great deal to hear for the first time from an investor who just passed.

## Output structure

```markdown
# The roast — <Project name>

> Read this once, wince, and then decide what to do about it. That's the point.

## 5 reasons this could fail

For each: the harshest honest take, stated plainly, followed by the specific evidence from an earlier file that supports the concern (name the file and the finding — this is a critique built on evidence, not vibes). Cover a mix of failure modes — don't let all 5 cluster around one theme (e.g. pull from market size, competitive response, unit economics, execution risk, timing). Each reason gets 2-3 sentences: the take, the evidence, and one sentence on how bad it actually is if it plays out.

Worked example of the expected depth (illustrative only — replace with real findings for this project):
> **This dies to a well-funded incumbent's copy-paste feature, not a startup.** Per `03-01-competitive-landscape.md`, the top-scoring direct competitor has a 9-figure war chest and a public roadmap that already gestures at this exact niche. If this product gets any early traction, the realistic response isn't a scrappy competitor — it's a feature ship from a company that already owns the distribution. That's an existential risk, not a competitive nuisance.

Every one of the 5 reasons should read at roughly this depth: specific, cited, and honest about how bad the outcome would actually be.

## The 3 hardest questions a skeptical investor would ask

For each question:
- **The question** — phrased exactly as a skeptical investor would ask it, no softening
- **The honest answer** — including "we don't know yet" where that's true, paired with the specific, cheapest way to find out (point to a relevant experiment in `05-09-validation-experiments.md` if one exists, or state what data is missing)
- **What a bad answer sounds like** — 1 line showing the tempting, evasive non-answer a founder might give, so it's recognizable and avoidable in an actual pitch

Pick the 3 questions that are genuinely hardest given everything read above — not the 3 most commonly asked in generic pitch training. If unit economics in `04-02-unit-economics.md` don't yet pencil out at scale, that belongs here. If the market-size figures in `02-01-tam-sam-som.md` rest on a thin TAM calculation, that belongs here too.

## What would have to be true

3-5 conditions that would have to hold for this to become a real, venture-scale or sustainably profitable business (pick the framing — venture-scale or profitable lifestyle business — that actually fits the ambition implied by earlier stages). Each condition should be specific and checkable, not aspirational ("the market has to want it" is rejected; "the target persona's willingness to pay has to be validated above $X, since unit economics in `04-02-unit-economics.md` require a $Y ARPU to reach profitability" is the bar). For each condition, note current status: already true / plausible but unproven / currently false.

Count how many of the conditions are currently "already true" versus "currently false" — a business with 4 of 5 conditions still unproven is a materially different risk profile than one with 4 of 5 already holding, even if both would score similarly on paper elsewhere.

## The single most likely failure mode
1 paragraph naming, of everything above, the ONE way this most plausibly dies — not the scariest-sounding one, the statistically most likely one given the evidence gathered so far. Be specific about the sequence of events (e.g. "founder builds for 4 months, launches, gets 40 signups from the waitlist, conversion to paid is under 2% because the price point in `04-01-willingness-to-pay.md` was never actually tested against this persona, runway runs out before the pricing gets fixed").

## What a defensive founder would say back
For 1-2 of the harshest points above, anticipate the instinctive founder rebuttal and address it directly rather than letting the critique stand unchallenged in a vacuum (e.g. "'but no one else is doing this' cuts both ways — it's either genuine whitespace or a market that's been tried and quietly abandoned; the competitive landscape and analogous-failure research already gathered should settle which one it is before treating absence of competition as validation").

## Verdict

**Kill / Pivot / Proceed with caution / Proceed** — pick exactly one.

One paragraph of reasoning: why this verdict and not a more generous one. If the verdict is anything other than "Proceed," name the single biggest reason and what would need to change to upgrade it. If the verdict is "Pivot," name the specific pivot direction the evidence points toward.

## One thing the founder should do Monday morning
Close with a single, concrete, specific action — not a summary of the verdict, an actual next action (e.g. "run the fake-door test in `05-09-validation-experiments.md` before writing another line of code" or "call the three harshest-quoted forum users from `01-01-problem-validation.md` and ask them directly what they currently pay to solve this").
```

## Where this file sits in the pipeline
This is deliberately placed after the risk register and PMF score, not before — it needs their numbers to ground its verdict, and it deliberately sits before the executive summary and research synthesis so that neither of those closing files can gloss over what this one found.

## Quality rules

- This file must NOT soften into encouragement at any point — a roast that ends up reassuring the founder has failed its purpose. If the earlier research is genuinely strong, the verdict can be "Proceed," but the 5 reasons this could fail must still be real, not manufactured token criticism.
- Every one of the 5 failure reasons must cite a specific finding from a named earlier file — an unevidenced criticism is as weak as an unevidenced compliment.
- The skeptical-investor questions must be the questions that are actually hardest given what's already known — not generic pitch-deck questions ("what's your moat" is fine only if genuinely unresolved; don't ask a question already answered convincingly elsewhere).
- The "what a bad answer sounds like" line must be recognizable as a real evasion pattern, not a strawman — the point is to help the founder catch themselves doing it.
- The single-most-likely-failure-mode section must pick one specific, plausible sequence — not a vague restatement of "it might not work."
- The verdict must match the PMF score and risk register — if `05-10-pmf-score.md` scored below 50 and the risk register in `05-08-risk-register.md` shows several high-score risks, "Proceed" without heavy caveats is not a credible verdict.
- The defensive-founder-rebuttal section must actually engage with the objection, not just restate the original criticism louder — show why the rebuttal doesn't fully hold, or concede the point if it genuinely does.
- The Monday-morning action must be a single action, not a list — if there are several good candidates, pick the one with the best cost-to-signal ratio and say why the others can wait.

## Tone

The smartest, harshest person in the room — the one who has seen a hundred pitches fail for the same five reasons and isn't afraid to say which of those five apply here. Do not hedge into positivity here; the entire value of this file is its honesty. If something is weak, say it is weak, in plain language, without a compliment sandwich. No "but the team is passionate" consolation lines.
