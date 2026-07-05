import { prisma } from '@/lib/db'
import { adsConfigured, resolveGclid } from '@/lib/googleAds'

interface AttrData {
  id: string
  kind: 'order' | 'lead'
  gclid: string | null
  gclidAt: Date | null
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
  landingPage: string | null
  journey: string | null
  adsCampaign: string | null
  adsAdGroup: string | null
  adsKeyword: string | null
  adsResolvedAt: Date | null
  createdAt: Date
}

/** Karta „Skąd przyszedł klient" — rozwiązuje gclid przy pierwszym wyświetleniu. */
export default async function AttributionCard({ data }: { data: AttrData }) {
  let { adsCampaign, adsAdGroup, adsKeyword } = data

  // leniwe rozwiązanie gclid → kampania/słowo (raz, wynik do bazy)
  if (data.gclid && !data.adsResolvedAt && adsConfigured()) {
    const res = await resolveGclid(data.gclid, [data.gclidAt ?? data.createdAt, data.createdAt]).catch(() => null)
    const upd = {
      adsCampaign: res?.campaign ?? null,
      adsAdGroup: res?.adGroup ?? null,
      adsKeyword: res?.keyword ?? null,
      adsResolvedAt: new Date(),
    }
    try {
      if (data.kind === 'order') await prisma.order.update({ where: { id: data.id }, data: upd })
      else await prisma.lead.update({ where: { id: data.id }, data: upd })
      adsCampaign = upd.adsCampaign; adsAdGroup = upd.adsAdGroup; adsKeyword = upd.adsKeyword
    } catch { /* pokaż co mamy */ }
  }

  const journey: string[] = (() => { try { return JSON.parse(data.journey || '[]') } catch { return [] } })()
  const hasAnything = data.gclid || data.utmSource || data.landingPage || journey.length > 0
  if (!hasAnything) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Skąd przyszedł klient</h3>
        <p className="text-sm text-gray-400">Brak danych atrybucji (wejście sprzed wdrożenia trackera albo bezpośrednie).</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Skąd przyszedł klient</h3>
      <div className="space-y-2 text-sm">
        {data.gclid ? (
          <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
            <p className="font-semibold text-amber-800">🟠 Google Ads</p>
            {adsCampaign ? (
              <p className="text-amber-900 mt-0.5">
                Kampania: <span className="font-medium">{adsCampaign}</span>
                {adsAdGroup && <> · grupa: {adsAdGroup}</>}
                {adsKeyword && <> · słowo: <span className="font-medium">„{adsKeyword}&rdquo;</span></>}
              </p>
            ) : (
              <p className="text-amber-700/70 mt-0.5 text-xs">Kliknięcie reklamy (szczegóły kampanii niedostępne — poza oknem 90 dni)</p>
            )}
          </div>
        ) : data.utmSource ? (
          <p><span className="text-gray-500">Źródło:</span> {data.utmSource}{data.utmMedium && ` / ${data.utmMedium}`}{data.utmCampaign && ` · kampania: ${data.utmCampaign}`}</p>
        ) : null}
        {data.landingPage && (
          <p><span className="text-gray-500">Wejście na:</span> <span className="font-mono text-xs">{data.landingPage}</span></p>
        )}
        {journey.length > 0 && (
          <div>
            <p className="text-gray-500 mb-1">Ścieżka wizyty ({journey.length}):</p>
            <ol className="space-y-0.5">
              {journey.map((p, i) => (
                <li key={i} className="font-mono text-xs text-gray-700">
                  <span className="text-gray-300 mr-1">{i + 1}.</span>{p}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}
