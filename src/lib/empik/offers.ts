import { products, type Product, type ProductVariant } from '@/data/products'

/**
 * Oferty Empik — zakres i format pliku OF01.
 *
 * Na Empiku sprzedajemy WYŁĄCZNIE materiały eksploatacyjne: etykiety i taśmy
 * termotransferowe (decyzja 2026-06-11). Oferta podpina się do istniejącej karty
 * produktu Empika po EAN — treść karty (tytuł, opis, zdjęcia) jest Empika,
 * my dajemy tylko cenę, stan i pola GPSR.
 */

export interface EmpikCandidate {
  product: Product
  variant?: ProductVariant
  pn: string // Part Number = SKU oferty i klucz StockCache/ProductEan
}

/** Etykiety i taśmy (bez drukarek, bez akcesoriów) — filtr po nazwie produktu. */
function isMaterial(p: Product): boolean {
  const n = p.name.toLowerCase()
  return (n.startsWith('etykiet') || n.startsWith('taśm')) && !n.includes('drukark')
}

export function collectEmpikCandidates(): EmpikCandidate[] {
  const out: EmpikCandidate[] = []
  const seen = new Set<string>()
  for (const product of products) {
    if (!isMaterial(product)) continue
    if (product.variants?.length) {
      for (const v of product.variants) {
        if (seen.has(v.partNumber)) continue
        seen.add(v.partNumber)
        out.push({ product, variant: v, pn: v.partNumber })
      }
    } else {
      const pn = product.specifications.find((s) => s.name === 'Part Number')?.value
      if (!pn || seen.has(pn)) continue
      seen.add(pn)
      out.push({ product, pn })
    }
  }
  return out
}

// GPSR (UE 2023/988) — pola dodatkowe oferty Empika (kody z AF01).
// Dane spójne z feedem Ceneo (ten sam podmiot odpowiedzialny per producent).
interface GpsrEntity {
  name: string
  address: string
  country: string
  city: string
  zip: string
  email: string
}

const GPSR_BY_MANUFACTURER: Record<string, GpsrEntity> = {
  zebra: {
    name: 'Zebra Technologies Europe Limited',
    address: 'Dukes Meadow, Millboard Road',
    country: 'Wielka Brytania',
    city: 'Bourne End',
    zip: 'SL8 5XF',
    email: 'contact.emea@zebra.com',
  },
  honeywell: {
    name: 'Honeywell International s.r.o.',
    address: 'V Parku 2326/18',
    country: 'Czechy',
    city: 'Praha 4',
    zip: '148 00',
    email: 'info@honeywell.com',
  },
  datalogic: {
    name: 'Datalogic S.p.A.',
    address: 'Via Candini 2',
    country: 'Włochy',
    city: 'Lippo di Calderara di Reno (BO)',
    zip: '40012',
    email: 'corporate.communication@datalogic.com',
  },
}

/**
 * Karty Empika będące WIELOPAKAMI (tytuł karty mówi wprost: „6 x", „12Pcs/Box",
 * „opakowanie 24 szt." itd.), podczas gdy StockCache.price to cena ZA SZTUKĘ
 * (lekcja z buga taśm Jarltech 2026-06-07). Dla tych SKU: cena × pack,
 * ilość = pełne paczki ze stanu. Zweryfikowane ręcznie z tytułami kart 2026-06-11.
 */
export const PACK_SIZE_BY_SKU: Record<string, number> = {
  '02100BK08945': 24, // „opakowanie 24 szt."
  '05095BK08345': 6, // „6 x czarna"
  '05095BK11045': 6, // „6 x czarna"
  '3007201-T': 8, // „8Pcs/Box"
  '800261-107': 12, // „12Pcs/Box"
  '800273-205': 12, // „(12 uds)"
  '800264-605': 12, // „5700 etykiet" = 12 rolek × 475
  '3003632': 4, // „6400 etykiet (4 rolki…)"
}

/**
 * SKU wykluczone ze sprzedaży na Empiku — błędne karty w katalogu Empika
 * (kolizje EAN z obcymi produktami). Cron wysyła dla nich `delete`.
 */
export const EXCLUDED_SKUS = new Set<string>([
  '76381', // karta „Osram, Lampki choinkowe" — kolizja EAN z etykietami Zebra
])

export interface EmpikOfferRow {
  sku: string
  ean: string
  grossPrice: number
  quantity: number
  manufacturerId: string
  /** true → wiersz `delete` (usunięcie oferty z Empika) */
  remove?: boolean
}

const CSV_COLUMNS = [
  'sku',
  'product-id',
  'product-id-type',
  'price',
  'quantity',
  'state',
  'update-delete',
  'gpsr-entity-name',
  'gpsr-address',
  'gpsr-country',
  'gpsr-city',
  'gpsr-zip-code',
  'gpsr-email',
] as const

function csvCell(value: string): string {
  return /[;"\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value
}

/** Plik OF01: separator `;`, state 11 = nowy, leadtime-to-ship z ustawień konta. */
export function buildOffersCsv(rows: EmpikOfferRow[]): string {
  const lines = [CSV_COLUMNS.join(';')]
  for (const r of rows) {
    const gpsr = GPSR_BY_MANUFACTURER[r.manufacturerId]
    lines.push(
      [
        r.sku,
        r.ean,
        'EAN',
        r.remove ? '' : r.grossPrice.toFixed(2),
        r.remove ? '' : String(r.quantity),
        '11',
        r.remove ? 'delete' : '',
        gpsr?.name || '',
        gpsr?.address || '',
        gpsr?.country || '',
        gpsr?.city || '',
        gpsr?.zip || '',
        gpsr?.email || '',
      ]
        .map(csvCell)
        .join(';')
    )
  }
  return lines.join('\n')
}
