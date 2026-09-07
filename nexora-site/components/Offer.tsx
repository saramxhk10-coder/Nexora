const included = [
  "Instant lead response on WhatsApp",
  "Smart qualification conversations",
  "Automated follow-up sequences",
  "Direct calendar booking integration",
  "CRM sync with your existing tools",
  "Multi-language support (English & Arabic)",
  "Custom conversation flows for your properties",
  "Real-time lead notifications to your team",
];

export default function Offer() {
  return (
    <section className="border-b border-line/60 bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-sm text-mist-dim">Our initial offer</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
              WhatsApp automation for real estate businesses
            </h2>
            <p className="mt-5 text-mist-dim leading-relaxed">
              We currently specialise in one thing and do it exceptionally
              well: WhatsApp-based AI automation built specifically for UAE
              and Saudi real estate agencies, brokers, and property
              developers.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-md bg-violet px-6 py-3 text-sm font-medium text-mist transition-colors hover:bg-violet-soft"
            >
              Get started
            </a>
          </div>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="border-t border-line/60 pt-4 text-sm text-mist"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
