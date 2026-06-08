import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_HREF } from "../lib/site";

export function StickyCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-2px_12px_rgba(15,23,42,0.08)] md:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={PHONE_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#06164A] py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/#estimate"
          className="flex flex-1 items-center justify-center rounded-lg bg-[#94D62D] py-3 text-sm font-semibold text-[#06164A]"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
