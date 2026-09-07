const points = [
  {
    title: "Free 15-minute consultation",
    body: "Map the system to your existing lead process.",
  },
  {
    title: "No commitment required",
    body: "Explore the solution with zero obligation.",
  },
  {
    title: "Custom setup included",
    body: "We configure everything for your specific needs.",
  },
];

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-line/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-violet/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">Get started</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            Ready to stop losing leads?
          </h2>
          <p className="mt-5 text-mist-dim leading-relaxed">
            Turn every inquiry into an opportunity with AI automation. Book
            your free consultation and see how NexoraAI can transform your
            real estate business.
          </p>
          <a
            href="https://wa.me/923002502926"
            className="mt-8 inline-block rounded-md bg-violet px-6 py-3 text-sm font-medium text-mist transition-colors hover:bg-violet-soft"
          >
            Book free demo
          </a>
        </div>

        <div className="mt-14 grid gap-8 border-t border-line/60 pt-10 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title}>
              <p className="font-medium text-mist">{p.title}</p>
              <p className="mt-2 text-sm text-mist-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
