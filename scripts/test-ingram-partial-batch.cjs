const fs = require('node:fs'), ts = require('typescript'), assert = require('node:assert/strict')
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, filename)
process.env.INGRAM_API_KEY = 'fixture'
const good = 'TC22B6CBE2', bad = 'TC22UNKNOWN'
let calls = 0
global.fetch = async (_, options) => {
  calls++
  const both = options.body.includes(good) && options.body.includes(bad)
  const xml = both || options.body.includes(bad)
    ? '<Error>cb2o_error_line_errors</Error>'
    : `<Product><ItemID>SB${good}</ItemID><VPN>${good}</VPN><YourPrice>3553.86</YourPrice><Currency>PLN</Currency><QtyTotalAvailable>27</QtyTotalAvailable><QtyLocalWarehouseAvailable>27</QtyLocalWarehouseAvailable></Product>`
  return { ok: true, status: 200, text: async () => xml }
}
async function main() {
  const { lookupStock } = require('../src/lib/ingram.ts')
  const result = await lookupStock([good, bad])
  assert.equal(result[0].found, true)
  assert.equal(result[0].ingramPrice, 3553.86)
  assert.equal(result[0].stockPL, 27)
  assert.equal(result[1].found, false)
  assert.equal(calls, 3)
  await lookupStock([good])
  assert.equal(calls, 3, 'successful retry should populate the normal cache')
  console.log('PASS: a failing line must not hide the price of a valid PN')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
