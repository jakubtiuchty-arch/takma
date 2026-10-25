import type { Product } from './products'

const id = 'sato-ct4-lx-rfid'
const support = 'https://www.satoeurope.com/resources/ct4-lx.php'
const manual = 'https://www.manual.sato-global.com/printer/ct4-lx/main/index.html'
const accessories = [
  { key: 'wifi', hc: true, pn: 'WWCT0505N', name: 'Moduł Wi-Fi i Bluetooth SATO CT4-LX', description: 'Moduł WWCT0505N dodaje Wi-Fi 802.11a/b/g/n/ac i Bluetooth 4.1 do drukarek SATO CT4-LX i CT4-LX-HC. Pasuje także do wersji UHF RFID. Warianty WWCT03242ZWAR i WWCT04242ZWAR mają już tę łączność i nie wymagają zakupu modułu, podobnie jak CT4-LX-HC z końcówką ZWAN lub ZWAR. Montaż i konfigurację wykonuje serwis.' },
  { key: 'rtc', hc: true, pn: 'WWCT0503N', name: 'Zegar RTC SATO CT4-LX', description: 'Zestaw WWCT0503N dodaje zegar czasu rzeczywistego do SATO CT4-LX i CT4-LX-HC. Umożliwia druk daty i godziny na podstawie zegara urządzenia w odpowiednio przygotowanym szablonie. Warianty z końcówką ZNAR lub ZWAR, a w CT4-LX-HC także ZNCR, mają już RTC. Montaż wykonuje serwis.' },
  { key: 'serial', hc: true, pn: 'WWCT0506N', name: 'Interfejs RS-232C SATO CT4-LX', description: 'Zestaw WWCT0506N dodaje port szeregowy RS-232C do SATO CT4-LX, także w wersji UHF RFID, oraz do CT4-LX-HC. Służy do połączenia z urządzeniem obsługującym ten interfejs. Przewód i parametry transmisji dobiera się osobno do urządzenia nadrzędnego. Montaż wykonuje serwis.' },
  { key: 'dispenser', hc: false, pn: 'WWCT0502N', name: 'Odklejak etykiet SATO CT4-LX', description: 'Zestaw WWCT0502N oddziela etykietę od podkładu w drukarce SATO CT4-LX. Nie jest obcinakiem ani automatycznym aplikatorem. Przy etykietach RFID trzeba potwierdzić długość, sztywność i położenie wkładki, a następnie sprawdzić podawanie i kodowanie. Montaż wykonuje serwis.' },
]
export const satoCt4RfidAccessories: Product[] = accessories.map(a => ({
  id: `sato-ct4-${a.key}`, slug: `sato-ct4-lx-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Drukarka jest sprzedawana osobno. Ilustracja przedstawia rysunek katalogowy części. Do zamówienia potrzebne są model i numer seryjny drukarki.`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Rozbudowa drukarki ${a.hc ? 'CT4-LX lub CT4-LX-HC' : 'CT4-LX'}. Zgodność, cena i dostępność w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'retail'],
  images: [`/images/products/sato-ct4-${a.key}.webp`], imageDescriptions: [`${a.name} — ${a.pn}, rysunek katalogowy`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: a.hc ? 'SATO CT4-LX, także UHF RFID, oraz SATO CT4-LX-HC; dobór do wyposażenia i numeru seryjnego' : 'SATO CT4-LX, także UHF RFID; dobór do wyposażenia i numeru seryjnego' }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: a.hc ? [id, 'sato-ct4-lx-hc'] : [id],
  downloads: [{ name: 'Katalog części CT4-LX / HC4-LX (EN)', type: 'manual', url: '/downloads/sato-ct4-lx-czesci-en.pdf', size: '5,3 MB' }], createdAt: '2026-10-16',
}))

export const satoCt4RfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CT4-LX RFID', seoH1: 'SATO CT4-LX RFID',
  seoTitle: 'SATO CT4-LX RFID — drukarka RFID UHF 203/305 dpi',
  seoDescription: 'SATO CT4-LX RFID – biurkowa drukarka RFID UHF 203 lub 305 dpi. Druk 104 mm, rolka RFID do 115 mm, odczyt TID, Gigabit Ethernet, ekran dotykowy 4,3 cala.',
  shortDescription: 'Biurkowa drukarka i koder UHF RFID. Warianty 203 lub 305 dpi, nadruk do 104 mm, ekran dotykowy 4,3 cala i Ethernet. Wi-Fi, Bluetooth i RTC zależą od PN.',
  description: `SATO CT4-LX RFID to biurkowa drukarka RFID UHF o wymiarach 178 × 238 × 214 mm i masie 3,4 kg. Koduje wkładki zgodne z ISO/IEC 18000-63 i EPC Gen2 Class 1 w zakresie 868–960 MHz. Moduł RFID jest montowany fabrycznie.

## Weryfikacja zapisu, TID i tryb DIP

Po zaprogramowaniu wkładki drukarka sprawdza zapisane dane. Uszkodzony lub nieczytelny transponder oznacza nadrukiem unieważnienia. Numer TID można odczytać i wydrukować jako tekst lub kod kreskowy. Tryb DIP (Direct Inlay Printing) pozwala używać etykiet o krótkim rastrze, a PWP dopuszcza różne położenia wkładki. Obsługiwane obszary pamięci Gen2 to rozszerzony EPC, pamięć użytkownika i TID 96-bit, z hasłami Access i Kill oraz blokadą.

## Rolka RFID do 115 mm i taśma 100 m

Dla etykiet RFID rolka może mieć do 115 mm średnicy, na gilzie 40 mm, z etykietami na zewnątrz. Materiał ma 0,08–0,19 mm grubości. Taśma barwiąca ma do 100 m długości, 45–111 mm szerokości i do 40 mm średnicy rolki. Głowica 203 dpi drukuje do 203 mm/s, a 305 dpi do 152 mm/s.

## Gigabit Ethernet, NFC i 21 filmów instruktażowych

Standardowo drukarka ma USB typu B, dwa porty USB Host, Ethernet 10/100/1000 i NFC. Wi-Fi 802.11a/b/g/n/ac z Bluetooth 4.1, zegar RTC i port RS-232 są opcjami. Ekran dotykowy 4,3 cala odtwarza 21 filmów instruktażowych. Obcinacz, odklejak i obcinacz do etykiet bez podkładu są dostępne jako zestawy.

Przemysłowa [SATO CL4NX Plus RFID](/produkt/sato-cl4nx-plus-rfid) przyjmuje rolkę do 254 mm i taśmę do 600 m.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'retail', 'logistyka'],
  images: ['/images/products/sato-ct4-rfid-angle.webp'], imageDescriptions: ['SATO CT4-LX RFID — biurkowa drukarka z ekranem dotykowym, widok pod kątem z prawym bokiem'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { szerokoscEtykiet: '22–115 mm; dobór RFID zależy od wkładki', rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: '203 lub 305 dpi', szerokoscDruku: '104 mm', predkoscDruku: 'do 203 mm/s (203 dpi), do 152 mm/s (305 dpi)' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 / 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: '104 mm' },
    { name: 'Prędkość nadruku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 305 dpi; RFID zależy od materiału i danych' },
    { name: 'RFID', value: 'UHF 868–960 MHz, ISO/IEC 18000-63, EPC Gen2 Class 1; pokazane PN bez kodera HF/NFC' },
    { name: 'Rolka RFID', value: 'Średnica do 115 mm na gilzie 40 mm; etykiety na zewnątrz' },
    { name: 'Taśma barwiąca', value: 'Do 100 m, szerokość 45–111 mm, średnica rolki do 40 mm, barwnik na zewnątrz' },
    { name: 'Łączność', value: 'USB, 2 × USB Host, Gigabit Ethernet; Wi-Fi i Bluetooth zależnie od PN; RS-232C opcjonalnie' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 4,3 cala' },
    { name: 'Pamięć', value: '1 GB RAM; 4 GB eMMC' },
    { name: 'Język', value: 'SBPL; aplikacje AEP' },
    { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; odklejak sprzedawany osobno' },
    { name: 'Wymiary', value: '178 × 238 × 214 mm' },
    { name: 'Masa', value: 'Około 3,4 kg, bez materiałów i opcji' },
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
  applications: ['Druk numeru TID na etykiecie RFID', 'Kodowanie etykiet UHF o krótkim rastrze w trybie DIP'],
  faq: [
    { question: 'Czy CT4-LX RFID odczyta numer TID wkładki?', answer: 'Tak. Odczytany TID można wydrukować na etykiecie jako tekst lub kod kreskowy. Drukarka obsługuje TID 96-bit.' },
    { question: 'Jaka rolka RFID mieści się w CT4-LX RFID?', answer: 'Do 115 mm średnicy, na gilzie 40 mm, z etykietami nawiniętymi na zewnątrz. Rolka bez RFID może mieć do 128 mm.' },
    { question: 'Co robi CT4-LX RFID z uszkodzoną wkładką?', answer: 'Oznacza etykietę nadrukiem unieważnienia. Każdy zapis jest sprawdzany po zaprogramowaniu wkładki.' },
  ],
  downloads: [{ name: 'Karta katalogowa CT4-LX (EN)', type: 'datasheet', url: '/downloads/sato-ct4-lx-karta-en.pdf', size: 'PDF' }, { name: 'Instrukcja CT4-LX (EN)', type: 'manual', url: manual, size: 'Online' }, { name: 'Sterowniki i narzędzia SATO', type: 'driver', url: support, size: 'Online' }, { name: 'Dobór wkładek i ustawienia RFID', type: 'manual', url: 'https://www.sato-global.com/support/rfid-config-guide/', size: 'Online' }],
  relatedProducts: ['zebra-zd621r', 'tsc-th240r', 'tsc-th340r', 'brother-td-4650tnwbr'], sameAs: 'https://www.satoeurope.com/products/rfid-printers.php', createdAt: '2026-10-16',
}]
