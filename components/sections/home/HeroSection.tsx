import Link from "next/link";

export function HeroSection({ content }: { content: any }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 md:text-6xl">
            {content.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-(--color-text-muted)">
            {content.subheading}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={content.primaryCta.href}
              className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="text-sm font-semibold leading-6 text-zinc-900 px-3.5 py-2.5 border border-black/10 rounded-md hover:bg-zinc-50"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="w-full h-64 md:h-[400px] bg-green-100/50 rounded-lg border border-black/5 flex items-center justify-center relative overflow-hidden">
          {/* Placeholder for the large geometric graphic */}
          <div className="absolute bottom-0 w-full h-1/2 bg-green-200/50 clip-triangle" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}></div>
          <span className="font-semibold text-green-800 z-10">BACKGROUND IMAGE / GRAPHIC</span>
        </div>
      </div>
    </section>
  );
}
