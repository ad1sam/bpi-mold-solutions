import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mold Removal Services | Safe Remediation in New York",
  description:
    "Professional mold removal and remediation to eliminate visible and hidden mold. Serving Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island with fast, reliable service.",
  keywords: [
    "mold removal New York",
    "mold remediation NY",
    "black mold removal",
    "mold cleanup",
    "mold remediation company NYC",
    "mold removal near me",
    "Brooklyn mold removal",
    "Queens mold removal",
    "Manhattan mold removal",
    "Bronx mold remediation",
    "Staten Island mold removal",
    "Long Island mold removal",
  ],
};

export default function MoldRemovalPage() {
    return (
      <main className="min-h-screen bg-[#06164A] text-white">
        <SiteNav />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-16">
          <div className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>
  
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Professional Mold Removal Services
          </h1>
  
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            BPI Mold Solutions provides safe, effective, and professional mold
            removal services designed to protect your property, improve indoor air
            quality, and restore healthy living environments throughout New York
            State.
          </p>
        </div>
  
        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">
              Complete Mold Removal
            </h2>
  
            <p className="mt-5 leading-8 text-white/65">
              We safely remove visible and hidden mold growth using professional
              remediation methods designed to minimize contamination and restore
              healthy indoor spaces.
            </p>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">
              Moisture Source Detection
            </h2>
  
            <p className="mt-5 leading-8 text-white/65">
              Our team identifies moisture problems, leaks, and humidity issues
              that contribute to mold growth and long-term property damage.
            </p>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">
              Health & Air Quality Protection
            </h2>
  
            <p className="mt-5 leading-8 text-white/65">
              Mold can impact indoor air quality and overall comfort. Our process
              focuses on creating cleaner, safer, and healthier environments for
              homes and businesses.
            </p>
          </div>
        </div>
  
        <div className="mt-20 rounded-[2rem] border border-[#94D62D]/20 bg-[#081B56] p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
                Why Choose Us
              </p>
  
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Trusted Mold Removal Experts In New York.
              </h2>
  
              <p className="mt-6 text-lg leading-8 text-white/65">
                BPI Mold Solutions provides professional mold remediation services
                across Brooklyn, Manhattan, Queens, the Bronx, Long Island, and
                surrounding New York areas with fast response times and advanced
                remediation solutions.
              </p>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-semibold">
                Schedule Mold Inspection
              </h3>
  
              <div className="mt-8 space-y-5 text-white/70">
                <div>
                  <p className="font-semibold text-white">
                    Phone Number
                  </p>
  
                  <p className="mt-2">
                    +1 917-945-6451
                  </p>
                </div>
  
                <div>
                  <p className="font-semibold text-white">
                    CEO
                  </p>
  
                  <p className="mt-2">
                    Drilon Pustina
                  </p>
                </div>
  
                <div>
                  <p className="font-semibold text-white">
                    Service Areas
                  </p>
  
                  <p className="mt-2 leading-7">
                    Brooklyn • Manhattan • Queens • Bronx •
                    Long Island • New York State
                  </p>
                </div>
  
                <a
                  href="/contact"
                  className="mt-4 block w-full rounded-2xl bg-[#94D62D] px-8 py-5 text-center font-semibold text-[#06164A] transition hover:bg-white"
                >
                  Book Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    );
  }