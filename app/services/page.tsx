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
    <main className="min-h-screen bg-[#06164A] text-white">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
          BPI Mold Solutions
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Services
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          Professional mold inspection, mold testing, remediation, emergency mold
          services, air quality solutions, and prevention services across New York
          State.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#94D62D]/40 hover:bg-white/[0.05]"
            >
              <div className="text-2xl font-semibold">{service.title}</div>
              <div className="mt-3 text-sm text-white/60">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}