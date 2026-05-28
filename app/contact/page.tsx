import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Mold Inspection | Contact BPI Mold Solutions NY",
  description:
    "Contact BPI Mold Solutions to book a mold inspection or request mold removal, remediation, air quality testing, or emergency mold services across New York City and Long Island.",
  keywords: [
    "schedule mold inspection",
    "mold inspection appointment",
    "contact mold removal company",
    "mold remediation quote",
    "emergency mold help",
    "air quality testing appointment",
    "NYC mold services",
    "Brooklyn mold inspection",
    "Queens mold removal",
    "Manhattan mold remediation",
    "Bronx emergency mold services",
    "Staten Island mold inspection",
    "Long Island mold services",
  ],
};

export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#06164A] text-white">
        <SiteNav />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>
  
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Contact Us
          </h1>
  
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Contact BPI Mold Solutions for professional mold inspection,
            remediation, air quality testing, and emergency mold services across
            New York State.
          </p>
  
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-semibold">
                Contact Information
              </h2>
  
              <div className="mt-8 space-y-6 text-white/70">
                <div>
                  <p className="font-semibold text-white">Phone</p>
  
                  <a className="mt-2 inline-block hover:text-white" href="tel:+19179456451">
                    +1 917-945-6451
                  </a>
                </div>
  
                <div>
                  <p className="font-semibold text-white">Address</p>
  
                  <p className="mt-2 leading-7">
                    1166 Bay Street
                    <br />
                    Staten Island, NY 10305
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
  
                <div>
                  <p className="font-semibold text-white">CEO</p>
  
                  <p className="mt-2">
                    Drilon Pustina
                  </p>
                </div>
              </div>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-semibold">
                Schedule Inspection
              </h2>
  
              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-[#081B56] px-5 py-4 text-white outline-none"
                />
  
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-[#081B56] px-5 py-4 text-white outline-none"
                />
  
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-white/10 bg-[#081B56] px-5 py-4 text-white outline-none"
                />
  
                <textarea
                  placeholder="Tell us about your mold issue..."
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-[#081B56] px-5 py-4 text-white outline-none"
                />
  
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#94D62D] px-8 py-5 font-semibold text-[#06164A] transition hover:bg-white"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }