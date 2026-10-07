// Fresh supplier audit. --apply updates only Zebra mobile-computer cache rows.
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
require('@next/env').loadEnvConfig(process.cwd())
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename)
const originalLoad = Module._load
Module._load = function (id, parent, main) {
  return originalLoad.call(this, id.startsWith('@/') ? path.resolve('src', id.slice(2)) : id, parent, main)
}
const { products, getCatalogNetPrice } = require('../src/data/products.ts')
const { lookupStock: ingram } = require('../src/lib/ingram.ts')
const { lookupStock: bluestar } = require('../src/lib/bluestar.ts')
const { lookupStock: jarltech } = require('../src/lib/jarltech.ts')
const { selectTerminalPurchasePrice } = require('../src/lib/zebra-terminal-pricing.ts')
const { selectPurchasePrice, resolveBlueStarUnitPrice } = require('../src/lib/price-selection.ts')
const { Pool } = require('pg')
const database = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 })
async function upsert(table, data) {
  if (!['StockCache', 'JarltechStockCache'].includes(table)) throw new Error('Invalid cache table')
  const keys = Object.keys(data)
  const columns = keys.map(k => `"${k}"`).join(', ')
  const updates = keys.filter(k => k !== 'partNumber').map(k => `"${k}" = EXCLUDED."${k}"`).join(', ')
  await database.query(`INSERT INTO "${table}" (${columns}) VALUES (${keys.map((_, i) => `$${i + 1}`).join(', ')}) ON CONFLICT ("partNumber") DO UPDATE SET ${updates}`, keys.map(k => data[k]))
}
const terminals = products.filter(p => p.manufacturerId === 'zebra' && p.categoryId === 'terminale-mobilne')
const pns = [...new Set(terminals.flatMap(p => p.variants?.length ? p.variants.map(v => v.partNumber)
  : p.specifications.filter(s => s.name === 'Part Number').map(s => s.value)))]
const apply = process.argv.includes('--apply')
const reportArg = process.argv.indexOf('--report')
const reportFile = reportArg >= 0 ? process.argv[reportArg + 1] : '/tmp/takma-zebra-pricing/audit.json'
const round = x => Math.round(x * 100) / 100
async function readConnector(supplier, batch) {
  // The server-side connector also avoids local ISP routing/TLS failures.
  const url = new URL(`https://www.takma.com.pl/api/${supplier}/stock`)
  url.searchParams.set('pn', batch.join(','))
  url.searchParams.set('audit', String(Date.now()))
  const response = await fetch(url, { signal: AbortSignal.timeout(60000) })
  if (!response.ok) throw new Error(`${supplier} connector HTTP ${response.status}`)
  const data = await response.json()
  if (!Array.isArray(data.results) || data.results.length !== batch.length) throw new Error(`Incomplete ${supplier} response`)
  return data.results
}
async function main() {
  const nbp = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json', { signal: AbortSignal.timeout(10000) })
  if (!nbp.ok) throw new Error('Cannot verify EUR/PLN rate')
  const rate = (await nbp.json()).rates[0]
  const before = new Map((await database.query('SELECT * FROM "StockCache" WHERE "partNumber" = ANY($1::text[])', [pns])).rows.map(r => [r.partNumber, r]))
  const report = { checkedAt: new Date().toISOString(), exchangeRate: rate, applied: apply, products: terminals.map(p => ({ slug: p.slug,
    partNumbers: p.variants?.length ? p.variants.map(v => v.partNumber) : p.specifications.filter(s => s.name === 'Part Number').map(s => s.value) })), results: [] }
  for (let offset = 0; offset < pns.length; offset += 20) {
    const batch = pns.slice(offset, offset + 20)
    const [ings, bss, jts] = await Promise.all([ingram(batch), readConnector('bluestar', batch), jarltech(batch)])
    for (let i = 0; i < ings.length; i++) {
      if (!ings[i].found) {
        const retry = await ingram([ings[i].partNumber])
        if (retry[0]?.found) ings[i] = retry[0]
      }
    }
    if (!ings.some(r => r.found) && !bss.some(r => r.found) && !jts.some(r => r.found)) throw new Error('All suppliers returned no confirmed offers; stopping without overwriting this batch')
    for (const pn of batch) {
      const ing = ings.find(r => r.partNumber === pn), bs = bss.find(r => r.partNumber === pn), jt = jts.find(r => r.partNumber === pn)
      const ingPLN = ing?.found ? ing.ingramPrice : undefined
      const jtPLN = jt?.found && jt.unitPrice ? round(jt.unitPrice * rate.mid) : undefined
      const bsPLN = bs?.found && bs.unitPrice ? resolveBlueStarUnitPrice(bs.unitPrice * rate.mid, bs.multipleQty, jtPLN ?? ingPLN ?? getCatalogNetPrice(pn), bs.multipleQty || 1).price : undefined
      const selected = selectTerminalPurchasePrice({ ingram: ingPLN, bluestar: bsPLN, jarltech: jtPLN }, { ingram: (ing?.stockPL || 0) + (ing?.stockDE || 0), bluestar: bs?.inventory || 0, jarltech: jt?.inventory || 0 }, getCatalogNetPrice(pn))
      const stockPL = ing?.stockPL || 0
      const stockDE = (ing?.stockDE || 0) + (bs?.inventory || 0) + (jt?.inventory || 0)
      const inDelivery = (ing?.inDelivery || 0) + (bs?.qtyExpected || 0) + (jt?.incomingQty || 0)
      const price = selected.best ? round(selected.best * 1.10) : null
      const availability = stockPL + stockDE > 0 ? 'available' : inDelivery > 0 ? 'on-order' : 'unavailable'
      const checkedAt = new Date()
      const row = { partNumber: pn, found: !!price, price, priceBrutto: price ? round(price * 1.23) : null,
        ingramPrice: selected.best ?? null, stockPL, stockDE, inDelivery, totalStock: stockPL + stockDE + inDelivery,
        availability, deliveryText: stockPL ? `Dostępny — wysyłka 24h (${stockPL} szt.)` : stockDE ? `Dostępny — wysyłka 2-3 dni (${stockDE} szt.)` : inDelivery ? `W dostawie (${inDelivery} szt.)` : 'Brak potwierdzonej dostępności', lastSync: checkedAt }
      if (apply) {
        if (jt) {
          const data = { found: jt.found, unitPrice: jt.unitPrice ?? null, currency: jt.currency || 'EUR', inventory: jt.inventory, incomingQty: jt.incomingQty,
            incomingDate: jt.incomingDate ?? null, totalStock: jt.totalStock, jarltechId: jt.jarltechId ?? null, availability: jt.availability, deliveryText: jt.deliveryText, lastSync: checkedAt }
          await upsert('JarltechStockCache', { partNumber: pn, ...data })
        }
        await upsert('StockCache', row)
      }
      report.results.push({ ...row, source: selected.source, rejected: selected.rejected, suppliers: { ingram: ing, bluestar: bs, jarltech: jt }, previousPrice: before.get(pn)?.price ?? null, previousSync: before.get(pn)?.lastSync ?? null })
    }
    fs.mkdirSync(path.dirname(reportFile), { recursive: true })
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))
    console.log(`AUDIT ${Math.min(offset + 20, pns.length)}/${pns.length}; priced ${report.results.filter(r => r.price).length}; applied ${apply}`)
  }
  console.log(`AUDIT COMPLETE: ${terminals.length} products, ${pns.length} PN, ${report.results.filter(r => !r.price).length} without confirmed price. Report: ${reportFile}`)
}
main().catch(error => { console.error(error); process.exitCode = 1 }).finally(() => database.end())
