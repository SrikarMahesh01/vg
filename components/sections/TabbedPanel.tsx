import type { TabbedPanelProps } from "@/lib/types/sections";

export function TabbedPanel({ tabs }: TabbedPanelProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded border border-black/10 bg-white p-6">
        <div className="flex flex-wrap gap-3 border-b border-black/10 pb-4">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              className={
                index === 0
                  ? "rounded bg-black px-4 py-2 text-sm font-medium text-white"
                  : "rounded bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pt-6">
          <h3 className="text-xl font-semibold text-zinc-900">{tabs[0].heading}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-(--color-text-muted)">{tabs[0].body}</p>
        </div>
      </div>
    </section>
  );
}
