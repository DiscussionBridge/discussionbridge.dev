# DiscussionBridge Apex

This repository independently owns the public product site at
`discussionbridge.dev`.

## Local Verification

```powershell
npm ci
npm run build
npx wrangler deploy --dry-run --config wrangler.jsonc
```

`wrangler.jsonc` is the deployment authority. The custom domain is
`discussionbridge.dev`.

The Astro adapter is consumed as the immutable vendored release input
`vendor/astro-discussion-bridge-0.1.0.tgz`. Its recorded SHA-256 is
`7c90754b97355867751afd45825863a10f1479c19d2ce14a11f3bf7d3f369848`.
Canonical adapter source remains in
[`DiscussionBridge/astro-discussion-bridge`](https://github.com/DiscussionBridge/astro-discussion-bridge).

This repository does not own the demo chooser, demo runtimes, documentation
site, forum operations, mail/social/provider records, or product-family
planning.
