import type { QuoteBlockProps } from "@/lib/types/sections";

export function QuoteBlock({ quote, name, title }: QuoteBlockProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <blockquote className="rounded-2xl border border-black/10 bg-zinc-50 p-8 text-xl font-medium leading-9 text-zinc-900">
        “{quote}”
      </blockquote>
      <div className="mt-4 text-sm text-(--color-text-muted)">
        <span className="font-semibold text-zinc-900">{name}</span> · {title}
      </div>
    </section>
  );
}
