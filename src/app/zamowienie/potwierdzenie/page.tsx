import Link from 'next/link'
import { CheckIcon } from '@/components/ui/Icons'

export const metadata = {
  title: 'Zamówienie potwierdzone — TAKMA',
  robots: { index: false },
}

export default function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: { order?: string; session_id?: string }
}) {
  const orderNumber = searchParams.order

  return (
    <div className="container-main py-16 lg:py-24">
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
          W razie pytań: <a href="mailto:kontakt@takma.com.pl" className="text-primary-600 hover:underline">kontakt@takma.com.pl</a> | <a href="tel:+48607819688" className="text-primary-600 hover:underline">+48 607 819 688</a>
        </p>
      </div>
    </div>
  )
}
