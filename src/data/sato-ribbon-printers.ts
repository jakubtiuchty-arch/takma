/**
 * Zgodność taśm termotransferowych SATO z drukarkami SATO (gilza, długość, szerokość,
 * średnica rolki, nawój) wg katalogu taśm SATO 2026 i kart drukarek w sklepie.
 *
 * Używane na:
 * - /tasmy-termotransferowe-sato (tabela „drukarki” w przewodniku),
 * - /produkt/[slug]/[size]/[pn] (dobór drukarek dla konkretnego rozmiaru taśmy SATO).
 */

import type { ProductVariant } from './products'

export type SatoPrinterGroup = 'desktop' | 'industrial' | 'engine'
export type SatoRibbonWinding = 'IN' | 'OUT'

export interface SatoPrinter {
  model: string
  group: SatoPrinterGroup
  /** Średnica gilzy taśmy w mm. */
  coreMm: number
  /** Maksymalna długość rolki taśmy w m. */
  maxLengthM: number
  /** Minimalna szerokość taśmy w mm; null = producent nie podaje minimum. */
  minWidthMm: number | null
  maxWidthMm: number
  /** Maksymalna średnica rolki taśmy w mm; null = brak danych. */
  maxOdMm: number | null
  winding: SatoRibbonWinding[]
  /** Karty drukarek w sklepie; pusta lista = model bez karty (sama nazwa). */
  links: { name: string; href: string }[]
}

export const SATO_PRINTER_GROUP_LABELS: Record<SatoPrinterGroup, string> = {
  desktop: 'Drukarki biurkowe',
  industrial: 'Drukarki przemysłowe',
  engine: 'Moduły drukujące',
}

export const satoRibbonPrinters: SatoPrinter[] = [
  {
    model: 'CT4-LX', group: 'desktop', coreMm: 12.7, maxLengthM: 100, minWidthMm: 45, maxWidthMm: 111, maxOdMm: 39, winding: ['OUT'],
    links: [
      { name: 'CT4-LX RFID', href: '/produkt/sato-ct4-lx-rfid' },
      { name: 'CT4-LX-HC', href: '/produkt/sato-ct4-lx-hc' },
    ],
  },
  { model: 'WS4', group: 'desktop', coreMm: 25.4, maxLengthM: 300, minWidthMm: 40, maxWidthMm: 110, maxOdMm: 68, winding: ['IN', 'OUT'], links: [] },
  { model: 'WT4-AXB', group: 'desktop', coreMm: 25.4, maxLengthM: 450, minWidthMm: null, maxWidthMm: 110, maxOdMm: 82, winding: ['IN', 'OUT'], links: [] },
  {
    model: 'CL4NX Plus', group: 'industrial', coreMm: 25.4, maxLengthM: 600, minWidthMm: 39.5, maxWidthMm: 128, maxOdMm: 90, winding: ['IN', 'OUT'],
    links: [
      { name: 'CL4NX Plus', href: '/produkt/sato-cl4nx-plus' },
      { name: 'CL4NX Plus RFID', href: '/produkt/sato-cl4nx-plus-rfid' },
    ],
  },
  {
    model: 'CL6NX Plus', group: 'industrial', coreMm: 25.4, maxLengthM: 600, minWidthMm: 59, maxWidthMm: 177, maxOdMm: 90, winding: ['IN', 'OUT'],
    links: [
      { name: 'CL6NX Plus', href: '/produkt/sato-cl6nx-plus' },
      { name: 'CL6NX Plus RFID', href: '/produkt/sato-cl6nx-plus-rfid' },
    ],
  },
  {
    model: 'CL4-SXR', group: 'industrial', coreMm: 25.4, maxLengthM: 600, minWidthMm: 39.5, maxWidthMm: 128, maxOdMm: null, winding: ['IN', 'OUT'],
    links: [
      { name: 'CL4-SXR', href: '/produkt/sato-cl4-sxr' },
      { name: 'CL4-SXR RFID', href: '/produkt/sato-cl4-sxr-rfid' },
    ],
  },
  {
    model: 'CL6-SXR', group: 'industrial', coreMm: 25.4, maxLengthM: 600, minWidthMm: 59, maxWidthMm: 177, maxOdMm: null, winding: ['IN', 'OUT'],
    links: [
      { name: 'CL6-SXR', href: '/produkt/sato-cl6-sxr' },
      { name: 'CL6-SXR RFID', href: '/produkt/sato-cl6-sxr-rfid' },
    ],
  },
  { model: 'SG112-ex', group: 'industrial', coreMm: 25.4, maxLengthM: 300, minWidthMm: 145, maxWidthMm: 273, maxOdMm: 70, winding: ['IN'], links: [] },
  { model: 'S84NX', group: 'engine', coreMm: 25.4, maxLengthM: 600, minWidthMm: 25, maxWidthMm: 128, maxOdMm: 108, winding: ['IN', 'OUT'], links: [] },
  { model: 'S86NX', group: 'engine', coreMm: 25.4, maxLengthM: 600, minWidthMm: 59, maxWidthMm: 177, maxOdMm: 108, winding: ['IN', 'OUT'], links: [] },
]

/** Uwaga wyświetlana pod tabelą drukarek w hubie. */
export const SATO_PRINTERS_TABLE_NOTE =
  'CL4NX Plus przyjmuje taśmę 39,5 mm najwyżej 450 m, a CL6NX Plus taśmę 59 mm najwyżej 450 m. Taśma SWX-MAX 800 m ma średnicę rolki taśmy 600 m, więc pasuje do drukarek z limitem 600 m.'

function parseNum(value: string | undefined): number | undefined {
  if (!value) return undefined
  const n = parseFloat(value.replace(',', '.'))
  return Number.isFinite(n) ? n : undefined
}

/** Drukarki SATO, w których zgadzają się gilza, nawój, szerokość i długość wariantu taśmy. */
export function satoPrintersForRibbon(v: ProductVariant, line?: 'Value' | 'Flex' | 'Flow'): SatoPrinter[] {
  const width = parseNum(v.attributes['Szerokość'])
  const length = parseNum(v.attributes['Długość'])
  const core = parseNum(v.attributes['Rdzeń'])
  if (width === undefined || length === undefined || core === undefined) return []
  // SWX-MAX (Flow) 800 m ma średnicę rolki taśmy 600 m, więc liczy się jak 600 m.
  const effectiveLength = line === 'Flow' && length === 800 ? 600 : length
  const winding = v.attributes['Nawój']?.trim().toUpperCase() as SatoRibbonWinding | undefined
  return satoRibbonPrinters.filter(p =>
    Math.abs(p.coreMm - core) < 1 &&
    effectiveLength <= p.maxLengthM &&
    width >= (p.minWidthMm ?? 0) &&
    width <= p.maxWidthMm &&
    (!winding || p.winding.includes(winding)),
  )
}

/** Grupy drukarek do kafelków (tylko niepuste); model rozwinięty do kart w sklepie. */
export function satoPrinterGroupsForRibbon(
  v: ProductVariant,
  line?: 'Value' | 'Flex' | 'Flow',
): { label: string; models: { name: string; href?: string }[] }[] {
  const printers = satoPrintersForRibbon(v, line)
  return (Object.keys(SATO_PRINTER_GROUP_LABELS) as SatoPrinterGroup[])
    .map(group => ({
      label: SATO_PRINTER_GROUP_LABELS[group],
      models: printers
        .filter(p => p.group === group)
        .flatMap(p => (p.links.length > 0 ? p.links.map(l => ({ name: l.name, href: l.href })) : [{ name: p.model }])),
    }))
    .filter(g => g.models.length > 0)
}

/* ── Formatowanie do tabeli i opisów (zapis polski) ─────────────────────── */

const fmt = (n: number) => n.toLocaleString('pl-PL', { maximumFractionDigits: 1 })

/** „12,7 mm (½″)”, „25,4 mm (1″)”. */
export function formatSatoCore(coreMm: number): string {
  if (Math.abs(coreMm - 12.7) < 1) return '12,7 mm (½″)'
  if (Math.abs(coreMm - 25.4) < 1) return '25,4 mm (1″)'
  return `${fmt(coreMm)} mm`
}

/** „39,5–128 mm” albo „do 110 mm”, gdy brak minimum. */
export function formatSatoWidthRange(p: SatoPrinter): string {
  return p.minWidthMm === null ? `do ${fmt(p.maxWidthMm)} mm` : `${fmt(p.minWidthMm)}–${fmt(p.maxWidthMm)} mm`
}

/** „IN i OUT” / „OUT” / „IN”. */
export function formatSatoWinding(w: SatoRibbonWinding[]): string {
  return w.includes('IN') && w.includes('OUT') ? 'IN i OUT' : w.join(', ')
}

export function formatSatoOd(p: SatoPrinter): string {
  return p.maxOdMm === null ? '—' : `${fmt(p.maxOdMm)} mm`
}
