"use client";

import { useId, useMemo, useState } from "react";

type Props = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  initial?: number; // 0-100
};

export function BeforeAfterCompare({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  initial = 52,
}: Props) {
  const [value, setValue] = useState(() => Math.min(90, Math.max(10, initial)));
  const uid = useId();
  const sliderId = useMemo(() => `before-after-${uid}`, [uid]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#94D62D]/30">
      <div className="relative aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9]">
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          aria-hidden="true"
        >
          <img
            src={afterSrc}
            alt={afterAlt}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <div className="absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[#06164A]/60 p-3 backdrop-blur">
            <div className="h-5 w-5 rotate-45 border-b-2 border-l-2 border-white/80" />
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-2xl bg-black/55 px-5 py-4 backdrop-blur sm:left-6 sm:top-6">
          <p className="text-sm font-bold uppercase text-white">Before</p>
          <p className="mt-1 text-sm text-white/75">Mold growth • Unsafe air</p>
        </div>

        <div className="absolute right-4 top-4 rounded-2xl bg-black/55 px-5 py-4 backdrop-blur sm:right-6 sm:top-6">
          <p className="text-sm font-bold uppercase text-[#94D62D]">After</p>
          <p className="mt-1 text-sm text-white/75">Clean surfaces • Healthy air</p>
        </div>

        <label htmlFor={sliderId} className="sr-only">
          Drag to compare before and after
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-x-0 bottom-3 mx-auto h-10 w-[min(28rem,calc(100%-2rem))] appearance-none bg-transparent outline-none"
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          aria-label="Before and after slider"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto w-[min(28rem,calc(100%-2rem))]">
          <div className="h-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

