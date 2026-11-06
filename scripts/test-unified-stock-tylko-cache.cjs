// lookupUnifiedStock({ tylkoCache: true }): stary wpis z cache wraca z ceną, PN bez wpisu jako found: false,
// a do dystrybutorów (Ingram, BlueStar, Jarltech na żywo, fetch) nie wychodzi żadne zapytanie i nic nie jest zapisywane.
const fs = require('node:fs'), vm = require('node:vm'), ts = require('typescript'), assert = require('node:assert/strict')
async function main() {
  const staryWpis = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  const wiersze = [
    { partNumber: 'QL820NWBCZG1', found: true, price: 900, priceBrutto: 1107, ingramPrice: 800, stockPL: 0, stockDE: 2, inDelivery: 0, totalStock: 2, availability: 'available', deliveryText: 'Dostępny', lastSync: staryWpis },
    { partNumber: 'TD4410DXX1', found: false, price: null, priceBrutto: null, ingramPrice: null, stockPL: 0, stockDE: 0, inDelivery: 0, totalStock: 0, availability: 'unavailable', deliveryText: 'Brak', lastSync: staryWpis },
  ]
  const wywolania = { dystrybutorzy: 0, fetch: 0, zapisy: 0 }
  const dystrybutor = async () => { wywolania.dystrybutorzy++; throw new Error('zapytanie do dystrybutora') }
  const zapis = async () => { wywolania.zapisy++ }
  const prisma = {
    stockCache: { findMany: async () => wiersze, update: zapis, upsert: zapis, create: zapis, createMany: zapis },
    jarltechStockCache: { findMany: async () => [], upsert: zapis },
  }
  const mocks = {
    '@/lib/ingram': { lookupStock: dystrybutor },
    '@/lib/bluestar': { lookupStock: dystrybutor },
    '@/lib/jarltech': { lookupStock: dystrybutor },
    '@/lib/db': { prisma },
    '@/data/transfer-ribbon-products': { isRibbonPN: () => false },
    '@/lib/sato-karton': { czyKartonowySato: () => false, cenaKartonuSato: () => undefined, przeliczCeneSato: x => x, dzielnikPakietuBlueStar: () => 1, tekstDostawySato: x => x },
    '@/data/products': { products: [], isLabelPN: () => false, getCatalogNetPrice: () => undefined },
    '@/data/rfid-label-products': { rfidLabelPartNumbers: new Set() },
    '@/lib/stock-overrides': { applyStockOverrides: x => x, MANUAL_STOCK_OVERRIDES: new Set() },
    '@/lib/price-selection': {},
    '@/lib/zebra-terminal-catalog': { zebraTerminalPartNumbers: new Set(), stockCacheMaxAge: (_, age) => age },
    '@/lib/zebra-terminal-pricing': { ZEBRA_TERMINAL_CACHE_MAX_AGE_MS: 60000 },
    '@/lib/ceny-pochodne': { dopiszCenyPochodne: x => x, mapaKartonow: () => new Map(), numeryPlanowSerwisowych: () => new Set() },
    '@/lib/licencje-katalog': { nalozRegulyLicencji: () => {} },
  }
  const code = ts.transpileModule(fs.readFileSync('src/lib/unified-stock.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const exports = {}
  const fetch = async () => { wywolania.fetch++; throw new Error('fetch') }
  vm.runInNewContext(code, { exports, require: id => { assert.ok(id in mocks, `brak mocka ${id}`); return mocks[id] }, fetch, console: { log() {}, warn() {}, error() {} }, setTimeout, clearTimeout, Headers, AbortSignal, process: { env: {} } })
  const { status, body } = await exports.lookupUnifiedStock(['QL820NWBCZG1', 'TD4410DXX1', 'PTE560BTVPRG1'], false, { tylkoCache: true })
  assert.equal(status, 200)
  const wg = Object.fromEntries(body.results.map(r => [r.partNumber, r]))
  assert.equal(wg.QL820NWBCZG1.found, true); assert.equal(wg.QL820NWBCZG1.price, 900)
  assert.equal(wg.TD4410DXX1.found, false)
  assert.equal(wg.PTE560BTVPRG1.found, false)
  assert.deepEqual(wywolania, { dystrybutorzy: 0, fetch: 0, zapisy: 0 })
  // Kontrola: bez opcji ten sam zestaw idzie do dystrybutorów (stary wpis i brak wpisu).
  await exports.lookupUnifiedStock(['QL820NWBCZG1', 'PTE560BTVPRG1'])
  assert.ok(wywolania.dystrybutorzy > 0, 'bez tylkoCache oczekiwane zapytanie do dystrybutorów')
  console.log('PASS: tylkoCache — 0 zapytań do dystrybutorów, 0 fetch, 0 zapisów; stary wpis z ceną, brak wpisu = found: false')
}
main().catch(e => { console.error(e); process.exitCode = 1 })
