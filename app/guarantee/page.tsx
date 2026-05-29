import { SiteNav } from "../components/SiteNav";
import type { Metadata } from "next";
export const metadata = {
    title: "Mold Remediation Guarantee | BPI Mold Solutions",
    description:
      "Learn about the BPI Mold Solutions Mold Remediation Guarantee and our commitment to providing professional mold remediation services across New York State.",
  };
  
  export default function GuaranteePage() {
    return (
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="bg-[#06164A] px-6 py-32 text-white md:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#94D62D]">
              BPI Mold Solutions
            </p>
  
            <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Our Mold Remediation Guarantee
            </h1>
  
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75">
              We stand behind our work and are committed to delivering
              professional mold remediation services that help restore healthier,
              safer indoor environments for our customers.
            </p>
  
            <div className="mt-10">
              <a
                href="/contact"
                className="rounded-2xl bg-[#94D62D] px-8 py-5 font-semibold text-[#06164A] transition hover:bg-white"
              >
                Schedule Inspection
              </a>
            </div>
          </div>
        </section>
  
        {/* OVERVIEW */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#0F172A]">
              Our Commitment To Quality
            </h2>
  
            <p className="mt-8 text-lg leading-9 text-slate-600">
              BPI Mold Solutions takes pride in providing professional mold
              inspection, remediation, and prevention services throughout New York
              State. Our guarantee reflects our confidence in our remediation
              process and our commitment to customer satisfaction.
            </p>
  
            <p className="mt-6 text-lg leading-9 text-slate-600">
              Every remediation project is completed using industry-recognized
              procedures designed to address mold contamination, improve indoor
              air quality, and help create healthier living and working
              environments.
            </p>
          </div>
        </section>
  
        {/* WHAT IS COVERED */}
        <section className="bg-[#F8FAFC] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-4xl font-bold text-[#0F172A]">
              What Our Guarantee Covers
            </h2>
  
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  Professional Remediation
                </h3>
  
                <p className="mt-5 leading-8 text-slate-600">
                  Mold remediation services completed by our team according to the
                  approved project scope.
                </p>
              </div>
  
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  Treated Areas
                </h3>
  
                <p className="mt-5 leading-8 text-slate-600">
                  Areas specifically identified and treated during the remediation
                  project.
                </p>
              </div>
  
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  Customer Support
                </h3>
  
                <p className="mt-5 leading-8 text-slate-600">
                  Follow-up support and evaluation if concerns arise regarding
                  treated areas.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CONDITIONS */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#0F172A]">
              Conditions For Coverage
            </h2>
  
            <div className="mt-10 space-y-6">
              {[
                "Moisture sources, leaks, and water intrusion issues must be properly corrected.",
                "Property owners must maintain proper ventilation and environmental conditions.",
                "Recommended repairs and prevention measures should be completed when applicable.",
                "The guarantee applies only to areas included in the original remediation scope.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* EXCLUSIONS */}
        <section className="bg-[#F8FAFC] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#0F172A]">
              What Is Not Covered
            </h2>
  
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                "New water leaks or plumbing failures",
                "Flooding, storms, or natural disasters",
                "New moisture problems occurring after remediation",
                "Areas not included in the original project scope",
                "Structural issues not addressed during remediation",
                "Future contamination caused by unrelated conditions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* IF MOLD RETURNS */}
        <section className="bg-white px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#0F172A]">
              If Mold Returns
            </h2>
  
            <p className="mt-8 text-lg leading-9 text-slate-600">
              If you believe mold has returned within a previously treated area,
              contact BPI Mold Solutions. Our team will review the situation,
              evaluate the affected area, and determine appropriate next steps
              based on the conditions present.
            </p>
          </div>
        </section>
  
        {/* TRUST SECTION */}
        <section className="bg-[#F6FBF4] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-4xl font-bold text-[#0F172A]">
              Why Homeowners Trust BPI Mold Solutions
            </h2>
  
            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                "Professional Mold Remediation",
                "Advanced Detection Methods",
                "Fast Emergency Response",
                "Serving New York State",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-8 text-center shadow-sm"
                >
                  <h3 className="font-semibold text-[#0F172A]">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-[#06164A] px-6 py-24 text-white md:px-16">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold md:text-6xl">
              Need Mold Inspection Or Remediation?
            </h2>
  
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/75">
              Contact BPI Mold Solutions today to schedule an inspection and learn
              how we can help protect your property and indoor air quality.
            </p>
  
            <div className="mt-12 space-y-3">
              <p className="text-xl font-semibold">+1 917-945-6451</p>
              <p className="text-white/70">Drilon Pustina, CEO</p>
            </div>
  
            <a
              href="/contact"
              className="mt-10 inline-block rounded-2xl bg-[#94D62D] px-10 py-5 font-semibold text-[#06164A] transition hover:bg-white"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
    );
  }