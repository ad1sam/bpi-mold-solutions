type SiteNavProps = {
  variant?: "hero" | "light";
};

export function SiteNav({ variant = "light" }: SiteNavProps) {
  const isHero = variant === "hero";

  return (
    <nav
      className={
        isHero
          ? "fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06164A]/75 backdrop-blur-xl"
          : "fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/40 backdrop-blur-xl"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16 md:py-5">
        <a href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="BPI Mold Solutions"
            className="h-12 w-auto md:h-14"
          />
        </a>

        <div
          className={`hidden items-center gap-8 text-sm md:flex ${
            isHero ? "text-white/80" : "text-slate-600"
          }`}
        >
          <a
            href="/"
            className={`font-medium transition ${
              isHero ? "hover:text-white" : "hover:text-[#0F172A]"
            }`}
          >
            Home
          </a>
          <a
            href="/services"
            className={`font-medium transition ${
              isHero ? "hover:text-white" : "hover:text-[#0F172A]"
            }`}
          >
            Services
          </a>
          <a
            href="/about"
            className={`font-medium transition ${
              isHero ? "hover:text-white" : "hover:text-[#0F172A]"
            }`}
          >
            About
          </a>
          <a
            href="/contact"
            className={`font-medium transition ${
              isHero ? "hover:text-white" : "hover:text-[#0F172A]"
            }`}
          >
            Contact
          </a>
          <a
            href="/contact"
            className="rounded-full bg-[#94D62D] px-5 py-3 font-semibold text-[#06164A] shadow-lg shadow-[#94D62D]/25 transition hover:-translate-y-0.5 hover:bg-[#445A2A] hover:text-white hover:shadow-[#445A2A]/30"
          >
            Get Inspection
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary
            className={`list-none rounded-full border p-3 transition focus:outline-none ${
              isHero
                ? "border-white/20 bg-white/10 text-white hover:border-[#94D62D]/50"
                : "border-slate-200 bg-slate-50 text-[#0F172A] hover:border-[#94D62D]/40"
            }`}
          >
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

          <div
            className={`absolute right-0 mt-3 w-[min(18rem,calc(100vw-3rem))] overflow-hidden rounded-2xl border shadow-2xl ${
              isHero
                ? "border-white/10 bg-[#06164A]/95 shadow-black/30"
                : "border-slate-200 bg-white shadow-slate-300/30"
            }`}
          >
            <div className="flex flex-col p-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 transition ${
                    isHero
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0F172A]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-2 pb-2 pt-1">
                <a
                  href="/contact"
                  className="block rounded-xl bg-[#94D62D] px-4 py-3 text-center font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
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
