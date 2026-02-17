import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { products, type Product } from '@/data/products'

export interface CartItem {
  productId: string
  productName: string
  productSlug: string
  productImage?: string
  partNumber?: string
  quantity: number
  note: string
  priceNetto?: number // cena jednostkowa netto w PLN (do wyświetlania)
  categoryId?: string // dla logiki cross-sell
}

interface CartStore {
  items: CartItem[]
  isDrawerOpen: boolean

  // Actions
  addItem: (product: {
    id: string
    name: string
    slug: string
    image?: string
    partNumber?: string
    priceNetto?: number
    categoryId?: string
  }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  updateNote: (productId: string, note: string) => void
  clearAll: () => void
  toggleDrawer: () => void
  openDrawer: () => void
  closeDrawer: () => void

  // Selectors
  getItemCount: () => number
  isInCart: (productId: string) => boolean
  getItem: (productId: string) => CartItem | undefined

  // Computed values
  getSubtotalNetto: () => number
  getVatAmount: () => number
  getTotalBrutto: () => number

  // Cross-sell
  getCrossSellProducts: (productId: string) => Product[]
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      addItem: (product) => {
        const { items } = get()
        const existingItem = items.find((item) => item.productId === product.id)

        if (existingItem) {
          // Zwieksz ilosc jesli juz istnieje
          set({
            items: items.map((item) =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          // Dodaj nowy element
          set({
            items: [
              ...items,
              {
                productId: product.id,
                productName: product.name,
                productSlug: product.slug,
                productImage: product.image,
                partNumber: product.partNumber,
                quantity: 1,
                note: '',
                priceNetto: product.priceNetto,
                categoryId: product.categoryId,
              },
            ],
          })
        }

        // Otworz drawer po dodaniu
        set({ isDrawerOpen: true })
      },

      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.productId !== productId),
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId)
          return
        }

        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        })
      },

      updateNote: (productId, note) => {
        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, note } : item
          ),
        })
      },

      clearAll: () => {
        set({ items: [] })
      },

      toggleDrawer: () => {
        set({ isDrawerOpen: !get().isDrawerOpen })
      },

      openDrawer: () => {
        set({ isDrawerOpen: true })
      },

      closeDrawer: () => {
        set({ isDrawerOpen: false })
      },

      // --- Selectors ---

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      isInCart: (productId) => {
        return get().items.some((item) => item.productId === productId)
      },

      getItem: (productId) => {
        return get().items.find((item) => item.productId === productId)
      },

      // --- Computed values ---

      getSubtotalNetto: () => {
        return get().items.reduce((sum, item) => {
          if (item.priceNetto) {
            return sum + item.priceNetto * item.quantity
          }
          return sum
        }, 0)
      },

      getVatAmount: () => {
        return get().getSubtotalNetto() * 0.23
      },

      getTotalBrutto: () => {
        const subtotal = get().getSubtotalNetto()
        return subtotal + subtotal * 0.23
      },

      // --- Cross-sell ---

      getCrossSellProducts: (productId: string): Product[] => {
        const product = products.find((p) => p.id === productId)
        if (!product) return []

        const cartProductIds = new Set(
          get().items.map((item) => item.productId)
        )

        // Priorytet: relatedAccessories (baterie, ladowarki) przed compatibleAccessories (etykiety)
        const relatedIds = product.relatedAccessories ?? []
        const compatibleIds = product.compatibleAccessories ?? []
        const combinedIds = [...relatedIds, ...compatibleIds]

        const suggestions: Product[] = []

        for (const accessoryId of combinedIds) {
          if (suggestions.length >= 4) break
          if (cartProductIds.has(accessoryId)) continue

          const accessory = products.find((p) => p.id === accessoryId)
          if (accessory) {
            suggestions.push(accessory)
          }
        }

        return suggestions
      },
    }),
    {
      name: 'takma-cart-storage',
      partialize: (state) => ({ items: state.items }), // Persist tylko items
    }
  )
)
