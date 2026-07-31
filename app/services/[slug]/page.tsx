import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FaqSection } from "../../components/FaqSection";
import { JsonLd } from "../../components/JsonLd";
import { ServiceLinks } from "../../components/ServiceLinks";
import { SiteNav } from "../../components/SiteNav";
import { createMetadata, serviceLandingPages } from "../../lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "../../lib/schema";

type ServiceLandingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return serviceLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceLandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceLandingPage(slug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/services/${page.slug}`,
    image: page.image,
    keywords: page.keywords,
  });
}

export default async function ServiceLandingPage({
  params,
}: ServiceLandingPageProps) {
  const { slug } = await params;
  const page = getServiceLandingPage(slug);

  if (!page) {
    notFound();
  }

  const path = `/services/${page.slug}`;

  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.title, path },
          ]),
          serviceSchema({
            name: page.serviceName,
            description: page.description,
            path,
            area: page.area,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
            {page.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {page.h1}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {page.intro}
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
          >
            Request an Estimate
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src={page.image.url}
            alt={page.image.alt}
            width={page.image.width}
            height={page.image.height}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full min-h-[420px] w-full object-cover"
            preload
          />
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: page.title, path },
        ]}
      />

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {page.sections.map((section) => (
              <article
                key={section.h2}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold md:text-3xl">
                  {section.h2}
                </h2>
                <p className="mt-5 leading-8 text-slate-600">
                  {section.body}
                </p>
                {section.points && (
                  <ul className="mt-6 space-y-3 text-slate-700">
                    {section.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Our {page.serviceName} Process
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The process starts with the property conditions in front of us.
              We look at moisture, affected materials, indoor air concerns, and
              service goals before recommending a practical scope.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F6FBF4] p-8">
            <h3 className="text-2xl font-semibold">What to Expect</h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {page.process.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Related Service Areas and Resources
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.related.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold text-[#445A2A] shadow-sm transition hover:border-[#94D62D]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title={`${page.serviceName} FAQ`} faqs={page.faqs} />

      <section className="bg-[#06164A] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Need {page.serviceName} Help?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions to schedule {page.serviceName.toLowerCase()}
            {" "}support for your property.
          </p>

          <p className="mt-8 text-2xl font-semibold">+1 917-945-6451</p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-white"
          >
            Request an Estimate
          </a>
        </div>
      </section>

      <ServiceLinks />
    </main>
  );
}
