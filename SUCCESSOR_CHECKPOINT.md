# DiscussionBridge Apex Successor Checkpoint

Updated: 2026-08-30 (America/Los_Angeles)

Repository: `C:\CodeProjects\Sites\DiscussionBridge\discussionbridge.dev\site`

## Current public boundary

This repository owns the public product site at `discussionbridge.dev`. The
site now presents DiscussionBridge as the product family, The Bridge as its
Discourse-powered flagship, and DiscussionBridge for Astro + Starlight as the
inaugural standalone platform product that becomes Bridge-enhanced by choice.

The homepage presents the seven Alpha profiles in this order:

1. Astro;
2. Ghost;
3. Hugo;
4. Statamic DB;
5. Statamic Flat;
6. WordPress; and
7. The Bridge — Discourse as Publisher.

`/roadmap/` provides a concise public roadmap covering Alpha, advanced
profiles, DiscussionBridge Network, Migration, Identity, candidate adapters,
Deployment capabilities, and an invitation for user-driven additions. The
roadmap is directional and makes no automatic implementation or release
commitment.

## Verification

- `npm run build` passes and produces six pages, including `/roadmap/`.
- `wrangler deploy --dry-run` reads the generated asset set successfully.
- Desktop visual inspection confirms the hierarchy, cards, Alpha ordering,
  roadmap and invitation are readable without overflow.
- The first overlapping build attempt raced another build against `dist` and
  produced a generated-module miss. No source defect was involved; one
  isolated rerun completed successfully.

Production commit, push, deployment identity and public replay are recorded in
the next checkpoint update after publication.
