'use client'

import { useCartStore } from '@/store/cartStore'
import { trackAddToCart } from '@/lib/ga-events'

/**
 * Dodanie używki do koszyka. Sztuka jest jedna, więc ponowne kliknięcie nie
 * zwiększa ilości — zamiast tego otwiera koszyk. Cenę i dostępność serwer
 * sprawdza jeszcze raz przy składaniu zamówienia (lib/used-devices.ts).
 */
export default function AddUsedToCart({
  productId,
  name,
  slug,
  image,
  partNumber,
  priceNetto,
}: {
  productId: string
  name: string
  slug: string
  image?: string
  partNumber?: string
  priceNetto: number
}) {
  const { addItem, openDrawer, isInCart } = useCartStore()
  const wKoszyku = isInCart(productId)

  const dodaj = () => {
    if (wKoszyku) {
      openDrawer()
      return
    }
    addItem({
      id: productId,
      name: `${name} (używany)`,
      slug: `uzywane/${slug}`,
      image,
      partNumber,
      priceNetto,
      categoryId: 'uzywane',
    })
    trackAddToCart({ item_id: productId, item_name: name, price: priceNetto, quantity: 1 })
  }

  return (
    <>
      <button
        onClick={dodaj}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 active:scale-[0.98]"
      >
        {wKoszyku ? 'W koszyku — przejdź do zamówienia' : 'Dodaj do koszyka'}
      </button>
      <p className="text-xs text-gray-500 text-center mt-2">
        Ostatnia sztuka w tej cenie — rezerwuje ją dopiero złożone zamówienie.
      </p>
    </>
  )
}
