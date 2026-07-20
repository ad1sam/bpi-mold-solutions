import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/JsonLd";
import { SiteNav } from "../../components/SiteNav";
import {
  createMetadata,
  locationPages,
  services,
} from "../../lib/seo";
import {
  breadcrumbSchema,
  localBusinessSchema,
  serviceSchema,
} from "../../lib/schema";

type LocationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const localProcess = [
  "Review the mold, moisture, or air quality concern",
  "Identify likely moisture sources and affected materials",
  "Recommend inspection, testing, remediation, or prevention steps",
  "Provide a clear quote before work begins",
];

function getLocation(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}

export function generateStaticParams() {
  return locationPages.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return {};
  }

  return createMetadata({
    title: location.title,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: [
      `mold inspection ${location.name}`,
      `mold removal ${location.name}`,
      `mold remediation ${location.name}`,
      `air quality testing ${location.name}`,
      `emergency mold services ${location.name}`,
    ],
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  const path = `/locations/${location.slug}`;
  const nearbyLocations = locationPages.filter((item) => item.slug !== slug);

  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.name, path },
          ]),
          serviceSchema({
            name: `Mold inspection and remediation in ${location.name}`,
            description: location.description,
            path,
            area: location.name,
          }),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Mold Services in {location.name}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
            {location.description}
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-2xl bg-[#94D62D] px-8 py-5 font-semibold text-[#06164A] transition hover:bg-white"
            >
              Request a Local Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Mold Inspection, Removal, and Remediation in {location.name}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {location.intro}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We support property owners with mold inspection, mold removal,
            remediation planning, indoor air quality testing, emergency mold
            response, commercial mold services, and water-damage prevention.
            The goal is to address the visible concern while also looking at
            moisture conditions that can allow mold to return.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Common Mold Problems in {location.name}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {location.problems.map((problem) => (
              <div key={problem} className="rounded-2xl bg-white p-6 shadow-sm">
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Our Local Service Process
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every mold concern is different, so our process starts with the
              property conditions in front of us. We look at the affected area,
              moisture source, building materials, and service goal before
              recommending the next step.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F6FBF4] p-8">
            <h3 className="text-2xl font-semibold">
              What to Expect
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {localProcess.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Mold Services Available in {location.name}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.path}
                href={service.path}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#94D62D]/40 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {service.name}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6FBF4] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Nearby Service Areas
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            {nearbyLocations.map((nearby) => (
              <a
                key={nearby.slug}
                href={`/locations/${nearby.slug}`}
                className="rounded-full border border-[#94D62D]/30 bg-white px-6 py-3 font-semibold text-[#445A2A] shadow-sm transition hover:border-[#445A2A]"
              >
                {nearby.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06164A] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Need Mold Help in {location.name}?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions for mold inspection, remediation, air
            quality testing, emergency mold support, or moisture prevention.
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
    </main>
  );
}
