import Link from "next/link";
import { VirtueLogo } from "@/components/common/VirtueLogo";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-(--color-bg-muted)">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-6">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block" aria-label="Virtue Software Solutions">
            <VirtueLogo height={32} />
          </Link>
        </div>
        {['About Us', 'Services', 'Industries', 'Careers', 'Contact Us'].map((col) => (
          <div key={col}>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">{col}</h4>
            <ul className="space-y-2 text-sm text-(--color-text-muted)">
              <li><Link href="#" className="hover:text-zinc-900">Link 1</Link></li>
              <li><Link href="#" className="hover:text-zinc-900">Link 2</Link></li>
              <li><Link href="#" className="hover:text-zinc-900">Link 3</Link></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-xs text-(--color-text-muted) md:flex-row">
        <span>© Virtue Software Solutions</span>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">Social Icons</span>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-6 rounded border border-black/10 bg-white" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
