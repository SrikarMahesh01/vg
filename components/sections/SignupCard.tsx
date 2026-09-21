import type { SignupCardProps } from "@/lib/types/sections";

export function SignupCard({ heading, body, submitLabel }: SignupCardProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-2xl border border-black/10 bg-zinc-50 p-8">
        <h3 className="text-2xl font-bold text-zinc-900">{heading}</h3>
        <p className="mt-3 text-sm leading-7 text-(--color-text-muted)">{body}</p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded border border-black/10 bg-white px-4 py-3 text-sm outline-none"
          />
          <button type="submit" className="rounded bg-black px-5 py-3 text-sm font-semibold text-white">
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
