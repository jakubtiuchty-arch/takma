import { WA_SITES, waConfigured, siteStats, type SiteStats } from '@/lib/vercelWa'
import LiveBadge from './LiveBadge'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const fmt = (v: number) => v.toLocaleString('pl-PL')

function Spark({ trend }: { trend: SiteStats['trend'] }) {
  const max = Math.max(1, ...trend.map((d) => d.visitors))
  return (
    <div className="flex items-end gap-[3px] h-14">
      {trend.map((d, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col justify-end h-full"
          title={`${d.date}: ${d.visitors} odwiedzających, ${d.pageviews} odsłon`}
        >
          <div
            className={`rounded-t min-h-[2px] ${i === trend.length - 1 ? 'bg-blue-600' : 'bg-blue-400/70'}`}
            style={{ height: `${(d.visitors / max) * 100}%` }}
          />
        </div>
      ))}
    </div>
  )
}

function MiniList({ title, rows }: { title: string; rows: { label: string; visitors: number }[] }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-gray-400 font-medium mb-1">{title}</p>
      {rows.length === 0 ? (
        <p className="text-xs text-gray-400">brak danych</p>
      ) : (
        <ul className="space-y-0.5">
          {rows.slice(0, 5).map((r, i) => (
            <li key={i} className="flex justify-between gap-2 text-xs">
              <span className="text-gray-700 truncate" title={r.label}>{r.label}</span>
              <span className="tabular-nums text-gray-500 shrink-0">{fmt(r.visitors)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SiteCard({ s }: { s: SiteStats }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="font-bold text-gray-900">{s.site.name}</h2>
          <a
            href={`https://${s.site.domain}`}
            target="_blank"
            rel="noopener"
            className="text-xs text-blue-600 hover:underline"
          >
            {s.site.domain}
          </a>
        </div>
        <LiveBadge siteId={s.site.id} initial={s.lastHourVisitors} />
      </div>

      {s.error ? (
        <p className="text-xs text-rose-600">Błąd: {s.error.slice(0, 160)}</p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-400 font-medium">Dziś</p>
              <p className="text-xl font-bold text-gray-900 tabular-nums">{fmt(s.today.visitors)}</p>
              <p className="text-[11px] text-gray-400">{fmt(s.today.pageviews)} odsłon</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-400 font-medium">30 dni</p>
              <p className="text-xl font-bold text-gray-900 tabular-nums">{fmt(s.totals30d.visitors)}</p>
              <p className="text-[11px] text-gray-400">{fmt(s.totals30d.pageviews)} odsłon</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wide text-gray-400 font-medium mb-1">Odwiedzający — 14 dni</p>
            <Spark trend={s.trend} />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1 border-t border-gray-100">
            <MiniList title="Top strony (14 dni)" rows={s.topPages} />
            <MiniList title="Źródła (14 dni)" rows={s.topReferrers} />
          </div>
        </>
      )}
    </div>
  )
}

function ConfigMissing() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900">
      <p className="font-semibold mb-1">Brak konfiguracji Vercel API</p>
      <p>
        Uzupełnij <code className="bg-amber-100 px-1 rounded">VERCEL_API_TOKEN</code> i{' '}
        <code className="bg-amber-100 px-1 rounded">VERCEL_TEAM_ID</code> w env.
      </p>
    </div>
  )
}

export default async function StronyPage() {
  if (!waConfigured()) {
    return (
      <div className="max-w-6xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Strony WWW</h1>
        <ConfigMissing />
      </div>
    )
  }

  const stats = await Promise.all(WA_SITES.map(siteStats))
  const sumToday = stats.reduce((a, s) => a + s.today.visitors, 0)
  const sum30 = stats.reduce((a, s) => a + s.totals30d.visitors, 0)
  const sumLive = stats.reduce((a, s) => a + s.lastHourVisitors, 0)

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Strony WWW</h1>
        <p className="text-sm text-gray-500">
          Razem: <span className="font-semibold text-emerald-600">{fmt(sumLive)} na żywo</span> ·{' '}
          <span className="font-semibold text-gray-800">{fmt(sumToday)}</span> dziś ·{' '}
          <span className="font-semibold text-gray-800">{fmt(sum30)}</span> / 30 dni
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {stats.map((s) => (
          <SiteCard key={s.site.id} s={s} />
        ))}
      </div>

      <p className="text-xs text-gray-400">
        Źródło: Vercel Web Analytics. „Na żywo&rdquo; = odwiedzający w bieżącej i poprzedniej godzinie (najdrobniejsza
        granulacja API), odświeżane co 60 s.
      </p>
    </div>
  )
}
