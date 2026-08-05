import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FaqSection } from "../../components/FaqSection";
import { JsonLd } from "../../components/JsonLd";
import { SiteNav } from "../../components/SiteNav";
import {
  createMetadata,
  locationPages,
  serviceLandingPages,
  services,
} from "../../lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
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

const statenIslandFocus = [
  {
    title: "Mold Inspection",
    body: "Inspection helps Staten Island property owners understand visible mold, musty odors, basement moisture, roof leaks, plumbing leaks, and suspected hidden growth before choosing a remediation plan.",
    path: "/services/mold-inspection-staten-island",
  },
  {
    title: "Mold Testing",
    body: "Testing may be useful when air quality concerns, hidden mold questions, or post-remediation review require more context than a visual inspection alone can provide.",
    path: "/services/mold-testing-staten-island",
  },
  {
    title: "Mold Removal",
    body: "Mold removal and remediation services address affected materials while also reviewing the moisture source that allowed growth to appear.",
    path: "/services/mold-removal-staten-island",
  },
  {
    title: "Emergency Response",
    body: "Urgent mold and moisture concerns after leaks, flooding, or sudden visible growth should be assessed quickly so the next step is clear.",
    path: "/emergency-mold-services",
  },
  {
    title: "Commercial Remediation",
    body: "Staten Island offices, rental buildings, retail spaces, and managed properties may need coordinated inspection, containment, removal, testing, or prevention planning.",
    path: "/commercial-mold-services",
  },
  {
    title: "Mold Prevention",
    body: "Prevention focuses on leaks, humidity, ventilation, damp materials, and water-damage risks that can allow mold to return.",
    path: "/services/home-mold-prevention",
  },
  {
    title: "Indoor Air Quality",
    body: "Indoor air quality testing can support mold-related decisions when musty odors, suspected hidden growth, or post-remediation questions remain.",
    path: "/services/indoor-air-quality-testing",
  },
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
  const localServicePages = serviceLandingPages.filter(
    (page) =>
      page.area === location.name ||
      (location.name === "NYC" && page.area === "New York City") ||
      page.area.includes(location.name),
  );
  const isStatenIsland = location.slug === "staten-island";

  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            title: location.title,
            description: location.description,
            path,
          }),
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
          faqSchema(location.faqs),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            {"h1" in location ? location.h1 : `Mold Services in ${location.name}`}
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

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.name, path },
        ]}
      />

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

      {"areasServed" in location && "serviceHighlights" in location && (
        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Areas We Serve in {location.name}
                </h2>
                <ul className="mt-8 grid gap-3 text-slate-700 sm:grid-cols-2 lg:grid-cols-1">
                  {location.areasServed.map((area) => (
                    <li key={area} className="rounded-xl bg-[#F6FBF4] px-5 py-4">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Services for Local Property Conditions
                </h2>
                <div className="mt-8 grid gap-5">
                  {location.serviceHighlights.map((service) => (
                    <a
                      key={service.title}
                      href={service.path}
                      className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#94D62D] hover:bg-white"
                    >
                      <h3 className="text-xl font-semibold text-[#0F172A]">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {service.body}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {isStatenIsland && (
        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold md:text-4xl">
                Staten Island Mold Services by Concern
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Because BPI Mold Solutions is based in Staten Island, this page
                gives local property owners a clear path for the searches Google
                is already surfacing: inspection, testing, removal, emergency
                mold help, commercial remediation, mold prevention, and indoor
                air quality.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {statenIslandFocus.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm transition hover:border-[#94D62D]"
                >
                  <h3 className="text-2xl font-semibold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">{item.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {localServicePages.length > 0 && (
        <section className="bg-white px-6 py-20 md:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Targeted {location.name} Service Pages
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {localServicePages.map((page) => (
                <a
                  key={page.slug}
                  href={`/services/${page.slug}`}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition hover:border-[#94D62D]"
                >
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {page.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {page.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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

      <FaqSection title={`${location.name} Mold Service FAQ`} faqs={location.faqs} />

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
