import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { SiteNav } from "../components/SiteNav";
import { createMetadata, locationPages, serviceLandingPages } from "../lib/seo";
import {
  breadcrumbSchema,
  localBusinessSchema,
  webPageSchema,
} from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Mold Remediation Service Areas NYC & Long Island",
  description:
    "Find mold remediation, removal, mold inspection, air quality testing, emergency mold services, and moisture prevention across NYC and Long Island NY.",
  path: "/locations",
  keywords: [
    "mold remediation service areas",
    "mold removal NYC",
    "mold inspection Long Island",
    "Brooklyn mold services",
    "Queens mold services",
    "Manhattan mold services",
    "Bronx mold services",
    "Staten Island mold services",
  ],
});

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            title: metadata.title as string,
            description: metadata.description as string,
            path: "/locations",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ]),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Mold Remediation Service Areas
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
            BPI Mold Solutions serves homes, apartments, commercial properties,
            landlords, and property managers across New York City and Long
            Island.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Local Mold Services Across NYC and Long Island
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Choose a service area to learn more about mold inspection, mold
            removal, remediation, air quality testing, emergency mold response,
            commercial mold services, and moisture prevention support for that
            area.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((location) => (
              <a
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#94D62D]/40 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  {location.name}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {location.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Popular Local Mold Searches We Serve
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLandingPages.map((page) => (
              <a
                key={page.slug}
                href={`/services/${page.slug}`}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 font-semibold text-[#445A2A] transition hover:border-[#94D62D] hover:bg-white"
              >
                {page.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
