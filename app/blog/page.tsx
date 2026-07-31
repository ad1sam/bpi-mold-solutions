import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { SiteNav } from "../components/SiteNav";
import { blogPosts } from "../lib/blog";
import { createMetadata } from "../lib/seo";
import { breadcrumbSchema } from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Mold Remediation Blog NYC",
  description:
    "Read mold remediation guides for NYC property owners covering mold inspection, removal, testing, water damage, black mold, and commercial buildings.",
  path: "/blog",
  keywords: [
    "mold remediation blog NYC",
    "mold removal guide",
    "mold inspection NYC",
    "black mold removal",
    "water damage mold",
  ],
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <SiteNav />

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            Mold Resources
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Mold Remediation Guides for New York Properties
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
            Practical guides for mold inspection, mold removal, air quality
            testing, water damage prevention, and commercial remediation across
            New York City and Long Island.
          </p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 transition hover:border-[#94D62D] hover:bg-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#445A2A]">
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
