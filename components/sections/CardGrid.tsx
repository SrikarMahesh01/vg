import type { CardGridProps } from "@/lib/types/sections";

export function CardGrid({ columns, cards }: CardGridProps) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className={`grid grid-cols-1 gap-6 ${colClass}`}>
        {cards.map((card) => (
          <div key={card.title} className="rounded border border-black/10 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-zinc-900">{card.title}</h4>
            <p className="mt-2 text-sm leading-6 text-(--color-text-muted)">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
