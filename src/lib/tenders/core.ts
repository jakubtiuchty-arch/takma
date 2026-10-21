import { createHash } from 'node:crypto'

export const CORE_CPV = ['30216130', '30216000', '30192800', '30199760', '30192300']
export const BROAD_CPV = ['30200000', '30232100', '30213100', '30213200', '30237000', '30192000', '30199730', '42991200', '50313000']
export const TERMS = /drukar\S*\s+(?:\S+\s+){0,2}(?:etykiet|kart|opasek)|kod\S*\s+kreskow|czytnik|kolektor|terminal\S*\s+(?:mobil|magazyn|przenoś)|termotransfer|termiczn|samoprzylepn|rfid|\bzebra\b|honeywell|datalogic|newland|magicard|entrust|evolis|hid fargo|sato\b|tsc\b|m3 mobile|identyfikator\S*\s+(?:plastik|pracown|osob)|kart\S*\s+plastik|inwentaryzac|autoid|bixolon|citizen|colorworks|brady/i
export const BROAD_TERMS = /sprzęt\S*\s+(?:komputer|informat|it\b)|urządze\S*\s+(?:komputer|peryfer)|drukark|skaner|tablet|cyfryzac/i
export function decodeText(s: string): string {
  return s.replace(/&(?:amp|lt|gt|quot|apos|nbsp);|&#(?:x[\da-f]+|\d+);/gi, (v) => {
    const entities: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'", '&nbsp;': ' ' }
    if (entities[v]) return entities[v]
    const n = v.startsWith('&#x') ? parseInt(v.slice(3), 16) : parseInt(v.slice(2), 10)
    return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : ' '
  })
}
export function plain(s: string): string {
  return decodeText(s.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
}
export type Notice = {
  noticeNumber: string; source: string; orderObject: string; rawBody: string; url?: string
  objectId?: string; bzpNumber?: string; organizationName?: string; organizationCity?: string
  cpvCodes?: string; publicationDate?: Date | null; submittingOffersDate?: Date | null
}
export function candidate(n: Pick<Notice, 'orderObject' | 'rawBody' | 'cpvCodes'>) {
  return TERMS.test(`${n.orderObject} ${plain(n.rawBody)}`) || BROAD_TERMS.test(n.orderObject) || /\b302\d{5}|\b3019\d{4}|\b50313\d{3}/.test(n.cpvCodes || '')
}
export function hash(n: Notice) {
  return createHash('sha256').update(JSON.stringify([n.orderObject, n.rawBody, n.submittingOffersDate, n.url])).digest('hex')
}
/** Godzina lokalna PL; data bez godziny nie oznacza północy i nie może zamknąć oferty rano. */
export function polishDate(value: unknown, endOfDay = true): Date | null {
  if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\d/.test(value)) return null
  let s = value.trim().replace(' ', 'T')
  if (/^\d{4}-\d\d-\d\d(?:[+-]\d\d:\d\d)?$/.test(s)) s = s.slice(0, 10) + (endOfDay ? 'T23:59:59' : 'T00:00:00')
  if (/T\d\d:\d\d$/.test(s)) s += ':00'
  if (!/(?:Z|[+-]\d\d:\d\d)$/.test(s)) {
    const local = new Date(s + 'Z')
    if (!Number.isFinite(+local)) return null
    const format = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' })
    const expected = s.slice(0, 19).replace('T', ' ')
    const possible = [1, 2].map(offset => new Date(+local - offset * 3600000)).filter(d => format.format(d) === expected)
    // Brak godziny podczas zmiany czasu jest niepewny. Przy dwuznaczności nie zamykamy oferty wcześniej.
    return possible.length ? new Date(Math.max(...possible.map(Number))) : null
  }
  const date = new Date(s)
  return Number.isFinite(+date) ? date : null
}
export function latestDeadline(values: unknown): Date | null {
  const dates = (Array.isArray(values) ? values : [values]).map(v => polishDate(v)).filter((d): d is Date => !!d)
  return dates.length ? new Date(Math.max(...dates.map(Number))) : null
}
export function snippets(text: string, budget = 42000): { text: string; truncated: boolean } {
  if (text.length <= budget) return { text, truncated: false }
  const passages = [text.slice(0, 5000)]
  const chunks = text.match(/[\s\S]{1,1600}/g) || []
  for (let i = 0; i < chunks.length; i++) if (TERMS.test(chunks[i]) || /częś[ćc]|pakiet|lot-|ofert.*części|termin|wadium/i.test(chunks[i])) passages.push(`[fragment ${i + 1}] ${chunks[i]}`)
  return { text: passages.join('\n').slice(0, budget), truncated: true }
}
