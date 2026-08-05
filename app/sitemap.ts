import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  coreRoutes,
  locationPages,
  serviceLandingPages,
  SITE_URL,
} from "./lib/seo";
import { blogPosts } from "./lib/blog";

const STATIC_CONTENT_LAST_MODIFIED = "2026-07-31";
const LOCATION_CONTENT_LAST_MODIFIED = "2026-08-05";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    ...coreRoutes.map((route) => route.path),
    ...serviceLandingPages.map((page) => `/services/${page.slug}`),
    "/locations",
    ...locationPages.map((location) => `/locations/${location.slug}`),
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path === "/" ? SITE_URL : absoluteUrl(path),
    lastModified:
      path === "/locations" ||
      path === "/locations/queens" ||
      path === "/locations/long-island"
        ? LOCATION_CONTENT_LAST_MODIFIED
        : STATIC_CONTENT_LAST_MODIFIED,
  }));

  const blogIndexLastModified = blogPosts.reduce(
    (latest, post) => (post.dateModified > latest ? post.dateModified : latest),
    "",
  );

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/blog"),
      lastModified: blogIndexLastModified,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.dateModified || post.datePublished,
    })),
  ];

  return [...staticEntries, ...blogEntries];
}
