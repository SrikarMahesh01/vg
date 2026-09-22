export function ImpactSection({ content }: { content: any }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="bg-indigo-50/40 border border-indigo-100 rounded-md overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 p-10 lg:p-16 lg:pr-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-900">{content.heading}</h2>
          <p className="mt-4 text-indigo-700/80">{content.body}</p>
        </div>
        <div className="w-full lg:w-3/5 bg-white/50 p-10 lg:p-16 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
           {content.items.map((item: any, idx: number) => (
             <div key={idx} className="flex flex-col items-center text-center">
                <div className="h-10 w-10 mb-3 flex items-center justify-center text-indigo-600">
                  <span className="text-[10px] font-bold">ICON</span>
                </div>
                <span className="text-sm font-medium text-zinc-800">{item.text}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
