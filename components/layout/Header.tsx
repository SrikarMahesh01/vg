import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "/about/our-story" },
  { label: "Services", href: "/services/cloud-services" },
  { label: "Industries", href: "/industries/banking-finance" },
  { label: "Insights", href: "/insights/blog" },
  { label: "Careers", href: "/careers/why-work-with-us" },
  { label: "Trust & Security", href: "/trust-security/data-privacy" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-(--color-bg) backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          LOGO
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 transition hover:text-(--color-primary)"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded border border-black/10 px-4 py-2 text-sm font-medium text-zinc-800">
            Client Login
          </button>
          <Link
            href="/contact/sales-inquiries"
            className="rounded bg-black px-4 py-2 text-sm font-semibold text-white"
          >
            Talk to an Architect
          </Link>
        </div>
      </div>
    </header>
  );
}
