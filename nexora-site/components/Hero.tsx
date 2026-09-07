import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/60">
      {/* single deliberate glow, not a wall-to-wall gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-violet/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-mist-dim">
            AI automation for UAE &amp; Saudi real estate teams
          </p>

          <h1 className="mt-4 font-display text-[2.75rem] font-semibold leading-[1.05] text-mist sm:text-6xl">
            Turn new enquiries into qualified conversations
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist-dim">
            NexoraAI responds to incoming leads, asks the right qualification
            questions, organises their details, and keeps follow-ups moving —
            24/7.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-violet px-6 py-3 text-sm font-medium text-mist transition-colors hover:bg-violet-soft"
            >
              Book free demo
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-mist-dim underline decoration-line underline-offset-4 transition-colors hover:text-mist"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Real conversation screenshot, presented plainly — not dressed
            up as a fake product dashboard */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-[240px] sm:w-[270px]">
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/demo-opening.jpg"
                alt="Real WhatsApp conversation opening with the NexoraAI assistant"
                width={576}
                height={1024}
                className="w-full"
                priority
              />
            </div>
            <p className="mt-4 text-center text-xs text-mist-dim">
              Real conversation, recorded from the live system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
