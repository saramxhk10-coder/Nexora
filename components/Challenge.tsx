const items = [
  {
    stat: "Up to 50%",
    label: "Leads get ignored",
    body: "Inquiries from multiple sources pile up and go unanswered. Every missed message is a lost opportunity.",
  },
  {
    stat: "5x less likely",
    label: "Slow response time",
    body: "Buyers expect instant replies. When they wait hours, they move on to your competitors.",
  },
  {
    stat: "3–4 hours",
    label: "Repetitive questions",
    body: "Agents spend hours every day answering the same questions about pricing, availability, and locations.",
  },
  {
    stat: "80% of sales",
    label: "Inconsistent follow-up",
    body: "Without a system, leads fall through the cracks. No follow-up means no deal.",
  },
  {
    stat: "70% of inquiries",
    label: "Unqualified leads",
    body: "Your team spends time on browsers instead of serious buyers ready to invest.",
  },
  {
    stat: "AED 50K+",
    label: "Revenue leakage",
    body: "Every missed lead and delayed response costs your business real commission.",
  },
];

export default function Challenge() {
  return (
    <section className="border-b border-line/60 bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">The challenge</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            Why real estate teams lose revenue
          </h2>
          <p className="mt-5 text-mist-dim leading-relaxed">
            The traditional way of handling leads is broken. Here&apos;s
            what&apos;s actually happening behind the scenes at most UAE and
            Saudi real estate agencies.
          </p>
        </div>

        <div className="mt-14 divide-y divide-line/60 border-t border-line/60">
          {items.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 py-6 sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-8"
            >
              <p className="font-display text-2xl font-semibold text-violet-soft">
                {item.stat}
              </p>
              <div>
                <p className="font-medium text-mist">{item.label}</p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-mist-dim">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-mist-dim/70">
          Figures are industry benchmarks for response-time and lead-conversion
          research, not a specific client&apos;s results.
        </p>
      </div>
    </section>
  );
}
