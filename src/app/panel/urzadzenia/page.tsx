import { getCustomerFromCookie } from '@/lib/customer-auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

function getWarrantyStatus(date: Date | null): {
  label: string
  color: 'green' | 'yellow' | 'red' | 'gray'
  text: string
} {
  if (!date) {
    return { label: 'Brak danych', color: 'gray', text: 'Brak danych gwarancji' }
  }

  const now = new Date()
  const diff = date.getTime() - now.getTime()
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24))

  if (daysLeft < 0) {
    return {
      label: 'Wygasla',
      color: 'red',
      text: `Wygasla ${date.toLocaleDateString('pl-PL')}`,
    }
  }

  if (daysLeft <= 90) {
    return {
      label: 'Konczy sie',
      color: 'yellow',
      text: `Do ${date.toLocaleDateString('pl-PL')} (${daysLeft} dni)`,
    }
  }

  return {
    label: 'Aktywna',
    color: 'green',
    text: `Do ${date.toLocaleDateString('pl-PL')}`,
  }
}

const dotColors = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  gray: 'bg-gray-400',
}

export default async function UrzadzeniaPage() {
  const session = await getCustomerFromCookie()
  if (!session) redirect('/panel/login')

  const devices = await prisma.device.findMany({
    where: { customerId: session.customerId },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-900">Moje urzadzenia</h1>
        <Link
          href="/panel/urzadzenia/dodaj"
          className="px-3 py-1.5 bg-primary-600 text-white rounded-md text-[13px] font-medium hover:bg-primary-700 transition-colors flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Dodaj urzadzenie
        </Link>
      </div>

      {devices.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <svg
            className="mx-auto h-8 w-8 text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Nie dodales jeszcze zadnych urzadzen
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Dodaj swoje urzadzenia, aby sledzic gwarancje i kontrakty serwisowe.
          </p>
          <Link
            href="/panel/urzadzenia/dodaj"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white rounded-md text-[13px] font-medium hover:bg-primary-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Dodaj pierwsze urzadzenie
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {devices.map((device) => {
            const warranty = getWarrantyStatus(device.warrantyEnd)
            const oneCare = getWarrantyStatus(device.oneCareEnd)

            return (
              <div
                key={device.id}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    {device.productSlug ? (
                      <Link
                        href={`/produkt/${device.productSlug}`}
                        className="text-sm font-semibold text-primary-600 hover:underline"
                      >
                        {device.productName}
                      </Link>
                    ) : (
                      <h3 className="text-sm font-semibold text-gray-900">
                        {device.productName}
                      </h3>
                    )}
                    {device.partNumber && (
                      <p className="text-sm text-gray-500 font-mono mt-0.5">
                        PN: {device.partNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Details */}
                <dl className="space-y-2 text-sm">
                  {device.serialNumber && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Numer seryjny</dt>
                      <dd className="font-mono text-gray-900">{device.serialNumber}</dd>
                    </div>
                  )}
                  {device.purchaseDate && (
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Data zakupu</dt>
                      <dd className="text-gray-900">
                        {device.purchaseDate.toLocaleDateString('pl-PL')}
                      </dd>
                    </div>
                  )}

                  {/* Gwarancja */}
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-500">Gwarancja</dt>
                    <dd className="flex items-center gap-2">
                      <span
                        className={clsx('w-2 h-2 rounded-full', dotColors[warranty.color])}
                      />
                      <span
                        className={clsx(
                          'text-sm',
                          warranty.color === 'red' && 'text-red-600',
                          warranty.color === 'yellow' && 'text-yellow-700',
                          warranty.color === 'green' && 'text-green-700',
                          warranty.color === 'gray' && 'text-gray-500'
                        )}
                      >
                        {warranty.text}
                      </span>
                    </dd>
                  </div>

                  {/* OneCare */}
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-500">OneCare</dt>
                    <dd className="flex items-center gap-2">
                      <span
                        className={clsx('w-2 h-2 rounded-full', dotColors[oneCare.color])}
                      />
                      <span
                        className={clsx(
                          'text-sm',
                          oneCare.color === 'red' && 'text-red-600',
                          oneCare.color === 'yellow' && 'text-yellow-700',
                          oneCare.color === 'green' && 'text-green-700',
                          oneCare.color === 'gray' && 'text-gray-500'
                        )}
                      >
                        {oneCare.text}
                      </span>
                    </dd>
                  </div>
                </dl>

                {/* Notes */}
                {device.notes && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-600">{device.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex gap-2">
                  <Link
                    href={`/panel/urzadzenia/${device.id}`}
                    className="px-3 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    Edytuj
                  </Link>
                  <a
                    href="https://www.serwis-zebry.pl/kontakt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Zglos serwis
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
