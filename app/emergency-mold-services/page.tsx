import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Mold Services | Fast Response in New York",
  description:
    "Rapid emergency mold services for urgent mold growth and moisture events. Serving Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island with quick scheduling.",
  keywords: [
    "emergency mold services",
    "24/7 mold removal",
    "urgent mold remediation",
    "same day mold remediation",
    "water damage mold prevention",
    "NYC emergency mold services",
    "Brooklyn emergency mold removal",
    "Queens emergency mold services",
    "Manhattan emergency mold remediation",
    "Bronx emergency mold removal",
    "Staten Island emergency mold services",
    "Long Island emergency mold removal",
  ],
};

export default function EmergencyMoldServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 page-top-offset">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
          BPI Mold Solutions
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Emergency Mold Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Fast emergency mold response services for urgent mold growth, water
          damage, and indoor air safety concerns.
        </p>
      </div>
    </main>
  );
}
