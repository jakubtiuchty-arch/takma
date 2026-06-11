import { gscConfigured, gscResolveSite, gscDashboard } from '@/lib/gsc'
import { AnalyticsTabs, Card, fmt } from '../_ui'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const RANGES = [7, 28, 90]

const SA_EMAIL = process.env.GA_SA_CLIENT_EMAIL || 'service account z env GA_SA_CLIENT_EMAIL'

function pos(v: number): string {
  return v ? v.toFixed(1) : '—'
}
function ctrPct(v: number): string {
  return `${(v * 100).toFixed(1)}%`
}

function PositionDelta({ cur, prev }: { cur: number; prev: number | null }) {
  if (prev === null) return <span className="text-[11px] text-emerald-600 ml-1">nowa</span>
  const d = prev - cur // pozycja w dół liczbowo = lepiej
  if (Math.abs(d) < 0.5) return null
  return <span className={`text-[11px] ml-1 ${d > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{d > 0 ? '↑' : '↓'}{Math.abs(d).toFixed(1)}</span>
}

function NoAccess() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
      <h2 className="text-lg font-semibold mb-2">Service account nie ma dostępu do Search Console</h2>
      <p className="text-sm text-gray-600 mb-4">Dane GA4 działają, ale do frazy/pozycji z Google potrzebny jest dostęp w GSC (jednorazowo):</p>
      <ol className="text-sm text-gray-700 space-y-1.5 list-decimal list-inside mb-4">
        <li>Otwórz <a href="https://search.google.com/search-console/users" target="_blank" className="text-blue-600 underline">Search Console → Ustawienia → Użytkownicy i uprawnienia</a> (usługa takma.com.pl).</li>
        <li>Kliknij <b>Dodaj użytkownika</b> i wklej: <code className="text-xs bg-gray-100 px-1 rounded">{SA_EMAIL}</code></li>
        <li>Uprawnienie: <b>Pełny ograniczony</b> (wystarczy do odczytu) → Dodaj.</li>
      </ol>
      <p className="text-xs text-gray-400">Po dodaniu odśwież tę stronę — zadziała od razu.</p>
    </div>
  )
}

export default async function GscPage({ searchParams }: { searchParams: Promise<{ range?: string }> }) {
  const sp = await searchParams
  const rangeDays = RANGES.includes(Number(sp.range)) ? Number(sp.range) : 28

  if (!gscConfigured()) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Search Console</h1>
        <AnalyticsTabs active="gsc" />
        <p className="text-sm text-gray-600">Brak konfiguracji GA4 — patrz <Link href="/admin/analytics" className="text-blue-600 underline">przegląd</Link>.</p>
      </div>
    )
  }

  let data: Awaited<ReturnType<typeof gscDashboard>> | null = null
  let noAccess = false
  let apiDisabled = false
  let error: string | null = null
  try {
    const site = await gscResolveSite()
    if (!site) noAccess = true
    else data = await gscDashboard(site, rangeDays)
  } catch (e) {
    const msg = (e as Error).message
    if (msg.includes('SERVICE_DISABLED')) apiDisabled = true
    else if (msg.includes(' 403')) noAccess = true
    else error = msg
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Search Console</h1>
        {data && <span className="text-sm text-gray-400">{data.siteUrl.replace('sc-domain:', '')} · {data.startDate} → {data.endDate}</span>}
        <div className="ml-auto flex gap-1">
          {RANGES.map((r) => (
            <Link key={r} href={`/admin/analytics/gsc?range=${r}`} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${r === rangeDays ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {r} dni
            </Link>
          ))}
        </div>
      </div>
      <AnalyticsTabs active="gsc" />

      {apiDisabled && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
          <h2 className="text-lg font-semibold mb-2">Search Console API wyłączone w projekcie Google Cloud</h2>
          <p className="text-sm text-gray-600">
            Kliknij{' '}
            <a href="https://console.developers.google.com/apis/api/searchconsole.googleapis.com/overview?project=361053001566" target="_blank" className="text-blue-600 underline">
              ten link
            </a>{' '}
            i naciśnij <b>Włącz</b> (jeden klik, jak przy Analytics Data API). Potem odśwież stronę.
          </p>
        </div>
      )}
      {noAccess && <NoAccess />}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
          <b>Błąd GSC API:</b> {error}
        </div>
      )}

      {data && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <Card label="Kliknięcia" value={fmt(data.totals.clicks)} cur={data.totals.clicks} prev={data.prevTotals.clicks} />
            <Card label="Wyświetlenia" value={fmt(data.totals.impressions)} cur={data.totals.impressions} prev={data.prevTotals.impressions} />
            <Card label="CTR" value={ctrPct(data.totals.ctr)} cur={data.totals.ctr} prev={data.prevTotals.ctr} />
            {/* pozycja: niżej = lepiej, więc delta odwrócona (prev jako cur) */}
            <Card label="Śr. pozycja" value={pos(data.totals.position)} cur={data.prevTotals.position} prev={data.totals.position} />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Frazy (top 50 wg kliknięć, strzałka = zmiana pozycji vs poprzedni okres)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-400 text-left">
                    <th className="py-1.5 pr-2 font-medium">Fraza</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Kliknięcia</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Wyświetlenia</th>
                    <th className="py-1.5 pl-3 font-medium text-right">CTR</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Pozycja</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.queries.map((q, i) => (
                    <tr key={i}>
                      <td className="py-1.5 pr-2 text-gray-800 max-w-[340px] truncate" title={q.query}>{q.query}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-900 font-medium">{fmt(q.clicks)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-500">{fmt(q.impressions)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-500">{ctrPct(q.ctr)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700 whitespace-nowrap">
                        {pos(q.position)}<PositionDelta cur={q.position} prev={q.prevPosition} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Strony w wyszukiwarce</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-400 text-left">
                    <th className="py-1.5 pr-2 font-medium">Strona</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Kliknięcia</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Wyświetlenia</th>
                    <th className="py-1.5 pl-3 font-medium text-right">CTR</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Pozycja</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.pages.map((p, i) => (
                    <tr key={i}>
                      <td className="py-1.5 pr-2 text-gray-800 max-w-[340px] truncate" title={p.keys[0]}>{p.keys[0]?.replace(/^https?:\/\/(www\.)?takma\.com\.pl/, '') || '/'}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-900 font-medium">{fmt(p.clicks)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-500">{fmt(p.impressions)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-500">{ctrPct(p.ctr)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{pos(p.position)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
