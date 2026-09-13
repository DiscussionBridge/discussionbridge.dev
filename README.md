# DiscussionBridge Apex

This repository independently owns the public product site at
`discussionbridge.dev`.

The public product hierarchy is:

- **DiscussionBridge** — the product family;
- **The Bridge** — the Discourse-powered flagship and reference experience;
- **DiscussionBridge for Astro + Starlight** — the inaugural standalone
  platform product, Bridge-enhanced by choice; and
- focused Network, Migration, Identity and Deployment capability families.

The public roadmap is at `/roadmap/`. It records eight live Alpha profiles,
including Statamic SSG, then invites concrete user workflows to shape later
additions. It also records the planned native themed-edition direction for
Astro, Ghost, Hugo, one shared Statamic theme, and a possible Discourse theme
for The Bridge; WordPress is outside that themed set. The roadmap is product
direction, not release or implementation authority.

## Local Verification

```powershell
npm ci
npm run build
npx --no-install wrangler deploy --dry-run --config wrangler.jsonc
```

`wrangler.jsonc` is the deployment authority. The custom domain is
`discussionbridge.dev`.

The Astro adapter is consumed as the exact vendored prerelease input
`vendor/astro-discussion-bridge-0.2.0-alpha.20.tgz`. Its recorded
SHA-256 is
`b63b62a40a1283d9b333f1a35c7b44da3976f029c8b2b9548ad2e0388d5f82f9`.
The 43-member artifact is 43,930 bytes and derives from immutable adapter
commit `f0610945beedc4cca54c11440d4794ce92b17ff5`. It is a published Alpha.20
prerelease input; this site source is updated but not deployed, and release
acceptance remains a separate gate.
Canonical adapter source remains in
[`DiscussionBridge/astro-discussion-bridge`](https://github.com/DiscussionBridge/astro-discussion-bridge).

This repository does not own the demo chooser, demo runtimes, documentation
site, forum operations, mail/social/provider records, or product-family
planning.
