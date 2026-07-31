import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { SiteNav } from "../components/SiteNav";
import { createMetadata, locationPages, serviceLandingPages } from "../lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Mold Remediation Services NYC",
  description:
    "Explore mold inspection, mold removal, remediation, air quality testing, emergency mold services, and moisture prevention across NYC and Long Island NY.",
  path: "/services",
  keywords: [
    "mold services NYC",
    "mold inspection NYC",
    "mold removal NYC",
    "mold remediation NYC",
    "air quality testing NYC",
    "emergency mold services NYC",
    "commercial mold remediation NYC",
    "Staten Island mold removal",
    "Brooklyn mold remediation",
    "Queens mold removal",
    "Manhattan mold services",
    "Bronx mold removal",
    "Long Island mold remediation",
    "EPA mold remediation",
    "HPD mold inspection",
  ],
});

const services = [
  {
    title: "Mold Inspection",
    href: "/mold-inspection",
    image: "/images/hero-2.png",
    imageAlt: "Professional mold inspection and moisture assessment in a home",
    description:
      "Inspection support for visible mold, musty odors, water damage, and suspected hidden moisture.",
  },
  {
    title: "Mold Removal",
    href: "/mold-removal",
    image: "/images/mold-removal-service.png",
    imageAlt: "Mold remediation containment area with professional removal equipment",
    description:
      "Safe and professional mold removal services designed to remove visible mold, address contamination, and help restore healthier indoor environments.",
  },
  {
    title: "Commercial Mold Services",
    href: "/commercial-mold-services",
    image: "/images/commercialmold.png",
    imageAlt: "Commercial mold remediation services for office buildings and business properties",
    description:
      "Mold remediation solutions for offices, buildings, rental properties, commercial spaces, and business facilities.",
  },
  {
    title: "Emergency Mold Services",
    href: "/emergency-mold-services",
    image: "/images/emergencymold.png",
    imageAlt: "Emergency mold remediation area with professional containment and cleanup equipment",
    description:
      "Fast response services for urgent mold concerns, water damage events, moisture problems, and active mold growth.",
  },
  {
    title: "Air Quality Testing",
    href: "/air-quality-testing",
    image: "/images/airquality.png",
    imageAlt: "Indoor air quality testing equipment for mold inspection services",
    description:
      "Professional indoor air quality testing to help detect mold spores, airborne contaminants, and potential environmental concerns.",
  },
  {
    title: "Water Damage Prevention",
    href: "/water-damage-prevention",
    image: "/images/watertesting.png",
    imageAlt: "Water damage prevention inspection with professional moisture testing equipment",
    description:
      "Prevention solutions focused on moisture control, leak risks, humidity issues, and long-term mold prevention.",
  },
];

const faqs = [
  {
    q: "What is the difference between mold removal and mold remediation?",
    a: "Mold removal focuses on removing visible mold, while mold remediation includes containment, cleaning, moisture source evaluation, and prevention steps designed to reduce future mold growth.",
  },
  {
    q: "Do you provide emergency mold services?",
    a: "Yes. BPI Mold Solutions provides fast response services for urgent mold concerns, water damage events, and active moisture problems.",
  },
  {
    q: "Do you work with commercial properties?",
    a: "Yes. We provide mold remediation services for commercial buildings, offices, rental properties, and business spaces.",
  },
  {
    q: "How much does mold remediation cost?",
    a: "Cost depends on affected area size, access, moisture source, containment needs, and damaged materials. We inspect the property and provide a clear quote before work begins.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceSchema({
            name: "Mold inspection, removal, remediation, and air quality services",
            description: metadata.description as string,
            path: "/services",
          }),
          faqSchema(faqs),
        ]}
      />
      <SiteNav />

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Professional Mold Services in New York
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
            BPI Mold Solutions provides professional mold removal, remediation,
            emergency mold services, commercial mold solutions, air quality testing,
            mold inspection, and water damage prevention across New York City
            and Long Island.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-2xl bg-[#94D62D] px-8 py-5 font-semibold text-[#06164A] transition hover:bg-white"
            >
              Request a Mold Service Estimate
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Mold Remediation Services
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you are dealing with visible mold, hidden moisture problems,
            poor indoor air quality, or emergency water damage, our team provides
            trusted mold solutions for residential and commercial properties.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-[#94D62D]/40 hover:shadow-xl hover:shadow-[#94D62D]/10"
              >
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={1408}
                    height={768}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm font-semibold text-[#445A2A] transition group-hover:text-[#94D62D]">
                    View {service.title.toLowerCase()} services →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Mold Solutions Built Around Safety, Speed, and Long-Term
              Protection
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            Mold problems often start with water intrusion, leaks, humidity, or
            hidden moisture behind walls and ceilings. Our process is designed
            to identify the source, address affected areas, reduce contamination,
            and help property owners prevent future mold growth.
          </p>
        </div>
      </section>

      <section className="bg-[#F6FBF4] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Service Areas Across New York
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            BPI Mold Solutions serves homeowners, property managers, landlords,
            businesses, and commercial property owners across major New York
            City and Long Island service areas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {locationPages.map((area) => (
              <a
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="rounded-full border border-[#94D62D]/30 bg-white px-6 py-3 font-semibold text-[#445A2A] shadow-sm transition hover:border-[#445A2A]"
              >
                {area.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Local Mold Service Pages
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            These pages match the most specific mold inspection, testing,
            removal, emergency, commercial, prevention, and indoor air quality
            searches BPI Mold Solutions serves across NYC and Long Island.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLandingPages.map((page) => (
              <a
                key={page.slug}
                href={`/services/${page.slug}`}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 font-semibold text-[#445A2A] transition hover:border-[#94D62D] hover:bg-white"
              >
                {page.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Mold Services FAQ
          </h2>

          <div className="mt-10 space-y-6">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
