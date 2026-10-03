const fs = require('fs'), ts = require('typescript'), assert = require('node:assert/strict'), Module = require('module'), path = require('path');
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText, file);
const originalLoad = Module._load;
Module._load = function(id, parent, main) {
  if (id === '@/data/products') return originalLoad.call(this, path.resolve('src/data/products.ts'), parent, main);
  if (id === '@/lib/required-accessory-copy') return originalLoad.call(this, path.resolve('src/lib/required-accessory-copy.ts'), parent, main);
  if (id === './RequiredAccessoryList') return { default: () => null };
  return originalLoad.call(this, id, parent, main);
};
const { products } = require('../src/data/products.ts');
const { accessoryModelIds } = require('../src/lib/accessory-navigation.ts');
const { accessoryIdRedirects, accessorySlugRedirects } = require('../src/data/accessory-redirects.ts');
const { getRequiredAccessories } = require('../src/app/produkt/[slug]/RequiredAccessories.tsx');
const { findPartNumberSearch } = require('../src/lib/part-number-search.ts');
const coverage = JSON.parse(fs.readFileSync('docs/accessory-catalog-coverage.json', 'utf8'));
const byId = new Map(products.map(p => [p.id, p])), bySlug = new Map(products.map(p => [p.slug, p]));
assert.equal(byId.size, products.length, 'duplicate IDs');
assert.equal(bySlug.size, products.length, 'duplicate slugs');
const scoped = new Set();
for (const id of accessoryModelIds) {
  const model = byId.get(id); assert(model, id);
  assert.deepEqual(model.relatedAccessories, coverage[id], 'complete ordered accessory list for ' + id);
  assert.equal(new Set(model.relatedAccessories).size, model.relatedAccessories.length);
  for (const accessoryId of [...model.relatedAccessories, ...model.compatibleAccessories]) {
    assert(byId.has(accessoryId), 'broken model relation ' + accessoryId);
    scoped.add(accessoryId);
  }
}
const pnOf = p => p.specifications.find(s => s.name === 'Part Number')?.value;
let links = 0, requirements = 0;
const dimensions = JSON.parse(fs.readFileSync('src/data/product-image-dims.json'));
for (const id of scoped) {
  const p = byId.get(id), pn = pnOf(p);
  assert(pn, id + ': own PN');
  assert.equal(products.filter(q => pnOf(q) === pn).length, 1, 'duplicate PN ' + pn);
  const match = findPartNumberSearch(pn, products);
  assert(match.exact && match.matches.size === 1 && match.matches.has(id), 'exact PN search ' + pn);
  assert(p.priceFrom > 0, id + ': positive price');
  assert(['available', 'unavailable'].includes(p.availability), id + ': stock status');
  assert(p.seoTitle && p.seoDescription, id + ': SEO metadata');
  assert(p.images.length, id + ': image');
  for (const image of p.images) {
    assert(fs.existsSync('public' + image), id + ': image file ' + image);
    const dims = dimensions[image];
    assert(dims && (Array.isArray(dims) ? dims : [dims.width, dims.height]).every(n => n > 0), id + ': image dimensions');
  }
  for (const text of [p.name, p.shortDescription, p.description, p.seoTitle, p.seoDescription, ...(p.faq ?? []).flatMap(q => [q.question, q.answer])]) {
    assert.equal(text, text.normalize('NFC'), id + ': NFC');
    assert(!/[\uFFFD]|Ã.|Å.|Â./u.test(text), id + ': encoding');
    assert(!/(?<![a-z0-9-])ET6x(?![a-z0-9-])/i.test(text), id + ': visible family name');
    for (const [, slug] of text.matchAll(/\]\(\/produkt\/([^\s)#?]+)/g)) {
      assert(bySlug.has(slug), 'broken link ' + slug);
      assert(slug !== p.slug, 'self-link ' + slug);
      assert(!accessorySlugRedirects[slug], 'link still uses duplicate address ' + slug);
      links++;
    }
  }
  for (const item of getRequiredAccessories(p.description)) {
    if (item.slug) assert(bySlug.has(item.slug), id + ': required product');
    else assert(item.pn === 'ADP-USBC-35MM1-01' || !item.pn, id + ': unresolved required PN');
    requirements++;
  }
}
for (const [old, target] of Object.entries(accessoryIdRedirects)) {
  assert(!byId.has(old)); assert(byId.has(target));
  assert(!products.some(p => [...p.relatedAccessories ?? [], ...p.compatibleAccessories].includes(old)));
}
for (const [old, target] of Object.entries(accessorySlugRedirects)) { assert(!bySlug.has(old)); assert(bySlug.has(target)); }
// OS-specific batteries and modules remain separate despite shared ET65 accessories.
const android = byId.get('zebra-et65'), windows = byId.get('zebra-et65w');
assert(!android.relatedAccessories.includes('zebra-battery-et6xw-36wh'));
assert(!windows.relatedAccessories.includes('zebra-battery-et6xa-36wh'));
assert(!byId.has('zebra-tc53-50-16000-671r'));
assert(!byId.has('zebra-tc53-sg-ngtc5-scrnp-450'));
// Conditional requirements must not imply that every use needs an extra purchase.
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const RequiredAccessories = require('../src/app/produkt/[slug]/RequiredAccessories.tsx').default;
const { getRequiredAccessoryConditionText } = require('../src/lib/required-accessory-copy.ts');
const requiredHtml = p => renderToStaticMarkup(createElement(RequiredAccessories, { items: getRequiredAccessories(p.description), productName: p.name }));
const cableHtml = requiredHtml(byId.get('zebra-cable-usbc-et4x'));
assert(cableHtml.includes('Do zasilania stacji lub ładowarki potrzebujesz zasilacza.'));
assert(cableHtml.includes('Przy połączeniu przewodu z komputerem nie jest potrzebny.'));
assert(!cableHtml.includes('Aby korzystać z tego produktu'));
const beltHolster = products.find(p => p.description.includes('**Wymagane dla noszenia przy biodrze'));
assert(requiredHtml(beltHolster).includes('Dobierz elementy do sposobu użycia.'));
assert(!requiredHtml(beltHolster).includes('potrzebujesz poniższych elementów'));
const usbDock = products.find(p => p.description.includes('**Wymagane — sprzedawane osobno**') && p.description.includes('**Wymagane dla połączenia USB'));
assert(requiredHtml(usbDock).includes('Sprawdź, których elementów potrzebujesz.'));
const plainDock = byId.get('zebra-tc201-crd-tcvtb-1d');
assert(requiredHtml(plainDock).includes('Aby korzystać ze stacji, potrzebujesz poniższych elementów.'));
for (const p of products) for (const item of getRequiredAccessories(p.description)) {
  if (!item.condition) continue;
  const sentence = getRequiredAccessoryConditionText(item.condition);
  assert(/^[A-ZŻŹĆĄŚĘŁÓŃ].*\.$/.test(sentence), p.id + ': complete condition sentence');
  for (const model of item.condition.match(/(?:TC|MC|ET)\d+|CRDCUP-[A-Z0-9-]+/g) ?? []) {
    assert(sentence.includes(model), p.id + ': retain technical condition ' + model);
  }
}
console.log(`PASS: ${accessoryModelIds.length} devices, ${scoped.size} unique accessories, ${links} links, ${requirements} requirements, 4 consolidated PN pairs, images, SEO, encoding and exact PN search.`);
