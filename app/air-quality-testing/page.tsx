import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Quality Testing in New York | Mold Spore & IAQ Checks",
  description:
    "Professional indoor air quality testing to detect mold spores and air concerns. Serving New York City and Long Island including Brooklyn, Queens, Manhattan, Bronx, and Staten Island.",
  keywords: [
    "air quality testing New York",
    "indoor air quality test NYC",
    "mold spore testing",
    "mold air test",
    "IAQ testing",
    "air quality inspection",
    "Brooklyn air quality testing",
    "Queens air quality testing",
    "Manhattan indoor air quality test",
    "Bronx air quality testing",
    "Staten Island air quality testing",
    "Long Island air quality testing",
  ],
};

export default function AirQualityTestingPage() {
    return (
      <main className="min-h-screen bg-[#06164A] text-white">
        <SiteNav />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>
  
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Air Quality Testing
          </h1>
  
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Professional air quality testing services to help detect mold spores,
            moisture-related issues, and indoor air safety concerns.
          </p>
        </div>
      </main>
    );
  }