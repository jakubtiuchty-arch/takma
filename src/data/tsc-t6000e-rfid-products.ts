import type { Product } from './products'

const ids = ['tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid']
const datasheet = '/downloads/tsc-printronix-t6000e-karta-produktu-en.pdf'
const support = 'https://emea.tscprinters.com/en/products/t6000e-series-4-inch-enterprise-industrial-rfid-printers'

export const tscT6000eRfidProducts: Product[] = [
  { model: 'T6204e', pn: 'T6E2R4-2100-02', dpi: 203, speed: '355,6', head: 'P220357-001', other: ids[1] },
  { model: 'T6304e', pn: 'T6E3R4-2100-02', dpi: 300, speed: '304,8', head: 'P220358-001', other: ids[0] },
].map(({ model, pn, dpi, speed, head, other }) => {
  const slug = `tsc-printronix-${model.toLowerCase()}-rfid`
  return {
    id: slug, slug, name: `TSC Printronix ${model} RFID`, seoH1: `TSC Printronix ${model} RFID`,
    seoTitle: `Printronix ${model} RFID — drukarka ${dpi} dpi, EU | TAKMA`,
    seoDescription: `TSC Printronix ${model} RFID: drukarka przemysłowa 4 cale, ${dpi} dpi, konfiguracja EU. Ethernet, taśma 450 m. Sprawdź cenę, stan i akcesoria.`,
    shortDescription: `Przemysłowa drukarka i koder UHF RFID ${dpi} dpi. Szerokość druku 104 mm, Ethernet i taśma barwiąca do 450 m. Konfiguracja europejska z ręcznym odrywaniem.`,
    description: `TSC Printronix ${model} RFID to przemysłowa drukarka i koder etykiet UHF RFID z serii T6000e. Przygotowuje nadruk oraz zapisuje dane w układzie zgodnej etykiety. PN ${pn} obejmuje RFID, Ethernet i przewód zasilający EU.

## ${dpi === 203 ? 'Druk i kodowanie etykiet w magazynie oraz produkcji' : 'Nadruk 300 dpi do drobnego tekstu i kodów'}

${dpi === 203 ? 'T6204e ma rozdzielczość 203 dpi i drukuje z prędkością do 355,6 mm/s. Służy do przygotowania oznaczeń towarów, kartonów, pojemników i wyposażenia.' : 'T6304e ma rozdzielczość 300 dpi do drobniejszego tekstu i szczegółowych kodów. Maksymalna prędkość nadruku wynosi 304,8 mm/s.'} Maksymalna szerokość nadruku wynosi 104 mm.

Prędkość zadania RFID zależy od materiału, ilości danych i ustawień kodowania. Rozdzielczość druku nie określa zasięgu odczytu radiowego.

## UHF RFID do etykiet standardowych i na metal

Drukarka obsługuje pasywne etykiety RAIN UHF, zgodne z EPC Gen2 v2 i ISO 18000-63. Obsługuje także zgodne etykiety na metal. Dobierz konstrukcję materiału, położenie wkładki i ustawienia anteny do konkretnego zastosowania.

Minimalny rozstaw kolejnych etykiet RFID wynosi 15,9 mm. Po zmianie typu materiału wykonaj kalibrację podawania oraz RFID. Przed rozpoczęciem serii sprawdź zapis danych i odczyt na docelowym przedmiocie.

Drukarka kontroluje poprawność kodowania. Może oznaczyć błędną etykietę i wydrukować ją ponownie zgodnie z ustawieniami obsługi błędów. Liczniki pomagają śledzić poprawnie zakodowane i odrzucone etykiety.

## Materiały i taśma barwiąca

Obsługiwany materiał ma szerokość 25,4–114,3 mm. Druk termotransferowy wymaga taśmy barwiącej. Drukarka mieści taśmę do 450 m, o szerokości 25,4–114,3 mm i gilzie 25,4 mm.

Druk termiczny bezpośredni wymaga materiału termoczułego i nie wymaga taśmy. W obu metodach kodowanie RFID wymaga odpowiedniej wkładki. Zwykłej etykiety bez układu RFID nie można zakodować radiowo. Materiały są sprzedawane osobno.

## Łączność i integracja

Standard obejmuje USB, RS-232 i Ethernet 10/100. Kolorowy wyświetlacz 3,5 cala oraz przyciski służą do konfiguracji urządzenia. Wi-Fi wymaga osobno kupowanego modułu [P220015-901](/produkt/printronix-wifi-p220015-901).

Obsługa emulacji języków drukarek ułatwia przygotowanie szablonów. Kodowanie RFID wymaga właściwych poleceń oraz powiązania identyfikatora EPC z danymi w WMS lub ERP. Sam nadruk kodu kreskowego lub wydruk PDF nie zapisuje danych radiowych.

## Wyposażenie i części zamienne

Pokazany PN ma ręczne odrywanie etykiet. Nie obejmuje obcinaka, nawijaka ani weryfikatora kodów ODV-2D. ODV-2D jest odrębną opcją kontroli jakości nadruku. Obecność RFID nie oznacza wyposażenia w ten weryfikator.

Głowica RFID ${dpi} dpi o numerze ${head} jest przeznaczona do odpowiednich urządzeń T6000e w wersji V2/V3. Przed zakupem części potwierdź wersję sprzętową i numer seryjny drukarki. Nie zastępuj jej głowicą oznaczoną Non-RFID ani częścią o innej rozdzielczości.

${dpi === 203 ? 'Jeśli potrzebujesz drobniejszego nadruku, sprawdź [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid) z rozdzielczością 300 dpi.' : 'Jeśli priorytetem jest szybszy nadruk, sprawdź [T6204e RFID](/produkt/tsc-printronix-t6204e-rfid) z rozdzielczością 203 dpi.'} Do kompaktowego stanowiska RFID sprawdź także [TSC MB241TR](/produkt/tsc-mb241tr) i [MB341TR](/produkt/tsc-mb341tr).`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/printronix-t6000e-rfid.png'], imageDescriptions: [`Printronix ${model} RFID — przemysłowa drukarka 4 cale z wyświetlaczem i wysuniętą etykietą`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: '104 mm' },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od materiału i danych` },
      { name: 'RFID', value: 'RAIN UHF, EPC Gen2 v2 / ISO 18000-63; konfiguracja EU' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '25,4–114,3 mm' },
      { name: 'Materiały RFID', value: 'Zgodne etykiety standardowe i na metal; dobór wkładki i grubości do konfiguracji' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 25,4–114,3 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Brak w pokazanym PN; opcja odrębna od RFID' },
    ],
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, Ethernet`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie T6204e RFID i T6304e RFID', models: [
      { name: 'T6204e RFID', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'do 355,6 mm/s' } },
      { name: 'T6304e RFID', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Prędkość nadruku': 'do 304,8 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Oznaczanie pojemników i wyposażenia', 'Przygotowanie oznaczeń do procesów produkcyjnych i logistycznych'],
    compatibleAccessories: [], relatedAccessories: ['printronix-t6000e-wifi', `printronix-t6000e-head-${dpi}-rfid`],
    faq: [
      { question: `Czy ${model} w tej konfiguracji ma RFID?`, answer: `Tak. PN ${pn} obejmuje UHF RFID i przewód zasilający EU. Konfiguracje T6000e bez RFID mają inne numery katalogowe.` },
      { question: 'Czy Wi-Fi i ODV-2D są w zestawie?', answer: 'Nie. Ten PN ma USB, RS-232 i Ethernet oraz ręczne odrywanie. Wi-Fi wymaga opcjonalnego modułu. Weryfikator ODV-2D jest osobną opcją, niezależną od kodera RFID.' },
      { question: 'Czy można drukować etykiety RFID na metal?', answer: 'Tak, po dobraniu zgodnego materiału, wkładki i ustawień. Samo określenie „na metal” nie potwierdza zgodności każdej etykiety. Sprawdź zapis i odczyt na docelowym przedmiocie.' },
      { question: 'Jak dobrać głowicę do wersji RFID?', answer: `Dla ${dpi} dpi dokumentacja wskazuje ${head} do wersji V2/V3. Przed zakupem potwierdź numer seryjny i wersję sprzętową. Głowica Non-RFID nie jest automatycznym zamiennikiem.` },
      { question: 'Czy drukarka odczyta towary na regałach?', answer: 'Nie służy do radiowej inwentaryzacji regałów. Przygotowuje etykiety w swoim torze materiałów. Do odczytu towarów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    ],
    downloads: [{ name: 'Karta katalogowa T6000e i RFID (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcje, sterowniki i wsparcie TSC Printronix', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [other, 'tsc-mb241tr', 'tsc-mb341tr', 'zebra-zt411-rfid'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})

export const tscT6000eRfidAccessories: Product[] = [{
  id: 'printronix-t6000e-wifi', slug: 'printronix-wifi-p220015-901', name: 'Moduł Wi-Fi Printronix P220015-901',
  shortDescription: 'Zestaw Wi-Fi 802.11a/b/g/n/ac do drukarek Printronix T6000e, w tym wersji RFID.',
  description: 'Printronix P220015-901 to zestaw rozbudowy łączności Wi-Fi 802.11a/b/g/n/ac do serii T6000e. Pasuje także do T6204e RFID i T6304e RFID. Jest sprzedawany osobno. Montaż zleć serwisowi zgodnie z instrukcją urządzenia. Moduł nie dodaje kodera RFID ani weryfikatora ODV-2D. Drukarka nie jest częścią zestawu.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'produkcja'],
  images: ['/images/products/printronix-p220015-901.webp'], imageDescriptions: ['Zestaw Wi-Fi Printronix P220015-901 — moduł, antena i elementy montażowe'],
  specifications: [{ name: 'Part Number', value: 'P220015-901' }, { name: 'Wi-Fi', value: '802.11a/b/g/n/ac' }, { name: 'Zgodność', value: 'Printronix T6000e, w tym T6204e RFID i T6304e RFID' }, { name: 'Montaż', value: 'Serwisowy' }],
  applications: ['Połączenie drukarki T6000e z siecią Wi-Fi'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: ids, downloads: [], createdAt: '2026-10-16',
}, ...[
  { dpi: 203, pn: 'P220357-001', model: 'T6204e', printer: ids[0] },
  { dpi: 300, pn: 'P220358-001', model: 'T6304e', printer: ids[1] },
].map(({ dpi, pn, model, printer }): Product => ({
  id: `printronix-t6000e-head-${dpi}-rfid`, slug: `printronix-glowica-rfid-${pn.toLowerCase()}`, name: `Głowica Printronix ${model} RFID ${dpi} dpi — V2/V3`,
  shortDescription: `Głowica ${pn}, ${dpi} dpi, 4 cale, RFID do odpowiednich drukarek T6000e V2/V3. Przed zakupem sprawdź wersję sprzętową.`,
  description: `Printronix ${pn} to głowica drukująca ${dpi} dpi do 4-calowych drukarek T6000e RFID w wersji V2/V3, w tym odpowiedniej wersji ${model}. Przed zakupem podaj numer seryjny i potwierdź wersję sprzętową. Nie traktuj tej części jako uniwersalnej głowicy do całej rodziny T6000e. Nie zastępuje głowicy o innej rozdzielczości ani części Non-RFID. Głowica wykonuje nadruk i nie dodaje kodera RFID. Zestaw obejmuje jedną głowicę. Zdjęcie jest poglądowe. Wymianę zleć serwisowi.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'produkcja'],
  images: ['/images/products/printronix-rfid-printhead.webp'], imageDescriptions: [`Głowica Printronix ${pn} do T6000e RFID V2/V3 — zdjęcie poglądowe`],
  specifications: [{ name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` }, { name: 'Szerokość', value: '4 cale' }, { name: 'Zgodność', value: `${model} RFID w wersji V2/V3; wymagane potwierdzenie wersji i numeru seryjnego` }],
  applications: ['Serwis drukarki RFID T6000e V2/V3'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: [printer], downloads: [], createdAt: '2026-10-16',
}))]
