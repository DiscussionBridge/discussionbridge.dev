# DiscussionBridge Apex Successor Checkpoint

Updated: 2026-08-30 (America/Los_Angeles)

Repository: `C:\CodeProjects\Sites\DiscussionBridge\discussionbridge.dev\site`

## Current public boundary

This repository owns the public product site at `discussionbridge.dev`. The
site now presents DiscussionBridge as the product family, The Bridge as its
Discourse-powered flagship, and DiscussionBridge for Astro + Starlight as the
inaugural standalone platform product that becomes Bridge-enhanced by choice.

The homepage presents the eight live Alpha profiles in this order:

1. Astro;
2. Ghost;
3. Hugo;
4. Statamic DB;
5. Statamic Flat;
6. Statamic SSG;
7. WordPress; and
8. The Bridge — Discourse as Publisher.

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

## 2026-08-30 community discussion repair

The apex intentionally continues to use `forum.discussionbridge.dev` as the
DiscussionBridge community forum. Topic 37 remains the canonical discussion
for `/blog/every-connection-has-a-job/`. The forum was missing
`discussionbridge.dev` from its Discourse embeddable-host registry, so the
full-app iframe was refused. Embeddable host ID 5 now admits the exact apex
origin to category 5.

The apex does not require the receiving DiscussionBridge plugin. Its comments
default and the blog page now use the plugin-free `full` presentation instead
of claiming `fullInteractive`. The live blog renders the forum-owned reply
list and links to topic 37 without a refused frame.

The roadmap now links to dedicated community topic 45,
`DiscussionBridge Roadmap: What Should We Build Next?`, authored by
`discussbridge-bot` in category 5. The topic invites evidence about platforms,
publishing workflows, migration constraints, community boundaries and testing
interest.

Source commit `01df498` (`Repair community discussions on the apex site`) is
equal to `origin/main` and is deployed as Cloudflare Worker version
`14e21be6-aa95-445f-a276-7a0b5d745b45`. The isolated build produced six pages.
Public browser replay confirmed the repaired blog discussion and the exact
roadmap-topic link.

## 2026-09-01 homepage remodel and current proof

The apex homepage has been rebuilt around the current working product rather
than the earlier product-family outline. Its reading order is now:

1. the promise to publish anywhere while keeping the discussion;
2. compact live proof of eight publishing profiles, three presentation modes
   and one authoritative conversation;
3. discussion continuity across platform, theme and framework changes;
4. The Bridge as the Discourse-powered flagship;
5. direct links to all eight proven profiles;
6. Simple, Full and fullInteractive as distinct presentation choices;
7. the focused product family, including the inaugural Astro + Starlight
   product and honestly planned themed editions; and
8. a demand-led roadmap invitation.

The linked roadmap now includes Statamic SSG as profile 06, moves WordPress and
The Bridge to 07 and 08, removes Statamic SSG from future advanced profiles,
and records one planned shared Statamic theme across Flat, DB and SSG. The
planned themed set is Astro, Ghost, Hugo, shared Statamic and a possible
purpose-built Discourse theme for The Bridge; WordPress remains outside that
set.

Source commit `d6b1b53df23176137bb703d3b88087c89a7f4475`, tree
`33ac611927aa4601241cbbd299706ad689151e88`, built all six pages successfully,
passed the Wrangler deployment dry run and is live as Cloudflare Worker version
`371e8010-8705-47a1-91f1-8c3a38ef062a`. Public DOM replay confirmed the new
hero, eight-profile census including Statamic SSG, all three presentation
modes, publisher-matrix route, themed-edition boundary and eight-profile
roadmap, with no remaining public seven-profile heading.
