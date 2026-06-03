import { lookupStock as bluestarLookup } from '../src/lib/bluestar'
import { getAllLabelPartNumbers } from '../src/data/products'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Generuje src/data/label-carton-qty.ts — mapę PN → liczba rolek w kartonie etykiet
 * (BlueStar multipleQtyForSales). Kupując cały karton, cena za rolkę jest niższa
 * (marża 10% zamiast 15%) — wykorzystywane w SmartPrice.
 *
 * Uruchamianie: npx tsx --env-file=.env --env-file=.env.local scripts/gen-label-carton-qty.ts
 */
async function main() {
  const pns = Array.from(getAllLabelPartNumbers())
  console.log('PN-ów etykiet:', pns.length)

  const map: Record<string, number> = {}      // mult > 1 → liczba rolek w kartonie
  const singles = new Set<string>()            // mult === 1 → produkt jednorolkowy (brak kartonu)

  // Seed z istniejącej mapy — flaky run BlueStar nie może ZGUBIĆ już znalezionego PN.
  const existingPath = path.join(process.cwd(), 'src/data/label-carton-qty.ts')
  if (fs.existsSync(existingPath)) {
    const prev = fs.readFileSync(existingPath, 'utf8')
    for (const m of Array.from(prev.matchAll(/'([A-Z0-9-]+)':\s*(\d+)/g))) {
      const q = parseInt(m[2], 10)
      if (q > 1 && q <= 24) map[m[1]] = q
    }
    console.log('seed z istniejącej mapy:', Object.keys(map).length, 'wpisów')
  }

  // Mały batch (10) + wiele rund z retry; odpoczynek > 30 s między rundami (cache not-found = 30 s).
  const BATCH = 10
  const MAX_ROUNDS = 8
  const COOLDOWN_MS = 32 * 1000
  let pending = pns.filter(pn => map[pn] === undefined)
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
        if (!b?.found) continue
        resolvedThisRound.push(pn)
        // Realne kartony etykiet to 4/5/6/10/12… Większe wartości (>24) = paleta/anomalia → pomijamy.
        const SANE_MAX = 24
        if (b.multipleQty && b.multipleQty > 1 && b.multipleQty <= SANE_MAX) map[pn] = b.multipleQty
        else if (b.multipleQty && b.multipleQty > SANE_MAX) {
          console.log(`  ANOMALIA: ${pn} mult=${b.multipleQty} (> ${SANE_MAX}) → pomijam`)
        } else singles.add(pn)
      }
      await new Promise(r => setTimeout(r, 300))
    }
    pending = pending.filter(pn => !resolvedThisRound.includes(pn))
    console.log(
      `runda ${round}: rozwiązano ${resolvedThisRound.length} | karton: ${Object.keys(map).length} | jednorolkowe: ${singles.size} | zostało: ${pending.length}`,
    )
    if (resolvedThisRound.length === 0) { if (++staleRounds >= 2) break } else staleRounds = 0
    if (pending.length > 0 && round < MAX_ROUNDS) {
      await new Promise(r => setTimeout(r, COOLDOWN_MS))
    }
  }
  console.log(
    `\nznaleziono carton dla ${Object.keys(map).length} PN; jednorolkowych: ${singles.size}; nadal bez danych: ${pending.length}`,
  )

  const sorted = Object.keys(map).sort()
  const entries = sorted.map(pn => `  '${pn}': ${map[pn]},`).join('\n')
  const content = `/**
 * Liczba rolek w kartonie (opakowaniu) per etykieta — snapshot z BlueStar (multipleQtyForSales).
 * Wygenerowane przez scripts/gen-label-carton-qty.ts; regeneruj, jeśli zmieni się pakowanie.
 * Kupując cały karton, cena za rolkę jest niższa (marża 10% zamiast 15%).
 * Brak PN w mapie = brak danych o kartonie → opcja kartonowa nie jest pokazywana.
 */
export const LABEL_CARTON_QTY: Record<string, number> = {
${entries}
}

/** Zwraca liczbę rolek w kartonie dla danego PN etykiety (lub null, jeśli nieznana). */
export function labelCartonQty(partNumber: string): number | null {
  return LABEL_CARTON_QTY[partNumber] ?? null
}
`
  fs.writeFileSync(existingPath, content)
  console.log('zapisano', existingPath, '—', sorted.length, 'wpisów')
}

main().catch(e => { console.error(e); process.exit(1) })
