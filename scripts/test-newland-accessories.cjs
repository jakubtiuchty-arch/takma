require('./test-newland-mt95-pro-iii.cjs');
const fs=require('fs'), assert=require('node:assert/strict');
const {products,subcategories}=require('../src/data/products.ts');
const {newlandMt95ProIiiAccessories: accessories}=require('../src/data/newland-mt95-pro-iii-accessories.ts');
const {getRequiredAccessories}=require('../src/app/produkt/[slug]/RequiredAccessories.tsx');
const {getRequiredAccessoriesCopy}=require('../src/lib/required-accessory-copy.ts');
const {filterProducts}=require('../src/data/products.ts');
assert.equal(accessories.length,23);
const dimensions=JSON.parse(fs.readFileSync('src/data/product-image-dims.json'));
for(const p of accessories){
 const pn=p.specifications.find(s=>s.name==='Part Number').value;
 assert.equal(products.filter(x=>x.id===p.id||x.slug===p.slug).length,1);
 assert.deepEqual(filterProducts({search:pn}).map(x=>x.id),[p.id], 'exact PN must resolve to its own accessory');
 assert(p.seoTitle.length<=65 && p.seoDescription.length<=165, p.id+' SEO length');
 assert(['available','unavailable'].includes(p.availability));
 for(const s of [p.name,p.description,p.shortDescription,p.seoTitle,p.seoDescription]){
  assert.equal(s,s.normalize('NFC'));assert(!/[\uFFFD]|Ã.|Å.|Â./u.test(s));
 }
 for(const image of p.images){const b=fs.readFileSync('public'+image);assert.deepEqual(dimensions[image],[b.readUInt32BE(16),b.readUInt32BE(20)]);}
 for(const r of getRequiredAccessories(p.description))assert(r.slug && products.some(x=>x.slug===r.slug));
 for(const id of [...p.relatedAccessories,...p.relatedProducts])assert(products.some(x=>x.id===id));
 for(const cat of p.subcategoryIds)assert(subcategories.find(x=>x.id===cat).productIds.includes(p.id));
}
const byPN=pn=>accessories.find(p=>p.specifications[0].value===pn);
assert.deepEqual(getRequiredAccessories(byPN('NLS-MCD9557-1CC').description).map(p=>p.pn),['ADP710','CBL-TC-N7']);
assert.deepEqual(getRequiredAccessories(byPN('NLS-CC-MT95-01').description).map(p=>p.condition),['ładowania z gniazda samochodowego','instalacji na stałe w pojeździe']);
assert.equal(getRequiredAccessories(byPN('NLS-CPA-UNIV').description).length,0,'included USB-C cable must not be bought twice');
assert(!byPN('NLS-BTY-MT9557-01').description.includes('6000'),'conflicting legacy battery capacity must not leak into Pro III');
assert(getRequiredAccessoriesCopy(['zasilania pojedynczej stacji','zasilania połączonych stacji'],'ze stacji').description.includes('Wybierz jeden zasilacz'));
assert.notEqual(byPN('MS105').images[0],byPN('MC105').images[0]);
console.log('PASS: 23 unique accessory cards, 22 model links, exact-PN search, SEO, Polish encoding, images, subcategories, verified requirements and alternatives.');
