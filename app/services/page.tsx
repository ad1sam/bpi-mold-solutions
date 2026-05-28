import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mold Services in New York | Inspection, Removal & Remediation",
  description:
    "Explore BPI Mold Solutions services: mold inspection, mold removal, remediation, air quality testing, emergency response, and commercial mold services across New York State including Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island.",
  keywords: [
    "mold services New York",
    "mold inspection",
    "mold removal",
    "mold remediation",
    "mold testing",
    "air quality testing",
    "emergency mold services",
    "commercial mold services",
    "water damage prevention",
    "NYC mold services",
    "Brooklyn mold services",
    "Queens mold services",
    "Manhattan mold services",
    "Bronx mold services",
    "Staten Island mold services",
    "Long Island mold services",
  ],
};

const services = [
  { title: "Mold Removal", href: "/mold-removal" },
  { title: "Commercial Mold Services", href: "/commercial-mold-services" },
  { title: "Emergency Mold Services", href: "/emergency-mold-services" },
  { title: "Mold Inspection", href: "/mold-inspection" },
  { title: "Air Quality Testing", href: "/air-quality-testing" },
  { title: "Water Damage Prevention", href: "/water-damage-prevention" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16 md:pb-28 md:pt-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
          BPI Mold Solutions
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Professional mold inspection, mold testing, remediation, emergency mold
          services, air quality solutions, and prevention services across New York
          State.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-[#94D62D]/40 hover:shadow-xl hover:shadow-[#94D62D]/10 sm:p-10"
            >
              <div className="text-2xl font-semibold">{service.title}</div>
              <div className="mt-3 text-sm font-semibold text-[#445A2A] transition group-hover:text-[#94D62D]">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
