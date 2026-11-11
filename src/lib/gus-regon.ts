import { XMLParser, XMLValidator } from 'fast-xml-parser'

const endpoint = 'https://wyszukiwarkaregon.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc'
const namespace = 'http://CIS/BIR/PUBL/2014/07'
const parser = new XMLParser({ removeNSPrefix: true, parseTagValue: false, trimValues: true })

export class GusError extends Error {
  constructor(public readonly code: 'not-configured' | 'unavailable') {
    super(code)
  }
}

export function normalizeNip(value: string): string | null {
  const nip = value.replace(/[\s-]/g, '')
  if (!/^\d{10}$/.test(nip) || /^0+$/.test(nip)) return null
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
  const checksum = weights.reduce((sum, weight, index) => sum + Number(nip[index]) * weight, 0) % 11
  return checksum === Number(nip[9]) ? nip : null
}

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]!))
}

/** GUS may wrap the SOAP envelope in an MTOM multipart response. */
function parseEnvelope(text: string) {
  const xml = text.match(/<(?:[\w-]+:)?Envelope\b[\s\S]*?<\/(?:[\w-]+:)?Envelope>/)?.[0]
  if (!xml || XMLValidator.validate(xml) !== true) throw new GusError('unavailable')
  const body = parser.parse(xml).Envelope?.Body
  if (!body || body.Fault) throw new GusError('unavailable')
  return body
}

async function call(method: string, content: string, sid?: string) {
  const action = `${namespace}/IUslugaBIRzewnPubl/${method}`
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': `application/soap+xml; charset=utf-8; action="${action}"`,
      ...(sid ? { sid } : {}),
    },
    body: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:b="${namespace}" xmlns:a="http://www.w3.org/2005/08/addressing"><s:Header><a:Action>${action}</a:Action><a:To>${endpoint}</a:To></s:Header><s:Body><b:${method}>${content}</b:${method}></s:Body></s:Envelope>`,
    cache: 'no-store',
    signal: AbortSignal.timeout(method === 'Wyloguj' ? 3000 : 10000),
  })
  if (!res.ok) throw new GusError('unavailable')
  const response = parseEnvelope(await res.text())[`${method}Response`]
  if (!response || !Object.prototype.hasOwnProperty.call(response, `${method}Result`)) {
    throw new GusError('unavailable')
  }
  return response[`${method}Result`]
}

export function parseGusSearchResult(xml: string, nip: string) {
  if (!xml.trim()) return null
  if (XMLValidator.validate(xml) !== true) throw new GusError('unavailable')
  const root = parser.parse(xml).root
  if (root === '') return null
  if (!root || typeof root !== 'object') throw new GusError('unavailable')
  const rows = root.dane ? (Array.isArray(root.dane) ? root.dane : [root.dane]) : []
  // Select the legal entity, not a local unit sharing its NIP. Never accept a different NIP.
  const matches = rows.filter((row: Record<string, string>) => row.Nip === nip && row.Nazwa && !row.StatusNip)
  const row = matches.find((item: Record<string, string>) => item.Regon?.length === 9) || matches[0]
  if (!row) {
    if (rows.some((item: Record<string, string>) => item.ErrorCode)) throw new GusError('unavailable')
    return null
  }
  const number = [row.NrNieruchomosci, row.NrLokalu].filter(Boolean).join('/')
  const street = [row.Ulica || row.Miejscowosc, number].filter(Boolean).join(' ')
  const city = [row.KodPocztowy, row.Miejscowosc].filter(Boolean).join(' ')
  return { name: row.Nazwa as string, nip, regon: row.Regon as string, address: [street, city].filter(Boolean).join(', '), source: 'gus' as const }
}

export async function lookupGus(nip: string) {
  const key = process.env.GUS_BIR_API_KEY?.trim()
  if (!key) throw new GusError('not-configured')
  let sid: string | undefined
  try {
    const login = await call('Zaloguj', `<b:pKluczUzytkownika>${escapeXml(key)}</b:pKluczUzytkownika>`)
    if (typeof login !== 'string' || !/^[a-zA-Z0-9]{20}$/.test(login)) throw new GusError('unavailable')
    sid = login
    const result = await call('DaneSzukajPodmioty', `<b:pParametryWyszukiwania xmlns:d="http://CIS/BIR/PUBL/2014/07/DataContract"><d:Nip>${nip}</d:Nip></b:pParametryWyszukiwania>`, sid)
    if (typeof result !== 'string') throw new GusError('unavailable')
    if (!result.trim()) {
      // Empty results can also mean an expired session or a GUS error.
      const status = await call('GetValue', '<b:pNazwaParametru>KomunikatKod</b:pNazwaParametru>', sid)
      if (status !== '0' && status !== '4') throw new GusError('unavailable')
      return null
    }
    return parseGusSearchResult(result, nip)
  } finally {
    if (sid) {
      // Each request owns its session. Logout failure must not discard valid company data.
      await call('Wyloguj', `<b:pIdentyfikatorSesji>${sid}</b:pIdentyfikatorSesji>`, sid).catch(() => {})
    }
  }
}
