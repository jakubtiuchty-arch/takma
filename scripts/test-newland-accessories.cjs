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
const frames=require('../src/data/product-image-frames.json');
const {getProductImageFrameStyle}=require('../src/lib/product-image-frame.ts');
assert.equal(Object.keys(frames).length,23);
for(const p of accessories){
 const src=p.images[0], bounds=frames[src]; assert(bounds,p.id+' normalized frame');
 const [l,t,r,b]=bounds; assert(l>=0&&t>=0&&r<=1&&b<=1&&r>l&&b>t);
 const style=getProductImageFrameStyle(src);
 const parts=/scale\(([^)]+)\) translate\(([^%]+)%, ([^%]+)%\)/.exec(style.transform);
 assert(parts);const s=Number(parts[1]),x=Number(parts[2])/100,y=Number(parts[3])/100;
 const display=[.5+s*(l-.5+x),.5+s*(t-.5+y),.5+s*(r-.5+x),.5+s*(b-.5+y)];
 assert(display.every(v=>v>=.168925-1e-8 && v<=.831075+1e-8),src+' complete product and margins');
 assert(Math.abs((display[0]+display[2])/2-.5)<1e-8 && Math.abs((display[1]+display[3])/2-.5)<1e-8,src+' centered');
 assert(Math.abs(Math.max(display[2]-display[0],display[3]-display[1])-.66215)<1e-8,src+' uniform extent reduced by another 5%');
 assert.equal(style.padding,0);
}
assert.equal(getProductImageFrameStyle('/images/products/placeholder.svg'),undefined);
assert.equal(getProductImageFrameStyle('/images/products/newland-mt95-kambur-pro-iii-front-cutout-v2.png'),undefined);
console.log('PASS: all 23 accessory photos reduced by another 5%, with uniform 66.215% product extent, centered frames and at least 16.8925% margins; unrelated photos retain their layout.');
