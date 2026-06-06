import Link from 'next/link'
import { allegroConfigured, getConnection, ALLEGRO_ENV } from '@/lib/allegro/auth'
import { loadOfferListing } from '@/lib/allegro/offer-listing'
import { transferRibbonProducts } from '@/data/transfer-ribbon-products'
import AllegroOfferTable from '@/components/admin/AllegroOfferTable'

export const dynamic = 'force-dynamic'

export default async function AllegroOfertyPage() {
  const configured = allegroConfigured()
  const conn = configured ? await getConnection() : null
  const { priceByPN, offerByPN, eanByPN, total, withEan, published } =
    await loadOfferListing(transferRibbonProducts)

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
          Z GTIN (do wystawienia): <strong>{withEan}</strong>
        </span>
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Bez GTIN (ukryte): <strong>{total - withEan}</strong>
        </span>
        <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          Szkice na Allegro: <strong>{published}</strong>
        </span>
      </div>

      <AllegroOfferTable
        products={transferRibbonProducts}
        priceByPN={priceByPN}
        offerByPN={offerByPN}
        eanByPN={eanByPN}
        connected={!!conn?.connected}
      />
    </div>
  )
}
