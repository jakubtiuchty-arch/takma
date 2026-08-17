/**
 * Wykrywa produkty, które wskazują na nieistniejące pliki zdjęć.
 *
 * Powód: w sierpniu 2026 osiem produktów w products.ts wskazywało na pliki,
 * których nigdy nie dodano do public/images/products. Strony pokazywały zepsute
 * obrazki, a feed wysyłał te adresy do Merchant Center — Google pobierał stronę
 * błędu 404 jako „obraz" i odrzucał oferty z komunikatem „Unsupported image type".
 * Nic tego nie sygnalizowało, bo build przechodzi bez ostrzeżeń.
 *
 *   node scripts/check-product-images.mjs
 *
 * Kod wyjścia 1, gdy czegoś brakuje — nadaje się do wywołania przed deployem.
 */
import { existsSync, readFileSync } from 'fs'

const SRC = 'src/data/products.ts'
const src = readFileSync(SRC, 'utf8')

// Wyciągamy ścieżki obrazów wraz z numerem linii — bez importowania modułu,
// bo products.ts to TypeScript i ma dziesiątki tysięcy linii.
const missing = []
const seen = new Set()
src.split('\n').forEach((line, idx) => {
  for (const m of line.matchAll(/'(\/images\/[^']+)'/g)) {
    const rel = m[1]
    if (seen.has(rel)) continue
    seen.add(rel)
    if (!existsSync('public' + rel)) missing.push({ rel, line: idx + 1 })
  }
})

console.log(`sprawdzono ${seen.size} unikalnych ścieżek w ${SRC}`)
if (!missing.length) {
  console.log('Wszystkie pliki na miejscu.')
  process.exit(0)
}
console.log(`\nBRAKUJE ${missing.length} plików:`)
for (const m of missing) console.log(`  ${SRC}:${m.line}  ${m.rel}`)
console.log('\nNapraw ścieżkę albo podstaw /images/products/placeholder.svg —')
console.log('feed pomija oferty bez zdjęcia rastrowego, więc placeholder nie trafi do Google.')
process.exit(1)
