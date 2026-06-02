import { prisma } from '../src/lib/db'
import { transferLabelProducts } from '../src/data/transfer-label-products'
import { transferRibbonProducts } from '../src/data/transfer-ribbon-products'
import { products } from '../src/data/products'

/**
 * Czyści StockCache dla wariantów wskazanego produktu (po slug/id), żeby następne
 * zapytanie /api/stock wykonało świeży live-lookup i write-through.
 *
 * Użycie: npx tsx scripts/clear-product-cache.ts <slug> [--sample N]
 */
async function main() {
  const slug = process.argv[2]
  const sampleIdx = process.argv.indexOf('--sample')
  const sampleN = sampleIdx > -1 ? parseInt(process.argv[sampleIdx + 1] || '0', 10) : 0

  if (!slug) {
    console.error('Podaj slug produktu, np: npx tsx scripts/clear-product-cache.ts zebra-z-ultimate-3000t-white')
    process.exit(1)
  }

  const all = [...transferLabelProducts, ...transferRibbonProducts, ...products]
  const product = all.find(p => p.slug === slug || p.id === slug)
  if (!product) {
    console.error(`Nie znaleziono produktu o slug/id "${slug}".`)
    process.exit(1)
  }

  let pns = (product.variants ?? []).map(v => v.partNumber)
  // unikalne
  pns = Array.from(new Set(pns))
  if (sampleN > 0) pns = pns.slice(0, sampleN)

  console.log(`Produkt: ${product.name}`)
  console.log(`PN-ów do wyczyszczenia: ${pns.length}${sampleN ? ` (próbka ${sampleN})` : ''}`)

  const before = await prisma.stockCache.count({ where: { partNumber: { in: pns } } })
  console.log('Wpisów w StockCache przed:', before)

  const res = await prisma.stockCache.deleteMany({ where: { partNumber: { in: pns } } })
  console.log('Usunięto wpisów:', res.count)

  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
