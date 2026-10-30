import type { Product } from './products'
import { satoCl4SxrRfidProducts, satoCl4SxrRfidAccessories } from './sato-cl4-sxr-rfid-products'

const reference = satoCl4SxrRfidProducts[0]
export const satoIndustrialProducts: Product[] = [{
  ...reference,
  id: 'sato-cl4-sxr', slug: 'sato-cl4-sxr', name: 'SATO CL4-SXR', seoH1: 'SATO CL4-SXR',
  seoTitle: 'SATO CL4-SXR — przemysłowa drukarka etykiet 104 mm | TAKMA',
  seoDescription: 'SATO CL4-SXR: druk do 457,2 mm/s, 203, 305 lub 609 dpi, ekran 4,3 cala i taśma 600 m. Przemysłowa drukarka etykiet. Dobór konfiguracji w TAKMA.',
  shortDescription: 'Przemysłowa drukarka etykiet do produkcji i logistyki. Nadruk do 104 mm, prędkość do 457,2 mm/s, ekran dotykowy 4,3 cala i taśma barwiąca do 600 m.',
  description: 'SATO CL4-SXR to przemysłowa drukarka termiczna i termotransferowa do etykiet produktów, opakowań i przesyłek. Drukuje na szerokości do 104 mm. Aluminiowa konstrukcja, ekran dotykowy i dostęp do mechanizmu ułatwiają codzienną obsługę. Maksymalna prędkość zależy od rozdzielczości: 457,2 mm/s przy 203 dpi, 406,4 mm/s przy 305 dpi i 152,4 mm/s przy 609 dpi. Tryb wysokiej precyzji zapewnia dokładność pozycjonowania do ±0,3 mm w warunkach określonych przez producenta. SATO AEP pozwala uruchamiać aplikacje bezpośrednio na drukarce. SOS wspiera zdalny nadzór oraz planowanie konserwacji.',
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  quoteOnly: true, availability: 'on-order', isNew: true,
  images: ['/images/products/sato-cl4-sxr-rfid.webp', '/images/sato-cl4-sxr/open.webp', '/images/sato-cl4-sxr/closed.webp'],
  imageDescriptions: ['SATO CL4-SXR — widok z przodu pod kątem z wydrukowaną etykietą', 'SATO CL4-SXR — otwarty mechanizm i tor materiału', 'SATO CL4-SXR — boczne okno kontroli rolki'],
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni', rozdzielczosc: '203 / 305 / 609 dpi', szerokoscDruku: '104 mm', szerokoscEtykiet: '22–128 mm (bez szerokości podkładu)', predkoscDruku: 'Do 457,2 mm/s (203 dpi)' },
  specifications: reference.specifications.filter(s => !['RFID', 'Zegar RTC', 'Łączność', 'Prędkość nadruku', 'Rolka materiału'].includes(s.name)).concat([
    { name: 'Prędkość druku', value: 'Do 457,2 mm/s przy 203 dpi; 406,4 mm/s przy 305 dpi; 152,4 mm/s przy 609 dpi' },
    { name: 'Dokładność pozycjonowania', value: 'Do ±0,3 mm w trybie wysokiej precyzji; zależy od materiału i warunków pracy' },
    { name: 'Materiał', value: 'Etykiety w rolce lub składance; szerokość 22–128 mm bez podkładu; rolka do 220 mm; gilza 76 lub 101 mm' },
    { name: 'Interfejsy standardowe', value: 'USB typu B, 2 × USB Host typu A, Gigabit Ethernet, RS-232C, EXT' },
    { name: 'Łączność opcjonalna', value: 'Wi-Fi 6E, Wi-Fi Direct i Bluetooth 5.2; wymagają odpowiedniego wyposażenia' },
    { name: 'RFID', value: 'Opcjonalne moduły UHF lub HF; nie są wyposażeniem standardowym' },
  ]),
  variants: [
    { partNumber: 'WWCLX1042', name: '203 dpi, RTC, przewód zasilający EU', availability: 'on-order', attributes: { 'Rozdzielczość': '203 dpi', 'Łączność': 'USB, Ethernet, RS-232C', 'Obsługa etykiet': 'Ręczne odrywanie' } },
    { partNumber: 'WWCLX2042', name: '305 dpi, RTC, przewód zasilający EU', availability: 'on-order', attributes: { 'Rozdzielczość': '305 dpi', 'Łączność': 'USB, Ethernet, RS-232C', 'Obsługa etykiet': 'Ręczne odrywanie' } },
    { partNumber: 'WWCLX3042', name: '609 dpi, RTC, przewód zasilający EU', availability: 'on-order', attributes: { 'Rozdzielczość': '609 dpi', 'Łączność': 'USB, Ethernet, RS-232C', 'Obsługa etykiet': 'Ręczne odrywanie' } },
  ],
  relatedAccessories: satoCl4SxrRfidAccessories.map(a => a.id),
  applications: ['Etykiety produktów i komponentów', 'Etykiety opakowań i przesyłek', 'Oznaczanie w produkcji i logistyce'],
  faq: [
    { question: 'Jaka jest maksymalna prędkość druku CL4-SXR?', answer: 'Przy 203 dpi wynosi 457,2 mm/s, przy 305 dpi 406,4 mm/s, a przy 609 dpi 152,4 mm/s. Wynik zależy od materiału, danych i ustawień.' },
    { question: 'Czy CL4-SXR drukuje bez komputera?', answer: 'Platforma SATO AEP pozwala uruchamiać aplikacje bezpośrednio na drukarce. Wymaga przygotowania i konfiguracji aplikacji dla danego procesu.' },
    { question: 'Czy Wi-Fi i RFID są standardowym wyposażeniem?', answer: 'Nie. Wi-Fi, Bluetooth oraz moduły UHF lub HF RFID to opcje. Ich dobór zależy od konfiguracji urządzenia.' },
    { question: 'Co oznacza dokładność ±0,3 mm?', answer: 'To dokładność pozycjonowania nadruku w trybie wysokiej precyzji, uzyskana przez producenta na wybranych etykietach w określonych warunkach. Rzeczywisty wynik zależy od materiału i warunków pracy.' },
  ],
  downloads: [{ name: 'Broszura SATO CL4-SXR / CL6-SXR (PL)', type: 'datasheet', url: '/datasheets/sato-cl-sxr-brochure-pl.pdf', size: '7,6 MB' }, ...reference.downloads.filter(d => d.type !== 'datasheet')],
  relatedProducts: ['sato-cl4-sxr-rfid', 'sato-cl4nx-plus-rfid', 'zebra-zt411'],
  sameAs: 'https://www.satoeurope.com/pl/products/industrial-printers.php#cl4-sxr', createdAt: '2026-10-30',
}]
