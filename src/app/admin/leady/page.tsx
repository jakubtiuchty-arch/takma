import { prisma } from '@/lib/db'
import { adsConfigured, resolveGclid } from '@/lib/googleAds'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const fmtDate = (d: Date) =>
  d.toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })

export default async function LeadyPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' }, take: 100 })

  // leniwe rozwiązanie gclid dla max 5 najnowszych nierozwiązanych (nie blokować renderu)
  if (adsConfigured()) {
    const todo = leads.filter((l) => l.gclid && !l.adsResolvedAt).slice(0, 5)
    for (const l of todo) {
      const res = await resolveGclid(l.gclid!, [l.gclidAt ?? l.createdAt, l.createdAt]).catch(() => null)
      const upd = {
        adsCampaign: res?.campaign ?? null,
        adsAdGroup: res?.adGroup ?? null,
        adsKeyword: res?.keyword ?? null,
        adsResolvedAt: new Date(),
      }
      try {
        await prisma.lead.update({ where: { id: l.id }, data: upd })
        Object.assign(l, upd)
      } catch { /* następnym razem */ }
    }
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Leady z formularzy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Kontakt + zapytania o produkt, z drogą od kliknięcia (Ads/organic) i ścieżką wizyty.
      </p>

      {leads.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-400">
          Jeszcze pusto — leady zapisują się od wdrożenia trackera (lipiec 2026).
        </div>
      ) : (
        <div className="space-y-3">
          {leads.map((l) => {
            const journey: string[] = (() => { try { return JSON.parse(l.journey || '[]') } catch { return [] } })()
            return (
              <details key={l.id} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer list-none p-4 flex items-center justify-between gap-3 flex-wrap">
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900">
                      {l.name || '(bez nazwiska)'}
                      <span className="ml-2 text-xs font-normal text-gray-400">{l.email}{l.phone && ` · ${l.phone}`}</span>
                    </p>
                    <p className="text-sm text-gray-500 truncate max-w-[420px]">{l.subject}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {l.gclid ? (
                      <span className="rounded-full bg-amber-100 text-amber-700 px-2.5 py-1 text-xs font-medium" title={l.adsKeyword ? `słowo: ${l.adsKeyword}` : ''}>
                        🟠 Ads{l.adsCampaign ? `: ${l.adsCampaign.slice(0, 24)}` : ''}{l.adsKeyword ? ` · „${l.adsKeyword}"` : ''}
                      </span>
                    ) : l.utmSource ? (
                      <span className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 text-xs font-medium">{l.utmSource}/{l.utmMedium || '—'}</span>
                    ) : (
                      <span className="rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-1 text-xs font-medium">organic / direct</span>
                    )}
                    <span className="text-xs text-gray-400 tabular-nums">{fmtDate(l.createdAt)}</span>
                  </div>
                </summary>
                <div className="px-4 pb-4 border-t border-gray-100 pt-3 text-sm space-y-2">
                  {l.message && <p className="text-gray-700 whitespace-pre-wrap">{l.message}</p>}
                  {l.landingPage && <p className="text-gray-500">Wejście na: <span className="font-mono text-xs">{l.landingPage}</span></p>}
                  {journey.length > 0 && (
                    <p className="text-gray-500">
                      Ścieżka: <span className="font-mono text-xs">{journey.join(' → ')}</span>
                    </p>
                  )}
                </div>
              </details>
            )
          })}
        </div>
      )}
    </div>
  )
}
