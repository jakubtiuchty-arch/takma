import Link from 'next/link'

const TABS = [
  { key: 'przeglad', href: '/admin/analytics', label: 'Przegląd' },
  { key: 'konwersje', href: '/admin/analytics/konwersje', label: 'Konwersje' },
  { key: 'dzien', href: '/admin/analytics/dzien', label: 'Dzień po dniu' },
  { key: 'gsc', href: '/admin/analytics/gsc', label: 'Search Console' },
] as const

export type AnalyticsTab = (typeof TABS)[number]['key']

export function AnalyticsTabs({ active }: { active: AnalyticsTab }) {
  return (
    <div className="flex gap-1 mb-6 flex-wrap border-b border-gray-200 pb-3">
      {TABS.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium ${t.key === active ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  )
}

export function fmt(v: number): string {
  return v.toLocaleString('pl-PL')
}

export function fmtDuration(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.round(s % 60)
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`
}

export function pct(v: number): string {
  return `${(v * 100).toFixed(1)}%`
}

export function delta(cur: number, prev: number): { txt: string; up: boolean | null } {
  if (!prev) return { txt: cur ? '—' : '0%', up: null }
  const d = (cur - prev) / prev
  return { txt: `${d > 0 ? '+' : ''}${(d * 100).toFixed(0)}%`, up: d === 0 ? null : d > 0 }
}

export function Card({ label, value, cur, prev, compareLabel = 'vs poprzedni okres' }: { label: string; value: string; cur: number; prev: number; compareLabel?: string }) {
  const d = delta(cur, prev)
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-gray-900 tabular-nums">{value}</div>
      <div className={`mt-0.5 text-xs ${d.up === null ? 'text-gray-400' : d.up ? 'text-emerald-600' : 'text-red-500'}`}>
        {d.txt} <span className="text-gray-400">{compareLabel}</span>
      </div>
    </div>
  )
}
