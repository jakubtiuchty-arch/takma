import QuoteBuilder from '@/components/admin/quote/QuoteBuilder'
import Link from 'next/link'

export default function NewQuotePage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/oferty" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Nowa oferta</h1>
      </div>

      <QuoteBuilder />
    </div>
  )
}
