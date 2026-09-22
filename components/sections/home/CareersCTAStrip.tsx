import Link from "next/link";

export function CareersCTAStrip({ content }: { content: any }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="bg-blue-50/50 border border-blue-100 rounded-md overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 lg:p-20 flex flex-col justify-center items-start">
           <h2 className="text-3xl font-bold tracking-tight text-blue-950">{content.heading}</h2>
           <p className="mt-4 text-blue-900/70 mb-8">{content.body}</p>
           <Link
             href={content.ctaHref}
             className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
           >
             {content.ctaLabel}
           </Link>
        </div>
        <div className="w-full md:w-1/2 bg-blue-200/40 flex items-center justify-center min-h-[300px] border-t md:border-t-0 md:border-l border-black/5">
           <span className="text-lg font-semibold text-blue-800">IMAGE</span>
        </div>
      </div>
    </section>
  );
}
