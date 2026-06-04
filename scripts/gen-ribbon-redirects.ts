import { transferRibbonProducts } from '../src/data/transfer-ribbon-products'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Generuje src/data/ribbon-redirects.ts — mapę STARYCH slugów produktów taśm
 * (sprzed migracji na serie+warianty) → nowy URL wariantu. Stary slug miał format
 * `zebra-tasma-{materiał}-{szer}mm-x-{dł}m-{seria}`, a PN-y nie zmieniły się przy
 * migracji, więc odtwarzamy stary slug z nowych wariantów i kierujemy 301 na
 * `/produkt/{seria}/{szer}x{dł}/{PN}`.
 *
 * Uruchom: npx tsx scripts/gen-ribbon-redirects.ts
 */
function num(s?: string): string | null {
  const m = s?.match(/(\d+(?:[.,]\d+)?)/)
  return m ? m[1].replace(',', '.') : null
}

function materialPL(productId: string): string {
  if (productId.includes('wax-resin')) return 'woskowo-zywiczna'
  if (productId.includes('-resin') || productId.includes('chemresist')) return 'zywiczna'
  return 'woskowa' // *-wax
}

const map: Record<string, string> = {}
let skipped = 0

for (const product of transferRibbonProducts) {
  const seriesNum = product.id.match(/zebra-(\d+)/)?.[1]
  if (!seriesNum) { skipped++; continue }
  const mat = materialPL(product.id)
  for (const v of (product.variants ?? [])) {
    const w = num(v.attributes['Szerokość'])
    const l = num(v.attributes['Długość'])
    if (!w || !l) continue
    const oldSlug = `/produkt/zebra-tasma-${mat}-${w}mm-x-${l}m-${seriesNum}`
    const newUrl = `/produkt/${product.slug}/${w}x${l}/${v.partNumber}`
    // pierwszy wariant dla danego (materiał, seria, szer×dł) wygrywa — stary slug nie kodował rdzenia
    if (!map[oldSlug]) map[oldSlug] = newUrl
  }
}

const entries = Object.keys(map).sort().map(k => `  '${k}': '${map[k]}',`).join('\n')
const content = `/**
 * Stare slugi produktów taśm (1 SKU = 1 produkt, sprzed migracji na serie) → 301 na
 * nowy URL wariantu serii. Wygenerowane przez scripts/gen-ribbon-redirects.ts.
 * Konsumowane w src/middleware.ts.
 */
export const OLD_RIBBON_SLUG_REDIRECTS: Record<string, string> = {
${entries}
}
`
const out = path.join(process.cwd(), 'src/data/ribbon-redirects.ts')
fs.writeFileSync(out, content)
console.log('zapisano', out, '—', Object.keys(map).length, 'redirectów; pominięto', skipped)
