import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FaqSection } from "../../components/FaqSection";
import { JsonLd } from "../../components/JsonLd";
import { SiteNav } from "../../components/SiteNav";
import { getBlogPost, blogPosts } from "../../lib/blog";
import { createMetadata, services } from "../../lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const relatedServices = services.filter((service) =>
    post.relatedServices.includes(service.path)
  );
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            path,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: post.author,
            image: post.image.url,
          }),
          faqSchema(post.faqs),
        ]}
      />
      <SiteNav />

      <article>
        <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
              Mold Resource
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
              {post.description}
            </p>
          </div>
        </section>

        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]}
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)] md:px-16">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#445A2A]">
              Contents
            </h2>
            <nav aria-label="Table of contents" className="mt-5 space-y-3">
              {post.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block leading-7 text-slate-600 transition hover:text-[#445A2A]"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {new Date(post.datePublished).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.author}
            </p>

            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 pt-12">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-lg leading-9 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section id="local-service-guidance" className="scroll-mt-32 pt-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Local Service Guidance for NYC and Long Island
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                Mold decisions are easier when the next step matches the
                property. A Brooklyn basement, Queens finished lower level,
                Manhattan apartment, Bronx rental building, Staten Island home,
                Long Island office, and commercial storefront can all show mold
                for different reasons. The visible growth is only one part of
                the picture. Moisture source, affected materials, access,
                ventilation, past repairs, and urgency all shape the right
                service recommendation.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                BPI Mold Solutions helps property owners connect the concern to
                the right service, including{" "}
                {relatedServices.map((service, index) => (
                  <span key={service.path}>
                    <Link
                      href={service.path}
                      className="font-semibold text-[#445A2A] underline-offset-4 hover:underline"
                    >
                      {service.name}
                    </Link>
                    {index < relatedServices.length - 2
                      ? ", "
                      : index === relatedServices.length - 2
                        ? ", and "
                        : ""}
                  </span>
                ))}
                . This keeps the project focused on the actual moisture and
                mold condition instead of a generic checklist.
              </p>
            </section>

            <section id="before-you-call" className="scroll-mt-32 pt-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                What to Note Before You Call
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                Before scheduling service, note when the issue started, whether
                there was a leak or flood, which rooms smell musty, whether
                staining changes after rain, and whether any materials still
                feel damp. Photos can help explain the location, but they do
                not replace an on-site review. If the concern is in a managed
                building, also gather access rules, superintendent contact
                details, and any repair history related to plumbing, roofing,
                windows, HVAC, or neighboring units.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                Avoid disturbing suspected mold before the area is reviewed.
                Scraping, sanding, demolition, or heavy spraying can spread
                dust and make the condition harder to evaluate. If active water
                is still entering the property, contact the appropriate trade
                for plumbing, roofing, drainage, or structural repair. Mold
                remediation works best when the moisture source is corrected or
                clearly being addressed.
              </p>
            </section>

            <section id="service-area-support" className="scroll-mt-32 pt-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Service Area Support
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                BPI Mold Solutions serves New York City and Long Island,
                including Brooklyn, Queens, Manhattan, Bronx, Staten Island,
                and Long Island communities. Local service matters because mold
                concerns often involve building type, neighborhood housing
                patterns, basement moisture, apartment ventilation, commercial
                access, and water damage history. A local remediation plan can
                account for those realities while still staying clear,
                professional, and practical.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                The goal is to give property owners a clear path: inspect the
                concern, identify likely moisture sources, recommend the right
                mold service, provide a quote before work begins, and explain
                prevention steps that reduce the chance of recurrence. For
                urgent leaks, flooding, visible growth, black mold concerns,
                air quality testing questions, or commercial mold remediation,
                the next step is a focused inspection and a plan built around
                the property in front of us.
              </p>
            </section>
          </div>
        </div>
      </article>

      <section className="bg-[#F6FBF4] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">Related Services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
              <Link
                key={service.path}
                href={service.path}
                className="rounded-2xl border border-[#94D62D]/30 bg-white p-6 transition hover:border-[#445A2A]"
              >
                <h3 className="font-semibold text-[#0F172A]">{service.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Common Questions" faqs={post.faqs} />

      <section className="bg-white px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">Related Posts</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#94D62D]"
              >
                <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
            >
              Request Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
