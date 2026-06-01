import { SiteNav } from "../components/SiteNav";
import { ContactForm } from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BPI Mold Solutions | Mold Remediation in New York",
  description:
    "Contact BPI Mold Solutions to request mold removal, remediation, air quality testing, or emergency mold services across New York City and Long Island.",
  keywords: [
    "contact mold removal company",
    "mold remediation quote",
    "emergency mold help",
    "air quality testing appointment",
    "NYC mold services",
    "Brooklyn mold removal",
    "Queens mold removal",
    "Manhattan mold remediation",
    "Bronx emergency mold services",
    "Staten Island mold removal",
    "Long Island mold services",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteNav />
      <div className="page-top-offset mx-auto max-w-7xl px-6 pb-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
          BPI Mold Solutions
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Contact Us
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Contact BPI Mold Solutions for professional mold removal, remediation,
          air quality testing, and emergency mold services across New York State.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-200/50 sm:p-10">
            <h2 className="text-2xl font-semibold text-[#0F172A]">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6 text-slate-600">
              <div>
                <p className="font-semibold text-[#0F172A]">Phone</p>
                <a
                  className="mt-2 inline-block font-medium text-[#445A2A] hover:text-[#94D62D]"
                  href="tel:+19179456451"
                >
                  +1 917-945-6451
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#0F172A]">Address</p>
                <p className="mt-2 leading-7">
                  1166 Bay Street
                  <br />
                  Staten Island, NY 10305
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0F172A]">Service Areas</p>
                <p className="mt-2 leading-7">
                  Brooklyn • Manhattan • Queens • Bronx • Long Island • New York
                  State
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0F172A]">CEO</p>
                <p className="mt-2">Drilon Pustina</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-200/50 sm:p-10">
            <h2 className="text-2xl font-semibold text-[#0F172A]">
              Send a Message
            </h2>
            <ContactForm variant="page" showTitle={false} />
          </div>
        </div>
      </div>
    </main>
  );
}
