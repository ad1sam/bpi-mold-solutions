"use client";

import { PHONE_DISPLAY, PHONE_HREF } from "../lib/site";

export function HeroLeadForm() {
  return (
    <div id="estimate" className="w-full scroll-mt-36 lg:max-w-md lg:justify-self-end">
      <div className="rounded-xl bg-white p-6 shadow-xl sm:p-7">
        <h2 className="text-xl font-bold text-[#06164A]">
          Get a Free Estimate
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          We respond within 15 minutes.
        </p>

        <form
          className="mt-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/contact";
          }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full name"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#94D62D] focus:ring-1 focus:ring-[#94D62D]"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone number"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#94D62D] focus:ring-1 focus:ring-[#94D62D]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#94D62D] focus:ring-1 focus:ring-[#94D62D]"
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your mold issue"
            className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#94D62D] focus:ring-1 focus:ring-[#94D62D]"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[#94D62D] py-3.5 text-sm font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white"
          >
            Request Free Estimate
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Or call{" "}
          <a href={PHONE_HREF} className="font-semibold text-[#06164A] hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </div>
  );
}
