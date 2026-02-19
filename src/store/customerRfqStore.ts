import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface RfqItem {
  productId: string
  productName: string
  productSlug: string
  productImage?: string
  partNumber?: string
  quantity: number
  note: string
}

interface CustomerRfqStore {
  items: RfqItem[]
  message: string

  addItem: (product: {
    id: string
    name: string
    slug: string
    image?: string
    partNumber?: string
  }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  updateNote: (productId: string, note: string) => void
  setMessage: (message: string) => void
  clearAll: () => void
  getItemCount: () => number
}

export const useCustomerRfqStore = create<CustomerRfqStore>()(
  persist(
    (set, get) => ({
      items: [],
      message: '',

      addItem: (product) => {
        const { items } = get()
        const existing = items.find((item) => item.productId === product.id)

        if (existing) {
          set({
            items: items.map((item) =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
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
              },
            ],
          })
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item.productId !== productId) })
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

      setMessage: (message) => set({ message }),

      clearAll: () => set({ items: [], message: '' }),

      getItemCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: 'takma-customer-rfq',
      partialize: (state) => ({ items: state.items, message: state.message }),
    }
  )
)
