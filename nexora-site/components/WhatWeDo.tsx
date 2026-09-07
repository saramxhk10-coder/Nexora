const features = [
  {
    title: "AI lead capture",
    body: "Instantly capture inquiries from WhatsApp, Instagram, Facebook Ads, Google Ads, your website, and social media. Every message becomes a tracked lead.",
    detail:
      "Includes WhatsApp Business API, social integration, a website chat widget, and ad form auto-capture.",
  },
  {
    title: "AI lead qualification",
    body: "Smart conversational AI asks the right questions to identify serious buyers: budget, location, property type, and timeline.",
    detail: "Covers intent scoring, budget assessment, and timeline detection.",
  },
  {
    title: "Automated follow-ups",
    body: "No lead gets forgotten. Timely, personalised follow-up messages nurture prospects until they're ready to buy or book a viewing.",
    detail: "Scheduled, personalised, and sent across whichever channel the lead used.",
  },
  {
    title: "Appointment booking",
    body: "Qualified prospects are automatically booked into your sales team's calendar. No back-and-forth to find a time.",
    detail: "Handles rescheduling and reminders on its own.",
  },
  {
    title: "CRM updates",
    body: "All conversations, lead details, and appointment data are automatically organised in your CRM. Your team always has the full picture.",
    detail: "Includes conversation logs, lead scoring, and pipeline tracking.",
  },
  {
    title: "Compliance & security",
    body: "Built with UAE data protection standards in mind. Secure handling of client information with full audit trails.",
    detail: "Data encryption, audit trails, and alignment with UAE PDPL.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-line/60 bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-sm text-mist-dim">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-mist sm:text-4xl">
            A complete AI automation suite for UAE &amp; Saudi real estate
          </h2>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-xl font-semibold text-mist">
                {f.title}
              </h3>
              <p className="mt-3 leading-relaxed text-mist-dim">{f.body}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist-dim/70">
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
