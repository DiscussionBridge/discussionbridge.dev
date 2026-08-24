# DiscussionBridge Apex

This repository independently owns the public product site at
`discussionbridge.dev`.

## Local Verification

```powershell
npm ci
npm run build
npx --no-install wrangler deploy --dry-run --config wrangler.jsonc
```

`wrangler.jsonc` is the deployment authority. The custom domain is
`discussionbridge.dev`.

The Astro adapter is consumed as the exact vendored prerelease input
`vendor/astro-discussion-bridge-0.1.0-alpha.20260824.2.tgz`. Its recorded
SHA-256 is
`7bb85f7658c5391b23ebf914cbe6fbac1bfa28c99bd7f64b5c7c51ad2e39940d`.
The artifact contains 67 members and is 108,671 bytes. It is the qualified
Alpha correction candidate; publication and release acceptance remain
separate gates.
Canonical adapter source remains in
[`DiscussionBridge/astro-discussion-bridge`](https://github.com/DiscussionBridge/astro-discussion-bridge).

This repository does not own the demo chooser, demo runtimes, documentation
site, forum operations, mail/social/provider records, or product-family
planning.
