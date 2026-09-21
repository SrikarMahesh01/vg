import type { PhotoGridProps } from "@/lib/types/sections";

export function PhotoGrid({ columns, people }: PhotoGridProps) {
  const colClass = {
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    6: "md:grid-cols-6",
  }[columns];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className={`grid grid-cols-1 gap-6 ${colClass}`}>
        {people.map((person) => (
          <div key={person.name} className="rounded border border-black/10 bg-white p-4">
            <div className="flex h-40 items-center justify-center rounded bg-zinc-100 text-sm text-zinc-500">
              Portrait
            </div>
            <div className="mt-4">
              <div className="font-semibold text-zinc-900">{person.name}</div>
              <div className="text-sm text-(--color-text-muted)">{person.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
