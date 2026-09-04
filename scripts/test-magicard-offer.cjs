const assert = require('node:assert/strict')
const fs = require('node:fs')
const ts = require('typescript')

// Transpile the project's pure TypeScript data/helpers in this test process only.
require.extensions['.ts'] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  })
  module._compile(outputText, filename)
}

const { products } = require('../src/data/products.ts')
const { getMagicardOffer, getMagicardStock, absoluteProductImageUrl } = require('../src/lib/magicard-offer.ts')
const { MANUAL_STOCK_OVERRIDES } = require('../src/lib/stock-overrides.ts')
const expected = {
  'magicard-pronto100': ['3100-0001/3', '3536.25'],
  'magicard-300': ['3300-0021/S', '4950.75'],
  'magicard-600-duo': ['3652-5021/3', '7072.50'],
}

assert.equal(absoluteProductImageUrl('/images/product.png'), 'https://www.takma.com.pl/images/product.png')
assert.equal(absoluteProductImageUrl('https://example.com/product.png'), 'https://example.com/product.png')
assert.equal(absoluteProductImageUrl('//example.com/product.png'), 'https://example.com/product.png')
assert.equal(getMagicardOffer(products.find(p => p.slug === 'zebra-zc100')), undefined)

const magicard = products.filter(product => product.manufacturerId === 'magicard')
assert.equal(magicard.length, 20, '3 printers + 15 ribbons + 2 cleaning kits')
for (const product of magicard) {
  const offer = getMagicardOffer(product)
  const stock = getMagicardStock(product)
  assert.equal(offer['@type'], 'Offer', product.slug)
  assert.equal(offer.priceCurrency, 'PLN')
  assert.equal(offer.availability, 'https://schema.org/InStock')
  assert.equal(stock[0].totalStock, 10)
  assert.equal(stock[0].stockPL, 10)
  assert.equal(stock[0].stockDE, 0)
  assert.equal(stock[0].deliveryText, 'Dostępny — wysyłka 24h (10 szt.)')
  assert.equal(Number(offer.price), Math.round(stock[0].price * 123) / 100)
  assert(!offer.priceValidUntil)
  for (const image of product.images) assert(fs.existsSync(`public${image}`), `${product.slug}: missing ${image}`)
  for (const id of [...(product.compatibleAccessories || []), ...(product.relatedAccessories || [])]) {
    assert(products.some(p => p.id === id), `${product.slug}: missing accessory ${id}`)
  }
  if (expected[product.slug]) {
    assert.equal(offer.sku, expected[product.slug][0])
    assert.equal(offer.price, expected[product.slug][1])
  }
}

const pronto = magicard.find(p => p.slug === 'magicard-pronto100')
assert.equal(getMagicardOffer({ ...pronto, priceFrom: 0, variants: [{ ...pronto.variants[0], priceFrom: 0 }] }), undefined)
const original = MANUAL_STOCK_OVERRIDES.get('3100-0001/3')
try {
  MANUAL_STOCK_OVERRIDES.set('3100-0001/3', { ...original, stockPL: 0, stockDE: 0 })
  assert.equal(getMagicardOffer(pronto).availability, 'https://schema.org/OutOfStock')
} finally {
  MANUAL_STOCK_OVERRIDES.set('3100-0001/3', original)
}
console.log(`PASS: ${magicard.length} Magicard offers, VAT rounding, manual stock, images, references and non-Magicard isolation`)
