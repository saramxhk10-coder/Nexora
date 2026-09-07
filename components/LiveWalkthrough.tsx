import Image from "next/image";

const points = [
  "Responds to a new enquiry automatically",
  "Collects the lead details your agents need",
  "Adds structured information to your lead sheet",
  "Keeps the process moving without manual data entry",
];

export default function LiveWalkthrough() {
  return (
    <section id="how-it-works" className="border-b border-line/60">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="order-2 flex justify-center md:order-1 md:justify-start">
          <div className="w-[240px] sm:w-[270px]">
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/demo-qualification.jpg"
                alt="Real qualification conversation showing budget and location questions"
                width={576}
                height={1024}
                className="w-full"
              />
            </div>
            <p className="mt-4 text-center text-xs text-mist-dim">
              Same real conversation, mid-qualification
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm text-mist-dim">Live system walkthrough</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            See Nexora handle a lead, from chat to sheet
          </h2>
          <p className="mt-5 max-w-md text-mist-dim leading-relaxed">
            This is a real workflow: an incoming lead conversation gets
            handled automatically, and the details are organised for the
            sales team without anyone touching a spreadsheet by hand.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-mist">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-soft"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-md bg-violet px-6 py-3 text-sm font-medium text-mist transition-colors hover:bg-violet-soft"
          >
            Discuss this system for your business
          </a>
        </div>
      </div>
    </section>
  );
}
