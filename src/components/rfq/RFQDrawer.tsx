'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { CloseIcon, TrashIcon, PlusIcon, MinusIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { Button } from '@/components/ui'
import { useRFQStore } from '@/store/rfqStore'

export default function RFQDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, updateNote, clearAll } =
    useRFQStore()
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  // Blokuj scroll body gdy drawer jest otwarty
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  // Zamknij drawer przy naciśnięciu Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [closeDrawer])

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={clsx(
          'fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl z-50',
          'transform transition-transform duration-300 ease-out',
          'flex flex-col',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Koszyk"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Koszyk</h2>
            <p className="text-sm text-gray-500">
              {items.length === 0
                ? 'Brak produktów'
                : `${items.length} ${items.length === 1 ? 'produkt' : items.length < 5 ? 'produkty' : 'produktów'}`}
            </p>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Zamknij"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Lista jest pusta
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Dodaj produkty do koszyka
              </p>
              <Button variant="secondary" onClick={closeDrawer}>
                Przeglądaj katalog
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.productId} className="px-6 py-4">
                  <div className="flex items-start gap-4">
                    {/* Obrazek produktu */}
                    {(item.productId.includes('__onecare__') || item.productImage) && (
                      <div className="relative w-[70px] h-[70px] rounded-lg flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.productId.includes('__onecare__') ? '/images/zebra-onecare-logo.png' : item.productImage!}
                          alt={item.productId.includes('__onecare__') ? 'Zebra OneCare' : item.productName}
                          fill
                          className="object-contain p-1.5"
                          sizes="64px"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/produkt/${item.productSlug}`}
                        className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                        onClick={closeDrawer}
                      >
                        {item.productName}
                      </Link>
                      {item.partNumber && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.partNumber}
                        </p>
                      )}

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                          aria-label="Zmniejsz ilość"
                        >
                          <MinusIcon size={16} />
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                          aria-label="Zwiększ ilość"
                        >
                          <PlusIcon size={16} />
                        </button>
                        <span className="text-sm text-gray-500 ml-1">szt.</span>
                      </div>

                      {/* Note input */}
                      <input
                        type="text"
                        value={item.note}
                        onChange={(e) => updateNote(item.productId, e.target.value)}
                        placeholder="Dodaj notatkę..."
                        className="w-full mt-2 px-3 py-1.5 text-sm border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-primary-500"
                      />
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Usuń z listy"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-4 space-y-3 bg-gray-50">
            <Link href="/zapytanie" onClick={closeDrawer}>
              <Button fullWidth rightIcon={<ArrowRightIcon size={18} />}>
                Przejdź do kasy
              </Button>
            </Link>
            <button
              onClick={clearAll}
              className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors py-2"
            >
              Wyczyść listę
            </button>
          </div>
        )}
      </div>
    </>
  )
}
