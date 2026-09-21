import type { ChartPanelProps } from "@/lib/types/sections";

export function ChartPanel({
  chartType,
  narrativeHeading,
  narrativeBody,
  data,
}: ChartPanelProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-6 rounded border border-black/10 bg-white p-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded bg-zinc-50 p-6">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {chartType === "line" ? "Trend" : "Distribution"}
          </div>
          <div className="flex h-52 items-end gap-3">
            {data.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t bg-black"
                  style={{ height: `${Math.max(20, point.value)}%` }}
                />
                <span className="text-xs text-(--color-text-muted)">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-zinc-900">{narrativeHeading}</h3>
          <p className="mt-3 text-sm leading-7 text-(--color-text-muted)">{narrativeBody}</p>
        </div>
      </div>
    </section>
  );
}
