/**
 * Wczytanie cennika zakupowego producenta (XLSX) do tabeli cen specjalnych.
 *
 * To samo, co robi wgranie pliku w /admin/koncesje, tylko z linii poleceń —
 * przydaje się przy pierwszym cenniku i przy odtwarzaniu danych. Parser jest
 * odwzorowaniem `src/lib/cennik-xlsx.ts`; skrypty w repo chodzą na czystym
 * Node, więc nie da się zaimportować modułu TypeScriptowego.
 *
 * Użycie:
 *   node scripts/wczytaj-cennik.mjs "Takma Magicard  VII-2026.xlsx" Magicard 2026-07-01 2027-06-30
 */

import { readFileSync } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const JSZip = require('jszip')
const { Client } = require('pg')

const [plik, dostawca, od, doKiedy] = process.argv.slice(2)
if (!plik || !dostawca || !od || !doKiedy) {
  console.error('Użycie: node scripts/wczytaj-cennik.mjs <plik.xlsx> <dostawca> <od RRRR-MM-DD> <do RRRR-MM-DD>')
  process.exit(1)
}

const tekstZSi = (si) =>
  (si.match(/<t[^>]*>([\s\S]*?)<\/t>/g) ?? [])
    .map((t) => t.replace(/<[^>]+>/g, ''))
    .join('')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")

const kolumna = (ref) => {
  const litery = ref.match(/^[A-Z]+/)[0]
  let n = 0
  for (const l of litery) n = n * 26 + (l.charCodeAt(0) - 64)
  return n - 1
}

async function parsujCennik(buffer) {
  const zip = await JSZip.loadAsync(buffer)
  const sharedXml = (await zip.file('xl/sharedStrings.xml')?.async('string')) ?? ''
  const shared = (sharedXml.match(/<si>[\s\S]*?<\/si>/g) ?? []).map(tekstZSi)
  const nazwa = Object.keys(zip.files)
    .filter((n) => /^xl\/worksheets\/sheet\d+\.xml$/.test(n))
    .sort()[0]
  if (!nazwa) throw new Error('W pliku nie ma żadnego arkusza.')
  const sheet = await zip.file(nazwa).async('string')

  const wiersze = []
  for (const row of sheet.match(/<row[^>]*>[\s\S]*?<\/row>/g) ?? []) {
    const komorki = []
    for (const c of row.match(/<c[^>]*\/>|<c[^>]*>[\s\S]*?<\/c>/g) ?? []) {
      const ref = c.match(/\sr="([A-Z]+\d+)"/)?.[1]
      if (!ref) continue
      const typ = c.match(/\st="([^"]+)"/)?.[1]
      const v = c.match(/<v>([\s\S]*?)<\/v>/)?.[1]
      const kol = kolumna(ref)
      if (typ === 's') {
        const i = Number(v)
        if (shared[i] !== undefined) komorki.push({ kol, tekst: shared[i] })
      } else if (typ === 'inlineStr') {
        komorki.push({ kol, tekst: tekstZSi(c) })
      } else if (v !== undefined && v !== '') {
        const liczba = Number(v)
        if (Number.isFinite(liczba)) komorki.push({ kol, liczba })
        else komorki.push({ kol, tekst: v })
      }
    }
    if (komorki.length === 0) continue
    komorki.sort((a, b) => a.kol - b.kol)
    const teksty = komorki.filter((k) => k.tekst !== undefined)
    const cena = komorki.find((k) => k.liczba !== undefined && k.liczba > 0)
    if (!cena || teksty.length === 0) continue
    const partNumber = teksty[0].tekst.replace(/\s+/g, '').trim()
    if (!partNumber || partNumber.length < 3) continue
    wiersze.push({
      partNumber,
      description:
        teksty
          .slice(1)
          .map((t) => t.tekst.replace(/\s+/g, ' ').trim())
          .filter(Boolean)
          .join(' ') || null,
      unitPrice: Math.round(cena.liczba * 100),
    })
  }
  if (wiersze.length === 0) throw new Error('Nie znalazłem w arkuszu ani jednego wiersza z numerem i ceną.')

  // Odpowiedniki katalogowe — ten sam sprzęt pod numerem dystrybutora („/S")
  // i pod europejskim numerem ze sklepu („/3"). Lista jak w src/lib/cennik-xlsx.ts.
  const odpowiedniki = {
    '3100-0001/S': ['3100-0001/3'], // Magicard Pronto100
    '3652-5021/S': ['3652-5021/3'], // Magicard 600 Duo
  }
  for (const w of [...wiersze]) {
    for (const inny of odpowiedniki[w.partNumber] ?? []) {
      if (wiersze.some((x) => x.partNumber === inny)) continue
      wiersze.push({ ...w, partNumber: inny, description: `${w.description ?? ''} (w cenniku ${w.partNumber})`.trim() })
    }
  }

  return wiersze
}

const url = readFileSync('.env', 'utf8').match(/^DATABASE_URL="([^"]+)"/m)?.[1]
if (!url) {
  console.error('Brak DATABASE_URL w .env')
  process.exit(1)
}

const wiersze = await parsujCennik(readFileSync(plik))
const kod = `${dostawca.toUpperCase().replace(/[^A-Z0-9]+/g, '-')}-${od.slice(0, 7).replace('-', '-')}`
const client = new Client({ connectionString: url })
await client.connect()

try {
  await client.query('BEGIN')
  // Nowa wersja cennika zastępuje poprzednią z tego samego miesiąca
  await client.query('DELETE FROM price_concessions WHERE "requestId" = $1 AND source = $2', [kod, 'CENNIK'])

  const id = randomUUID()
  await client.query(
    `INSERT INTO price_concessions (id, source, "requestId", reseller, distributor, currency, "startDate", "endDate", "fileName", "createdAt")
     VALUES ($1, 'CENNIK', $2, 'TAKMA', $3, 'PLN', $4::date, $5::date, $6, now())`,
    [id, kod, dostawca, od, doKiedy, plik.split('/').pop()]
  )

  for (const w of wiersze) {
    await client.query(
      `INSERT INTO price_concession_items (id, "concessionId", "partNumber", description, "minQty", "unitPrice", "usedQty")
       VALUES ($1, $2, $3, $4, 1, $5, 0)`,
      [randomUUID(), id, w.partNumber, w.description, w.unitPrice]
    )
  }

  await client.query('COMMIT')
  console.log(`Wczytano cennik ${kod} (${dostawca}): ${wiersze.length} pozycji, ważny ${od} – ${doKiedy}.`)
} catch (e) {
  await client.query('ROLLBACK')
  console.error('Nie udało się wczytać cennika:', e.message)
  process.exitCode = 1
} finally {
  await client.end()
}
