import Image from "next/image";
import Link from "next/link";

export function FeaturedIndustries({ items }: { items: any[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row bg-purple-50/40 border border-purple-100 rounded-md overflow-hidden">
            <div className="w-full sm:w-2/5 relative bg-purple-100/60 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-black/5 min-h-[160px]">
               {item.image ? (
                 <Image src={item.image} alt={item.title} fill className="object-cover" />
               ) : (
                 <span className="text-sm font-semibold text-purple-800 text-center p-8">IMAGE</span>
               )}
            </div>
            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm text-(--color-text-muted)">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
