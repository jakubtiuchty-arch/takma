import { prisma } from '../src/lib/db'
import { getAllLabelPartNumbers } from '../src/data/products'

/**
 * Czyści StockCache dla WSZYSTKICH etykiet (termiczne + termotransferowe), żeby
 * następne /api/stock przeliczyło cenę świeżo (np. po zmianie marży na 15%).
 * UWAGA: uruchamiać DOPIERO PO DEPLOYU nowego kodu — inaczej prod ze starą marżą
 * przeliczy cache z powrotem na starą wartość.
 *
 * Użycie: npx tsx --env-file=.env --env-file=.env.local scripts/clear-label-cache.ts
 */
async function main() {
  const pns = Array.from(getAllLabelPartNumbers())
  console.log('PN-ów etykiet (termiczne + TT):', pns.length)
  const before = await prisma.stockCache.count({ where: { partNumber: { in: pns } } })
  console.log('Cache etykiet przed czyszczeniem:', before)
  const res = await prisma.stockCache.deleteMany({ where: { partNumber: { in: pns } } })
  console.log('Usunięto wpisów:', res.count)
  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
