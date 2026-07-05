# Stage 4.3 — Distribution channels

Generate `./planmysaas-blueprint/04-03-distribution-channels.md`. Read `01-02-customer-personas.md` and `03-01-competitive-landscape.md` first — channel scores and the top-3 tactical plans must reference specific persona and community details from those files, not generic channel advice.

## Output structure

```markdown
# Distribution channels — <Project name>

## Summary
2-3 sentences: the top recommended channel, why it beats the rest for this specific audience, and the one channel to explicitly avoid early on.

## Channel scorecard

Score every channel below 1-10 on three dimensions, each with a 1-line reasoning grounded in the personas from `01-02-customer-personas.md` (where do they actually hang out, how much budget/time does the founder have, how fast can this realistically produce a first customer):

- SEO / content marketing
- Community engagement (forums, Slack/Discord groups, subreddits — name the real ones this persona uses)
- Cold outreach (DMs, LinkedIn, calls)
- Cold email campaigns
- Partnerships / integrations
- Paid ads (search or social — name the platform)
- PLG / referral loops
- Marketplaces / app stores (if applicable to this product)
- Influencer / creator partnerships
- Events / conferences

For each channel:

| Channel | Fit-for-audience (1-10) | Cost (1-10, 10=cheapest) | Speed-to-first-customer (1-10) | Composite | Reasoning |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | 1 line per score, referencing a specific persona or community detail |

Sort the table by composite score, descending.

## Top 3 recommended channels

For each of the top 3, a concrete first-90-days tactical plan — specific actions on specific weeks, not "do content marketing":

### <Channel name>
- **Why this channel:** 1-2 sentences tying it to a named persona and their actual behavior (where they search, who they trust, what community they're already in)
- **Weeks 1-2:** specific setup actions
- **Weeks 3-6:** specific execution actions (e.g. "publish 2 comparison posts targeting the keywords in the SEO stage" or "DM 30 people/week in the r/<subreddit> community who posted about <specific pain>")
- **Weeks 7-12:** specific scale/iterate actions
- **Success signal:** the concrete metric that tells you this channel is working by day 90

(repeat for channels 2 and 3)
```

## Quality rules

- Channel scoring and the top-3 plans must reference the specific persona names, communities, tools, or behaviors described in `01-02-customer-personas.md` — a plan that would apply to any generic SaaS gets rejected.
- Name real communities/platforms where possible (an actual subreddit, a named Slack/Discord community, a specific LinkedIn audience) rather than "relevant online communities."
- Cost and speed scores must acknowledge a solo/small-team founder's real constraints (limited ad budget, no existing audience) unless stated otherwise.
- The channel to avoid should be named explicitly with the reason (e.g. paid ads score low because CAC-sensitive economics from the unit-economics stage can't support it yet).

## Tone

Growth lead handing a founder a channel plan they can execute Monday morning. Tactical, specific, no "consider exploring" hedging.
