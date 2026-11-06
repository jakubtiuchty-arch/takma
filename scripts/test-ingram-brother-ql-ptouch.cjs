// Regresja przypisania prefiksu dystrybutora: Brother QL i P-touch idą z „DI”,
// a Honeywell i Zebra zostają przy swoich prefiksach.
const fs = require('node:fs'), ts = require('typescript'), assert = require('node:assert/strict')
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, filename)
process.env.INGRAM_API_KEY = 'fixture'
const { convertSkuToIngram } = require('../src/lib/ingram.ts')
const expected = {
  PD4500BE030000300: 'ONPD4500BE030000300',
  'ZD4A042-30EM00EZ': 'ZBZD4A042-30EM00EZ',
  TD4410DXX1: 'DITD4410DXX1',
  QL820NWBCZG1: 'DIQL820NWBCZG1',
  QL820NWBCVMXX1: 'DIQL820NWBCVMXX1',
  QL600BXX1: 'DIQL600BXX1',
  QL1110NWBCZG1: 'DIQL1110NWBCZG1',
  PTP710BTZG1: 'DIPTP710BTZG1',
  PTE560BTVPRG1: 'DIPTE560BTVPRG1',
  PTD410RG1: 'DIPTD410RG1',
  PTE110G1: 'DIPTE110G1',
  PTP950NWZG1: 'DIPTP950NWZG1',
  PTH110: 'DIPTH110',
  PTN10: 'DIPTN10',
  PM45A10000000200: 'ONPM45A10000000200',
  PX940A00100060200: 'ONPX940A00100060200',
}
for (const [pn, item] of Object.entries(expected)) assert.equal(convertSkuToIngram(pn), item, pn)
console.log(`PASS: ${Object.keys(expected).length} PN — Brother QL i P-touch z prefiksem DI, Honeywell ON, Zebra ZB`)
