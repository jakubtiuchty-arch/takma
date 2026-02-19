import { getCustomerFromCookie } from '@/lib/customer-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import RfqBuilder from '@/components/panel/rfq/RfqBuilder'

export default async function NoweZapytaniePage() {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Link href="/panel/oferty" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">Nowe zapytanie ofertowe</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-5">
        <RfqBuilder />
      </div>
    </div>
  )
}
