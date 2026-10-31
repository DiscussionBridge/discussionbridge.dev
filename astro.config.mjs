import analytics from '@codeworkslabs/astro-analytics';
import { analyticsOptions } from './analytics.config.mjs';
import { defineConfig } from "astro/config";
import discussionBridge from "astro-discussion-bridge";

export default defineConfig({
  site: "https://discussionbridge.dev",
  integrations: [
    analytics(analyticsOptions),
    discussionBridge({
      preset: "astro",
      discourseUrl: "https://forum.discussionbridge.dev",
      siteUrl: "https://discussionbridge.dev",
      connections: {
        requireExplicit: true,
        jobs: {
          community: {
            purpose: "public product discussion and community knowledge",
            audience: "DiscussionBridge Community",
            callToAction: "Discuss with the DiscussionBridge Community",
            description: "Ask questions, compare implementations, and help turn working answers into durable guidance.",
          },
        },
      },
      comments: {
        display: "full",
      },
      publishOnBuild: {
        enabled: false,
      },
    }),
  ],
});
