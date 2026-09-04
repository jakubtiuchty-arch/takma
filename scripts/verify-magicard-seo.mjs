import assert from 'node:assert/strict'

// Read-only smoke test. Run against localhost first, then the production origin.
// node scripts/verify-magicard-seo.mjs http://localhost:3001
const origin = new URL(process.argv[2] || 'http://localhost:3001').origin
const canonicalOrigin = 'https://www.takma.com.pl'
const models = [
  { slug: 'magicard-pronto100', name: 'Magicard Pronto100', pn: '3100-0001/3', net: 2875, gross: '3536.25' },
  { slug: 'magicard-300', name: 'Magicard 300', pn: '3300-0021/S', net: 4025, gross: '4950.75' },
  { slug: 'magicard-600-duo', name: 'Magicard 600 Duo', pn: '3652-5021/3', net: 5750, gross: '7072.50' },
]

async function request(path) {
  const response = await fetch(new URL(path, origin), {
    redirect: 'manual',
    signal: AbortSignal.timeout(60000),
  })
  assert.equal(response.status, 200, `${path}: expected 200, got ${response.status}; location=${response.headers.get('location')}`)
  return response
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1]
}

function visibleText(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/\s+/g, ' ').trim()
}

for (const model of models) {
  const path = `/produkt/${model.slug}`
  const response = await request(path)
  assert(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${model.slug}: HTTP noindex`)
  const html = await response.text()
  const metaTags = html.match(/<meta\b[^>]*>/gi) || []
  const robots = metaTags.find(tag => attribute(tag, 'name') === 'robots')
  assert(robots && !/noindex/i.test(attribute(robots, 'content')), `${model.slug}: missing robots or noindex`)
  const canonical = (html.match(/<link\b[^>]*>/gi) || []).find(tag => attribute(tag, 'rel') === 'canonical')
  assert.equal(attribute(canonical || '', 'href'), canonicalOrigin + path, `${model.slug}: canonical`)
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)]
  assert.equal(h1.length, 1, `${model.slug}: H1 count`)
  assert.equal(visibleText(h1[0][1]), model.name)

  const schemas = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap(match => {
      const value = JSON.parse(match[1])
      return value['@graph'] || (Array.isArray(value) ? value : [value])
    })
  const products = schemas.filter(schema => schema['@type'] === 'Product')
  assert.equal(products.length, 1, `${model.slug}: top-level Product count`)
  const product = products[0]
  assert.equal(product.sku, model.pn)
  assert.equal(product.mpn, model.pn)
  assert.equal(product.offers?.['@type'], 'Offer', `${model.slug}: single-SKU Offer required`)
  assert.equal(product.offers.price, model.gross, `${model.slug}: gross price`)
  assert.equal(product.offers.priceCurrency, 'PLN')
  assert.equal(product.offers.availability, 'https://schema.org/InStock')
  assert.equal(product.offers.url, canonicalOrigin + path)
  assert(!product.offers.priceValidUntil, `${model.slug}: no arbitrary price expiry`)
  assert(!product.aggregateRating && !product.review, `${model.slug}: no fabricated ratings`)
  assert(product.image.length >= 2, `${model.slug}: gallery missing`)
  for (const image of product.image) {
    const url = new URL(image)
    assert.equal(url.origin, canonicalOrigin, `${model.slug}: malformed or external image URL`)
    const imageResponse = await request(url.pathname)
    assert(imageResponse.headers.get('content-type')?.startsWith('image/'), `${model.slug}: image content type`)
    await imageResponse.arrayBuffer()
  }

  const text = visibleText(html)
  const format = price => price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, ' ')
  assert(text.includes(`${format(model.net)} zł netto`), `${model.slug}: net price missing from server HTML`)
  assert(text.includes(`${format(Number(model.gross))} zł brutto`), `${model.slug}: gross price missing from server HTML`)
  assert(text.includes('Magazyn PL: 10 szt. — wysyłka 24h'), `${model.slug}: PL stock/shipping missing from server HTML`)
  assert(!text.includes('Dostępny u dystrybutora:'), `${model.slug}: outdated stock label`)
  const ogPrice = metaTags.find(tag => attribute(tag, 'name') === 'product:price:amount' || attribute(tag, 'property') === 'product:price:amount')
  assert.equal(attribute(ogPrice || '', 'content'), model.gross, `${model.slug}: Open Graph price`)
  if (model.slug !== 'magicard-pronto100') {
    assert(text.includes('przy druku jednostronnym'), `${model.slug}: missing throughput qualification`)
  }
  if (model.slug === 'magicard-600-duo') {
    assert(!/<title>[^<]*600 dpi/i.test(html), '600 Duo: misleading SEO title')
  }
  console.log(`PASS ${model.slug}: 200, canonical, index, Offer ${model.gross} PLN, images, SSR price/stock`)
}

const stockResponse = await request(`/api/stock?pn=${encodeURIComponent(models.map(model => model.pn).join(','))}`)
const stocks = await stockResponse.json()
for (const model of models) {
  const stock = stocks.results.find(row => row.partNumber === model.pn)
  assert(stock?.found, `${model.slug}: stock API found`)
  assert.equal(stock.totalStock, 10)
  assert.equal(stock.availability, 'available')
}

const sitemap = await (await request('/sitemap.xml')).text()
const category = await (await request('/drukarki-kart')).text()
const brand = await (await request('/magicard')).text()
for (const model of models) {
  assert(sitemap.includes(`<loc>${canonicalOrigin}/produkt/${model.slug}</loc>`), `${model.slug}: sitemap`)
  assert(category.includes(`href="/produkt/${model.slug}"`), `${model.slug}: category link`)
  assert(brand.includes(`href="/produkt/${model.slug}"`), `${model.slug}: manufacturer link`)
}
assert(sitemap.includes(`<loc>${canonicalOrigin}/magicard</loc>`), 'manufacturer sitemap entry')
console.log(`PASS ${origin}: stock API, sitemap, category and manufacturer links`)
