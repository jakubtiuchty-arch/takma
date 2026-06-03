import { lookupStock as bluestarLookup } from '../src/lib/bluestar'
import { transferRibbonProducts } from '../src/data/transfer-ribbon-products'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Generuje src/data/ribbon-carton-qty.ts — mapę PN → liczba rolek w kartonie
 * (BlueStar multipleQtyForSales). Kupując cały karton, cena za rolkę jest niższa
 * (marża 15% zamiast 20%) — wykorzystywane w SmartPrice.
 *
 * Uruchamianie: npx tsx --env-file=.env --env-file=.env.local scripts/gen-ribbon-carton-qty.ts
 */
async function main() {
  const pns = Array.from(
    new Set(transferRibbonProducts.flatMap(p => (p.variants ?? []).map(v => v.partNumber))),
  )
  console.log('PN-ów taśm:', pns.length)

  const map: Record<string, number> = {}      // mult > 1 → liczba rolek w kartonie
  const singles = new Set<string>()            // mult === 1 → produkt jednorolkowy (brak kartonu)

  // Seed z istniejącej mapy — flaky run BlueStar nie może ZGUBIĆ już znalezionego PN.
  // Tylko dodajemy/aktualizujemy; ubytki wobec poprzedniej wersji nie kasują wpisu.
  const existingPath = path.join(process.cwd(), 'src/data/ribbon-carton-qty.ts')
  if (fs.existsSync(existingPath)) {
    const prev = fs.readFileSync(existingPath, 'utf8')
    for (const m of Array.from(prev.matchAll(/'([A-Z0-9-]+)':\s*(\d+)/g))) {
      const q = parseInt(m[2], 10)
      if (q > 1 && q <= 24) map[m[1]] = q     // odrzuć ewentualne anomalie z poprzedniej wersji
    }
    console.log('seed z istniejącej mapy:', Object.keys(map).length, 'wpisów')
  }
  // UWAGA: BlueStar wysyła całą listę PN w jednym żądaniu (itemList) i bywa, że gubi część
  // pozycji (zwraca podzbiór) → brakujące PN-y trafiają do cache jako found:false. Te misy są
  // NIEPRZEWIDYWALNE — ten sam PN raz się znajdzie, raz nie. Cache found:false żyje tylko 30 s
  // (CACHE_TTL_NOT_FOUND), więc po odczekaniu retry trafia świeżo do API.
  // Strategia: mały batch (5) + wiele rund z retry; odpoczynek > 30 s między rundami, by wygasł
  // cache not-found. Kończymy, gdy nic już nie zostało albo 2 rundy z rzędu bez postępu.
  const BATCH = 5
  const MAX_ROUNDS = 8
  const COOLDOWN_MS = 32 * 1000
  let pending = pns.filter(pn => map[pn] === undefined) // tylko brakujące — seedowane są gotowe
  console.log('do dociągnięcia:', pending.length)
  let staleRounds = 0
  for (let round = 1; round <= MAX_ROUNDS && pending.length > 0; round++) {
    const resolvedThisRound: string[] = []
    for (let i = 0; i < pending.length; i += BATCH) {
      const slice = pending.slice(i, i + BATCH)
      const res = await bluestarLookup(slice)
      const byPn = new Map(res.map(b => [b.partNumber, b]))
      for (const pn of slice) {
        const b = byPn.get(pn)
        if (!b?.found) continue                // nieznalezione → zostaje w pending na kolejną rundę
        resolvedThisRound.push(pn)
        // Realne kartony taśm Zebry to 6/10/12/18. Większe wartości (np. 96) to ilość
        // paletowa/anomalia BlueStar — „Zamów karton (96 szt.)" jednym kliknięciem byłoby
        // mylące i ryzykowne, więc traktujemy jako brak kartonu (próg bezpieczeństwa 24).
        const SANE_MAX = 24
        if (b.multipleQty && b.multipleQty > 1 && b.multipleQty <= SANE_MAX) map[pn] = b.multipleQty
        else if (b.multipleQty && b.multipleQty > SANE_MAX) {
          console.log(`  ANOMALIA: ${pn} mult=${b.multipleQty} (> ${SANE_MAX}) → pomijam`)
        } else singles.add(pn)                 // mult === 1 → brak kartonu, nie ponawiamy
      }
      await new Promise(r => setTimeout(r, 300))
    }
    pending = pending.filter(pn => !resolvedThisRound.includes(pn))
    console.log(
      `runda ${round}: rozwiązano ${resolvedThisRound.length} | karton: ${Object.keys(map).length} | jednorolkowe: ${singles.size} | zostało: ${pending.length}`,
    )
    if (resolvedThisRound.length === 0) { if (++staleRounds >= 2) break } else staleRounds = 0
    if (pending.length > 0 && round < MAX_ROUNDS) {
      await new Promise(r => setTimeout(r, COOLDOWN_MS)) // czekamy aż wygaśnie cache not-found
    }
  }
  console.log(
    `\nznaleziono carton dla ${Object.keys(map).length} PN; jednorolkowych (bez kartonu): ${singles.size}; nadal bez danych BlueStar: ${pending.length}`,
  )
  if (pending.length) console.log('bez danych:', pending.join(', '))

  const sorted = Object.keys(map).sort()
  const entries = sorted.map(pn => `  '${pn}': ${map[pn]},`).join('\n')
  const content = `/**
 * Liczba rolek w kartonie (opakowaniu) per taśma — snapshot z BlueStar (multipleQtyForSales).
 * Wygenerowane przez scripts/gen-ribbon-carton-qty.ts; regeneruj, jeśli zmieni się pakowanie.
 * Kupując cały karton, cena za rolkę jest niższa (marża 15% zamiast 20%).
 * Brak PN w mapie = brak danych o kartonie → opcja kartonowa nie jest pokazywana.
 */
export const RIBBON_CARTON_QTY: Record<string, number> = {
${entries}
}

/** Zwraca liczbę rolek w kartonie dla danego PN taśmy (lub null, jeśli nieznana). */
export function ribbonCartonQty(partNumber: string): number | null {
  return RIBBON_CARTON_QTY[partNumber] ?? null
}
`
  const out = path.join(process.cwd(), 'src/data/ribbon-carton-qty.ts')
  fs.writeFileSync(out, content)
  console.log('zapisano', out, '—', sorted.length, 'wpisów')
}

main().catch(e => { console.error(e); process.exit(1) })
