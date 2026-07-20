import type { MetadataRoute } from "next";
import { absoluteUrl, coreRoutes, locationPages } from "./lib/seo";

const lastModified = new Date("2026-07-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes = [
    {
      path: "/locations",
      changeFrequency: "monthly" as const,
      priority: 0.78,
    },
    ...locationPages.map((location) => ({
      path: `/locations/${location.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.74,
    })),
  ];

  return [...coreRoutes, ...locationRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
