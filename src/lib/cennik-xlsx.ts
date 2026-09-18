/**
 * Cennik zakupowy z arkusza kalkulacyjnego (XLSX).
 *
 * Producenci przysyłają swoje cenniki w Excelu: kolumna z numerem katalogowym,
 * opis i cena netto. Czytamy je tym samym torem co koncesje Zebry i oferty
 * Jarltecha, żeby przy wystawianiu oferty widać było cenę zakupu niezależnie
 * od tego, skąd pochodzi.
 *
 * XLSX to spakowany XML, a `jszip` mamy już w zależnościach — nie dokładamy
 * biblioteki do arkuszy dla trzech tagów.
 */

import JSZip from 'jszip'

export interface WierszCennika {
  partNumber: string
  description?: string
  /** cena zakupu netto w groszach */
  unitPrice: number
}

/** Treść `<si>` ze sharedStrings: tekst bywa pocięty na kilka `<t>` (formatowanie). */
function tekstZSi(si: string): string {
  const kawalki = si.match(/<t[^>]*>([\s\S]*?)<\/t>/g) ?? []
  return kawalki
    .map((t) => t.replace(/<[^>]+>/g, ''))
    .join('')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

/** „B12" → 1 (numer kolumny liczony od zera). */
function kolumna(ref: string): number {
  const litery = ref.match(/^[A-Z]+/)?.[0] ?? 'A'
  let n = 0
  for (const l of litery) n = n * 26 + (l.charCodeAt(0) - 64)
  return n - 1
}

/** Numery katalogowe łamią się w komórce na dwa wiersze („MC450YMCKO-\nHalf/S"). */
const sklej = (s: string) => s.replace(/\s+/g, '').trim()

/**
 * Ten sam sprzęt bywa opisany dwoma numerami: dystrybutor fakturuje wersję „/S",
 * a w sklepie stoi europejskie „/3". Dopisujemy drugi numer do cennika, żeby
 * podpowiedź w kreatorze oferty trafiała niezależnie od tego, który numer ma
 * pozycja. Katalogu nie ruszamy — numer z karty produktu idzie do feedów.
 */
export const ODPOWIEDNIKI_W_KATALOGU: Record<string, string[]> = {
  '3100-0001/S': ['3100-0001/3'], // Magicard Pronto100
  '3652-5021/S': ['3652-5021/3'], // Magicard 600 Duo
}

const grosze = (s: string) => Math.round(parseFloat(s.replace(',', '.')) * 100)

/**
 * Wiersze cennika z pierwszego arkusza. Układ czytamy z danych, nie z nagłówka:
 * numer katalogowy to pierwsza kolumna tekstowa, cena — pierwsza liczba w wierszu.
 * Wiersze sekcji („TAŚMY", „DRUKARKI") nie mają ceny i wypadają same.
 */
export async function parsujCennikXlsx(buffer: Buffer): Promise<WierszCennika[]> {
  const zip = await JSZip.loadAsync(buffer)

  const sharedXml = (await zip.file('xl/sharedStrings.xml')?.async('string')) ?? ''
  const shared = (sharedXml.match(/<si>[\s\S]*?<\/si>/g) ?? []).map(tekstZSi)

  const nazwaArkusza = Object.keys(zip.files)
    .filter((n) => /^xl\/worksheets\/sheet\d+\.xml$/.test(n))
    .sort()[0]
  if (!nazwaArkusza) throw new Error('W pliku nie ma żadnego arkusza.')
  const sheet = (await zip.file(nazwaArkusza)!.async('string')) ?? ''

  const wiersze: WierszCennika[] = []

  for (const row of sheet.match(/<row[^>]*>[\s\S]*?<\/row>/g) ?? []) {
    const komorki: { kol: number; tekst?: string; liczba?: number }[] = []

    for (const c of row.match(/<c[^>]*\/>|<c[^>]*>[\s\S]*?<\/c>/g) ?? []) {
      const ref = c.match(/\sr="([A-Z]+\d+)"/)?.[1]
      if (!ref) continue
      const typ = c.match(/\st="([^"]+)"/)?.[1]
      const v = c.match(/<v>([\s\S]*?)<\/v>/)?.[1]
      const kol = kolumna(ref)

      if (typ === 's') {
        const i = Number(v)
        if (Number.isFinite(i) && shared[i] !== undefined) komorki.push({ kol, tekst: shared[i] })
      } else if (typ === 'inlineStr') {
        komorki.push({ kol, tekst: tekstZSi(c) })
      } else if (v !== undefined && v !== '') {
        const liczba = Number(v)
        if (Number.isFinite(liczba)) komorki.push({ kol, liczba })
        else komorki.push({ kol, tekst: v })
      }
    }

    if (komorki.length === 0) continue
    komorki.sort((a, b) => a.kol - b.kol)

    const teksty = komorki.filter((k) => k.tekst !== undefined)
    const cena = komorki.find((k) => k.liczba !== undefined && k.liczba > 0)
    if (!cena || teksty.length === 0) continue

    const partNumber = sklej(teksty[0].tekst!)
    // Nagłówek tabeli („Model | Opis | Cena PLN netto") ma tekst w każdej kolumnie
    // i żadnej liczby, więc tu już nie dochodzi. Zostaje odsiać puste numery.
    if (!partNumber || partNumber.length < 3) continue

    const opis = teksty.slice(1).map((t) => t.tekst!.replace(/\s+/g, ' ').trim()).filter(Boolean).join(' ')

    wiersze.push({
      partNumber,
      description: opis || undefined,
      unitPrice: cena.liczba !== undefined ? Math.round(cena.liczba * 100) : grosze(String(cena.tekst)),
    })
  }

  if (wiersze.length === 0) throw new Error('Nie znalazłem w arkuszu ani jednego wiersza z numerem i ceną.')

  for (const w of [...wiersze]) {
    for (const odpowiednik of ODPOWIEDNIKI_W_KATALOGU[w.partNumber] ?? []) {
      if (wiersze.some((x) => x.partNumber === odpowiednik)) continue
      wiersze.push({ ...w, partNumber: odpowiednik, description: `${w.description ?? ''} (w cenniku ${w.partNumber})`.trim() })
    }
  }

  return wiersze
}
