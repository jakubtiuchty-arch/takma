/**
 * Import EAN/GTIN z content feedu Ingram (DescriptionPL.csv) do tabeli ProductEan.
 *
 * Plik feedu: kolumny CompanyCd;SKU;...;ProductCode;EANCode;LastUpdate
 *  - ProductCode = Part Number producenta (np. 3003074)
 *  - SKU         = ItemID Ingram (np. ZB3003074) — bierzemy też bez prefiksu literowego
 *  - EANCode     = EAN/UPC
 *
 * Zapisujemy klucz po ProductCode ORAZ po SKU-bez-prefiksu (oba → ten sam EAN),
 * żeby trafić nasze PN niezależnie od formatu.
 *
 * Użycie:
 *   node scripts/import-ean-ingram.mjs "/ścieżka/do/DescriptionPL.csv"
 */
import 'dotenv/config'
import fs from 'fs'
import pg from 'pg'

const csvPath = process.argv[2]
if (!csvPath) {
  console.error('Podaj ścieżkę do DescriptionPL.csv')
  process.exit(1)
}

const DATABASE_URL = process.env.DATABASE_URL || process.env.DIRECT_URL
if (!DATABASE_URL) {
  console.error('Brak DATABASE_URL w env')
  process.exit(1)
}

// Indeksy kolumn (z nagłówka feedu)
const IDX = { SKU: 1, ProductCode: 11, EANCode: 12 }

/** GTIN: struktura + suma kontrolna + odrzucenie placeholderów (jak src/lib/allegro/gtin.ts). */
function isValidGtin(ean) {
  if (!ean || !/^\d{8,14}$/.test(ean)) return false
  if (![8, 12, 13, 14].includes(ean.length)) return false
  if (/^(\d)\1+$/.test(ean)) return false
  if (/^(\d\d)\1+\d?$/.test(ean)) return false
  if (/^0+/.test(ean)) return false
  const digits = ean.split('').map(Number)
  const check = digits.pop()
  let sum = 0
  digits.reverse().forEach((d, i) => (sum += d * (i % 2 === 0 ? 3 : 1)))
  return (10 - (sum % 10)) % 10 === check
}

function parseAndCollect(data) {
  const map = new Map() // PN(upper) -> ean
  let field = '',
    row = [],
    inQ = false,
    isHeader = true
  const commit = () => {
    if (isHeader) {
      isHeader = false
    } else {
      const sku = (row[IDX.SKU] || '').trim()
      const pc = (row[IDX.ProductCode] || '').trim()
      const ean = (row[IDX.EANCode] || '').trim()
      if (ean && /^\d{8,14}$/.test(ean)) {
        if (pc) map.set(pc.toUpperCase(), ean)
        const m = sku.match(/^[A-Za-z]{2}(.+)$/)
        if (m) map.set(m[1].toUpperCase(), ean)
        if (sku) map.set(sku.toUpperCase(), ean)
      }
    }
    row = []
  }
  for (let i = 0; i < data.length; i++) {
    const ch = data[i]
    if (inQ) {
      if (ch === '"') {
        if (data[i + 1] === '"') {
          field += '"'
          i++
        } else inQ = false
      } else field += ch
    } else if (ch === '"') inQ = true
    else if (ch === ';') {
      row.push(field)
      field = ''
    } else if (ch === '\n') {
      row.push(field)
      field = ''
      commit()
    } else if (ch !== '\r') field += ch
  }
  if (field || row.length) {
    row.push(field)
    commit()
  }
  return map
}

async function main() {
  console.log('Czytam', csvPath)
  const data = fs.readFileSync(csvPath, 'utf8')
  const raw = parseAndCollect(data)
  console.log('Zebrano par PN→EAN (surowe):', raw.size)

  // Filtr 1: poprawny GTIN (struktura + suma kontrolna + nie-placeholder)
  // Filtr 2: odrzuć EAN współdzielone przez >3 PN (prawdziwy GTIN jest unikalny per produkt)
  const freq = new Map()
  for (const ean of raw.values()) freq.set(ean, (freq.get(ean) || 0) + 1)
  const map = new Map()
  let badGtin = 0,
    shared = 0
  for (const [pn, ean] of raw) {
    if (!isValidGtin(ean)) {
      badGtin++
      continue
    }
    if (freq.get(ean) > 3) {
      shared++
      continue
    }
    map.set(pn, ean)
  }
  console.log(`Po filtrach: ${map.size} (odrzucone: zły GTIN ${badGtin}, współdzielone ${shared})`)

  const client = new pg.Client({ connectionString: DATABASE_URL })
  await client.connect()
  const entries = [...map.entries()]
  const BATCH = 1000
  let done = 0
  for (let i = 0; i < entries.length; i += BATCH) {
    const slice = entries.slice(i, i + BATCH)
    const values = []
    const params = []
    slice.forEach(([pn, ean], j) => {
      params.push(`($${j * 2 + 1}, $${j * 2 + 2}, 'ingram', now())`)
      values.push(pn, ean)
    })
    await client.query(
      `INSERT INTO "ProductEan" ("partNumber","ean","source","updatedAt") VALUES ${params.join(',')}
       ON CONFLICT ("partNumber") DO UPDATE SET "ean"=EXCLUDED."ean", "source"=EXCLUDED."source", "updatedAt"=now()`,
      values,
    )
    done += slice.length
    if (done % 10000 < BATCH) console.log(`  zapisano ${done}/${entries.length}`)
  }
  await client.end()
  console.log(`Gotowe — w ProductEan: ${done} kluczy.`)
}

main().catch((e) => {
  console.error('Błąd importu:', e.message)
  process.exit(1)
})
