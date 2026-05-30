import { prisma } from '../src/lib/db'
import { transferRibbonProducts } from '../src/data/transfer-ribbon-products'

async function main() {
  const pns: string[] = []
  for (const p of transferRibbonProducts) for (const v of (p.variants ?? [])) pns.push(v.partNumber)
  console.log('PN-ów taśm:', pns.length)
  const before = await prisma.stockCache.count({ where: { partNumber: { in: pns } } })
  console.log('Cache taśm przed czyszczeniem:', before)
  const res = await prisma.stockCache.deleteMany({ where: { partNumber: { in: pns } } })
  console.log('Usunięto wpisów:', res.count)
  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
