import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-lg border border-dashed border-violet-soft/40 bg-panel/40 px-5 py-4">
          <p className="text-sm leading-relaxed text-mist-dim">
            <span className="font-medium text-violet-soft">
              Draft — needs legal review:
            </span>{" "}
            this is starting content, not final legal copy. Have this
            reviewed by someone qualified on UAE/Saudi data protection law
            before it goes live or you start collecting lead data against it.
          </p>
        </div>

        <h1 className="mt-10 font-display text-3xl font-semibold text-mist sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-mist-dim">Last updated: {updated}</p>

        <div className="prose-legal mt-10 space-y-8 text-mist-dim">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
