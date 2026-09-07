const locations = [
  "Dubai Marina",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "JBR",
  "Riyadh",
  "Jeddah",
];

export default function TrustBar() {
  return (
    <section className="border-b border-line/60 bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm text-mist-dim">
          Built for UAE &amp; Saudi real estate lead workflows
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {locations.map((loc, i) => (
            <span key={loc} className="flex items-center gap-6">
              <span className="text-sm text-mist-dim/80">{loc}</span>
              {i < locations.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-line" aria-hidden />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
