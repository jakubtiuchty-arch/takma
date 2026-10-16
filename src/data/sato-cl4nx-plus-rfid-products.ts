import type { Product } from './products'

const id = 'sato-cl4nx-plus-rfid'
const parts = [
  { key: 'head-203', pn: 'R37901800', name: 'Głowica 203 dpi SATO CL4NX Plus', image: 'head', match: 'Wersja 203 dpi', description: 'Głowica R37901800 do SATO CL4NX Plus 203 dpi, także z UHF RFID. Nie pasuje do wersji 305 dpi i nie służy do zmiany rozdzielczości drukarki.' },
  { key: 'head-305', pn: 'R37901900', name: 'Głowica 305 dpi SATO CL4NX Plus', image: 'head', match: 'Wersja 305 dpi', description: 'Głowica R37901900 do SATO CL4NX Plus 305 dpi, także z UHF RFID. Nie pasuje do wersji 203 dpi i nie służy do zmiany rozdzielczości drukarki.' },
  { key: 'platen', pn: 'R37901501', name: 'Wałek dociskowy SATO CL4NX Plus', image: 'platen', match: '203 i 305 dpi', description: 'Wałek dociskowy R37901501 do SATO CL4NX Plus, także z UHF RFID. Wskaźnik Pure Line pomaga ocenić zużycie powierzchni wałka.' },
  { key: 'cutter', pn: 'WWCL05100', name: 'Obcinak gilotynowy SATO CL4NX Plus', image: 'cutter', match: '203 i 305 dpi; dobór do materiału', description: 'Zestaw obcinaka gilotynowego WWCL05100 do SATO CL4NX Plus. Przy RFID ustaw cięcie między wkładkami. Obcinak obsługuje materiał o grubości 0,060–0,268 mm. Nie stosuj go do grubych etykiet On-Metal bez potwierdzenia zgodności. Ten zestaw nie jest obcinakiem rotacyjnym WWCLP5500.' },
]

export const satoCl4nxPlusRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl4nx-plus-${a.key}`, slug: `sato-cl4nx-plus-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Przed zakupem podaj numer seryjny drukarki. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.${a.image === 'head' ? ' Zdjęcie przedstawia głowicę z tej serii. Rozdzielczość określa numer PN.' : ''}`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL4NX Plus RFID, cena i dostępność. Dobierz część do wersji drukarki.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl4nx-plus-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.image === 'head' ? 'widok głowicy z serii CL4NX Plus' : a.pn}`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL4NX Plus; ${a.match}` }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CL4NX Plus (EN)', type: 'manual', url: '/downloads/sato-cl4nx-plus-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl4nxPlusRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL4NX Plus RFID', seoH1: 'SATO CL4NX Plus RFID',
  seoTitle: 'SATO CL4NX Plus RFID — drukarka UHF 203 / 305 dpi | TAKMA',
  seoDescription: 'SATO CL4NX Plus RFID drukuje i koduje etykiety UHF. Wersje 203 i 305 dpi, Wi-Fi oraz zestaw On-Metal zależnie od PN. Ceny, stany i akcesoria.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID. Nadruk do 104 mm, rozdzielczość 203 lub 305 dpi, taśma do 600 m. Wersja 305 dpi ma Wi-Fi i zestaw On-Metal.',
  description: `SATO CL4NX Plus RFID drukuje etykiety i zapisuje dane w ich układach UHF. Służy do znakowania produktów, kartonów i wyposażenia. Ta karta obejmuje dwie europejskie konfiguracje z fabrycznym UHF RFID, zegarem RTC i przewodem zasilającym EU.

## Dwie konfiguracje UHF RFID

WWCLP172ZNAREU ma głowicę 203 dpi. Łączy się przewodowo przez USB, Ethernet lub RS-232. Nie ma fabrycznego Wi-Fi ani zestawu On-Metal.

WWCLP272ZWPREU ma głowicę 305 dpi, Wi-Fi oraz zestaw On-Metal. Wybierz tę konfigurację, jeśli potrzebujesz drobnego nadruku, łączności bezprzewodowej lub obsługi zgodnych, grubszych etykiet na metal.

Oba warianty drukują termotransferowo oraz termicznie bezpośrednio. Maksymalna szerokość nadruku wynosi 104 mm. Prędkość nadruku sięga 355 mm/s w obu rozdzielczościach. Materiał, ustawienia i zapis RFID mogą ograniczyć prędkość pracy.

## Dobór etykiet RFID i On-Metal

Koder UHF obsługuje standard EPC Gen2 / ISO/IEC 18000-6C. Przed zakupem materiału sprawdź wkładkę, jej położenie oraz zakres częstotliwości. Po zmianie rolki wykonaj kalibrację podawania i RFID. Sprawdź zapis oraz odczyt na docelowym przedmiocie.

Zestaw On-Metal w PN WWCLP272ZWPREU służy do obsługi wybranych grubszych etykiet na metal. Nie oznacza zgodności z każdą etykietą tego typu. Wybrane cienkie etykiety SATO Thin On-Metal o grubości poniżej 0,7 mm mogą pracować także bez tego zestawu. Dobierz konkretny materiał do konfiguracji drukarki.

Metal, ciecz i sposób naklejenia wpływają na odczyt. Drukarka koduje etykiety przy stanowisku. Do odczytu oznaczeń w magazynie potrzebujesz osobnego czytnika UHF.

## Rolki i taśmy barwiące

Drukarka obsługuje materiał o szerokości 25–131 mm z podkładem. Do termotransferu dobierz taśmę o szerokości 39,5–128 mm i długości do 600 m. Gilza taśmy ma 25,4 mm. Urządzenie obsługuje barwnik po wewnętrznej lub zewnętrznej stronie taśmy.

Wymiary rolki nie potwierdzają zgodności RFID. Sprawdź również grubość materiału i położenie anteny. Nie prowadź linii cięcia przez wkładkę RFID.

## Obsługa i integracja

Kolorowy ekran LCD 3,5 cala pokazuje ustawienia oraz instrukcje obsługi. Dwuczęściowa pokrywa ułatwia dostęp do materiałów przy ograniczonym miejscu. Głowicę i wałek można wymienić bez narzędzi.

Drukarka obsługuje język SBPL i aplikacje AEP. Zadanie RFID musi zawierać polecenia kodowania, oprócz danych nadruku. Sam plik PDF nie zapisuje identyfikatora EPC. Powiąż EPC z rekordem produktu lub opakowania w WMS albo ERP. Przed wymianą drukarki sprawdź zgodność poleceń z obecnym systemem.

## Akcesoria i części

Głowica R37901800 pasuje do wersji 203 dpi. Wersja 305 dpi wymaga głowicy R37901900. Wałek R37901501 pasuje do obu pokazanych rozdzielczości. Dobierz części do numeru seryjnego drukarki.

Obcinak gilotynowy WWCL05100 wymaga doboru materiału i ustawienia cięcia między wkładkami. Obsługuje grubość 0,060–0,268 mm. Grube etykiety On-Metal mogą przekraczać ten zakres. Obcinak rotacyjny WWCLP5500 nie obsługuje pracy z RFID. Montaż wyposażenia zleć serwisowi.

## Gwarancja

Podstawowa gwarancja producenta wynosi 1 rok. Dodatkowy rok obejmuje kwalifikujące się produkty na warunkach regionalnych. Potwierdź zakres dla zamawianego PN. Dla głowicy i wałka obowiązuje 1 rok lub 30 km druku termotransferowego, albo 1 rok lub 15 km druku termicznego. Decyduje pierwszy osiągnięty limit.

W klasie czterocalowej porównaj także [SATO CL4-SXR RFID](/produkt/sato-cl4-sxr-rfid) oraz [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid). Do szerszych etykiet sprawdź [SATO CL6-SXR RFID](/produkt/sato-cl6-sxr-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl4nx-plus-rfid.webp'], imageDescriptions: ['SATO CL4NX Plus RFID — przemysłowa drukarka etykiet, widok z przodu i prawego boku'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: '203 / 305 dpi', szerokoscDruku: '104 mm', szerokoscEtykiet: '25–131 mm z podkładem; dobór wkładki RFID', predkoscDruku: 'Do 355 mm/s; kodowanie RFID może ograniczyć prędkość' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 lub 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 104 mm' },
    { name: 'Prędkość nadruku', value: 'Do 355 mm/s w obu rozdzielczościach; zależnie od materiału i kodowania' },
    { name: 'RFID', value: 'UHF EPC Gen2 / ISO/IEC 18000-6C; konfiguracje EU' },
    { name: 'Szerokość materiału', value: '25–131 mm z podkładem; RFID wymaga doboru wkładki' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 39,5–128 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB, USB Host, Ethernet, RS-232; Wi-Fi w WWCLP272ZWPREU' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 3,5 cala' },
    { name: 'Pamięć', value: 'CPU1: 256 MB RAM i 2 GB Flash; CPU2: 64 MB RAM i 4 MB Flash' },
    { name: 'Zegar RTC', value: 'Tak, w obu pokazanych PN' },
    { name: 'Zestaw On-Metal', value: 'W WWCLP272ZWPREU; materiał wymaga potwierdzenia zgodności' },
    { name: 'Wymiary', value: '271 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: 'Około 15,1 kg bez materiałów i opcji' },
    { name: 'Gwarancja', value: 'Podstawowa 1 rok; dodatkowy rok na warunkach regionalnych. Głowica i wałek: 1 rok / 30 km TT lub 15 km DT; pierwszy limit.' },
  ],
  variants: [
    { partNumber: 'WWCLP172ZNAREU', name: '203 dpi, UHF RFID, RTC, EU', attributes: { 'Rozdzielczość': '203 dpi', 'Wi-Fi': 'Brak', 'Zestaw On-Metal': 'Brak' }, availability: 'unavailable' },
    { partNumber: 'WWCLP272ZWPREU', name: '305 dpi, UHF RFID, RTC, Wi-Fi, On-Metal, EU', attributes: { 'Rozdzielczość': '305 dpi', 'Wi-Fi': 'Tak', 'Zestaw On-Metal': 'Tak' }, availability: 'unavailable' },
  ],
  applications: ['Identyfikacja produktów i opakowań przez UHF RFID', 'Oznaczanie wyposażenia, także zgodnymi etykietami na metal', 'Druk etykiet logistycznych z identyfikatorem EPC'],
  compatibleAccessories: [], relatedAccessories: parts.map(a => `sato-cl4nx-plus-${a.key}`),
  downloads: [
    { name: 'SATO CL4NX Plus — karta katalogowa (EN)', type: 'datasheet', url: '/downloads/sato-cl4nx-plus-karta-en.pdf', size: 'PDF' },
    { name: 'CL4NX Plus — katalog części (EN)', type: 'manual', url: '/downloads/sato-cl4nx-plus-czesci-en.pdf', size: 'PDF' },
    { name: 'CL4NX Plus — dobór wkładek UHF (EN)', type: 'manual', url: '/downloads/sato-cl4nx-plus-uhf-inlay-en.pdf', size: 'PDF' },
    { name: 'CL4NX Plus — porównanie obcinaków (EN)', type: 'datasheet', url: '/downloads/sato-cl4nx-plus-obcinaki-en.pdf', size: 'PDF' },
  ],
  createdAt: '2026-10-16',
}]
