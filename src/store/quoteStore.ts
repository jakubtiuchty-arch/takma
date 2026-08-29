import { create } from 'zustand'

export interface QuoteItemData {
  id: string // temp client-side ID
  source: 'catalog' | 'manual' | 'import'
  productId?: string
  productName: string
  partNumber?: string
  description?: string
  quantity: number
  catalogPrice?: number    // grosze — cena sklepowa (dla catalog: bazowa do rabatu)
  purchasePrice?: number   // grosze — cena zakupu specjalna (dla manual/import: bazowa do marży)
  priceNetto: number       // grosze — cena sprzedaży netto (końcowa)
  discountPercent?: number // % rabatu (catalog: cena = catalogPrice × (1 - rabat/100))
  marginPercent?: number   // % marży (manual/import: cena = purchasePrice × (1 + marża/100))
}

export interface QuoteClientData {
  company: string
  nip?: string
  contact?: string
  email?: string
  phone?: string
  address?: string
}

interface QuoteStore {
  // Client
  client: QuoteClientData
  setClient: (data: Partial<QuoteClientData>) => void

  // Items
  items: QuoteItemData[]
  addItem: (item: Omit<QuoteItemData, 'id'>) => void
  updateItem: (id: string, data: Partial<QuoteItemData>) => void
  removeItem: (id: string) => void
  reorderItems: (fromIndex: number, toIndex: number) => void
  clearItems: () => void

  // Terms
  validDays: number
  paymentTerms: string
  deliveryTerms: string
  notes: string
  internalNotes: string
  freebiesNote: string
  zebraServiceBanner: boolean
  setTerms: (data: Partial<{
    validDays: number
    paymentTerms: string
    deliveryTerms: string
    notes: string
    internalNotes: string
    freebiesNote: string
    zebraServiceBanner: boolean
  }>) => void

  // Computed
  getSubtotalNetto: () => number
  getVatAmount: () => number
  getTotalBrutto: () => number

  // Reset
  resetAll: () => void
}

let nextId = 1

const initialClient: QuoteClientData = {
  company: '',
  nip: '',
  contact: '',
  email: '',
  phone: '',
  address: '',
}

export const useQuoteStore = create<QuoteStore>()((set, get) => ({
  client: { ...initialClient },
  setClient: (data) => set({ client: { ...get().client, ...data } }),

  items: [],
  addItem: (item) => {
    const id = `qi-${nextId++}-${Date.now()}`
    set({ items: [...get().items, { ...item, id }] })
  },
  updateItem: (id, data) => {
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ),
    })
  },
  removeItem: (id) => {
    set({ items: get().items.filter((item) => item.id !== id) })
  },
  reorderItems: (fromIndex, toIndex) => {
    const items = [...get().items]
    const [moved] = items.splice(fromIndex, 1)
    items.splice(toIndex, 0, moved)
    set({ items })
  },
  clearItems: () => set({ items: [] }),

  validDays: 14,
  paymentTerms: '7 dni',
  deliveryTerms: '2-5 dni roboczych',
  notes: '',
  internalNotes: '',
  freebiesNote: '',
  zebraServiceBanner: false,
  setTerms: (data) =>
    set({
      ...(data.validDays !== undefined && { validDays: data.validDays }),
      ...(data.paymentTerms !== undefined && { paymentTerms: data.paymentTerms }),
      ...(data.deliveryTerms !== undefined && { deliveryTerms: data.deliveryTerms }),
      ...(data.notes !== undefined && { notes: data.notes }),
      ...(data.internalNotes !== undefined && { internalNotes: data.internalNotes }),
      ...(data.freebiesNote !== undefined && { freebiesNote: data.freebiesNote }),
      ...(data.zebraServiceBanner !== undefined && { zebraServiceBanner: data.zebraServiceBanner }),
    }),

  getSubtotalNetto: () =>
    get().items.reduce((sum, item) => sum + item.priceNetto * item.quantity, 0),

  getVatAmount: () => Math.round(get().getSubtotalNetto() * 0.23),

  getTotalBrutto: () => get().getSubtotalNetto() + get().getVatAmount(),

  resetAll: () =>
    set({
      client: { ...initialClient },
      items: [],
      validDays: 14,
      paymentTerms: '7 dni',
      deliveryTerms: '2-5 dni roboczych',
      notes: '',
      internalNotes: '',
      freebiesNote: '',
      zebraServiceBanner: false,
    }),
}))
