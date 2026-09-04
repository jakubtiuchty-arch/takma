const assert = require('node:assert/strict')
const fs = require('node:fs')
const ts = require('typescript')
require.extensions['.ts'] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }, fileName: filename,
  })
  module._compile(outputText, filename)
}
const { products } = require('../src/data/products.ts')
const { selectProductVariant, productVariantSchema } = require('../src/lib/product-variant-offers.ts')
const product = products.find(p => p.slug === 'zebra-zd421t')
const rows = product.variants.map((v, i) => ({ partNumber: v.partNumber, found: true, price: 1000 + i * 100,
  stockPL: i === 0 ? 0 : 3, stockDE: 0, inDelivery: 0, totalStock: i === 0 ? 0 : 3,
  availability: i === 0 ? 'unavailable' : 'available', deliveryText: '', lastSync: '2026-09-04T12:00:00Z' }))
assert.equal(selectProductVariant(product, rows).partNumber, rows[1].partNumber)
assert.equal(selectProductVariant(product, rows, 'invalid').partNumber, rows[1].partNumber)
for (const row of rows) assert.equal(selectProductVariant(product, rows, row.partNumber).partNumber, row.partNumber)
const schema = productVariantSchema(product, rows)
assert.equal(schema['@type'], 'ProductGroup')
assert.equal(schema.hasVariant.length, 6)
assert(!schema.sku && !schema.offers && !schema.aggregateRating && !schema.isRelatedTo)
schema.hasVariant.forEach((variant, i) => {
  assert.equal(variant.sku, rows[i].partNumber)
  assert.equal(variant.mpn, rows[i].partNumber)
  assert.equal(new URL(variant.url).searchParams.get('pn'), variant.sku)
  assert.equal(variant.offers.url, variant.url)
  assert.equal(variant.offers.price, (Math.round(rows[i].price * 123) / 100).toFixed(2))
  assert.equal(variant.offers.priceCurrency, 'PLN')
  assert(!variant.offers.priceValidUntil)
})
assert.equal(schema.hasVariant[0].offers.availability, 'https://schema.org/OutOfStock')
assert.equal(productVariantSchema(product, [{ ...rows[0], availability: 'on-order', inDelivery: 2 }]).hasVariant[0].offers.availability, 'https://schema.org/BackOrder')
for (const missing of [[], [{ ...rows[0], found: false }], [{ ...rows[0], price: 0 }], [{ ...rows[0], price: undefined }]]) {
  assert(productVariantSchema(product, missing).hasVariant.every(v => !v.offers))
}
assert.equal(product.faq.length, 12)
assert(!/36.mies|min\. 1 mln etykiet|ten sam korpus|te same akcesoria/.test(product.description + JSON.stringify(product.faq)))
assert(product.specifications.some(s => s.name === 'Waga' && s.value === '2,05 kg'))
assert(product.specifications.some(s => s.value === '202 × 267 × 189 mm'))
assert.equal(product.updatedAt, '2026-09-04')
for (const image of product.images) assert(fs.existsSync(`public${image}`))
console.log('PASS: six variants, gross prices, selected PN, availability, missing-data fallback, content and media')
