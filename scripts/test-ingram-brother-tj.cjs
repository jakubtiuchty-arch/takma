const fs = require('node:fs'), ts = require('typescript'), assert = require('node:assert/strict')
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, filename)
process.env.INGRAM_API_KEY = 'fixture'
const expected = { TJ4021TNRZ1: 'DITJ4021TNRZ1', TJ4121TNRZ1: 'DITJ4121TNRZ1', BPAHA2L004: 'DIBPAHA2L004', BPAPRL004: 'DIBPAPRL004', TD4650TNWBRZ1: 'DITD4650TNWBRZ1', PAWI002: 'DIPAWI002', 'ZD4A042-30EM00EZ': 'ZBZD4A042-30EM00EZ', 'PD45S0F0010000200': 'ONPD45S0F0010000200' }
global.fetch = async (_, options) => {
  const body = options.body
  for (const item of Object.values(expected)) assert.ok(body.includes(`ItemID="${item}"`), `missing correct distributor identifier ${item}`)
  return { ok: true, status: 200, text: async () => '<Products>' + Object.entries(expected).map(([pn, item]) => `<Product><ItemID>${item}</ItemID><VPN>${pn}</VPN><YourPrice>100</YourPrice><Currency>PLN</Currency><QtyTotalAvailable>2</QtyTotalAvailable><QtyLocalWarehouseAvailable>0</QtyLocalWarehouseAvailable></Product>`).join('') + '</Products>' }
}
require('../src/lib/ingram.ts').lookupStock(Object.keys(expected)).then(rows => {
  assert.equal(rows.length, Object.keys(expected).length)
  rows.forEach(row => { assert.equal(row.found, true); assert.equal(row.totalStock, 2); assert.ok(row.price > 0) })
  console.log('PASS: Brother TJ/BPA PN reach Ingram with DI prefix; Zebra and Honeywell routing preserved')
}).catch(error => { console.error(error); process.exitCode = 1 })
