import JSZip from 'jszip'
import { decodeText, plain, snippets } from './core'
import { download } from './network'
import { bkDetail } from './sources'

export type Evidence = { name: string; url: string; status: 'read' | 'error' | 'partial'; detail?: string; characters?: number }
export type Bundle = { text: string; evidence: Evidence[]; incomplete: boolean; deadline?: Date | null }
const DOCUMENT = /\.(?:pdf|docx|xlsx|zip)(?:[?#\s)]|$)|\/repository\/download\/|\/api\/files\/|download|attachment|za[lł][aą]cz|\bopz\b|\bswz\b/i
export function links(html: string, base: string): { name: string; url: string }[] {
  const found: { name: string; url: string }[] = []
  for (const m of Array.from(html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi))) {
    try { const url = new URL(decodeText(m[1]), base); if (url.protocol === 'https:') found.push({ name: plain(m[2]) || url.pathname, url: url.href }) } catch { /* nieprawidłowy link */ }
  }
  for (const m of Array.from(html.matchAll(/downloadPostUrl:\s*['"]([^'"]+)['"]/g))) found.push({ name: 'Załącznik zamawiającego', url: new URL(m[1], base).href })
  for (const m of Array.from(html.matchAll(/<(?:\w+:)?(?:URI|DocumentURI|WebsiteURI)>\s*(https:[^<]+)</gi))) {
    try { found.push({ name: 'Dokumentacja zamówienia', url: new URL(decodeText(m[1])).href }) } catch { /* nieprawidłowy link */ }
  }
  // BZP przechowuje adres dokumentacji także jako zwykły tekst.
  for (const m of Array.from(html.matchAll(/https:\/\/[^\s<>"']+/g))) {
    const value = decodeText(m[0]).replace(/[),.;]+$/, '')
    if (/platformazakupowa\.pl\/transakcja\/|ezamawiajacy\.pl\/.*(?:details|procedure)|ezamowienia\.gov\.pl\/mp-client\/tenders\//i.test(value)) found.push({ name: 'Platforma zamawiającego', url: value })
  }
  return Array.from(new Map(found.map(x => [x.url, x])).values())
}
const XML_NS = /<\/?[\w:-]+[^>]*>/g
export async function extract(buffer: Buffer, name: string, depth = 0): Promise<{ text: string; incomplete: boolean }> {
  if (buffer.subarray(0, 5).toString() === '%PDF-') {
    // Import pliku biblioteki pomija uruchamiany przez index.js przykładowy PDF.
    const pdf = require('pdf-parse/lib/pdf-parse.js') as (b: Buffer) => Promise<{ text: string }>
    const result = await pdf(buffer)
    if (result.text.trim().length < 80) throw new Error('PDF jest skanem lub nie ma tekstu — wymaga OCR / ręcznego odczytu.')
    return { text: result.text, incomplete: false }
  }
  if (buffer[0] === 0x50 && buffer[1] === 0x4b) {
    const zip = await JSZip.loadAsync(buffer)
    const files = Object.values(zip.files).filter(f => !f.dir)
    let extracted = 0
    const read = async (file: JSZip.JSZipObject) => {
      const declared = (file as unknown as { _data?: { uncompressedSize?: number } })._data?.uncompressedSize || 0
      extracted += declared
      if (declared > 30 * 1024 * 1024 || extracted > 60 * 1024 * 1024) throw new Error('Archiwum przekracza limit rozpakowania')
      return file.async('nodebuffer')
    }
    const word = zip.file('word/document.xml')
    if (word) {
      const parts = files.filter(f => /^word\/(?:document|header\d*|footer\d*|footnotes|endnotes)\.xml$/.test(f.name))
      const text: string[] = []
      for (const f of parts) text.push(decodeText((await read(f)).toString().replace(/<\/w:p>|<\/w:tr>/g, '\n').replace(XML_NS, '')))
      return { text: text.join('\n'), incomplete: false }
    }
    if (zip.file('xl/workbook.xml')) {
      const shared = zip.file('xl/sharedStrings.xml')
      const strings = shared ? Array.from((await read(shared)).toString().matchAll(/<si[^>]*>([\s\S]*?)<\/si>/g)).map(m => decodeText(m[1].replace(XML_NS, ''))) : []
      const lines: string[] = []
      for (const f of files.filter(f => /^xl\/worksheets\/sheet\d+\.xml$/.test(f.name))) {
        const xml = (await read(f)).toString()
        lines.push(f.name, ...Array.from(xml.matchAll(/<c\b([^>]*)>([\s\S]*?)<\/c>/g)).map(m => {
          const v = m[2].match(/<v[^>]*>([\s\S]*?)<\/v>/)?.[1]
          return /t="s"/.test(m[1]) ? strings[Number(v)] || '' : decodeText((v || m[2]).replace(XML_NS, ''))
        }))
      }
      return { text: lines.join('\n'), incomplete: false }
    }
    if (depth >= 1) throw new Error('Zagnieżdżone archiwum wymaga ręcznego odczytu')
    const docs = files.filter(f => /\.(pdf|docx|xlsx)$/i.test(f.name))
    if (!docs.length) throw new Error('Brak obsługiwanych dokumentów w ZIP')
    const texts: string[] = []; let incomplete = docs.length !== files.length || docs.length > 20
    for (const f of docs.slice(0, 20)) {
      try { const d = await extract(await read(f), f.name, depth + 1); texts.push(`PLIK ${f.name}\n${d.text}`); incomplete ||= d.incomplete }
      catch (e) { incomplete = true; texts.push(`NIE ODCZYTANO ${f.name}: ${e instanceof Error ? e.message : String(e)}`) }
    }
    return { text: texts.join('\n\n'), incomplete }
  }
  if (/\.(?:doc|xls|rar|7z)$/i.test(name)) throw new Error('Format wymaga ręcznego odczytu: ' + name)
  const text = buffer.toString('utf8')
  if (!/<html|<\?xml|<\w+:|<!doctype|<body/i.test(text) && !/\.txt$/i.test(name)) throw new Error('Nieobsługiwany format lub strona blokująca pobranie')
  return { text: plain(text), incomplete: false }
}
function documentLinks(html: string, base: string) {
  return links(html, base).filter(x => DOCUMENT.test(x.url + ' ' + x.name))
    .sort((a, b) => Number(/swz|opz|opis.*przedmi|formularz.*cen/i.test(b.name)) - Number(/swz|opz|opis.*przedmi|formularz.*cen/i.test(a.name)))
}
export async function collect(n: { source: string; noticeNumber: string; url: string | null; rawBody: string | null; amendments?: unknown }, until: number): Promise<Bundle> {
  const evidence: Evidence[] = []
  const texts = [`ŹRÓDŁO ogłoszenie: ${n.url}\n${plain(n.rawBody || '')}`]
  let incomplete = false
  for (const a of (Array.isArray(n.amendments) ? n.amendments : []) as { text: string; url: string; number: string }[]) {
    texts.push(`ŹRÓDŁO zmiana ${a.number} (${a.url}):\n${a.text}`)
    evidence.push({ name: `Zmiana ${a.number}`, url: a.url, status: 'read' })
  }
  const queue: { name: string; url: string; depth: number }[] = []
  const seen = new Set<string>(); const cookies = new Map<string, string>()
  if (n.source === 'BK') {
    try {
      const detail = await bkDetail(n.noticeNumber.split('/')[1])
      // Dane wprost z dokumentu, bez wnioskowania o podziale na podstawie liczby opisów.
      texts.push('SZCZEGÓŁY BK: ' + JSON.stringify(detail))
      for (const a of (detail.attachments || []) as { name?: string; file?: { name?: string; uri?: string } }[]) {
        if (a.file?.uri) queue.push({ name: a.file.name || a.name || 'Załącznik', url: new URL(a.file.uri, 'https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl').href, depth: 0 })
      }
      evidence.push({ name: 'Pełne ogłoszenie BK', url: n.url || '', status: 'read' })
    } catch (e) { incomplete = true; evidence.push({ name: 'Szczegóły BK', url: n.url || '', status: 'error', detail: e instanceof Error ? e.message : String(e) }) }
  } else if (n.source === 'TED') {
    queue.push({ name: 'Pełne ogłoszenie TED XML', url: `https://ted.europa.eu/en/notice/${n.noticeNumber.split('/')[1]}/xml`, depth: 0 })
  } else {
    if (n.url) queue.push({ name: 'Strona postępowania', url: n.url, depth: 0 })
    for (const x of links(n.rawBody || '', n.url || 'https://ezamowienia.gov.pl')) {
      if (DOCUMENT.test(x.url + ' ' + x.name) || /platformazakupowa|ezamawiajacy|mp-client\/tenders/.test(x.url)) queue.push({ ...x, depth: 0 })
    }
  }
  let count = 0
  while (queue.length && count < 24 && Date.now() < until) {
    const item = queue.shift()!
    if (seen.has(item.url)) continue
    seen.add(item.url); count++
    try {
      const origin = new URL(item.url).origin
      const r = await download(item.url, 24 * 1024 * 1024, { headers: cookies.get(origin) ? { Cookie: cookies.get(origin)! } : {} })
      if (r.cookies) cookies.set(new URL(r.url).origin, r.cookies)
      const isHtml = /html|xml/.test(r.type) || /^[\s]*<(?:!DOCTYPE|html|\?xml)/i.test(r.buffer.subarray(0, 100).toString())
      const filename = r.disposition.match(/filename\*?=(?:UTF-8''|["'])?([^"';]+)/i)?.[1] || (/pdf/i.test(r.type) ? 'dokument.pdf' : /wordprocessingml/i.test(r.type) ? 'dokument.docx' : '')
      const doc = await extract(r.buffer, filename || item.name + ' ' + r.url)
      if (isHtml && /captcha|verify.*(?:human|robot)|access denied|just a moment/i.test(doc.text) && doc.text.length < 3000) throw new Error('Strona wymaga weryfikacji w przeglądarce')
      evidence.push({ name: filename ? `${item.name} — ${filename}` : item.name, url: item.url, status: doc.incomplete ? 'partial' : 'read', characters: doc.text.length })
      texts.push(`ŹRÓDŁO ${item.name} (${item.url}):\n${doc.text}`); incomplete ||= doc.incomplete
      if (isHtml && item.depth < 2) {
        const html = r.buffer.toString('utf8')
        const discovered = documentLinks(html, r.url)
        if (n.source === 'TED' && item.depth === 0) {
          for (const x of links(html, r.url)) if (/\/transakcja\/|ezamawiajacy.*(?:procedure|details)|mp-client\/tenders\//.test(x.url)) discovered.push(x)
        }
        for (const x of discovered) queue.push({ ...x, depth: item.depth + 1 })
      }
    } catch (e) {
      incomplete = true; evidence.push({ name: item.name, url: item.url, status: 'error', detail: e instanceof Error ? e.message : String(e) })
    }
  }
  if (queue.some(x => !seen.has(x.url))) { incomplete = true; evidence.push({ name: 'Pozostałe dokumenty', url: n.url || '', status: 'partial', detail: 'Limit czasu lub liczby plików. Sprawdź pozostałe załączniki na platformie.' }) }
  const excerpt = snippets(texts.join('\n\n'), 65000)
  incomplete ||= excerpt.truncated
  if (!evidence.some(x => /swz|opz|opis.*przedmiot|specyfikac|zapytani|formularz.*(?:cen|asort)|zamówieni|przetarg/i.test(x.name) && x.status === 'read')) {
    incomplete = true
    evidence.push({ name: 'Dokumentacja zamówienia', url: n.url || '', status: 'partial', detail: 'Nie potwierdzono odczytu SWZ/OPZ. Ocena wymaga sprawdzenia dokumentacji.' })
  }
  return { text: excerpt.text, evidence, incomplete }
}
