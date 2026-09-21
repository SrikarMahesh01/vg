import type { StatBandProps } from "@/lib/types/sections";

export function StatBand({ stats }: StatBandProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded border border-black/10 p-6 text-center">
            <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
            <div className="mt-1 text-sm text-(--color-text-muted)">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
