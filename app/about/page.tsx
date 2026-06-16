import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About BPI Mold Solutions | Mold Remediation in New York",
  description:
    "Learn about BPI Mold Solutions, a professional mold removal, remediation, and air quality testing company serving Staten Island, Brooklyn, Queens, Manhattan, Bronx, Long Island, and New York State.",
};

const values = [
  "Licensed and certified",
  "Professional mold remediation",
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

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            About BPI Mold Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Trusted Mold Remediation Experts in New York
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
            BPI Mold Solutions provides professional mold removal, remediation,
            air quality testing, emergency mold services, and moisture prevention
            solutions for homes and commercial properties across New York State.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-2xl bg-[#94D62D] px-8 py-5 font-semibold text-[#06164A] transition hover:bg-white"
            >
              Contact Us
            </a>
          </div>
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
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100 shadow-sm">
            <Image
              src="/images/ceo-drilon-pustina.png"
              alt="Drilon Pustina, CEO of BPI Mold Solutions"
              fill
              sizes="(min-width: 768px) 44vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              CEO
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Drilon Pustina
            </h2>

            <div className="mt-6 inline-flex rounded-lg border border-[#94D62D]/35 bg-[#F6FBF4] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#445A2A]">
              Licensed &amp; Certified
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              As CEO of BPI Mold Solutions, Drilon Pustina works directly around
              the standards that matter most to property owners: responsive
              service, honest guidance, and careful mold remediation from the
              first inspection through the final recommendation.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              His leadership keeps the company focused on practical solutions
              for homes, apartments, commercial spaces, and property managers
              across New York. BPI Mold Solutions is licensed and certified for
              professional mold remediation services.
            </p>
          </div>
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
            first assessment to the final recommendation.
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
            Need Mold Remediation?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Contact BPI Mold Solutions today to schedule professional mold
            removal, remediation, or air quality testing.
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
