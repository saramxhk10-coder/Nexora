const serviceLinks = [
  "AI Lead Capture",
  "Lead Qualification",
  "Automated Follow-Ups",
  "Appointment Booking",
  "CRM Integration",
];

const companyLinks = [
  { label: "Watch Demo", href: "#how-it-works" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-display text-lg font-semibold text-mist">
              Nexora<span className="text-violet-soft">AI</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-dim">
              AI-powered automation for UAE and Saudi real estate businesses.
              Capture leads, qualify buyers, and book appointments — 24/7.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-mist-dim transition-colors hover:text-mist"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-mist-dim transition-colors hover:text-mist"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.84v2.05h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2V23h-4v-6.86c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.8-2.65 3.63V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-medium text-mist">Services</p>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((s) => (
                <li key={s} className="text-sm text-mist-dim">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-mist">Company</p>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-sm text-mist-dim transition-colors hover:text-mist"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-mist">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-mist-dim">
              <li>muhammad.saram@nexoraia.store</li>
              <li>
                <a
                  href="https://wa.me/923002502926"
                  className="text-mist-dim transition-colors hover:text-mist"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line/60 pt-6 text-xs text-mist-dim/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NexoraAI. All rights reserved.</p>
          <p>Privacy and service terms are provided with each client agreement.</p>
        </div>
      </div>
    </footer>
  );
}
