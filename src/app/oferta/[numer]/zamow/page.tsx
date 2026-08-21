import type { Metadata } from 'next'
import { prisma } from '@/lib/db'
import QuoteCheckoutLoader from './QuoteCheckoutLoader'

/**
 * Wejście z przycisku „Zamów w cenach z oferty" w mailu ofertowym.
 *
 * Ofertę odczytujemy tu, na serwerze, po numerze + tokenie z linku — dzięki temu
 * ceny nie przechodzą przez adres URL i nikt nie podejrzy cudzej wyceny, znając
 * sam numer oferty. Klient dostaje gotowy koszyk z cenami z wyceny; ostateczna
 * weryfikacja kwot i tak dzieje się przy składaniu zamówienia.
 */

export const metadata: Metadata = {
  title: 'Zamówienie z oferty',
  robots: { index: false, follow: false },
}

export default async function QuoteOrderPage({
  params,
  searchParams,
}: {
  params: Promise<{ numer: string }>
  searchParams: Promise<{ t?: string }>
}) {
  const { numer } = await params
  const { t } = await searchParams

  const quote = t
    ? await prisma.quote.findUnique({
        where: { quoteNumber: decodeURIComponent(numer) },
        include: { items: { orderBy: { position: 'asc' } } },
      })
    : null

  const valid = !!quote && !!quote.orderToken && !!t && quote.orderToken === t

  if (!valid) {
    return (
      <main className="container-main py-20">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Nie znaleźliśmy tej oferty</h1>
          <p className="text-gray-600 leading-relaxed">
            Link jest nieprawidłowy albo oferta została usunięta. Napisz na{' '}
            <a href="mailto:takma@takma.com.pl" className="underline">takma@takma.com.pl</a>{' '}
            — odeślemy aktualną wycenę.
          </p>
        </div>
      </main>
    )
  }

  const expired = quote!.validUntil < new Date()

  if (expired) {
    return (
      <main className="container-main py-20">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Ta oferta wygasła</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Oferta {quote!.quoteNumber} obowiązywała do{' '}
            {quote!.validUntil.toLocaleDateString('pl-PL')}, więc nie możemy już
            zagwarantować podanych w niej cen. Odnowienie wyceny zajmuje nam zwykle
            jeden dzień roboczy.
          </p>
          <a
            href={`mailto:takma@takma.com.pl?subject=${encodeURIComponent(`Odnowienie oferty ${quote!.quoteNumber}`)}`}
            className="inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Poproś o aktualną cenę
          </a>
        </div>
      </main>
    )
  }

  const items = quote!.items.map((item) => ({
    productId: item.productId || `oferta-${item.id}`,
    productName: item.productName,
    productSlug: item.productId || '',
    partNumber: item.partNumber ?? undefined,
    quantity: item.quantity,
    priceNetto: item.priceNetto / 100,
  }))

  return <QuoteCheckoutLoader quoteNumber={quote!.quoteNumber} items={items} />
}
