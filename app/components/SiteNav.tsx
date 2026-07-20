import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/site";

type SiteNavProps = {
  variant?: "hero" | "light";
};

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/guarantee", label: "Guarantee" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav({ variant = "light" }: SiteNavProps) {
  const isHero = variant === "hero";

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={
          isHero
            ? "border-b border-white/10 bg-[#06164A]/90 backdrop-blur-md"
            : "border-b border-slate-100 bg-white/95 backdrop-blur-md"
        }
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="BPI Mold Solutions"
              width={1280}
              height={1163}
              className="h-16 w-auto sm:h-[4.5rem]"
            />
          </Link>

          <div
            className={`hidden items-center gap-6 text-sm lg:flex ${
              isHero ? "text-white/70" : "text-slate-600"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition ${
                  isHero ? "hover:text-white" : "hover:text-[#0F172A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PHONE_HREF}
              className={`hidden font-semibold sm:block ${
                isHero ? "text-white/90" : "text-[#06164A]"
              }`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#94D62D] px-3.5 py-2.5 text-sm font-semibold text-[#06164A] transition hover:bg-[#7CB82E] sm:px-4"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className={`hidden rounded-lg border px-4 py-2.5 text-sm font-semibold transition md:inline-flex ${
                isHero
                  ? "border-white/25 text-white hover:bg-white/10"
                  : "border-slate-200 text-[#06164A] hover:border-[#94D62D] hover:text-[#445A2A]"
              }`}
            >
              Free Estimate
            </Link>

            <details className="group relative lg:hidden">
              <summary
                className={`list-none rounded-lg border p-2 transition focus:outline-none ${
                  isHero
                    ? "border-white/20 text-white"
                    : "border-slate-200 text-[#0F172A]"
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

              <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="flex flex-col p-1.5 text-sm">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 font-medium text-slate-600 transition hover:bg-slate-50 hover:text-[#0F172A]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="mt-1 rounded-lg bg-[#94D62D] px-3 py-2.5 text-center font-semibold text-[#06164A]"
                  >
                    Free Estimate
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>

    </header>
  );
}
