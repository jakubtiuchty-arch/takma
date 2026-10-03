const fs = require('fs'), ts = require('typescript'), assert = require('node:assert/strict'), Module = require('module'), path = require('path');
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = (m, file) => m._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop:true}}).outputText, file);
const {createElement} = require('react'), {renderToStaticMarkup} = require('react-dom/server');
const original = Module._load;
Module._load = function(id, parent, main) {
  if (id === '@/data/products') return original.call(this, path.resolve('src/data/products.ts'), parent, main);
  if (id === '@/lib/required-accessory-copy') return original.call(this, path.resolve('src/lib/required-accessory-copy.ts'), parent, main);
  if (id === 'next/image') return {__esModule:true,default:()=>null};
  if (id === 'next/link') return {__esModule:true,default:({children,href})=>createElement('a',{href},children)};
  if (id === '@/components/ui/Icons') return {CheckIcon:()=>null,PlusIcon:()=>null};
  if (id === '@/store/cartStore') return {useCartStore:()=>({addItem(){},closeDrawer(){},openDrawer(){},isInCart:()=>false})};
  if (id === '@/lib/ga-events') return {trackAddToCart(){}};
  if (id === './StockInfo') return {useStockData:()=>({stockData:new Map(),loading:false})};
  return original.call(this,id,parent,main);
};
const {getRequiredAccessoriesCopy:copy,removeRequiredAccessoryBlocks:clean,getRequiredAccessoryConditionText:sentence} = require('../src/lib/required-accessory-copy.ts');
assert.equal(copy(['codziennego ładowania baterii','ładowania przez port Micro-USB'],'z produktu').heading,'Wybierz jeden sposób ładowania.');
assert.equal(copy(['zasilania z instalacji pojazdu','zasilania z gniazda zapalniczki'],'z produktu').heading,'Wybierz sposób zasilania.');
assert.equal(copy(['montażu na szybie','montażu na profilu wózka'],'z produktu').heading,'Wybierz sposób montażu.');
assert(copy(['lokalizowania wyłączonego terminala'],'z produktu').description.includes('Nie jest potrzebna do zwykłego używania'));
assert.equal(copy(['TC501 bez osłony','TC701'],'z produktu').heading,'Dobierz elementy do modelu terminala.');
const synthetic='Opis.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz (PN)](/produkt/zasilacz)\n\nNie zdejmuj osłony.\n\n**Wymagane dla montażu — sprzedawane osobno**\n\n- Uchwyt\n\nDokup tylko te elementy, których jeszcze nie masz.\n\n## Montaż\n\nZachowaj przewód.';
const cleaned=clean(synthetic);
assert(!cleaned.includes('**Wymagane'));assert(cleaned.includes('Nie zdejmuj osłony.'));assert(cleaned.includes('Zachowaj przewód.'));assert(!cleaned.includes('Dokup tylko'));
const {products}=require('../src/data/products.ts');
const {getRequiredAccessories}=require('../src/app/produkt/[slug]/RequiredAccessories.tsx');
const List=require('../src/app/produkt/[slug]/RequiredAccessoryList.tsx').default;
const coverage=JSON.parse(fs.readFileSync('docs/accessory-catalog-coverage.json'));
const ids=new Set(Object.values(coverage).flat());let cards=0,conditions=0,generic=0;
for(const p of products.filter(p=>ids.has(p.id))){
 const items=getRequiredAccessories(p.description);
 if(!items.length)continue;cards++;
 assert(!clean(p.description).includes('**Wymagane'),p.id+': orphaned requirement heading');
 for(const item of items){if(item.condition){conditions++;assert(sentence(item.condition).endsWith('.'));}if(!item.slug)generic++;}
}
const genericHtml=renderToStaticMarkup(createElement(List,{items:[{id:'base',slug:'',name:'Posiadana baza ShareCradle',availability:'unavailable',categoryId:'akcesoria',manufacturerId:'zebra'}]}));
assert(!/Niedostępny|Cena na zapytanie|Do koszyka|Sprawdzanie dostępności/.test(genericHtml));
assert(genericHtml.includes('Dobierz element do posiadanego zestawu.'));
const cable=products.find(p=>p.id==='zebra-cable-usbc-et4x');
assert(!clean(cable.description).includes('Co jest potrzebne'));
const mixed=renderToStaticMarkup(createElement(List,{items:[{id:'power',slug:'power',name:'Zasilacz',pn:'PN',availability:'available',categoryId:'akcesoria',manufacturerId:'zebra'}],showCommonRequirement:true}));
assert(mixed.includes('Ten element jest wymagany przy każdym sposobie użycia.'));
console.log(JSON.stringify({PASS:true,accessories:ids.size,requiredCards:cards,conditionalRows:conditions,configurationRequirements:generic}));
