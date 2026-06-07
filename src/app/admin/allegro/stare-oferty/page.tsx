import Link from 'next/link'
import { allegroConfigured, getConnection } from '@/lib/allegro/auth'
import { listOldMaterialOffers } from '@/lib/allegro/existing-offers'
import AllegroEndOfferButton from '@/components/admin/AllegroEndOfferButton'
import AllegroEndAllButton from '@/components/admin/AllegroEndAllButton'

export const dynamic = 'force-dynamic'

export default async function AllegroStareOfertyPage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null
  const offers = conn?.connected ? await listOldMaterialOffers() : []

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Allegro — stare oferty materiałów</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">
          ← Allegro
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Oferty taśm/etykiet na koncie, które <strong>nie pochodzą z tej integracji</strong> (stare, generyczne).
        Zastępujemy je nowymi — wygaś starą po wystawieniu i aktywacji nowej, żeby nie było luki ani duplikatu.
      </p>

      {!conn?.connected ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Brak połączenia z Allegro.{' '}
          <Link href="/admin/allegro/konfiguracja" className="font-semibold underline">
            Połącz konto
          </Link>
          .
        </div>
      ) : offers.length === 0 ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Brak starych ofert materiałów do wygaszenia.
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-sm text-gray-600">
              Znaleziono <strong>{offers.length}</strong> starych ofert materiałów.
            </span>
            <AllegroEndAllButton count={offers.length} />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="px-4 py-2 font-medium">Oferta</th>
                  <th className="px-4 py-2 font-medium">Cena</th>
                  <th className="px-4 py-2 font-medium">Stan</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 font-medium text-right">Akcja</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((o) => (
                  <tr key={o.id} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-2 text-gray-800">{o.name}</td>
                    <td className="px-4 py-2 text-gray-600">{o.price ? `${o.price} zł` : '—'}</td>
                    <td className="px-4 py-2 text-gray-600">{o.stock ?? '—'}</td>
                    <td className="px-4 py-2 text-gray-600">{o.status}</td>
                    <td className="px-4 py-2 text-right">
                      <AllegroEndOfferButton offerId={o.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
