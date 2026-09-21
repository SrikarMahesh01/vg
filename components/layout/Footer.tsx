export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-(--color-bg-muted)">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-5">
        <div className="col-span-2 text-lg font-bold md:col-span-1">LOGO</div>
        {['About', 'Services', 'Industries', 'Careers'].map((col) => (
          <div key={col}>
            <h4 className="mb-3 text-sm font-semibold text-zinc-900">{col}</h4>
            <ul className="space-y-2 text-sm text-(--color-text-muted)">
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-4 text-xs text-(--color-text-muted) md:flex-row">
        <span>© Virtue Software Solutions</span>
        <span>Privacy · Terms · ISO 27001 · SOC 2</span>
      </div>
    </footer>
  );
}
