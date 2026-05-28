export default function Home() {
  return (
    <main className="min-h-screen bg-[#1F252D] text-white">
      <section className="flex min-h-screen items-center px-6 md:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#3FA72A]">
            BPI Mold Solutions
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Protect Your Home From Hidden Mold.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Modern mold inspection, removal, and indoor air quality solutions
            designed to make your home safe again.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="rounded-full bg-[#017169] px-7 py-4 font-semibold">
              Schedule Inspection
            </a>
            <a className="rounded-full border border-white/20 px-7 py-4 font-semibold">
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}