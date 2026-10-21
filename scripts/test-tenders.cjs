const fs = require('fs')
const path = require('path')
const ts = require('typescript')
const assert = require('node:assert/strict')
const Module = require('module')
const originalLoad = Module._load
Module._load = function (name, ...rest) {
  if (name === '@/lib/db') return { prisma: new Proxy({}, { get() { throw new Error('Database access forbidden in unit tests') } }) }
  return originalLoad.call(this, name, ...rest)
}
const original = Module._resolveFilename
Module._resolveFilename = function (name, parent, ...rest) {
  if (name.startsWith('@/')) name = path.join(process.cwd(), 'src', name.slice(2))
  return original.call(this, name, parent, ...rest)
}
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, f)
const core = require('../src/lib/tenders/core.ts')
const { tenderWhere } = require('../src/lib/tenders/filters.ts')
const { analysisSchema, groupUnnumberedParts } = require('../src/lib/tenders/analysis.ts')
const { extract, links } = require('../src/lib/tenders/documents.ts')
const { publicUrl } = require('../src/lib/tenders/network.ts')
const JSZip = require('jszip')
async function main() {
  assert.equal(analysisSchema.parse({score:50,reason:'Sprawdź zakres',decision:'unknown',parts:[{id:'1',title:'Część 1',fit:'maybe',separateOffer:'unknown',scope:'Zakres',conditions:'Brak danych',evidence:'Dostawa czytników kodów kreskowych',sourceUrl:'https://example.org'}],warnings:[]}).parts[0].fit, 'maybe')
  const items = [1,2].map(i=>({id:`part_${i}`,title:i===1?'Drukarka kart':'Taśmy',fit:'yes',separateOffer:'unknown',deadline:null,scope:'Dostawa',conditions:'Warunki',evidence:'Cytat z ogłoszenia',sourceUrl:'https://example.org'}))
  assert.equal(groupUnnumberedParts(items).length, 1); assert.equal(groupUnnumberedParts(items)[0].separateOffer, 'unknown')
  assert.equal(groupUnnumberedParts(items.map(p=>({...p,title:'Część '+p.id,separateOffer:'yes'}))).length, 2)
  const format = require('@anthropic-ai/sdk/helpers/zod').zodOutputFormat(analysisSchema)
  assert.equal(core.normalizeEvidence('Drukarka — Zebra, 3 szt.'), core.normalizeEvidence('DRUKARKA - Zebra 3 szt'))
  assert.equal(format.type, 'json_schema'); assert.equal(format.schema.additionalProperties, false)
  for (const title of ['Dostawa drukarek kart plastikowych', 'Serwis Magicard', 'Kolektor danych', 'Czytników kodów kreskowych', 'Dostawa sprzętu informatycznego', 'Dostawa kart plastikowych', 'Naprawa drukarek etykiet']) assert(core.candidate({ orderObject: title, rawBody: '' }), title)
  assert(core.candidate({ orderObject: 'Duży pakiet', rawBody: 'x'.repeat(10000) + ' dostawa Zebra ZD421' }))
  assert(!core.candidate({ orderObject: 'Budowa drogi', rawBody: 'Identyfikator postępowania 123', cpvCodes: '45233100' }))
  const { bzpAmendment } = require('../src/lib/tenders/sources.ts')
  const change = bzpAmendment('<h3>Numer zmienianego ogłoszenia w BZP: <span>2026/BZP 00484313</span></h3>8.1. Termin składania ofert Przed zmianą: 2026-10-21 08:00 Po zmianie: 2026-10-23 08:00 8.3 Termin otwarcia ofert Po zmianie: 2026-10-23 09:00')
  assert.equal(change.number, '2026/BZP 00484313'); assert.equal(change.deadline.toISOString(), '2026-10-23T06:00:00.000Z')
  assert.equal(core.polishDate('2026-10-21 10:00:00').toISOString(), '2026-10-21T08:00:00.000Z')
  assert.equal(core.polishDate('2026-12-21 10:00:00').toISOString(), '2026-12-21T09:00:00.000Z')
  assert.equal(core.polishDate('2026-10-21+02:00').toISOString(), '2026-10-21T21:59:59.000Z')
  assert.equal(core.latestDeadline(['2026-10-20', '2026-11-20']).toISOString(), '2026-11-20T22:59:59.000Z')
  assert.equal(core.polishDate('not-a-date'), null)
  assert.equal(core.polishDate('2026-03-29 01:30:00').toISOString(), '2026-03-29T00:30:00.000Z')
  assert.equal(core.polishDate('2026-03-29 02:30:00'), null)
  assert.equal(core.polishDate('2026-10-25 02:30:00').toISOString(), '2026-10-25T01:30:00.000Z')
  assert.equal(core.polishDate('2026-02-31 10:00:00'), null)
  assert(core.snippets('x'.repeat(12000) + ' czytniki kodów kreskowych 25 sztuk ' + 'x'.repeat(12000), 12000).text.includes('czytniki kodów'))
  assert(tenderWhere('przeglad', new Date()).AND.some(c => c.analysisStatus?.in.includes('error')))
  assert(!JSON.stringify(tenderWhere('wszystkie', new Date())).includes('score'))
  assert.equal(links('<a href="/opz.docx?a=1&amp;b=2">OPZ</a>', 'https://example.org/x')[0].url, 'https://example.org/opz.docx?a=1&b=2')
  const zip = new JSZip(); zip.file('word/document.xml', '<w:document><w:p><w:r><w:t>Część 7: Zebra &amp; kolektory</w:t></w:r></w:p></w:document>')
  assert((await extract(await zip.generateAsync({ type: 'nodebuffer' }), 'opz.docx')).text.includes('Część 7: Zebra & kolektory'))
  const book = new JSZip(); book.file('xl/workbook.xml', '<workbook/>'); book.file('xl/sharedStrings.xml', '<sst><si><t>Drukarki etykiet</t></si></sst>'); book.file('xl/worksheets/sheet1.xml', '<sheet><c t="s"><v>0</v></c><c><v>12</v></c></sheet>')
  const sheet = await extract(await book.generateAsync({ type: 'nodebuffer' }), 'ceny.xlsx'); assert(sheet.text.includes('Drukarki etykiet')); assert(sheet.text.includes('12'))
  const archive = new JSZip(); archive.file('opz.docx', await zip.generateAsync({ type: 'nodebuffer' })); archive.file('nieczytelny.doc', 'abc')
  assert.equal((await extract(await archive.generateAsync({ type: 'nodebuffer' }), 'docs.zip')).incomplete, true)
  await assert.rejects(() => extract(Buffer.from('binary'), 'spec.doc'))
  for (const url of ['http://example.org', 'https://127.0.0.1/test', 'https://10.0.0.1', 'https://[::1]', 'https://[::ffff:127.0.0.1]', 'https://169.254.169.254', 'https://u:p@example.org', 'https://example.org:8443']) await assert.rejects(() => publicUrl(url), url)
  if (process.env.LIVE === '1') {
    const { bzpPage, tedPage, bkPage, platformPage } = require('../src/lib/tenders/sources.ts')
    for (const [name, fn] of [['BZP', () => bzpPage('2026-10-20', 1)], ['TED', () => tedPage('2026-10-19', '2026-10-21', 1)], ['BK', () => bkPage('2026-08-21', '2026-10-21', 1, 1)], ['PlatformaZakupowa', () => platformPage(0, 1)]]) {
      const r = await fn(); console.log(name, { raw: r.raw, candidates: r.notices.length, done: r.done, sample: r.notices[0]?.orderObject.slice(0, 90) })
    }
  }
  console.log('PASS: dopasowanie, późne fragmenty OPZ, terminy PL, filtry, DOCX/XLSX/ZIP, niepełne pliki, prywatne URL')
}
main().catch(e => { console.error(e); process.exit(1) })
