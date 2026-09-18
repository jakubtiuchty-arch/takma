// Generuje src/data/product-image-dims.json: pierwsze zdjęcie każdego produktu → [szerokość, wysokość].
// Metadane OG muszą deklarować prawdziwe wymiary obrazu; szablon nie może czytać public/ w runtime na Vercelu.
// Uruchom po dodaniu lub podmianie zdjęć produktów: node scripts/generate-image-dims.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(new URL('..', import.meta.url).pathname)
const source = readFileSync(resolve(root, 'src/data/products.ts'), 'utf8')
const paths = new Set([...source.matchAll(/images:\s*\[\s*'([^']+)'/g)].map(m => m[1]))

function pngSize(b) {
  if (b.length < 24 || b.toString('latin1', 1, 4) !== 'PNG') return null
  return [b.readUInt32BE(16), b.readUInt32BE(20)]
}
function jpegSize(b) {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null
  let i = 2
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i++; continue }
    const marker = b[i + 1]
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue }
    const len = b.readUInt16BE(i + 2)
    if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
      return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]
    }
    i += 2 + len
  }
  return null
}
function webpSize(b) {
  if (b.toString('latin1', 0, 4) !== 'RIFF' || b.toString('latin1', 8, 12) !== 'WEBP') return null
  const chunk = b.toString('latin1', 12, 16)
  if (chunk === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)]
  if (chunk === 'VP8L') { const bits = b.readUInt32LE(21); return [1 + (bits & 0x3fff), 1 + ((bits >> 14) & 0x3fff)] }
  if (chunk === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
  return null
}

const dims = {}
let skipped = 0
for (const p of [...paths].sort()) {
  const file = resolve(root, 'public', p.replace(/^\//, ''))
  if (!existsSync(file)) { skipped++; continue }
  const b = readFileSync(file)
  const size = pngSize(b) ?? jpegSize(b) ?? webpSize(b)
  if (size && size[0] > 0 && size[1] > 0) dims[p] = size
  else skipped++
}
writeFileSync(resolve(root, 'src/data/product-image-dims.json'), JSON.stringify(dims, null, 0) + '\n')
console.log(`product-image-dims.json: ${Object.keys(dims).length} obrazów, pominięto ${skipped} (brak pliku lub SVG)`)
