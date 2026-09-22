import Link from "next/link";

export function WhatWeOffer({ content }: { content: any }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 text-center mb-12">
        {content.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.cards.map((card: any, idx: number) => (
          <div key={idx} className="flex flex-col rounded-md border border-black/10 overflow-hidden bg-green-50/30">
            <div className="h-48 bg-green-100/50 flex items-center justify-center border-b border-black/5">
              <span className="text-sm font-semibold text-green-800">IMAGE / GRAPHIC</span>
            </div>
            <div className="p-6 flex-1 flex flex-col text-center">
              <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-3 text-sm text-(--color-text-muted)">{card.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href={content.cta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          {content.cta.label}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
