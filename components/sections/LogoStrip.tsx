import type { LogoStripProps } from "@/lib/types/sections";

export function LogoStrip({ heading, logos }: LogoStripProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {heading && <p className="mb-4 text-sm text-(--color-text-muted)">{heading}</p>}
      <div className="flex flex-wrap items-center justify-around gap-6 rounded border border-black/10 bg-slate-50 p-6">
        {logos.map((logo) => (
          <span key={logo.name} className="text-sm font-medium text-(--color-text-muted)">
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
}
