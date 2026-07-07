import { readFileSync } from 'node:fs'
const rt = readFileSync('/tmp/gtm-token.txt', 'utf8').trim()
const tok = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST', headers: {'content-type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: process.env.GOOGLE_ADS_CLIENT_ID,
    client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
    refresh_token: rt,
  }),
}).then(r => r.json())
if (!tok.access_token) { console.log('TOKEN FAIL', JSON.stringify(tok).slice(0,300)); process.exit(1) }
const H = { authorization: `Bearer ${tok.access_token}`, 'content-type': 'application/json' }
const API = 'https://tagmanager.googleapis.com/tagmanager/v2'

// znajdź konto/kontener GTM-55KB354V
const accs = await fetch(`${API}/accounts`, { headers: H }).then(r => r.json())
let containerPath = null
for (const a of accs.account || []) {
  const cs = await fetch(`${API}/${a.path}/containers`, { headers: H }).then(r => r.json())
  for (const c of cs.container || []) {
    console.log('kontener:', c.publicId, c.name, c.path)
    if (c.publicId === 'GTM-55KB354V') containerPath = c.path
  }
}
if (!containerPath) { console.log('BRAK dostępu do GTM-55KB354V'); process.exit(1) }

// domyślny workspace
const wss = await fetch(`${API}/${containerPath}/workspaces`, { headers: H }).then(r => r.json())
const ws = (wss.workspace || [])[0]
console.log('workspace:', ws.name, ws.path)

// czy nasz tag już istnieje?
const tags = await fetch(`${API}/${ws.path}/tags`, { headers: H }).then(r => r.json())
console.log('istniejące tagi:', (tags.tag || []).map(t => `${t.name} [${t.type}]`).join('; '))
