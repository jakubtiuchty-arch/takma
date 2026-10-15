const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')
const Module = require('node:module')
const resolve = Module._resolveFilename
Module._resolveFilename = function(request, parent, ...rest) {
  return resolve.call(this, request.startsWith('@/') ? path.resolve(__dirname, '../src', request.slice(2)) : request, parent, ...rest)
}
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true }, fileName: filename,
}).outputText, filename)
const { rfidLabelProducts, rfidLabelPartNumbers } = require('../src/data/rfid-label-products.ts')
const { products, isLabelPN, getSubcategoryBySlug, filterProducts } = require('../src/data/products.ts')
const { productVariantSchema, selectProductVariant } = require('../src/lib/product-variant-offers.ts')
const { rfidLabelIdsForPrinter, rfidLabelPrinterLinks } = require('../src/data/rfid-label-compatibility.ts')
assert.equal(rfidLabelProducts.length, 21)
assert.equal(rfidLabelPartNumbers.size, 25)
assert.equal(getSubcategoryBySlug('etykiety-rfid-zebra').productIds.length, 21)
assert.equal(new Set(rfidLabelProducts.map(p => p.seoTitle)).size, 21)
assert.equal(new Set(rfidLabelProducts.map(p => p.seoDescription)).size, 21)
for (const p of rfidLabelProducts) {
  assert(products.some(product => product.id === p.id))
  assert(p.subcategoryIds.includes('etykiety-rfid'))
  assert(!p.subcategoryIds.includes('etykiety-termiczne') && !p.subcategoryIds.includes('etykiety-termotransferowe'))
  assert(p.images.length && p.images.every(image => fs.existsSync(path.join(__dirname, '../public', image))))
  assert(p.imageDescriptions.every(alt => alt.length <= 125))
  assert(p.seoDescription.length <= 160)
  assert(!/SAMPLE|próbek|pochodzą ze specyfikacji|do potwierdzenia|FCC/i.test(JSON.stringify(p)))
  assert(p.specifications.some(s => s.name === 'Jednostka sprzedaży' && s.value === '1 rolka'))
  for (const id of p.relatedProducts) assert(products.some(product => product.id === id && product.categoryId === 'drukarki-etykiet'))
  for (const v of p.variants) {
    assert(isLabelPN(v.partNumber), v.partNumber)
    assert(filterProducts({ search: v.partNumber }).some(result => result.id === p.id))
    for (const key of Object.keys(v.attributes)) assert(new Set(p.variants.map(item => item.attributes[key])).size > 1, `${p.slug}: constant ${key}`)
  }
  const rows = p.variants.map((v, i) => ({partNumber:v.partNumber,found:true,price:100+i*100,stockPL:i===0?0:2,stockDE:0,inDelivery:3,totalStock:3,availability:i===0?'on-order':'available',deliveryText:'',lastSync:'2026-10-15T20:00:00Z'}))
  const schema = productVariantSchema(p, rows)
  assert.equal(schema.hasVariant.length,p.variants.length)
  assert.equal(schema.hasVariant[0].offers.price,'123.00')
  assert.equal(schema.hasVariant[0].offers.availability,'https://schema.org/OutOfStock')
  if(rows.length>1) assert.equal(selectProductVariant(p,rows).partNumber,rows[1].partNumber)
  assert(productVariantSchema(p,[]).hasVariant.every(v=>!v.offers))
}
for(const pn of ['10026764','10026766','10026768','10026770']) assert(!rfidLabelPartNumbers.has(pn))
const mobile=rfidLabelProducts.find(p=>p.slug.endsWith('zbr2100-mobilne'))
assert.deepEqual(mobile.relatedProducts,[])
assert(mobile.specifications.some(s=>s.name==='Kompatybilność'&&/średnicę gotowej rolki/.test(s.value)))
for(const p of rfidLabelProducts.filter(p=>/silverline/.test(p.slug))){
  assert.deepEqual(p.relatedProducts,['zebra-zt411-rfid'])
  assert(p.specifications.some(s=>s.name==='Kompatybilność'&&/T5 On-Metal/.test(s.value)))
}
// Każda relacja działa w obie strony, bez utraty wymagań adaptera lub T5.
for(const p of rfidLabelProducts){
  const link=rfidLabelPrinterLinks[p.id]
  assert.deepEqual(p.relatedProducts,link?.printerIds??[])
  for(const printerId of p.relatedProducts){
    const printer=products.find(p=>p.id===printerId)
    assert(printer.subcategoryIds.includes('drukarki-rfid'))
    assert(rfidLabelIdsForPrinter(printerId,link.requirement==='on-metal-t5').includes(p.id))
    if(link.requirement==='adapter-76') assert(printer.subcategoryIds.includes('biurkowe-drukarki-etykiet'))
    if(link.requirement==='on-metal-t5') assert(printer.variants.some(v=>/-T5/.test(v.partNumber)))
    const width=printerId==='zebra-zd611r'?54:104
    for(const v of p.variants){
      const mm=Number(v.name.match(/^(\d+(?:[.,]\d+)?)/)[1].replace(',','.'))
      assert(mm<=width,`${v.partNumber}: ${mm} mm exceeds ${printerId}`)
    }
  }
}
assert.equal(rfidLabelIdsForPrinter('zebra-zd621r').length,5)
assert.equal(rfidLabelIdsForPrinter('zebra-zd611r').length,2)
assert.equal(rfidLabelIdsForPrinter('zebra-zt411-rfid').length,7)
assert.equal(rfidLabelIdsForPrinter('zebra-zt411-rfid',true).length,5)
assert.equal(rfidLabelIdsForPrinter('zebra-zt421-rfid').length,5)
assert.equal(rfidLabelIdsForPrinter('zebra-zt620-rfid').length,5)
for(const id of ['zebra-zq511-rfid','zebra-zq521-rfid','zebra-zq630-plus-rfid','zebra-zt411','zebra-zd621t']){
  assert.deepEqual(rfidLabelIdsForPrinter(id),[])
  assert.deepEqual(rfidLabelIdsForPrinter(id,true),[])
}
for(const p of rfidLabelProducts.filter(p=>/metal-skin|bt713/.test(p.slug))) assert.deepEqual(p.relatedProducts,[])
console.log('PASS: 21 cards / 25 PN; pricing, PN search, live schema, assets, SEO; bidirectional RFID links; widths; adapter/T5 requirements; unconfirmed rolls excluded')
