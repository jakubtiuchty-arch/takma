import type { Product } from './products'

const id = 'sato-cl6nx-plus-rfid'
const parts = [
  { key: 'head-203', pn: 'R38747500', name: 'Głowica 203 dpi SATO CL6NX Plus', image: 'head', match: 'Wersja 203 dpi', description: 'Głowica R38747500 do SATO CL6NX Plus 203 dpi, także z UHF RFID. Dobierz ją do wersji 203 dpi.' },
  { key: 'head-305', pn: 'R38747600', name: 'Głowica 305 dpi SATO CL6NX Plus', image: 'head', match: 'Wersja 305 dpi', description: 'Głowica R38747600 do SATO CL6NX Plus 305 dpi, także z UHF RFID. Dobierz ją do wersji 305 dpi.' },
  { key: 'platen', pn: 'R38353500', name: 'Wałek dociskowy SATO CL6NX Plus', image: 'platen', match: '203 i 305 dpi', description: 'Wałek dociskowy R38353500 do SATO CL6NX Plus, także z UHF RFID. Wskaźnik Pure Line pomaga ocenić zużycie powierzchni wałka.' },
  { key: 'cutter', pn: 'WWCL95100', name: 'Gilotyna SATO CL6NX Plus', image: 'cutter', match: '203 i 305 dpi; dobór do materiału', description: 'Zestaw gilotyny WWCL95100 do SATO CL6NX Plus. Przy RFID ustaw cięcie między wkładkami. Gilotyna obsługuje materiał o grubości 0,060–0,268 mm. Nie przecinaj wkładek RFID. Przed montażem potwierdź zgodność wybranego materiału.' },
]

export const satoCl6nxPlusRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl6nx-plus-${a.key}`, slug: `sato-cl6nx-plus-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Przed zakupem podaj numer seryjny drukarki. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.${a.image === 'head' ? ' Zdjęcie przedstawia głowicę z tej serii. Rozdzielczość określa numer PN.' : ''}`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL6NX Plus RFID, cena i dostępność. Dobierz część do wersji drukarki.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl6nx-plus-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.image === 'head' ? 'widok głowicy z serii CL6NX Plus' : a.pn}`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL6NX Plus; ${a.match}` }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CL6NX Plus (EN)', type: 'manual', url: '/downloads/sato-cl6nx-plus-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl6nxPlusRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL6NX Plus RFID', seoH1: 'SATO CL6NX Plus RFID',
  seoTitle: 'SATO CL6NX Plus RFID — drukarka RFID UHF 203/305 dpi',
  seoDescription: 'SATO CL6NX Plus RFID: 6-calowa drukarka i koder UHF 203 lub 305 dpi do szerokich etykiet. Nadruk do 167,5 mm, taśma 600 m, Ethernet, RS-232.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do szerokich etykiet. Wersje 203 i 305 dpi, nadruk do 167,5 mm przy odpowiednim ustawieniu głowicy, taśma do 600 m. Oba PN mają RTC i przewód EU.',
  description: `SATO CL6NX Plus RFID drukuje szerokie etykiety i zapisuje dane w ich układach UHF. Służy do identyfikacji kartonów, palet i wyrobów. Dostępne są dwie europejskie konfiguracje z fabrycznym UHF RFID, zegarem RTC i przewodem zasilającym EU.

## Wersje 203 i 305 dpi

WWCLPA72ZNAREU ma głowicę 203 dpi. Drukuje z prędkością do 254 mm/s. WWCLPB72ZNAREU ma głowicę 305 dpi i drukuje do 203 mm/s. Wybierz 305 dpi do drobnego tekstu i szczegółowych kodów 2D. Rozdzielczość nie określa zasięgu RFID.

Oba warianty mają ręczne odrywanie etykiet. Nie mają fabrycznej gilotyny, odklejaka ani Wi-Fi. Obsługują USB, USB Host, Ethernet i RS-232. Gilotynę i odklejak można zamówić osobno.

## Szerokie etykiety i materiały

Maksymalna szerokość nadruku wynosi 167,5 mm przy ustawieniu głowicy Left-justify. Przy ustawieniu Standard wynosi 152 mm dla 203 dpi lub 165,3 mm dla 305 dpi. Sprawdź pozycję głowicy i szablon przed rozpoczęciem druku.

Drukarka obsługuje druk termotransferowy oraz termiczny bezpośredni. Szerokość materiału z podkładem wynosi 50–180 mm. Rolka może mieć średnicę do 220 mm na gilzie 76 mm. Do termotransferu dobierz taśmę o długości do 600 m i szerokości 59–177 mm. Gilza taśmy ma 25,4 mm. Barwnik może znajdować się po wewnętrznej lub zewnętrznej stronie taśmy.

Szerokie rolki z wkładką UHF są w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam wymiary, grubość materiału i położenie wkładki na podkładzie. Dobierzemy rolkę do CL6NX Plus RFID.

## Kodowanie UHF RFID

Fabryczny koder obsługuje UHF EPC Gen2 / ISO/IEC 18000-6C w europejskim paśmie 865–868 MHz. Etykieta RFID musi mieć więcej niż 15,8 mm długości. Przy kodowaniu ustaw prędkość do 4 cali/s, czyli ok. 102 mm/s. Po zmianie materiału wykonaj kalibrację podawania oraz RFID.

Zadanie musi zawierać polecenia nadruku i kodowania. Sam plik PDF nie zapisuje identyfikatora EPC. Powiąż EPC z rekordem produktu, kartonu lub palety w WMS albo ERP.

Na odczyt wpływa podłoże: metal i opakowania z cieczą wymagają specjalnych etykiet. Te konfiguracje nie mają zestawu On-Metal. Do oznaczania metalu opisz nam przedmiot. Dobierzemy etykietę i sprawdzimy kodowanie. Do odczytu towarów na regałach potrzebujesz osobnego czytnika UHF.

## Obsługa stanowiska

Kolorowy ekran LCD 3,5 cala pokazuje ustawienia i instrukcje obsługi. Dwuczęściowa pokrywa ułatwia dostęp do materiałów przy ograniczonym miejscu. Głowicę i wałek można wymienić bez narzędzi. Wskaźnik Pure Line pomaga ocenić zużycie wałka.

Drukarka obsługuje język SBPL oraz aplikacje AEP. Przed wymianą urządzenia w istniejącym systemie sprawdź zgodność poleceń i obsługę RFID. Ethernet pozwala podłączyć oba pokazane warianty do sieci przewodowej.

## Akcesoria i części

Głowica R38747500 odpowiada rozdzielczości 203 dpi. Głowica R38747600 odpowiada 305 dpi. Wałek R38353500 pasuje do obu pokazanych wersji. Dobieraj części do numeru seryjnego drukarki.

Gilotyna WWCL95100 jest osobnym zestawem do montażu. Przy RFID ustaw cięcie między wkładkami. Sprawdź grubość i długość materiału przed zastosowaniem gilotyny. Montaż wyposażenia zleć serwisowi.

## Gwarancja

Podstawowa gwarancja producenta wynosi 1 rok. Dodatkowy rok obejmuje kwalifikujące się produkty na warunkach regionalnych. Zakres ochrony dla wybranego PN potwierdzimy przy zamówieniu. Dla głowicy i wałka obowiązuje 1 rok lub 30 km druku termotransferowego, albo 1 rok lub 15 km druku termicznego. Decyduje pierwszy osiągnięty limit.

Do węższych etykiet porównaj [SATO CL4NX Plus RFID](/produkt/sato-cl4nx-plus-rfid). W klasie sześciocalowej sprawdź także [SATO CL6-SXR RFID](/produkt/sato-cl6-sxr-rfid), [Zebra ZT421 RFID](/produkt/zebra-zt421-rfid) i [Zebra ZT620 RFID](/produkt/zebra-zt620-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl6nx-plus-rfid-sized.webp'], imageDescriptions: ['SATO CL6NX Plus RFID — przemysłowa drukarka etykiet, widok z przodu i prawego boku'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: '203 / 305 dpi', szerokoscDruku: 'Do 167,5 mm przy ustawieniu Left-justify', szerokoscEtykiet: '50–180 mm z podkładem; dobór wkładki RFID', predkoscDruku: 'Do 254 mm/s (203 dpi) / 203 mm/s (305 dpi)' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 lub 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 167,5 mm przy Head Base Position: Left-justify; standardowo 152 mm (203 dpi) / 165,3 mm (305 dpi)' },
    { name: 'Prędkość nadruku', value: 'Do 254 mm/s przy 203 dpi; do 203 mm/s przy 305 dpi; zależnie od materiału i kodowania' },
    { name: 'RFID', value: 'UHF EPC Gen2 / ISO/IEC 18000-6C; pasmo EU 865–868 MHz; etykieta RFID dłuższa niż 15,8 mm' },
    { name: 'Szerokość materiału', value: '50–180 mm z podkładem; RFID wymaga doboru wkładki' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm na gilzie 76 mm; zależnie od wyposażenia' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 59–177 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB, USB Host, Ethernet, RS-232; bez fabrycznego Wi-Fi w pokazanych PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 3,5 cala' },
    { name: 'Pamięć', value: 'CPU1: 256 MB RAM i 2 GB Flash; CPU2: 64 MB RAM i 4 MB Flash' },
    { name: 'Zegar RTC', value: 'Tak, w obu pokazanych PN' },
    { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; gilotyna i odklejak jako osobne opcje' },
    { name: 'Wymiary', value: '338 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '20,3 kg' },
    { name: 'Gwarancja', value: 'Podstawowa 1 rok; dodatkowy rok na warunkach regionalnych. Głowica i wałek: 1 rok / 30 km TT lub 15 km DT; pierwszy limit.' },
  ],
  variants: [
    { partNumber: 'WWCLPA72ZNAREU', name: '203 dpi, UHF RFID, RTC, EU', attributes: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'Do 254 mm/s' }, availability: 'unavailable' },
    { partNumber: 'WWCLPB72ZNAREU', name: '305 dpi, UHF RFID, RTC, EU', attributes: { 'Rozdzielczość': '305 dpi', 'Prędkość nadruku': 'Do 203 mm/s' }, availability: 'unavailable' },
  ],
  applications: ['Identyfikacja produktów i opakowań przez UHF RFID', 'Oznaczanie szerokich opakowań i palet', 'Druk etykiet logistycznych z identyfikatorem EPC'],
  compatibleAccessories: [], relatedAccessories: parts.map(a => `sato-cl6nx-plus-${a.key}`),
  faq: [
    { question: 'Jaka jest szerokość nadruku CL6NX Plus RFID?', answer: 'Do 167,5 mm przy ustawieniu głowicy Left-justify. Przy ustawieniu Standard wynosi 152 mm dla 203 dpi lub 165,3 mm dla 305 dpi.' },
    { question: 'Czym różnią się WWCLPA72ZNAREU i WWCLPB72ZNAREU?', answer: 'Rozdzielczością i prędkością. Wersja 203 dpi drukuje do 254 mm/s, a wersja 305 dpi do 203 mm/s. Obie mają koder UHF, RTC, Ethernet i RS-232, bez Wi-Fi.' },
    { question: 'Z jaką prędkością kodować szerokie etykiety RFID?', answer: 'Do 4 cali/s, czyli ok. 102 mm/s. Przy tej prędkości kodowanie daje najlepsze wyniki. Wyższe prędkości wykorzystuj przy samym nadruku.' },
    { question: 'Jaką gilotynę zamówić do CL6NX Plus RFID?', answer: 'Zestaw WWCL95100. Przy etykietach RFID ustaw cięcie między wkładkami. Montaż zleć serwisowi.' },
    { question: 'Jakie pasmo RFID ma wersja europejska?', answer: 'Pasmo ETSI 865–868 MHz. Ustawienia anteny dla wkładek SATO podaje przewodnik doboru wkładek UHF w plikach do pobrania.' },
  ],
  downloads: [
    { name: 'SATO CL6NX Plus — karta katalogowa (EN)', type: 'datasheet', url: '/downloads/sato-cl6nx-plus-karta-en.pdf', size: 'PDF' },
    { name: 'CL6NX Plus — katalog części (EN)', type: 'manual', url: '/downloads/sato-cl6nx-plus-czesci-en.pdf', size: 'PDF' },
    { name: 'CL6NX Plus — dobór wkładek UHF (EN)', type: 'manual', url: '/downloads/sato-cl6nx-plus-uhf-inlay-en.pdf', size: 'PDF' },
  ],
  relatedProducts: ['sato-cl6-sxr-rfid', 'sato-cl4nx-plus-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid'],
  createdAt: '2026-10-16',
}]
