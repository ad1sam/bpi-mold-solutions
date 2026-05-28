import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mold Inspection in New York | Testing & Detection Experts",
  description:
    "Detailed mold inspections and testing to identify hidden growth and moisture issues. Serving NYC and Long Island including Brooklyn, Queens, Manhattan, Bronx, and Staten Island.",
  keywords: [
    "mold inspection New York",
    "mold testing NYC",
    "mold inspection near me",
    "mold detection",
    "moisture inspection",
    "indoor air quality mold",
    "Brooklyn mold inspection",
    "Queens mold testing",
    "Manhattan mold inspection",
    "Bronx mold inspection",
    "Staten Island mold inspection",
    "Long Island mold inspection",
  ],
};

export default function MoldInspectionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16 md:pb-28 md:pt-36">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
          BPI Mold Solutions
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Mold Inspection Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Detailed mold inspection services designed to identify hidden mold,
          moisture problems, and potential indoor air quality risks.
        </p>
      </div>
    </main>
  );
}
