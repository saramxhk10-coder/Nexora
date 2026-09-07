const steps = [
  {
    n: "01",
    title: "Customer sends inquiry",
    body: "A buyer messages your business through WhatsApp, Instagram, Facebook ads, your website, or any other channel. All inquiries flow into one unified system.",
  },
  {
    n: "02",
    title: "AI responds instantly",
    body: "Instead of waiting hours for an agent, NexoraAI replies within seconds. It answers common questions about pricing, availability, locations, and property features — 24/7.",
  },
  {
    n: "03",
    title: "AI understands buyer intent",
    body: "The AI asks smart, conversational questions about budget, preferred location, property type, and timeline. It identifies serious buyers from casual browsers.",
  },
  {
    n: "04",
    title: "Sales team gets qualified leads",
    body: "Only pre-qualified prospects with clear intent reach your team — ready for calls, meetings, or site visits, complete with all the buyer details your agents need.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">The process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            How our automation works
          </h2>
          <p className="mt-5 text-mist-dim leading-relaxed">
            Simple four-step process. No technical knowledge required — we
            handle the setup so you can focus on closing deals.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.n} className="relative pt-6">
              <div
                className="absolute left-0 top-0 h-px w-full bg-line"
                aria-hidden
              />
              {i === 0 && (
                <div
                  className="absolute left-0 top-0 h-px w-10 bg-violet-soft"
                  aria-hidden
                />
              )}
              <span className="font-display text-sm text-violet-soft">
                {step.n}
              </span>
              <h3 className="mt-3 font-medium text-mist">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-14 text-mist border-t border-line/60 pt-8">
          Your team spends less time chasing leads and more time closing
          deals.
        </p>
      </div>
    </section>
  );
}
