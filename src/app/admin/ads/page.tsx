import Link from 'next/link'
import { adsConfigured, adsOverview, adsMerchantSummary, type AdsCampaign, type MerchantSummary } from '@/lib/googleAds'
import { fmt, pct } from '../analytics/_ui'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const RANGES = [7, 30, 90]

const zl = (v: number) =>
  v.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' zł'

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1 tabular-nums">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  )
}

function CostTrend({ data }: { data: { date: string; cost: number; conversions: number }[] }) {
  const max = Math.max(1, ...data.map((d) => d.cost))
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Koszt dziennie</h3>
      <div className="flex items-end gap-0.5 h-32">
        {data.map((d, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col justify-end h-full"
            title={`${d.date}: ${zl(d.cost)}, konwersje: ${d.conversions.toFixed(1)}`}
          >
            <div
              className={`rounded-t min-h-[2px] ${d.conversions > 0 ? 'bg-emerald-500/80' : 'bg-blue-500/70'}`}
              style={{ height: `${(d.cost / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <p className="text-[11px] text-gray-400 mt-2">Zielony słupek = dzień z konwersją</p>
    </div>
  )
}

function CampaignsTable({ campaigns }: { campaigns: AdsCampaign[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 overflow-x-auto">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Kampanie</h3>
      <table className="w-full text-sm min-w-[760px]">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wide text-gray-400">
            <th className="py-1.5 pr-2 font-medium">Kampania</th>
            <th className="py-1.5 px-2 font-medium text-right">Budżet/dz.</th>
            <th className="py-1.5 px-2 font-medium text-right">Koszt</th>
            <th className="py-1.5 px-2 font-medium text-right">Klik.</th>
            <th className="py-1.5 px-2 font-medium text-right">CTR</th>
            <th className="py-1.5 px-2 font-medium text-right">Konw.</th>
            <th className="py-1.5 px-2 font-medium text-right">Koszt/konw.</th>
            <th className="py-1.5 pl-2 font-medium text-right">Utrac. IS (budżet)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {campaigns.map((c) => (
            <tr key={c.id} className={c.status === 'PAUSED' ? 'opacity-50' : ''}>
              <td className="py-2 pr-2">
                <div className="text-gray-800 truncate max-w-[260px]" title={c.name}>{c.name}</div>
                <div className="text-[11px] text-gray-400">
                  {c.channel}{c.status === 'PAUSED' ? ' · wstrzymana' : ''}
                </div>
              </td>
              <td className="py-2 px-2 text-right tabular-nums text-gray-500">{zl(c.budgetDaily)}</td>
              <td className="py-2 px-2 text-right tabular-nums font-medium">{zl(c.cost)}</td>
              <td className="py-2 px-2 text-right tabular-nums">{fmt(c.clicks)}</td>
              <td className="py-2 px-2 text-right tabular-nums">{pct(c.ctr)}</td>
              <td className="py-2 px-2 text-right tabular-nums">{c.conversions.toFixed(1)}</td>
              <td className="py-2 px-2 text-right tabular-nums">
                {c.conversions > 0 ? zl(c.costPerConversion) : <span className="text-rose-500">—</span>}
              </td>
              <td className="py-2 pl-2 text-right tabular-nums">
                {c.lostISBudget != null ? (
                  <span className={c.lostISBudget > 0.2 ? 'text-amber-600 font-medium' : 'text-gray-500'}>
                    {pct(c.lostISBudget)}
                  </span>
                ) : (
                  <span className="text-gray-300">n/d</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ConfigMissing() {
  const env = [
    'GOOGLE_ADS_DEVELOPER_TOKEN',
    'GOOGLE_ADS_CLIENT_ID',
    'GOOGLE_ADS_CLIENT_SECRET',
    'GOOGLE_ADS_REFRESH_TOKEN',
    'GOOGLE_ADS_CUSTOMER_ID',
    'GOOGLE_ADS_LOGIN_CUSTOMER_ID',
  ]
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
      <h2 className="font-semibold text-amber-900">Google Ads API nie jest jeszcze skonfigurowane</h2>
      <ol className="list-decimal pl-5 mt-3 space-y-1.5 text-sm text-amber-900">
        <li>Załóż konto menedżera (MCC) i podepnij pod nie konto TAKMA (342-193-1664).</li>
        <li>W MCC: Narzędzia → Centrum API → skopiuj developer token i złóż wniosek o Basic access.</li>
        <li>W Google Cloud (projekt od GA4): włącz Google Ads API i utwórz OAuth client (Desktop app).</li>
        <li>
          Wygeneruj refresh token:{' '}
          <code className="bg-amber-100 px-1 rounded">node scripts/google-ads-refresh-token.mjs</code>
        </li>
        <li>Uzupełnij zmienne w <code className="bg-amber-100 px-1 rounded">.env.local</code> i Vercel:</li>
      </ol>
      <ul className="mt-2 pl-5 text-xs font-mono text-amber-800 space-y-0.5">
        {env.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default async function AdsPage({ searchParams }: { searchParams: Promise<{ range?: string }> }) {
  const { range } = await searchParams
  const rangeDays = RANGES.includes(Number(range)) ? Number(range) : 30

  if (!adsConfigured()) {
    return (
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Google Ads</h1>
        <ConfigMissing />
      </div>
    )
  }

  let data
  let merchant: MerchantSummary | null = null
  try {
    data = await adsOverview(rangeDays)
    merchant = await adsMerchantSummary().catch(() => null)
  } catch (e) {
    return (
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Google Ads</h1>
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-sm text-rose-800">
          <p className="font-semibold mb-1">Błąd Google Ads API</p>
          <pre className="whitespace-pre-wrap text-xs">{(e as Error).message}</pre>
        </div>
      </div>
    )
  }

  const t = data.totals
  const cpa = t.conversions > 0 ? t.cost / t.conversions : 0
  const wastedSum = data.wastedTerms.reduce((a, w) => a + w.cost, 0)

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Google Ads</h1>
        <div className="flex gap-1">
          {RANGES.map((r) => (
            <Link
              key={r}
              href={`/admin/ads?range=${r}`}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${r === rangeDays ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {r} dni
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Koszt" value={zl(t.cost)} sub={`${fmt(t.impressions)} wyświetleń`} />
        <Stat label="Kliknięcia" value={fmt(t.clicks)} sub={t.impressions > 0 ? `CTR ${pct(t.clicks / t.impressions)}` : undefined} />
        <Stat label="Konwersje" value={t.conversions.toFixed(1)} sub={t.conversionsValue > 0 ? `wartość ${zl(t.conversionsValue)}` : undefined} />
        <Stat label="Koszt / konwersję" value={t.conversions > 0 ? zl(cpa) : '—'} />
      </div>

      <CostTrend data={data.daily} />
      <CampaignsTable campaigns={data.campaigns} />

      {merchant && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">Merchant Center — produkty (GMC)</h3>
          <p className="text-xs text-gray-400 mb-3">
            <span className="text-emerald-600 font-semibold">{fmt(merchant.eligible)}</span> aktywnych ·{' '}
            <span className="text-amber-600 font-semibold">{fmt(merchant.limited)}</span> ograniczonych ·{' '}
            <span className="text-rose-600 font-semibold">{fmt(merchant.notEligible)}</span> odrzuconych/wygasłych ·{' '}
            {fmt(merchant.total)} łącznie
          </p>
          {merchant.byType.length > 0 && (
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {merchant.byType.map((t, i) => (
                  <tr key={i}>
                    <td className="py-1.5 pr-2 text-gray-800 truncate max-w-[300px]">{t.label}</td>
                    <td className="py-1.5 pl-2 text-right tabular-nums whitespace-nowrap">
                      <span className={t.eligible > 0 ? 'text-emerald-600 font-medium' : 'text-rose-500'}>{fmt(t.eligible)}</span>
                      <span className="text-gray-400"> / {fmt(t.total)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          Hasła bez konwersji <span className="font-normal text-gray-400">(kandydaci do wykluczeń)</span>
        </h3>
        <p className="text-xs text-gray-400 mb-3">
          Łącznie {zl(wastedSum)} wydane na wyszukiwania, które nie przyniosły żadnej konwersji.
        </p>
        {data.wastedTerms.length === 0 ? (
          <p className="text-xs text-gray-400">Brak — wszystkie płatne wyszukiwania konwertują. 🎉</p>
        ) : (
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              {data.wastedTerms.map((w, i) => (
                <tr key={i}>
                  <td className="py-1.5 pr-2">
                    <div className="text-gray-800 truncate max-w-[320px]" title={w.term}>{w.term}</div>
                    <div className="text-[11px] text-gray-400 truncate max-w-[320px]">{w.campaign}</div>
                  </td>
                  <td className="py-1.5 px-2 text-right tabular-nums text-gray-500">{fmt(w.clicks)} klik.</td>
                  <td className="py-1.5 pl-2 text-right tabular-nums font-medium">{zl(w.cost)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
