'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon, PlusIcon } from '@/components/ui/Icons'
import { useCartStore } from '@/store/cartStore'
import { trackAddToCart } from '@/lib/ga-events'
import { useStockData } from './StockInfo'
import type { RequiredAccessoryItem } from './RequiredAccessories'

export default function RequiredAccessoryList({ items, idPrefix = 'required-stock' }: { items: RequiredAccessoryItem[]; idPrefix?: string }) {
  const { addItem, closeDrawer, openDrawer, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const partNumbers = useMemo(() => items.flatMap(item => item.pn ? [item.pn] : []), [items])
  const { stockData, loading } = useStockData(partNumbers)

  useEffect(() => setMounted(true), [])

  return (
    <>
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
      <ul className="m-0 list-none divide-y divide-gray-100 p-0">
        {items.map(item => {
          const stock = item.pn && item.slug ? stockData.get(item.pn) : undefined
          const quantity = stock ? stock.stockPL + stock.stockDE : 0
          const live = !!stock && (stock.found || quantity > 0)
          const available = live ? quantity > 0 : item.availability === 'available'
          const price = live && stock.price && stock.price > 0 ? stock.price : item.price
          const inCart = mounted && isInCart(item.id)
          const ready = mounted && !loading
          const canAdd = ready && !!item.slug && available && !!price && price > 0
          const stockId = `${idPrefix}-${item.id}${item.condition ? `-${encodeURIComponent(item.condition)}` : ''}`

          function addAccessory() {
            if (inCart) {
              openDrawer()
              return
            }
            if (!canAdd) return
            addItem({
              id: item.id,
              name: item.name,
              slug: item.slug,
              image: item.image,
              partNumber: item.pn,
              priceNetto: price,
              categoryId: item.categoryId,
            })
            // Pozostaw box otwarty, aby klient mógł dodać kolejne wymagane elementy.
            closeDrawer()
            trackAddToCart({ item_id: item.id, item_name: item.name, item_category: item.categoryId, price, quantity: 1 })
            setAnnouncement(`Dodano do koszyka: ${item.name}.`)
          }

          return (
            <li key={`${item.id}-${item.condition ?? 'common'}`} className="m-0 grid list-none grid-cols-[56px_minmax(0,1fr)] items-center gap-3 px-4 py-4 sm:grid-cols-[56px_minmax(0,1fr)_auto] sm:px-5">
              {item.slug ? <Link href={`/produkt/${item.slug}`} aria-label={`Zobacz produkt: ${item.name}`} className="self-start rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600">
                {item.image && <Image src={item.image} alt="" width={56} height={56} sizes="56px" className="h-14 w-14 object-contain" />}
              </Link> : <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 text-2xl text-gray-400">!</span>}
              <div className="min-w-0">
                {item.condition && <p className="mb-1 text-xs font-semibold text-amber-900">{item.condition}</p>}
                {item.slug ? <Link href={`/produkt/${item.slug}`} className="text-sm font-semibold leading-5 text-gray-900 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600">{item.name}</Link> : <p className="text-sm font-semibold leading-5 text-gray-900">{item.name}</p>}
                {item.pn && <p className="mt-1 break-all font-mono text-xs text-gray-500">{item.pn}</p>}
                <p id={stockId} className="mt-1 text-xs" aria-busy={!ready}>
                  {!ready ? <span className="text-gray-500">Sprawdzanie dostępności…</span> : (
                    <>
                      <span className={available ? 'font-medium text-green-700' : 'font-medium text-red-700'}>{available ? 'Dostępny' : 'Niedostępny'}</span>
                      {live && quantity > 0 && <span className="text-gray-500"> · {quantity} szt.</span>}
                    </>
                  )}
                </p>
              </div>
              <div className="col-start-2 flex flex-wrap items-center justify-between gap-2 sm:col-start-auto sm:flex-col sm:items-end">
                <p className="whitespace-nowrap text-sm font-bold text-gray-950">
                  {price && price > 0 ? <>{price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł <span className="text-xs font-normal text-gray-500">netto</span></> : <span className="text-xs font-normal text-gray-500">Cena na zapytanie</span>}
                </p>
                <button
                  type="button"
                  onClick={addAccessory}
                  disabled={!inCart && !canAdd}
                  aria-label={inCart ? `Zobacz w koszyku: ${item.name}` : `Dodaj do koszyka: ${item.name}`}
                  aria-describedby={stockId}
                  className={`inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 ${inCart ? 'border border-green-300 bg-green-50 text-green-800 hover:bg-green-100' : item.manufacturerId === 'zebra' ? 'bg-[#A8F000] text-gray-950 hover:bg-[#96d800]' : 'bg-primary-600 text-white hover:bg-primary-700'}`}
                >
                  {inCart ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
                  {inCart ? 'W koszyku' : 'Do koszyka'}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
