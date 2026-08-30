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

## Publication receipt

The public hierarchy and roadmap are committed as
`38d2937` (`Present DiscussionBridge product family`), pushed to
`origin/main`, and deployed to `discussionbridge.dev` as Cloudflare Worker
version `4f33001f-6f53-4a28-9433-63a420ba6b6d`.

Public replay proves:

- the apex identifies DiscussionBridge as the family and The Bridge as the
  flagship;
- the exact seven-profile Alpha list appears in the approved order;
- `/roadmap/` returns the public roadmap, includes Hugo, and carries the user-
  input invitation; and
- no planned platform origin was promoted merely by this site publication.

The later checkpoint-only commit does not change deployed page output.
