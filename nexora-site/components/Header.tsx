import Link from "next/link";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold text-mist">
            Nexora<span className="text-violet-soft">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mist-dim transition-colors hover:text-mist"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-violet px-4 py-2 text-sm font-medium text-mist transition-colors hover:bg-violet-soft"
        >
          Book Free Demo
        </a>
      </div>
    </header>
  );
}
