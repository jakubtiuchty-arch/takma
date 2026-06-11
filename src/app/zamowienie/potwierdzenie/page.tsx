import Link from 'next/link'
import { CheckIcon } from '@/components/ui/Icons'
import { prisma } from '@/lib/db'
import type { GA4Item } from '@/lib/ga-events'
import PurchaseTracker from './PurchaseTracker'

export const metadata = {
  title: 'Zamówienie potwierdzone — TAKMA',
  robots: { index: false },
}

export const dynamic = 'force-dynamic'

/**
 * Dane do GA4 `purchase` — zamówienie dopasowane po numerze ORAZ id sesji
 * Stripe z URL-a (nie da się podejrzeć cudzego zamówienia zgadując numer).
 */
async function getPurchaseData(
  orderNumber?: string,
  sessionId?: string
): Promise<{ orderNumber: string; items: GA4Item[]; value: number; shipping: number } | null> {
  if (!orderNumber || !sessionId) return null
  try {
    const order = await prisma.order.findFirst({
      where: { orderNumber, stripeSessionId: sessionId },
      select: {
        orderNumber: true,
        subtotalNetto: true,
        shippingNetto: true,
        items: { select: { productId: true, productName: true, quantity: true, priceNetto: true } },
      },
    })
    if (!order) return null
    return {
      orderNumber: order.orderNumber,
      items: order.items.map((i) => ({
        item_id: i.productId,
        item_name: i.productName,
        quantity: i.quantity,
        price: i.priceNetto / 100,
      })),
      // jednostki jak w checkoucie: zł netto, value = towar + dostawa
      value: (order.subtotalNetto + order.shippingNetto) / 100,
      shipping: order.shippingNetto / 100,
    }
  } catch {
    return null
  }
}

export default async function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: { order?: string; session_id?: string }
}) {
  const orderNumber = searchParams.order
  const purchase = await getPurchaseData(orderNumber, searchParams.session_id)

  return (
    <div className="container-main py-16 lg:py-24">
      {purchase && <PurchaseTracker {...purchase} />}
      <div className="max-w-lg mx-auto text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon size={40} className="text-green-600" />
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Dziękujemy za zamówienie!
        </h1>

        {orderNumber && (
          <p className="text-lg text-gray-600 mb-2">
            Numer zamówienia: <strong className="text-gray-900">{orderNumber}</strong>
          </p>
        )}

        <p className="text-gray-500 mb-8">
          Potwierdzenie zostało wysłane na Twój adres email.
          Otrzymasz powiadomienie o wysyłce z numerem przesyłki.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-2">Co dalej?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">1.</span>
              Twoje zamówienie zostało przekazane do realizacji
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">2.</span>
              Otrzymasz email z numerem przesyłki po wysyłce
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">3.</span>
              Faktura VAT zostanie wysłana na podany adres email
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary px-6 py-3">
            Strona główna
          </Link>
          <Link href="/drukarki-etykiet" className="btn-secondary px-6 py-3">
            Kontynuuj zakupy
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          W razie pytań: <a href="mailto:takma@takma.com.pl" className="text-primary-600 hover:underline">takma@takma.com.pl</a> | <a href="tel:+48607819688" className="text-primary-600 hover:underline">+48 607 819 688</a>
        </p>
      </div>
    </div>
  )
}
