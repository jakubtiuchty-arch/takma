import type { Product } from './products'

// ZD611R: Desktop Printers Accessories Guide, str. 9, oraz model 1025997 w Solutions Pathway.
// Zdjęcia przedstawiają konkretne części; ceny i stany są pobierane po PN.
const parts = [
  {
    suffix: 'cutter', slug: 'zebra-obcinacz-p1117258-231', pn: 'P1117258-231',
    name: 'Obcinacz Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-231.webp',
    description: 'Obcinacz Zebra P1117258-231 odcina materiał po wydrukowaniu. Pasuje do ZD611R, ZD611t i ZD411t. Przy etykietach RFID ustaw cięcie między wkładkami. Nie przecinaj anteny ani układu RFID. Przed montażem sprawdź zgodność materiału i ustawienia drukarki.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t',
  },
  {
    suffix: 'peeler', slug: 'zebra-odklejak-p1117258-230', pn: 'P1117258-230',
    name: 'Odklejak Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-230.webp',
    description: 'Odklejak Zebra P1117258-230 oddziela etykietę od podkładu i podaje ją do pobrania. Pasuje do ZD611R, ZD611t i ZD411t. Wymaga etykiet na podkładzie oraz ustawienia trybu odklejania w drukarce. Nie jest nawijakiem pełnej rolki.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t',
  },
  {
    suffix: 'head-203', slug: 'zebra-glowica-203dpi-p1117258-232', pn: 'P1117258-232',
    name: 'Głowica 203 dpi Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-232-framed.webp',
    description: 'Głowica Zebra P1117258-232 zastępuje zużytą głowicę w drukarkach ZD611R, ZD611t i ZD411t o rozdzielczości 203 dpi. Nie pasuje do wersji 300 dpi ani do termicznych ZD611d i ZD411d. Wymiana samej głowicy nie służy do zmiany rozdzielczości drukarki.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t — tylko 203 dpi',
  },
  {
    suffix: 'head-300', slug: 'zebra-glowica-300dpi-p1117258-233', pn: 'P1117258-233',
    name: 'Głowica 300 dpi Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-233-framed.webp',
    description: 'Głowica Zebra P1117258-233 zastępuje zużytą głowicę w drukarkach ZD611R, ZD611t i ZD411t o rozdzielczości 300 dpi. Nie pasuje do wersji 203 dpi ani do termicznych ZD611d i ZD411d. Wymiana samej głowicy nie służy do zmiany rozdzielczości drukarki.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t — tylko 300 dpi',
  },
  {
    suffix: 'platen-203', slug: 'zebra-walek-203dpi-p1117258-215', pn: 'P1117258-215',
    name: 'Wałek dociskowy 203 dpi Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-215-framed.webp',
    description: 'Wałek dociskowy Zebra P1117258-215 prowadzi materiał pod głowicą drukarki. Pasuje do ZD611R, ZD611t i ZD411t w rozdzielczości 203 dpi. Do wersji 300 dpi potrzebujesz wałka P1117258-216. Przed wymianą wyłącz drukarkę i odłącz zasilanie.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t — tylko 203 dpi',
  },
  {
    suffix: 'platen-300', slug: 'zebra-walek-300dpi-p1117258-216', pn: 'P1117258-216',
    name: 'Wałek dociskowy 300 dpi Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-216-framed.webp',
    description: 'Wałek dociskowy Zebra P1117258-216 prowadzi materiał pod głowicą drukarki. Pasuje do ZD611R, ZD611t i ZD411t w rozdzielczości 300 dpi. Do wersji 203 dpi potrzebujesz wałka P1117258-215. Przed wymianą wyłącz drukarkę i odłącz zasilanie.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t — tylko 300 dpi',
  },
  {
    suffix: 'mount', slug: 'zebra-adapter-montazowy-p1117258-234', pn: 'P1117258-234',
    name: 'Adapter montażowy Zebra ZD611R / ZD611t / ZD411t', image: 'P1117258-234-framed.webp',
    description: 'Adapter Zebra P1117258-234 umożliwia montaż drukarki ZD611R, ZD611t lub ZD411t w miejscu TLP2824 Plus. Wykorzystuje rozstaw otworów montażowych poprzedniej drukarki. Przed montażem sprawdź miejsce na otwarcie pokrywy, wymianę materiałów i podłączenie przewodów.',
    compatibility: 'Zebra ZD611R, ZD611t, ZD411t; rozstaw otworów TLP2824 Plus',
  },
]

export const zd611rAdditionalAccessories: Product[] = parts.map(part => ({
  id: `zebra-zd611r-${part.suffix}`, slug: part.slug, name: `${part.name} — ${part.pn}`,
  shortDescription: part.description.split('. ')[0] + '.', description: part.description,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  images: [`/images/products/${part.image}`], imageDescriptions: [`${part.name} — ${part.pn}`],
  tags: ['magazyn', 'produkcja'], availability: 'unavailable', isNew: false, isBestseller: false,
  specifications: [{ name: 'Part Number', value: part.pn }, { name: 'Kompatybilność', value: part.compatibility }],
  applications: [], compatibleAccessories: [], relatedAccessories: ['zebra-zd611r'],
  downloads: [{ name: 'Katalog akcesoriów do drukarek biurkowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/desktop-printer-guide-accessory-en-us.pdf#page=9', size: 'PDF' }],
  createdAt: '2026-10-15',
}))

export const zd611rAccessoryIds = [
  'zebra-zd611r-cutter', 'zebra-zd611r-peeler', 'zebra-module-wifi-zd421', 'zebra-module-rs232-zd421',
  'zebra-zd611r-head-203', 'zebra-zd611r-head-300', 'zebra-zd611r-platen-203', 'zebra-zd611r-platen-300',
  'zebra-zd611r-mount', 'zebra-keyboard-zkdu', 'zebra-usb-cable-zd621r',
  'zebra-cleaning-pens-zd621r', 'zebra-cleaning-swabs-zd621r',
]

export const zd611rExistingAccessorySlugs = ['zebra-modul-wifi-zd411-zd421-zd621', 'zebra-interfejs-rs232-zd411-zd421']
