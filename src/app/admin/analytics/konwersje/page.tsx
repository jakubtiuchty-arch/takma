import { gaConfigured, gaConversions } from '@/lib/ga'
import { AnalyticsTabs, Card, fmt, fmtDuration, pct } from '../_ui'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const RANGES = [7, 28, 90]

const LEAD_LABEL: Record<string, string> = {
  klik_tel: 'Telefony',
  klik_mail: 'E-maile',
  wyslanie_formularza: 'Formularze',
  generate_lead: 'Inne leady',
}
const FUNNEL_LABEL: Record<string, string> = {
  view_item: 'Obejrzeli produkt',
  add_to_cart: 'Do koszyka',
  begin_checkout: 'Checkout',
  purchase: 'Zakup',
}

function cr(leads: number, sessions: number): string {
  return sessions ? `${((leads / sessions) * 100).toFixed(1)}%` : '—'
}

function Funnel({ steps }: { steps: { name: string; count: number }[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">Lejek sklepu</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {steps.map((s, i) => {
          const prev = i > 0 ? steps[i - 1].count : 0
          const rate = i > 0 && prev > 0 ? `${((s.count / prev) * 100).toFixed(0)}% z poprzedniego` : null
          return (
            <div key={s.name} className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-center">
              <div className="text-xs text-gray-500">{FUNNEL_LABEL[s.name] || s.name}</div>
              <div className="mt-1 text-xl font-bold text-gray-900 tabular-nums">{fmt(s.count)}</div>
              {rate && <div className="text-[11px] text-gray-400 mt-0.5">{rate}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default async function ConversionsPage({ searchParams }: { searchParams: Promise<{ range?: string }> }) {
  const sp = await searchParams
  const rangeDays = RANGES.includes(Number(sp.range)) ? Number(sp.range) : 28

  if (!gaConfigured()) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Konwersje</h1>
        <AnalyticsTabs active="konwersje" />
        <p className="text-sm text-gray-600">Brak konfiguracji GA4 — patrz <Link href="/admin/analytics" className="text-blue-600 underline">przegląd</Link>.</p>
      </div>
    )
  }

  let data: Awaited<ReturnType<typeof gaConversions>> | null = null
  let error: string | null = null
  try {
    data = await gaConversions(rangeDays)
  } catch (e) {
    error = (e as Error).message
  }

  const notSetShare = data && data.totalSessions ? data.notSetSessions / data.totalSessions : 0

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Konwersje</h1>
        <div className="ml-auto flex gap-1">
          {RANGES.map((r) => (
            <Link key={r} href={`/admin/analytics/konwersje?range=${r}`} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${r === rangeDays ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {r} dni
            </Link>
          ))}
        </div>
      </div>
      <AnalyticsTabs active="konwersje" />

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
          <b>Błąd GA4 Data API:</b> {error}
        </div>
      )}

      {data && (
        <>
          {/* Zdrowie tagowania */}
          {notSetShare > 0.15 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mb-6">
              <b>{pct(notSetShare)} sesji bez strony wejścia „(not set)&rdquo;</b> ({fmt(data.notSetSessions)} z {fmt(data.totalSessions)}) — tag GA nie zdążył się załadować albo blokuje go consent. Przy ruchu z płatnych kampanii to przepalone kliknięcia.
            </div>
          )}

          {/* Karty leadów */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            <Card label="Leady razem" value={fmt(data.leadsTotal)} cur={data.leadsTotal} prev={data.leadsPrevTotal} />
            {data.leadEvents.map((e) => (
              <Card key={e.name} label={LEAD_LABEL[e.name] || e.name} value={fmt(e.count)} cur={e.count} prev={e.prevCount} />
            ))}
          </div>

          <div className="mb-6">
            <Funnel steps={data.funnel} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Leady wg źródła */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Leady wg źródła ruchu</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-400 text-left">
                    <th className="py-1.5 pr-2 font-medium">Źródło</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Sesje</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Leady</th>
                    <th className="py-1.5 pl-3 font-medium text-right">CR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.leadsBySource.map((r, i) => (
                    <tr key={i}>
                      <td className="py-1.5 pr-2 text-gray-800 max-w-[220px] truncate" title={r.source}>{r.source}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{fmt(r.sessions)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums font-medium text-gray-900">{fmt(r.leads)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-500">{cr(r.leads, r.sessions)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Leady wg strony */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Z których stron padają leady</h3>
              {data.leadsByPage.length === 0 ? (
                <p className="text-xs text-gray-400">Brak leadów w tym okresie</p>
              ) : (
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {data.leadsByPage.map((r, i) => (
                      <tr key={i}>
                        <td className="py-1.5 pr-2 text-gray-800 max-w-[320px] truncate" title={r.page}>{r.page}</td>
                        <td className="py-1.5 text-right tabular-nums font-medium text-gray-900">{fmt(r.leads)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Kampanie */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Kampanie</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-400 text-left">
                    <th className="py-1.5 pr-2 font-medium">Kampania</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Sesje</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Leady</th>
                    <th className="py-1.5 pl-3 font-medium text-right">CR</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Śr. czas</th>
                    <th className="py-1.5 pl-3 font-medium text-right">Odrzucenia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.campaigns.map((r, i) => (
                    <tr key={i}>
                      <td className="py-1.5 pr-2 text-gray-800 max-w-[280px] truncate" title={r.campaign}>{r.campaign}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{fmt(r.sessions)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums font-medium text-gray-900">{fmt(r.leads)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-500">{cr(r.leads, r.sessions)}</td>
                      <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700 whitespace-nowrap">{fmtDuration(r.avgDuration)}</td>
                      <td className={`py-1.5 pl-3 text-right tabular-nums ${r.bounceRate >= 0.8 ? 'text-red-500' : r.bounceRate >= 0.5 ? 'text-amber-600' : 'text-gray-700'}`}>{pct(r.bounceRate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Produkty */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Produkty: od oglądania do zakupu</h3>
            {data.products.length === 0 ? (
              <p className="text-xs text-gray-400">Brak danych o produktach (zdarzenie view_item)</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-gray-400 text-left">
                      <th className="py-1.5 pr-2 font-medium">Produkt</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Obejrzeń</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Do koszyka</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Kupione</th>
                      <th className="py-1.5 pl-3 font-medium text-right">Przychód</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.products.map((p, i) => (
                      <tr key={i}>
                        <td className="py-1.5 pr-2 text-gray-800 max-w-[320px] truncate" title={p.name}>{p.name}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{fmt(p.viewed)}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700">{fmt(p.addedToCart)}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums font-medium text-gray-900">{fmt(p.purchased)}</td>
                        <td className="py-1.5 pl-3 text-right tabular-nums text-gray-700 whitespace-nowrap">{fmt(Math.round(p.revenue))} zł</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
