import { getAllLabelPartNumbers } from '../src/data/products'
import * as fs from 'fs'
import * as path from 'path'
import * as readline from 'readline'

/**
 * Regeneruje src/data/label-core.ts — mapę PN → średnica rdzenia (gilzy) etykiety.
 *
 * Źródła (w kolejności pewności):
 *  1. SEED: istniejące wpisy w label-core.ts (pierwotnie z Jarltecha, item_description pole C).
 *     Walidowane na próbce → traktujemy jako prawdę; przy konflikcie z feedem NIE nadpisujemy,
 *     tylko logujemy do ręcznej oceny.
 *  2. Ingram FeaturesPL.csv → pole "Core diameter" (dokładne, strukturalne; tylko wartości w mm,
 *     odrzucamy µm = grubość taśmy oraz specy drukarek "Roll core diameter (max)"/"...supported").
 *  3. Ingram DataFeedPL.json → DescriptionShort "...Xmm Core" (fallback dla PN spoza FeaturesPL).
 *
 * Zawężone do getAllLabelPartNumbers() — nie zaśmiecamy mapy PN-ami spoza naszego katalogu
 * (ale wpisy z seeda zostają nawet, jeśli PN wypadł z katalogu).
 *
 * Uruchamianie: npx tsx scripts/gen-label-core-ingram.ts
 */
const FEED_DIR = path.join(process.cwd(), 'PLL_content_feed 2')
const OUT = path.join(process.cwd(), 'src/data/label-core.ts')

/** "76.2 mm" → "76 mm", "25.4 mm" → "25 mm", "38.1 mm" → "38 mm"; reszta: int + " mm". */
function normalizeCore(raw: string): string | null {
  const m = raw.match(/^(\d+(?:\.\d+)?)\s*mm$/i)
  if (!m) return null
  const v = parseFloat(m[1])
  if (!(v >= 8 && v <= 120)) return null // poza realnym zakresem rdzeni etykiet
  const round: Record<string, number> = { '76.2': 76, '25.4': 25, '38.1': 38, '12.7': 13 }
  const n = round[m[1]] ?? Math.round(v)
  return `${n} mm`
}

function loadSeed(): Record<string, string> {
  const map: Record<string, string> = {}
  if (!fs.existsSync(OUT)) return map
  const prev = fs.readFileSync(OUT, 'utf8')
  // klucze: '3006291-T' lub gołe liczby 10010064: '25 mm'
  for (const m of Array.from(prev.matchAll(/(?:'([^']+)'|(\d+))\s*:\s*'([^']+)'/g))) {
    const key = m[1] ?? m[2]
    if (key) map[key] = m[3]
  }
  return map
}

function fromFeaturesPL(ourPns: Set<string>): Map<string, string> {
  const out = new Map<string, string>()
  const file = path.join(FEED_DIR, 'FeaturesPL.csv')
  if (!fs.existsSync(file)) return out
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    // dokładne pole "Core diameter" (NIE "...(max)" / "...supported")
    const m = line.match(/"ZB([^"]+)";"[^"]*";"Core diameter";"([^"]*)"/)
    if (!m) continue
    const pn = m[1]
    if (!ourPns.has(pn)) continue
    const core = normalizeCore(m[2])
    if (core) out.set(pn, core)
  }
  return out
}

// DataFeedPL.json to ~664 MB (line-delimited JSON) — czytamy strumieniowo, linia po linii.
// readline event-based (nie for-await) — unika downlevelIteration przy niskim targecie tsconfig.
function fromDataFeed(ourPns: Set<string>): Promise<Map<string, string>> {
  return new Promise((resolve, reject) => {
    const out = new Map<string, string>()
    const file = path.join(FEED_DIR, 'DataFeedPL.json')
    if (!fs.existsSync(file)) return resolve(out)
    const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity })
    rl.on('line', line => {
      if (line.length < 2 || line[0] !== '{') return
      const vpn = line.match(/"VPN":"([^"]+)"/)
      if (!vpn || !ourPns.has(vpn[1])) return
      const core = line.match(/"DescriptionShort":"[^"]*?(\d+(?:\.\d+)?)\s*mm Core/i)
      if (!core) return
      const norm = normalizeCore(`${core[1]} mm`)
      if (norm) out.set(vpn[1], norm)
    })
    rl.on('close', () => resolve(out))
    rl.on('error', reject)
  })
}

async function main() {
  const ourPns = getAllLabelPartNumbers()
  console.log('PN-ów etykiet w katalogu:', ourPns.size)

  const seed = loadSeed()
  console.log('seed (istniejące label-core.ts):', Object.keys(seed).length)

  const feat = fromFeaturesPL(ourPns)
  const data = await fromDataFeed(ourPns)
  console.log('Ingram FeaturesPL "Core diameter":', feat.size, '| DataFeed "...mm Core":', data.size)

  const map: Record<string, string> = { ...seed }
  const conflicts: string[] = []
  let added = 0

  // FeaturesPL ma pierwszeństwo nad DataFeed; oba tylko dopełniają seed.
  const feedMerged = new Map<string, string>(data)
  feat.forEach((v, pn) => feedMerged.set(pn, v))

  feedMerged.forEach((v, pn) => {
    if (seed[pn] === undefined) {
      map[pn] = v
      added++
    } else if (seed[pn] !== v) {
      conflicts.push(`  ${pn}: seed='${seed[pn]}' vs Ingram='${v}'`)
    }
  })

  if (conflicts.length) {
    console.log(`\n⚠ KONFLIKTY (${conflicts.length}) — zachowano seed, sprawdź ręcznie:`)
    console.log(conflicts.join('\n'))
  }
  console.log(`\ndodano z feedu: ${added} | razem w mapie: ${Object.keys(map).length}`)

  const sorted = Object.keys(map).sort()
  const entries = sorted
    .map(pn => (/^\d+$/.test(pn) ? `  ${pn}: '${map[pn]}',` : `  '${pn}': '${map[pn]}',`))
    .join('\n')
  const content = `// AUTO-GEN — średnica rdzenia (gilzy) etykiety per PN.
// Źródła: seed Jarltech (item_description pole C) + Ingram feed (FeaturesPL "Core diameter"
// oraz DataFeed DescriptionShort "...mm Core"). Regeneruj: scripts/gen-label-core-ingram.ts
// Fallback dla etykiet bez atrybutu 'Rdzeń'/'Rdzeń (gilza)' w katalogu. ${sorted.length} pozycji.
export const LABEL_CORE: Record<string, string> = {
${entries}
}
`
  fs.writeFileSync(OUT, content)
  console.log('zapisano', OUT, '—', sorted.length, 'wpisów')
}

main().catch(e => { console.error(e); process.exit(1) })
