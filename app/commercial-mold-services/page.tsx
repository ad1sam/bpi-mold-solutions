import { SiteNav } from "../components/SiteNav";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Mold Services NY | Offices & Buildings",
  description:
    "Commercial mold remediation for offices, multi-family buildings, property managers, and business properties across New York City, Staten Island, Brooklyn, Queens, Manhattan, Bronx, Long Island, and New York State.",
  keywords: [
    "commercial mold services",
    "commercial mold remediation New York",
    "building mold removal",
    "office mold remediation",
    "mold remediation for property managers",
    "Brooklyn commercial mold services",
    "Queens commercial mold remediation",
    "Manhattan commercial mold remediation",
    "Bronx commercial mold removal",
    "Staten Island commercial mold services",
    "Long Island commercial mold remediation",
  ],
};

const industries = [
  "Office Buildings",
  "Property Management Companies",
  "Apartment Buildings",
  "Retail Stores",
  "Restaurants",
  "Schools & Educational Facilities",
  "Healthcare Facilities",
  "Warehouses & Industrial Properties",
];

const serviceAreas = [
  "Staten Island",
  "Brooklyn",
  "Queens",
  "Manhattan",
  "Bronx",
  "Long Island",
  "New York State",
];

export default function CommercialMoldServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />

      <section className="page-top-offset mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
            BPI Mold Solutions
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Commercial Mold Services In New York
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Professional commercial mold remediation, moisture investigation,
            and indoor air quality services for office buildings, apartment
            complexes, retail properties, healthcare facilities, schools,
            warehouses, and commercial properties throughout New York State.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
          >
            Request Consultation
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/images/commercialmold.png"
            alt="Commercial mold remediation services for office buildings and business properties in New York"
            width={1408}
            height={768}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full min-h-[450px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Commercial Mold Remediation Services
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            BPI Mold Solutions provides commercial mold remediation, mold testing,
            containment, moisture investigations, and indoor air quality solutions
            for businesses, landlords, property managers, and commercial property
            owners throughout New York.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Industries We Serve
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-[#0F172A]">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Common Mold Issues In Commercial Buildings
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Roof leaks",
              "HVAC moisture issues",
              "Plumbing failures",
              "Flooding and water intrusion",
              "Condensation problems",
              "Hidden wall moisture",
              "Tenant complaints",
              "Indoor air quality concerns",
            ].map((issue) => (
              <div key={issue} className="rounded-2xl bg-white p-6 shadow-sm">
                {issue}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Commercial Clients Choose BPI Mold Solutions
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Fast Response Times",
              "Minimal Business Disruption",
              "Professional Containment",
              "Experienced Commercial Solutions",
              "Indoor Air Quality Focus",
              "Long-Term Prevention Recommendations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6FBF4] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Commercial Mold Service Areas
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            {serviceAreas.map((area) => (
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
            Commercial Mold Services FAQ
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "What causes mold in commercial buildings?",
                a: "Common causes include roof leaks, HVAC moisture issues, plumbing failures, flooding, condensation, and poor ventilation.",
              },
              {
                q: "How quickly should mold be addressed?",
                a: "Mold concerns should be investigated as soon as possible to reduce property damage and indoor air quality concerns.",
              },
              {
                q: "Can mold affect employees and tenants?",
                a: "Mold growth may impact indoor air quality and workplace comfort, which is why early assessment is important.",
              },
              {
                q: "Do you provide emergency commercial mold services?",
                a: "Yes. BPI Mold Solutions provides emergency response services for commercial properties across New York.",
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
            Need Commercial Mold Remediation?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions today to schedule a commercial mold
            remediation consultation.
          </p>

          <p className="mt-8 text-2xl font-semibold">+1 917-945-6451</p>

          <p className="mt-2 text-white/70">Drilon Pustina, CEO</p>

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
