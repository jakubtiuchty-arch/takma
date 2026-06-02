import { prisma } from '../src/lib/db'
import { thermalLabelSeries } from '../src/data/thermal-label-series'
import { products } from '../src/data/products'

/**
 * Czyści StockCache dla wszystkich wariantów etykiet termicznych (12 serii),
 * żeby przeliczyły się świeżo z poprawnym podziałem cen pakietowych BlueStar.
 * Uruchamianie: npx tsx --env-file=.env scripts/clear-thermal-cache.ts
 */
async function main() {
  const productIds = new Set(thermalLabelSeries.map(s => s.productId))
  const pns: string[] = []
  for (const p of products) {
    if (!productIds.has(p.id)) continue
    for (const v of (p.variants ?? [])) pns.push(v.partNumber)
  }
  const unique = Array.from(new Set(pns))
  console.log('PN-ów etykiet termicznych:', unique.length)
  const before = await prisma.stockCache.count({ where: { partNumber: { in: unique } } })
  console.log('Wpisów w StockCache przed:', before)
  const res = await prisma.stockCache.deleteMany({ where: { partNumber: { in: unique } } })
  console.log('Usunięto wpisów:', res.count)
  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
