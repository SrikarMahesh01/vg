import type { DataTableProps } from "@/lib/types/sections";

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="overflow-hidden rounded border border-black/10">
        <table className="min-w-full divide-y divide-black/10 text-left">
          <thead className="bg-zinc-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 text-sm font-semibold text-zinc-900">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white">
            {rows.map((row, index) => (
              <tr key={`${row.join("-")}-${index}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="px-4 py-3 text-sm text-zinc-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
