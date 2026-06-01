"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import {
  SERVICE_OPTIONS,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "../lib/contact";

type ContactFormProps = {
  variant?: "hero" | "page";
  showTitle?: boolean;
};

const emptyForm: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm({
  variant = "page",
  showTitle = true,
}: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState("");

  const isHero = variant === "hero";
  const inputClass = isHero
    ? "w-full rounded-lg border border-slate-200 px-4 py-3 text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#94D62D] focus:ring-1 focus:ring-[#94D62D] disabled:opacity-60"
    : "w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#94D62D] focus:ring-2 focus:ring-[#94D62D]/20 disabled:opacity-60";

  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (status === "error") {
      setStatus("idle");
      setServerError("");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        errors?: ContactFormErrors;
      };

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(
          data.error ?? "Failed to send your message. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(emptyForm);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={
          isHero
            ? "rounded-xl bg-white p-6 shadow-xl sm:p-7"
            : "mt-8 rounded-2xl border border-[#94D62D]/30 bg-[#F6FBF4] p-8"
        }
        role="status"
      >
        <p className="text-lg font-semibold text-[#06164A]">
          Thank you — we received your request.
        </p>
        <p className="mt-2 text-slate-600">
          A team member will contact you within 15 minutes.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#445A2A] underline-offset-2 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className={isHero ? "mt-5 space-y-3" : "mt-8 space-y-5"} noValidate>
      <Field id="contact-name" label="Full name" error={errors.name} className={labelClass}>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Full name"
          disabled={status === "loading"}
          className={inputClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <Field id="contact-phone" label="Phone number" error={errors.phone} className={labelClass}>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="Phone number"
          disabled={status === "loading"}
          className={inputClass}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
      </Field>

      <Field id="contact-email" label="Email address" error={errors.email} className={labelClass}>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="Email address"
          disabled={status === "loading"}
          className={inputClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
      </Field>

      <Field id="contact-service" label="Service needed" error={errors.service} className={labelClass}>
        <select
          id="contact-service"
          name="service"
          value={form.service}
          onChange={(e) => updateField("service", e.target.value)}
          disabled={status === "loading"}
          className={`${inputClass} ${!form.service ? "text-slate-400" : ""}`}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="contact-message" label="Message (optional)" error={errors.message} className={labelClass}>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Tell us about your mold issue"
          rows={isHero ? 3 : 5}
          disabled={status === "loading"}
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {status === "error" && serverError && (
        <p
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={
          isHero
            ? "flex w-full items-center justify-center gap-2 rounded-lg bg-[#94D62D] py-3.5 text-sm font-semibold text-[#06164A] transition hover:bg-[#445A2A] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
            : "flex w-full items-center justify-center gap-2 rounded-2xl bg-[#94D62D] px-8 py-5 font-semibold text-[#06164A] shadow-lg shadow-[#94D62D]/25 transition hover:bg-[#445A2A] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
        }
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : isHero ? (
          "Request Free Estimate"
        ) : (
          "Submit Request"
        )}
      </button>
    </form>
  );

  if (!showTitle) {
    return formContent;
  }

  if (isHero) {
    return (
      <div
        id="estimate"
        className="w-full scroll-mt-36 lg:max-w-md lg:justify-self-end"
      >
        <div className="rounded-xl bg-white p-6 shadow-xl sm:p-7">
          <h2 className="text-xl font-bold text-[#06164A]">
            Get a Free Estimate
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            We respond within 15 minutes.
          </p>
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
}

function Field({
  label,
  id,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={className}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
