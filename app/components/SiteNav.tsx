export function SiteNav() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#06164A]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16 md:py-5">
        <a href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="BPI Mold Solutions"
            className="h-12 w-auto md:h-14"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          <a href="/" className="transition hover:text-white">
            Home
          </a>
          <a href="/services" className="transition hover:text-white">
            Services
          </a>
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a href="/contact" className="transition hover:text-white">
            Contact
          </a>
          <a
            href="/contact"
            className="rounded-full bg-[#445A2A] px-5 py-3 font-semibold text-white transition hover:bg-[#94D62D] hover:text-[#06164A]"
          >
            Get Inspection
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="list-none rounded-full border border-white/15 bg-white/[0.04] p-3 text-white/90 transition hover:border-[#94D62D]/40 hover:text-white focus:outline-none">
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </summary>

          <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-3rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#06164A]/95 shadow-2xl shadow-black/30 ring-1 ring-white/5">
            <div className="flex flex-col p-2 text-sm">
              <a
                href="/"
                className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/[0.05] hover:text-white"
              >
                Home
              </a>
              <a
                href="/services"
                className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/[0.05] hover:text-white"
              >
                Services
              </a>
              <a
                href="/about"
                className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/[0.05] hover:text-white"
              >
                About
              </a>
              <a
                href="/contact"
                className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/[0.05] hover:text-white"
              >
                Contact
              </a>
              <div className="px-2 pb-2 pt-1">
                <a
                  href="/contact"
                  className="block rounded-xl bg-[#94D62D] px-4 py-3 text-center font-semibold text-[#06164A] transition hover:bg-white"
                >
                  Get Inspection
                </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}

