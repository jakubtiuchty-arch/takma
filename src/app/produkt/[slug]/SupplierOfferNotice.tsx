'use client'

import { useEffect, useState } from 'react'
import { activeSupplierOffer } from '@/data/supplier-offers'

export default function SupplierOfferNotice({ productSlug, initialOffer }: {
  productSlug: string
  initialOffer: ReturnType<typeof activeSupplierOffer>
}) {
  const [offer, setOffer] = useState(initialOffer)
  useEffect(() => {
    const update = () => setOffer(activeSupplierOffer(productSlug))
    update()
    const timer = window.setInterval(update, 60_000)
    return () => window.clearInterval(timer)
  }, [productSlug])
  if (!offer) return null
  const endLabel = new Date(offer.endsAt).toLocaleDateString('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw',
  })
  return (
    <aside aria-label="Termin oferty" className="mb-5 rounded-xl border border-primary-200 bg-primary-50 px-4 py-3">
      <p className="text-sm font-semibold text-gray-900">Oferta do {endLabel}</p>
      <p className="mt-1 text-sm text-gray-600">Oferta obejmuje zestaw {offer.partNumber} i obowiązuje do wyczerpania puli. Aktualną cenę pokazujemy powyżej.</p>
    </aside>
  )
}
