import { Cloud, Cpu, Database, Shield } from "lucide-react";

const IconMap: Record<string, React.ElementType> = {
  cloud: Cloud,
  cpu: Cpu,
  database: Database,
  shield: Shield,
};

export function KeyOfferings({ items }: { items: any[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const IconComponent = IconMap[item.icon];
          return (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-8 bg-orange-50/50 border border-orange-100 rounded-md shadow-sm">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                {IconComponent ? (
                  <IconComponent className="h-6 w-6 text-orange-800" />
                ) : (
                  <span className="text-xs font-semibold text-orange-800">ICON</span>
                )}
              </div>
              <h3 className="font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-(--color-text-muted)">{item.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
