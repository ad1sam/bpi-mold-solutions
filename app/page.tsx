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

const services = [
  {
    title: "Mold Removal",
    icon: <ShieldCheck className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Commercial Mold Services",
    icon: <Building2 className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Emergency Mold Services",
    icon: <Siren className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Mold Inspection",
    icon: <Search className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Air Quality Testing",
    icon: <Wind className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Water Damage Prevention",
    icon: <Droplets className="h-7 w-7 text-[#94D62D]" />,
  },
];

const results = [
  {
    title: "Healthier Home",
    icon: <ShieldCheck className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Protect Your Property",
    icon: <House className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Safe Remediation",
    icon: <Leaf className="h-7 w-7 text-[#94D62D]" />,
  },
  {
    title: "Fast Response",
    icon: <Clock3 className="h-7 w-7 text-[#94D62D]" />,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06164A] text-white">
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-[#06164A]/80 px-6 py-5 backdrop-blur-xl md:px-16">
        <img
          src="/images/logo.png"
          alt="BPI Mold Solutions"
          className="h-14 w-auto"
        />

        <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          <a>Home</a>
          <a>Services</a>
          <a>About</a>
          <a>Contact</a>
          <a className="rounded-full bg-[#445A2A] px-5 py-3 font-semibold text-white transition hover:bg-[#94D62D] hover:text-[#06164A]">
            Get Inspection
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-16">
        <div className="absolute inset-0">
          <img
            src="/images/hero-1.png"
            alt="Mold Inspection"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#06164A]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#445A2A]/25 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[20%] h-[360px] w-[360px] rounded-full bg-[#94D62D]/20 blur-3xl" />

        <div className="relative z-10 max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#94D62D]">
            Mold Inspection • Removal • Clean Air
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Protect Your Home From Hidden Mold.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Premium mold inspection and remediation services designed to protect
            your property, improve indoor air quality, and make your home feel
            safe again.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="rounded-full bg-[#445A2A] px-8 py-4 text-center font-semibold transition hover:bg-[#94D62D] hover:text-[#06164A]">
              Schedule Inspection
            </a>
            <a className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white/90 transition hover:border-[#94D62D] hover:text-[#94D62D]">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#081B56] px-6 py-24 md:px-16">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            Our Services
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Professional Mold Solutions For Modern Homes.
          </h2>

          <p className="mt-5 text-lg text-white/65">
            Advanced inspection and remediation services designed to protect your
            home, business, and indoor air quality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
      </section>

      <section className="bg-[#06164A] px-6 py-24 md:px-16">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            Real Results
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            From Unsafe To <span className="text-[#94D62D]">Protected.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/65">
            Mold can hide in plain sight. Our remediation process restores
            safety, comfort, and healthier indoor air.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#94D62D]/30 md:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img
              src="/images/before.jpg"
              alt="Before mold remediation"
              className="h-full w-full object-cover"
            />

            <div className="absolute left-6 top-6 rounded-2xl bg-black/70 px-5 py-4 backdrop-blur">
              <p className="text-sm font-bold uppercase text-white">Before</p>
              <p className="mt-1 text-sm text-white/70">
                Mold growth • Unsafe air
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <img
              src="/images/after.jpg"
              alt="After mold remediation"
              className="h-full w-full object-cover"
            />

            <div className="absolute right-6 top-6 rounded-2xl bg-black/70 px-5 py-4 backdrop-blur">
              <p className="text-sm font-bold uppercase text-[#94D62D]">
                After
              </p>
              <p className="mt-1 text-sm text-white/70">
                Clean surfaces • Healthy air
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-4">
          {results.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#94D62D]/40 bg-[#445A2A]/20">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Professional solutions designed to restore comfort, safety, and
                peace of mind.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#081B56] px-6 py-24 md:px-16">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 max-w-4xl">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
        Why Choose BPI Mold Solutions
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-6xl">
        Trusted Mold Removal Experts Serving New York State.
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/65">
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
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 transition duration-300 hover:border-[#94D62D]/40 hover:bg-white/[0.05]"
        >
          <div className="mb-8 h-[2px] w-16 bg-[#94D62D]" />

          <h3 className="text-3xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-6 leading-8 text-white/60">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    <section className="bg-[#081B56] px-6 py-24 md:px-16">
  <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#94D62D]/20 bg-[#0A1F63] p-10 md:p-16">
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
          Protect Your Property
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Schedule Your Mold Inspection Today.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
          BPI Mold Solutions provides trusted mold inspection, mold removal,
          remediation, air quality testing, and emergency mold services across
          New York State, including Brooklyn, Manhattan, Queens, the Bronx,
          Long Island, and surrounding areas.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <a className="rounded-2xl bg-[#94D62D] px-8 py-5 text-center text-lg font-semibold text-[#06164A] transition hover:bg-white">
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
      <img
        src="/images/logo.png"
        alt="BPI Mold Solutions"
        className="h-14 w-auto"
      />

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
        <a className="transition hover:text-[#94D62D]">Home</a>
        <a className="transition hover:text-[#94D62D]">Services</a>
        <a className="transition hover:text-[#94D62D]">About</a>
        <a className="transition hover:text-[#94D62D]">Contact</a>
      </div>
    </div>

    <div>
      <h3 className="mb-5 text-lg font-semibold">
        Services
      </h3>

      <div className="flex flex-col gap-4 text-white/60">
        <a className="transition hover:text-[#94D62D]">
          Mold Removal
        </a>

        <a className="transition hover:text-[#94D62D]">
          Mold Inspection
        </a>

        <a className="transition hover:text-[#94D62D]">
          Air Quality Testing
        </a>

        <a className="transition hover:text-[#94D62D]">
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