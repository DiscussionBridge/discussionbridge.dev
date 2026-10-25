# Deployment

This repository builds the static Astro product site for
`https://discussionbridge.dev/`. Wrangler reads `wrangler.jsonc` and targets
the existing Cloudflare Worker named `discussionbridge-dev`.

## Release gate

1. Start from a clean, current `main` checkout.
2. Run `npm ci`.
3. Run `npm audit --omit=dev` and resolve any production vulnerability before release.
4. Run `npm run build`.
5. Run `npm run deploy:dry-run`.

No release-gate command above deploys.

## Production source

The intended routine production path is Cloudflare Workers Builds connected
directly to `DiscussionBridge/discussionbridge.dev`. A push to reviewed `main`
runs `npm run build` and then `npm run deploy` from the repository root. Only
the production branch deploys. This repository and branch are the production
source of truth; routine production releases must not be deployed from
uncommitted or unrelated local source.

Manual `npm run deploy` is a recovery operation requiring separate
authorization. A deployment does not authorize DNS, redirect, route, domain,
Worker replacement, or other provider changes.

## Release receipt

Closeout must bind the exact Git commit to the successful verification run,
Cloudflare build, deployed Worker version, and active traffic percentage.
Provider history without that commit association is insufficient provenance.
