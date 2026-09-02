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
`vendor/astro-discussion-bridge-0.1.0-alpha.20260824.3.tgz`. Its recorded
SHA-256 is
`d800c2802f1a0818bc9a176899490d768960e09a06c9ae9ecc0efe4410e3cc53`.
The artifact contains 67 members and is 110,908 bytes. It is the qualified
Alpha correction candidate; publication and release acceptance remain
separate gates.
Canonical adapter source remains in
[`DiscussionBridge/astro-discussion-bridge`](https://github.com/DiscussionBridge/astro-discussion-bridge).

This repository does not own the demo chooser, demo runtimes, documentation
site, forum operations, mail/social/provider records, or product-family
planning.
