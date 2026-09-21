import Link from "next/link";

interface SubNavTabsProps {
  items: { label: string; href: string; active?: boolean }[];
}

export function SubNavTabs({ items }: SubNavTabsProps) {
  return (
    <div className="mx-auto max-w-7xl border-b border-black/10 px-6">
      <nav className="flex gap-6 py-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.active
                ? "border-b-2 border-black pb-2 text-sm font-semibold text-black"
                : "pb-2 text-sm text-(--color-text-muted)"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
