import type { Product, Subcategory } from './products'
import type { ComparisonTable, SubcategoryRichContent } from './subcategory-content'
import { getManufacturerById } from './manufacturers'

export const rfidPrinterCategory: Subcategory = {
  id: 'drukarki-rfid',
  slug: 'drukarki-rfid',
  name: 'Drukarki RFID',
  parentCategoryId: 'drukarki-etykiet',
  description: 'Druk i kodowanie etykiet RAIN UHF RFID do magazynu, produkcji i handlu',
  seoTitle: 'Drukarki RFID — druk i kodowanie etykiet UHF | TAKMA',
  seoDescription: 'Drukarki RFID do druku i kodowania etykiet UHF. Poznaj typy urządzeń, ich zastosowania i wymagania. Dobierz drukarkę, etykiety oraz konfigurację z TAKMA.',
  longDescription: 'Drukarki RFID drukują tekst, grafikę i kody kreskowe oraz zapisują dane w układzie etykiety RFID. Modele RAIN UHF RFID służą do znakowania towarów, opakowań i wyposażenia. Wybierz urządzenie do stanowiska pracy, linii produkcyjnej lub drukowania w magazynie. TAKMA pomoże dobrać drukarkę, etykiety i konfigurację do Twojego procesu.',
  icon: 'printer',
  productIds: ['zebra-zd621r', 'zebra-zt411-rfid', 'zebra-zt610-rfid', 'zebra-zt231-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid', 'zebra-zd611r', 'zebra-zq630-plus-rfid', 'zebra-zq521-rfid', 'zebra-zq511-rfid', 'sato-ct4-lx-rfid', 'sato-cl4-sxr-rfid', 'sato-cl6-sxr-rfid', 'sato-cl4nx-plus-rfid', 'sato-cl6nx-plus-rfid', 'honeywell-pm45-rfid', 'honeywell-px65-rfid', 'honeywell-px45-rfid', 'tsc-th240r', 'tsc-th340r', 'tsc-alpha-40l-rfid', 'tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid', 'tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid', 'tsc-printronix-t6604e-rfid', 'tsc-mb241tr', 'tsc-mb341tr', 'brother-tj-4021tnr', 'brother-tj-4121tnr', 'brother-td-4650tnwbr', 'brother-td-4750tnwbr', 'bixolon-xt5-40nr', 'bixolon-xd5-40tr'],
  productCount: 34,
}

export const rfidPrinterContent: SubcategoryRichContent = {
  updatedAt: '2026-10-17',
  sectionHeadings: {
    technicalDeepDive: 'Kodowanie RFID, zgodność etykiet i koszty pracy',
    useCases: 'Gdzie stosuje się drukarki RFID?',
    comparisons: 'Czym RFID różni się od zwykłego druku etykiet?',
  },
  definition: {
    heading: 'Co to jest drukarka RFID i jak działa?',
    content: 'Drukarka RFID to drukarka etykiet z modułem do radiowego zapisu danych. Podczas przygotowania etykiety drukuje widoczny tekst lub kod i koduje jej układ elektroniczny. Gotową etykietę można odczytać skanerem kodów kreskowych albo zgodnym czytnikiem RFID. Odczyt radiowy nie wymaga bezpośredniej widoczności nadruku.\n\nW tej kategorii opisujemy drukarki do etykiet RAIN UHF RFID. Współpracują one z odpowiednimi etykietami i czytnikami UHF. W Europie RAIN UHF RFID pracuje w paśmie 865–868 MHz według wymagań ETSI. Nie należy utożsamiać ich z urządzeniami do kart NFC lub MIFARE. Sam interfejs Bluetooth, Wi-Fi albo NFC w drukarce nie oznacza obsługi kodowania etykiet RFID.\n\n{ofertaRfid} Do stanowiska biurkowego sprawdź [Zebra ZD621R](/produkt/zebra-zd621r). Do druku przemysłowego porównaj [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid). Do etykietowania przy towarze sprawdź mobilną [Zebra ZQ630 Plus RFID](/produkt/zebra-zq630-plus-rfid). W każdym przypadku dobierz format rolki i konfigurację do procesu.',
  },
  buyingGuide: {
    heading: 'Jak dobrać drukarkę RFID do magazynu lub produkcji?',
    items: [
      'Miejsce pracy — wybierz model biurkowy do stanowiska, przemysłowy do regularnego druku lub mobilny do etykietowania przy towarze.',
      'Znakowana powierzchnia — określ, czy etykieta trafi na karton, tworzywo, metal lub opakowanie zawierające płyn. Dobierz etykietę do tej powierzchni.',
      'Rozmiar etykiety — sprawdź szerokość druku, wysokość etykiety, położenie wkładki RFID oraz odstęp między kolejnymi etykietami.',
      'Format rolki — porównaj średnicę gilzy, średnicę zewnętrzną rolki i grubość materiału z wymaganiami wybranej drukarki.',
      'Metoda druku — do druku termotransferowego dobierz taśmę barwiącą. Etykiety do druku termicznego bezpośredniego nie wymagają taśmy.',
      'Dane RFID — ustal format identyfikatora EPC oraz ewentualną potrzebę zapisu dodatkowych danych w pamięci użytkownika etykiety.',
      'Integracja — określ, skąd drukarka otrzyma dane. Sprawdź interfejsy, oprogramowanie i sposób powiązania identyfikatora z rekordem w WMS lub ERP.',
      'Konfiguracja PN — zamów numer katalogowy z obsługą RFID i właściwą wersją regionalną. Nazwa rodziny drukarki nie potwierdza wyposażenia konkretnego wariantu.',
    ],
  },
  expertAuthority: 'W TAKMA dobieramy urządzenia AutoID i materiały do znakowania. Przy zapytaniu o drukarkę RFID podaj rozmiar etykiety, rodzaj powierzchni i planowany nakład. Dodaj nazwę systemu, z którego chcesz drukować. Na tej podstawie ustalimy wymagania dotyczące urządzenia, etykiet i konfiguracji.',
  technicalDeepDive: 'Drukarki RAIN UHF RFID obsługują zgodne etykiety z anteną i układem elektronicznym. Ta wkładka nosi nazwę inlay. Jej wymiary mogą być mniejsze niż wymiary całej etykiety. Położenie wkładki wpływa na poprawny zapis danych w drukarce. Zobacz dostępne [etykiety RFID Zebra](/etykiety-rfid-zebra). Przed zakupem sprawdź zgodność konkretnego PN z modelem i konfiguracją drukarki.\n\nRAIN UHF RFID korzysta ze standardu EPC UHF Gen2 v2, opisanego też jako ISO/IEC 18000-63. Wersje FCC dla Ameryki Północnej pracują w paśmie 902–928 MHz. Nie zastępują wersji EU, która pracuje w paśmie 865–868 MHz. W tym standardzie identyfikator EPC służy do identyfikacji oznaczonego obiektu. Nadrukowany kod kreskowy i zapisany EPC mogą korzystać z różnych formatów. System musi zachować właściwe powiązanie obu identyfikatorów. Nie zakładaj, że numer katalogowy pustej rolki jest identyfikatorem każdego oznaczonego towaru.\n\nRozdzielczość opisuje gęstość nadruku, a nie zasięg RFID. 203 dpi to 8 punktów na milimetr, 300 dpi to 12, a 600 dpi to 24 punkty na milimetr. 203 dpi wystarcza do etykiet logistycznych i kodów EAN. 300 dpi wybierz do kodów DataMatrix i QR mniejszych niż 10 mm oraz do drobnego tekstu. 600 dpi służy do bardzo małych etykiet, np. w elektronice. Zasięg RFID zależy między innymi od etykiety, czytnika, anteny, powierzchni i otoczenia. Większa pamięć układu również nie oznacza automatycznie dłuższego zasięgu. Przed wdrożeniem sprawdź odczyt na docelowym produkcie.\n\nPrzed pierwszym drukiem wykonaj kalibrację materiału i RFID zgodnie z instrukcją urządzenia. Po zmianie typu etykiet sprawdź ustawienia ponownie. Błędnie zakodowana etykieta nie powinna trafić do użycia. Sposób oznaczenia i obsługi błędu zależy od modelu oraz konfiguracji.\n\nKoszt pracy obejmuje drukarkę, etykiety RFID, ewentualną taśmę barwiącą, oprogramowanie i integrację. Uwzględnij też testy odczytu oraz obsługę błędnych etykiet. Cenę porównuj dla konkretnego PN i zestawu materiałów. Sama cena podstawowej wersji drukarki nie określa kosztu stanowiska RFID.',
  useCases: [
    {
      title: 'Stanowisko biurkowe',
      description: 'Biurkowa drukarka RFID przygotowuje etykiety przy stanowisku pracy. Przy doborze urządzenia uwzględnij miejsce na drukarkę, szerokość etykiet i format rolki. Sprawdź też sposób połączenia z komputerem lub systemem.',
    },
    {
      title: 'Magazyn i centrum dystrybucyjne',
      description: 'Etykiety RFID identyfikują towary, kartony i palety. Drukarka zapisuje identyfikator powiązany z danymi w systemie magazynowym. Dobierz urządzenie do nakładu, rozmiaru etykiet i organizacji stanowiska.',
    },
    {
      title: 'Produkcja i śledzenie części',
      description: 'Drukarka RFID przygotowuje oznaczenia części, pojemników i wyrobów. Dobierz materiał etykiety do temperatury, wilgoci i środków chemicznych występujących w procesie. Sprawdź odczyt w docelowych warunkach pracy.',
    },
    {
      title: 'Etykietowanie przy towarze',
      description: 'Mobilna drukarka RFID przygotowuje etykietę w miejscu jej naklejenia. Przy wyborze uwzględnij zasilanie, łączność, masę urządzenia i format rolki. Potwierdź wyposażenie konkretnej konfiguracji w moduł RFID.',
    },
    {
      title: 'Automatyczne naklejanie etykiet',
      description: 'Mechanizm drukujący RFID może pracować w systemie z aplikatorem. Wymaga dopasowania do linii, sposobu podawania etykiet i sterowania. Przed wyborem ustal wymagany nakład oraz sposób obsługi błędów kodowania.',
    },
    {
      title: 'Znakowanie wyposażenia i powierzchni metalowych',
      description: 'Etykiety RFID pomagają identyfikować narzędzia, urządzenia i pojemniki wielokrotnego użytku. Do metalu dobierz etykietę przeznaczoną do tej powierzchni. Sprawdź, czy drukarka obsługuje jej grubość, konstrukcję i wkładkę RFID.',
    },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zakupem drukarki RFID?',
    items: [
      { title: 'Konkretny wariant urządzenia', text: 'Jedna rodzina drukarek może obejmować różne konfiguracje. Przed zamówieniem sprawdź wyposażenie RFID w numerze PN. Nie każda drukarka z tej samej rodziny koduje etykiety.' },
      { title: 'Zgodność etykiety z powierzchnią', text: 'Zwykła etykieta UHF może działać nieprawidłowo po naklejeniu na metal. Do takiego zastosowania dobierz etykietę na metal i sprawdź jej zgodność z drukarką.' },
      { title: 'Właściwy obszar użytkowania', text: 'Dla instalacji w Polsce dobierz urządzenie i materiały do wymagań regionalnych. Wariant FCC nie jest automatycznie odpowiednikiem wariantu ETSI. Sprawdź oznaczenie konkretnego produktu.' },
      { title: 'Poprawny zapis i późniejszy odczyt', text: 'Poprawny nadruk nie potwierdza poprawnego zakodowania układu RFID. Podczas testu sprawdź zapisany identyfikator, odczyt na produkcie i powiązanie z danymi w systemie.' },
    ],
  },
  comparisons: [
    { title: 'Drukarka RFID a zwykła drukarka etykiet', content: 'Zwykła [drukarka etykiet](/drukarki-etykiet) przygotowuje nadruk. Drukarka RFID dodatkowo zapisuje dane radiowo w układzie zgodnej etykiety. Samo zadrukowanie etykiety z wkładką RFID nie koduje tej wkładki.' },
    { title: 'RFID a kod kreskowy', content: 'Kod kreskowy wymaga odczytu optycznego. RFID umożliwia radiowy odczyt identyfikatora bez bezpośredniej widoczności nadruku. Oba sposoby mogą działać na tej samej etykiecie. Wybór zależy od procesu, czytników i systemu ewidencji.' },
    { title: 'Druk termiczny a termotransferowy w RFID', content: 'RFID określa sposób zapisu i odczytu danych elektronicznych. Druk termiczny lub termotransferowy określa sposób wykonania nadruku. [Druk termotransferowy](/termotransferowe-drukarki-etykiet) wymaga [taśmy termotransferowej](/tasmy-termotransferowe), a [termiczny bezpośredni](/termiczne-drukarki-etykiet) wymaga materiału termoczułego.' },
  ],
  howToSteps: [],
  faq: [
    { question: 'Czy drukarka RFID drukuje też kody kreskowe i QR?', answer: 'Tak. Drukarka RFID może drukować tekst, grafikę i obsługiwane kody kreskowe oraz kodować układ RFID. Kod QR pozostaje nadrukiem optycznym. Nie zastępuje zapisu radiowego.' },
    { question: 'Czy każda wersja drukarki z tej samej rodziny obsługuje RFID?', answer: 'Nie. Obsługa RFID zależy od konfiguracji urządzenia. Przed zakupem sprawdź konkretny numer PN oraz zgodność z wybraną etykietą. Sama nazwa rodziny drukarek nie potwierdza obecności modułu RFID.' },
    { question: 'Jakie etykiety są potrzebne do drukarki RFID?', answer: 'Potrzebne są etykiety z wkładką RFID zgodną z urządzeniem. Sprawdź technologię radiową, rozmiar, położenie wkładki, format rolki i znakowaną powierzchnię. Do druku termotransferowego potrzebujesz też taśmy barwiącej.' },
    { question: 'Czy drukarka RFID wymaga taśmy barwiącej?', answer: 'Zależy to od metody druku. Druk termotransferowy wymaga taśmy barwiącej. Druk termiczny bezpośredni jej nie wymaga. Samo kodowanie RFID nie rozstrzyga o potrzebie użycia taśmy.' },
    { question: 'Czy drukarka RFID odczyta cały magazyn?', answer: 'Nie służy do tego. Drukarka przygotowuje i koduje etykiety. Do inwentaryzacji radiowej potrzebujesz odpowiedniego czytnika RFID, anten i oprogramowania. Sposób odczytu zależy od organizacji magazynu.' },
    { question: 'Czy etykiety RFID działają na metalu?', answer: 'Tak, jeśli dobierzesz etykietę przeznaczoną do metalu. Zwykła etykieta UHF może nie działać poprawnie na takiej powierzchni. Sprawdź również, czy drukarka obsługuje grubość i konstrukcję wybranego materiału.' },
    { question: 'Czy drukarka RAIN UHF RFID koduje karty NFC?', answer: 'Nie należy tego zakładać. RAIN UHF RFID i NFC korzystają z różnych technologii radiowych. Do kart NFC lub MIFARE potrzebujesz <a href="/drukarki-kart">drukarki kart</a> ze zgodnym enkoderem. Wyposażenie konkretnej drukarki kart trzeba sprawdzić osobno.' },
    { question: 'Czy drukarkę RFID można połączyć z WMS lub ERP?', answer: 'Tak, jeśli oprogramowanie i konfiguracja urządzenia obsługują wymagany sposób komunikacji oraz kodowania. Trzeba ustalić format EPC, źródło danych i obsługę błędów. Zgodność z konkretnym systemem wymaga sprawdzenia.' },
    { question: 'Ile kosztuje drukarka RFID?', answer: '{cenyRfid}Cena zależy od modelu, numeru PN, wyposażenia i wymaganych interfejsów. Do porównania kosztów dodaj etykiety, ewentualne taśmy i integrację. Podaj zastosowanie oraz nakład, aby otrzymać wycenę dopasowanej konfiguracji.' },
  ],
}

/** Cena „od” na żywo: slug drukarki → najniższa cena netto (ta sama reguła co na kaflu). */
export type CenyRfid = Record<string, number>

type TypDrukarkiRfid = 'biurkowa' | 'przemyslowa-4' | 'przemyslowa-6' | 'mobilna'

/**
 * `filtr` to wartości filtrów z category-filters.ts ('drukarki-rfid'). Link w tabeli otwiera
 * listę produktów z tymi filtrami (parametry „f.” czyta FilterableProductGrid).
 */
const typyDrukarekRfid: { typ: TypDrukarkiRfid; nazwa: string; nazwaWCenach: string; rola: string; filtr: Record<string, string> }[] = [
  { typ: 'biurkowa', nazwa: 'Biurkowa', nazwaWCenach: 'biurkowe', rola: 'Przy stanowisku pracy', filtr: { rodzaj: 'Biurkowa' } },
  { typ: 'przemyslowa-4', nazwa: 'Przemysłowa 4"', nazwaWCenach: 'przemysłowe 4-calowe', rola: 'Magazyn i produkcja', filtr: { rodzaj: 'Przemysłowa', szerokosc: '4 cale (104–112 mm)' } },
  { typ: 'przemyslowa-6', nazwa: 'Przemysłowa 6"', nazwaWCenach: 'przemysłowe 6-calowe', rola: 'Szerokie etykiety, np. paletowe', filtr: { rodzaj: 'Przemysłowa', szerokosc: '6 cali (152–168 mm)' } },
  { typ: 'mobilna', nazwa: 'Mobilna', nazwaWCenach: 'mobilne', rola: 'Druk przy towarze, z baterii', filtr: { rodzaj: 'Mobilna' } },
]

/** Kolejność cen w FAQ: od najtańszej grupy do przemysłowych. */
const kolejnoscWCenach: TypDrukarkiRfid[] = ['biurkowa', 'mobilna', 'przemyslowa-4', 'przemyslowa-6']

function wartoscSpecyfikacji(p: Product, nazwa: string): string {
  return p.specifications.find(s => s.name === nazwa)?.value ?? ''
}

/** Największa szerokość druku w mm z opisu specyfikacji, np. „Standardowo 152 mm / 165,3 mm; do 167,5 mm”. */
function szerokoscDrukuMm(p: Product): number | null {
  const tekst = `${wartoscSpecyfikacji(p, 'Szerokość druku')} ${p.keyParams?.szerokoscDruku ?? ''}`
  const liczby = Array.from(tekst.matchAll(/(\d+(?:[,.]\d+)?)\s*mm/g), m => parseFloat(m[1].replace(',', '.')))
  return liczby.length ? Math.max(...liczby) : null
}

function rozdzielczosciDpi(p: Product): number[] {
  const tekst = `${wartoscSpecyfikacji(p, 'Rozdzielczość')} ${p.keyParams?.rozdzielczosc ?? ''}`
  return Array.from(new Set(Array.from(tekst.matchAll(/\b(203|300|305|406|600|609)\b/g), m => Number(m[1]))))
}

/** Klasy rozdzielczości do tabeli: 305 dpi (SATO) liczymy jako 300, a 609 dpi jako 600. */
function klasyDpi(modele: Product[]): string {
  const klasy = Array.from(new Set(modele.flatMap(rozdzielczosciDpi).map(d => (d === 305 ? 300 : d === 609 ? 600 : d))))
    .sort((a, b) => a - b)
    .map(String)
  if (!klasy.length) return '—'
  return `${klasy.length > 1 ? `${klasy.slice(0, -1).join(', ')} lub ${klasy[klasy.length - 1]}` : klasy[0]} dpi`
}

/** Typ z podkategorii karty; przemysłowe dzielimy po szerokości druku (6 cali to ok. 152–168 mm). */
function typDrukarkiRfid(p: Product): TypDrukarkiRfid {
  const podkategorie = p.subcategoryIds ?? []
  if (podkategorie.includes('mobilne-drukarki-etykiet')) return 'mobilna'
  if (podkategorie.includes('biurkowe-drukarki-etykiet')) return 'biurkowa'
  return (szerokoscDrukuMm(p) ?? 0) >= 150 ? 'przemyslowa-6' : 'przemyslowa-4'
}

/** 1 model, 2–4 modele, 5+ modeli (12–14 jak 5+). */
function odmien(n: number, formy: [string, string, string]): string {
  if (n === 1) return formy[0]
  const d = n % 10
  const s = n % 100
  return d >= 2 && d <= 4 && (s < 12 || s > 14) ? formy[1] : formy[2]
}

/** Kwota z twardą spacją między tysiącami, żeby „1 874” nie łamało się na dwie linie. */
function kwota(v: number): string {
  return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function zakres(ceny: number[]): string {
  const od = Math.min(...ceny)
  const doKwoty = Math.max(...ceny)
  return Math.round(od) === Math.round(doKwoty) ? `${kwota(od)} zł` : `${kwota(od)}–${kwota(doKwoty)} zł`
}

function wyliczenie(elementy: string[]): string {
  return elementy.length > 1 ? `${elementy.slice(0, -1).join(', ')} i ${elementy[elementy.length - 1]}` : elementy.join('')
}

function zakresMm(wartosci: number[]): string {
  const f = (v: number) => String(v).replace('.', ',')
  const od = Math.min(...wartosci)
  const doMm = Math.max(...wartosci)
  return od === doMm ? `do ${f(doMm)} mm` : `${f(od)}–${f(doMm)} mm`
}

/**
 * Uzupełnia treść kategorii o dane liczone z kart produktów: liczbę modeli i producentów,
 * tabelę typów i ceny w FAQ. Strona i FAQPage dostają ten sam tekst. Bez cen na żywo
 * zdanie o cenach znika, a w tabeli zostaje „na zapytanie”.
 */
export function uzupelnijTrescRfid(tresc: SubcategoryRichContent, drukarki: Product[], ceny: CenyRfid): SubcategoryRichContent {
  const producenci = Array.from(new Set(drukarki.map(p => p.manufacturerId)))
    .map(id => getManufacturerById(id)?.name ?? id)
  const oferta = `Oferta obejmuje ${drukarki.length} ${odmien(drukarki.length, ['model', 'modele', 'modeli'])} drukarek RFID od ${producenci.length} ${odmien(producenci.length, ['producenta', 'producentów', 'producentów'])}: ${wyliczenie(producenci)}.`

  const grupy = typyDrukarekRfid.map(t => {
    const modele = drukarki.filter(p => typDrukarkiRfid(p) === t.typ)
    const cenyGrupy = modele.map(p => ceny[p.slug]).filter((c): c is number => typeof c === 'number' && c > 0)
    return { ...t, modele, cenyGrupy }
  }).filter(g => g.modele.length > 0)

  const wszystkieCeny = grupy.flatMap(g => g.cenyGrupy)
  const zdanieOCenach = wszystkieCeny.length
    ? `Ceny netto drukarek RFID zaczynają się od ${kwota(Math.min(...wszystkieCeny))} zł. Zakres cen „od” według typu: ${kolejnoscWCenach
        .map(typ => grupy.find(g => g.typ === typ))
        .filter((g): g is (typeof grupy)[number] => !!g && g.cenyGrupy.length > 0)
        .map(g => `${g.nazwaWCenach} ${zakres(g.cenyGrupy)}`)
        .join(', ')}. `
    : ''

  const tabela: ComparisonTable = {
    heading: 'Którą drukarkę RFID wybrać?',
    intro: 'Wybierz typ według miejsca pracy i szerokości etykiety. Kliknij typ, aby zobaczyć jego modele na liście.',
    columns: ['Szerokość druku', 'Rozdzielczość', 'Cena netto od', 'Modele'],
    rows: grupy.map(g => {
      const szerokosci = g.modele.map(szerokoscDrukuMm).filter((v): v is number => v !== null)
      const n = g.modele.length
      return {
        model: g.nazwa,
        href: `/drukarki-rfid?${new URLSearchParams(Object.entries(g.filtr).map(([k, v]) => [`f.${k}`, v])).toString()}`,
        role: g.rola,
        cells: [
          szerokosci.length ? zakresMm(szerokosci) : '—',
          klasyDpi(g.modele),
          g.cenyGrupy.length ? `${kwota(Math.min(...g.cenyGrupy))} zł` : 'na zapytanie',
          `${n} ${odmien(n, ['model', 'modele', 'modeli'])}`,
        ],
      }
    }),
    note: 'Ceny netto bez etykiet RFID, taśm barwiących i integracji. 300 dpi obejmuje 305 dpi w drukarkach SATO, a 600 dpi — 609 dpi.',
  }

  return {
    ...tresc,
    comparisonTable: tabela,
    definition: { ...tresc.definition, content: tresc.definition.content.split('{ofertaRfid}').join(oferta) },
    faq: tresc.faq.map(f => ({ ...f, answer: f.answer.split('{cenyRfid}').join(zdanieOCenach) })),
  }
}
