'use client'

import { useEffect, useId, useState } from 'react'
import { activeSupplierOffer } from '@/data/supplier-offers'

export default function SupplierOfferNotice({ productSlug, initialOffer }: {
  productSlug: string
  initialOffer: ReturnType<typeof activeSupplierOffer>
}) {
  const [offer, setOffer] = useState(initialOffer)
  const [open, setOpen] = useState(false)
  const detailsId = useId()
  useEffect(() => {
    const refresh = () => setOffer(activeSupplierOffer(productSlug))
    refresh()
    const timer = setInterval(refresh, 60_000)
    return () => clearInterval(timer)
  }, [productSlug])
  if (!offer) return null
  const endLabel = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw',
  }).format(new Date(offer.endsAt))

  return (
    <aside aria-label="Promocja Newland" className="relative z-0 mx-3 -mt-10 mb-6 overflow-hidden rounded-2xl bg-[#073B70] shadow-[0_20px_40px_-18px_rgba(7,59,112,0.5)] sm:mx-5">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/30 to-transparent" />
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls={detailsId}
        className="relative flex w-full items-center justify-between gap-3 px-4 pb-4 pt-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white sm:px-6">
        <span className="rounded-full bg-[#D7EEFF] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#073B70]">Promocja · Newland</span>
        <span className="flex items-center gap-2 text-xs font-semibold text-white">
          {open ? 'Zwiń' : 'Zobacz szczegóły'}
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </button>
      {open && <div id={detailsId} className="relative space-y-3 px-4 pb-5 sm:px-6">
        <p className="text-base font-bold leading-snug text-white">MT95 Kambur Pro III w promocyjnej cenie</p>
        <p className="text-sm leading-relaxed text-blue-100">Promocja trwa do <strong className="text-white">{endLabel}</strong> lub do wyczerpania puli urządzeń.</p>
        <p className="text-sm leading-relaxed text-blue-100">Obejmuje zestaw {offer.partNumber}: terminal, baterię, zasilacz EU/UK, przewód USB-C, osłonę, pasek na rękę i folię na ekran.</p>
        <p className="border-t border-white/20 pt-3 text-sm font-medium text-white">Cena powyżej uwzględnia promocję. Dodaj terminal do koszyka, aby zamówić zestaw.</p>
      </div>}
    </aside>
  )
}
