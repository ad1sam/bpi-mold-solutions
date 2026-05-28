import type { Metadata } from "next";
import {
  ShieldCheck,
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
    icon: <ShieldCheck className="h-7 w-7 text-[#445A2A]" />,
  },
  {
    title: "Commercial Mold Services",
    href: "/commercial-mold-services",
    icon: <Building2 className="h-7 w-7 text-[#445A2A]" />,
  },
  {
    title: "Emergency Mold Services",
    href: "/emergency-mold-services",
    icon: <Siren className="h-7 w-7 text-[#445A2A]" />,
  },
  {
    title: "Mold Inspection",
    href: "/mold-inspection",
    icon: <Search className="h-7 w-7 text-[#445A2A]" />,
  },
  {
    title: "Air Quality Testing",
    href: "/air-quality-testing",
    icon: <Wind className="h-7 w-7 text-[#445A2A]" />,
  },
  {
    title: "Water Damage Prevention",
    href: "/water-damage-prevention",
    icon: <Droplets className="h-7 w-7 text-[#445A2A]" />,
  },
];

const whyChoose = [
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
];

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-[#0F172A]">
      <SiteNav variant="hero" />

      {/* Hero — dark navy overlay only here */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#06164A] px-6 pt-28 sm:pt-32 md:px-16 md:pt-36"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-1.png"
            alt="Mold Inspection"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#06164A]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06164A]/90 via-[#06164A]/70 to-[#06164A]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06164A]/60 via-transparent to-transparent" />

        <div className="absolute right-[-120px] top-[100px] h-[380px] w-[380px] rounded-full bg-[#94D62D]/15 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[15%] h-[320px] w-[320px] rounded-full bg-[#445A2A]/20 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl animate-fade-up">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#94D62D]/30 bg-[#94D62D]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#94D62D] sm:text-sm">
              Mold Inspection • Removal • Clean Air
            </p>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Protect Your Home From Hidden Mold.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Premium mold inspection and remediation services designed to protect
              your property, improve indoor air quality, and make your home feel
              safe again.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="rounded-full bg-[#94D62D] px-9 py-4 text-center text-base font-semibold text-[#06164A] shadow-xl shadow-[#94D62D]/30 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-white/20"
              >
                Schedule Inspection
              </a>
              <a
                href="/services"
                className="rounded-full border-2 border-white/30 bg-white/10 px-9 py-4 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
              >
                View Services
              </a>
            </div>
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
              Advanced inspection and remediation services designed to protect your
              home, business, and indoor air quality.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <a
                key={service.title}
                href={service.href}
                className={`group flex flex-col rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[#94D62D]/35 hover:shadow-[0_20px_40px_-12px_rgba(148,214,45,0.2)] sm:p-10 ${
                  index % 3 === 0
                    ? "animate-fade-up"
                    : index % 3 === 1
                      ? "animate-fade-up-delay-1"
                      : "animate-fade-up-delay-2"
                }`}
              >
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
              Get A Mold Inspection
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
              BPI Mold Solutions provides professional mold inspection, mold testing,
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
                Schedule Your Mold Inspection Today.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#06164A]/80">
                BPI Mold Solutions provides trusted mold inspection, mold removal,
                remediation, air quality testing, and emergency mold services across
                New York State, including Brooklyn, Manhattan, Queens, the Bronx,
                Long Island, and surrounding areas.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="tel:+17186890871"
                className="rounded-2xl bg-[#06164A] px-8 py-5 text-center text-lg font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-[#06164A]"
              >
                Book Inspection
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
                      href="tel:+17186890871"
                      className="mt-2 inline-block font-medium text-[#445A2A] hover:text-[#06164A]"
                    >
                      +1 718-689-0871
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
            <a href="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="BPI Mold Solutions"
                className="h-12 w-auto md:h-14"
              />
            </a>

            <p className="mt-6 max-w-lg leading-8 text-white/60">
              BPI Mold Solutions provides professional mold inspection, mold testing,
              mold removal, remediation, air quality testing, and emergency mold
              services throughout New York State.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-4 text-white/60">
              <a href="/" className="transition hover:text-[#94D62D]">
                Home
              </a>
              <a href="/services" className="transition hover:text-[#94D62D]">
                Services
              </a>
              <a href="/about" className="transition hover:text-[#94D62D]">
                About
              </a>
              <a href="/contact" className="transition hover:text-[#94D62D]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Services</h3>

            <div className="flex flex-col gap-4 text-white/60">
              <a href="/mold-removal" className="transition hover:text-[#94D62D]">
                Mold Removal
              </a>
              <a href="/mold-inspection" className="transition hover:text-[#94D62D]">
                Mold Inspection
              </a>
              <a
                href="/air-quality-testing"
                className="transition hover:text-[#94D62D]"
              >
                Air Quality Testing
              </a>
              <a
                href="/emergency-mold-services"
                className="transition hover:text-[#94D62D]"
              >
                Emergency Mold Services
              </a>
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
