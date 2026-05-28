import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Mold Services NY | Offices & Buildings",
  description:
    "Commercial mold inspection and remediation for offices, multi-family buildings, and business properties across New York City and Long Island—fast response with professional containment.",
  keywords: [
    "commercial mold services",
    "commercial mold remediation New York",
    "commercial mold inspection NYC",
    "building mold removal",
    "office mold remediation",
    "mold remediation for property managers",
    "Brooklyn commercial mold services",
    "Queens commercial mold remediation",
    "Manhattan commercial mold inspection",
    "Bronx commercial mold removal",
    "Staten Island commercial mold services",
    "Long Island commercial mold remediation",
  ],
};

export default function CommercialMoldServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16 md:pb-28 md:pt-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
          BPI Mold Solutions
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Commercial Mold Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Professional mold services for offices, buildings, commercial spaces,
          and business properties across New York.
        </p>
      </div>
    </main>
  );
}
