/** Regression: empty optional text must clear saved offer fields, not skip the update. No database or email calls. */
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, f)
let saved
const prisma = {
  quote: { findUnique: async () => ({ status: 'DRAFT', customerId: null }), update: async ({ data }) => { saved = data } },
  quoteItem: { deleteMany: async () => {} },
}
const original = Module._load
Module._load = function (id, parent, main) {
  if (id === '@/lib/db') return { prisma }
  if (id === '@/lib/quotes') return { calculateQuoteTotals: () => ({ subtotalNetto: 100, vatAmount: 23, totalBrutto: 123 }) }
  if (id === 'next/cache') return { revalidatePath: () => {} }
  if (id === 'next/navigation') return { redirect: () => { throw new Error('TEST_REDIRECT') } }
  if (id.startsWith('@/lib/')) return {}
  return original.call(this, id, parent, main)
}
const { updateQuote } = require(path.resolve('src/actions/admin-quotes.ts'))
const base = { client: { company: 'Test' }, items: [], validDays: 14, paymentTerms: '', deliveryTerms: '' }
;(async () => {
  for (const value of ['', undefined, 'Nowa treść\nDrugi wiersz']) {
    await assert.rejects(updateQuote('test-only', { ...base, notes: value, internalNotes: value, freebiesNote: value }), /TEST_REDIRECT/)
    for (const field of ['notes', 'internalNotes', 'freebiesNote']) assert.equal(saved[field], value || null, field)
  }
  console.log('OK: empty and omitted fields clear old text; nonempty multiline text is preserved.')
})().catch(err => { console.error(err); process.exitCode = 1 })
