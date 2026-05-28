import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  House,
  Leaf,
  Clock3,
  Building2,
  Siren,
  Search,
  Wind,
  Droplets,
} from "lucide-react";
import { SiteNav } from "./components/SiteNav";

export const metadata: Metadata = {
  title: "Mold Inspection & Removal in New York | BPI Mold Solutions",
  description:
    "Professional mold inspection, mold removal, remediation, air quality testing, and emergency mold services across New York State including Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island.",
  keywords: [
    "mold inspection New York",
    "mold removal NY",
    "mold remediation NYC",
    "air quality testing New York",
    "emergency mold services",
    "commercial mold services",
    "mold testing",
    "Brooklyn mold removal",
    "Queens mold inspection",
    "Manhattan mold remediation",
    "Bronx mold services",
    "Staten Island mold inspection",
    "Long Island mold removal",
  ],
};

const services = [
  {
    title: "Mold Removal",
    href: "/mold-removal",
    icon: <ShieldCheck className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Commercial Mold Services",
    href: "/commercial-mold-services",
    icon: <Building2 className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Emergency Mold Services",
    href: "/emergency-mold-services",
    icon: <Siren className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Mold Inspection",
    href: "/mold-inspection",
    icon: <Search className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Air Quality Testing",
    href: "/air-quality-testing",
    icon: <Wind className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Water Damage Prevention",
    href: "/water-damage-prevention",
    icon: <Droplets className="h-7 w-7 text-[#94D62D]" />,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#06164A] text-white">
      <SiteNav />

      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 sm:pt-32 md:px-16 md:pt-32"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-1.png"
            alt="Mold Inspection"
            className="h-full w-full object-cover brightness-110 contrast-105 saturate-110"
          />
        </div>

        <div className="absolute inset-0 bg-[#06164A]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06164A]/60 via-[#06164A]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06164A]/20 via-transparent to-transparent" />

        <div className="absolute right-[-160px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#445A2A]/30 blur-3xl sm:right-[-120px]" />
        <div className="absolute bottom-[-160px] left-[10%] h-[360px] w-[360px] rounded-full bg-[#94D62D]/25 blur-3xl sm:bottom-[-140px] sm:left-[20%]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#94D62D] drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-sm">
            Mold Inspection • Removal • Clean Air
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)] sm:text-5xl md:text-7xl">
            Protect Your Home From Hidden Mold.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-lg sm:leading-8">
            Premium mold inspection and remediation services designed to protect
            your property, improve indoor air quality, and make your home feel
            safe again.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-[#445A2A] px-8 py-4 text-center font-semibold transition hover:bg-[#94D62D] hover:text-[#06164A]"
            >
              Schedule Inspection
            </a>
            <a
              href="/services"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white/90 transition hover:border-[#94D62D] hover:text-[#94D62D]"
            >
              View Services
            </a>
          </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#081B56] px-6 py-16 sm:py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            Our Services
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Professional Mold Solutions For Modern Homes.
          </h2>

          <p className="mt-5 text-base text-white/65 sm:text-lg">
            Advanced inspection and remediation services designed to protect your
            home, business, and indoor air quality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-[#94D62D]/60 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#445A2A]/60 transition group-hover:bg-[#94D62D]/20">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold">{service.title}</h3>

              <p className="mt-4 leading-7 text-white/60">
                Professional solutions focused on detection, remediation,
                prevention, and healthier indoor environments.
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-[#06164A] px-6 py-16 sm:py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl md:mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
              Before & After
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              See The Difference Professional Remediation Makes.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Mold can spread behind walls and under surfaces. Our process focuses
              on safe containment, removal, and prevention—helping restore cleaner,
              healthier indoor environments.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9]">
                <img
                  src="/images/before.png"
                  alt="Before mold remediation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-2xl bg-black/55 px-5 py-4 backdrop-blur sm:left-6 sm:top-6">
                  <p className="text-sm font-bold uppercase text-white">Before</p>
                  <p className="mt-1 text-sm text-white/75">
                    Mold growth • Unsafe air
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Common signs
                </p>
                <p className="mt-2 text-base leading-7 text-white/70">
                  Visible staining, musty odors, and moisture damage can indicate
                  hidden growth that needs professional attention.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#94D62D]/25 bg-white/[0.03]">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9]">
                <img
                  src="/images/after.png"
                  alt="After mold remediation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 rounded-2xl bg-black/55 px-5 py-4 backdrop-blur sm:right-6 sm:top-6">
                  <p className="text-sm font-bold uppercase text-[#94D62D]">
                    After
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Clean surfaces • Healthier air
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Our outcome
                </p>
                <p className="mt-2 text-base leading-7 text-white/70">
                  Cleaned and treated areas with improved indoor conditions—backed
                  by a process designed for safety and long-term prevention.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="rounded-full bg-[#94D62D] px-8 py-4 text-center font-semibold text-[#06164A] transition hover:bg-white"
            >
              Get A Mold Inspection
            </a>
            <a
              href="/services"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white/90 transition hover:border-[#94D62D] hover:text-[#94D62D]"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#081B56] px-6 py-16 sm:py-20 md:px-16 md:py-24"
      >
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-4xl md:mb-16">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
        Why Choose BPI Mold Solutions
      </p>

      <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
        Trusted Mold Removal Experts Serving New York State.
      </h2>

      <p className="mt-6 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
        BPI Mold Solutions provides professional mold inspection, mold testing,
        mold remediation, emergency mold services, and air quality solutions
        for residential and commercial properties throughout New York,
        including Brooklyn, Manhattan, Queens, the Bronx, Long Island, and
        nearby areas.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "Advanced Mold Detection",
          description:
            "We use modern inspection methods and advanced moisture detection technology to identify hidden mold problems quickly and accurately.",
        },
        {
          title: "Safe & Professional Remediation",
          description:
            "Our remediation process focuses on safe containment, mold removal, and long-term prevention to protect your home and indoor air quality.",
        },
        {
          title: "Fast Emergency Response",
          description:
            "From water damage to active mold growth, our team provides fast response services across New York to minimize damage and health risks.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-[#94D62D]/40 hover:bg-white/[0.05] sm:p-10"
        >
          <div className="mb-8 h-[2px] w-16 bg-[#94D62D]" />

          <h3 className="text-2xl font-semibold sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-6 leading-7 text-white/60 sm:leading-8">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    <section
      id="contact"
      className="bg-[#081B56] px-6 py-16 sm:py-20 md:px-16 md:py-24"
    >
  <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#94D62D]/20 bg-[#0A1F63] p-8 sm:p-10 md:p-16">
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
          Protect Your Property
        </p>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Schedule Your Mold Inspection Today.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
          BPI Mold Solutions provides trusted mold inspection, mold removal,
          remediation, air quality testing, and emergency mold services across
          New York State, including Brooklyn, Manhattan, Queens, the Bronx,
          Long Island, and surrounding areas.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <a
          href="tel:+17186890871"
          className="rounded-2xl bg-[#94D62D] px-8 py-5 text-center text-lg font-semibold text-[#06164A] transition hover:bg-white"
        >
          Book Inspection
        </a>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#94D62D]">
            Contact Information
          </p>

          <div className="mt-5 space-y-5 text-white/70">
            <div>
              <p className="font-semibold text-white">Address</p>
              <p className="mt-2 leading-7">
                1166 Bay Street,
                <br />
                Staten Island, NY 10305
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Telephone</p>
              <p className="mt-2">
                +1 718-689-0871
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">Service Areas</p>

              <p className="mt-2 leading-7">
                Brooklyn • Manhattan • Queens • Bronx • Long Island •
                New York State
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="border-t border-white/10 bg-[#06164A] px-6 py-12 md:px-16">
  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
    <div className="md:col-span-2">
      <a href="#home" className="inline-block">
        <img
          src="/images/logo.png"
          alt="BPI Mold Solutions"
          className="h-12 w-auto md:h-14"
        />
      </a>

      <p className="mt-6 max-w-lg leading-8 text-white/55">
        BPI Mold Solutions provides professional mold inspection, mold testing,
        mold removal, remediation, air quality testing, and emergency mold
        services throughout New York State.
      </p>
    </div>

    <div>
      <h3 className="mb-5 text-lg font-semibold">
        Quick Links
      </h3>

      <div className="flex flex-col gap-4 text-white/60">
        <a href="/" className="transition hover:text-[#94D62D]">Home</a>
        <a href="/services" className="transition hover:text-[#94D62D]">Services</a>
        <a href="/about" className="transition hover:text-[#94D62D]">About</a>
        <a href="/contact" className="transition hover:text-[#94D62D]">Contact</a>
      </div>
    </div>

    <div>
      <h3 className="mb-5 text-lg font-semibold">
        Services
      </h3>

      <div className="flex flex-col gap-4 text-white/60">
        <a href="/mold-removal" className="transition hover:text-[#94D62D]">
          Mold Removal
        </a>

        <a href="/mold-inspection" className="transition hover:text-[#94D62D]">
          Mold Inspection
        </a>

        <a href="/air-quality-testing" className="transition hover:text-[#94D62D]">
          Air Quality Testing
        </a>

        <a href="/emergency-mold-services" className="transition hover:text-[#94D62D]">
          Emergency Mold Services
        </a>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center">
    <p>
      © 2026 BPI Mold Solutions. All rights reserved.
    </p>

    <p>
      Serving New York State • Brooklyn • Manhattan • Queens • Bronx • Long Island
    </p>
  </div>
</footer>
    </main>
  );
}