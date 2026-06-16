import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Siren,
  Wind,
  Droplets,
} from "lucide-react";
import { SiteNav } from "./components/SiteNav";
import { HeroLeadForm } from "./components/HeroLeadForm";
import { ServiceCostCalculator } from "./components/ServiceCostCalculator";
import { PHONE_DISPLAY, PHONE_HREF } from "./lib/site";

export const metadata: Metadata = {
  title: "Mold Removal & Remediation in New York | BPI Mold Solutions",
  description:
    "Professional mold removal, remediation, air quality testing, and emergency mold services across New York State including Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island.",
  keywords: [
    "mold removal NY",
    "mold remediation NYC",
    "air quality testing New York",
    "emergency mold services",
    "commercial mold services",
    "Brooklyn mold removal",
    "Queens mold removal",
    "Manhattan mold remediation",
    "Bronx mold services",
    "Staten Island mold removal",
    "Long Island mold removal",
  ],
};

const services = [
  {
    title: "Mold Removal",
    href: "/mold-removal",
    icon: <ShieldCheck className="h-7 w-7 text-[#445A2A]" />,
    image: "/images/mold-removal-service.png",
  },
  {
    title: "Commercial Mold Services",
    href: "/commercial-mold-services",
    icon: <Building2 className="h-7 w-7 text-[#445A2A]" />,
    image: "/images/commercialmold.png",
  },
  {
    title: "Emergency Mold Services",
    href: "/emergency-mold-services",
    icon: <Siren className="h-7 w-7 text-[#445A2A]" />,
    image: "/images/emergencymold.png",
  },
  {
    title: "Air Quality Testing",
    href: "/air-quality-testing",
    icon: <Wind className="h-7 w-7 text-[#445A2A]" />,
    image: "/images/airquality.png",
  },
  {
    title: "Water Damage Prevention",
    href: "/water-damage-prevention",
    icon: <Droplets className="h-7 w-7 text-[#445A2A]" />,
    image: "/images/watertesting.png",
  },
];

const whyChoose = [
  {
    title: "Advanced Mold Detection",
    description:
      "We use advanced moisture detection technology and proven remediation methods to identify hidden mold problems quickly and accurately.",
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
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-[#0F172A]">
      <SiteNav variant="hero" />

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#06164A] px-4 pb-20 pt-28 sm:px-6 sm:pt-32 md:px-12 lg:pb-24 lg:pt-36"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-1.png"
            alt="BPI Mold Solutions technicians performing mold remediation in a home"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#06164A]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06164A]/75 via-[#06164A]/45 to-[#06164A]/10" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-[#94D62D]">
                ★★★★★ 4.9 · 500+ customers served
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Professional Mold Removal &amp; Remediation
              </h1>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                Fast, safe, certified mold removal for homes and businesses
                across New York. Free estimates — no obligation.
              </p>

              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-2 text-white transition hover:text-[#94D62D] lg:hidden"
              >
                <span className="text-sm text-white/60">Need help now?</span>
                <span className="font-semibold">{PHONE_DISPLAY}</span>
              </a>
            </div>

            <HeroLeadForm />
          </div>
        </div>
      </section>

      {/* Services — white */}
      <section
        id="services"
        className="scroll-mt-28 bg-white px-6 py-28 sm:py-32 md:px-16 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl md:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Our Services
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Professional Mold Solutions For Modern Homes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Advanced remediation services designed to protect your
              home, business, and indoor air quality.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <a
                key={service.title}
                href={service.href}
                className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[#94D62D]/35 hover:shadow-[0_20px_40px_-12px_rgba(148,214,45,0.2)] ${
                  index % 3 === 0
                    ? "animate-fade-up"
                    : index % 3 === 1
                      ? "animate-fade-up-delay-1"
                      : "animate-fade-up-delay-2"
                }`}
              >
                {service.image && (
                  <Image
                    src={service.image}
                    alt="Mold remediation containment area with professional removal equipment"
                    width={1408}
                    height={768}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6FBF4] ring-1 ring-[#94D62D]/20 transition duration-300 group-hover:bg-[#94D62D]/15 group-hover:ring-[#94D62D]/40">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    Professional solutions focused on detection, remediation,
                    prevention, and healthier indoor environments.
                  </p>

                  <span className="mt-6 text-sm font-semibold text-[#445A2A] transition group-hover:text-[#94D62D]">
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After — light green tint */}
      <section className="bg-[#F6FBF4] px-6 py-28 sm:py-32 md:px-16 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Before & After
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              See The Difference Professional Remediation Makes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mold can spread behind walls and under surfaces. Our process focuses
              on safe containment, removal, and prevention—helping restore cleaner,
              healthier indoor environments.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.15)]">
              <div className="relative aspect-[16/11] sm:aspect-[16/10]">
                <img
                  src="/images/before.png"
                  alt="Before mold remediation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-5 top-5 rounded-2xl bg-[#0F172A]/75 px-5 py-3 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Before
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Mold growth • Unsafe air
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-100 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Common signs
                </p>
                <p className="mt-3 leading-7 text-slate-600">
                  Visible staining, musty odors, and moisture damage can indicate
                  hidden growth that needs professional attention.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-2 border-[#94D62D]/35 bg-white shadow-[0_8px_30px_-8px_rgba(148,214,45,0.2)] ring-4 ring-[#94D62D]/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(148,214,45,0.25)]">
              <div className="relative aspect-[16/11] sm:aspect-[16/10]">
                <img
                  src="/images/after.png"
                  alt="After mold remediation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-5 top-5 rounded-2xl bg-[#445A2A] px-5 py-3 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#94D62D]">
                    After
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    Clean surfaces • Healthier air
                  </p>
                </div>
              </div>
              <div className="border-t border-[#94D62D]/15 bg-[#F6FBF4]/50 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#445A2A]">
                  Our outcome
                </p>
                <p className="mt-3 leading-7 text-slate-600">
                  Cleaned and treated areas with improved indoor conditions—backed
                  by a process designed for safety and long-term prevention.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-[#445A2A] px-9 py-4 text-center font-semibold text-white shadow-lg shadow-[#445A2A]/25 transition hover:-translate-y-0.5 hover:bg-[#06164A]"
            >
              Request a Quote
            </a>
            <a
              href="/services"
              className="rounded-full border-2 border-slate-200 bg-white px-9 py-4 text-center font-semibold text-[#0F172A] transition hover:-translate-y-0.5 hover:border-[#94D62D] hover:text-[#445A2A]"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
      {/* CEO */}
      <section className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100 shadow-sm">
            <Image
              src="/images/ceo-drilon-pustina.png"
              alt="Drilon Pustina, CEO of BPI Mold Solutions"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              CEO
            </p>

            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl">
              Led by Drilon Pustina
            </h2>

            <div className="mt-6 inline-flex rounded-lg border border-[#94D62D]/35 bg-[#F6FBF4] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#445A2A]">
              Licensed &amp; Certified
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Drilon Pustina leads BPI Mold Solutions with a focus on clear
              communication, careful inspections, and remediation work that
              helps property owners feel confident about the condition of their
              homes and businesses.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every project is handled with practical guidance, professional
              standards, and a commitment to helping clients solve moisture and
              mold problems the right way. BPI Mold Solutions is licensed and
              certified for professional mold remediation services.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose — light gray */}
      <section
        id="about"
        className="scroll-mt-28 bg-[#F8FAFC] px-6 py-28 sm:py-32 md:px-16 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl md:mb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Why Choose BPI Mold Solutions
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Trusted Mold Removal Experts Serving New York State.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BPI Mold Solutions provides professional mold removal, mold testing,
              mold remediation, emergency mold services, and air quality solutions
              for residential and commercial properties throughout New York,
              including Brooklyn, Manhattan, Queens, the Bronx, Long Island, and
              nearby areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:border-[#94D62D]/30 hover:shadow-lg sm:p-10"
              >
                <div className="mb-8 h-1 w-14 rounded-full bg-[#94D62D]" />

                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCostCalculator />

      {/* Contact CTA — premium green gradient */}
      <section
        id="contact"
        className="scroll-mt-28 bg-white px-6 py-28 sm:py-32 md:px-16 md:py-36"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#94D62D] via-[#7CB82E] to-[#445A2A] p-8 shadow-2xl shadow-[#445A2A]/25 sm:p-12 md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)] opacity-20" />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#06164A]/70">
                Protect Your Property
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#06164A] sm:text-4xl md:text-5xl">
                Schedule Your Mold Remediation Today.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#06164A]/80">
                BPI Mold Solutions provides trusted mold removal, remediation,
                air quality testing, and emergency mold services across
                New York State, including Brooklyn, Manhattan, Queens, the Bronx,
                Long Island, and surrounding areas.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href={PHONE_HREF}
                className="rounded-2xl bg-[#06164A] px-8 py-5 text-center text-lg font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-[#06164A]"
              >
                Call Now
              </a>

              <div className="rounded-2xl border border-[#06164A]/10 bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#445A2A]">
                  Contact Information
                </p>

                <div className="mt-6 space-y-6 text-slate-700">
                  <div>
                    <p className="font-semibold text-[#0F172A]">Address</p>
                    <p className="mt-2 leading-7">
                      1166 Bay Street,
                      <br />
                      Staten Island, NY 10305
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#0F172A]">Telephone</p>
                    <a
                      href={PHONE_HREF}
                      className="mt-2 inline-block font-medium text-[#445A2A] hover:text-[#06164A]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-[#0F172A]">Service Areas</p>
                    <p className="mt-2 leading-7">
                      Brooklyn • Manhattan • Queens • Bronx • Long Island • New
                      York State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — dark navy */}
      <footer className="border-t border-white/10 bg-[#06164A] px-6 py-16 text-white md:px-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="BPI Mold Solutions"
                className="h-16 w-auto md:h-20"
              />
            </Link>

            <p className="mt-6 max-w-lg leading-8 text-white/60">
              BPI Mold Solutions provides professional mold removal, remediation,
              air quality testing, and emergency mold services throughout New York
              State.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-4 text-white/60">
              <Link href="/" className="transition hover:text-[#94D62D]">
                Home
              </Link>
              <Link href="/services" className="transition hover:text-[#94D62D]">
                Services
              </Link>
              <Link href="/about" className="transition hover:text-[#94D62D]">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-[#94D62D]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Services</h3>

            <div className="flex flex-col gap-4 text-white/60">
              <Link href="/mold-removal" className="transition hover:text-[#94D62D]">
                Mold Removal
              </Link>
              <Link
                href="/air-quality-testing"
                className="transition hover:text-[#94D62D]"
              >
                Air Quality Testing
              </Link>
              <Link
                href="/emergency-mold-services"
                className="transition hover:text-[#94D62D]"
              >
                Emergency Mold Services
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center">
          <p>© 2026 BPI Mold Solutions. All rights reserved.</p>

          <p>
            Serving New York State • Brooklyn • Manhattan • Queens • Bronx • Long
            Island
          </p>
        </div>
      </footer>
    </main>
  );
}
