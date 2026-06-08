import { SiteNav } from "../components/SiteNav";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Damage Prevention | Moisture Control in New York",
  description:
    "Prevent mold growth with moisture control and water damage prevention solutions. Serving Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island across New York State.",
  keywords: [
    "water damage prevention",
    "moisture control New York",
    "mold prevention",
    "humidity control",
    "leak detection mold prevention",
    "water damage mold prevention NYC",
    "Brooklyn moisture control",
    "Queens mold prevention",
    "Manhattan water damage prevention",
    "Bronx moisture control",
    "Staten Island mold prevention",
    "Long Island moisture control",
  ],
};

const preventionServices = [
  "Moisture source investigation",
  "Water damage risk review",
  "Humidity and ventilation guidance",
  "Mold prevention recommendations",
];

const moistureIssues = [
  "Plumbing leaks",
  "Roof or window leaks",
  "Basement moisture",
  "High indoor humidity",
  "Condensation on surfaces",
  "Wet drywall or flooring",
  "Poor ventilation",
  "Recurring musty odors",
];

const areas = [
  "Staten Island",
  "Brooklyn",
  "Queens",
  "Manhattan",
  "Bronx",
  "Long Island",
  "New York State",
];

export default function WaterDamagePreventionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 page-top-offset">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              BPI Mold Solutions
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Water Damage Prevention
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Prevent mold before it spreads with moisture control, water damage
              prevention, and long-term protection solutions.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
            <Image
              src="/images/watertesting.png"
              alt="Water damage prevention inspection with professional moisture testing equipment"
              width={1408}
              height={768}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Moisture Control That Helps Prevent Mold Growth
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Water damage prevention starts with finding moisture risks before
            they become bigger mold problems. BPI Mold Solutions helps identify
            leak concerns, humidity issues, and damp building materials that can
            create conditions for mold growth.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {preventionServices.map((service) => (
              <div key={service} className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="font-semibold text-[#0F172A]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              When Moisture Prevention Matters Most
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Prevention is especially important after leaks, flooding,
              condensation problems, humidity spikes, or repeated musty odors.
              Addressing moisture early helps protect indoor air quality,
              building materials, and long-term property value.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F6FBF4] p-8">
            <h3 className="text-2xl font-semibold">
              Common Moisture Warning Signs
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {moistureIssues.slice(0, 5).map((issue) => (
                <li key={issue}>• {issue}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Water Damage Risks We Help Identify
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {moistureIssues.map((issue) => (
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
            Water Damage Prevention Service Areas
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide moisture control and mold prevention guidance across New
            York State.
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
            Water Damage Prevention FAQ
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "Can water damage prevention reduce mold risk?",
                a: "Yes. Reducing moisture, fixing leaks, and improving ventilation can help limit the conditions that allow mold to grow.",
              },
              {
                q: "What areas of a property are most vulnerable?",
                a: "Basements, bathrooms, kitchens, attics, crawl spaces, HVAC areas, and rooms with past leaks often need closer moisture review.",
              },
              {
                q: "Should I call after a small leak?",
                a: "A small leak can still create hidden moisture inside walls, flooring, or ceilings, so a moisture review can help prevent larger problems.",
              },
            ].map((faq) => (
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
            Need Water Damage Prevention Help?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions to schedule moisture control and mold
            prevention support for your property.
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
