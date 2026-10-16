import type { Product } from './products'

const id = 'sato-cl4-sxr-rfid'
const parts = [
  { key: 'head-203', pn: 'R48221101', name: 'Głowica 203 dpi SATO CL4-SXR', image: 'head', match: '203 dpi' },
  { key: 'head-305', pn: 'R48221201', name: 'Głowica 305 dpi SATO CL4-SXR', image: 'head', match: '305 dpi' },
  { key: 'head-609', pn: 'R48221401', name: 'Głowica 609 dpi SATO CL4-SXR', image: 'head', match: '609 dpi' },
  { key: 'platen', pn: 'R55375100', name: 'Wałek dociskowy SATO CL4-SXR', image: 'platen', match: '203, 305 i 609 dpi; wykonanie globalne' },
]
export const satoCl4SxrRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl4-sxr-${a.key}`, slug: `sato-cl4-sxr-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: `${a.name}, PN ${a.pn}. Część do wersji ${a.match}.`,
  description: `${a.name}, PN ${a.pn}, to część eksploatacyjna do drukarki CL4-SXR, także z UHF RFID. Zgodność: ${a.match}. Przed zakupem podaj numer seryjny i rozdzielczość urządzenia. Wymianę zleć serwisowi. Głowica nie służy do zmiany rozdzielczości drukarki. Drukarka jest sprzedawana osobno. Ilustracja przedstawia poglądowy rysunek części.`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL4-SXR RFID, aktualna cena i dostępność w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl4-sxr-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.pn}, rysunek poglądowy`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL4-SXR, także UHF RFID; ${a.match}` }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CL4-SXR (EN)', type: 'manual', url: '/downloads/sato-cl4-sxr-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl4SxrRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL4-SXR RFID', seoH1: 'SATO CL4-SXR RFID',
  seoTitle: 'SATO CL4-SXR RFID — drukarka UHF 203–609 dpi | TAKMA',
  seoDescription: 'SATO CL4-SXR UHF RFID: 203, 305 lub 609 dpi, nadruk do 104 mm, taśma 600 m. Wersje EU, obcinak lub odklejak. Ceny, stany i części.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID. Druk do 104 mm, rozdzielczość 203, 305 lub 609 dpi, taśma do 600 m i ekran dotykowy 4,3 cala. Wyposażenie zależy od PN.',
  description: `SATO CL4-SXR RFID drukuje etykiety i zapisuje dane w układach UHF. Służy do znakowania produktów, opakowań i wyposażenia w magazynie oraz na produkcji. Ta karta obejmuje europejskie konfiguracje z fabrycznym UHF RFID.

## Rozdzielczość i prędkość nadruku

Wybierz 203, 305 lub 609 dpi. Wszystkie wersje drukują na szerokości do 104 mm. Wyższa rozdzielczość pomaga drukować drobny tekst i małe kody 2D. Nie zwiększa zasięgu odczytu RFID.

Maksymalna prędkość nadruku wynosi 457 mm/s przy 203 dpi, 406 mm/s przy 305 dpi lub 152 mm/s przy 609 dpi. Wartości maksymalne zależą od materiału, zadania i konfiguracji. W Europie osiągnięcie najwyższych prędkości może wymagać rozbudowy uchwytu materiału. Kodowanie RFID może ograniczyć prędkość pracy. Dobierz ją podczas testu docelowych etykiet.

## Kodowanie etykiet UHF RFID

Zadanie druku musi zawierać dane i polecenia kodowania. Sam plik PDF nie zapisuje identyfikatora EPC w układzie etykiety. Powiąż EPC z produktem lub opakowaniem w systemie WMS albo ERP.

Dobierz wkładkę RFID, rozmiar etykiety i jej położenie na podkładzie. Wykonaj kalibrację podawania oraz RFID po zmianie materiału. Sprawdź zapis i odczyt na docelowym przedmiocie. Metal, ciecz i sposób naklejenia wpływają na odczyt. Nie przyjmuj zgodności etykiet na metal bez testu konkretnego materiału.

Pokazane PN są wersjami UHF dla Europy. Nie są wersjami HF. Funkcja NFC do komunikacji z drukarką nie zastępuje kodera etykiet HF lub NFC. Do odczytu towarów na regałach potrzebujesz osobnego czytnika UHF.

## Materiały i taśmy

Drukarka obsługuje druk termotransferowy i termiczny bezpośredni. Przy druku termotransferowym stosuj taśmę o długości do 600 m, szerokości 39,5–128 mm i gilzie 25,4 mm. Taśma może mieć barwnik po wewnętrznej lub zewnętrznej stronie. Dobierz jej rodzaj do powierzchni etykiety.

Standardowy uchwyt mieści rolkę o średnicy do 220 mm, na gilzie 76 lub 101 mm. Zakres szerokości etykiety bez podkładu wynosi 22–128 mm. Zakres mechaniczny nie potwierdza zgodności wkładki RFID. Sprawdź także grubość materiału, położenie anteny i kierunek nawinięcia.

## Łączność i obsługa

USB, dwa porty USB Host, Gigabit Ethernet, RS-232 i interfejs EXT są wspólne dla pokazanych konfiguracji. Wszystkie mają zegar RTC. Warianty z Wi-Fi i Bluetooth umożliwiają pracę bez przewodu sieciowego. Obsługują Wi-Fi 802.11a/b/g/n/ac/ax oraz Bluetooth 5.2. Dostępne pasma zależą od ustawień regionalnych.

Ekran dotykowy 4,3 cala ułatwia zmianę ustawień i obsługę materiałów. Język SBPL oraz środowisko AEP pozwalają przygotować zadania dostosowane do procesu. Przed wymianą urządzenia w istniejącym systemie sprawdź zgodność poleceń druku i kodowania.

## Wybór konfiguracji i części

W tabeli wybierz rozdzielczość, łączność oraz sposób odbioru etykiety: ręczne odrywanie, obcinak lub odklejak. Przy RFID sprawdź, czy tor cięcia nie przechodzi przez wkładkę. Odklejak wymaga testu podawania danego materiału.

Głowice R48221101, R48221201 i R48221401 pasują odpowiednio do wersji 203, 305 i 609 dpi. Wałek R55375100 jest częścią do wykonania globalnego. Dobieraj części do numeru seryjnego. Nie używaj wymiany głowicy jako sposobu zmiany rozdzielczości urządzenia.

## Gwarancja

Podstawowa gwarancja producenta wynosi 1 rok. Dodatkowy rok dotyczy kwalifikujących się produktów na warunkach regionalnych. Ustal zakres ochrony dla zamawianego PN. Dla głowicy i wałka obowiązuje 1 rok lub 30 km druku termotransferowego, albo 1 rok lub 15 km druku termicznego. Decyduje pierwszy osiągnięty limit. Zachowaj dowód zakupu i stosuj materiały zatwierdzone przez SATO.

Porównaj także [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid) i [Zebra ZT610 RFID](/produkt/zebra-zt610-rfid). Do mniejszego stanowiska sprawdź [SATO CT4-LX RFID](/produkt/sato-ct4-lx-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl4-sxr-rfid.webp'], imageDescriptions: ['SATO CL4-SXR RFID — przemysłowa drukarka etykiet, widok pod kątem z prawym bokiem'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: '203 / 305 / 609 dpi', szerokoscDruku: '104 mm', szerokoscEtykiet: '22–128 mm bez podkładu; RFID wymaga doboru wkładki', predkoscDruku: 'Do 457 / 406 / 152 mm/s; zależnie od rozdzielczości i konfiguracji' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 / 305 / 609 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: '104 mm' },
    { name: 'Prędkość nadruku', value: 'Do 457 / 406 / 152 mm/s przy 203 / 305 / 609 dpi; maksima zależą od konfiguracji i materiału, RFID może ograniczyć prędkość' },
    { name: 'RFID', value: 'UHF, konfiguracje europejskie; bez kodera HF' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm; gilza 76 lub 101 mm; materiał RFID wymaga testu' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 39,5–128 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB, 2 × USB Host, Gigabit Ethernet, RS-232, EXT; Wi-Fi i Bluetooth zależnie od PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 4,3 cala' },
    { name: 'Pamięć', value: '2 GB RAM; 8 GB Flash' },
    { name: 'Język', value: 'SBPL; aplikacje AEP' },
    { name: 'Zegar RTC', value: 'Tak, we wszystkich pokazanych PN' },
    { name: 'Wymiary', value: '275 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '15,5 kg bez materiałów i opcji' },
    { name: 'Gwarancja', value: 'Podstawowa 1 rok; dodatkowy rok na warunkach regionalnych dla kwalifikujących się produktów. Głowica i wałek: 1 rok / 30 km TT lub 15 km DT; pierwszy limit.' },
  ],
  variants: [1, 2, 3].flatMap(n => ['70', 'A0', 'C0'].flatMap(mode => ['N', 'W'].map(radio => ({
    partNumber: `WWCLX${n}${mode}Z${radio}AREU`,
    name: `${[203, 305, 609][n - 1]} dpi, UHF EU${radio === 'W' ? ', Wi-Fi + BT' : ''}, ${mode === '70' ? 'odrywanie' : mode === 'A0' ? 'obcinak' : 'odklejak'}`,
    attributes: { 'Rozdzielczość': `${[203, 305, 609][n - 1]} dpi`, 'Obsługa etykiet': mode === '70' ? 'Ręczne odrywanie' : mode === 'A0' ? 'Obcinak' : 'Odklejak', 'Łączność': radio === 'W' ? 'USB, Ethernet, RS-232, Wi-Fi, Bluetooth' : 'USB, Ethernet, RS-232' },
    availability: 'unavailable' as const,
  })))),
  compatibleAccessories: [], relatedAccessories: satoCl4SxrRfidAccessories.map(a => a.id),
  applications: ['Druk i kodowanie etykiet UHF na produkty oraz opakowania', 'Znakowanie wyposażenia', 'Integracja znakowania z WMS i ERP'],
  faq: [
    { question: 'Czy każda CL4-SXR ma RFID?', answer: 'Nie. Ta karta zawiera konkretne europejskie PN z UHF RFID. Wersje bez RFID i z HF mają inne numery katalogowe.' },
    { question: 'Dlaczego rozdzielczości wynoszą 305 i 609 dpi?', answer: 'SATO podaje 12 i 24 punkty na milimetr, czyli odpowiednio 305 i 609 dpi. Wybierz głowicę i konfigurację zgodną z rzeczywistą rozdzielczością.' },
    { question: 'Czy kodowanie działa z maksymalną prędkością nadruku?', answer: 'Prędkość kodowania zależy od wkładki, ilości danych i kalibracji. Maksymalne prędkości nadruku wymagają właściwego materiału i konfiguracji. W Europie może być potrzebna rozbudowa uchwytu materiału.' },
    { question: 'Czy wszystkie PN mają zegar RTC?', answer: 'Tak. Różnią się rozdzielczością, obsługą etykiet oraz obecnością Wi-Fi i Bluetooth. Wspólne parametry są w specyfikacji pod tabelą.' },
  ],
  downloads: [
    { name: 'Karta katalogowa CL4-SXR / CL6-SXR (EN)', type: 'datasheet', url: '/downloads/sato-cl4-sxr-karta-en.pdf', size: 'PDF' },
    { name: 'Instrukcja CL-SXR (EN)', type: 'manual', url: 'https://www.manual.sato-global.com/printer/cl-sxr/en/main/index.html', size: 'Online' },
    { name: 'Sterowniki i narzędzia CL4-SXR', type: 'driver', url: 'https://www.satoamerica.com/support_downloads/printers/industrial/cl4-sxr/', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt411-rfid', 'zebra-zt610-rfid', 'sato-ct4-lx-rfid'],
  sameAs: 'https://www.satoamerica.com/products/printers/industrial/cl4-sxr/', createdAt: '2026-10-16',
}]
