const fields = [
  { label: "Name", value: "Muhammad Saram" },
  { label: "Intent", value: "Investment" },
  { label: "Budget", value: "AED 300,000" },
  { label: "Location", value: "Center of Dubai" },
  { label: "Timeline", value: "This month" },
  { label: "Payment", value: "Cash" },
];

const points = [
  {
    title: "Natural lead conversations",
    body: "Questions and replies follow your business's rules, tone, and qualification criteria.",
  },
  {
    title: "Structured lead records",
    body: "Key details move into your sheet or CRM so agents have context before they respond.",
  },
  {
    title: "Built around your workflow",
    body: "The system connects to the tools and handover process your team already uses.",
  },
];

export default function CommandCenter() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_0.95fr] md:items-center">
        <div>
          <p className="text-sm text-mist-dim">Built for real operations</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            Automation your team can actually use
          </h2>
          <p className="mt-5 max-w-md text-mist-dim leading-relaxed">
            Clear handovers, organised information, and fewer repetitive
            tasks between enquiry and agent follow-up.
          </p>

          <div className="mt-9 space-y-7">
            {points.map((p) => (
              <div key={p.title}>
                <p className="font-medium text-mist">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real structured-data card, built from the actual demo
            conversation — not a screenshot of a product that doesn't exist */}
        <div>
          <div className="rounded-xl border border-line bg-panel p-6">
            <div className="flex items-center justify-between border-b border-line/60 pb-4">
              <p className="text-sm text-mist-dim">Extracted from the conversation</p>
              <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-medium text-violet-soft">
                Lead qualified
              </span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
              {fields.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs uppercase tracking-wide text-mist-dim/60">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-mist">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-line/60 pt-4 text-sm text-mist-dim">
              Appointment confirmed — advisor to call between 2–4 pm
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-mist-dim">
            Real output from the conversation shown earlier on this page
          </p>
        </div>
      </div>
    </section>
  );
}
