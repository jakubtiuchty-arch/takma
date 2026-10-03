const fs = require('fs'), ts = require('typescript'), assert = require('node:assert/strict');
require.extensions['.ts'] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, file);
const { products, filterProducts } = require('../src/data/products.ts');
const { findPartNumberSearch, productSearchPartNumbers, filterPartNumberProducts } = require('../src/lib/part-number-search.ts');
const pn = 'CRD-TCVTB-1D';
const station = products.find(p => productSearchPartNumbers(p).includes(pn));
assert(station);
for (const query of [pn, 'crd-tcvtb-1d', ' CRD-TCVTB-1D ', 'CRD–TCVTB–1D', 'CRDTCVTB1D', 'CRD TCVTB 1D', 'PN: CRD-TCVTB-1D']) {
  const match = findPartNumberSearch(query, products);
  assert(match.exact);
  assert.deepEqual([...match.matches.keys()], [station.id]);
  assert.deepEqual(filterProducts({ search: query }).map(p => p.id), [station.id]);
}
for (const ownPn of ['CRD-TCVTB-1DE', 'CRD-TCVTB-1D1B', 'CRD-TCVTB-1D1BE', '11-08062-02R', 'PWR-WUA5V45W1EU']) {
  const result = filterProducts({ search: ownPn });
  assert(result.length);
  assert(result.every(p => productSearchPartNumbers(p).includes(ownPn)));
}
const partial = findPartNumberSearch('CRD-TCVTB-1', products);
assert.equal(partial.exact, false);
assert(partial.matches.size > 1);
assert([...partial.matches.values()].flat().every(pn => pn.startsWith('CRD-TCVTB-1')));
// A dependency mention is never the product's own PN.
const mention = { ...station, id: 'mention', slug: 'mention', shortDescription: `Do ${pn}`, description: `Wymaga ${pn}`, specifications: [{ name: 'Part Number', value: 'OTHER-123' }] };
assert.deepEqual([...findPartNumberSearch(pn, [station, mention]).matches.keys()], [station.id]);
assert.equal(findPartNumberSearch('CRD-TCVTB-999-NOT-IN-CATALOG', [mention]).matches.size, 0);
assert.equal(findPartNumberSearch('stacja ładowania', products), undefined);
assert(filterProducts({ search: 'stacja ładowania' }).length);
// Exact variants exclude siblings, even if another PN starts with the full requested number.
const variantProduct = { ...station, id: 'variants', variants: [{ partNumber: 'TEST-100', name: 'A', priceFrom: 100, availability: 'available' }, { partNumber: 'TEST-100E', name: 'B', priceFrom: 200, availability: 'unavailable' }], specifications: [] };
const variantResult = filterPartNumberProducts([variantProduct], findPartNumberSearch('test-100', [variantProduct]));
assert.deepEqual(variantResult[0].variants.map(v => v.partNumber), ['TEST-100']);
assert.equal(variantResult[0].priceFrom, 100);
assert.equal(variantResult[0].availability, 'available');
assert.equal(variantProduct.variants.length, 2); // no mutation of the shared catalog
const realVariant = products.find(p => p.variants?.length > 1);
const realPn = realVariant.variants[1].partNumber;
assert(filterProducts({ search: realPn }).find(p => p.id === realVariant.id).variants.every(v => v.partNumber === realPn));
assert.equal(filterProducts({ search: 'tc501' }).length, 102);
console.log('PASS: exact accessory PNs, formatting, suffixes, partial PNs, dependency mentions, unknown PNs, variants and model/text search.');
