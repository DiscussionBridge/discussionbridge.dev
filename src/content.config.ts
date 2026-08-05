import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const discussionFields = {
  discourseTopicId: z.union([z.string(), z.number()]).optional(),
  discourseTopicUrl: z.string().url().optional(),
  discussionEmbedUrl: z.string().url().optional(),
  discussionCommentsDisplay: z.enum(["simple", "full", "fullInteractive"]).optional(),
  discussionConnectionJobs: z.union([z.string(), z.record(z.string(), z.unknown())]).optional(),
  discussionImportedFrom: z.string().url().optional(),
  discussionImportedAt: z.coerce.date().optional(),
  discussionImportPolicy: z.string().optional(),
  discussionPrimaryTarget: z.string().optional(),
  discussionPublishTargets: z.string().optional(),
  discussionRequireConnectionJobs: z.boolean().optional(),
  discussionSourceLabel: z.string().optional(),
  discussionSourceMode: z.enum(["astro-managed", "discourse-managed", "discourse-imported"]).optional(),
  discussionSourceHash: z.string().optional(),
  discussionSourceTarget: z.string().optional(),
  discussionSync: z.boolean().optional(),
  discussionTarget: z.string().optional(),
  discussionTargetBindings: z.union([z.string(), z.record(z.string(), z.unknown())]).optional(),
  discussionTargets: z.string().optional(),
  discussionTags: z.union([z.string(), z.array(z.string())]).optional(),
};

const commonFields = {
  title: z.string(),
  tags: z.array(z.string()).default([]),
  ...discussionFields,
};

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...commonFields,
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ base: "./src/content/guides", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...commonFields,
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, guides };
