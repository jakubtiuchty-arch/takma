/**
 * Cena kartonowa i cena kontraktu serwisowego: serwer (lib/ceny-pochodne) musi
 * dawać dokładnie to, co wcześniej liczyła przeglądarka z `ingramPrice`, a publiczne
 * /api/stock nie może podawać ceny zakupu ani `_debug` osobom bez sesji admina.
 *
 *   node scripts/test-ceny-pochodne.cjs [odpowiedz-api-stock.json]
 *
 * Opcjonalny plik to zapisana odpowiedź /api/stock sprzed zmiany (z `ingramPrice`).
 * Skrypt podaje jej wiersze jako StockCache i porównuje ceny sprzedaży
 * przed/po co do grosza. Cen zakupu nie wypisuje.
 */
const fs = require('node:fs'), path = require('node:path'), Module = require('node:module'), assert = require('node:assert/strict'), ts = require('typescript')
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, f)

let cacheRows = [], jarltechRows = [], ingramLive = [], dbError = null, adminSession = null
const prisma = {
  stockCache: { findMany: async () => { if (dbError) throw dbError; return cacheRows }, upsert: async x => x.create, update: async () => ({}) },
  jarltechStockCache: { findMany: async () => jarltechRows, upsert: async x => x.create },
}
const notFound = pns => pns.map(partNumber => ({ partNumber, found: false, stockPL: 0, stockDE: 0, inDelivery: 0, totalStock: 0, availability: 'unavailable', deliveryText: '', lastSync: new Date().toISOString() }))
const original = Module._load
Module._load = function (id, parent, main) {
  if (id === '@/lib/db') return { prisma }
  if (id === '@/lib/ingram') return { lookupStock: async pns => pns.map(pn => ingramLive.find(r => r.partNumber === pn) ?? notFound([pn])[0]) }
  if (id === '@/lib/auth') return { getSessionFromCookie: async () => adminSession }
  if (id === '@/lib/bluestar') return { lookupStock: async pns => notFound(pns) }
  if (id === '@/lib/jarltech') return { lookupStock: async pns => notFound(pns) }
  return original.call(this, id.startsWith('@/') ? path.resolve('src', id.slice(2)) : id, parent, main)
}
global.fetch = async () => ({ ok: true, json: async () => ({ rates: [{ mid: 4.25 }] }) })

const { products } = require('../src/data/products.ts')
const { ribbonCartonQty } = require('../src/data/ribbon-carton-qty.ts')
const { labelCartonQty } = require('../src/data/label-carton-qty.ts')
const { zebraTerminalPartNumbers } = require('../src/lib/zebra-terminal-catalog.ts')
const { cenaKartonowaZaRolke, cenaPlanuSerwisowego, rodzajKartonuProduktu, mapaKartonow } = require('../src/lib/ceny-pochodne.ts')
const { lookupUnifiedStock } = require('../src/lib/unified-stock.ts')

// --- Wzory przeglądarki sprzed zmiany (SmartPrice l. 64–79, ServicePlansBox l. 55–62) ---
const round2 = x => Math.round(x * 100) / 100
function kartonPrzed(produkt, stock) {
  const isRibbon = produkt.subcategoryIds?.includes('tasmy-termotransferowe') ?? false
  const isLabel = produkt.subcategoryIds?.some(id => id === 'etykiety-termiczne' || id === 'etykiety-termotransferowe') ?? false
  const cartonMargin = isRibbon ? 1.13 : 1.10, singleMargin = isRibbon ? 1.20 : 1.15
  const price = stock.price
  const raw = (isRibbon || isLabel) && price
    ? (stock.ingramPrice ? stock.ingramPrice * cartonMargin : (price * cartonMargin) / singleMargin) : undefined
  return raw ? Math.round(raw * 100) / 100 : undefined
}
const planPrzed = (stock, plan) => stock?.found && stock.ingramPrice ? Math.round(stock.ingramPrice * 1.15 * 100) / 100 : plan.priceNetto
// --- Wzory przeglądarki po zmianie ---
function kartonPo(produkt, stock) {
  const isRibbon = produkt.subcategoryIds?.includes('tasmy-termotransferowe') ?? false
  const isLabel = produkt.subcategoryIds?.some(id => id === 'etykiety-termiczne' || id === 'etykiety-termotransferowe') ?? false
  const cartonMargin = isRibbon ? 1.13 : 1.10, singleMargin = isRibbon ? 1.20 : 1.15
  const price = stock.price
  const raw = (isRibbon || isLabel) && price ? (stock.cartonPrice ?? (price * cartonMargin) / singleMargin) : undefined
  return raw ? Math.round(raw * 100) / 100 : undefined
}
const planPo = (stock, plan) => stock?.found && stock.servicePlanPrice ? stock.servicePlanPrice : plan.priceNetto

const pnsProduktu = p => [...(p.variants ?? []).map(v => v.partNumber), ...p.specifications.filter(s => s.name === 'Part Number').map(s => s.value)]
const produktPN = pn => products.find(p => pnsProduktu(p).includes(pn))
const planPN = pn => products.flatMap(p => p.servicePlans ?? []).find(sp => sp.partNumber === pn)
const sztukWKartonie = (produkt, pn) => {
  const rodzaj = rodzajKartonuProduktu(produkt?.subcategoryIds)
  return rodzaj === 'tasma' ? ribbonCartonQty(pn) : rodzaj === 'etykieta' ? labelCartonQty(pn) : null
}

function wierszCache(r, lastSync) {
  return {
    partNumber: r.partNumber, found: r.found, price: r.price ?? null, priceBrutto: r.priceBrutto ?? null,
    ingramPrice: r.ingramPrice ?? null, stockPL: r.stockPL ?? 0, stockDE: r.stockDE ?? 0, inDelivery: r.inDelivery ?? 0,
    totalStock: r.totalStock ?? 0, availability: r.availability ?? 'available', deliveryText: r.deliveryText ?? null, lastSync,
  }
}
async function lookup(rows) {
  const teraz = new Date()
  cacheRows = rows.map(r => wierszCache(r, teraz))
  // Terminal Zebra z cache wymaga świeżego wpisu Jarltech nie nowszego niż StockCache.
  jarltechRows = rows.filter(r => zebraTerminalPartNumbers.has(r.partNumber)).map(r => ({
    partNumber: r.partNumber, found: false, inventory: 0, incomingQty: 0, totalStock: 0, lastSync: new Date(teraz.getTime() - 1000),
  }))
  const odp = await lookupUnifiedStock(rows.map(r => r.partNumber))
  assert.equal(odp.status, 200)
  return new Map(odp.body.results.map(r => [r.partNumber, r]))
}

async function main() {
  // 1. Wzory i zaokrąglenie
  assert.equal(cenaKartonowaZaRolke(100, 'tasma'), 113)
  assert.equal(cenaKartonowaZaRolke(100, 'etykieta'), 110)
  assert.equal(cenaKartonowaZaRolke(12.345, 'tasma'), round2(12.345 * 1.13))
  assert.equal(cenaPlanuSerwisowego(1234.56), round2(1234.56 * 1.15))
  for (let i = 1; i < 5000; i++) {
    const zakup = i * 0.37 + i / 1000
    assert.equal(cenaKartonowaZaRolke(zakup, 'tasma'), Math.round(zakup * 1.13 * 100) / 100)
    assert.equal(cenaKartonowaZaRolke(zakup, 'etykieta'), Math.round(zakup * 1.10 * 100) / 100)
    assert.equal(cenaPlanuSerwisowego(zakup), Math.round(zakup * 1.15 * 100) / 100)
  }

  // 2. Jeden PN nie może być taśmą na jednej karcie i etykietą na innej.
  const rodzaje = new Map()
  for (const p of products) {
    const rodzaj = rodzajKartonuProduktu(p.subcategoryIds)
    if (rodzaj) for (const pn of pnsProduktu(p)) rodzaje.set(pn, new Set([...(rodzaje.get(pn) ?? []), rodzaj]))
  }
  const konflikty = [...rodzaje].filter(([, s]) => s.size > 1).map(([pn]) => pn)
  assert.deepEqual(konflikty, [], `PN z dwoma rodzajami kartonu: ${konflikty.join(', ')}`)
  const kartony = mapaKartonow(products)
  for (const [pn, rodzaj] of kartony) assert.ok((rodzaj === 'tasma' ? ribbonCartonQty(pn) : labelCartonQty(pn)) > 1)

  // 3. Pełna ścieżka lookupUnifiedStock na danych syntetycznych
  const tasma = [...kartony].find(([, r]) => r === 'tasma')[0]
  const etykieta = [...kartony].find(([, r]) => r === 'etykieta')[0]
  const plan = products.flatMap(p => p.servicePlans ?? [])[0].partNumber
  const syntetyczne = [
    { partNumber: tasma, found: true, price: 60, priceBrutto: 73.8, ingramPrice: 50, stockPL: 3, availability: 'available' },
    { partNumber: etykieta, found: true, price: 23, priceBrutto: 28.29, ingramPrice: 20, stockPL: 3, availability: 'available' },
    { partNumber: plan, found: true, price: 1100, priceBrutto: 1353, ingramPrice: 1000, stockPL: 0, availability: 'available' },
  ]
  const wyniki = await lookup(syntetyczne)
  assert.equal(wyniki.get(tasma).cartonPrice, 56.5)
  assert.equal(wyniki.get(etykieta).cartonPrice, 22)
  assert.equal(wyniki.get(plan).servicePlanPrice, 1150)
  assert.equal(wyniki.get(tasma).servicePlanPrice, undefined)
  assert.equal(wyniki.get(plan).cartonPrice, undefined)
  // Bez ceny zakupu nie ma cen pochodnych — przeglądarka liczy zapas z ceny za rolkę.
  const bezZakupu = await lookup([{ ...syntetyczne[0], ingramPrice: undefined }])
  assert.equal(bezZakupu.get(tasma).cartonPrice, undefined)
  assert.equal(kartonPo(produktPN(tasma), bezZakupu.get(tasma)), kartonPrzed(produktPN(tasma), bezZakupu.get(tasma)))
  console.log('OK: wzory, brak konfliktów rodzaju kartonu, ścieżka lookupUnifiedStock')

  // 4. Publiczne /api/stock: bez ceny zakupu na każdej ścieżce, `debug` tylko dla admina
  const { NextRequest } = require('next/server')
  const { GET } = require('../src/app/api/stock/route.ts')
  const zapytaj = async query => {
    const res = await GET(new NextRequest(`https://www.takma.com.pl/api/stock?${query}`))
    return { status: res.status, cache: res.headers.get('cache-control'), tekst: await res.text() }
  }
  const zakazane = /ingramPrice|bluestarPrice|jarltechPrice|"eur"|eurRate|_debug/
  cacheRows = syntetyczne.map(r => wierszCache(r, new Date())); jarltechRows = []
  let odp = await zapytaj(`pn=${tasma},${plan}`)
  assert.equal(odp.status, 200)
  assert.doesNotMatch(odp.tekst, zakazane, 'cache')
  assert.match(odp.tekst, /"cartonPrice":56.5/)
  assert.match(odp.tekst, /"servicePlanPrice":1150/)
  assert.equal(odp.cache, 'public, s-maxage=300, stale-while-revalidate=600')
  odp = await zapytaj(`pn=${tasma}&debug=1`)
  assert.doesNotMatch(odp.tekst, zakazane, 'debug bez sesji')
  assert.equal(odp.cache, 'private, no-store')
  // Ścieżka live (brak wpisu w StockCache) — cena zakupu z Ingrama nie wychodzi na zewnątrz.
  cacheRows = []
  ingramLive = [{ partNumber: tasma, found: true, ingramPrice: 50, stockPL: 2, stockDE: 0, inDelivery: 0, totalStock: 2, availability: 'available', deliveryText: '', lastSync: new Date().toISOString() }]
  odp = await zapytaj(`pn=${tasma}&debug=1`)
  assert.equal(odp.status, 200)
  assert.doesNotMatch(odp.tekst, zakazane, 'live')
  assert.match(odp.tekst, /"_source":"live"/)
  assert.match(odp.tekst, /"cartonPrice":56.5/)
  adminSession = { userId: 'test', email: 'test@takma.com.pl', name: 'Test' }
  odp = await zapytaj(`pn=${tasma}&debug=1`)
  assert.match(odp.tekst, /_debug/, 'admin widzi debug')
  assert.doesNotMatch(odp.tekst, /ingramPrice/, 'admin: wyniki publiczne nadal bez ceny zakupu')
  assert.equal(odp.cache, 'private, no-store')
  // Admin: /api/admin/stock z ceną zakupu; bez sesji 401.
  const admin = require('../src/app/api/admin/stock/route.ts')
  let adm = await admin.GET(new NextRequest(`https://www.takma.com.pl/api/admin/stock?pn=${tasma}`))
  assert.equal(adm.status, 200)
  assert.equal(adm.headers.get('cache-control'), 'private, no-store')
  assert.equal((await adm.json()).results[0].ingramPrice, 50)
  adminSession = null
  adm = await admin.GET(new NextRequest(`https://www.takma.com.pl/api/admin/stock?pn=${tasma}`))
  assert.equal(adm.status, 401)
  assert.doesNotMatch(await adm.text(), zakazane)
  // Błąd bazy
  dbError = new Error('ECONNREFUSED'); ingramLive = []
  odp = await zapytaj(`pn=${tasma}`)
  assert.equal(odp.status, 500)
  assert.doesNotMatch(odp.tekst, zakazane, 'błąd')
  dbError = null
  console.log('OK: publiczne /api/stock bez ceny zakupu (cache, live, debug, błąd); /api/admin/stock tylko z sesją')

  // 5. Porównanie przed/po na zapisanej odpowiedzi produkcyjnej
  const plik = process.argv[2]
  if (!plik) return
  const przed = JSON.parse(fs.readFileSync(plik, 'utf8')).results
  const po = await lookup(przed)
  const tabela = []
  for (const r of przed) {
    const nowy = po.get(r.partNumber)
    tabela.push({ pn: r.partNumber, pole: 'price', przed: r.price, po: nowy.price })
    tabela.push({ pn: r.partNumber, pole: 'priceBrutto', przed: r.priceBrutto, po: nowy.priceBrutto })
    const produkt = produktPN(r.partNumber)
    if (produkt && sztukWKartonie(produkt, r.partNumber) > 1) {
      tabela.push({ pn: r.partNumber, pole: 'karton (SmartPrice)', przed: kartonPrzed(produkt, r), po: kartonPo(produkt, nowy) })
    }
    const sp = planPN(r.partNumber)
    if (sp) tabela.push({ pn: r.partNumber, pole: 'plan serwisowy (ServicePlansBox)', przed: planPrzed(r, sp), po: planPo(nowy, sp) })
  }
  let bledy = 0
  for (const w of tabela) {
    const ok = w.przed === w.po
    if (!ok) bledy++
    console.log(`${w.pn.padEnd(20)} ${w.pole.padEnd(34)} ${String(w.przed).padStart(10)} ${String(w.po).padStart(10)}  ${ok ? 'OK' : 'RÓŻNICA'}`)
  }
  assert.equal(bledy, 0, `${bledy} różnic cen sprzedaży`)
  console.log(`OK: ${tabela.length} cen sprzedaży identycznych przed i po`)
}

main().then(() => process.exit(0), err => { console.error(err); process.exit(1) })
