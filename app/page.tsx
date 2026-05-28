export default function Home() {
  return (
    <main className="min-h-screen bg-[#06164A] text-white">
<nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-[#06164A]/80 px-6 py-5 backdrop-blur-xl md:px-16">        <img
  src="/images/logo.png"
  alt="BPI Mold Solutions"
  className="h-14 w-auto"
/>

        <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          <a>Home</a>
          <a>Services</a>
          <a>About</a>
          <a>Contact</a>
          <a className="rounded-full bg-[#445A2A] px-5 py-3 font-semibold text-white">
            Get Inspection
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-16">

  <div className="absolute inset-0">
    <img
      src="/images/hero-1.jpg"
      alt="Mold Inspection"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#06164A]/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

  <div className="absolute inset-0">
    <img
      src="/images/hero-1.jpg"
      alt="Mold Inspection"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#06164A]/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

  <div className="absolute inset-0">
    <img
      src="/images/hero-1.jpg"
      alt="Mold Inspection"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#06164A]/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

  <div className="absolute inset-0">
    <img
      src="/images/hero-1.jpg"
      alt="Mold Inspection"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#06164A]/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

  <div className="absolute inset-0">
    <img
      src="/images/hero-1.jpg"
      alt="Mold Inspection"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#06164A]/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

  <div className="absolute inset-0">
    <img
      src="/images/hero-1.jpg"
      alt="Mold Inspection"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#06164A]/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06164A] via-[#06164A]/90 to-transparent" />

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
            <a className="rounded-full bg-[#445A2A] px-8 py-4 text-center font-semibold transition hover:bg-[#94D62D]">
              Schedule Inspection
            </a>
            <a className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white/90 transition hover:border-[#94D62D]">
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
      Advanced inspection and remediation services designed to protect
      your home, business, and indoor air quality.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {[
      "Mold Removal",
      "Commercial Mold Services",
      "Emergency Mold Services",
      "Mold Inspection",
      "Air Quality Testing",
      "Water Damage Prevention",
    ].map((service) => (
      <div
        key={service}
        className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-[#94D62D]/60 hover:bg-white/[0.05]"
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#445A2A] transition group-hover:bg-[#94D62D]">
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>

        <h3 className="text-2xl font-semibold">{service}</h3>

        <p className="mt-4 leading-7 text-white/60">
          Professional solutions focused on detection, remediation,
          prevention, and healthier indoor environments.
        </p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}