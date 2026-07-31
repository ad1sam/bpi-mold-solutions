import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { ServiceLinks } from "../components/ServiceLinks";
import { SiteNav } from "../components/SiteNav";
import { createMetadata } from "../lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Mold Inspection NYC | HPD Mold Concerns",
  description:
    "Schedule mold inspection in NYC for homes, apartments, commercial properties, HPD concerns, musty odors, water damage, hidden moisture, and mold risks.",
  path: "/mold-inspection",
  keywords: [
    "mold inspection NYC",
    "professional mold inspection",
    "mold inspection Brooklyn",
    "mold inspection Queens",
    "mold inspection Manhattan",
    "mold inspection Bronx",
    "Staten Island mold inspection",
    "Long Island mold inspection",
    "mold moisture inspection",
    "HPD mold inspection",
  ],
});

const inspectionReasons = [
  "Musty odors or visible staining",
  "Recent leaks, flooding, or water intrusion",
  "Basement, bathroom, attic, or HVAC moisture concerns",
  "Pre-remediation planning for homes or commercial spaces",
];

const processSteps = [
  "Review the visible mold or moisture concern",
  "Identify likely moisture sources and affected materials",
  "Discuss inspection findings in plain language",
  "Recommend the next practical remediation or prevention step",
];

const faqs = [
  {
    q: "When should I schedule a mold inspection?",
    a: "A mold inspection is helpful when you notice musty odors, visible staining, water damage, recurring moisture, or possible hidden mold behind walls, ceilings, flooring, or HVAC areas.",
  },
  {
    q: "Do you inspect both residential and commercial properties?",
    a: "Yes. BPI Mold Solutions helps homes, apartments, rental properties, offices, and commercial spaces assess mold and moisture concerns.",
  },
  {
    q: "Can an inspection help plan mold remediation?",
    a: "Yes. Inspection findings can help identify affected areas, moisture sources, and the next practical steps for remediation or prevention.",
  },
];

export default function MoldInspectionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Mold Inspection", path: "/mold-inspection" },
          ]),
          serviceSchema({
            name: "Mold Inspection",
            description: metadata.description as string,
            path: "/mold-inspection",
          }),
          faqSchema(faqs),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
            BPI Mold Solutions
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Professional Mold Inspection in NYC
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            BPI Mold Solutions provides mold inspection support for homes,
            apartments, commercial properties, and moisture concerns across New
            York City and Long Island. Our team helps property owners understand
            visible mold, musty odors, water damage, and suspected hidden
            moisture before remediation begins.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
          >
            Schedule Mold Inspection
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/images/hero-2.png"
            alt="Professional mold inspection and moisture assessment in a home"
            width={1536}
            height={1024}
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
          { name: "Mold Inspection", path: "/mold-inspection" },
        ]}
      />

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Mold Inspection for Hidden Moisture and Visible Concerns
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Mold concerns often begin with leaks, high humidity, condensation, or
            water damage that is not fully visible. A professional inspection can
            help clarify whether a property needs remediation, air quality
            testing, moisture control, or prevention recommendations.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {inspectionReasons.map((reason) => (
              <div key={reason} className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="font-semibold text-[#0F172A]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              What Happens During a Mold Inspection?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our inspection process is designed to help property owners make
              informed decisions without confusion. We focus on the affected
              space, moisture conditions, likely causes, and next steps for
              remediation or prevention.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F6FBF4] p-8">
            <h3 className="text-2xl font-semibold">
              Inspection Process
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {processSteps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Mold Inspection FAQ
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
          <h2 className="text-4xl font-bold">
            Need a Mold Inspection?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions to schedule mold inspection support for a
            home, apartment, commercial space, or moisture concern.
          </p>

          <p className="mt-8 text-2xl font-semibold">+1 917-945-6451</p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-white"
          >
            Request Inspection
          </a>
        </div>
      </section>
      <ServiceLinks currentPath="/mold-inspection" />
    </main>
  );
}
