const fs = require('fs'), ts = require('typescript'), assert = require('node:assert/strict'), path = require('path'), Module = require('module');
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true}}).outputText, file);
const original = Module._load;
Module._load = function(id, parent, main) {
  if (id.startsWith('@/')) return original.call(this, path.resolve('src', id.slice(2)), parent, main);
  if (id === './RequiredAccessoryList') return {default: () => null};
  return original.call(this, id, parent, main);
};
const {products, filterProducts} = require('../src/data/products.ts');
const {getRequiredAccessories} = require('../src/app/produkt/[slug]/RequiredAccessories.tsx');
const {findPartNumberSearch} = require('../src/lib/part-number-search.ts');
const {activeSupplierOffer, supplierOffers} = require('../src/data/supplier-offers.ts');
const {manuals} = require('../src/data/manuals.ts');
const p = products.find(p => p.slug === 'newland-mt95-kambur-pro-iii');
assert(p);
assert.equal(products.filter(x => x.id === p.id).length, 1);
assert.equal(products.filter(x => x.slug === p.slug).length, 1);
assert.equal(p.variants.length, 1);
assert.equal(p.variants[0].partNumber, 'NLS-MT9557-W5');
const search = findPartNumberSearch('NLS-MT9557-W5', products);
assert(search.exact && search.matches.size === 1 && search.matches.has(p.id));
assert.deepEqual(filterProducts({search: 'NLS-MT9557-W5'}).map(p => p.id), [p.id]);
assert.equal(getRequiredAccessories(p.description).length, 0, 'complete USB-C kit must not trigger extra purchases');
assert(!p.compatibleAccessories.some(id => id.includes('mcd95') || id.includes('bty-mt95')));
assert(p.specifications.find(s => s.name === 'Bateria').value.includes('5100'));
assert(!JSON.stringify(p).includes('6000'));
const slug = p.slug;
assert.equal(activeSupplierOffer(slug, Date.parse('2026-10-03T23:59:59+02:00')), null);
assert(activeSupplierOffer(slug, Date.parse('2026-10-04T00:00:00+02:00')));
assert(activeSupplierOffer(slug, Date.parse('2027-03-31T23:59:59.999+02:00')));
assert.equal(activeSupplierOffer(slug, Date.parse('2027-04-01T00:00:00+02:00')), null);
assert.equal(activeSupplierOffer('zebra-tc22'), null);
assert.equal(supplierOffers[slug].partNumber, p.variants[0].partNumber);
assert(supplierOffers[slug].limitedQuantity);
const {productVariantSchema} = require('../src/lib/product-variant-offers.ts');
const originalNow = Date.now;
Date.now = () => Date.parse('2026-10-04T12:00:00+02:00');
try {
  const schema = productVariantSchema(p, [{partNumber: p.variants[0].partNumber, found: true, price: 2814.99, availability: 'available'}]);
  assert.equal(schema.brand.name, 'Newland');
  assert.equal(schema.hasVariant[0].offers.price, '3462.44');
  assert.equal(schema.hasVariant[0].offers.priceValidUntil, '2027-03-31');
  assert.equal(schema.hasVariant[0].sku, 'NLS-MT9557-W5');
} finally { Date.now = originalNow; }
const dimensions = JSON.parse(fs.readFileSync('src/data/product-image-dims.json'));
for (const image of p.images) {
  const b = fs.readFileSync('public' + image);
  assert.deepEqual(dimensions[image], [b.readUInt32BE(16), b.readUInt32BE(20)]);
  assert(b.readUInt32BE(16) >= 900 && b.readUInt32BE(20) >= 1000);
}
for (const download of p.downloads) assert(fs.existsSync('public' + download.url));
assert.equal(manuals.find(m => m.slug === slug).productSlug, slug);
for (const text of [p.name, p.shortDescription, p.description, p.seoTitle, p.seoDescription, ...p.faq.flatMap(q => [q.question, q.answer])]) {
  assert.equal(text, text.normalize('NFC'));
  assert(!/[\uFFFD]|Ã.|Å.|Â./u.test(text));
  for (const [, linkedSlug] of text.matchAll(/\]\(\/produkt\/([^\s)#?]+)/g)) assert(products.some(p => p.slug === linkedSlug));
}
for (const id of p.relatedProducts) assert(products.some(p => p.id === id));
assert.equal(p.comparison.models.filter(m => m.highlight).length, 1);
assert(p.seoTitle.length <= 65 && p.seoDescription.length <= 165);
assert.equal(p.updatedAt, '2026-10-04');
console.log('PASS: unique MT9557 PN, search, complete kit, battery, assets, manual, links, metadata and promotion expiry (Warsaw).');
