import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  products,
  getProductBySlug,
  pickRibbonVariantForLabel,
  parseLabelWidth,
  parseLabelCore,
  isThermalLabelProduct,
  isTransferLabelProduct,
  variantSizeSlug,
  type Product,
  type ProductVariant,
} from '@/data/products'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { getRibbonSeriesBySlug } from '@/data/transfer-ribbon-series'
import { ribbonNameToSlug } from '@/lib/ribbon-name-to-slug'

/** Sugerowana taśma dopasowana do konkretnego wariantu etykiety w koszyku.
 *  Zwraca pełny wariant rozmiarowy (np. 110×450 mm/m) wybrany przez algorytm
 *  `pickRibbonVariantForLabel` na bazie szerokości i rdzenia etykiety. */
export interface RibbonSuggestion {
  product: Product
  variant: ProductVariant
  /** Skrótowy opis rozmiaru do wyświetlenia, np. "110×450 mm/m" */
  sizeLabel: string
  /** Cena za rolkę z `variant.priceFrom` (jeśli ustawiona) */
  priceFrom?: number
  /** Slug taśmy do linku produktowego */
  productSlug: string
  /** PN etykiety która wygenerowała tę sugestię (do deduplikacji) */
  triggeredByLabelPN?: string
  /** Tagline serii taśmy — krótki argument "Bestseller" / "Premium" / itd. */
  tagline?: string
}

/** Rodzaj druku drukarki: termiczny bezpośredni („d") albo termotransferowy („t"). */
function printerPrintKind(printer: Product): 'dt' | 'tt' {
  const rodzaj = printer.specifications?.find((s) => /rodzaj druku/i.test(s.name))?.value ?? ''
  if (/termotransfer/i.test(rodzaj)) return 'tt'
  if (/bezpo|direct thermal/i.test(rodzaj)) return 'dt'

  const subs = printer.subcategoryIds ?? []
  if (subs.includes('termotransferowe-drukarki-etykiet')) return 'tt'
  if (subs.includes('termiczne-drukarki-etykiet')) return 'dt'

  // Ostatecznie litera modelu: ZD220d → termiczna, ZD421t → termotransferowa.
  return /\d{3,4}\s*d\b/i.test(printer.name) ? 'dt' : 'tt'
}

/** Maksymalna szerokość etykiety, jaką drukarka fizycznie przyjmie (mm). */
function printerMaxLabelWidth(printer: Product): number | undefined {
  const spec = printer.specifications?.find((s) => /szeroko(ść|sc) (druku|etykiet)/i.test(s.name))
  const match = spec?.value.match(/(\d+(?:[.,]\d+)?)\s*mm/)
  return match ? parseFloat(match[1].replace(',', '.')) : undefined
}

/** Konkretny wariant etykiety proponowany do drukarki w koszyku. */
export interface LabelSuggestion {
  product: Product
  variant: ProductVariant
  /** np. „102×152 mm" */
  sizeLabel: string
  priceFrom?: number
  /** pełna ścieżka karty wariantu: /produkt/{slug}/{rozmiar}/{PN} */
  href: string
}

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
  /** Numer oferty, z której pochodzi pozycja — cena jest wtedy zamrożona
   *  (kasa nie podmienia jej na żywą) i weryfikowana po stronie serwera. */
  quoteNumber?: string
}

/** Kod rabatowy wpisany w koszyku — dane przyjęte z weryfikacji na serwerze. */
export interface AppliedPromoCode {
  code: string
  /** numer katalogowy objęty ceną promocyjną */
  sku: string
  promoNetto: number
  maxQty: number
  productName: string | null
}

interface CartStore {
  items: CartItem[]
  isDrawerOpen: boolean
  /** Imienny kod z promocji producenckiej; null = ceny regularne. */
  promoCode: AppliedPromoCode | null

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
  /** Zastępuje zawartość koszyka pozycjami z oferty (link „zamów z oferty" w mailu). */
  loadFromQuote: (quoteNumber: string, items: Omit<CartItem, 'note' | 'quoteNumber'>[]) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  updateNote: (productId: string, note: string) => void
  clearAll: () => void
  setPromoCode: (code: AppliedPromoCode | null) => void
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
  /** Konkretne warianty etykiet dobrane do drukarek w koszyku (termiczne vs TT). */
  getLabelSuggestions: () => LabelSuggestion[]
  /** Sugestie taśm dla etykiet w koszyku z dopasowanym rozmiarem.
   *  Iteruje przez wszystkie pozycje koszyka, dla każdej etykiety TT znajduje
   *  rekomendowane taśmy i dobiera konkretny wariant po szerokości i rdzeniu. */
  getRibbonSuggestions: () => RibbonSuggestion[]
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      promoCode: null,

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

        // Otworz drawer po dodaniu (ale nie na stronie zamówienia)
        if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/zamowienie')) {
          set({ isDrawerOpen: true })
        }
      },

      loadFromQuote: (quoteNumber, quoteItems) => {
        // Podmiana, nie doklejanie: klient przyszedł z konkretną wyceną i ma zobaczyć
        // dokładnie ją, a nie wymieszaną z tym, co zostawił w koszyku tydzień temu.
        set({
          items: quoteItems.map((item) => ({ ...item, note: '', quoteNumber })),
          isDrawerOpen: false,
        })
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
        set({ items: [], promoCode: null })
      },

      setPromoCode: (code) => {
        set({ promoCode: code })
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
        // Resolve slug for variant IDs (slug__partNumber)
        let resolvedId = productId
        if (productId.includes('__') && !productId.includes('__onecare__')) {
          resolvedId = productId.split('__')[0]
        }

        const product = products.find((p) =>
          p.id === resolvedId || p.slug === resolvedId
        )
        if (!product) return []

        const cartProductIds = new Set(
          get().items.map((item) => item.productId)
        )

        // UWAGA: cross-sell etykieta → taśma obsługujemy osobno przez
        // `getRibbonSuggestions()` — zwraca konkretny wariant rozmiarowy taśmy.
        // Tutaj zostaje tylko logika dla drukarek i terminali.

        // Smart cross-sell: drukarki → etykiety, terminale → akcesoria
        const isDrukarka = product.categoryId === 'drukarki-etykiet'
          || product.subcategoryIds?.some(s => s.includes('drukar'))

        const accessoryIds = isDrukarka
          ? (product.compatibleAccessories ?? [])
          : (product.relatedAccessories ?? [])

        // Filtruj spare parts (głowice, wałki, OneCare)
        const excludeKeywords = [
          'głowica', 'glowica', 'printhead', 'wałek', 'walek', 'platen',
          'onecare', 'one-care', 'kontrakt', 'serwisow',
        ]

        const suggestions: Product[] = []

        for (const accessoryId of accessoryIds) {
          if (suggestions.length >= 4) break
          if (cartProductIds.has(accessoryId)) continue

          const accessory = products.find((p) => p.id === accessoryId)
          if (!accessory) continue

          const nameLower = accessory.name.toLowerCase()
          if (excludeKeywords.some(kw => nameLower.includes(kw))) continue

          suggestions.push(accessory)
        }

        return suggestions
      },

      // ── Sugestie etykiet dla drukarek w koszyku (konkretne warianty, nie serie) ──

      getLabelSuggestions: (): LabelSuggestion[] => {
        const items = get().items
        if (items.length === 0) return []

        const inCart = new Set(items.map((i) => i.productId))
        const printers: Product[] = []

        for (const item of items) {
          const resolvedId =
            item.productId.includes('__') && !item.productId.includes('__onecare__')
              ? item.productId.split('__')[0]
              : item.productId
          const product = products.find((p) => p.id === resolvedId || p.slug === resolvedId)
          if (!product) continue
          const isPrinter =
            product.categoryId === 'drukarki-etykiet' ||
            (product.subcategoryIds ?? []).some((s) => s.includes('drukar'))
          if (isPrinter) printers.push(product)
        }
        if (printers.length === 0) return []

        // Drukarka „d" bierze etykiety termiczne, „t" — termotransferowe. Typ czytamy ze
        // specyfikacji (najpewniejsze źródło), a dopiero w ostateczności z litery w modelu.
        const wants = new Set<'dt' | 'tt'>()
        let maxWidthMm = 0
        for (const printer of printers) {
          wants.add(printerPrintKind(printer))
          const width = printerMaxLabelWidth(printer)
          if (width) maxWidthMm = Math.max(maxWidthMm, width)
        }

        const matchesKind = (p: Product) =>
          (wants.has('dt') && isThermalLabelProduct(p)) ||
          (wants.has('tt') && isTransferLabelProduct(p))

        const candidates = products.filter(
          (p) => matchesKind(p) && (p.variants?.length ?? 0) > 0 && !inCart.has(p.id),
        )
        if (candidates.length === 0) return []

        // „Losowo", ale stabilnie w obrębie koszyka — inaczej kafle przeskakiwałyby
        // przy każdym renderze (np. po zmianie ilości), co wygląda na błąd.
        const seed = items.reduce((acc, i) => acc + i.productId.length + i.quantity, items.length)
        const rotated = candidates
          .slice(seed % candidates.length)
          .concat(candidates.slice(0, seed % candidates.length))

        const suggestions: LabelSuggestion[] = []
        for (const product of rotated) {
          if (suggestions.length >= 4) break

          const usable = (product.variants ?? []).filter((v) => {
            if (!v.attributes['Rozmiar']) return false
            if (inCart.has(`${product.id}__${v.partNumber}`)) return false
            if (!maxWidthMm) return true
            const width = parseLabelWidth(v.attributes['Rozmiar'])
            return !width || width <= maxWidthMm
          })
          if (usable.length === 0) continue

          const variant = usable[(seed + suggestions.length) % usable.length]
          const sizeLabel = variant.attributes['Rozmiar']
          suggestions.push({
            product,
            variant,
            sizeLabel,
            priceFrom: variant.priceFrom ?? product.priceFrom,
            href: `/produkt/${product.slug}/${variantSizeSlug(variant)}/${variant.partNumber}`,
          })
        }

        return suggestions
      },

      // ── Sugestie taśm dla etykiet w koszyku (z konkretnym wariantem rozmiaru) ──

      getRibbonSuggestions: (): RibbonSuggestion[] => {
        const items = get().items
        if (items.length === 0) return []

        const cartProductIds = new Set(items.map(i => i.productId))
        const seenRibbonVariants = new Set<string>() // klucz: ribbonProduct.id + variant.partNumber
        const suggestions: RibbonSuggestion[] = []

        for (const item of items) {
          // Resolve product slug z productId (może być slug__partNumber)
          let resolvedId = item.productId
          if (item.productId.includes('__') && !item.productId.includes('__onecare__')) {
            resolvedId = item.productId.split('__')[0]
          }
          const labelProduct = products.find(p => p.id === resolvedId || p.slug === resolvedId)
          if (!labelProduct) continue

          // Czy to etykieta TT?
          const labelSeries = transferLabelSeries.find(
            s => s.productId === labelProduct.id || s.productId === labelProduct.slug
          )
          if (!labelSeries) continue

          // Wyciągnij szerokość i rdzeń etykiety z konkretnego wariantu (PN)
          let labelWidthMm: number | undefined
          let labelCoreMm: number | undefined
          if (item.partNumber) {
            const variant = labelProduct.variants?.find(v => v.partNumber === item.partNumber)
            if (variant) {
              const rozmiar = variant.attributes['Rozmiar']
              const gilza = variant.attributes['Rdzeń (gilza)'] ?? variant.attributes['Rdzeń']
              labelWidthMm = parseLabelWidth(rozmiar) ?? undefined
              labelCoreMm = parseLabelCore(gilza) ?? undefined
            }
          }

          const ribbonNames: string[] = [
            ...(labelSeries.recommendedRibbons.waxResin ?? []),
            ...(labelSeries.recommendedRibbons.resin ?? []),
          ]

          for (const name of ribbonNames) {
            const slug = ribbonNameToSlug(name)
            const ribbonSeries = getRibbonSeriesBySlug(slug)
            if (!ribbonSeries) continue
            const ribbonProduct = getProductBySlug(ribbonSeries.productId)
            if (!ribbonProduct || !ribbonProduct.variants?.length) continue
            if (cartProductIds.has(ribbonProduct.id)) continue

            // Dobierz konkretny wariant taśmy do szerokości/rdzenia etykiety
            const ribbonVariant = labelWidthMm
              ? pickRibbonVariantForLabel(ribbonProduct, labelWidthMm, labelCoreMm)
              : ribbonProduct.variants[0]
            if (!ribbonVariant) continue

            const key = `${ribbonProduct.id}__${ribbonVariant.partNumber}`
            if (seenRibbonVariants.has(key)) continue
            seenRibbonVariants.add(key)

            const w = ribbonVariant.attributes['Szerokość']
            const l = ribbonVariant.attributes['Długość']
            const sizeLabel = w && l ? `${w.replace(' ', '')}×${l.replace(' ', '')}` : ribbonVariant.name

            suggestions.push({
              product: ribbonProduct,
              variant: ribbonVariant,
              sizeLabel,
              priceFrom: ribbonVariant.priceFrom ?? ribbonProduct.priceFrom,
              productSlug: ribbonProduct.slug,
              triggeredByLabelPN: item.partNumber,
              tagline: ribbonSeries.tagline,
            })

            if (suggestions.length >= 4) return suggestions
          }
        }

        return suggestions
      },
    }),
    {
      name: 'takma-cart-storage',
      partialize: (state) => ({ items: state.items, promoCode: state.promoCode }),
    }
  )
)
