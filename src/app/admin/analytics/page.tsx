import { prisma } from '@/lib/db'
import { gaConfigured, gaDashboard, type GaRow } from '@/lib/ga'
import { AnalyticsTabs, Card, fmt, fmtDuration, pct } from './_ui'
import { Md } from './_markdown'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const RANGES = [7, 28, 90]

function Table({ title, rows, fmtVal = fmt, col1 = 'value', col2 }: { title: string; rows: GaRow[]; fmtVal?: (v: number) => string; col1?: string; col2?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">{title}</h3>
      {rows.length === 0 ? (
        <p className="text-xs text-gray-400">Brak danych</p>
      ) : (
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-100">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="py-1.5 pr-2">
                  <div className="text-gray-800 truncate max-w-[280px]" title={r.label}>{r.label}</div>
                  {r.sub && <div className="text-[11px] text-gray-400 truncate max-w-[280px]">{r.sub}</div>}
                </td>
                <td className="py-1.5 text-right tabular-nums text-gray-700 whitespace-nowrap">{fmtVal(r.value)}</td>
                {col2 && <td className="py-1.5 pl-3 text-right tabular-nums text-gray-400 whitespace-nowrap">{fmtVal(r.value2 || 0)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

function Trend({ data }: { data: { date: string; users: number; sessions: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.sessions))
  // GA zwraca datę jako YYYYMMDD
  const iso = (d: string) => `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Sesje dziennie <span className="font-normal text-gray-400">(klik w słupek → szczegóły dnia)</span></h3>
      <div className="flex items-end gap-0.5 h-32">
        {data.map((d, i) => (
          <Link key={i} href={`/admin/analytics/dzien?date=${iso(d.date)}`} className="flex-1 flex flex-col justify-end h-full" title={`${iso(d.date)}: ${d.sessions} sesji, ${d.users} użytk.`}>
            <div className="bg-blue-500/80 rounded-t hover:bg-blue-600 transition-colors min-h-[2px]" style={{ height: `${(d.sessions / max) * 100}%` }} />
          </Link>
        ))}
      </div>
    </div>
  )
}

function ConfigMissing() {
  const env = ['GA_PROPERTY_ID', 'GA_SA_CLIENT_EMAIL', 'GA_SA_PRIVATE_KEY']
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
      <h2 className="text-lg font-semibold mb-2">Brak konfiguracji GA4 Data API</h2>
      <p className="text-sm text-gray-600 mb-4">
        Panel czyta dane z GA4 przez service account. Frontowy tag (NEXT_PUBLIC_GA_ID) tylko wysyła dane — do odczytu potrzeba osobnego dostępu:
      </p>
      <ol className="text-sm text-gray-700 space-y-1.5 list-decimal list-inside mb-4">
        <li>Google Cloud Console → włącz <b>Google Analytics Data API</b>.</li>
        <li>Utwórz <b>Service Account</b> → wygeneruj klucz JSON.</li>
        <li>W GA4 → Administracja → Dostęp do usługi → dodaj <b>client_email</b> service accountu jako <b>Viewer</b>.</li>
        <li>Ustaw w env Vercela: <code className="text-xs bg-gray-100 px-1 rounded">{env.join(', ')}</code> (Property ID = numeryczny ID usługi GA4).</li>
      </ol>
      <p className="text-xs text-gray-400">Po wklejeniu env panel zapali się automatycznie.</p>
    </div>
  )
}

export default async function AnalyticsPage({ searchParams }: { searchParams: Promise<{ range?: string }> }) {
  const sp = await searchParams
  const rangeDays = RANGES.includes(Number(sp.range)) ? Number(sp.range) : 28

  if (!gaConfigured()) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
        <ConfigMissing />
      </div>
    )
  }

  let data: Awaited<ReturnType<typeof gaDashboard>> | null = null
  let error: string | null = null
  try {
    data = await gaDashboard(rangeDays)
  } catch (e) {
    error = (e as Error).message
  }

  const digest = await prisma.gaDigest.findFirst({ orderBy: { date: 'desc' } })
  let digestAlerts: string[] = []
  try {
    digestAlerts = (JSON.parse(digest?.metrics || '{}') as { alerts?: string[] }).alerts || []
  } catch { /* stare wpisy bez alertów */ }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        {data && data.realtimeActiveUsers > 0 && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {data.realtimeActiveUsers} teraz na stronie
          </span>
        )}
        <div className="ml-auto flex gap-1">
          {RANGES.map((r) => (
            <Link key={r} href={`/admin/analytics?range=${r}`} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${r === rangeDays ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {r} dni
            </Link>
          ))}
        </div>
      </div>
      <AnalyticsTabs active="przeglad" />

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
          <b>Błąd GA4 Data API:</b> {error}
          <div className="text-xs text-red-500 mt-1">Najczęściej: service account nie ma dostępu Viewer do usługi, albo zły GA_PROPERTY_ID.</div>
        </div>
      )}

      {/* Twarde alerty z ostatniego digestu */}
      {digestAlerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <div className="text-sm font-semibold text-red-700 mb-1.5">⚠️ Alerty ({digest?.date})</div>
          <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
            {digestAlerts.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}

      {/* Codzienna analiza AI */}
      {digest && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Analiza dnia ({digest.date})</h2>
          </div>
          <Md text={digest.summary} />
        </div>
      )}

      {data && (
        <>
          {/* Karty */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <Card label="Użytkownicy" value={fmt(data.current.activeUsers)} cur={data.current.activeUsers} prev={data.previous.activeUsers} />
            <Card label="Nowi użytkownicy" value={fmt(data.current.newUsers)} cur={data.current.newUsers} prev={data.previous.newUsers} />
            <Card label="Sesje" value={fmt(data.current.sessions)} cur={data.current.sessions} prev={data.previous.sessions} />
            <Card label="Odsłony" value={fmt(data.current.screenPageViews)} cur={data.current.screenPageViews} prev={data.previous.screenPageViews} />
            <Card label="Zaangażowanie" value={pct(data.current.engagementRate)} cur={data.current.engagementRate} prev={data.previous.engagementRate} />
            <Card label="Śr. czas sesji" value={fmtDuration(data.current.averageSessionDuration)} cur={data.current.averageSessionDuration} prev={data.previous.averageSessionDuration} />
            <Card label="Zdarzenia" value={fmt(data.current.eventCount)} cur={data.current.eventCount} prev={data.previous.eventCount} />
            <Card label="Przychód (GA)" value={`${fmt(Math.round(data.current.totalRevenue))} zł`} cur={data.current.totalRevenue} prev={data.previous.totalRevenue} />
          </div>

          <div className="mb-6">
            <Trend data={data.timeseries} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Table title="Najczęściej odwiedzane strony" rows={data.topPages} />
            <Table title="Kanały (sesje / użytkownicy)" rows={data.channels} col2="users" />
            <Table title="Źródła ruchu" rows={data.sources} />
            <Table title="Strony wejścia (landing)" rows={data.landingPages} />
            <Table title="Kraje" rows={data.countries} />
            <Table title="Urządzenia" rows={data.devices} />
            <Table title="Zdarzenia" rows={data.events} />
          </div>
        </>
      )}
    </div>
  )
}
