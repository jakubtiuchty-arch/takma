const fs = require('node:fs'), ts = require('typescript'), assert = require('node:assert/strict')
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, filename)
const { rozbijNumeryKatalogowe } = require('../src/lib/part-number-list.ts')

const przypadki = [
  ['RT112-0A6FUMDG, RT112-QA6FUMDG', ['RT112-0A6FUMDG', 'RT112-QA6FUMDG']],
  ['MS633-DUBU00-SG (MS633), MS633-OUBU00-SG (MS633 LR)', ['MS633-DUBU00-SG', 'MS633-OUBU00-SG']],
  ['P11050019 (15,6"), P11050016 (18,5")', ['P11050019', 'P11050016']],
  ['PC45T000000200 (bazowy)', ['PC45T000000200']],
  ['1990IXR-3USB-R / 1990IXR-3SER-R / 1990IXR-3-R', ['1990IXR-3USB-R', '1990IXR-3SER-R', '1990IXR-3-R']],
  ['C31CH76102BK / C31CH76102MK (Ae) · C31CH76202BK / C31CH76202MK (Pe)', ['C31CH76102BK', 'C31CH76102MK', 'C31CH76202BK', 'C31CH76202MK']],
  ['MC300YMCKO/S', ['MC300YMCKO/S']],
  ['UNQ/MFRC1', ['UNQ/MFRC1']],
  ['Prima 831', ['Prima 831']],
  ['A1, A1 , B2', ['A1', 'B2']],
  ['X'.repeat(51), []],
  ['', []],
  [undefined, []],
  [null, []],
]

for (const [wejscie, oczekiwane] of przypadki) {
  assert.deepEqual(rozbijNumeryKatalogowe(wejscie), oczekiwane, `wejście: ${JSON.stringify(wejscie)}`)
}
console.log(`PASS: rozbijNumeryKatalogowe — ${przypadki.length} przypadków`)
