const badges = [
  "Licensed",
  "Insured",
  "Certified Specialists",
  "24/7 Emergency",
];

type TrustBadgesProps = {
  variant?: "hero" | "light";
};

export function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "border-t border-white/10 bg-[#06164A]/95"
          : "border-t border-slate-100 bg-slate-50"
      }
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-center gap-x-3 overflow-x-auto px-4 py-2 text-xs sm:gap-x-0 sm:px-6 sm:text-sm lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isHero ? "text-white/75" : "text-slate-500"
        }`}
      >
        {badges.map((label, i) => (
          <span key={label} className="flex shrink-0 items-center">
            {i > 0 && (
              <span
                className={`mx-3 hidden sm:inline ${isHero ? "text-white/30" : "text-slate-300"}`}
                aria-hidden="true"
              >
                ·
              </span>
            )}
            <span className="whitespace-nowrap font-medium">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
