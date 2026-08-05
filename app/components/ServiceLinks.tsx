import Link from "next/link";
import { serviceLandingPages, services } from "../lib/seo";

export function ServiceLinks({ currentPath }: { currentPath?: string }) {
  const priorityPages = serviceLandingPages.filter(
    (page) => `/services/${page.slug}` !== currentPath,
  );

  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Related Mold Services
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((service) => service.path !== currentPath)
            .map((service) => (
              <Link
                key={service.path}
                href={service.path}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#94D62D] hover:bg-white"
              >
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {service.name}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </Link>
            ))}
          {priorityPages.slice(0, 6).map((page) => (
            <Link
              key={page.slug}
              href={`/services/${page.slug}`}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#94D62D] hover:bg-white"
            >
              <h3 className="text-lg font-semibold text-[#0F172A]">
                {page.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {page.description}
              </p>
            </Link>
          ))}
          <Link
            href="/locations/queens"
            className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#94D62D] hover:bg-white"
          >
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Mold Removal in Queens
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Local inspection and remediation information for Queens homes,
              apartments, finished basements, and commercial properties.
            </p>
          </Link>
          <Link
            href="/locations/long-island"
            className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#94D62D] hover:bg-white"
          >
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Mold Remediation in Long Island
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Mold services for Long Island properties affected by basement
              moisture, humidity, leaks, storms, or water damage.
            </p>
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-[#94D62D]/40 bg-[#F6FBF4] p-6 transition hover:border-[#445A2A]"
          >
            <h3 className="text-lg font-semibold text-[#0F172A]">
              Contact BPI Mold Solutions
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Request a free inspection and a clear quote from the mold
              remediation team.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
