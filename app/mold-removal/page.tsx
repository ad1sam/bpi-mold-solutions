import { SiteNav } from "../components/SiteNav";
import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { ServiceLinks } from "../components/ServiceLinks";
import { createMetadata } from "../lib/seo";
import { breadcrumbSchema, serviceSchema } from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Mold Removal NYC | Black Mold Remediation",
  description:
    "Professional mold removal in NYC for visible mold, black mold concerns, hidden moisture, water damage, apartments, homes, and commercial spaces today.",
  path: "/mold-removal",
  keywords: [
    "mold removal NYC",
    "mold remediation NYC",
    "professional mold removal",
    "mold cleanup NYC",
    "mold remediation company NYC",
    "black mold removal",
    "EPA mold remediation",
    "Brooklyn mold removal",
    "Queens mold removal",
    "Manhattan mold removal",
    "Bronx mold remediation",
    "Staten Island mold removal",
    "Long Island mold removal",
  ],
});

export default function MoldRemovalPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Mold Removal", path: "/mold-removal" },
          ]),
          serviceSchema({
            name: "Mold Removal and Remediation",
            description: metadata.description as string,
            path: "/mold-removal",
          }),
        ]}
      />
      <SiteNav />
      <div className="mx-auto max-w-7xl px-6 pb-24 page-top-offset">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-center">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
            BPI Mold Solutions
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Professional Mold Removal Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            BPI Mold Solutions provides safe, effective, and professional mold
            removal services designed to protect your property, improve indoor air
            quality, and support homes and businesses throughout New York City
            and Long Island.
          </p>
        </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
            <Image
              src="/images/mold-removal-service.png"
              alt="Mold remediation containment area with professional removal equipment"
              width={1408}
              height={768}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full min-h-[360px] w-full object-cover"
              preload
            />
          </div>
        </div>

        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Mold Removal", path: "/mold-removal" },
          ]}
        />

        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Complete Mold Removal</h2>
            <p className="mt-5 leading-8 text-slate-600">
              We safely remove visible and hidden mold growth using professional
              remediation methods designed to minimize contamination and restore
              healthy indoor spaces.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Moisture Source Detection</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Our team identifies moisture problems, leaks, and humidity issues
              that contribute to mold growth and long-term property damage.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">
              Health & Air Quality Protection
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Mold can impact indoor air quality and overall comfort. Our process
              focuses on creating cleaner, safer, and healthier environments for
              homes and businesses.
            </p>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#94D62D] via-[#7CB82E] to-[#445A2A] p-10 shadow-2xl shadow-[#445A2A]/20 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#06164A]/70">
                Why Choose Us
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#06164A] md:text-4xl">
                Trusted Mold Removal Experts In New York.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#06164A]/80">
                BPI Mold Solutions provides professional mold remediation services
                across Brooklyn, Manhattan, Queens, the Bronx, Long Island, and
                surrounding NYC areas with fast response times and professional
                remediation solutions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/95 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0F172A]">
                Get a Free Quote
              </h3>

              <div className="mt-8 space-y-5 text-slate-600">
                <div>
                  <p className="font-semibold text-[#0F172A]">Phone Number</p>
                  <p className="mt-2">+1 917-945-6451</p>
                </div>

                <div>
                  <p className="font-semibold text-[#0F172A]">CEO</p>
                  <p className="mt-2">Drilon Pustina</p>
                </div>

                <div>
                  <p className="font-semibold text-[#0F172A]">Service Areas</p>
                  <p className="mt-2 leading-7">
                    Brooklyn • Manhattan • Queens • Bronx • Staten Island •
                    Long Island
                  </p>
                </div>

                <a
                  href="/contact"
                  className="mt-4 block w-full rounded-2xl bg-[#06164A] px-8 py-5 text-center font-semibold text-white transition hover:bg-[#0F172A]"
                >
                  Request a Mold Removal Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceLinks currentPath="/mold-removal" />
    </main>
  );
}
