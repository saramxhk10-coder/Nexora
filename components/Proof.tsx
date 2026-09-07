const projections = [
  {
    stat: "Under 60 seconds",
    label: "Projected average first-response time, down from hours",
  },
  {
    stat: "3–5x",
    label: "Projected increase in leads that get any qualification conversation at all",
  },
  {
    stat: "Hours per week",
    label: "Projected time returned to agents from no longer answering repetitive FAQs",
  },
];

export default function Proof() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">What to expect</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            What this looks like for your agency
          </h2>
          <p className="mt-5 text-mist-dim leading-relaxed">
            We don&apos;t have published client case studies yet — here&apos;s
            what the research and our own system testing suggest you can
            expect once NexoraAI is live on your lead channels.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {projections.map((p) => (
            <div key={p.stat}>
              <p className="font-display text-3xl font-semibold text-violet-soft">
                {p.stat}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                {p.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-line/60 bg-panel/60 px-6 py-5">
          <p className="text-sm leading-relaxed text-mist-dim">
            These are projections based on industry response-time and
            conversion research, applied to typical UAE/Saudi agency lead
            volumes — not results from a named client. We&apos;ll update this
            section with real client data as soon as we have it.
          </p>
        </div>
      </div>
    </section>
  );
}
