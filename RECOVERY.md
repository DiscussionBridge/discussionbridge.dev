# Recovery

## Source recovery

1. Clone `https://github.com/DiscussionBridge/discussionbridge.dev.git`.
2. Check out the required reviewed commit on `main`.
3. Run `npm ci` with Node.js 22.19 or later.
4. Run the repository verification sequence in `README.md`.

Generated directories (`node_modules`, `dist`, `.astro`, and `.wrangler`) are
untracked and must be regenerated.

## Runtime recovery

The built static assets target the existing Cloudflare Worker
`discussionbridge-dev`. Recreating the Worker, rolling back a deployment, or
changing traffic is a separate provider mutation requiring explicit authority
and the intended source/version identity. Do not infer provider authority from
this document.
