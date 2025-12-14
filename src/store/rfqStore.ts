import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface RFQItem {
  productId: string
  productName: string
  productSlug: string
  quantity: number
  note: string
}

interface RFQStore {
  items: RFQItem[]
  isDrawerOpen: boolean

  // Actions
  addItem: (product: { id: string; name: string; slug: string }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  updateNote: (productId: string, note: string) => void
  clearAll: () => void
  toggleDrawer: () => void
  openDrawer: () => void
  closeDrawer: () => void

  // Selectors
  getItemCount: () => number
  isInRFQ: (productId: string) => boolean
  getItem: (productId: string) => RFQItem | undefined
}

export const useRFQStore = create<RFQStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      addItem: (product) => {
        const { items } = get()
        const existingItem = items.find((item) => item.productId === product.id)

        if (existingItem) {
          // Zwiększ ilość jeśli już istnieje
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
                quantity: 1,
                note: '',
              },
            ],
          })
        }

        // Otwórz drawer po dodaniu
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

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      isInRFQ: (productId) => {
        return get().items.some((item) => item.productId === productId)
      },

      getItem: (productId) => {
        return get().items.find((item) => item.productId === productId)
      },
    }),
    {
      name: 'takma-rfq-storage',
      partialize: (state) => ({ items: state.items }), // Persist tylko items
    }
  )
)
