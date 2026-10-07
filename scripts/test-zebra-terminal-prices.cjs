const fs = require('node:fs'), path = require('node:path'), Module = require('node:module'), assert = require('node:assert/strict'), ts = require('typescript')
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, f)
const pn = 'TC201G-3S3P6BA00-A6'
let cached = [], jtCached = [], supplierCalls = 0, written = []
let ing = { partNumber: pn, found: true, ingramPrice: 900, stockPL: 10, stockDE: 0, inDelivery: 0 }
let bs = { partNumber: pn, found: true, unitPrice: 300, inventory: 10, qtyExpected: 0, multipleQty: 1 }
let jt = { partNumber: pn, found: true, unitPrice: 275, inventory: 10, incomingQty: 0, totalStock: 10, availability: 'available', lastSync: new Date().toISOString() }
const prisma = { stockCache: { findMany: async () => cached, upsert: async x => { written.push(x); return x.create }, update: async () => ({}) },
  jarltechStockCache: { findMany: async () => jtCached, upsert: async x => x.create } }
const original = Module._load
Module._load = function (id, parent, main) {
  if (id === '@/lib/db') return { prisma }
  if (id === '@/lib/ingram') return { lookupStock: async () => [ing] }
  if (id === '@/lib/bluestar') return { lookupStock: async () => [bs] }
  if (id === '@/lib/jarltech') return { lookupStock: async () => { supplierCalls++; return [jt] } }
  if (id === '@/data/products') return { products: [{ slug: 'zebra-tc201', manufacturerId: 'zebra', categoryId: 'terminale-mobilne', variants: [{ partNumber: pn }] }], isLabelPN: () => false, getCatalogNetPrice: () => 1000 }
  if (id === '@/data/transfer-ribbon-products') return { isRibbonPN: () => false }
  return original.call(this, id.startsWith('@/') ? path.resolve('src', id.slice(2)) : id, parent, main)
}
global.fetch = async () => ({ ok: true, json: async () => ({ rates: [{ mid: 4 }] }) })
const { lookupUnifiedStock } = require('../src/lib/unified-stock.ts')
const { selectTerminalPurchasePrice } = require('../src/lib/zebra-terminal-pricing.ts')
const { stockCacheMaxAge } = require('../src/lib/zebra-terminal-catalog.ts')
async function main() {
  assert.equal(stockCacheMaxAge(pn, 86400000), 3600000)
  assert.equal(stockCacheMaxAge(pn, 0), 0)
  assert.equal(stockCacheMaxAge('ZD4A042-30EM00EZ', 86400000), 86400000)
  cached = [{ partNumber: pn, found: true, price: 440, ingramPrice: 400, stockPL: 10, stockDE: 0, inDelivery: 0, totalStock: 10, availability: 'available', lastSync: new Date(Date.now() - 7200000) }]
  jtCached = [{ ...jt, unitPrice: 100, lastSync: new Date(Date.now() - 7200000) }]
  let row = (await lookupUnifiedStock([pn])).body.results[0]
  assert.equal(row.price, 990, 'old supplier quote must not lower the refreshed selling price')
  assert.equal(row.ingramPrice, 900)
  assert.equal(supplierCalls, 1, 'stale Jarltech price must be checked live')
  assert.equal(written[0].update.price, 990, 'refreshed price must be saved before returning')
  cached[0].lastSync = new Date()
  supplierCalls = 0
  row = (await lookupUnifiedStock([pn])).body.results[0]
  assert.equal(row.price, 990, 'fresh aggregate with stale supplier quote must also be recalculated')
  assert.equal(supplierCalls, 1)
  assert.deepEqual(selectTerminalPurchasePrice({ ingram: 1000, jarltech: 800 }, { ingram: 5, bluestar: 0, jarltech: 0 }, 1100).best, 1000, 'an out-of-stock cheap quote must not price an order fulfilled by a dearer supplier')
  cached = []; jtCached = []; ing = { ...ing, found: false, stockPL: 0 }; bs = { ...bs, found: false, inventory: 0 }; jt = { ...jt, found: false, inventory: 0 }
  row = (await lookupUnifiedStock([pn])).body.results[0]
  assert.equal(row.found, false)
  assert.equal(row.price, undefined, 'no supplier price must never become a catalog-price offer')
  console.log('PASS: terminal freshness, stale supplier rejection, available purchase cost, 10% markup, durable write, missing quote')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
