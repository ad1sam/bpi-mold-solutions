import { SiteNav } from "../components/SiteNav";
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

export default function WaterDamagePreventionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16 md:pb-28 md:pt-36">
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
    </main>
  );
}
