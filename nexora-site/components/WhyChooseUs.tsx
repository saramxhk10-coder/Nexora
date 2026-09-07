const reasons = [
  {
    title: "24/7 instant replies",
    body: "Your AI assistant never sleeps. Every inquiry gets an immediate response, day or night.",
  },
  {
    title: "Faster lead response",
    body: "Respond in seconds instead of hours — speed is the biggest factor in converting inquiries.",
  },
  {
    title: "Higher conversion rates",
    body: "Qualifying leads before they reach your team means energy goes to prospects ready to buy.",
  },
  {
    title: "Less manual work",
    body: "FAQs, scheduling, and CRM updates run on their own. Your team focuses on selling.",
  },
  {
    title: "More qualified appointments",
    body: "Every meeting on your calendar is with a buyer who knows what they want and can afford it.",
  },
  {
    title: "Scalable growth",
    body: "Handle 10x more inquiries without hiring 10x more staff.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-line/60 bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">Why choose us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            Why real estate businesses choose NexoraAI
          </h2>
        </div>

        <div className="mt-14 grid border-t border-line/60 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`border-b border-line/60 px-0 py-7 sm:px-6 sm:py-8 ${
                i % 3 !== 0 ? "sm:border-l sm:border-line/60" : ""
              } ${i === 0 || i === 1 || i === 2 ? "" : ""}`}
            >
              <p className="font-medium text-mist">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
