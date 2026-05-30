import type { Metadata } from "next";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Mold Services in New York | BPI Mold Solutions",
  description:
    "Professional mold removal, mold remediation, air quality testing, emergency mold services, commercial mold services, and water damage prevention across Staten Island, Brooklyn, Queens, Manhattan, Bronx, Long Island, and New York State.",
  keywords: [
    "mold services New York",
    "mold removal New York",
    "mold remediation New York",
    "air quality testing New York",
    "emergency mold services NYC",
    "commercial mold remediation New York",
    "water damage mold prevention",
    "Staten Island mold removal",
    "Brooklyn mold remediation",
    "Queens mold removal",
    "Manhattan mold services",
    "Bronx mold removal",
    "Long Island mold remediation",
  ],
};

const services = [
  {
    title: "Mold Removal",
    href: "/mold-removal",
    description:
      "Safe and professional mold removal services designed to remove visible mold, address contamination, and help restore healthier indoor environments.",
  },
  {
    title: "Commercial Mold Services",
    href: "/commercial-mold-services",
    description:
      "Mold remediation solutions for offices, buildings, rental properties, commercial spaces, and business facilities.",
  },
  {
    title: "Emergency Mold Services",
    href: "/emergency-mold-services",
    description:
      "Fast response services for urgent mold concerns, water damage events, moisture problems, and active mold growth.",
  },
  {
    title: "Air Quality Testing",
    href: "/air-quality-testing",
    description:
      "Professional indoor air quality testing to help detect mold spores, airborne contaminants, and potential environmental concerns.",
  },
  {
    title: "Water Damage Prevention",
    href: "/water-damage-prevention",
    description:
      "Prevention solutions focused on moisture control, leak risks, humidity issues, and long-term mold prevention.",
  },
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />

      <section className="page-top-offset mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
          BPI Mold Solutions
        </p>

        <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Professional Mold Services in New York
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          BPI Mold Solutions provides professional mold removal, mold remediation,
          emergency mold services, commercial mold solutions, air quality testing,
          and water damage prevention across Staten Island, Brooklyn, Queens,
          Manhattan, Bronx, Long Island, and New York State.
        </p>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Mold Remediation Services
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you are dealing with visible mold, hidden moisture problems,
            poor indoor air quality, or emergency water damage, our team provides
            trusted mold solutions for residential and commercial properties.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-[#94D62D]/40 hover:shadow-xl hover:shadow-[#94D62D]/10 sm:p-10"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-[#445A2A] transition group-hover:text-[#94D62D]">
                  Learn more →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Mold Solutions Built Around Safety, Speed, and Long-Term
              Protection
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            Mold problems often start with water intrusion, leaks, humidity, or
            hidden moisture behind walls and ceilings. Our process is designed
            to identify the source, address affected areas, reduce contamination,
            and help property owners prevent future mold growth.
          </p>
        </div>
      </section>

      <section className="bg-[#F6FBF4] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Service Areas Across New York
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            BPI Mold Solutions serves homeowners, property managers, landlords,
            businesses, and commercial property owners across major New York
            service areas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#94D62D]/30 bg-white px-6 py-3 font-semibold text-[#445A2A] shadow-sm"
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
            Mold Services FAQ
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "What is the difference between mold removal and mold remediation?",
                a: "Mold removal focuses on removing visible mold, while mold remediation includes containment, cleaning, moisture source evaluation, and prevention steps designed to reduce future mold growth.",
              },
              {
                q: "Do you provide emergency mold services?",
                a: "Yes. BPI Mold Solutions provides fast response services for urgent mold concerns, water damage events, and active moisture problems.",
              },
              {
                q: "Do you work with commercial properties?",
                a: "Yes. We provide mold remediation services for commercial buildings, offices, rental properties, and business spaces.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}