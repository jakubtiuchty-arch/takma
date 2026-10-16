const fs = require('node:fs'), vm = require('node:vm'), ts = require('typescript'), assert = require('node:assert/strict')
const pn = 'SP-TH240-0041'
async function scenario({ availability = 'on-order', inventory = 9, reject = false, cachedJarltech = false }) {
  const row = { partNumber: pn, found: true, price: 100, priceBrutto: 123, stockPL: 0, stockDE: availability === 'available' ? 3 : 0, inDelivery: 4, totalStock: 4, availability, deliveryText: 'Oczekiwana dostawa', lastSync: new Date() }
  const calls = [], writes = []
  const prisma = {
    stockCache: { findMany: async () => [row], update: async args => { writes.push(args); return args } },
    jarltechStockCache: { findMany: async () => cachedJarltech ? [{ partNumber: pn, found: true, inventory: 0, lastSync: new Date() }] : [], upsert: async args => args },
  }
  const mocks = {
    '@/lib/ingram': { lookupStock: async () => { throw new Error('unexpected Ingram request') } },
    '@/lib/bluestar': { lookupStock: async () => { throw new Error('unexpected BlueStar request') } },
    '@/lib/jarltech': { lookupStock: async pns => { calls.push(pns); if (reject) throw new Error('fixture API failure'); return [{ partNumber: pn, found: true, inventory, incomingQty: 0, totalStock: inventory, availability: inventory ? 'available' : 'unavailable', deliveryText: 'Dostępny w EU' }] } },
    '@/lib/db': { prisma },
    '@/data/transfer-ribbon-products': { isRibbonPN: () => false },
    '@/data/products': { products: [], isLabelPN: () => false, getCatalogNetPrice: () => undefined },
    '@/data/rfid-label-products': { rfidLabelPartNumbers: new Set() },
    '@/lib/stock-overrides': { applyStockOverrides: x => x, MANUAL_STOCK_OVERRIDES: new Set() },
    '@/lib/price-selection': {},
    '@/lib/zebra-terminal-catalog': { zebraTerminalPartNumbers: new Set(), stockCacheMaxAge: (_, age) => age },
    '@/lib/zebra-terminal-pricing': { ZEBRA_TERMINAL_CACHE_MAX_AGE_MS: 60000 },
  }
  const code = ts.transpileModule(fs.readFileSync('src/lib/unified-stock.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const exports = {}
  vm.runInNewContext(code, { exports, require: id => { assert.ok(id in mocks, `unmocked dependency ${id}`); return mocks[id] }, console: { log() {}, warn() {}, error() {} }, setTimeout, clearTimeout, Headers, AbortSignal, process: { env: {} } })
  const result = await exports.lookupUnifiedStock([pn])
  assert.equal(result.status, 200)
  return { result: result.body.results[0], calls, writes }
}
async function main() {
  const available = await scenario({})
  assert.equal(available.calls.length, 1, 'incoming supply must not hide missing Jarltech lookup')
  assert.equal(available.result.stockDE, 9)
  assert.equal(available.result.availability, 'available')
  assert.equal(available.result.price, 100, 'stock refresh preserves existing sale price')
  assert.equal(available.result.inDelivery, 4, 'existing incoming supply is preserved')
  assert.equal(available.writes.length, 1, 'confirmed stock is cached for following requests')
  for (const options of [{ inventory: 0 }, { reject: true }]) {
    const { result } = await scenario(options)
    assert.equal(result.availability, 'on-order', 'no on-hand result must preserve incoming status')
    assert.equal(result.stockDE, 0)
  }
  assert.equal((await scenario({ availability: 'available' })).calls.length, 0, 'existing available inventory keeps the fast path')
  assert.equal((await scenario({ cachedJarltech: true })).calls.length, 0, 'a current Jarltech cache avoids redundant lookup')
  console.log('PASS: on-order stock checks missing Jarltech inventory; zero/error and existing-cache behavior preserved')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
