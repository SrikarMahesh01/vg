import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mx-auto max-w-7xl px-6 pt-4 text-sm text-(--color-text-muted)">
      {items.map((item, i) => (
        <span key={`${item.label}-${item.href ?? "current"}`}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="font-medium text-black">{item.label}</span>
          )}
          {i < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
