import type { Product } from './products'

const ids = ['tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid']
const datasheet = '/downloads/tsc-printronix-t6000e-karta-produktu-en.pdf'
const support = 'https://emea.tscprinters.com/en/products/t6000e-series-6-inch-enterprise-industrial-rfid-printers'

export const tscT6006eRfidProducts: Product[] = [
  { model: 'T6206e', pn: 'T6E2R6-2100-02', dpi: 203, speed: '304,8', head: 'P220360-001', other: ids[1] },
  { model: 'T6306e', pn: 'T6E3R6-2100-02', dpi: 300, speed: '254', head: 'P220361-001', other: ids[0] },
].map(({ model, pn, dpi, speed, head, other }) => {
  const slug = `tsc-printronix-${model.toLowerCase()}-rfid`
  return {
    id: slug, slug, name: `TSC Printronix ${model} RFID`, seoH1: `TSC Printronix ${model} RFID`,
    seoTitle: `Printronix ${model} RFID — drukarka ${dpi} dpi, EU | TAKMA`,
    seoDescription: `TSC Printronix ${model} RFID: drukarka przemysłowa 6 cali, ${dpi} dpi, konfiguracja EU. Ethernet, taśma 450 m. Sprawdź cenę, stan i akcesoria.`,
    shortDescription: `Przemysłowa drukarka i koder UHF RFID ${dpi} dpi. Szerokość druku 166,4 mm, Ethernet i taśma barwiąca do 450 m. Konfiguracja europejska z ręcznym odrywaniem.`,
    description: `TSC Printronix ${model} RFID to przemysłowa drukarka i koder etykiet UHF RFID z serii T6000e. Przygotowuje nadruk oraz zapisuje dane w układzie zgodnej etykiety. PN ${pn} obejmuje RFID, Ethernet i przewód zasilający EU.

## ${dpi === 203 ? 'Druk i kodowanie etykiet w magazynie oraz produkcji' : 'Nadruk 300 dpi do drobnego tekstu i kodów'}

${dpi === 203 ? 'T6206e ma rozdzielczość 203 dpi i drukuje z prędkością do 304,8 mm/s. Służy do przygotowania szerokich oznaczeń kartonów, palet i pojemników w magazynie oraz na produkcji.' : 'T6306e ma rozdzielczość 300 dpi do drobniejszego tekstu i szczegółowych kodów. Maksymalna prędkość nadruku wynosi 254 mm/s.'} Maksymalna szerokość nadruku wynosi 166,4 mm.

Prędkość zadania RFID zależy od materiału, ilości danych i ustawień kodowania. Rozdzielczość druku nie określa zasięgu odczytu radiowego.

## UHF RFID do etykiet standardowych i na metal

Drukarka obsługuje pasywne etykiety RAIN UHF, zgodne z EPC Gen2 v2 i ISO 18000-63. Obsługuje także zgodne etykiety na metal. Dobierz konstrukcję materiału, położenie wkładki i ustawienia anteny do konkretnego zastosowania.

Minimalny rozstaw RFID wynosi 15,9 mm, ale długość materiału dla wersji 6-calowej wynosi co najmniej 25,4 mm. Dobierz układ etykiety do obu warunków. Po zmianie typu materiału wykonaj kalibrację podawania oraz RFID. Przed rozpoczęciem serii sprawdź zapis danych i odczyt na docelowym przedmiocie.

Drukarka kontroluje poprawność kodowania. Może oznaczyć błędną etykietę i wydrukować ją ponownie zgodnie z ustawieniami obsługi błędów. Liczniki pomagają śledzić poprawnie zakodowane i odrzucone etykiety.

## Materiały i taśma barwiąca

Obsługiwany materiał ma szerokość 50,8–172,7 mm. Druk termotransferowy wymaga taśmy barwiącej. Drukarka mieści taśmę do 450 m, o szerokości 50,8–172,7 mm i gilzie 25,4 mm.

Druk termiczny bezpośredni wymaga materiału termoczułego i nie wymaga taśmy. W obu metodach kodowanie RFID wymaga odpowiedniej wkładki. Zwykłej etykiety bez układu RFID nie można zakodować radiowo. Materiały są sprzedawane osobno.

## Łączność i integracja

Standard obejmuje USB, RS-232 i Ethernet 10/100. Kolorowy wyświetlacz 3,5 cala oraz przyciski służą do konfiguracji urządzenia. Wi-Fi wymaga osobno kupowanego modułu [P220015-901](/produkt/printronix-wifi-p220015-901).

Obsługa emulacji języków drukarek ułatwia przygotowanie szablonów. Kodowanie RFID wymaga właściwych poleceń oraz powiązania identyfikatora EPC z danymi w WMS lub ERP. Sam nadruk kodu kreskowego lub wydruk PDF nie zapisuje danych radiowych.

## Wyposażenie i części zamienne

Pokazany PN ma ręczne odrywanie etykiet. Nie obejmuje obcinaka ani nawijaka. Weryfikator ODV-2D z karty serii 4-calowej nie jest wyposażeniem tego modelu 6-calowego. Moduły odklejania i nawijania wymagają osobnego potwierdzenia zgodności z wersją RFID.

Głowica ${dpi} dpi o numerze ${head} jest przeznaczona do 6-calowych urządzeń T6000e, w tym wersji V2/V3. Przed zakupem części potwierdź wersję sprzętową i numer seryjny drukarki. Nie zastępuj jej głowicą 4-calową ani częścią o innej rozdzielczości.

${dpi === 203 ? 'Jeśli potrzebujesz drobniejszego nadruku, sprawdź [T6306e RFID](/produkt/tsc-printronix-t6306e-rfid) z rozdzielczością 300 dpi.' : 'Jeśli priorytetem jest szybszy nadruk, sprawdź [T6206e RFID](/produkt/tsc-printronix-t6206e-rfid) z rozdzielczością 203 dpi.'} Jeśli drukujesz węższe etykiety, sprawdź modele 4-calowe: [T6204e RFID](/produkt/tsc-printronix-t6204e-rfid) i [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid).`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/printronix-t6006e-rfid.png'], imageDescriptions: [`Printronix ${model} RFID — przemysłowa drukarka 6 cali z wyświetlaczem i wysuniętą etykietą`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: '166,4 mm' },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od materiału i danych` },
      { name: 'RFID', value: 'RAIN UHF, EPC Gen2 v2 / ISO 18000-63; konfiguracja EU' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '50,8–172,7 mm' },
      { name: 'Materiały RFID', value: 'Zgodne etykiety standardowe i na metal; dobór wkładki i grubości do konfiguracji' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 50,8–172,7 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Niedostępny w opisanej wersji 6-calowej' },
    ],
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, Ethernet`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie T6206e RFID i T6306e RFID', models: [
      { name: 'T6206e RFID', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'T6306e RFID', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Prędkość nadruku': 'do 254 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Oznaczanie pojemników i wyposażenia', 'Przygotowanie oznaczeń do procesów produkcyjnych i logistycznych'],
    compatibleAccessories: [], relatedAccessories: ['printronix-t6000e-wifi', `printronix-t6006e-head-${dpi}-rfid`],
    faq: [
      { question: `Czy ${model} w tej konfiguracji ma RFID?`, answer: `Tak. PN ${pn} obejmuje UHF RFID i przewód zasilający EU. Konfiguracje T6000e bez RFID mają inne numery katalogowe.` },
      { question: 'Czy Wi-Fi i ODV-2D są w zestawie?', answer: 'Nie. Ten PN ma USB, RS-232 i Ethernet oraz ręczne odrywanie. Wi-Fi wymaga opcjonalnego modułu. Weryfikator ODV-2D nie jest dostępny w opisanej wersji 6-calowej.' },
      { question: 'Czy można drukować etykiety RFID na metal?', answer: 'Tak, po dobraniu zgodnego materiału, wkładki i ustawień. Samo określenie „na metal” nie potwierdza zgodności każdej etykiety. Sprawdź zapis i odczyt na docelowym przedmiocie.' },
      { question: 'Jak dobrać głowicę do wersji RFID?', answer: `Dla ${dpi} dpi wybierz ${head} do serii T6000e 6 cali, w tym V2/V3. Przed zakupem potwierdź numer seryjny i wersję sprzętową. Głowica 4-calowa nie pasuje.` },
      { question: 'Czy drukarka odczyta towary na regałach?', answer: 'Nie służy do radiowej inwentaryzacji regałów. Przygotowuje etykiety w swoim torze materiałów. Do odczytu towarów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    ],
    downloads: [{ name: 'Karta katalogowa T6000e i RFID (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcje, sterowniki i wsparcie TSC Printronix', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [other, 'tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid', 'zebra-zt421-rfid'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})

export const tscT6006eRfidAccessories: Product[] = [
  { dpi: 203, pn: 'P220360-001', model: 'T6206e', printer: ids[0] },
  { dpi: 300, pn: 'P220361-001', model: 'T6306e', printer: ids[1] },
].map(({ dpi, pn, model, printer }): Product => ({
  id: `printronix-t6006e-head-${dpi}-rfid`, slug: `printronix-glowica-6-cali-${pn.toLowerCase()}`, name: `Głowica Printronix ${model} ${dpi} dpi — 6 cali`,
  shortDescription: `Głowica ${pn}, ${dpi} dpi, do 6-calowych drukarek T6000e, w tym ${model} RFID. Dobór wymaga sprawdzenia wersji i numeru seryjnego.`,
  description: `Printronix ${pn} to głowica drukująca ${dpi} dpi do 6-calowych drukarek T6000e, w tym odpowiedniej wersji ${model} RFID. Pasuje do serii T6000e oraz V2/V3 po potwierdzeniu wersji sprzętowej i numeru seryjnego. Nie zastępuje głowicy 4-calowej ani części o innej rozdzielczości. Głowica wykonuje nadruk i nie dodaje kodera RFID. Zestaw obejmuje jedną głowicę. Zdjęcie jest poglądowe. Wymianę zleć serwisowi.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'produkcja'],
  images: ['/images/products/printronix-6-inch-printhead.webp'], imageDescriptions: [`Głowica Printronix ${pn}, ${dpi} dpi, do T6000e 6 cali — zdjęcie poglądowe`],
  specifications: [{ name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` }, { name: 'Szerokość', value: '6 cali' }, { name: 'Zgodność', value: `${model}, w tym RFID; T6000e/V2/V3; potwierdź wersję i numer seryjny` }],
  applications: ['Serwis drukarki T6000e 6 cali'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: [printer], downloads: [], createdAt: '2026-10-16',
}))
