/** Offline contract tests: no credentials, database, email or production requests. */
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, f)
const gus = require(path.resolve('src/lib/gus-regon.ts'))
const nip = '5272820369'
const row = `<dane><Nazwa>NARODOWA AGENCJA WYMIANY AKADEMICKIEJ</Nazwa><Nip>${nip}</Nip><Regon>368205180</Regon><Ulica>ul. Polna</Ulica><NrNieruchomosci>40</NrNieruchomosci><KodPocztowy>00-635</KodPocztowy><Miejscowosc>Warszawa</Miejscowosc></dane>`
const xml = `<root>${row}</root>`
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const soap = (method, result, mtom = false) => new Response(`${mtom ? '--boundary\r\nContent-Type: application/xop+xml\r\n\r\n' : ''}<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"><s:Body><${method}Response><${method}Result>${escape(result)}</${method}Result></${method}Response></s:Body></s:Envelope>${mtom ? '\r\n--boundary--' : ''}`)
const originalFetch = global.fetch
let authenticated = true
const originalLoad = Module._load
Module._load = function(id, parent, main) {
  if (id === '@/lib/auth') return { getSessionFromCookie: async () => authenticated ? { userId: 'test' } : null }
  if (id === '@/lib/gus-regon') return gus
  return originalLoad.call(this, id, parent, main)
}
const { GET } = require(path.resolve('src/app/api/admin/nip/route.ts'))
const request = value => ({ nextUrl: new URL(`https://example.test/api/admin/nip?nip=${encodeURIComponent(value)}`) })
;(async () => {
  assert.equal(gus.normalizeNip('527-282-03-69'), nip)
  assert.equal(gus.normalizeNip(' 527 282 03 69 '), nip)
  for (const bad of ['5272820368', '0000000000', '527282036', 'PL5272820369', 'abcdefghij']) assert.equal(gus.normalizeNip(bad), null)
  assert.equal(gus.parseGusSearchResult(xml, nip).address, 'ul. Polna 40, 00-635 Warszawa')
  assert.equal(gus.parseGusSearchResult('<root/>', nip), null)
  assert.equal(gus.parseGusSearchResult(xml.replace(nip, '1111111111'), nip), null)
  assert.throws(() => gus.parseGusSearchResult('<html>outage</html>', nip), /unavailable/)
  assert.equal(gus.parseGusSearchResult(`<root>${row.replace('368205180', '36820518000001').replace('AGENCJA', 'ODDZIAŁ')}${row}</root>`, nip).regon, '368205180')
  process.env.GUS_BIR_API_KEY = 'test-key'
  let calls = []
  global.fetch = async (url, options) => {
    calls.push({ url, options })
    if (options.body.includes('<b:Zaloguj>')) return soap('Zaloguj', '12345678901234567890', true)
    assert.equal(options.headers.sid, '12345678901234567890')
    if (options.body.includes('<b:DaneSzukajPodmioty>')) return soap('DaneSzukajPodmioty', xml, true)
    return soap('Wyloguj', 'true')
  }
  let res = await GET(request(nip))
  assert.equal(res.status, 200)
  assert.equal((await res.json()).source, 'gus')
  assert.equal(calls.length, 3)
  assert(calls[1].options.body.includes(`<d:Nip>${nip}</d:Nip>`))
  assert(calls[2].options.body.includes('<b:Wyloguj>'))
  authenticated = false
  calls = []
  assert.equal((await GET(request(nip))).status, 401)
  assert.equal(calls.length, 0)
  authenticated = true
  assert.equal((await GET(request('5272820368'))).status, 400)
  assert.equal(calls.length, 0)
  global.fetch = async (url, options) => {
    if (String(url).includes('/api/search/')) return Response.json({ result: { subject: null } })
    if (options.body.includes('<b:Zaloguj>')) return soap('Zaloguj', '12345678901234567890')
    if (options.body.includes('<b:DaneSzukajPodmioty>')) return soap('DaneSzukajPodmioty', '')
    if (options.body.includes('<b:GetValue>')) return soap('GetValue', '4')
    return soap('Wyloguj', 'true')
  }
  assert.equal((await GET(request(nip))).status, 404)
  delete process.env.GUS_BIR_API_KEY
  res = await GET(request(nip))
  assert.equal(res.status, 503)
  assert.match((await res.json()).error, /Brak klucza GUS/)
  global.fetch = async () => Response.json({ result: { subject: { name: 'Firma VAT', nip, workingAddress: 'Adres' } } })
  res = await GET(request(nip))
  assert.equal(res.status, 200)
  assert.equal((await res.json()).source, 'mf')
  process.env.GUS_BIR_API_KEY = 'test-key'
  global.fetch = async (url) => String(url).includes('/api/search/') ? Response.json({ result: { subject: null } }) : new Response('error', { status: 503 })
  assert.equal((await GET(request(nip))).status, 503)
  console.log('OK: GUS institution, SOAP/MTOM, address, entity selection, checksum, authentication, no match, configuration/outage and VAT fallback.')
})().catch(err => { console.error(err); process.exitCode = 1 }).finally(() => { global.fetch = originalFetch; delete process.env.GUS_BIR_API_KEY })
