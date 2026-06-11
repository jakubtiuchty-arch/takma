/**
 * Masowy import kart produktów do Empika (Mirakl P41).
 *
 * Generuje karty dla WSZYSTKICH materiałów (etykiety + taśmy) z ważnym EAN:
 * nowe karty powstają, istniejące (też te cudze „Cartusze") dostają nasze
 * dane — wzorzec zweryfikowany pilotem 2026-06-11 (import 6691938,
 * zaakceptowany tego samego wieczoru, .webp przyjęty).
 *
 * Dwa pliki CSV (różne kategorie → różne atrybuty wymagane):
 *  - etykiety → STR_GOLD 6-645-11 (Etykiety samoprzylepne), producent kol. 600
 *  - taśmy    → STR_GOLD 21-19-12 (Akcesoria do drukarek), marka 34 + producent 2100
 *
 * Uruchomienie: npx tsx --env-file=.env scripts/empik-p41.mts [labels|ribbons|all]
 */
import { writeFileSync } from 'fs'
import {
  isThermalLabelProduct,
  isTransferLabelProduct,
  type Product,
  type ProductVariant,
} from '../src/data/products'
import { collectEmpikCandidates, EXCLUDED_SKUS } from '../src/lib/empik/offers'
import { prisma } from '../src/lib/db'
import { isValidGtin } from '../src/lib/allegro/gtin'

const API = 'https://marketplace.empik.com/api'
const KEY = process.env.EMPIK_API_KEY!
const SITE = 'https://www.takma.com.pl'

// Kody z list wartości Empika (values_lists 34 / 600 / 2011)
const BRAND_34: Record<string, string> = { zebra: 'AAAALM', honeywell: 'AAAHI3' }
const PRODUCER_600: Record<string, string> = { zebra: 'AAND', honeywell: 'AAADWJ' }
const PRODUCER_2100: Record<string, string> = { zebra: 'AAANMT' }

function csvCell(v: string): string {
  return /[;"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
}

function stripMarkdown(t: string): string {
  return t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1')
}

/** Cenzura treści Empika — znane zakazane frazy (błąd 2031). */
function sanitize(t: string): string {
  return t
    .replace(/substancj\w*\s+chemiczn\w*/gi, 'chemikalia')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

/** Czytelna etykieta wariantu: etykiety → „102×152 mm, rdzeń 76 mm"; taśmy → „83 mm × 450 m". */
function variantLabel(v: ProductVariant): string {
  const rozmiar = v.attributes['Rozmiar']
  const rdzen = v.attributes['Rdzeń (gilza)'] ?? v.attributes['Rdzeń']
  if (rozmiar) return rdzen ? `${rozmiar}, rdzeń ${rdzen}` : rozmiar
  const w = v.attributes['Szerokość']?.match(/[\d.,]+/)?.[0]
  const l = v.attributes['Długość']?.match(/[\d.,]+/)?.[0]
  if (w && l) return rdzen ? `${w} mm × ${l} m, rdzeń ${rdzen}` : `${w} mm × ${l} m`
  return v.name
}

function buildTitle(p: Product, v: ProductVariant): string {
  const label = variantLabel(v)
  const title = label && !p.name.includes(label) ? `${p.name} ${label}` : p.name
  return title.slice(0, 200)
}

function buildDescription(p: Product, v: ProductVariant): string {
  const label = variantLabel(v)
  const base = stripMarkdown(p.description || p.shortDescription || '')
  const parts = [
    `${p.name} — wariant ${label} (nr kat. ${v.partNumber}).`,
    base,
    'Sprzedawca: TAKMA — od 1994 roku specjalizujemy się w automatycznej identyfikacji; Premier Partner i autoryzowany serwis Zebra Technologies.',
  ]
  return sanitize(parts.filter(Boolean).join(' ')).slice(0, 4900)
}

interface Row {
  pn: string
  ean: string
  title: string
  desc: string
  image: string
  manufacturerId: string
  isLabel: boolean
}

async function collectRows(): Promise<Row[]> {
  const candidates = collectEmpikCandidates().filter((c) => c.variant && !EXCLUDED_SKUS.has(c.pn))
  const pns = candidates.map((c) => c.pn.toUpperCase())
  const eanRows = await prisma.productEan.findMany({
    where: { partNumber: { in: pns } },
    select: { partNumber: true, ean: true },
  })
  const eanByPN = new Map(eanRows.filter((r) => isValidGtin(r.ean)).map((r) => [r.partNumber, r.ean]))

  const seenEan = new Set<string>()
  const rows: Row[] = []
  for (const c of candidates) {
    const ean = eanByPN.get(c.pn.toUpperCase())
    if (!ean || seenEan.has(ean)) continue
    if (!c.product.images?.length) continue
    seenEan.add(ean)
    rows.push({
      pn: c.pn,
      ean,
      title: buildTitle(c.product, c.variant!),
      desc: buildDescription(c.product, c.variant!),
      image: `${SITE}${c.product.images[0]}`,
      manufacturerId: c.product.manufacturerId,
      isLabel: isThermalLabelProduct(c.product) || isTransferLabelProduct(c.product),
    })
  }
  return rows
}

function buildCsv(rows: Row[], kind: 'labels' | 'ribbons'): string {
  if (kind === 'labels') {
    const lines = ['STR_GOLD;CATALOG_CODE;EAN;PELNY_TYTUL;OPIS_PRODUKTU_PELNY;ZDJECIE_OKLADKI_PRZOD_DUZY;VAT_VALUE;600']
    for (const r of rows) {
      lines.push(
        ['6-645-11', r.pn, r.ean, r.title, r.desc, r.image, '23', PRODUCER_600[r.manufacturerId] || '']
          .map(csvCell)
          .join(';')
      )
    }
    return lines.join('\n')
  }
  const lines = ['STR_GOLD;CATALOG_CODE;EAN;PELNY_TYTUL;OPIS_PRODUKTU_PELNY;ZDJECIE_OKLADKI_PRZOD_DUZY;VAT_VALUE;34;2100']
  for (const r of rows) {
    lines.push(
      ['21-19-12', r.pn, r.ean, r.title, r.desc, r.image, '23', BRAND_34[r.manufacturerId] || '', PRODUCER_2100[r.manufacturerId] || '']
        .map(csvCell)
        .join(';')
    )
  }
  return lines.join('\n')
}

async function submit(csv: string, name: string): Promise<number> {
  const form = new FormData()
  form.append('file', new Blob(['﻿' + csv], { type: 'text/csv' }), name)
  const res = await fetch(`${API}/products/imports`, {
    method: 'POST',
    headers: { Authorization: KEY },
    body: form,
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`P41 ${res.status}: ${text.slice(0, 300)}`)
  return JSON.parse(text).import_id
}

async function waitTransform(importId: number): Promise<Record<string, unknown>> {
  for (let i = 0; i < 60; i++) {
    const res = await fetch(`${API}/products/imports/${importId}`, { headers: { Authorization: KEY } })
    const d = await res.json()
    if (d.transform_lines_read > 0 && d.transform_lines_read === d.transform_lines_in_success + d.transform_lines_in_error) {
      return d
    }
    await new Promise((r) => setTimeout(r, 20000))
  }
  throw new Error(`Import ${importId}: transform nie zakończył się w 20 min`)
}

const mode = process.argv[2] || 'all'
const rows = await collectRows()
const labels = rows.filter((r) => r.isLabel)
const ribbons = rows.filter((r) => !r.isLabel)
console.log(`Kandydaci: ${rows.length} unikalnych EAN (etykiety: ${labels.length}, taśmy: ${ribbons.length})`)

const results: Record<string, unknown>[] = []
for (const [kind, set] of [['labels', labels], ['ribbons', ribbons]] as const) {
  if (mode !== 'all' && mode !== kind) continue
  if (!set.length) continue
  const csv = buildCsv(set, kind)
  writeFileSync(`/tmp/empik-p41-${kind}.csv`, csv)
  const importId = await submit(csv, `products-${kind}.csv`)
  console.log(`[${kind}] wysłane ${set.length} wierszy → import ${importId}, czekam na transform…`)
  const info = await waitTransform(importId)
  console.log(`[${kind}] import ${importId}: success=${info.transform_lines_in_success} error=${info.transform_lines_in_error} status=${info.import_status}`)
  results.push({ kind, importId, ...info })
}
console.log(JSON.stringify(results.map((r) => ({
  kind: r.kind, importId: r.importId,
  ok: r.transform_lines_in_success, err: r.transform_lines_in_error,
})), null, 1))
process.exit(0)
