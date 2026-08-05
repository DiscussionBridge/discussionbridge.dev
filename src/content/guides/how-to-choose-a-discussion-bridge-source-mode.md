---
title: "How to Choose a DiscussionBridge Source Mode"
discussionTarget: "community"
discussionSourceTarget: "community"
discussionSourceMode: "discourse-managed"
discussionSync: false
discourseTopicId: 36
discourseTopicUrl: "https://forum.discussionbridge.dev/t/how-to-choose-a-discussion-bridge-source-mode/36"
discussionImportedFrom: "https://forum.discussionbridge.dev/t/how-to-choose-a-discussion-bridge-source-mode/36"
discussionImportPolicy: "unpruned"
discussionSourceHash: "4cddbce0ff795461ab0961159afbb96efa03bd1a994e63acd49fdea882e5537e"
discussionImportedAt: "2026-07-23T15:43:19.766Z"
discussionCommentsDisplay: "fullInteractive"
---

DiscussionBridge keeps published content connected to community discussion. Before connecting a page, decide which system owns the source.

## Astro-managed

Choose `astro-managed` when Astro is the authoritative source.

Use it for:

- Blog posts
- News
- Release notes
- Documentation maintained in Git
- Pages edited through a Git-based CMS

Astro can create or update the Discourse companion topic. Replies remain in Discourse.

## Discourse-managed

Choose `discourse-managed` when the Discourse topic or wiki is the authoritative source.

Use it for:

- Community-written guides
- Collaborative how-to documentation
- Policies developed through discussion
- Living knowledge maintained by forum members

DiscussionBridge publishes the reviewed topic content on the Astro site for durable reading. Astro must not write changes back to the source topic.

## Discourse-imported

Choose `discourse-imported` when content begins in Discourse but is copied into Astro for further editing or publication.

The imported page remains protected from automatic writeback until an operator explicitly promotes it to `astro-managed`.

## The Safety Rule

One content item has one writable source at a time.

For `discourse-managed` and `discourse-imported` pages, use:

```yaml
discussionSync: false
