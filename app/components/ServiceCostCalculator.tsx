"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/site";

type ServiceType =
  | "mold-removal"
  | "commercial-mold"
  | "emergency-mold"
  | "air-quality"
  | "water-damage";

type PropertyType = "apartment" | "house" | "commercial";
type AreaSize = "under-50" | "50-100" | "100-250" | "250-500" | "500-plus";
type Severity = "small" | "moderate" | "extensive" | "not-sure";
type Emergency = "no" | "yes";
type Location =
  | "brooklyn"
  | "queens"
  | "manhattan"
  | "bronx"
  | "staten-island"
  | "long-island";

type EstimateInput = {
  service: ServiceType;
  property: PropertyType;
  area: AreaSize;
  severity: Severity;
  emergency: Emergency;
  location: Location;
};

type EstimateResult = {
  range: string;
  explanation: string;
  basis: string[];
};

const serviceOptions: Array<{ value: ServiceType; label: string }> = [
  { value: "mold-removal", label: "Mold Removal" },
  { value: "commercial-mold", label: "Commercial Mold Services" },
  { value: "emergency-mold", label: "Emergency Mold Services" },
  { value: "air-quality", label: "Air Quality Testing" },
  { value: "water-damage", label: "Water Damage Prevention" },
];

const propertyOptions: Array<{ value: PropertyType; label: string }> = [
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "commercial", label: "Commercial Property" },
];

const areaOptions: Array<{ value: AreaSize; label: string }> = [
  { value: "under-50", label: "Under 50 sq ft" },
  { value: "50-100", label: "50-100 sq ft" },
  { value: "100-250", label: "100-250 sq ft" },
  { value: "250-500", label: "250-500 sq ft" },
  { value: "500-plus", label: "500+ sq ft" },
];

const severityOptions: Array<{ value: Severity; label: string }> = [
  { value: "small", label: "Small visible area" },
  { value: "moderate", label: "Moderate visible area" },
  { value: "extensive", label: "Extensive growth" },
  { value: "not-sure", label: "Not sure" },
];

const locationOptions: Array<{ value: Location; label: string }> = [
  { value: "brooklyn", label: "Brooklyn" },
  { value: "queens", label: "Queens" },
  { value: "manhattan", label: "Manhattan" },
  { value: "bronx", label: "Bronx" },
  { value: "staten-island", label: "Staten Island" },
  { value: "long-island", label: "Long Island" },
];

const basePricing: Record<
  Exclude<ServiceType, "emergency-mold">,
  Record<AreaSize, [number, number] | "custom">
> = {
  "mold-removal": {
    "under-50": [350, 900],
    "50-100": [900, 1800],
    "100-250": [1800, 3800],
    "250-500": [3800, 7500],
    "500-plus": "custom",
  },
  "commercial-mold": {
    "under-50": [1500, 2800],
    "50-100": [2200, 4500],
    "100-250": [4200, 8500],
    "250-500": [8500, 15000],
    "500-plus": "custom",
  },
  "air-quality": {
    "under-50": [225, 450],
    "50-100": [275, 550],
    "100-250": [350, 700],
    "250-500": [500, 950],
    "500-plus": [650, 1200],
  },
  "water-damage": {
    "under-50": [350, 900],
    "50-100": [900, 2200],
    "100-250": [1400, 3200],
    "250-500": [2800, 5500],
    "500-plus": "custom",
  },
};

const severityModifiers: Record<Severity, { low: number; high: number; label: string }> = {
  small: { low: 1, high: 1, label: "normal severity pricing" },
  moderate: { low: 1.15, high: 1.15, label: "15% moderate severity adjustment" },
  extensive: { low: 1.3, high: 1.3, label: "30% extensive growth adjustment" },
  "not-sure": { low: 0.85, high: 1.4, label: "wider range for uncertain severity" },
};

const propertyModifiers: Record<PropertyType, { multiplier: number; label: string }> = {
  apartment: { multiplier: 0.95, label: "apartment scope" },
  house: { multiplier: 1.05, label: "house scope adjustment" },
  commercial: { multiplier: 1.3, label: "30% commercial property adjustment" },
};

const locationModifiers: Record<Location, { multiplier: number; label: string }> = {
  brooklyn: { multiplier: 1.03, label: "Brooklyn service area" },
  queens: { multiplier: 1.02, label: "Queens service area" },
  manhattan: { multiplier: 1.08, label: "Manhattan service area" },
  bronx: { multiplier: 1.01, label: "Bronx service area" },
  "staten-island": { multiplier: 1, label: "Staten Island service area" },
  "long-island": { multiplier: 1.05, label: "Long Island service area" },
};

const factors = [
  "Size of affected area",
  "Mold severity",
  "Moisture source",
  "Accessibility",
  "Affected materials",
  "Emergency response needs",
  "Commercial vs residential property",
];

const trustBadges = [
  "Licensed & Insured",
  "NYC & Long Island Service Area",
  "24/7 Emergency Response",
];

const initialInput: EstimateInput = {
  service: "mold-removal",
  property: "house",
  area: "50-100",
  severity: "moderate",
  emergency: "no",
  location: "brooklyn",
};

function roundEstimate(value: number) {
  if (value < 1000) {
    return Math.round(value / 25) * 25;
  }

  return Math.round(value / 100) * 100;
}

function money(value: number) {
  return `$${roundEstimate(value).toLocaleString("en-US")}`;
}

function formatRange(range: [number, number], suffix = "") {
  return `${money(range[0])} – ${money(range[1])}${suffix}`;
}

function selectedLabel<T extends string>(
  options: Array<{ value: T; label: string }>,
  value: T
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function estimateBasis(input: EstimateInput) {
  return [
    selectedLabel(serviceOptions, input.service),
    selectedLabel(propertyOptions, input.property),
    selectedLabel(areaOptions, input.area),
    selectedLabel(severityOptions, input.severity),
    `${input.emergency === "yes" ? "Emergency" : "Non-emergency"} situation`,
    selectedLabel(locationOptions, input.location),
  ];
}

function applyModifiers(range: [number, number], input: EstimateInput) {
  const severity = severityModifiers[input.severity];
  const property = propertyModifiers[input.property];
  const location = locationModifiers[input.location];
  const emergencyMultiplier =
    input.emergency === "yes" || input.service === "emergency-mold" ? 1.25 : 1;

  return [
    range[0] *
      severity.low *
      property.multiplier *
      location.multiplier *
      emergencyMultiplier,
    range[1] *
      severity.high *
      property.multiplier *
      location.multiplier *
      emergencyMultiplier,
  ] as [number, number];
}

function calculateEstimate(input: EstimateInput): EstimateResult {
  const basis = estimateBasis(input);
  const pricingService =
    input.service === "emergency-mold" ? "mold-removal" : input.service;
  const baseRange = basePricing[pricingService][input.area];

  if (baseRange === "custom") {
    return {
      range: "Custom quote required",
      explanation:
        input.service === "commercial-mold"
          ? "Large commercial mold projects require an on-site assessment because building size, occupancy, containment, and business continuity needs can significantly affect pricing."
          : "Large scopes require an on-site assessment to determine access, affected materials, moisture source, containment, and remediation requirements.",
      basis,
    };
  }

  let adjustedRange = applyModifiers(baseRange, input);
  let suffix = "";
  let explanation =
    "This estimated price range updates from the selected service, area size, severity, property type, emergency status, and location.";

  if (input.service === "air-quality" && input.property === "commercial") {
    suffix = "+";
    explanation =
      "Commercial air quality testing may require more sampling areas, larger coverage, and additional reporting.";
  } else if (input.service === "commercial-mold") {
    suffix = input.area === "250-500" ? "+" : "";
    explanation =
      "Commercial Mold Services pricing adjusts for service area, affected size, visible severity, property type, and emergency response needs.";
  } else if (input.service === "emergency-mold") {
    explanation =
      "Emergency Mold Services use Mold Removal base pricing with an approximate 25% emergency response adjustment.";
  } else if (input.service === "water-damage") {
    suffix = input.area === "250-500" ? "+" : "";
    explanation =
      "Water Damage Prevention pricing adjusts for moisture scope, affected size, severity, property type, emergency needs, and location.";
  } else if (input.service === "mold-removal") {
    explanation =
      "Mold Removal pricing adjusts for affected size, visible severity, property type, emergency needs, and location.";
  }

  if (input.service === "air-quality") {
    if (input.property !== "commercial") {
      adjustedRange = [
        Math.max(200, adjustedRange[0]),
        Math.max(adjustedRange[0] + 75, adjustedRange[1]),
      ];
    }
  }

  return {
    range: formatRange(adjustedRange, suffix),
    explanation,
    basis,
  };
}

export function ServiceCostCalculator() {
  const [input, setInput] = useState<EstimateInput>(initialInput);
  const estimate = useMemo(() => calculateEstimate(input), [input]);

  function updateField<K extends keyof EstimateInput>(
    field: K,
    value: EstimateInput[K]
  ) {
    setInput((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section
      id="estimate"
      className="scroll-mt-28 bg-[#F8FAFC] px-6 py-24 sm:py-28 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#445A2A]">
              Instant Service Estimate Calculator
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Get An Estimated Price Range Before Your Free Consultation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This calculator provides an approximate estimate only. Final pricing
              depends on on-site assessment, affected materials, moisture source,
              accessibility, and remediation requirements.
            </p>
          </div>

          <div className="rounded-3xl border border-[#94D62D]/25 bg-white p-5 shadow-sm shadow-slate-200/60">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F6FBF4] text-[#445A2A]">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A]">
                  Free consultation after estimate
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  See a planning range first, then speak with a BPI specialist.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
            <div className="mb-8 flex flex-col gap-3 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#445A2A]">
                  Project Details
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Update any field to refresh the estimate instantly.
                </p>
              </div>
              <div className="rounded-full bg-[#F6FBF4] px-4 py-2 text-sm font-semibold text-[#445A2A]">
                Approximate only
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <SelectField
                label="Service type"
                value={input.service}
                options={serviceOptions}
                onChange={(value) => updateField("service", value as ServiceType)}
              />
              <SelectField
                label="Property type"
                value={input.property}
                options={propertyOptions}
                onChange={(value) =>
                  updateField("property", value as PropertyType)
                }
              />
              <SelectField
                label="Affected area size"
                value={input.area}
                options={areaOptions}
                onChange={(value) => updateField("area", value as AreaSize)}
              />
              <SelectField
                label="Severity"
                value={input.severity}
                options={severityOptions}
                onChange={(value) => updateField("severity", value as Severity)}
              />
              <SelectField
                label="Emergency situation"
                value={input.emergency}
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                onChange={(value) => updateField("emergency", value as Emergency)}
              />
              <SelectField
                label="Location"
                value={input.location}
                options={locationOptions}
                onChange={(value) => updateField("location", value as Location)}
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 rounded-2xl bg-[#F6FBF4] px-4 py-3 text-sm font-semibold text-[#445A2A]"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="sticky top-28 rounded-[2rem] border border-white/10 bg-[#06164A] p-6 text-white shadow-2xl shadow-[#06164A]/25 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#94D62D] text-[#06164A] shadow-lg shadow-[#94D62D]/25">
                <Calculator className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                Live estimate
              </span>
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#94D62D]">
              Estimated Price Range:
            </p>
            <div
              key={estimate.range}
              className="mt-3 animate-fade-up rounded-3xl border border-[#94D62D]/35 bg-[#94D62D]/10 p-5 shadow-lg shadow-[#94D62D]/10 transition duration-300"
            >
              <p className="text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
                {estimate.range}
              </p>
            </div>
            <p className="mt-5 leading-8 text-white/75">{estimate.explanation}</p>
            <p className="mt-3 text-sm font-semibold text-[#94D62D]">
              Updates instantly as you change the service details.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {estimate.basis.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>

            {input.emergency === "yes" && input.service !== "emergency-mold" && (
              <p className="mt-4 rounded-2xl border border-[#94D62D]/25 bg-white/10 p-4 text-sm leading-6 text-white/80">
                This estimate includes an approximate emergency adjustment. For
                urgent mold concerns, Emergency Mold Services may be the best fit.
              </p>
            )}

            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">Factors that may affect final cost</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-white/75">
                {factors.map((factor) => (
                  <li key={factor} className="flex gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#94D62D]"
                      aria-hidden="true"
                    />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-white/60">
              Approximate estimate only. Prices are not guaranteed or final.
              This estimate is provided for informational purposes only. Final
              pricing depends on on-site assessment and the extent of
              contamination, accessibility, affected materials, moisture source,
              and remediation requirements determined during assessment.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href="/contact"
                className="rounded-2xl bg-[#94D62D] px-6 py-4 text-center text-lg font-bold text-[#06164A] shadow-xl shadow-[#94D62D]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Request Free Consultation
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now: {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#0F172A]">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-[#0F172A] shadow-sm outline-none transition duration-200 hover:border-slate-300 focus:border-[#94D62D] focus:bg-white focus:ring-2 focus:ring-[#94D62D]/20"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
