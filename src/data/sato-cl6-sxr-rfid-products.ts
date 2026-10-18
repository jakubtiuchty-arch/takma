import type { Product } from './products'

const id = 'sato-cl6-sxr-rfid'
const parts = [
  { key: 'head-203', pn: 'R49015101', name: 'Głowica 203 dpi SATO CL6-SXR', image: 'head', match: 'Wersja 203 dpi', description: 'Głowica R49015101 do drukarki SATO CL6-SXR 203 dpi, także z UHF RFID. Nie pasuje do wersji 305 dpi i nie służy do zmiany rozdzielczości urządzenia.' },
  { key: 'head-305', pn: 'R49015201', name: 'Głowica 305 dpi SATO CL6-SXR', image: 'head', match: 'Wersja 305 dpi', description: 'Głowica R49015201 do drukarki SATO CL6-SXR 305 dpi, także z UHF RFID. Nie pasuje do wersji 203 dpi i nie służy do zmiany rozdzielczości urządzenia.' },
  { key: 'platen', pn: 'R55373100', name: 'Wałek dociskowy SATO CL6-SXR', image: 'platen', match: '203 i 305 dpi', description: 'Wałek dociskowy R55373100 do SATO CL6-SXR, także z UHF RFID. Pasuje do wersji 203 i 305 dpi sprzedawanych w Europie.' },
  { key: 'cutter', pn: 'WWCLXD100', name: 'Obcinak SATO CL6-SXR', image: 'cutter', match: 'CL6-SXR; dobór do materiału i wyposażenia', description: 'Zestaw obcinaka gilotynowego WWCLXD100 do SATO CL6-SXR. Przed zastosowaniem z RFID sprawdź długość etykiety i położenie wkładki. Obcinak musi ciąć między wkładkami. Warianty z kodem A0 mają fabryczny obcinak i nie wymagają jego ponownego zakupu.' },
]
export const satoCl6SxrRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl6-sxr-${a.key}`, slug: `sato-cl6-sxr-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Przed zakupem podaj numer seryjny drukarki. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno. Ilustracja przedstawia poglądowy rysunek części.`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL6-SXR RFID, aktualna cena i dostępność w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl6-sxr-${a.image}-catalog.webp`], imageDescriptions: [`${a.name} — ${a.pn}, rysunek poglądowy`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL6-SXR; ${a.match}` }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CL6-SXR (EN)', type: 'manual', url: '/downloads/sato-cl6-sxr-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl6SxrRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL6-SXR RFID', seoH1: 'SATO CL6-SXR RFID',
  seoTitle: 'SATO CL6-SXR RFID — drukarka RFID UHF 203/305 dpi',
  seoDescription: 'SATO CL6-SXR RFID: 6-calowa drukarka i koder UHF 203 lub 305 dpi. Nadruk do 167,5 mm z prędkością 355,6 mm/s, taśma 600 m, obcinak lub odklejak.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do szerokich etykiet. Wersje 203 i 305 dpi, nadruk do 167,5 mm przy ustawieniu Left-justify, taśma do 600 m. Wyposażenie zależy od PN.',
  description: `SATO CL6-SXR RFID drukuje szerokie etykiety i zapisuje dane w ich układach UHF. Służy do znakowania opakowań, palet i wyposażenia. Dostępne wersje mają fabryczny koder UHF RFID i przewód zasilający EU.

## Szerokość nadruku i rozdzielczość

Wybierz 203 lub 305 dpi. Standardowa szerokość nadruku wynosi 152 mm przy 203 dpi lub 165,3 mm przy 305 dpi. Ustawienie Head Base Position na Left-justify pozwala rozszerzyć nadruk do 167,5 mm. Sprawdź ustawienie pozycji głowicy podczas przygotowania szablonu.

Rozdzielczość 305 dpi ułatwia druk drobnego tekstu i małych kodów 2D. Nie zwiększa zasięgu RFID. Obie wersje drukują z prędkością do 355,6 mm/s, czyli 14 cali/s. Z odklejakiem prędkość wynosi do 254 mm/s. Zapis danych RFID może ograniczyć tempo pracy.

## Kodowanie UHF w procesie magazynowym

Zadanie musi zawierać polecenia druku i kodowania. Sam plik PDF nie zapisuje identyfikatora EPC. Powiąż identyfikator z rekordem produktu, palety lub opakowania w WMS albo ERP.

Dobierz wkładkę RFID, jej położenie na podkładzie i zakres pamięci do zadania. Po zmianie materiału wykonaj kalibrację podawania i RFID. Sprawdź zapis oraz odczyt na docelowym przedmiocie. Nadruk w pobliżu układu lub anteny może podlegać ograniczeniom wynikającym z budowy etykiety.

Metal, ciecz i sposób naklejenia wpływają na odczyt. Do oznaczania metalu przekaż nam opis przedmiotu. Dobierzemy etykietę na metal i sprawdzimy zapis. CL6-SXR drukuje i koduje przy stanowisku. Do odczytu oznaczeń na regałach potrzebujesz osobnego czytnika UHF.

## Rolki i taśmy barwiące

Drukarka obsługuje druk termotransferowy oraz termiczny bezpośredni. Do termotransferu dobierz taśmę o długości do 600 m i szerokości 59–177 mm. Gilza taśmy ma 25,4 mm. Drukarka obsługuje barwnik po wewnętrznej lub zewnętrznej stronie taśmy.

Maksymalna średnica rolki wynosi 220 mm. Gilza materiału może mieć 76 lub 101 mm. Szerokość etykiety bez podkładu wynosi 47–177 mm. Do etykiet RFID wybierz rolkę na gilzie 101 mm. Szerokie etykiety znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam wymiary, grubość materiału i położenie wkładki. Dobierzemy rolkę do CL6-SXR RFID.

## Europejskie konfiguracje

Wszystkie pokazane PN mają zegar RTC, USB, dwa porty USB Host, Gigabit Ethernet, RS-232 i port EXT. Warianty z łącznością radiową mają Wi-Fi 802.11a/b/g/n/ac/ax oraz Bluetooth 5.2. Dostępne pasma i funkcje radiowe zależą od ustawień regionalnych.

Wybierz sposób odbioru etykiety: ręczne odrywanie, obcinak, odklejak z nawijakiem podkładu lub prosty odklejak. Warianty C0 mają odklejak i nawijak podkładu. Warianty E0 mają prosty odklejak bez nawijania podkładu. Wybierz wariant do sposobu odbioru etykiet.

Przy RFID ustaw cięcie między wkładkami. Działanie odklejaka sprawdź na wybranym materiale. Nie dokupuj wyposażenia, które ma już zamawiany PN.

## Obsługa i części

Kolorowy ekran dotykowy 4,3 cala pokazuje ustawienia i instrukcje obsługi. Pamięć obejmuje 2 GB RAM i 8 GB Flash. Język SBPL i środowisko AEP pozwalają dostosować zadania do procesu. Przed wymianą drukarki w istniejącym systemie sprawdź zgodność poleceń, także dla RFID.

Głowica R49015101 pasuje do wersji 203 dpi. Wersja 305 dpi wymaga R49015201. Wałek R55373100 pasuje do obu rozdzielczości. Zestaw WWCLXD100 dodaje obcinak. Dobieraj części do numeru seryjnego i zleć montaż serwisowi.

## Gwarancja

Podstawowa gwarancja producenta wynosi 1 rok. Dodatkowy rok dotyczy kwalifikujących się produktów na warunkach regionalnych. Zapytaj nas o zakres ochrony dla zamawianego PN. Dla głowicy i wałka obowiązuje 1 rok lub 30 km druku termotransferowego, albo 1 rok lub 15 km druku termicznego. Decyduje pierwszy osiągnięty limit. Zachowaj dowód zakupu i stosuj materiały zatwierdzone przez SATO.

Do węższych etykiet porównaj [SATO CL4-SXR RFID](/produkt/sato-cl4-sxr-rfid). W klasie sześciocalowej sprawdź także [Zebra ZT421 RFID](/produkt/zebra-zt421-rfid) i [Zebra ZT620 RFID](/produkt/zebra-zt620-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl6-sxr-rfid-final.webp'], imageDescriptions: ['SATO CL6-SXR RFID — przemysłowa drukarka etykiet, widok pod kątem z prawym bokiem'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: '203 / 305 dpi', szerokoscDruku: 'Do 167,5 mm; standardowo 152 / 165,3 mm', szerokoscEtykiet: '47–177 mm bez podkładu; RFID wymaga doboru wkładki', predkoscDruku: 'Do 355,6 mm/s; z odklejakiem do 254 mm/s' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 / 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Standardowo 152 mm (203 dpi) / 165,3 mm (305 dpi); do 167,5 mm przy Head Base Position: Left-justify' },
    { name: 'Prędkość nadruku', value: 'Do 355,6 mm/s; z odklejakiem do 254 mm/s; kodowanie RFID może ograniczyć prędkość' },
    { name: 'RFID', value: 'UHF, konfiguracje europejskie; bez kodera HF' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm; gilza 76 lub 101 mm; materiał RFID wymaga testu' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 59–177 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB, 2 × USB Host, Gigabit Ethernet, RS-232, EXT; Wi-Fi i Bluetooth zależnie od PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 4,3 cala' },
    { name: 'Pamięć', value: '2 GB RAM; 8 GB Flash' },
    { name: 'Język', value: 'SBPL; aplikacje AEP' },
    { name: 'Zegar RTC', value: 'Tak, we wszystkich pokazanych PN' },
    { name: 'Wymiary', value: '338 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '19,4 kg bez materiałów i opcji' },
    { name: 'Gwarancja', value: 'Podstawowa 1 rok; dodatkowy rok na warunkach regionalnych dla kwalifikujących się produktów. Głowica i wałek: 1 rok / 30 km TT lub 15 km DT; pierwszy limit.' },
  ],
  variants: [
  {
    "partNumber": "WWCLXA70ZNAREU",
    "name": "203 dpi, UHF EU, Ręczne odrywanie",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Ręczne odrywanie",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXA70ZWAREU",
    "name": "203 dpi, UHF EU, Ręczne odrywanie, Wi-Fi + BT",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Ręczne odrywanie",
      "Łączność": "USB, Ethernet, RS-232, Wi-Fi, Bluetooth"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXAA0ZNAREU",
    "name": "203 dpi, UHF EU, Obcinak",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Obcinak",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXAA0ZWAREU",
    "name": "203 dpi, UHF EU, Obcinak, Wi-Fi + BT",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Obcinak",
      "Łączność": "USB, Ethernet, RS-232, Wi-Fi, Bluetooth"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXAC0ZNAREU",
    "name": "203 dpi, UHF EU, Odklejak + nawijak podkładu",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Odklejak + nawijak podkładu",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXAC0ZWAREU",
    "name": "203 dpi, UHF EU, Odklejak + nawijak podkładu, Wi-Fi + BT",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Odklejak + nawijak podkładu",
      "Łączność": "USB, Ethernet, RS-232, Wi-Fi, Bluetooth"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXAE0ZNAREU",
    "name": "203 dpi, UHF EU, Prosty odklejak",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Obsługa etykiet": "Prosty odklejak",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXB70ZNAREU",
    "name": "305 dpi, UHF EU, Ręczne odrywanie",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Ręczne odrywanie",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXB70ZWAREU",
    "name": "305 dpi, UHF EU, Ręczne odrywanie, Wi-Fi + BT",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Ręczne odrywanie",
      "Łączność": "USB, Ethernet, RS-232, Wi-Fi, Bluetooth"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXBA0ZNAREU",
    "name": "305 dpi, UHF EU, Obcinak",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Obcinak",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXBA0ZWAREU",
    "name": "305 dpi, UHF EU, Obcinak, Wi-Fi + BT",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Obcinak",
      "Łączność": "USB, Ethernet, RS-232, Wi-Fi, Bluetooth"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXBC0ZNAREU",
    "name": "305 dpi, UHF EU, Odklejak + nawijak podkładu",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Odklejak + nawijak podkładu",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXBC0ZWAREU",
    "name": "305 dpi, UHF EU, Odklejak + nawijak podkładu, Wi-Fi + BT",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Odklejak + nawijak podkładu",
      "Łączność": "USB, Ethernet, RS-232, Wi-Fi, Bluetooth"
    },
    "availability": "unavailable"
  },
  {
    "partNumber": "WWCLXBE0ZNAREU",
    "name": "305 dpi, UHF EU, Prosty odklejak",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Obsługa etykiet": "Prosty odklejak",
      "Łączność": "USB, Ethernet, RS-232"
    },
    "availability": "unavailable"
  }
],
  compatibleAccessories: [], relatedAccessories: satoCl6SxrRfidAccessories.map(a => a.id),
  applications: ['Druk i kodowanie etykiet UHF na produkty oraz opakowania', 'Znakowanie wyposażenia', 'Integracja znakowania z WMS i ERP'],
  faq: [
    { question: 'Czy wszystkie CL6-SXR mają RFID?', answer: 'Nie. Koder UHF RFID mają wersje RFID z tabeli wariantów. Wersje bez RFID mają inne numery katalogowe.' },
    { question: 'Jaka jest maksymalna szerokość nadruku?', answer: 'Standardowo 152 mm przy 203 dpi lub 165,3 mm przy 305 dpi. Ustawienie Head Base Position na Left-justify rozszerza nadruk do 167,5 mm.' },
    { question: 'Czym różnią się odklejaki C0 i E0?', answer: 'Wariant C0 ma odklejak z nawijakiem podkładu. Wariant E0 ma prosty odklejak. Dobierz konfigurację do sposobu odbioru etykiet.' },
    { question: 'Czy prędkość 14 cali/s dotyczy każdego zadania RFID?', answer: 'Nie. To maksymalna prędkość nadruku. Z odklejakiem prędkość wynosi do 254 mm/s. Kodowanie i materiał mogą wymagać niższej prędkości.' },
  ],
  downloads: [
    { name: 'Karta katalogowa CL4-SXR / CL6-SXR (EN)', type: 'datasheet', url: '/downloads/sato-cl4-sxr-karta-en.pdf', size: 'PDF' },
    { name: 'Instrukcja CL-SXR (EN)', type: 'manual', url: 'https://www.manual.sato-global.com/printer/cl-sxr/en/main/index.html', size: 'Online' },
    { name: 'Sterowniki i narzędzia CL6-SXR', type: 'driver', url: 'https://www.satoamerica.com/support_downloads/printers/industrial/cl6-sxr/', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt421-rfid', 'zebra-zt620-rfid', 'sato-cl4-sxr-rfid'],
  sameAs: 'https://www.satoamerica.com/products/printers/industrial/cl6-sxr/', createdAt: '2026-10-16',
}]
