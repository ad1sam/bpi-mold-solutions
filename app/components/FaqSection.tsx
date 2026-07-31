export type FaqItem = {
  q: string;
  a: string;
};

export function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: readonly FaqItem[];
}) {
  return (
    <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>

        <div className="mt-10 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{faq.q}</h3>
              <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
