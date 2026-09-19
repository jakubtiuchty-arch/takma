/**
 * Jednorazowe wydanie refresh tokena do YouTube Data API v3 i zapis go
 * do .env.local jako YOUTUBE_REFRESH_TOKEN.
 *
 * Uruchomienie:  node scripts/youtube-token.mjs
 *
 * Dane klienta OAuth (te same co przy Google Ads) bierze z Vercela, żeby nie
 * trzeba było ich przepisywać. Otwiera ekran zgody Google — kliknij „Zezwól"
 * będąc zalogowanym na koncie, które jest właścicielem kanału TAKMA.
 *
 * Wcześniej: w tym samym projekcie Google Cloud musi być włączone
 * YouTube Data API v3, inaczej zgoda przejdzie, ale wgrywanie zwróci błąd.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, rmSync, mkdtempSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import path from 'node:path'

const SCOPES = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube.force-ssl',
].join(' ')

const ENV_PATH = new URL('../.env.local', import.meta.url).pathname
const KEY = 'YOUTUBE_REFRESH_TOKEN'

/** Klient OAuth: najpierw env, potem produkcyjne zmienne z Vercela. */
function daneKlienta() {
  if (process.env.GOOGLE_ADS_CLIENT_ID && process.env.GOOGLE_ADS_CLIENT_SECRET) {
    return { id: process.env.GOOGLE_ADS_CLIENT_ID, sekret: process.env.GOOGLE_ADS_CLIENT_SECRET }
  }
  const katalog = mkdtempSync(path.join(tmpdir(), 'takma-env-'))
  const plik = path.join(katalog, 'prod.env')
  try {
    console.log('Pobieram dane klienta OAuth z Vercela…')
    execFileSync('vercel', ['env', 'pull', plik, '--environment=production', '--yes'], { stdio: 'ignore' })
    const tekst = readFileSync(plik, 'utf8')
    const czytaj = (k) => (tekst.match(new RegExp(`^${k}="?([^"\n]+)"?$`, 'm')) || [])[1]
    return { id: czytaj('GOOGLE_ADS_CLIENT_ID'), sekret: czytaj('GOOGLE_ADS_CLIENT_SECRET') }
  } finally {
    rmSync(katalog, { recursive: true, force: true })
  }
}

function zapiszToken(token) {
  if (!existsSync(ENV_PATH)) {
    console.error(`Brak ${ENV_PATH} — dopisz ręcznie: ${KEY}=<token poniżej>`)
    return false
  }
  copyFileSync(ENV_PATH, `${ENV_PATH}.bak`)
  const body = readFileSync(ENV_PATH, 'utf8')
  const linia = `${KEY}=${token}`
  const re = new RegExp(`^${KEY}=.*$`, 'm')
  writeFileSync(ENV_PATH, re.test(body) ? body.replace(re, linia) : `${body.replace(/\n*$/, '\n')}${linia}\n`)
  return true
}

const { id, sekret } = daneKlienta()
if (!id || !sekret) {
  console.error('Nie udało się odczytać GOOGLE_ADS_CLIENT_ID / GOOGLE_ADS_CLIENT_SECRET.')
  console.error('Zaloguj się do Vercela (vercel login) albo podaj je w env przed uruchomieniem.')
  process.exit(1)
}

console.log(`Projekt Google Cloud: ${id.split('-')[0]}`)
console.log('Sprawdź, czy masz w nim włączone YouTube Data API v3:')
console.log(`https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=${id.split('-')[0]}\n`)

process.env.GOOGLE_ADS_CLIENT_ID = id
process.env.GOOGLE_ADS_CLIENT_SECRET = sekret
process.env.OAUTH_SCOPE = SCOPES

globalThis.__adsTokenSink = (token) => {
  if (zapiszToken(token)) {
    console.log(`\nZapisane w .env.local jako ${KEY} (kopia poprzedniego pliku: .env.local.bak).`)
    console.log('Do produkcji dodaj tę samą zmienną w Vercelu.')
  } else {
    console.log(`\n${KEY}=${token}`)
  }
}

await import('./google-ads-refresh-token.mjs')
