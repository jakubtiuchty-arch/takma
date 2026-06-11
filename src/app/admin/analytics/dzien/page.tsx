import { gaConfigured, gaDayDetail, gaToday, shiftDate } from '@/lib/ga'
import { AnalyticsTabs, Card, fmt, fmtDuration, pct } from '../_ui'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const WEEKDAYS = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']

function dayLabel(date: string): string {
  return `${WEEKDAYS[new Date(`${date}T12:00:00Z`).getUTCDay()]}, ${date.split('-').reverse().join('.')}`
}

function Hourly({ data }: { data: { hour: number; sessions: number; users: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.sessions))
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Ruch godzina po godzinie</h3>
      <div className="flex items-end gap-0.5 h-28">
        {data.map((d) => (
          <div key={d.hour} className="flex-1 flex flex-col justify-end h-full" title={`${d.hour}:00 — ${d.sessions} sesji, ${d.users} użytk.`}>
            <div className="bg-blue-500/80 rounded-t hover:bg-blue-600 transition-colors min-h-[2px]" style={{ height: `${(d.sessions / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        <span>0:00</span><span>6:00</span><span>12:00</span><span>18:00</span><span>23:00</span>
      </div>
    </div>
  )
}

export default async function AnalyticsDayPage({ searchParams }: { searchParams: Promise<{ date?: string }> }) {
  const sp = await searchParams
  const today = gaToday()
  const date = /^\d{4}-\d{2}-\d{2}$/.test(sp.date || '') && (sp.date as string) <= today ? (sp.date as string) : today

  if (!gaConfigured()) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics — dzień</h1>
        <p className="text-sm text-gray-600">Brak konfiguracji GA4 — patrz <Link href="/admin/analytics" className="text-blue-600 underline">przegląd</Link>.</p>
      </div>
    )
  }

  let data: Awaited<ReturnType<typeof gaDayDetail>> | null = null
  let error: string | null = null
  try {
    data = await gaDayDetail(date)
  } catch (e) {
    error = (e as Error).message
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Dzień po dniu</h1>
        <div className="ml-auto flex items-center gap-1.5">
          <Link href={`/admin/analytics/dzien?date=${shiftDate(date, -1)}`} className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">←</Link>
          <form action="/admin/analytics/dzien" className="contents">
            <input type="date" name="date" defaultValue={date} max={today} className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-700" />
            <button type="submit" className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">Pokaż</button>
          </form>
          {date < today ? (
            <Link href={`/admin/analytics/dzien?date=${shiftDate(date, 1)}`} className="px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">→</Link>
          ) : (
            <span className="px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-300">→</span>
          )}
        </div>
      </div>

      <AnalyticsTabs active="dzien" />

      <p className="text-sm text-gray-500 mb-4 -mt-3">
        {dayLabel(date)}{date === today && ' (dziś — dane spływają na bieżąco)'}
        {data && <span className="text-gray-400"> · porównanie: {dayLabel(data.prevDate)}</span>}
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
          <b>Błąd GA4 Data API:</b> {error}
        </div>
      )}

      {data && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <Card label="Użytkownicy" value={fmt(data.summary.activeUsers)} cur={data.summary.activeUsers} prev={data.previous.activeUsers} compareLabel="vs tydzień temu" />
            <Card label="Sesje" value={fmt(data.summary.sessions)} cur={data.summary.sessions} prev={data.previous.sessions} compareLabel="vs tydzień temu" />
            <Card label="Odsłony" value={fmt(data.summary.screenPageViews)} cur={data.summary.screenPageViews} prev={data.previous.screenPageViews} compareLabel="vs tydzień temu" />
            <Card label="Śr. czas sesji" value={fmtDuration(data.summary.averageSessionDuration)} cur={data.summary.averageSessionDuration} prev={data.previous.averageSessionDuration} compareLabel="vs tydzień temu" />
            <Card label="Nowi użytkownicy" value={fmt(data.summary.newUsers)} cur={data.summary.newUsers} prev={data.previous.newUsers} compareLabel="vs tydzień temu" />
            <Card label="Zaangażowanie" value={pct(data.summary.engagementRate)} cur={data.summary.engagementRate} prev={data.previous.engagementRate} compareLabel="vs tydzień temu" />
            <Card label="Odrzucenia" value={pct(data.summary.bounceRate)} cur={data.summary.bounceRate} prev={data.previous.bounceRate} compareLabel="vs tydzień temu" />
            <Card label="Zdarzenia" value={fmt(data.summary.eventCount)} cur={data.summary.eventCount} prev={data.previous.eventCount} compareLabel="vs tydzień temu" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2">
              <Hourly data={data.hourly} />
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Nowi vs powracający</h3>
              {data.newVsReturning.length === 0 ? (
                <p className="text-xs text-gray-400">Brak danych</p>
              ) : (
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {data.newVsReturning.map((r) => (
                      <tr key={r.label}>
                        <td className="py-1.5 text-gray-800">{r.label}</td>
                        <td className="py-1.5 text-right tabular-nums text-gray-700">{fmt(r.users)} użytk.</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-400">{fmt(r.sessions)} sesji</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Sedno: skąd przyszli, na co weszli, jak szybko wyszli */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Skąd przyszli i co zrobili</h3>
            <p className="text-xs text-gray-400 mb-3">Każdy wiersz = grupa sesji: źródło → strona wejścia → zachowanie. Odrzucenie = wyszedł bez interakcji w &lt;10 s.</p>
            {data.sourceLanding.length === 0 ? (
              <p className="text-xs text-gray-400">Brak danych</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-gray-400 text-left">
                      <th className="py-1.5 pr-2 font-medium">Źródło / medium</th>
                      <th className="py-1.5 pr-2 font-medium">Strona wejścia</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Sesje</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Strony/sesję</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Śr. czas</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Odrzucenia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.sourceLanding.map((r, i) => (
                      <tr key={i}>
                        <td className="py-1.5 pr-2 text-gray-800 whitespace-nowrap max-w-[200px] truncate" title={r.source}>{r.source}</td>
                        <td className="py-1.5 pr-2 text-gray-600 max-w-[320px] truncate" title={r.landing}>{r.landing}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{fmt(r.sessions)}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{r.pagesPerSession.toFixed(1)}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700 whitespace-nowrap">{fmtDuration(r.avgDuration)}</td>
                        <td className={`py-1.5 pl-3 text-right tabular-nums ${r.bounceRate >= 0.8 ? 'text-red-500' : r.bounceRate >= 0.5 ? 'text-amber-600' : 'text-gray-700'}`}>{pct(r.bounceRate)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Oglądane strony (śr. czas na stronie)</h3>
              {data.pages.length === 0 ? (
                <p className="text-xs text-gray-400">Brak danych</p>
              ) : (
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {data.pages.map((p, i) => (
                      <tr key={i}>
                        <td className="py-1.5 pr-2 text-gray-800 max-w-[300px] truncate" title={p.path}>{p.path}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700 whitespace-nowrap">{fmt(p.views)} odsł.</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-400 whitespace-nowrap">{fmtDuration(p.avgTime)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Zdarzenia tego dnia</h3>
              {data.events.length === 0 ? (
                <p className="text-xs text-gray-400">Brak danych</p>
              ) : (
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {data.events.map((e, i) => (
                      <tr key={i}>
                        <td className="py-1.5 pr-2 text-gray-800">{e.label}</td>
                        <td className="py-1.5 text-right tabular-nums text-gray-700">{fmt(e.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
