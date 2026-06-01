"use client";

import { ContactForm } from "./ContactForm";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/site";

export function HeroLeadForm() {
  return (
    <div className="w-full lg:max-w-md lg:justify-self-end">
      <ContactForm variant="hero" showTitle />
      <p className="mt-4 text-center text-sm text-white/70 lg:hidden">
        Or call{" "}
        <a
          href={PHONE_HREF}
          className="font-semibold text-white hover:underline"
        >
          {PHONE_DISPLAY}
        </a>
      </p>
    </div>
  );
}
