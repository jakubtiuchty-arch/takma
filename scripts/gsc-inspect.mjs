// Inspekcja URL w Google Search Console przez konto usługi z .env.local (GA_SA_CLIENT_EMAIL, GA_SA_PRIVATE_KEY),
// to samo, którego używa src/lib/gsc.ts. Scope webmasters.readonly wystarcza do inspekcji i listy sitemap;
// „Poproś o zindeksowanie” istnieje tylko w interfejsie GSC.
//   node scripts/gsc-inspect.mjs https://www.takma.com.pl/produkt/zebra-zc100 [kolejne URL-e]
//   node scripts/gsc-inspect.mjs --sitemaps
import { readFileSync } from 'node:fs'
import { createSign } from 'node:crypto'

const env = {}
for (const line of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (!m) continue
  let v = m[2].trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
  env[m[1]] = v
}
const email = env.GA_SA_CLIENT_EMAIL
const key = (env.GA_SA_PRIVATE_KEY || '').replace(/\\n/g, '\n')
if (!email || !key) { console.error('Brak GA_SA_CLIENT_EMAIL / GA_SA_PRIVATE_KEY w .env.local'); process.exit(1) }

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
const now = Math.floor(Date.now() / 1000)
const scope = 'https://www.googleapis.com/auth/webmasters.readonly'
const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: email, scope, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`
const assertion = `${unsigned}.${createSign('RSA-SHA256').update(unsigned).sign(key, 'base64url')}`
const tok = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
}).then((r) => r.json())
if (!tok.access_token) { console.error('Błąd tokenu', tok); process.exit(1) }
const H = { authorization: `Bearer ${tok.access_token}`, 'content-type': 'application/json' }

const sites = await fetch('https://www.googleapis.com/webmasters/v3/sites', { headers: H }).then((r) => r.json())
const siteUrl = env.GSC_SITE_URL || (sites.siteEntry || []).find((s) => s.siteUrl.includes('takma'))?.siteUrl
if (!siteUrl) { console.error('Konto usługi nie ma dostępu do właściwości takma w GSC'); process.exit(1) }
console.log('Właściwość:', siteUrl)

const args = process.argv.slice(2)
if (args.includes('--sitemaps')) {
  const sm = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`, { headers: H }).then((r) => r.json())
  for (const s of sm.sitemap || []) {
    console.log(`- ${s.path} | ostatnio przesłana ${s.lastSubmitted} | pobrana ${s.lastDownloaded} | błędy ${s.errors} ostrzeżenia ${s.warnings} | ` +
      (s.contents || []).map((c) => `${c.type}: przesłane ${c.submitted}, zindeksowane ${c.indexed}`).join('; '))
  }
  if (!(sm.sitemap || []).length) console.log('Brak przesłanych sitemap w tej właściwości')
}

for (const url of args.filter((a) => a.startsWith('http'))) {
  const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST', headers: H, body: JSON.stringify({ inspectionUrl: url, siteUrl, languageCode: 'pl' }),
  }).then((r) => r.json())
  const i = r.inspectionResult?.indexStatusResult
  const rr = r.inspectionResult?.richResultsResult
  console.log(`\n=== ${url}`)
  if (!i) { console.log(JSON.stringify(r).slice(0, 500)); continue }
  console.log(`${i.verdict} | ${i.coverageState} | ostatnie skanowanie ${i.lastCrawlTime} (${i.crawledAs}) | robots ${i.robotsTxtState} | pobranie ${i.pageFetchState}`)
  console.log(`canonical Google: ${i.googleCanonical ?? '—'} | canonical strony: ${i.userCanonical ?? '—'} | sitemapy: ${(i.sitemap || []).join(', ') || '—'}`)
  if (rr) {
    console.log(`wyniki rozszerzone: ${rr.verdict}`)
    for (const d of rr.detectedItems || []) {
      for (const it of d.items || []) console.log(`  - ${d.richResultType} / ${it.name}: ${(it.issues || []).map((x) => `${x.severity} ${x.issueMessage}`).join('; ') || 'bez uwag'}`)
    }
  }
}
