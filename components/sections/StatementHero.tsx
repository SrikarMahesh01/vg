import type { StatementHeroProps } from "@/lib/types/sections";

export function StatementHero({ heading, body }: StatementHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-black/10 bg-zinc-50 p-10 text-center md:p-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">{heading}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-(--color-text-muted)">{body}</p>
      </div>
    </section>
  );
}
