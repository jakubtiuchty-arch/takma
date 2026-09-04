import assert from 'node:assert/strict'

const origin = process.argv[2] ?? 'http://localhost:3001'
const path = '/produkt/zebra-zd421t'
const canonical = `https://www.takma.com.pl${path}`
const pns = ['ZD4A042-30EM00EZ', 'ZD4A042-30EE00EZ', 'ZD4A042-30EX02EZ', 'ZD4A043-30EE00EZ', 'ZD4A043-30EM00EZ', 'ZD4A043-30EX02EZ']
async function get(path) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(60000) })
  assert.equal(response.status, 200, path)
  return response.text()
}
const api = JSON.parse(await get(`/api/stock?pn=${pns.join(',')}`))
assert.equal(api.results.length, 6)
const stock = new Map(api.results.map(row => [row.partNumber, row]))
for (const pn of [undefined, ...pns]) {
  const html = await get(path + (pn ? `?pn=${pn}` : ''))
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]))
  const group = schemas.find(schema => schema['@type'] === 'ProductGroup')
  assert(group, 'SSR ProductGroup')
  assert.equal(group.hasVariant.length, 6)
  assert(!schemas.some(schema => schema['@type'] === 'FAQPage'))
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1)
  assert(html.includes(`<link rel="canonical" href="${canonical}"`))
  assert(!html.includes('content="noindex'))
  const webPage = schemas.find(schema => schema['@type'] === 'WebPage')
  assert.equal(webPage.dateModified, '2026-09-04')
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, '').replace(/&nbsp;|\u00a0/g, ' ')
  assert(visible.includes('Aktualizacja: 4 września 2026'))
  assert(!visible.includes('Sprawdzanie stanów magazynowych'))
  for (const variant of group.hasVariant) {
    const row = stock.get(variant.sku)
    assert(row?.found && row.price > 0, `Price unavailable: ${variant.sku}`)
    assert.equal(variant.offers.price, (Math.round(row.price * 123) / 100).toFixed(2))
    assert.equal(new URL(variant.offers.url).searchParams.get('pn'), variant.sku)
    assert(!variant.offers.priceValidUntil)
    const formatted = row.price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\u00a0/g, ' ')
    assert(visible.includes(formatted), `Missing SSR net price ${formatted}`)
  }
  const selected = pn ?? [...api.results].filter(r => r.found && r.availability === 'available').sort((a, b) => a.price - b.price)[0].partNumber
  const priceAmount = html.match(/<meta name="product:price:amount" content="([^"]+)"/)[1]
  assert.equal(priceAmount, (Math.round(stock.get(selected).price * 123) / 100).toFixed(2))
  assert(visible.includes(`PN: ${selected}`), `Selected PN ${selected}`)
  assert(html.includes('property="og:image:height" content="1200"'))
  for (const n of [1, 2, 3]) {
    assert(html.includes(`zd421t_${n}.webp`))
  }
  console.log(`PASS SSR: ${pn ?? 'default'}; 6 prices match API; canonical, date, heading and schema`)
}
for (const n of [1, 2, 3]) {
  const response = await fetch(`${origin}/images/products/zd421t_${n}.webp`)
  assert.equal(response.status, 200)
  assert(response.headers.get('content-type').includes('image/webp'))
  assert((await response.arrayBuffer()).byteLength < 100000)
}
const sitemap = await get('/sitemap.xml')
assert(sitemap.includes(canonical))
const entry = sitemap.match(/<url>\s*<loc>https:\/\/www.takma.com.pl\/produkt\/zebra-zd421t<\/loc>([\s\S]*?)<\/url>/)
assert(entry?.[1].includes('2026-09-04'))
console.log('PASS images and sitemap')
