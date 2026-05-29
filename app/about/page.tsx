import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BPI Mold Solutions | Mold Remediation in New York",
  description:
    "Learn about BPI Mold Solutions, a professional mold inspection, mold removal, remediation, and air quality testing company serving Staten Island, Brooklyn, Queens, Manhattan, Bronx, Long Island, and New York State.",
};

const values = [
  "Professional mold inspection",
  "Safe remediation process",
  "Fast response times",
  "Indoor air quality focus",
  "Residential and commercial service",
  "Long-term mold prevention",
];

const areas = [
  "Staten Island",
  "Brooklyn",
  "Queens",
  "Manhattan",
  "Bronx",
  "Long Island",
  "New York State",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-2 md:px-16 md:pt-40">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
            About BPI Mold Solutions
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Trusted Mold Inspection & Remediation Experts in New York
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            BPI Mold Solutions provides professional mold inspection, mold
            removal, remediation, air quality testing, emergency mold services,
            and moisture prevention solutions for homes and commercial
            properties across New York State.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
          >
            Schedule Inspection
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src="/images/about-bpi-mold-solutions.jpg"
            alt="BPI Mold Solutions mold inspection and remediation team in New York"
            className="h-full min-h-[430px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Who We Are
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            BPI Mold Solutions is built around one clear mission: helping
            property owners create safer, cleaner, and healthier indoor
            environments. Mold problems often begin with hidden moisture,
            leaks, humidity, or water damage. Our team focuses on identifying
            the source of the issue, treating affected areas, and helping
            prevent future mold growth.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            What Makes BPI Different
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6FBF4] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Our Approach
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Mold Solutions Focused on Safety, Prevention, and Trust
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            We understand that mold issues can feel stressful for homeowners,
            tenants, landlords, and business owners. That is why our process is
            designed to be clear, professional, and solution-focused from the
            first inspection to the final recommendation.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Areas We Serve
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            BPI Mold Solutions serves residential and commercial clients across
            New York State.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#94D62D]/30 bg-white px-6 py-3 font-semibold text-[#445A2A] shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06164A] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">
            Need Mold Inspection or Remediation?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions today to schedule professional mold
            inspection, removal, remediation, or air quality testing.
          </p>

          <p className="mt-8 text-2xl font-semibold">+1 917-945-6451</p>
          <p className="mt-2 text-white/70">Drilon Pustina, CEO</p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#94D62D] px-8 py-4 font-semibold text-[#06164A] transition hover:bg-white"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}