#!/usr/bin/env node
/**
 * Jednorazowe pobranie refresh tokena Google Ads (OAuth Desktop app + loopback).
 *
 * Użycie:
 *   GOOGLE_ADS_CLIENT_ID=xxx GOOGLE_ADS_CLIENT_SECRET=yyy node scripts/google-ads-refresh-token.mjs
 *
 * Skrypt wystawia lokalny serwer na http://127.0.0.1:53682, wypisuje URL zgody,
 * po kliknięciu "Zezwól" wymienia code na tokeny i drukuje REFRESH TOKEN.
 * Wklej go do env jako GOOGLE_ADS_REFRESH_TOKEN (lokalnie + Vercel).
 */
import http from 'node:http'
import { execSync } from 'node:child_process'

const CLIENT_ID = process.env.GOOGLE_ADS_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_ADS_CLIENT_SECRET
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Ustaw GOOGLE_ADS_CLIENT_ID i GOOGLE_ADS_CLIENT_SECRET w env.')
  process.exit(1)
}

const PORT = 53682
const REDIRECT = `http://127.0.0.1:${PORT}`
const SCOPE = 'https://www.googleapis.com/auth/adwords'

const authUrl =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent', // wymusza wydanie refresh tokena nawet przy ponownej zgodzie
  })

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT)
  const code = url.searchParams.get('code')
  if (!code) {
    res.end('Brak parametru code — sprobuj ponownie.')
    return
  }
  res.end('Gotowe — wróć do terminala. Możesz zamknąć tę kartę.')
  server.close()

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT,
    }),
  })
  const json = await tokenRes.json()
  if (!json.refresh_token) {
    console.error('\nODPOWIEDŹ BEZ refresh_token:', JSON.stringify(json, null, 2))
    process.exit(1)
  }
  console.log('\n================= REFRESH TOKEN =================')
  console.log(json.refresh_token)
  console.log('=================================================')
  console.log('Dodaj do .env.local i Vercel jako GOOGLE_ADS_REFRESH_TOKEN')
  process.exit(0)
})

server.listen(PORT, () => {
  console.log('Otwieram przeglądarkę z ekranem zgody Google…\n')
  console.log('Jeśli nie otworzyła się sama, wejdź ręcznie w:\n' + authUrl + '\n')
  try {
    execSync(`open "${authUrl}"`)
  } catch {
    /* Linux/Windows: otwórz URL ręcznie */
  }
})
