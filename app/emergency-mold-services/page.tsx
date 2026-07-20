import { SiteNav } from "../components/SiteNav";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { createMetadata } from "../lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "24/7 Emergency Mold Removal NYC",
  description:
    "Fast emergency mold services for urgent mold growth, leaks, flooding, and moisture events in Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island.",
  path: "/emergency-mold-services",
  keywords: [
    "emergency mold services NYC",
    "24/7 emergency mold removal NYC",
    "urgent mold remediation",
    "same day mold remediation",
    "water damage mold prevention",
    "Brooklyn emergency mold removal",
    "Queens emergency mold services",
    "Manhattan emergency mold remediation",
    "Bronx emergency mold removal",
    "Staten Island emergency mold services",
    "Long Island emergency mold removal",
  ],
});

const responseSteps = [
  "Urgent moisture and mold assessment",
  "Containment recommendations",
  "Water damage and humidity review",
  "Remediation planning for affected areas",
];

const emergencyIssues = [
  "Recent leaks or flooding",
  "Active mold growth",
  "Musty odors after water damage",
  "Wet drywall, ceilings, or flooring",
  "Basement moisture problems",
  "HVAC or ventilation concerns",
  "Tenant or employee complaints",
  "Urgent indoor air quality concerns",
];

const areas = [
  "Staten Island",
  "Brooklyn",
  "Queens",
  "Manhattan",
  "Bronx",
  "Long Island",
];

const faqs = [
  {
    q: "How quickly should mold be checked after water damage?",
    a: "Mold concerns should be assessed as soon as possible after water damage, leaks, or sustained moisture because growth can spread into hidden materials.",
  },
  {
    q: "Can emergency mold service help with active leaks?",
    a: "We can assess mold and moisture conditions, but active plumbing, roofing, or structural leaks should also be repaired by the appropriate licensed trade.",
  },
  {
    q: "Do you help commercial properties with emergency concerns?",
    a: "Yes. We help homes, offices, rental properties, and commercial spaces respond to urgent mold and moisture issues.",
  },
];

export default function EmergencyMoldServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            {
              name: "Emergency Mold Services",
              path: "/emergency-mold-services",
            },
          ]),
          serviceSchema({
            name: "Emergency Mold Services",
            description: metadata.description as string,
            path: "/emergency-mold-services",
          }),
          faqSchema(faqs),
        ]}
      />
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 page-top-offset">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              BPI Mold Solutions
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Emergency Mold Services
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Fast emergency mold response services for urgent mold growth, water
              damage, and indoor air concerns across New York City and Long
              Island.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
            <Image
              src="/images/emergencymold.png"
              alt="Emergency mold remediation area with professional containment and cleanup equipment"
              width={1408}
              height={768}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full min-h-[360px] w-full object-cover"
              preload
            />
          </div>
        </div>
      </div>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Fast Mold Response When Moisture Problems Cannot Wait
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Mold concerns can escalate quickly after leaks, flooding, humidity
            spikes, or water intrusion. BPI Mold Solutions helps property owners
            respond quickly with professional assessment, containment planning,
            and remediation recommendations for urgent mold and moisture
            conditions.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {responseSteps.map((step) => (
              <div key={step} className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="font-semibold text-[#0F172A]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              When To Request Emergency Mold Help
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Emergency mold service is recommended when moisture is active,
              mold growth appears suddenly, indoor air feels compromised, or a
              recent water event could allow mold to spread behind walls,
              ceilings, flooring, or HVAC areas.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F6FBF4] p-8">
            <h3 className="text-2xl font-semibold">
              Common Emergency Situations
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {emergencyIssues.slice(0, 5).map((issue) => (
                <li key={issue}>• {issue}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Emergency Mold Concerns We Handle
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {emergencyIssues.map((issue) => (
              <div key={issue} className="rounded-2xl bg-white p-6 shadow-sm">
                {issue}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6FBF4] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Emergency Mold Service Areas
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide urgent mold and moisture response services across New
            York City and Long Island.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#94D62D]/30 bg-white px-6 py-3 font-semibold text-[#445A2A]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Emergency Mold Services FAQ
          </h2>

          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{faq.q}</h3>
                <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06164A] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">Need Emergency Mold Help?</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions to schedule fast mold and moisture
            response for urgent property concerns.
          </p>

          <p className="mt-8 text-2xl font-semibold">+1 917-945-6451</p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-white"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
