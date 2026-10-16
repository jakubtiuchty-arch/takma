import type { Product } from './products'

const id = 'sato-ct4-lx-rfid'
const support = 'https://www.satoeurope.com/resources/ct4-lx.php'
const manual = 'https://www.manual.sato-global.com/printer/ct4-lx/main/index.html'
const accessories = [
  { key: 'wifi', pn: 'WWCT0505N', name: 'Moduł Wi-Fi i Bluetooth SATO CT4-LX', description: 'Moduł WWCT0505N dodaje Wi-Fi 802.11a/b/g/n/ac i Bluetooth 4.1 do drukarki SATO CT4-LX. Pasuje także do wersji UHF RFID. Warianty WWCT03242ZWAR i WWCT04242ZWAR mają już tę łączność i nie wymagają zakupu modułu. Montaż i konfigurację zleć serwisowi.' },
  { key: 'rtc', pn: 'WWCT0503N', name: 'Zegar RTC SATO CT4-LX', description: 'Zestaw WWCT0503N dodaje zegar czasu rzeczywistego do SATO CT4-LX. Umożliwia druk daty i godziny na podstawie zegara urządzenia w odpowiednio przygotowanym szablonie. Warianty z końcówką ZNAR lub ZWAR mają już RTC. Montaż zleć serwisowi.' },
  { key: 'serial', pn: 'WWCT0506N', name: 'Interfejs RS-232C SATO CT4-LX', description: 'Zestaw WWCT0506N dodaje port szeregowy RS-232C do SATO CT4-LX, także w wersji UHF RFID. Służy do połączenia z urządzeniem obsługującym ten interfejs. Dobierz osobno przewód i parametry transmisji do urządzenia nadrzędnego. Montaż zleć serwisowi.' },
  { key: 'dispenser', pn: 'WWCT0502N', name: 'Odklejak etykiet SATO CT4-LX', description: 'Zestaw WWCT0502N oddziela etykietę od podkładu w drukarce SATO CT4-LX. Nie jest obcinakiem ani automatycznym aplikatorem. Przy etykietach RFID potwierdź długość, sztywność i położenie wkładki, a następnie sprawdź podawanie i kodowanie. Montaż zleć serwisowi.' },
]
export const satoCt4RfidAccessories: Product[] = accessories.map(a => ({
  id: `sato-ct4-${a.key}`, slug: `sato-ct4-lx-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Drukarka jest sprzedawana osobno. Ilustracja przedstawia rysunek katalogowy części. Przed zakupem podaj model i numer seryjny drukarki.`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Rozbudowa drukarki CT4-LX. Sprawdź zgodność, cenę i dostępność w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'retail'],
  images: [`/images/products/sato-ct4-${a.key}.webp`], imageDescriptions: [`${a.name} — ${a.pn}, rysunek katalogowy`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: 'SATO CT4-LX, także UHF RFID; dobór do wyposażenia i numeru seryjnego' }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CT4-LX / HC4-LX (EN)', type: 'manual', url: '/downloads/sato-ct4-lx-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCt4RfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CT4-LX RFID', seoH1: 'SATO CT4-LX RFID',
  seoTitle: 'SATO CT4-LX RFID — drukarka UHF 203 i 305 dpi | TAKMA',
  seoDescription: 'SATO CT4-LX UHF RFID: druk i kodowanie etykiet, 203 lub 305 dpi, ekran 4,3 cala. Wersje EU z Ethernetem lub Wi-Fi. Ceny, stany i akcesoria.',
  shortDescription: 'Biurkowa drukarka i koder UHF RFID. Warianty 203 lub 305 dpi, nadruk do 104 mm, ekran dotykowy 4,3 cala i Ethernet. Wi-Fi, Bluetooth i RTC zależą od PN.',
  description: `SATO CT4-LX RFID drukuje etykiety i zapisuje dane w pasywnych wkładkach UHF. To biurkowa drukarka do stanowiska magazynowego, sklepu i znakowania wyposażenia.

## Wybierz rozdzielczość i wyposażenie

CT408LX ma rozdzielczość 203 dpi i prędkość nadruku do 203 mm/s. CT412LX ma 305 dpi i prędkość do 152 mm/s. Obie wersje drukują na szerokości do 104 mm. Wyższa rozdzielczość ułatwia nadruk drobnych znaków; nie zwiększa zasięgu RFID.

Pokazane konfiguracje mają druk termotransferowy i termiczny bezpośredni, UHF RFID oraz zasilanie EU/UK. USB i Ethernet są wspólne. Warianty ZNAR dodają zegar RTC. Warianty ZWAR mają RTC, Wi-Fi i Bluetooth. Wybierz konkretny PN w tabeli.

W zestawie są zasilacz, przewód zasilający dla danego regionu i skrócona instrukcja. Do wersji termotransferowej dołączono adaptery i rdzenie do taśmy. Etykiety RFID, taśma barwiąca i przewód danych wymagają osobnego doboru.

## Kodowanie UHF RFID

Pokazane PN obsługują UHF zgodne z ISO/IEC 18000-63 i EPC Gen2. Nie są wersjami HF ani NFC do kodowania etykiet. Wbudowana funkcja NFC do komunikacji z urządzeniem nie zastępuje kodera etykiet HF.

SATO RF Analyze pomaga dobrać ustawienia radiowe do materiału. Po zmianie etykiet wykonaj kalibrację podawania i RFID. Sprawdź zapis oraz odczyt na docelowym produkcie. Wkładka, jej położenie i powierzchnia znakowanego przedmiotu wpływają na wynik.

Drukarka weryfikuje zapis. Może oznaczać uszkodzone lub nieczytelne transpondery. Obsługuje także odczyt TID, który można wykorzystać w szablonie. Dobierz zakres pamięci i polecenia do używanego układu.

## Rolki i taśmy barwiące

Dla etykiet RFID maksymalna średnica rolki wynosi 115 mm. Materiał RFID powinien być nawinięty etykietą na zewnątrz. Zakres mechaniczny materiału nie potwierdza zgodności konkretnej wkładki. Przed zakupem materiału sprawdź jego gilzę, podkład i położenie anteny.

Do druku termotransferowego dobierz taśmę do 100 m na gilzie 12,7 mm, o szerokości 45–111 mm, barwnikiem na zewnątrz. Druk termiczny bezpośredni wymaga etykiety termoczułej i nie używa taśmy. Do zwykłych etykiet rolka może mieć do 128 mm średnicy; ten limit nie dotyczy rolek RFID.

## Ekran i integracja z systemem

Kolorowy ekran dotykowy 4,3 cala pokazuje ustawienia i materiały instruktażowe. Drukarka ma USB typu B, dwa porty USB Host i Ethernet 10/100/1000. Wi-Fi 802.11a/b/g/n/ac i Bluetooth 4.1 zależą od konfiguracji. Port RS-232C wymaga osobnego modułu.

Język SBPL i środowisko AEP pozwalają przygotować zadanie druku i kodowania. Powiąż identyfikator EPC z rekordem w WMS lub ERP. Sam wydruk PDF nie zapisuje danych w układzie etykiety. Do inwentaryzacji regałów potrzebujesz osobnego czytnika UHF.

## Akcesoria i rozbudowa

Pokazane warianty mają ręczne odrywanie etykiet. Odklejak WWCT0502N jest osobnym akcesorium. Dla RFID sprawdź jego działanie z wybranym materiałem. Moduł WWCT0505N dodaje Wi-Fi i Bluetooth, WWCT0503N dodaje RTC, a WWCT0506N dodaje RS-232C. Nie kupuj ponownie funkcji, którą ma już wybrany wariant.

## Gwarancja i serwis

Podstawowa gwarancja producenta wynosi 1 rok. Dodatkowy rok ochrony dotyczy kwalifikujących się produktów i wymaga spełnienia warunków regionalnych. Ustal zakres ochrony dla zamawianego PN. Głowica i wałek mają odrębne limity: 1 rok lub 30 km przy druku termotransferowym, albo 1 rok lub 15 km przy druku termicznym. Obowiązuje pierwszy osiągnięty limit. Zachowaj dowód zakupu i używaj materiałów zatwierdzonych przez SATO.

Porównaj także [Zebra ZD621R](/produkt/zebra-zd621r) oraz [TSC TH240R](/produkt/tsc-th240r).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'retail', 'logistyka'],
  images: ['/images/products/sato-ct4-rfid-main.webp'], imageDescriptions: ['SATO CT4-LX RFID — biurkowa drukarka z ekranem dotykowym, widok z przodu'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { szerokoscEtykiet: '22–115 mm; dobór RFID zależy od wkładki', rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: '203 lub 305 dpi', szerokoscDruku: '104 mm', predkoscDruku: 'do 203 mm/s (203 dpi), do 152 mm/s (305 dpi)' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 / 305 dpi, zależnie od PN' }, { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: '104 mm' }, { name: 'Prędkość nadruku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 305 dpi; RFID zależy od materiału i danych' },
    { name: 'RFID', value: 'UHF, ISO/IEC 18000-63, EPC Gen2; pokazane PN bez kodera HF/NFC' },
    { name: 'Rolka RFID', value: 'Średnica do 115 mm; etykiety na zewnątrz' }, { name: 'Taśma barwiąca', value: 'Do 100 m, szerokość 45–111 mm, gilza 12,7 mm, barwnik na zewnątrz' },
    { name: 'Łączność', value: 'USB, 2 × USB Host, Gigabit Ethernet; Wi-Fi i Bluetooth zależnie od PN; RS-232C opcjonalnie' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 4,3 cala' }, { name: 'Pamięć', value: '1 GB RAM; 4 GB eMMC' },
    { name: 'Język', value: 'SBPL; aplikacje AEP' }, { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; odklejak sprzedawany osobno' },
    { name: 'Wymiary', value: '178 × 238 × 214 mm' }, { name: 'Masa', value: 'Około 3,4 kg, bez materiałów i opcji' },
    { name: 'Gwarancja', value: 'Podstawowa 1 rok; dodatkowy rok dla kwalifikujących się produktów na warunkach regionalnych. Głowica i wałek: 1 rok / 30 km TT lub 15 km DT; pierwszy limit.' },
  ],
  variants: [
    { pn: 'WWCT03242', dpi: '203 dpi', radio: false, rtc: false },
    { pn: 'WWCT03242ZNAR', dpi: '203 dpi', radio: false, rtc: true },
    { pn: 'WWCT03242ZWAR', dpi: '203 dpi', radio: true, rtc: true },
    { pn: 'WWCT04242', dpi: '305 dpi', radio: false, rtc: false },
    { pn: 'WWCT04242ZNAR', dpi: '305 dpi', radio: false, rtc: true },
    { pn: 'WWCT04242ZWAR', dpi: '305 dpi', radio: true, rtc: true },
  ].map(v => ({ partNumber: v.pn, name: `${v.dpi}, UHF EU${v.radio ? ', Wi-Fi + BT' : ''}${v.rtc ? ', RTC' : ''}`, attributes: { 'Rozdzielczość': v.dpi, 'Łączność': v.radio ? 'USB, Ethernet, Wi-Fi, Bluetooth' : 'USB, Ethernet', 'Zegar RTC': v.rtc ? 'Tak' : 'Nie' }, availability: 'unavailable' as const })),
  compatibleAccessories: [], relatedAccessories: satoCt4RfidAccessories.map(a => a.id),
  applications: ['Druk i kodowanie etykiet UHF na towary oraz opakowania', 'Znakowanie produktów przy stanowisku sklepowym', 'Przygotowanie oznaczeń wyposażenia'],
  faq: [
    { question: 'Czy wszystkie CT4-LX mają RFID?', answer: 'Nie. Ta karta obejmuje konkretne PN z fabrycznym UHF RFID. Wersje zwykłe i HF mają inne numery katalogowe.' },
    { question: 'Czy 305 dpi to pomyłka?', answer: 'Nie. CT412LX ma 12 punktów/mm, czyli 305 dpi. CT408LX ma 8 punktów/mm, czyli 203 dpi.' },
    { question: 'Czy trzeba dokupić Wi-Fi albo zegar?', answer: 'Zależy od PN. Warianty ZNAR mają RTC, a ZWAR mają RTC oraz Wi-Fi i Bluetooth. Podstawowe WWCT03242 i WWCT04242 nie mają tych opcji.' },
    { question: 'Jaką rolkę RFID można zastosować?', answer: 'Średnica rolki RFID wynosi maksymalnie 115 mm, a etykiety muszą być nawinięte na zewnątrz. Dobierz gilzę, wkładkę i podkład do urządzenia, a następnie wykonaj test kodowania.' },
    { question: 'Czy to czytnik do inwentaryzacji magazynu?', answer: 'Nie. CT4-LX drukuje i koduje etykiety przy stanowisku. Do odczytu produktów na regałach potrzebujesz osobnego czytnika UHF.' },
  ],
  downloads: [{ name: 'Karta katalogowa CT4-LX (EN)', type: 'datasheet', url: '/downloads/sato-ct4-lx-karta-en.pdf', size: 'PDF' }, { name: 'Instrukcja CT4-LX (EN)', type: 'manual', url: manual, size: 'Online' }, { name: 'Sterowniki i narzędzia SATO', type: 'driver', url: support, size: 'Online' }, { name: 'Dobór wkładek i ustawienia RFID', type: 'manual', url: 'https://www.sato-global.com/support/rfid-config-guide/', size: 'Online' }],
  relatedProducts: ['zebra-zd621r', 'tsc-th240r', 'tsc-th340r', 'brother-td-4650tnwbr'], sameAs: 'https://www.satoeurope.com/products/rfid-printers.php', createdAt: '2026-10-16',
}]
