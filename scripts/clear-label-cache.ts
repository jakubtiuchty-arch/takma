import { prisma } from '../src/lib/db'
import { transferLabelProducts } from '../src/data/transfer-label-products'

async function main() {
  const pns: string[] = []
  for (const p of transferLabelProducts) for (const v of (p.variants ?? [])) pns.push(v.partNumber)
  console.log('PN-ów etykiet termotransferowych:', pns.length)
  const before = await prisma.stockCache.count({ where: { partNumber: { in: pns } } })
  console.log('Cache etykiet przed czyszczeniem:', before)
  const res = await prisma.stockCache.deleteMany({ where: { partNumber: { in: pns } } })
  console.log('Usunięto wpisów:', res.count)
  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
