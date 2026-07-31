import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  coreRoutes,
  locationPages,
  serviceLandingPages,
} from "./lib/seo";
import { blogRoutes } from "./lib/blog";

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

  const serviceLandingRoutes = serviceLandingPages.map((page) => ({
    path: `/services/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: page.area === "Staten Island" ? 0.86 : 0.82,
  }));

  return [...coreRoutes, ...serviceLandingRoutes, ...locationRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
