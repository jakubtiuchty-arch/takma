import { allegroPriceFromShopNet } from '@/lib/allegro/pricing'
import { variantSizeLabel } from '@/lib/allegro/mapper'
import type { OfferRow } from '@/lib/allegro/offer-listing'
import type { Product } from '@/data/products'
import AllegroPublishButton from './AllegroPublishButton'

function zl(n: number): string {
  return n.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' zł'
}

interface Props {
  products: Product[]
  priceByPN: Map<string, number | null>
  offerByPN: Map<string, OfferRow>
  connected: boolean
}

/** Tabela wariantów (taśmy lub etykiety) z żywą ceną Allegro i przyciskiem „Wystaw". */
export default function AllegroOfferTable({ products, priceByPN, offerByPN, connected }: Props) {
  return (
    <div className="space-y-6">
      {products.map((product) => (
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
                      <td className="px-4 py-2 text-gray-700">
                        {shopNet ? zl(shopNet) : <span className="text-gray-400">brak</span>}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900">
                        {ap ? zl(ap.gross) : <span className="text-gray-400">—</span>}
                      </td>
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
                          disabled={!connected || !ap}
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
  )
}
