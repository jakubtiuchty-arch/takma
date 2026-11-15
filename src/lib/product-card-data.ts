import type { Product, ProductVariant } from '@/data/products'
import type { ProductCardData } from '@/components/product/ProductGrid'
import type { FilterDefinition } from '@/components/subcategory/FilterableProductGrid'

/**
 * Czy nazwa wiersza specyfikacji odpowiada nazwie wpisanej w regule (filtry siatki i przycinanie danych kafla).
 *
 * Katalog dopisuje do nazw wariant albo typ: „SIM (model US20X)”, „WWAN (Memor 35)”,
 * „Skaner 2D”, „Skaner LR”. Porównanie 1:1 gubiło takie wiersze — terminal z LTE
 * wyłącznie w wariancie wpadał do „Tylko Wi-Fi”, a gun ze skanerem dalekiego
 * zasięgu znikał z filtra skanera.
 */
export function specNameMatches(names: string[], name: string): boolean {
  const n = name.toLowerCase()
  return names.some(raw => {
    const r = raw.toLowerCase()
    return n === r || n.startsWith(`${r} `) || n.startsWith(`${r}(`)
  })
}

/** Wiersze specyfikacji czytane przez sam kafel: PN do koszyka i stanów, opis rolki w widoku listy. */
const SPECYFIKACJE_KAFLA = new Set(['Part Number', 'Wymiar etykiety', 'Seria', 'Ilość na rolce'])

/**
 * Które wiersze specyfikacji czytają filtry strony. `null` = któraś reguła sprawdza
 * wzorzec na wszystkich wierszach, więc nie można niczego pominąć.
 */
function wierszeFiltrow(filters: FilterDefinition[]): ((name: string) => boolean) | null {
  const nazwy = new Set<string>()
  const prefiksy: string[] = []
  for (const f of filters) {
    if (!f.derived) { nazwy.add(f.specKey); continue }
    for (const r of f.derived) {
      if (r.pattern && !r.specs) return null
      if (r.specs) prefiksy.push(...r.specs)
      if (r.notSpecs) prefiksy.push(...r.notSpecs)
    }
  }
  return name => nazwy.has(name) || specNameMatches(prefiksy, name)
}

/** React zapisuje w payloadzie także klucze z `undefined` („$undefined”) — pomijamy je. */
function bezPustych<T extends object>(o: T): T {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as T
}

/**
 * Dane kafla dla komponentu klienckiego. Strona kategorii przekazuje produkty do
 * siatki z filtrami, więc pełny `Product` (opis, FAQ, wszystkie zdjęcia, atrybuty
 * wariantów) trafiał do HTML — strona z 441 materiałami Brady ważyła 4,9 MB.
 * Kafel czyta z wariantu tylko PN, cenę i „na zapytanie”; nazwę tylko przy SATO
 * (pozycja „karton” w koszyku), atrybuty tylko przy licencjach (rozpoznanie dodatków).
 */
function doKafla(p: Product, wiersz: (name: string) => boolean): ProductCardData {
  return bezPustych({
    id: p.id,
    name: p.name,
    slug: p.slug,
    images: p.images.slice(0, 1),
    imageDescriptions: p.imageDescriptions?.slice(0, 1),
    manufacturerId: p.manufacturerId,
    categoryId: p.categoryId,
    subcategoryIds: p.subcategoryIds,
    specifications: p.specifications.filter(s => wiersz(s.name)),
    variants: p.variants?.map(v => bezPustych({
      partNumber: v.partNumber,
      name: p.manufacturerId === 'sato' ? v.name : undefined,
      priceFrom: v.priceFrom,
      quoteOnly: v.quoteOnly,
      attributes: p.licenseDelivery ? v.attributes : undefined,
    }) as ProductVariant),
    priceFrom: p.priceFrom,
    quoteOnly: p.quoteOnly,
    licenseDelivery: p.licenseDelivery,
    comingSoon: p.comingSoon,
    priceTiers: p.priceTiers,
    availability: p.availability,
  })
}

/** Produkty do `FilterableProductGrid` / `ProductGrid`: tylko pola kafla i wiersze specyfikacji czytane przez filtry. */
export function produktyDoSiatki(products: Product[], filters?: FilterDefinition[]): ProductCardData[] {
  const filtrowe = filters ? wierszeFiltrow(filters) : () => false
  const wiersz = filtrowe ? (name: string) => SPECYFIKACJE_KAFLA.has(name) || filtrowe(name) : () => true
  return products.map(p => doKafla(p, wiersz))
}
