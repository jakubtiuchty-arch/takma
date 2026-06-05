import Link from 'next/link'
import { allegroConfigured, getConnection, ALLEGRO_ENV } from '@/lib/allegro/auth'
import { loadOfferListing } from '@/lib/allegro/offer-listing'
import { labelProducts } from '@/lib/allegro/publisher'
import AllegroOfferTable from '@/components/admin/AllegroOfferTable'

export const dynamic = 'force-dynamic'

export default async function AllegroEtykietyPage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null
  const { priceByPN, offerByPN, total, withPrice, published } = await loadOfferListing(labelProducts)

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between gap-4 mb-1">
        <h1 className="text-2xl font-bold text-gray-900">Allegro — etykiety (termiczne i TT)</h1>
        <Link href="/admin/allegro" className="text-sm text-blue-600 hover:underline">
          ← Allegro
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Środowisko: {ALLEGRO_ENV}. Kategoria 17255 „Etykiety, naklejki" (jak taśmy — bez liczby etykiet na rolce).
        Szkic (INACTIVE), aktywacja w panelu. Cena Allegro = cena sklepu × 1,12 × 1,23 (VAT).
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
          Warianty: <strong>{total}</strong>
        </span>
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Z żywą ceną: <strong>{withPrice}</strong>
        </span>
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Szkice na Allegro: <strong>{published}</strong>
        </span>
      </div>

      <AllegroOfferTable
        products={labelProducts}
        priceByPN={priceByPN}
        offerByPN={offerByPN}
        connected={!!conn?.connected}
      />
    </div>
  )
}
