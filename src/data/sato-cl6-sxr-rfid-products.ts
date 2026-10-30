import type { Product } from './products'

const id = 'sato-cl6-sxr-rfid'
const parts = [
  { key: 'head-203', pn: 'R49015101', price: 2610.73, name: 'Głowica 203 dpi SATO CL6-SXR', image: 'head', match: 'Wersja 203 dpi', description: 'Głowica R49015101 do drukarki SATO CL6-SXR 203 dpi, także z UHF RFID. Nie pasuje do wersji 305 dpi i nie służy do zmiany rozdzielczości urządzenia.' },
  { key: 'head-305', pn: 'R49015201', price: 3676.32, name: 'Głowica 305 dpi SATO CL6-SXR', image: 'head', match: 'Wersja 305 dpi', description: 'Głowica R49015201 do drukarki SATO CL6-SXR 305 dpi, także z UHF RFID. Nie pasuje do wersji 203 dpi i nie służy do zmiany rozdzielczości urządzenia.' },
  { key: 'platen', pn: 'R55373100', price: 330.36, name: 'Wałek dociskowy SATO CL6-SXR', image: 'platen', match: '203 i 305 dpi', description: 'Wałek dociskowy R55373100 do SATO CL6-SXR, także z UHF RFID. Pasuje do wersji 203 i 305 dpi sprzedawanych w Europie.' },
  { key: 'cutter', pn: 'WWCLXD100', price: 3524.98, name: 'Obcinak SATO CL6-SXR', image: 'cutter', match: 'CL6-SXR; dobór do materiału i wyposażenia', description: 'Zestaw obcinaka gilotynowego WWCLXD100 do SATO CL6-SXR. Przed zastosowaniem z RFID sprawdź długość etykiety i położenie wkładki. Obcinak musi ciąć między wkładkami. Warianty z kodem A0 mają fabryczny obcinak i nie wymagają jego ponownego zakupu.' },
]
export const satoCl6SxrRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl6-sxr-${a.key}`, slug: `sato-cl6-sxr-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Przed zakupem podaj numer seryjny drukarki. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno. Ilustracja przedstawia poglądowy rysunek części.`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL6-SXR RFID, aktualna cena i dostępność w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl6-sxr-${a.image}-catalog.webp`], imageDescriptions: [`${a.name} — ${a.pn}, rysunek poglądowy`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL6-SXR; ${a.match}` }],
  priceFrom: a.price, applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CL6-SXR (EN)', type: 'manual', url: '/downloads/sato-cl6-sxr-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl6SxrRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL6-SXR RFID', seoH1: 'SATO CL6-SXR RFID',
  seoTitle: 'SATO CL6-SXR RFID — drukarka RFID UHF 203/305 dpi',
  seoDescription: 'SATO CL6-SXR RFID – 6-calowa drukarka RFID UHF 203 lub 305 dpi. Nadruk do 167,5 mm z prędkością do 355,6 mm/s, taśma 600 m, Gigabit Ethernet.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do szerokich etykiet. Wersje 203 i 305 dpi, nadruk do 167,5 mm w trybie rozszerzonym, taśma do 600 m. Wyposażenie zależy od PN.',
  description: `SATO CL6-SXR RFID to 6-calowa drukarka RFID UHF do szerokich etykiet na opakowania zbiorcze i palety. Głowica 203 lub 305 dpi drukuje z prędkością do 355,6 mm/s, czyli 14 cali/s. Zestaw UHF RFID w tej drukarce koduje wkładki w etykietach.

## Szerokość nadruku 152, 165,3 lub 167,5 mm

W trybie standardowym nadruk ma 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. Tryb rozszerzony (Extension) zwiększa szerokość nadruku do 167,5 mm w obu wersjach. Maksymalna długość wydruku wynosi 2500 mm przy 203 dpi i 1500 mm przy 305 dpi. Etykieta bez podkładu może mieć 47–177 mm szerokości.

## Taśma 59–177 mm i rolka 220 mm

Taśma ma do 600 m długości i 59–177 mm szerokości, na gilzie 25,4 mm. Rolka materiału ma do 220 mm średnicy, na gilzie 76 lub 101 mm. Grubość materiału wynosi 60–268 μm. Z odklejakiem etykieta może mieć 47–177 mm długości, a temperatura pracy wynosi 5–35°C.

## Gigabit Ethernet i moduł Wi-Fi bez certyfikatu

Każda wersja ma USB, Ethernet 10/100/1000, RS-232C i port EXT. Warianty z modułem radiowym mają Wi-Fi 802.11a/b/g/n/ac/ax i Bluetooth 5.2. Certyfikat Wi-Fi ma tylko model CL4-SXR. Drukarka waży 19,4 kg bez materiałów i opcji.

Węższa [SATO CL4-SXR RFID](/produkt/sato-cl4-sxr-rfid) drukuje do 104 mm, ale z prędkością do 457 mm/s.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl6-sxr-rfid-final.webp'], imageDescriptions: ['SATO CL6-SXR RFID — przemysłowa drukarka etykiet, widok pod kątem z prawym bokiem'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID',
    rozdzielczosc: '203 / 305 dpi',
    szerokoscDruku: 'Do 167,5 mm w trybie rozszerzonym; standardowo 152 / 165,3 mm',
    szerokoscEtykiet: '47–177 mm bez podkładu; RFID wymaga doboru wkładki',
    predkoscDruku: 'Do 355,6 mm/s (14 cali/s)',
  },
  specifications: [
    { name: 'Rozdzielczość', value: '203 / 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Standardowo 152 mm (203 dpi) / 165,3 mm (305 dpi); w trybie rozszerzonym do 167,5 mm' },
    { name: 'Prędkość nadruku', value: 'Do 355,6 mm/s (14 cali/s) w obu rozdzielczościach' },
    { name: 'RFID', value: 'Koder UHF RFID' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm; gilza 76 lub 101 mm; materiał RFID wymaga testu' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 59–177 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB, 2 × USB Host, Gigabit Ethernet, RS-232, EXT; Wi-Fi i Bluetooth zależnie od PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 4,3 cala' },
    { name: 'Pamięć', value: '2 GB RAM; 8 GB Flash' },
    { name: 'Język', value: 'SBPL; emulacje SZPL, SDPL, SIPL, STCL, SEPL, SMGL, SPGL, SFPL (wykrywane automatycznie); aplikacje AEP' },
    { name: 'Zegar RTC', value: 'Tak, we wszystkich pokazanych PN' },
    { name: 'Wymiary', value: '338 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '19,4 kg bez materiałów i opcji' },
    { name: 'Gwarancja', value: '2 lata ograniczonej gwarancji SATO; zależnie od regionu, SKU i warunków gwarancji' },
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
  applications: ['Kodowanie szerokich etykiet UHF do 167,5 mm', 'Etykiety RFID na opakowania zbiorcze i palety'],
  faq: [
    { question: 'Jaka jest szerokość nadruku SATO CL6-SXR RFID?', answer: 'Standardowo 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. W trybie rozszerzonym obie wersje drukują do 167,5 mm.' },
    { question: 'Czy moduł Wi-Fi w CL6-SXR RFID ma certyfikat Wi-Fi?', answer: 'Nie. Certyfikat Wi-Fi ma tylko CL4-SXR. Moduł w CL6-SXR obsługuje 802.11a/b/g/n/ac/ax i Bluetooth 5.2.' },
    { question: 'Jak długą etykietę obsługuje odklejak w CL6-SXR RFID?', answer: 'Etykietę bez podkładu o długości 47–177 mm. Przy odklejaniu drukarka pracuje w temperaturze 5–35°C.' },
  ],
  downloads: [
    { name: 'Karta katalogowa CL4-SXR / CL6-SXR (EN)', type: 'datasheet', url: '/downloads/sato-cl4-sxr-karta-en.pdf', size: 'PDF' },
    { name: 'Instrukcja CL-SXR (EN)', type: 'manual', url: 'https://www.manual.sato-global.com/printer/cl-sxr/en/main/index.html', size: 'Online' },
    { name: 'Sterowniki i narzędzia CL6-SXR', type: 'driver', url: 'https://www.satoamerica.com/support_downloads/printers/industrial/cl6-sxr/', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt421-rfid', 'zebra-zt620-rfid', 'sato-cl4-sxr-rfid'],
  sameAs: 'https://www.satoamerica.com/products/printers/industrial/cl6-sxr/', createdAt: '2026-10-16',
}]
