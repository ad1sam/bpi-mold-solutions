import Link from "next/link";
import type { Metadata } from "next";
import { SiteNav } from "./components/SiteNav";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <SiteNav />

      <section className="page-top-offset bg-[#06164A] px-6 py-32 text-white md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
            BPI Mold Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Page Not Found
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
            The page you are looking for may have moved. You can return to our
            mold services or contact BPI Mold Solutions for help.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-2xl bg-[#94D62D] px-8 py-5 text-center font-semibold text-[#06164A] transition hover:bg-white"
            >
              View Mold Services
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-white/25 px-8 py-5 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
