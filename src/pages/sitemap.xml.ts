import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const staticPaths = ["/", "/blog/", "/download/", "/guides/", "/roadmap/", "/support/"];

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] ?? character);

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("Astro site URL is required", { status: 500 });
  }

  const [blog, guides] = await Promise.all([
    getCollection("blog"),
    getCollection("guides"),
  ]);
  const paths = [
    ...staticPaths,
    ...blog.map((entry) => `/blog/${entry.id}/`),
    ...guides.map((entry) => `/guides/${entry.id}/`),
  ];
  const urls = [...new Set(paths)]
    .sort()
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
