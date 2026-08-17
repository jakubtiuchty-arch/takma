/**
 * Wydaje refresh token Google Ads ze scope'ami potrzebnymi do Data Manager API
 * (konwersje offline z marżą) i zapisuje go do .env.local.
 *
 * Uruchomienie:  node --env-file=.env.local scripts/ads-token-datamanager.mjs
 *
 * Powstało, bo scope auth/datamanager NIE wchodzi w auth/adwords — bez niego
 * events:ingest zwraca błąd uprawnień. Osobny plik zamiast długiego OAUTH_SCOPE
 * w wierszu poleceń: długie polecenia łamią się przy wklejaniu do terminala.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs'

const SCOPES = [
  'https://www.googleapis.com/auth/adwords',
  'https://www.googleapis.com/auth/content',
  'https://www.googleapis.com/auth/datamanager',
].join(' ')

const ENV_PATH = new URL('../.env.local', import.meta.url).pathname
const KEY = 'GOOGLE_ADS_REFRESH_TOKEN'

/** Podmienia (lub dopisuje) klucz w .env.local, robiąc kopię zapasową. */
function saveToken(token) {
  if (!existsSync(ENV_PATH)) {
    console.error(`Brak ${ENV_PATH} — token poniżej wklej ręcznie.`)
    return false
  }
  copyFileSync(ENV_PATH, `${ENV_PATH}.bak`)
  const body = readFileSync(ENV_PATH, 'utf8')
  const line = `${KEY}=${token}`
  const re = new RegExp(`^${KEY}=.*$`, 'm')
  const next = re.test(body) ? body.replace(re, line) : `${body.replace(/\n*$/, '\n')}${line}\n`
  writeFileSync(ENV_PATH, next)
  return true
}

process.env.OAUTH_SCOPE = SCOPES
process.env.ADS_TOKEN_SINK = 'env-local'
globalThis.__adsTokenSink = (token) => {
  const saved = saveToken(token)
  console.log('\n=================================================')
  if (saved) {
    console.log('Token zapisany w .env.local (kopia: .env.local.bak).')
    console.log(`Długość: ${token.length} znaków, początek: ${token.slice(0, 12)}…`)
    console.log('\nZOSTAŁO: ten sam token wklej w Vercel jako GOOGLE_ADS_REFRESH_TOKEN')
    console.log('(Vercel → projekt takma → Settings → Environment Variables).')
    console.log('\nPełny token, jeśli potrzebny do wklejenia:')
  }
  console.log(token)
  console.log('=================================================')
}

await import('./google-ads-refresh-token.mjs')
