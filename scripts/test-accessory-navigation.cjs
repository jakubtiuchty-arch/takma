const fs = require('fs'), ts = require('typescript'), assert = require('node:assert/strict');
const Module = require('node:module');
const originalLoad = Module._load;
Module._load = function(request, parent, isMain) {
  if (request === '@/lib/required-accessory-copy') return originalLoad.call(this, require.resolve('../src/lib/required-accessory-copy.ts'), parent, isMain);
  return originalLoad.call(this, request, parent, isMain);
};
for (const extension of ['.ts', '.tsx']) require.extensions[extension] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText, file);
const { products } = require('../src/data/products.ts');
const { buildAccessoryNavigation, accessoryModelIds } = require('../src/lib/accessory-navigation.ts');
const index = buildAccessoryNavigation(products);
const byPn = pn => products.find(p => p.specifications.some(s => s.name === 'Part Number' && s.value === pn));
let cards = 0, links = 0, reverseCards = 0;
for (const [id, navigation] of index) {
  const p = products.find(p => p.id === id);
  assert.equal(p.categoryId, 'akcesoria');
  assert(navigation.models.length <= 4); assert(navigation.configurations.length <= 3);
  const all = [...navigation.models, ...navigation.configurations];
  assert.equal(new Set(all.map(p => p.slug)).size, all.length);
  assert(all.every(target => target.id !== id && products.some(p => p.id === target.id && p.slug === target.slug)));
  for (const model of navigation.models) {
    const device = products.find(p => p.id === model.id);
    assert(accessoryModelIds.includes(model.id));
    assert(device.relatedAccessories?.includes(id) || device.compatibleAccessories.includes(id));
    assert(!p.description.includes(`/produkt/${model.slug})`));
  }
  for (const source of navigation.configurations) {
    const parent = products.find(p => p.id === source.id);
    const blocks = Array.from(parent.description.matchAll(/\*\*Wymagane(?: dla ([^*\n]+))? — sprzedawane osobno\*\*\n\n([\s\S]*?)\n\n/g));
    assert(blocks.some(([, condition, block]) => condition === source.condition && block.includes(`/produkt/${p.slug})`)));
    assert(!p.description.includes(`/produkt/${source.slug})`));
  }
  if (all.length) cards++; links += all.length;
  if (navigation.configurations.length) reverseCards++;
}
const power = byPn('PWR-WUA5V45W1EU');
const powerNav = index.get(power.id);
assert.equal(powerNav.configurations.length, 3);
assert(powerNav.configurations.some(p => p.id.startsWith('zebra-tc501-')));
assert(!powerNav.configurations.some(p => p.id === 'zebra-tc701'));
const bootDock = byPn('CRD-TC5AB-5SE5D-1');
assert.deepEqual(index.get(bootDock.id).models.map(p => p.id), ['zebra-tc501']);
assert(!index.get(bootDock.id).configurations.length);
assert(!index.has('zebra-tc501')); // no navigation changes on device cards
assert(!index.has('zebra-zd421t')); // unrelated families excluded
const { renderToStaticMarkup } = require('react-dom/server');
const { createElement } = require('react');
const Component = require('../src/app/produkt/[slug]/AccessoryNavigation.tsx').default;
const html = renderToStaticMarkup(createElement(Component, { navigation: powerNav, accessoryName: power.name }));
for (const p of powerNav.configurations) {
  assert(html.includes(`href="/produkt/${p.slug}"`));
  if (p.partNumber) assert(html.includes(`PN: ${p.partNumber}`));
}
for (const p of powerNav.models) assert(html.includes(`href="/produkt/${p.slug}#akcesoria"`));
assert(!/nofollow|onclick=/i.test(html));
assert(html.includes('Ten zasilacz jest potrzebny do:'));
assert(html.includes('Zobacz produkt'));
assert(!/konfiguracj|Sprawdź zestaw|Dobierz zestaw/.test(html));
assert.equal(renderToStaticMarkup(createElement(Component, { navigation: { models: [], configurations: [] }, accessoryName: power.name })), '');
// A conditional feature requirement must retain its restriction in visible HTML.
const restricted = {...powerNav, configurations:[{id: 'conditional', slug: 'conditional', name: 'Stacja testowa', condition: 'lokalizowania terminala przez BLE'}]};
assert(renderToStaticMarkup(createElement(Component, {navigation:restricted, accessoryName: power.name})).includes('lokalizowania terminala przez BLE'));
fs.mkdirSync('work/accessory-internal-links', {recursive:true});
fs.writeFileSync('work/accessory-internal-links/after.json', JSON.stringify({accessories:index.size,cards,links,reverseCards,powerNav,examples:Array.from(index,([id,navigation])=>({id,...navigation})).filter(p=>p.models.length||p.configurations.length)},null,2));
console.log(JSON.stringify({PASS:true,accessories:index.size,cards,links,reverseCards,powerNav},null,2));
