import Link from "next/link";

export function HeroSection({ content }: { content: any }) {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/VG_Logo_Video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:py-48 flex flex-col items-start text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {content.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            {content.subheading}
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <Link
              href={content.primaryCta.href}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="text-sm font-semibold leading-6 text-white px-3.5 py-2.5 border border-white/20 rounded-md hover:bg-white/10"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
