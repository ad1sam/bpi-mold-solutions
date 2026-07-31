import { SiteNav } from "../components/SiteNav";
import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { ServiceLinks } from "../components/ServiceLinks";
import { createMetadata } from "../lib/seo";
import { breadcrumbSchema, serviceSchema } from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Air Quality Testing NYC | Mold Air Testing",
  description:
    "Indoor air quality testing in NYC for mold spores, musty odors, flood damage, moisture concerns, and remediation planning by BPI Mold Solutions experts.",
  path: "/air-quality-testing",
  keywords: [
    "indoor air quality testing NYC",
    "air quality testing NYC",
    "mold air testing NYC",
    "mold spore testing NYC",
    "air quality testing after flood damage",
    "Staten Island air quality testing",
    "Brooklyn air quality testing",
    "Queens mold air testing",
    "Manhattan indoor air quality",
    "Bronx air quality testing",
    "Long Island air quality testing",
  ],
});

const benefits = [
  "Detect possible airborne mold spores",
  "Identify indoor air quality concerns",
  "Support mold remediation planning",
  "Help protect homes, families, tenants, and employees",
];

const areas = [
  "Staten Island",
  "Brooklyn",
  "Queens",
  "Manhattan",
  "Bronx",
  "Long Island",
];

export default function AirQualityTestingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Air Quality Testing", path: "/air-quality-testing" },
          ]),
          serviceSchema({
            name: "Indoor Air Quality Testing",
            description: metadata.description as string,
            path: "/air-quality-testing",
          }),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
            BPI Mold Solutions
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Air Quality Testing in New York
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            BPI Mold Solutions provides professional indoor air quality testing
            to help detect mold spores, moisture-related air concerns, and
            hidden environmental issues inside homes and commercial properties
            across New York City and Long Island.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
          >
            Schedule Air Quality Test
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/images/airquality.png"
            alt="Professional indoor air quality testing for mold spores in New York"
            width={1408}
            height={768}
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
          { name: "Air Quality Testing", path: "/air-quality-testing" },
        ]}
      />

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Professional Mold Spore & Indoor Air Quality Testing
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Mold is not always visible. Air quality testing can help identify
            airborne mold spores and indoor air concerns that may be connected
            to hidden moisture, water damage, poor ventilation, or previous mold
            growth.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <p className="font-semibold text-[#0F172A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              When Should You Test Indoor Air Quality?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Air quality testing is recommended when you smell musty odors,
              notice water damage, experience recurring moisture problems, or
              suspect hidden mold behind walls, ceilings, basements, bathrooms,
              or HVAC areas.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F6FBF4] p-8">
            <h3 className="text-2xl font-semibold">
              Common Reasons For Testing
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Musty odors inside the property</li>
              <li>• Recent leaks, flooding, or water damage</li>
              <li>• Visible mold or suspected hidden mold</li>
              <li>• Real estate, rental, or property management concerns</li>
              <li>• After mold remediation or cleaning work</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Air Quality Testing Service Areas
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide indoor air quality testing and mold-related air quality
            services across New York City and Long Island.
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

      <section className="bg-[#06164A] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Need Professional Air Quality Testing?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions to schedule indoor air quality testing
            for mold spores and moisture-related air concerns.
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
      <ServiceLinks currentPath="/air-quality-testing" />
    </main>
  );
}
