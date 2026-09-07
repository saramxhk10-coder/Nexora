export default function About() {
  return (
    <section className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">Who&apos;s behind this</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            Built by people who understand real estate lead flow
          </h2>

          {/* Placeholder — intentionally styled as unfinished so it can't
              accidentally ship without your real input */}
          <div className="mt-6 rounded-lg border border-dashed border-violet-soft/40 bg-panel/40 px-5 py-4">
            <p className="text-sm leading-relaxed text-mist-dim">
              <span className="font-medium text-violet-soft">
                Needs your input:
              </span>{" "}
              2–3 real lines here — who&apos;s behind NexoraAI, and why
              you&apos;re building this for UAE/Saudi real estate agencies.
              Even a short, honest founder note beats no About presence at
              all for a cold visitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
