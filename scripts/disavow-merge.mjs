#!/usr/bin/env node
/**
 * Deterministyczne scalanie listy disavow dla takma.com.pl.
 *
 * Znajduje najnowszy plik `disavow-merged-final-v{N}.txt` w roocie repo,
 * dokleja nowe domeny spamu, deduplikuje, sortuje alfabetycznie i zapisuje
 * `disavow-merged-final-v{N+1}.txt`. Używane przez cotygodniowy agent
 * obrony przed spamem (wykrywanie robi agent przez Ahrefs MCP, scalanie ten skrypt).
 *
 * Użycie:
 *   node scripts/disavow-merge.mjs nowe-domeny.txt
 *   node scripts/disavow-merge.mjs --domains "a.store,b.shop,c.com"
 *   (--note "opis fali" opcjonalnie do nagłówka)
 *
 * Wyjście: ścieżka nowego pliku + statystyki + lista faktycznie dodanych (JSON na końcu).
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const args = process.argv.slice(2)

function argVal(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

// 1. Zbierz nowe domeny (z pliku pozycyjnego lub --domains)
let raw = ''
const note = argVal('--note') || ''
const domainsArg = argVal('--domains')
const fileArg = args.find((a) => !a.startsWith('--') && a !== domainsArg && a !== note)
if (domainsArg) raw = domainsArg.replace(/,/g, '\n')
else if (fileArg) raw = readFileSync(fileArg, 'utf8')
else { console.error('Brak wejścia. Podaj plik lub --domains "a,b,c".'); process.exit(1) }

const clean = (d) => d.trim().toLowerCase().replace(/^domain:/, '').replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/[.,;]+$/, '')
const newDomains = [...new Set(raw.split('\n').map(clean).filter((d) => d && d.includes('.')))]

// 2. Znajdź najnowszy plik disavow
const re = /^disavow-merged-final-v(\d+)\.txt$/
let latest = null, latestN = 0
for (const f of readdirSync(ROOT)) {
  const m = f.match(re)
  if (m && +m[1] >= latestN) { latestN = +m[1]; latest = f }
}
if (!latest) { console.error('Nie znaleziono disavow-merged-final-v*.txt w roocie.'); process.exit(1) }

// 3. Wczytaj istniejące domeny
const existing = readFileSync(join(ROOT, latest), 'utf8')
  .split('\n').filter((l) => l.startsWith('domain:')).map((l) => clean(l))
const existingSet = new Set(existing)

// 4. Faktycznie nowe (nie ma ich jeszcze)
const added = newDomains.filter((d) => !existingSet.has(d))
const merged = [...new Set([...existing, ...added])].sort((a, b) => a.localeCompare(b))

// 5. Zapisz v{N+1}
const nextN = latestN + 1
const today = (argVal('--date') || new Date().toISOString().slice(0, 10))
const out = join(ROOT, `disavow-merged-final-v${nextN}.txt`)
const header = [
  `# Disavow file for takma.com.pl - v${nextN} MERGED`,
  `# Created: ${today}`,
  `# Updated: +${added.length} nowych domen (poprzednia wersja: v${latestN}, ${existing.length} domen)`,
  note ? `# Fala: ${note}` : null,
  `# Total: ${merged.length} unikalnych domen`,
  `# Mechanizm: auto-scalanie (scripts/disavow-merge.mjs) — wykrywanie przez Ahrefs (first_seen, is_spam + wzorce PBN)`,
].filter(Boolean).join('\n')
writeFileSync(out, header + '\n' + merged.map((d) => `domain:${d}`).join('\n') + '\n')

// 6. Raport
console.log(`Baza: ${latest} (${existing.length} domen)`)
console.log(`Nowych podanych: ${newDomains.length} | faktycznie dodanych: ${added.length}`)
console.log(`Zapisano: disavow-merged-final-v${nextN}.txt (${merged.length} domen)`)
if (added.length) console.log('Dodane:\n' + added.map((d) => '  + ' + d).join('\n'))
console.log('\nRESULT_JSON=' + JSON.stringify({ base: latest, nextFile: `disavow-merged-final-v${nextN}.txt`, total: merged.length, addedCount: added.length, added }))
