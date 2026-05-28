import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Mold Remediation Team | BPI Mold Solutions NY",
  description:
    "Learn about BPI Mold Solutions—trusted mold inspection and remediation specialists serving New York State, including Brooklyn, Manhattan, Queens, Bronx, Staten Island, and Long Island.",
  keywords: [
    "about BPI Mold Solutions",
    "mold remediation company New York",
    "mold inspection experts NYC",
    "licensed mold removal NY",
    "local mold specialists",
    "Brooklyn mold remediation",
    "Queens mold testing",
    "Manhattan mold inspection",
    "Bronx mold removal",
    "Staten Island mold services",
    "Long Island mold remediation",
  ],
};

export default function AboutPage() {
    return (
      <main className="min-h-screen bg-[#06164A] text-white">
        <SiteNav />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-16">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            About Us
          </h1>
  
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            BPI Mold Solutions provides professional mold inspection and remediation
            services across New York State.
          </p>
        </div>
      </main>
    );
  }