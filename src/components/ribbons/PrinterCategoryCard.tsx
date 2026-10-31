import Link from 'next/link'
import { CheckIcon } from '@/components/ui/Icons'

/** Kafelek grupy drukarek; model jako string (Zebra) albo { name, href } (SATO, link do karty w sklepie). */
export default function PrinterCategoryCard({ title, models }: { title: string; models: (string | { name: string; href?: string })[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">{title}</h3>
      {models.length === 0 ? (
        <p className="text-xs text-gray-400 italic">Brak kompatybilnych modeli</p>
      ) : (
        <ul className="space-y-1.5">
          {models.map(m => {
            const name = typeof m === 'string' ? m : m.name
            const href = typeof m === 'string' ? undefined : m.href
            return (
              <li key={name} className="text-sm text-gray-700 flex items-center gap-1.5">
                <CheckIcon size={14} className="text-emerald-600 flex-shrink-0" />
                {href ? (
                  <Link href={href} className="text-primary-600 hover:underline">{name}</Link>
                ) : (
                  <span>{name}</span>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
