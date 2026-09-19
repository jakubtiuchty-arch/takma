#!/usr/bin/env node
/**
 * Publikacja filmów na kanale YouTube TAKMA przez YouTube Data API v3.
 *
 * Wgrywa plik, dokleja polskie napisy z pliku .vtt i ustawia miniaturę.
 * Bez zależności npm — Node ma fetch, resztę robimy na czystym HTTP.
 *
 * Wymagane w env (te same dane OAuth co przy Google Ads):
 *   GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, YOUTUBE_REFRESH_TOKEN
 *
 * Refresh token zdobywa się raz, tym samym skryptem co do Ads:
 *   OAUTH_SCOPE="https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.force-ssl" \
 *     node scripts/google-ads-refresh-token.mjs
 *
 * Użycie:
 *   node scripts/youtube-upload.mjs --lista                 # co jest do wgrania
 *   node scripts/youtube-upload.mjs --film=tasma --proba    # nic nie wysyła, pokazuje metadane
 *   node scripts/youtube-upload.mjs --film=tasma            # wgrywa jako niepubliczny (z linkiem)
 *   node scripts/youtube-upload.mjs --wszystkie --prywatnosc=public
 *
 * Koszt limitu API: wgranie filmu to 1 600 jednostek z dziennych 10 000,
 * napisy 400, miniatura 50. Czyli maksymalnie pięć, sześć filmów dziennie.
 */
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'
import filmy from './youtube-filmy.mjs'

const arg = (nazwa, domyslna = undefined) => {
  const a = process.argv.find((x) => x.startsWith(`--${nazwa}=`))
  if (a) return a.split('=').slice(1).join('=')
  return process.argv.includes(`--${nazwa}`) ? true : domyslna
}

const PROBA = Boolean(arg('proba'))
const PRYWATNOSC = arg('prywatnosc', 'unlisted')
const KATEGORIA_NAUKA_I_TECHNIKA = '28'

const sciezka = (p) => (p.startsWith('~') ? path.join(os.homedir(), p.slice(1)) : path.resolve(p))

function sprawdzMetadane(f) {
  const bledy = []
  if (f.tytul.length > 100) bledy.push(`tytuł ma ${f.tytul.length} znaków, limit to 100`)
  if (f.opis.length > 5000) bledy.push(`opis ma ${f.opis.length} znaków, limit to 5000`)
  const tagi = (f.tagi || []).join('').length + (f.tagi || []).length
  if (tagi > 500) bledy.push(`tagi mają ${tagi} znaków, limit to 500`)
  return bledy
}

async function token() {
  const { GOOGLE_ADS_CLIENT_ID: id, GOOGLE_ADS_CLIENT_SECRET: sekret, YOUTUBE_REFRESH_TOKEN: refresh } = process.env
  if (!id || !sekret || !refresh) {
    console.error('Brakuje GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET albo YOUTUBE_REFRESH_TOKEN w env.')
    console.error('Refresh token: OAUTH_SCOPE="https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.force-ssl" node scripts/google-ads-refresh-token.mjs')
    process.exit(1)
  }
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: id, client_secret: sekret, refresh_token: refresh, grant_type: 'refresh_token' }),
  })
  const j = await r.json()
  if (!r.ok) throw new Error(`OAuth: ${JSON.stringify(j)}`)
  return j.access_token
}

/** Brakujący plik lokalny ściągamy z Bloba — tam leży kopia, którą serwuje sklep. */
async function plikFilmu(f) {
  const lokalny = sciezka(f.plik)
  if (fs.existsSync(lokalny)) return lokalny
  if (!f.blob) throw new Error(`Nie ma ${lokalny} i brak adresu blob w manifeście`)
  const cel = path.join(os.tmpdir(), `takma-${f.slug}.mp4`)
  if (!fs.existsSync(cel)) {
    process.stdout.write(`   pobieram z Bloba… `)
    const r = await fetch(f.blob)
    if (!r.ok) throw new Error(`Blob ${r.status}`)
    fs.writeFileSync(cel, Buffer.from(await r.arrayBuffer()))
    console.log(`${(fs.statSync(cel).size / 1048576).toFixed(1)} MB`)
  }
  return cel
}

async function wgrajFilm(at, f, plik) {
  const meta = {
    snippet: {
      title: f.tytul,
      description: f.opis,
      tags: f.tagi,
      categoryId: KATEGORIA_NAUKA_I_TECHNIKA,
      defaultLanguage: 'pl',
      defaultAudioLanguage: 'pl',
    },
    status: { privacyStatus: PRYWATNOSC, selfDeclaredMadeForKids: false, embeddable: true },
  }
  const rozmiar = fs.statSync(plik).size
  // Krok 1: sesja resumable — YouTube zwraca adres, pod który lecą bajty.
  const start = await fetch('https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${at}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Upload-Content-Length': String(rozmiar),
      'X-Upload-Content-Type': 'video/mp4',
    },
    body: JSON.stringify(meta),
  })
  if (!start.ok) throw new Error(`videos.insert: ${start.status} ${await start.text()}`)
  const adres = start.headers.get('location')
  if (!adres) throw new Error('Brak nagłówka Location z sesją uploadu')

  const wyslij = await fetch(adres, {
    method: 'PUT',
    headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(rozmiar) },
    body: fs.readFileSync(plik),
  })
  const odp = await wyslij.json()
  if (!wyslij.ok) throw new Error(`upload: ${wyslij.status} ${JSON.stringify(odp)}`)
  return odp.id
}

async function dodajNapisy(at, videoId, plikVtt) {
  const granica = `takma${Date.now()}`
  const snippet = { snippet: { videoId, language: 'pl', name: 'Polski', isDraft: false } }
  const body = Buffer.concat([
    Buffer.from(`--${granica}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(snippet)}\r\n`),
    Buffer.from(`--${granica}\r\nContent-Type: text/vtt\r\n\r\n`),
    fs.readFileSync(plikVtt),
    Buffer.from(`\r\n--${granica}--\r\n`),
  ])
  const r = await fetch('https://www.googleapis.com/upload/youtube/v3/captions?uploadType=multipart&part=snippet', {
    method: 'POST',
    headers: { Authorization: `Bearer ${at}`, 'Content-Type': `multipart/related; boundary=${granica}` },
    body,
  })
  if (!r.ok) throw new Error(`captions.insert: ${r.status} ${await r.text()}`)
}

/** YouTube nie przyjmuje webp — konwertujemy przez ImageMagick, jeśli trzeba. */
function jpgMiniatury(plik) {
  if (/\.(jpe?g|png)$/i.test(plik)) return plik
  const cel = path.join(os.tmpdir(), `${path.basename(plik).replace(/\.\w+$/, '')}.jpg`)
  execFileSync('magick', [plik, '-quality', '90', cel])
  return cel
}

async function ustawMiniature(at, videoId, plakat) {
  const jpg = jpgMiniatury(sciezka(plakat))
  const r = await fetch(`https://www.googleapis.com/upload/youtube/v3/thumbnails/set?videoId=${videoId}&uploadType=media`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${at}`, 'Content-Type': 'image/jpeg' },
    body: fs.readFileSync(jpg),
  })
  if (!r.ok) throw new Error(`thumbnails.set: ${r.status} ${await r.text()}`)
}

async function main() {
  const wybrany = arg('film')
  const wszystkie = Boolean(arg('wszystkie'))

  if (arg('lista') || (!wybrany && !wszystkie)) {
    console.log('Filmy w manifeście:\n')
    for (const f of filmy) {
      const p = sciezka(f.plik)
      console.log(`  ${f.slug.padEnd(14)} ${fs.existsSync(p) ? '✓ plik lokalny' : '· pobierze z Bloba'}  ${f.tytul}`)
      for (const b of sprawdzMetadane(f)) console.log(`     ! ${b}`)
    }
    console.log('\nUżycie: node scripts/youtube-upload.mjs --film=<slug> [--prywatnosc=unlisted|private|public] [--proba]')
    return
  }

  const doWgrania = wszystkie ? filmy : filmy.filter((f) => f.slug === wybrany)
  if (!doWgrania.length) {
    console.error(`Nie znam filmu „${wybrany}". Dostępne: ${filmy.map((f) => f.slug).join(', ')}`)
    process.exit(1)
  }

  for (const f of doWgrania) {
    const bledy = sprawdzMetadane(f)
    if (bledy.length) {
      console.error(`✗ ${f.slug}: ${bledy.join('; ')}`)
      process.exit(1)
    }
  }

  if (PROBA) {
    for (const f of doWgrania) {
      console.log(`\n── ${f.slug} ──`)
      console.log(`tytuł (${f.tytul.length}/100): ${f.tytul}`)
      console.log(`opis (${f.opis.length}/5000):\n${f.opis}`)
      console.log(`tagi: ${f.tagi.join(', ')}`)
      console.log(`prywatność: ${PRYWATNOSC} | napisy: ${f.napisy ?? '—'} | miniatura: ${f.plakat ?? '—'}`)
    }
    console.log('\n(próba — nic nie zostało wysłane)')
    return
  }

  const at = await token()
  for (const f of doWgrania) {
    console.log(`\n── ${f.slug}: ${f.tytul}`)
    const plik = await plikFilmu(f)
    process.stdout.write('   wgrywam film… ')
    const videoId = await wgrajFilm(at, f, plik)
    console.log(`gotowe → https://youtu.be/${videoId}`)

    if (f.napisy) {
      try {
        await dodajNapisy(at, videoId, sciezka(f.napisy))
        console.log('   napisy PL: dodane')
      } catch (e) {
        console.log(`   napisy PL: NIE dodane — ${String(e.message).slice(0, 160)}`)
      }
    }
    if (f.plakat) {
      try {
        await ustawMiniature(at, videoId, f.plakat)
        console.log('   miniatura: ustawiona')
      } catch (e) {
        const powod = /forbidden|unauthorized/i.test(String(e.message))
          ? 'kanał nie jest zweryfikowany numerem telefonu — YouTube wybierze klatkę sam'
          : String(e.message).slice(0, 160)
        console.log(`   miniatura: NIE ustawiona — ${powod}`)
      }
    }
  }
  console.log(`\nGotowe. Prywatność: ${PRYWATNOSC}.`)
}

main().catch((e) => {
  console.error(`\nBłąd: ${e.message}`)
  process.exit(1)
})
