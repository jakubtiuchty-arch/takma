import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'

function privateIP(ip: string): boolean {
  if (ip.includes(':')) return !/^[23][\da-f]{0,3}:/i.test(ip) // tylko globalny unicast IPv6
  const p = ip.split('.').map(Number)
  return p[0] === 0 || p[0] === 10 || p[0] === 127 || p[0] >= 224 ||
    (p[0] === 169 && p[1] === 254) || (p[0] === 172 && p[1] >= 16 && p[1] <= 31) ||
    (p[0] === 192 && p[1] === 168) || (p[0] === 100 && p[1] >= 64 && p[1] <= 127)
}
export async function publicUrl(value: string) {
  const u = new URL(value)
  if (u.protocol !== 'https:' || u.username || u.password || (u.port && u.port !== '443')) throw new Error('Dozwolony jest publiczny adres HTTPS bez danych logowania.')
  const host = u.hostname.replace(/^\[|\]$/g, '')
  const ips = isIP(host) ? [{ address: host }] : await lookup(host, { all: true })
  if (!ips.length || ips.some(x => privateIP(x.address))) throw new Error('Adres sieci prywatnej jest niedozwolony.')
  return u
}
/** Ograniczenia dotyczą każdego skoku przekierowania i rzeczywistego strumienia odpowiedzi. */
export async function download(value: string, maxBytes = 24 * 1024 * 1024, init: RequestInit = {}) {
  let url = value
  const firstOrigin = new URL(value).origin
  const jar = new Map<string, string>()
  for (let redirect = 0; redirect < 5; redirect++) {
    await publicUrl(url)
    const origin = new URL(url).origin
    const headers = new Headers(init.headers)
    if (origin !== firstOrigin) { headers.delete('cookie'); headers.delete('authorization') }
    if (jar.has(origin)) headers.set('cookie', jar.get(origin)!)
    headers.set('User-Agent', 'TAKMA-TenderMonitor/1.0 (+https://www.takma.com.pl)')
    const response = await fetch(url, { ...init, redirect: 'manual', cache: 'no-store', signal: AbortSignal.timeout(18000), headers })
    const incoming = response.headers.getSetCookie().map(c => c.split(';')[0])
    if (incoming.length) {
      const values = [jar.get(origin) || headers.get('cookie') || '', ...incoming].flatMap(s => s.split(';')).map(s => s.trim()).filter(Boolean)
      jar.set(origin, Array.from(new Map(values.map(s => [s.split('=')[0], s])).values()).join('; '))
    }
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location'); await response.body?.cancel()
      if (!location) throw new Error('Przekierowanie bez adresu')
      url = new URL(location, url).href; continue
    }
    if (!response.ok) { await response.body?.cancel(); throw new Error(`HTTP ${response.status}: ${new URL(url).hostname}`) }
    if (Number(response.headers.get('content-length')) > maxBytes) { await response.body?.cancel(); throw new Error('Plik przekracza limit rozmiaru') }
    const chunks: Uint8Array[] = []; let length = 0
    const reader = response.body?.getReader()
    if (!reader) throw new Error('Pusta odpowiedź')
    try {
      for (;;) {
        const { done, value: chunk } = await reader.read(); if (done) break
        length += chunk.length
        if (length > maxBytes) throw new Error('Plik przekracza limit rozmiaru')
        chunks.push(chunk)
      }
    } catch (e) { await reader.cancel(); throw e } finally { reader.releaseLock() }
    return { buffer: Buffer.concat(chunks), url, type: response.headers.get('content-type') || '', disposition: response.headers.get('content-disposition') || '', cookies: jar.get(origin) || '' }
  }
  throw new Error('Za dużo przekierowań')
}
export async function json<T>(url: string, init?: RequestInit): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      const r = await download(url, 35 * 1024 * 1024, init)
      return JSON.parse(r.buffer.toString('utf8')) as T
    } catch (e) {
      if (attempt >= 2 || !/HTTP (?:403|429|5\d\d)/.test(e instanceof Error ? e.message : '')) throw e
      await new Promise(r => setTimeout(r, 1200 * (attempt + 1) ** 2))
    }
  }
}
