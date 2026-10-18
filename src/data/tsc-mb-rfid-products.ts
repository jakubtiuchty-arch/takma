import type { Product } from './products'

const ids = ['tsc-mb241tr', 'tsc-mb341tr']
const manual = '/downloads/tsc-mb241-instrukcja-en.pdf'
const datasheet = '/downloads/tsc-mb241-karta-produktu-en.pdf'

type MbCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq'>

const mbCopy: Record<string, MbCopy> = {
  MB241TR: {
    seoTitle: 'TSC MB241TR — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC MB241TR: przemysłowa drukarka i koder UHF RFID 203 dpi. Druk 107 mm z prędkością 304,8 mm/s, rolka 203 mm, taśma 450 m, ekran dotykowy.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi. Druk do 107 mm z prędkością do 304,8 mm/s, rolka do 203,2 mm, taśma 450 m i ekran dotykowy 3,5 cala.',
    description: `TSC MB241TR to drukarka przemysłowa z fabrycznym koderem UHF RFID i głowicą 203 dpi. Mieści rolkę etykiet o średnicy do 203,2 mm i taśmę 450 m. Pasuje do linii pakowania, magazynu i działu wysyłki.

## Większe rolki niż w drukarce biurkowej

Rolka etykiet może mieć do 203,2 mm średnicy na gilzie 25,4–76,2 mm. Taśma barwiąca ma do 450 m długości, a jej szerokość wynosi 40–110 mm. Przy takiej pojemności rzadziej zatrzymujesz pracę na wymianę materiału. Składana pokrywa komory materiału potrzebuje mniej miejsca przy otwieraniu.

Głowica 203 dpi drukuje 8 punktów na milimetr. Wystarcza do etykiet kartonowych, wysyłkowych i lokalizacyjnych. MB241TR drukuje z prędkością do 304,8 mm/s na szerokości do 107 mm. Jeden wydruk może mieć do 25 400 mm długości.

## Kodowanie wkładek UHF

Koder zapisuje pasywne etykiety RAIN UHF zgodne z EPC Gen2 v2 i ISO 18000-63. Wkładki mogą być ułożone co 15,9 mm. W wersji z ręcznym odrywaniem drukarka obsługuje etykiety RFID na metal o grubości do 1,65 mm. Kalibrację materiału i RFID wykonaj przy pierwszej rolce i po każdej zmianie materiału.

Polecenia kodowania wysyłaj w TSPL lub ZPL. Drukarka korzysta z języka TSPL-EZD, który emuluje także inne języki drukarek etykiet.

## Wyposażenie MB241TR-A001-0202

- koder UHF RFID, wersja EU/EMEA,
- ręczne odrywanie etykiet,
- kolorowy ekran dotykowy 3,5 cala,
- USB, USB Host, RS-232, Ethernet i zegar RTC.

Wi-Fi jako opcja: moduł [WF-COM-2002](/produkt/tsc-modul-wifi-bluetooth). Dodaje Wi-Fi i Bluetooth i jest sprzedawany osobno. Wersja RFID z obcinakiem to osobna konfiguracja fabryczna. Zwykła gilotyna z serii MB jej nie zastąpi.

Rolki etykiet RFID znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam wymiary etykiety, gilzę i średnicę rolki. Dobierzemy materiał do MB241TR i położenie wkładki.

## Gwarancja i porównanie

Drukarka ma 2 lata gwarancji. Głowica ma ochronę przez 12 miesięcy lub 25 km druku, wałek przez 12 miesięcy lub 50 km. Obowiązuje warunek, który wystąpi wcześniej. Zamienna głowica 203 dpi ma numer PH-MB240-0001.

Do samego nadruku wystarczy [TSC MB241T](/produkt/tsc-mb241t). Do drobnego nadruku wybierz [MB341TR](/produkt/tsc-mb341tr) z głowicą 300 dpi.`,
    faq: [
      { question: 'Czym MB241TR różni się od zwykłej MB241T?', answer: 'Zwykła MB241T nie ma kodera RFID. Do kodowania etykiet wybierz MB241TR. Obie drukarki mają głowicę 203 dpi i ekran dotykowy 3,5 cala.' },
      { question: 'Czy MB241TR ma Wi-Fi?', answer: 'Nie w standardzie. Wi-Fi jako opcja: moduł WF-COM-2002, który dodaje także Bluetooth. Standardowo drukarka ma Ethernet, USB, USB Host i RS-232.' },
      { question: 'Jak gruba może być etykieta RFID na metal?', answer: 'Do 1,65 mm w wersji z ręcznym odrywaniem. Podaj nam typ etykiety i powierzchnię przedmiotu. Dobierzemy etykietę i ustawienia zapisu.' },
      { question: 'Czy do MB241TR można dołożyć zwykłą gilotynę MB?', answer: 'Nie. Wersja RFID z obcinakiem to osobna konfiguracja fabryczna. Jeśli potrzebujesz cięcia etykiet RFID, zapytaj nas o tę wersję.' },
      { question: 'Jak duża rolka zmieści się w MB241TR?', answer: 'Rolka o średnicy do 203,2 mm na gilzie 25,4–76,2 mm. Taśma barwiąca może mieć do 450 m.' },
    ],
  },
  MB341TR: {
    seoTitle: 'TSC MB341TR — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC MB341TR: przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z małymi kodami 2D. Druk 105,7 mm, 228,6 mm/s, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z drobnym tekstem. Druk do 105,7 mm z prędkością do 228,6 mm/s, ekran dotykowy.',
    description: `TSC MB341TR drukuje z rozdzielczością 300 dpi i koduje etykiety UHF. Wybierz ją do etykiet produktowych i identyfikacyjnych, na których jest drobny tekst, numer seryjny i mały kod 2D.

## Drobny nadruk w drukarce przemysłowej

Głowica ma 11,8 punktu na milimetr. Moduł kodu DataMatrix o wielkości 0,25 mm drukuje się z 3 punktów. Kod jest ostrzejszy niż przy 203 dpi i łatwiej go odczytać skanerem. Ten model sprawdza się przy etykietach części w produkcji, etykietach elektroniki i oznaczeniach wyrobów z opisem w kilku językach.

Prędkość druku wynosi do 228,6 mm/s, a szerokość do 105,7 mm. Najdłuższy wydruk ma 11 430 mm. Do etykiet wysyłkowych z dużymi kodami szybsza jest [MB241TR](/produkt/tsc-mb241tr): drukuje do 304,8 mm/s.

## Etykieta RFID i miejsce na nadruk

MB341TR koduje pasywne wkładki RAIN UHF w standardzie EPC Gen2 v2 i ISO 18000-63, z rozstawem od 15,9 mm. Nie drukuj małego kodu 2D bezpośrednio nad układem wkładki. Nierówna powierzchnia nad układem pogarsza jakość nadruku. W wersji z ręcznym odrywaniem drukarka obsługuje etykiety na metal o grubości do 1,65 mm.

Szablon musi zawierać polecenia RFID w TSPL lub ZPL. Bez nich drukarka wykona tylko nadruk.

## Materiały i taśmy

Materiał może mieć 20–120 mm szerokości, a rolka do 203,2 mm średnicy. Taśma ma do 450 m długości i 40–110 mm szerokości. Do drobnego tekstu na etykietach foliowych wybierz taśmę żywiczną. Etykiety papierowe zwykle drukuje się taśmą woskowo-żywiczną.

Ofertę etykiet znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem prześlij nam projekt etykiety. Dobierzemy rolkę do MB341TR tak, aby wkładka nie kolidowała z drobnym nadrukiem.

## Konfiguracja MB341TR-A001-0202

Wersja EU/EMEA ma koder UHF RFID i ręczne odrywanie etykiet. Ma ekran dotykowy 3,5 cala, zegar RTC, USB, USB Host, RS-232 i Ethernet. Wi-Fi jako opcja: moduł [WF-COM-2002](/produkt/tsc-modul-wifi-bluetooth) z Bluetooth.

Gwarancja na drukarkę wynosi 2 lata. Głowica ma 12 miesięcy lub 25 km druku, wałek 12 miesięcy lub 50 km. Zamienna głowica 300 dpi ma numer [PH-MB240-0002](/produkt/tsc-glowica-mb341t-300dpi). Bez kodera RFID ten sam nadruk wykona [TSC MB341T](/produkt/tsc-mb341t).`,
    faq: [
      { question: 'Kiedy MB341TR jest lepsza od MB241TR?', answer: 'Gdy etykieta ma drobny tekst lub mały kod 2D. MB341TR ma 300 dpi, a MB241TR 203 dpi. MB241TR drukuje szybciej: do 304,8 mm/s zamiast 228,6 mm/s.' },
      { question: 'Czy zwykła MB341T zakoduje etykietę RFID?', answer: 'Nie. Zwykła MB341T nie ma kodera RFID. Do kodowania etykiet wybierz MB341TR.' },
      { question: 'Jaka taśma pasuje do drobnego nadruku w MB341TR?', answer: 'Do etykiet foliowych wybierz taśmę żywiczną, do papierowych zwykle woskowo-żywiczną. Taśma może mieć 40–110 mm szerokości i do 450 m długości.' },
      { question: 'Jaką głowicę zamówić do MB341TR?', answer: 'Głowicę 300 dpi PH-MB240-0002. Pasuje także do MB341T. Przed wymianą odłącz zasilanie i poczekaj, aż głowica ostygnie.' },
      { question: 'Czy MB341TR odczytuje etykiety na regałach?', answer: 'Nie. Drukarka koduje etykietę w swoim torze materiału. Do inwentaryzacji regałów potrzebny jest czytnik UHF RFID.' },
    ],
  },
}

export const tscMbRfidProducts: Product[] = [
  { model: 'MB241TR', pn: 'MB241TR-A001-0202', dpi: 203, width: '107', speed: '304,8', head: 'tsc-printhead-mb241t-203', ordinary: 'tsc-mb241t', other: ids[1] },
  { model: 'MB341TR', pn: 'MB341TR-A001-0202', dpi: 300, width: '105,7', speed: '228,6', head: 'tsc-printhead-mb341t-300', ordinary: 'tsc-mb341t', other: ids[0] },
].map(({ model, pn, dpi, width, speed, head, ordinary, other }) => {
  const slug = `tsc-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `TSC ${model}`, seoH1: `TSC ${model}`,
    ...mbCopy[model],
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/tsc-mb-rfid-framed.webp'], imageDescriptions: [`TSC ${model} — drukarka RFID z ekranem dotykowym i przednią osłoną anteny`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: `${width} mm` },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od materiału i danych` },
      { name: 'RFID', value: 'RAIN UHF, EPC Gen2 v2 / ISO 18000-63; konfiguracja EU/EMEA' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i odklejaka' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm' },
      { name: 'Grubość materiału', value: 'Zwykłe etykiety 0,06–0,28 mm; zgodne RFID na metal do 1,65 mm w wersji z ręcznym odrywaniem' },
      { name: 'Szerokość materiału', value: '20–120 mm; wymagana zgodność wkładki RFID i kalibracja' },
      { name: 'Średnica rolki i gilzy', value: 'Rolka do 203,2 mm; gilza 25,4–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 40–110 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100; Wi-Fi i Bluetooth opcjonalne' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Pamięć', value: '256 MB SDRAM i 256 MB Flash' },
      { name: 'Polecenia', value: 'TSPL-EZD; kodowanie RFID przez TSPL / ZPL' },
      { name: 'Temperatura pracy', value: '0–40°C' },
    ],
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, ręczne odrywanie`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie TSC MB241TR i MB341TR', models: [
      { name: 'MB241TR', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '107 mm', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'MB341TR', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 228,6 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary i opakowania', 'Oznaczanie pojemników oraz wyposażenia', 'Przygotowanie etykiet do procesów magazynowych i produkcyjnych'],
    compatibleAccessories: [], relatedAccessories: ['tsc-wifi-bt-module', head],
    downloads: [{ name: 'Karta katalogowa serii MB241 (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcja obsługi serii MB241 z RFID (EN)', type: 'manual', url: manual, size: 'PDF' }, { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/downloads', size: 'Online' }],
    relatedProducts: [other, ordinary, 'brother-tj-4021tnr', 'zebra-zt231-rfid'], createdAt: '2026-10-16',
  } satisfies Product
})

export const tscMbRfidAdditionalAccessories: Product[] = [{
  id: 'tsc-printhead-mb341t-300', slug: 'tsc-glowica-mb341t-300dpi', name: 'Głowica TSC MB341T / MB341TR 300 dpi',
  shortDescription: 'Głowica TSC PH-MB240-0002 o rozdzielczości 300 dpi do MB341T i MB341TR.',
  description: 'TSC PH-MB240-0002 to zamienna głowica drukująca 300 dpi do zgodnych drukarek serii MB, w tym MB341T i MB341TR. Nie pasuje jako bezpośredni zamiennik głowicy 203 dpi w MB241TR. Głowica wykonuje nadruk i nie dodaje funkcji RFID. Przed wymianą wyłącz drukarkę, odłącz zasilanie i poczekaj, aż głowica ostygnie. Montaż wykonaj zgodnie z instrukcją urządzenia.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc',
  tags: ['magazyn', 'produkcja'], images: ['/images/products/tsc-ph-mb240-0002.webp'], imageDescriptions: ['Głowica drukująca TSC PH-MB240-0002, 300 dpi do serii MB'],
  specifications: [{ name: 'Part Number', value: 'PH-MB240-0002' }, { name: 'Rozdzielczość', value: '300 dpi' }, { name: 'Zgodność', value: 'MB341T, MB341TR; odpowiednie modele serii MB o rozdzielczości 300 dpi' }],
  applications: ['Wymiana zużytej głowicy 300 dpi'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: ['tsc-mb341tr', 'tsc-mb341t'], downloads: [{ name: 'Instrukcja obsługi serii MB241 (EN)', type: 'manual', url: manual, size: 'PDF' }], createdAt: '2026-10-16',
}]
