import Link from 'next/link'
import { prisma } from '@/lib/db'
import { allegroConfigured, getConnection, ALLEGRO_ENV } from '@/lib/allegro/auth'
import { allegroPriceFromShopNet } from '@/lib/allegro/pricing'
import { variantSizeLabel } from '@/lib/allegro/mapper'
import { transferRibbonProducts } from '@/data/transfer-ribbon-products'
import AllegroPublishButton from '@/components/admin/AllegroPublishButton'

export const dynamic = 'force-dynamic'

const AVAIL_LABEL: Record<string, string> = {
  available: 'Dostępny',
  'on-order': 'Na zamówienie',
  unavailable: 'Niedostępny',
}

function zl(n: number): string {
  return n.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' zł'
}

export default async function AllegroOfertyPage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null

  // Wszystkie PN taśm
  const pns: string[] = []
  for (const p of transferRibbonProducts) for (const v of p.variants || []) pns.push(v.partNumber)

  // Żywe ceny sklepu (StockCache) + już wystawione oferty — po jednym zapytaniu
  const [stockRows, offers] = await Promise.all([
    prisma.stockCache.findMany({ where: { partNumber: { in: pns } }, select: { partNumber: true, price: true } }),
    prisma.allegroOffer.findMany({ where: { environment: ALLEGRO_ENV } }),
  ])
  const priceByPN = new Map(stockRows.map((r) => [r.partNumber, r.price]))
  const offerByPN = new Map(offers.map((o) => [o.partNumber, o]))

  const totalVariants = pns.length
  const withPrice = pns.filter((pn) => priceByPN.get(pn)).length
  const published = offers.filter((o) => o.status === 'DRAFT').length

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Allegro — taśmy termotransferowe</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">
          ← Allegro
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Środowisko: {ALLEGRO_ENV}. Ofertę tworzymy jako <strong>szkic (INACTIVE)</strong> — aktywację robisz w panelu
        Allegro. Cena Allegro = cena sklepu × 1,12 (prowizja) × 1,23 (VAT).
      </p>

      {!conn?.connected && (
        <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak połączenia z Allegro.{' '}
          <Link href="/admin/allegro/konfiguracja" className="font-semibold underline">
            Połącz konto
          </Link>{' '}
          zanim wystawisz ofertę.
        </div>
      )}

      <div className="mb-5 flex flex-wrap gap-3 text-sm">
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Warianty: <strong>{totalVariants}</strong>
        </span>
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Z żywą ceną: <strong>{withPrice}</strong>
        </span>
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Szkice na Allegro: <strong>{published}</strong>
        </span>
      </div>

      <div className="space-y-6">
        {transferRibbonProducts.map((product) => (
          <div key={product.id} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="font-semibold text-gray-900">{product.name}</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="px-4 py-2 font-medium">Part Number</th>
                    <th className="px-4 py-2 font-medium">Rozmiar</th>
                    <th className="px-4 py-2 font-medium">Cena sklepu (netto)</th>
                    <th className="px-4 py-2 font-medium">Allegro (brutto)</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 font-medium text-right">Akcja</th>
                  </tr>
                </thead>
                <tbody>
                  {(product.variants || []).map((v) => {
                    const shopNet = priceByPN.get(v.partNumber)
                    const ap = shopNet ? allegroPriceFromShopNet(shopNet) : null
                    const offer = offerByPN.get(v.partNumber)
                    return (
                      <tr key={v.partNumber} className="border-b border-gray-50 last:border-0">
                        <td className="px-4 py-2 font-mono text-xs text-gray-700">{v.partNumber}</td>
                        <td className="px-4 py-2 text-gray-700">{variantSizeLabel(v)}</td>
                        <td className="px-4 py-2 text-gray-700">{shopNet ? zl(shopNet) : <span className="text-gray-400">brak</span>}</td>
                        <td className="px-4 py-2 font-medium text-gray-900">{ap ? zl(ap.gross) : <span className="text-gray-400">—</span>}</td>
                        <td className="px-4 py-2">
                          {offer?.status === 'DRAFT' ? (
                            <span className="inline-flex items-center gap-1.5 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Szkic
                            </span>
                          ) : offer?.status === 'ERROR' ? (
                            <span className="inline-flex items-center gap-1.5 text-red-600" title={offer.lastError ?? ''}>
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Błąd
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-4 py-2 text-right">
                          <AllegroPublishButton
                            partNumber={v.partNumber}
                            disabled={!conn?.connected || !ap}
                            published={offer?.status === 'DRAFT'}
                          />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
