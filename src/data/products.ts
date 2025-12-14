// TAKMA - Katalog produktów Zebra Technologies
// Dane zebrane z oficjalnych źródeł Zebra

export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  categoryId: string
  manufacturerId: string
  priceFrom?: number
  images: string[]
  tags: ProductTag[]
  availability: 'available' | 'on-order' | 'unavailable'
  isNew: boolean
  isBestseller: boolean
  specifications: ProductSpecification[]
  applications: string[]
  compatibleAccessories: string[]
  downloads: ProductDownload[]
  createdAt: string
}

export interface ProductSpecification {
  name: string
  value: string
}

export interface ProductDownload {
  name: string
  type: 'pdf' | 'datasheet' | 'manual' | 'software'
  url: string
  size: string
}

export type ProductTag = 'magazyn' | 'retail' | 'produkcja' | 'logistyka' | 'healthcare' | 'outdoor'

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  seoTitle: string
  seoDescription: string
  longDescription: string
  icon: string
  productCount: number
}

export interface Manufacturer {
  id: string
  slug: string
  name: string
  logo: string
  seoTitle?: string
  seoDescription?: string
}

// Kategorie produktów AutoID
export const categories: Category[] = [
  {
    id: 'drukarki-etykiet',
    slug: 'drukarki-etykiet',
    name: 'Drukarki etykiet',
    description: 'Drukarki termiczne i termotransferowe do etykiet kodów kreskowych',
    seoTitle: 'Drukarki etykiet Zebra | Termiczne i termotransferowe',
    seoDescription: 'Profesjonalne drukarki etykiet Zebra - biurkowe, przemysłowe i mobilne. Drukarki kodów kreskowych do magazynu, logistyki i produkcji. Autoryzowany dystrybutor.',
    longDescription: 'Oferujemy pełną gamę drukarek etykiet Zebra Technologies: od kompaktowych drukarek biurkowych ZD421/ZD621, przez półprzemysłowe ZT411/ZT421, po wydajne drukarki przemysłowe ZT610/ZT620. Drukarki mobilne ZQ320/ZQ520/ZQ630 do pracy w terenie.',
    icon: 'printer',
    productCount: 15,
  },
  {
    id: 'skanery-kodow',
    slug: 'skanery-kodow',
    name: 'Skanery kodów',
    description: 'Skanery ręczne, prezentacyjne i przemysłowe do kodów 1D i 2D',
    seoTitle: 'Skanery kodów kreskowych Zebra | Ręczne i bezprzewodowe',
    seoDescription: 'Skanery kodów kreskowych Zebra 1D i 2D. Skanery ręczne DS2208, bezprzewodowe LI4278, ultra-wytrzymałe DS3608. Skanowanie kodów QR z ekranów.',
    longDescription: 'Kompletna oferta skanerów Zebra: od uniwersalnych DS2208 do handlu, przez bezprzewodowe DS2278 i LI4278, po ultra-wytrzymałe DS3608 do przemysłu. Wszystkie modele obsługują kody 1D, 2D oraz kody z ekranów urządzeń mobilnych.',
    icon: 'scan',
    productCount: 8,
  },
  {
    id: 'terminale-mobilne',
    slug: 'terminale-mobilne',
    name: 'Terminale mobilne',
    description: 'Komputery mobilne i kolektory danych do pracy w terenie',
    seoTitle: 'Terminale mobilne Zebra | Kolektory danych Android',
    seoDescription: 'Terminale mobilne Zebra z Androidem - TC21, TC26, TC52, TC57, MC3300. Wytrzymałe komputery mobilne IP67 do magazynu i logistyki.',
    longDescription: 'Profesjonalne terminale mobilne Zebra klasy enterprise. Seria TC21/TC26 dla małych i średnich firm, TC52/TC57 dla wymagających środowisk, MC3300 z klawiaturą do intensywnej pracy. System Android, wbudowany skaner, odporność IP67.',
    icon: 'smartphone',
    productCount: 8,
  },
  {
    id: 'rfid',
    slug: 'rfid',
    name: 'RFID',
    description: 'Czytniki, anteny i tagi RFID do automatycznej identyfikacji',
    seoTitle: 'Systemy RFID Zebra | Czytniki stacjonarne i mobilne',
    seoDescription: 'Systemy RFID UHF Zebra - czytniki stacjonarne FX7500/FX9600, mobilne RFD40/RFD90. Kompleksowe wdrożenia RFID dla magazynów i produkcji.',
    longDescription: 'Kompleksowe rozwiązania RFID Zebra: czytniki stacjonarne FX7500 i FX9600 do bramek i linii produkcyjnych, mobilne przystawki RFD40 i RFD90 do terminali. Oprogramowanie 123RFID Desktop do konfiguracji.',
    icon: 'radio',
    productCount: 6,
  },
  {
    id: 'drukarki-mobilne',
    slug: 'drukarki-mobilne',
    name: 'Drukarki mobilne',
    description: 'Przenośne drukarki etykiet i paragonów',
    seoTitle: 'Drukarki mobilne Zebra | Przenośne drukarki etykiet',
    seoDescription: 'Drukarki mobilne Zebra ZQ320, ZQ520, ZQ630. Przenośne drukarki etykiet i paragonów do pracy w terenie. Bluetooth, Wi-Fi, wytrzymała konstrukcja.',
    longDescription: 'Mobilne drukarki Zebra do druku etykiet i paragonów w terenie. ZQ320 Plus do paragonów 3", ZQ520 do etykiet 4", ZQ630 Plus do intensywnych zastosowań. Łączność Bluetooth i Wi-Fi, wytrzymała konstrukcja.',
    icon: 'printer',
    productCount: 4,
  },
  {
    id: 'akcesoria',
    slug: 'akcesoria',
    name: 'Akcesoria',
    description: 'Baterie, ładowarki, uchwyty i inne akcesoria',
    seoTitle: 'Akcesoria Zebra | Baterie, ładowarki, uchwyty',
    seoDescription: 'Oryginalne akcesoria Zebra - baterie, ładowarki wielostanowiskowe, uchwyty, etui. Części zamienne do drukarek, skanerów i terminali.',
    longDescription: 'Oryginalne akcesoria Zebra: baterie standardowe i rozszerzone, ładowarki jedno- i wielostanowiskowe, uchwyty samochodowe i biurkowe, etui ochronne, paski na rękę. Pełna kompatybilność i gwarancja producenta.',
    icon: 'package',
    productCount: 12,
  },
]

// Producenci
export const manufacturers: Manufacturer[] = [
  {
    id: 'zebra',
    slug: 'zebra',
    name: 'Zebra Technologies',
    logo: '/images/manufacturers/zebra.svg',
    seoTitle: 'Produkty Zebra Technologies | Autoryzowany dystrybutor',
    seoDescription: 'Pełna oferta Zebra Technologies - drukarki etykiet, skanery kodów, terminale mobilne, systemy RFID. TAKMA - autoryzowany partner Zebra w Polsce.'
  },
]

// ============================================
// DRUKARKI BIURKOWE (DESKTOP)
// ============================================

const desktopPrinters: Product[] = [
  {
    id: 'zebra-zd421t',
    slug: 'zebra-zd421t',
    name: 'Zebra ZD421t',
    shortDescription: 'Drukarka termotransferowa 4" z kolorowym LCD',
    description: `Zebra ZD421t to najnowsza drukarka biurkowa firmy Zebra, będąca następcą popularnej serii GK/GX. Łączy sprawdzoną niezawodność z nowoczesnymi funkcjami.

Oferuje ulepszoną szybkość i jakość druku oraz rozbudowane opcje łączności. Dostępna w rozdzielczości 203 lub 300 dpi.

Kolorowy wyświetlacz LCD ułatwia konfigurację i monitoring pracy. Standardowo wyposażona w USB i USB Host, z opcjonalnym Ethernet, Serial oraz podwójnym radiem bezprzewodowym Wi-Fi i Bluetooth.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 2490,
    images: ['/images/products/zebra-zd421t.jpg'],
    tags: ['magazyn', 'logistyka', 'retail'],
    availability: 'available',
    isNew: true,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi lub 300 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 152 mm/s' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet (opcja), Wi-Fi (opcja), Bluetooth' },
      { name: 'Wyświetlacz', value: 'Kolorowy LCD' },
      { name: 'Pamięć', value: '512 MB Flash, 256 MB RAM' },
      { name: 'Języki programowania', value: 'ZPL, EPL, XML' },
    ],
    applications: ['Etykiety wysyłkowe', 'Oznaczanie produktów', 'Etykiety magazynowe', 'Retail'],
    compatibleAccessories: ['zebra-ribbon-wax-110', 'zebra-labels-100x50'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.2 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '5.8 MB' },
    ],
    createdAt: '2024-01-15',
  },
  {
    id: 'zebra-zd421d',
    slug: 'zebra-zd421d',
    name: 'Zebra ZD421d',
    shortDescription: 'Ekonomiczna drukarka termiczna 4" direct thermal',
    description: `Zebra ZD421d to wersja termiczna drukarki ZD421, idealna do druku etykiet bez użycia taśmy barwiącej.

Doskonała do etykiet wysyłkowych, paragonów i oznaczeń tymczasowych. Niższe koszty eksploatacji dzięki brakowi taśmy termotransferowej.

Kompaktowa konstrukcja zajmuje minimum miejsca na biurku. Łatwa wymiana materiałów eksploatacyjnych.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 1890,
    images: ['/images/products/zebra-zd421d.jpg'],
    tags: ['logistyka', 'retail'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termiczna (direct thermal)' },
      { name: 'Rozdzielczość', value: '203 dpi lub 300 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 152 mm/s' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet (opcja), Wi-Fi (opcja), Bluetooth' },
      { name: 'Pamięć', value: '512 MB Flash, 256 MB RAM' },
    ],
    applications: ['Etykiety wysyłkowe', 'Paragony', 'Etykiety tymczasowe'],
    compatibleAccessories: ['zebra-labels-100x50'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.1 MB' },
    ],
    createdAt: '2024-01-15',
  },
  {
    id: 'zebra-zd621t',
    slug: 'zebra-zd621t',
    name: 'Zebra ZD621t',
    shortDescription: 'Premium drukarka biurkowa 4" z zaawansowanymi funkcjami',
    description: `Zebra ZD621t to flagowa drukarka biurkowa oferująca najwyższą jakość druku w swojej klasie.

Rozdzielczość do 300 dpi i prędkość do 203 mm/s zapewniają doskonałą jakość przy wysokiej wydajności. Duży kolorowy wyświetlacz 2.7" ułatwia obsługę.

Dostępna również wersja ZD621R z wbudowanym koderem RFID UHF do druku i kodowania smart etykiet.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 2890,
    images: ['/images/products/zebra-zd621t.jpg'],
    tags: ['magazyn', 'logistyka', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi lub 300 dpi' },
      { name: 'Szerokość druku', value: '108 mm (4")' },
      { name: 'Prędkość druku', value: 'do 203 mm/s' },
      { name: 'Interfejsy', value: 'USB, Ethernet, Bluetooth, Wi-Fi (opcja)' },
      { name: 'Wyświetlacz', value: 'Kolorowy LCD 2.7"' },
      { name: 'Pamięć', value: '512 MB Flash, 256 MB RAM' },
      { name: 'Opcje', value: 'Obcinacz, odklejak, RFID' },
    ],
    applications: ['Etykiety wysyłkowe', 'Oznaczanie produktów', 'Etykiety RFID', 'Healthcare'],
    compatibleAccessories: ['zebra-ribbon-wax-110', 'zebra-labels-100x50'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.4 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '6.2 MB' },
    ],
    createdAt: '2023-06-10',
  },
]

// ============================================
// DRUKARKI PÓŁPRZEMYSŁOWE
// ============================================

const industrialLightPrinters: Product[] = [
  {
    id: 'zebra-zt231',
    slug: 'zebra-zt231',
    name: 'Zebra ZT231',
    shortDescription: 'Kompaktowa drukarka przemysłowa 4" z dotykowym LCD',
    description: `Zebra ZT231 powstała w odpowiedzi na potrzeby klientów dotyczące ergonomii i optymalizacji procesu wydruku etykiet.

Nowoczesna, zwarta konstrukcja wymaga tylko 10 cm przestrzeni na otwarcie obudowy - zmieści się nawet w wąskich miejscach. Dotykowy wyświetlacz LCD znacznie ułatwia obsługę.

ZT231 to następca modeli ZT230, S4M i S600. Dostępna w wersji termicznej i termotransferowej.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 3290,
    images: ['/images/products/zebra-zt231.jpg'],
    tags: ['magazyn', 'produkcja', 'logistyka'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi lub 300 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 305 mm/s' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet, Serial, Bluetooth' },
      { name: 'Wyświetlacz', value: 'Dotykowy LCD' },
      { name: 'Otwieranie', value: 'Wymaga tylko 10 cm przestrzeni' },
    ],
    applications: ['Produkcja', 'Magazyn', 'Logistyka', 'Dystrybucja'],
    compatibleAccessories: ['zebra-ribbon-wax-110', 'zebra-ribbon-resin-110'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.3 MB' },
    ],
    createdAt: '2024-02-01',
  },
  {
    id: 'zebra-zt111',
    slug: 'zebra-zt111',
    name: 'Zebra ZT111',
    shortDescription: 'Ekonomiczna drukarka przemysłowa entry-level',
    description: `Zebra ZT111 wypełnia lukę pomiędzy drukarkami biurkowymi a przemysłowymi.

Ekonomiczne rozwiązanie dla firm, które potrzebują większej wydajności niż oferują drukarki biurkowe, ale nie wymagają pełnych możliwości drukarek przemysłowych.

Następca modeli ZT220, S4M i S600. Solidna konstrukcja metalowa w przystępnej cenie.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 2490,
    images: ['/images/products/zebra-zt111.jpg'],
    tags: ['magazyn', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi lub 300 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 254 mm/s' },
      { name: 'Interfejsy', value: 'USB, Ethernet, Serial' },
      { name: 'Konstrukcja', value: 'Metalowa obudowa' },
    ],
    applications: ['Lekka produkcja', 'Magazyn', 'Dystrybucja'],
    compatibleAccessories: ['zebra-ribbon-wax-110'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.0 MB' },
    ],
    createdAt: '2023-09-15',
  },
  {
    id: 'zebra-zt411',
    slug: 'zebra-zt411',
    name: 'Zebra ZT411',
    shortDescription: 'Półprzemysłowa drukarka 4" do intensywnej eksploatacji',
    description: `Zebra ZT411 to półprzemysłowa drukarka etykiet zaprojektowana do intensywnej pracy w środowiskach produkcyjnych i magazynowych.

Seria ZT400 oferuje modele 104 mm (ZT411) i 168 mm (ZT421) szerokości druku. Wszystkie urządzenia wyposażone są w zaawansowane funkcje standardowo.

Dostępna z rozdzielczością 203, 300 lub 600 dpi dla małych etykiet. Opcjonalny moduł RFID, obcinacz lub odklejak.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 5890,
    images: ['/images/products/zebra-zt411.jpg'],
    tags: ['produkcja', 'magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 / 300 / 600 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 356 mm/s (203dpi)' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet, Serial, Bluetooth 4.1, Wi-Fi' },
      { name: 'Wyświetlacz', value: 'Kolorowy dotykowy 4.3"' },
      { name: 'Pamięć', value: '256 MB RAM, 512 MB Flash' },
      { name: 'Opcje', value: 'RFID, obcinacz, odklejak, nawijak' },
    ],
    applications: ['Etykiety produkcyjne', 'Oznaczanie palet', 'Etykiety wysyłkowe', 'RFID'],
    compatibleAccessories: ['zebra-ribbon-wax-110', 'zebra-ribbon-resin-110'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.5 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '8.2 MB' },
    ],
    createdAt: '2023-03-20',
  },
  {
    id: 'zebra-zt421',
    slug: 'zebra-zt421',
    name: 'Zebra ZT421',
    shortDescription: 'Półprzemysłowa drukarka 6" do szerokich etykiet',
    description: `Zebra ZT421 to wersja szeroka drukarki z serii ZT400, przeznaczona do druku etykiet o szerokości do 168 mm.

Idealna do etykiet paletowych, oznaczeń dużych produktów i etykiet GS1 wymagających większej powierzchni.

Wszystkie zalety serii ZT400: metalowa konstrukcja, kolorowy dotykowy wyświetlacz, zaawansowane opcje łączności.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 7490,
    images: ['/images/products/zebra-zt421.jpg'],
    tags: ['produkcja', 'logistyka', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 / 300 dpi' },
      { name: 'Szerokość druku', value: '168 mm (6")' },
      { name: 'Prędkość druku', value: 'do 305 mm/s (203dpi)' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet, Serial, Bluetooth, Wi-Fi' },
      { name: 'Wyświetlacz', value: 'Kolorowy dotykowy 4.3"' },
      { name: 'Opcje', value: 'RFID, obcinacz, odklejak, nawijak' },
    ],
    applications: ['Etykiety paletowe', 'Duże oznaczenia', 'Etykiety GS1', 'Logistyka'],
    compatibleAccessories: ['zebra-ribbon-wax-170'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.5 MB' },
    ],
    createdAt: '2023-03-20',
  },
]

// ============================================
// DRUKARKI PRZEMYSŁOWE
// ============================================

const industrialPrinters: Product[] = [
  {
    id: 'zebra-zt610',
    slug: 'zebra-zt610',
    name: 'Zebra ZT610',
    shortDescription: 'Przemysłowa drukarka 4" do pracy 24/7',
    description: `Zebra ZT610 to przemysłowa drukarka etykiet będąca następcą legendarnej serii Xi4.

Wytrzymała metalowa obudowa, znacznie większa pamięć (1 GB RAM, 2 GB Flash) i duży kolorowy wyświetlacz w przednim panelu sterowania.

Drukarka przystosowana do pracy 24 godziny na dobę w trudnych środowiskach produkcyjnych i magazynowych. Możliwość aktualizacji do RFID w terenie w zaledwie 5 minut.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 12900,
    images: ['/images/products/zebra-zt610.jpg'],
    tags: ['produkcja', 'magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 / 300 / 600 dpi' },
      { name: 'Szerokość druku', value: '114 mm (4")' },
      { name: 'Prędkość druku', value: 'do 356 mm/s (203dpi)' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet, Serial, Bluetooth, Wi-Fi' },
      { name: 'Wyświetlacz', value: 'Kolorowy dotykowy' },
      { name: 'Pamięć', value: '1 GB RAM, 2 GB Flash' },
      { name: 'Praca', value: '24/7' },
      { name: 'Opcje', value: 'RFID (upgrade w 5 min), obcinacz, odklejak, nawijak' },
    ],
    applications: ['Produkcja przemysłowa', 'Magazyn wysokiego składowania', 'Centra dystrybucji', 'RFID'],
    compatibleAccessories: ['zebra-ribbon-resin-110', 'zebra-ribbon-wax-resin-110'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.8 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '12.5 MB' },
    ],
    createdAt: '2022-08-15',
  },
  {
    id: 'zebra-zt620',
    slug: 'zebra-zt620',
    name: 'Zebra ZT620',
    shortDescription: 'Przemysłowa drukarka 6" do szerokich etykiet',
    description: `Zebra ZT620 to szeroka wersja drukarki przemysłowej z serii ZT600, obsługująca etykiety do 168 mm szerokości.

Wyprzedza poprzedników z serii Xi, oferując wytrzymałość, kontrolę i wydajność nowej generacji. Najlepsza w swojej klasie jakość druku w wysokiej rozdzielczości.

Idealna do etykiet paletowych, oznaczeń magazynowych i etykiet na duże produkty. Możliwość pracy 24/7.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 15900,
    images: ['/images/products/zebra-zt620.jpg'],
    tags: ['produkcja', 'logistyka', 'magazyn'],
    availability: 'on-order',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 / 300 dpi' },
      { name: 'Szerokość druku', value: '168 mm (6")' },
      { name: 'Prędkość druku', value: 'do 305 mm/s (203dpi)' },
      { name: 'Interfejsy', value: 'USB, USB Host, Ethernet, Serial, Bluetooth, Wi-Fi' },
      { name: 'Pamięć', value: '1 GB RAM, 2 GB Flash' },
      { name: 'Praca', value: '24/7' },
      { name: 'Opcje', value: 'RFID, obcinacz, odklejak, nawijak' },
    ],
    applications: ['Etykiety paletowe', 'Przemysł ciężki', 'Centra logistyczne', 'Duże oznaczenia'],
    compatibleAccessories: ['zebra-ribbon-wax-170'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.8 MB' },
    ],
    createdAt: '2022-08-15',
  },
]

// ============================================
// DRUKARKI MOBILNE
// ============================================

const mobilePrinters: Product[] = [
  {
    id: 'zebra-zq320-plus',
    slug: 'zebra-zq320-plus',
    name: 'Zebra ZQ320 Plus',
    shortDescription: 'Mobilna drukarka paragonów 3" do średnich obciążeń',
    description: `Zebra ZQ320 Plus to mobilna drukarka paragonów o szerokości 3" (72 mm), zoptymalizowana dla środowisk o średnim obciążeniu.

Idealna dla kurierów, serwisantów i przedstawicieli handlowych. Możliwość druku paragonów i podstawowych etykiet.

Wytrzymała konstrukcja, łączność Bluetooth i Wi-Fi, długi czas pracy na baterii.`,
    categoryId: 'drukarki-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 1890,
    images: ['/images/products/zebra-zq320.jpg'],
    tags: ['logistyka', 'retail', 'outdoor'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Szerokość druku', value: '72 mm (3")' },
      { name: 'Prędkość druku', value: 'do 100 mm/s' },
      { name: 'Interfejsy', value: 'Bluetooth 4.1, Wi-Fi, USB' },
      { name: 'Bateria', value: 'Li-Ion 2500 mAh' },
      { name: 'Odporność', value: 'IP54, upadki z 1.5 m' },
      { name: 'Waga', value: '480 g z baterią' },
    ],
    applications: ['Dostawy kurierskie', 'Serwis w terenie', 'Paragony mobilne', 'Etykiety podstawowe'],
    compatibleAccessories: ['zebra-battery-zq3', 'zebra-charger-zq3'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '0.9 MB' },
    ],
    createdAt: '2024-03-01',
  },
  {
    id: 'zebra-zq521',
    slug: 'zebra-zq521',
    name: 'Zebra ZQ521',
    shortDescription: 'Mobilna drukarka etykiet 4" następca ZQ520',
    description: `Zebra ZQ521 to następca popularnego modelu ZQ520, oferująca druk etykiet i paragonów o szerokości do 104 mm.

32-bitowy procesor, 512 MB Flash i 256 MB RAM zapewniają wysoką wydajność. Wytrzymała konstrukcja do pracy w terenie.

Idealna do etykiet wysyłkowych, magazynowych i kurierskich drukowanych w terenie.`,
    categoryId: 'drukarki-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 3290,
    images: ['/images/products/zebra-zq521.jpg'],
    tags: ['logistyka', 'magazyn', 'outdoor'],
    availability: 'available',
    isNew: true,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 127 mm/s' },
      { name: 'Interfejsy', value: 'Bluetooth 4.2, Wi-Fi, USB' },
      { name: 'Pamięć', value: '512 MB Flash, 256 MB RAM' },
      { name: 'Bateria', value: 'PowerPrecision+ Li-Ion' },
      { name: 'Odporność', value: 'IP54, upadki z 2.1 m' },
    ],
    applications: ['Etykiety kurierskie', 'Magazyn', 'Logistyka', 'Dostawy'],
    compatibleAccessories: ['zebra-battery-zq5', 'zebra-charger-zq5'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.1 MB' },
    ],
    createdAt: '2024-02-15',
  },
  {
    id: 'zebra-zq630-plus',
    slug: 'zebra-zq630-plus',
    name: 'Zebra ZQ630 Plus',
    shortDescription: 'Wytrzymała mobilna drukarka 4" do intensywnych zastosowań',
    description: `Zebra ZQ630 Plus to najbardziej wytrzymała mobilna drukarka etykiet 4" przeznaczona do środowisk o wysokim obciążeniu.

Następca modelu QLn420. Drukuje etykiety, paragony i metki o szerokości do 104 mm z najwyższą niezawodnością.

Idealna dla logistyki, transportu i aplikacji wymagających ekstremalnej wytrzymałości.`,
    categoryId: 'drukarki-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 4890,
    images: ['/images/products/zebra-zq630.jpg'],
    tags: ['logistyka', 'outdoor', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Metoda druku', value: 'Termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Szerokość druku', value: '104 mm (4")' },
      { name: 'Prędkość druku', value: 'do 115 mm/s' },
      { name: 'Interfejsy', value: 'Bluetooth 4.1, Wi-Fi 802.11ac, USB' },
      { name: 'Bateria', value: 'PowerPrecision+ 6800 mAh' },
      { name: 'Odporność', value: 'IP54, upadki z 2.4 m, MIL-STD-810G' },
      { name: 'Temperatura pracy', value: '-20°C do +50°C' },
    ],
    applications: ['Transport ciężki', 'Logistyka', 'Praca w ekstremalnych warunkach', 'Magazyny outdoor'],
    compatibleAccessories: ['zebra-battery-zq6', 'zebra-charger-zq6'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.3 MB' },
    ],
    createdAt: '2023-06-01',
  },
]

// ============================================
// SKANERY KODÓW KRESKOWYCH
// ============================================

const scanners: Product[] = [
  {
    id: 'zebra-ds2208',
    slug: 'zebra-ds2208',
    name: 'Zebra DS2208',
    shortDescription: 'Uniwersalny skaner 2D do handlu i biura',
    description: `Zebra DS2208 to nowa generacja skanera LS2208, będąca odpowiedzią na potrzebę odczytu kodów z ekranów urządzeń mobilnych.

Radzi sobie z odczytem kodów słabej jakości, uszkodzonych lub słabo wydrukowanych. Błyskawiczny odczyt kodów 1D i 2D w różnych odległościach do 37 cm.

Technologia Plug and Play - gotowy do pracy natychmiast po podłączeniu. Idealny dla handlu detalicznego i obsługi dokumentów.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'zebra',
    priceFrom: 590,
    images: ['/images/products/zebra-ds2208.jpg'],
    tags: ['retail', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Typ skanera', value: 'Imager 2D przewodowy' },
      { name: 'Skanowane kody', value: '1D, 2D, kody z ekranów' },
      { name: 'Interfejsy', value: 'USB, RS-232' },
      { name: 'Zasięg skanowania', value: 'do 37 cm' },
      { name: 'Odporność na upadki', value: '1.5 m na beton' },
      { name: 'Klasa IP', value: 'IP52' },
      { name: 'Waga', value: '115 g' },
    ],
    applications: ['Kasy sklepowe', 'Inwentaryzacja', 'Obsługa dokumentów', 'Weryfikacja produktów'],
    compatibleAccessories: ['zebra-stand-ds22'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '0.9 MB' },
    ],
    createdAt: '2022-11-05',
  },
  {
    id: 'zebra-ds2278',
    slug: 'zebra-ds2278',
    name: 'Zebra DS2278',
    shortDescription: 'Bezprzewodowy skaner 2D z bazą ładującą',
    description: `Zebra DS2278 to bezprzewodowa wersja popularnego skanera DS2208, łącząca mobilność z wysoką wydajnością.

Komunikacja Bluetooth zapewnia zasięg do 10 m od bazy. Bateria wystarczająca na pełną zmianę roboczą.

Wszystkie zalety DS2208 w wersji bezprzewodowej: odczyt kodów z ekranów, kodów uszkodzonych, technologia Plug and Play.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'zebra',
    priceFrom: 990,
    images: ['/images/products/zebra-ds2278.jpg'],
    tags: ['retail', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Typ skanera', value: 'Imager 2D bezprzewodowy' },
      { name: 'Skanowane kody', value: '1D, 2D, kody z ekranów' },
      { name: 'Łączność', value: 'Bluetooth 4.0, USB (baza)' },
      { name: 'Zasięg bezprzewodowy', value: 'do 10 m' },
      { name: 'Bateria', value: 'Li-Ion, pełna zmiana' },
      { name: 'Odporność na upadki', value: '1.5 m na beton' },
    ],
    applications: ['Handel detaliczny', 'Inwentaryzacja mobilna', 'Magazyn', 'Recepcja'],
    compatibleAccessories: ['zebra-stand-ds22'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.0 MB' },
    ],
    createdAt: '2023-02-10',
  },
  {
    id: 'zebra-li4278',
    slug: 'zebra-li4278',
    name: 'Zebra LI4278',
    shortDescription: 'Bezprzewodowy skaner laserowy 1D z zasięgiem 100 m',
    description: `Zebra Symbol LI4278 to bezprzewodowy czytnik kodów 1D komunikujący się za pośrednictwem Bluetooth.

Nowoczesna technologia linear imager pozwala na odczyt kodów ze standardowych etykiet i ekranów telefonów. Akumulator gwarantuje nieprzerwaną pracę nawet przez 72 godziny.

Wyjątkowy zasięg radiowy do 100 metrów i norma szczelności IP53.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'zebra',
    priceFrom: 890,
    images: ['/images/products/zebra-li4278.jpg'],
    tags: ['retail', 'magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Typ skanera', value: 'Linear Imager 1D bezprzewodowy' },
      { name: 'Skanowane kody', value: '1D, kody z ekranów' },
      { name: 'Łączność', value: 'Bluetooth, USB (baza)' },
      { name: 'Zasięg bezprzewodowy', value: 'do 100 m' },
      { name: 'Bateria', value: '72 godziny pracy' },
      { name: 'Klasa IP', value: 'IP53' },
      { name: 'Odporność na upadki', value: '1.8 m na beton' },
    ],
    applications: ['Magazyn', 'Logistyka', 'Handel', 'Inwentaryzacja'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '0.8 MB' },
    ],
    createdAt: '2022-06-15',
  },
  {
    id: 'zebra-ds3608',
    slug: 'zebra-ds3608',
    name: 'Zebra DS3608',
    shortDescription: 'Ultra-wytrzymały skaner przemysłowy 2D',
    description: `Zebra DS3608 to ultra-wytrzymały skaner zapewniający niepowtarzalną wydajność w najtrudniejszych warunkach.

Błyskawicznie przechwytuje kody 1D i 2D z odległości do 1.5 metra. Unikalny tryb multi-kod umożliwia jednoczesne wychwytywanie do 20 kodów na jednej etykiecie.

Konstrukcja odporna na upadki z 2.4 m, klasa IP67, temperatura pracy od -30°C do +50°C.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'zebra',
    priceFrom: 2490,
    images: ['/images/products/zebra-ds3608.jpg'],
    tags: ['produkcja', 'magazyn', 'logistyka', 'outdoor'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Typ skanera', value: 'Imager 2D ultra-wytrzymały' },
      { name: 'Skanowane kody', value: '1D, 2D, DPM, multi-kod (do 20)' },
      { name: 'Interfejsy', value: 'USB, RS-232' },
      { name: 'Zasięg skanowania', value: 'do 1.5 m' },
      { name: 'Odporność na upadki', value: '2.4 m na beton' },
      { name: 'Klasa IP', value: 'IP67' },
      { name: 'Temperatura pracy', value: '-30°C do +50°C' },
    ],
    applications: ['Linie produkcyjne', 'Magazyny chłodnicze', 'Przemysł ciężki', 'Outdoor'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.4 MB' },
    ],
    createdAt: '2022-04-20',
  },
  {
    id: 'zebra-ds8178',
    slug: 'zebra-ds8178',
    name: 'Zebra DS8178',
    shortDescription: 'Premium bezprzewodowy skaner 2D do wymagających zastosowań',
    description: `Zebra DS8178 to bezprzewodowy czytnik premium klasy, błyskawicznie odczytujący kody 1D i 2D.

Potrafi odczytać niewyraźne, wyblakłe, uszkodzone lub zabrudzone kody. Świetnie radzi sobie z kodami na ekranach smartfonów, nawet słabo doświetlonych.

Inteligentna bateria PowerPrecision Plus zapewnia do 24 godzin nieprzerwanej pracy. Wersja DS8178-HC dedykowana dla służby zdrowia z antybakteryjną powłoką.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'zebra',
    priceFrom: 1790,
    images: ['/images/products/zebra-ds8178.jpg'],
    tags: ['retail', 'healthcare', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Typ skanera', value: 'Imager 2D bezprzewodowy premium' },
      { name: 'Skanowane kody', value: '1D, 2D, kody z ekranów, kody uszkodzone' },
      { name: 'Łączność', value: 'Bluetooth 4.0, USB (baza)' },
      { name: 'Bateria', value: 'PowerPrecision Plus, do 24h pracy' },
      { name: 'Odporność na upadki', value: '2.4 m na beton' },
      { name: 'Klasa IP', value: 'IP52' },
      { name: 'Wersja HC', value: 'Antybakteryjna powłoka dla healthcare' },
    ],
    applications: ['Apteki', 'Szpitale', 'Handel premium', 'Logistyka'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.2 MB' },
    ],
    createdAt: '2022-09-10',
  },
]

// ============================================
// TERMINALE MOBILNE
// ============================================

const mobileComputers: Product[] = [
  {
    id: 'zebra-tc21',
    slug: 'zebra-tc21',
    name: 'Zebra TC21',
    shortDescription: 'Ekonomiczny terminal mobilny Android dla firm',
    description: `Zebra TC21 to ekonomiczny komputer dotykowy klasy biznesowej w przystępnej cenie, działający na systemie Android.

Obudowa niewielka, lekka i wygodna w przenoszeniu. Duży 5-calowy ekran dotykowy HD i kamera 13MP z tyłu.

Idealny dla małych i średnich firm szukających wytrzymałego urządzenia do inwentaryzacji i zarządzania magazynem.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 2890,
    images: ['/images/products/zebra-tc21.jpg'],
    tags: ['retail', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'System operacyjny', value: 'Android 10/11' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '5" HD (1280x720)' },
      { name: 'Pamięć', value: '3/4 GB RAM, 32/64 GB Flash' },
      { name: 'Skaner', value: 'SE4710 Imager 2D' },
      { name: 'Kamera', value: '13 MP tył, 5 MP przód' },
      { name: 'Bateria', value: '3100 mAh lub 5200 mAh' },
      { name: 'Odporność', value: 'IP67, upadki z 1.2 m' },
      { name: 'Łączność', value: 'Wi-Fi 6, Bluetooth 5.0' },
    ],
    applications: ['Zarządzanie magazynem', 'Inwentaryzacja', 'Retail', 'Małe i średnie firmy'],
    compatibleAccessories: ['zebra-battery-tc21', 'zebra-cradle-tc21'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.6 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '8.5 MB' },
    ],
    createdAt: '2023-04-15',
  },
  {
    id: 'zebra-tc26',
    slug: 'zebra-tc26',
    name: 'Zebra TC26',
    shortDescription: 'Terminal mobilny z LTE/4G do pracy w terenie',
    description: `Zebra TC26 to wersja terminala TC21 z dodatkowym modułem 4G (LTE) do pracy w terenie poza zasięgiem Wi-Fi.

Podwyższona norma szczelności IP67 przystosowuje urządzenie do pracy w trudnych warunkach przemysłowych i terenowych.

Idealny dla serwisantów, kurierów i pracowników działających poza biurem.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 3490,
    images: ['/images/products/zebra-tc26.jpg'],
    tags: ['logistyka', 'outdoor', 'retail'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'System operacyjny', value: 'Android 10/11' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '5" HD (1280x720)' },
      { name: 'Pamięć', value: '4 GB RAM, 64 GB Flash' },
      { name: 'Skaner', value: 'SE4710 Imager 2D' },
      { name: 'Łączność', value: 'Wi-Fi 6, Bluetooth 5.0, 4G LTE, GPS' },
      { name: 'Bateria', value: '3100 mAh lub 5200 mAh' },
      { name: 'Odporność', value: 'IP67, upadki z 1.2 m' },
    ],
    applications: ['Serwis w terenie', 'Dostawy kurierskie', 'Praca poza biurem', 'Logistyka'],
    compatibleAccessories: ['zebra-battery-tc21', 'zebra-vehicle-cradle-tc2'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.6 MB' },
    ],
    createdAt: '2023-04-15',
  },
  {
    id: 'zebra-tc52x',
    slug: 'zebra-tc52x',
    name: 'Zebra TC52x',
    shortDescription: 'Wytrzymały terminal mobilny do wymagających środowisk',
    description: `Zebra TC52x to wszechstronny terminal mobilny klasy enterprise, łączący funkcjonalność smartfona z wytrzymałością urządzenia przemysłowego.

System Android, potężny procesor Snapdragon 660 i zaawansowane możliwości skanowania czynią go idealnym narzędziem dla pracowników mobilnych.

Wytrzymałość IP67, odporność na upadki z 1.5 m, wsparcie Mobility DNA dla łatwego zarządzania flotą urządzeń.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 4590,
    images: ['/images/products/zebra-tc52x.jpg'],
    tags: ['magazyn', 'logistyka', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'System operacyjny', value: 'Android 11' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '5" Full HD (1920x1080)' },
      { name: 'Pamięć', value: '4 GB RAM, 32/64 GB Flash' },
      { name: 'Skaner', value: 'SE4720 Imager 2D' },
      { name: 'Bateria', value: '4150 mAh (standard) / 7000 mAh (extended)' },
      { name: 'Odporność', value: 'IP67, upadki z 1.5 m, MIL-STD-810G' },
      { name: 'Łączność', value: 'Wi-Fi 6, Bluetooth 5.0, NFC' },
    ],
    applications: ['Zarządzanie magazynem', 'Inwentaryzacja', 'Produkcja', 'Logistyka'],
    compatibleAccessories: ['zebra-battery-tc52-extended', 'zebra-cradle-tc52'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '2.1 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '12.5 MB' },
    ],
    createdAt: '2023-01-10',
  },
  {
    id: 'zebra-tc57x',
    slug: 'zebra-tc57x',
    name: 'Zebra TC57x',
    shortDescription: 'Terminal mobilny z LTE/4G dla pracowników terenowych',
    description: `Zebra TC57x to wersja terminala TC52x z modułem sieci komórkowej 4G LTE dla pracowników działających w terenie.

Wszystkie zalety TC52x plus łączność WAN dla pracy poza zasięgiem Wi-Fi. Moduł GPS do śledzenia lokalizacji.

Idealny dla serwisu w terenie, dostaw kurierskich i pracowników mobilnych.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 5290,
    images: ['/images/products/zebra-tc57x.jpg'],
    tags: ['logistyka', 'outdoor', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'System operacyjny', value: 'Android 11' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '5" Full HD (1920x1080)' },
      { name: 'Pamięć', value: '4 GB RAM, 32/64 GB Flash' },
      { name: 'Skaner', value: 'SE4720 Imager 2D' },
      { name: 'Łączność', value: 'Wi-Fi 6, Bluetooth 5.0, 4G LTE, GPS, NFC' },
      { name: 'Bateria', value: '4150 mAh / 7000 mAh' },
      { name: 'Odporność', value: 'IP67, upadki z 1.5 m' },
    ],
    applications: ['Dostawy i logistyka', 'Serwis w terenie', 'Praca poza biurem', 'Transport'],
    compatibleAccessories: ['zebra-battery-tc52-extended', 'zebra-vehicle-cradle-tc5'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '2.1 MB' },
    ],
    createdAt: '2023-01-10',
  },
  {
    id: 'zebra-mc3300x',
    slug: 'zebra-mc3300x',
    name: 'Zebra MC3300x',
    shortDescription: 'Terminal z klawiaturą do intensywnych zastosowań',
    description: `Zebra MC3300x to wytrzymały terminal mobilny z pełną klawiaturą, zaprojektowany do intensywnych zastosowań magazynowych i produkcyjnych.

Różne warianty klawiatury: numeryczna, alfanumeryczna, obrotowa. Skaner dalekiego zasięgu do kodów z górnych półek.

Następca popularnej serii MC3200. System Android, wsparcie Mobility DNA.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 5890,
    images: ['/images/products/zebra-mc3300x.jpg'],
    tags: ['magazyn', 'produkcja', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'System operacyjny', value: 'Android 10' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '4" WVGA (800x480)' },
      { name: 'Pamięć', value: '4 GB RAM, 32 GB Flash' },
      { name: 'Klawiatura', value: 'Numeryczna / Alfanumeryczna / Obrotowa' },
      { name: 'Skaner', value: 'SE4770 (standard) / SE4850 (daleki zasięg)' },
      { name: 'Bateria', value: '5200 mAh / 7000 mAh' },
      { name: 'Odporność', value: 'IP64, upadki z 1.8 m' },
    ],
    applications: ['Magazyn wysokiego składowania', 'Kompletacja', 'Produkcja', 'Cross-docking'],
    compatibleAccessories: ['zebra-battery-mc33', 'zebra-cradle-mc33'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.9 MB' },
    ],
    createdAt: '2022-10-20',
  },
  {
    id: 'zebra-tc22-tc27',
    slug: 'zebra-tc22-tc27',
    name: 'Zebra TC22/TC27',
    shortDescription: 'Nowa generacja terminali TC - następca TC21/TC26',
    description: `Zebra TC22 i TC27 to najnowsza generacja ekonomicznych terminali mobilnych, będąca następcą popularnej serii TC21/TC26.

Ulepszony procesor, nowszy system Android i jeszcze lepsza wytrzymałość. TC22 z Wi-Fi, TC27 dodatkowo z 4G LTE.

Idealne dla firm szukających nowoczesnego i ekonomicznego rozwiązania mobilnego.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 3290,
    images: ['/images/products/zebra-tc22.jpg'],
    tags: ['retail', 'magazyn', 'logistyka'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'System operacyjny', value: 'Android 13' },
      { name: 'Procesor', value: 'Qualcomm QCM4490' },
      { name: 'Wyświetlacz', value: '5.5" HD+ (1440x720)' },
      { name: 'Pamięć', value: '4 GB RAM, 64 GB Flash' },
      { name: 'Skaner', value: 'SE4710 Imager 2D' },
      { name: 'Bateria', value: '3800 mAh (standard)' },
      { name: 'Odporność', value: 'IP68, upadki z 1.2 m' },
      { name: 'TC27 dodatkowo', value: '4G LTE, GPS' },
    ],
    applications: ['Retail', 'Magazyn', 'Logistyka', 'Serwis w terenie'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.8 MB' },
    ],
    createdAt: '2024-06-01',
  },
]

// ============================================
// RFID
// ============================================

const rfidProducts: Product[] = [
  {
    id: 'zebra-fx7500',
    slug: 'zebra-fx7500',
    name: 'Zebra FX7500',
    shortDescription: 'Stacjonarny czytnik RFID UHF do 4 anten',
    description: `Zebra FX7500 to stacjonarny czytnik RFID UHF oferujący wysoką wydajność odczytu przy kompaktowych wymiarach.

Obsługa do 4 anten na porcie, możliwość kaskadowego łączenia czytników. System operacyjny Linux dla elastycznej integracji.

Idealny do bramek RFID, punktów kontrolnych i mniejszych instalacji.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 5900,
    images: ['/images/products/zebra-fx7500.jpg'],
    tags: ['magazyn', 'logistyka', 'retail'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Standard', value: 'UHF RFID (EPC Gen2v2)' },
      { name: 'Porty antenowe', value: '4' },
      { name: 'Moc wyjściowa', value: 'do +31.5 dBm' },
      { name: 'Interfejsy', value: 'Ethernet, USB, GPIO' },
      { name: 'System operacyjny', value: 'Linux' },
      { name: 'Oprogramowanie', value: '123RFID Desktop' },
      { name: 'Zasilanie', value: 'PoE lub zasilacz' },
    ],
    applications: ['Bramki RFID', 'Punkty kontrolne', 'Retail RFID', 'Zarządzanie aktywami'],
    compatibleAccessories: ['zebra-antenna-an440'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.2 MB' },
    ],
    createdAt: '2022-03-15',
  },
  {
    id: 'zebra-fx9600',
    slug: 'zebra-fx9600',
    name: 'Zebra FX9600',
    shortDescription: 'Wydajny czytnik RFID do rozbudowanych instalacji',
    description: `Zebra FX9600 to stacjonarny czytnik RFID UHF oferujący najwyższą wydajność odczytu i elastyczność konfiguracji.

Obsługa do 32 anten (z hubem), zaawansowane filtrowanie danych i prędkość odczytu ponad 1100 tagów na sekundę.

Idealny do rozbudowanych instalacji RFID w magazynach i centrach dystrybucji.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 8900,
    images: ['/images/products/zebra-fx9600.jpg'],
    tags: ['magazyn', 'logistyka', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Standard', value: 'UHF RFID (EPC Gen2v2)' },
      { name: 'Porty antenowe', value: '4 lub 8 (do 32 z hubem)' },
      { name: 'Moc wyjściowa', value: 'do +33 dBm' },
      { name: 'Interfejsy', value: 'Ethernet, USB, GPIO' },
      { name: 'System operacyjny', value: 'Linux' },
      { name: 'Prędkość odczytu', value: 'ponad 1100 tagów/s' },
      { name: 'Oprogramowanie', value: '123RFID Desktop' },
    ],
    applications: ['Bramki RFID', 'Zarządzanie magazynem', 'Kontrola dostępu', 'Śledzenie aktywów'],
    compatibleAccessories: ['zebra-antenna-an440', 'zebra-antenna-an480'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.4 MB' },
      { name: 'Instrukcja integracji', type: 'manual', url: '#', size: '6.2 MB' },
    ],
    createdAt: '2022-05-15',
  },
  {
    id: 'zebra-rfd40',
    slug: 'zebra-rfd40',
    name: 'Zebra RFD40',
    shortDescription: 'Mobilna przystawka RFID do smartfonów i terminali',
    description: `Zebra RFD40 to uniwersalna przystawka RFID, która zamienia kompatybilny smartfon lub terminal mobilny w wydajny czytnik RFID UHF.

Lekka konstrukcja i ergonomiczny uchwyt zapewniają komfort podczas długotrwałej pracy. Zasięg odczytu do 6 metrów.

Komunikacja Bluetooth i USB-C, kompatybilność z terminalami TC52x, TC57x i wybranymi smartfonami.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 3490,
    images: ['/images/products/zebra-rfd40.jpg'],
    tags: ['magazyn', 'retail', 'logistyka'],
    availability: 'available',
    isNew: true,
    isBestseller: true,
    specifications: [
      { name: 'Standard', value: 'UHF RFID (EPC Gen2v2)' },
      { name: 'Zasięg odczytu', value: 'do 6 m' },
      { name: 'Łączność', value: 'Bluetooth 5.0, USB-C' },
      { name: 'Bateria', value: '2280 mAh' },
      { name: 'System operacyjny', value: 'ThreadX RTOS' },
      { name: 'Kompatybilność', value: 'TC52x, TC57x, smartfony' },
      { name: 'Waga', value: '338 g z baterią' },
      { name: 'Odporność', value: 'IP52, upadki z 1.2 m' },
    ],
    applications: ['Inwentaryzacja RFID', 'Lokalizacja produktów', 'Zarządzanie aktywami', 'Retail'],
    compatibleAccessories: ['zebra-tc52x', 'zebra-tc57x'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.1 MB' },
    ],
    createdAt: '2024-02-10',
  },
  {
    id: 'zebra-rfd90',
    slug: 'zebra-rfd90',
    name: 'Zebra RFD90',
    shortDescription: 'Kompaktowa przystawka RFID ultra-wytrzymała',
    description: `Zebra RFD90 to ultra-wytrzymała przystawka RFID UHF do terminali mobilnych Zebra.

Zaprojektowana do intensywnego użytkowania w trudnych warunkach. Praca w ekstremalnych temperaturach i wysokiej wilgotności.

Integracja z terminalami TC52x, TC57x, MC3300x dla kompleksowych rozwiązań RFID.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 4290,
    images: ['/images/products/zebra-rfd90.jpg'],
    tags: ['magazyn', 'produkcja', 'logistyka'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Standard', value: 'UHF RFID (EPC Gen2v2)' },
      { name: 'Zasięg odczytu', value: 'do 9 m' },
      { name: 'Łączność', value: 'Bluetooth, USB' },
      { name: 'System operacyjny', value: 'ThreadX RTOS' },
      { name: 'Bateria', value: 'PowerPrecision+' },
      { name: 'Odporność', value: 'IP65, MIL-STD-810G' },
      { name: 'Temperatura pracy', value: '-20°C do +50°C' },
    ],
    applications: ['Magazyn RFID', 'Produkcja', 'Inwentaryzacja', 'Zarządzanie aktywami'],
    compatibleAccessories: ['zebra-tc52x', 'zebra-mc3300x'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.2 MB' },
    ],
    createdAt: '2024-03-01',
  },
]

// ============================================
// AKCESORIA
// ============================================

const accessories: Product[] = [
  {
    id: 'zebra-ribbon-wax-110',
    slug: 'zebra-tasma-woskowa-110mm',
    name: 'Taśma woskowa Zebra 110mm x 300m',
    shortDescription: 'Ekonomiczna taśma termotransferowa do etykiet papierowych',
    description: `Oryginalna taśma woskowa Zebra o szerokości 110mm do druku na etykietach papierowych powlekanych i niepowlekanych.

Idealna do etykiet wysyłkowych, adresowych i magazynowych. Ekonomiczne rozwiązanie dla standardowych zastosowań.

Gwarantowana kompatybilność z drukarkami Zebra.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 45,
    images: ['/images/products/zebra-ribbon-wax.jpg'],
    tags: ['magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Typ taśmy', value: 'Woskowa (wax)' },
      { name: 'Szerokość', value: '110 mm' },
      { name: 'Długość', value: '300 m' },
      { name: 'Nawój', value: '1" (25 mm)' },
      { name: 'Strona barwiąca', value: 'OUT (zewnętrzna)' },
    ],
    applications: ['Etykiety papierowe', 'Etykiety wysyłkowe', 'Etykiety magazynowe'],
    compatibleAccessories: [],
    downloads: [],
    createdAt: '2022-01-01',
  },
  {
    id: 'zebra-ribbon-resin-110',
    slug: 'zebra-tasma-zywiczna-110mm',
    name: 'Taśma żywiczna Zebra 110mm x 300m',
    shortDescription: 'Taśma do trwałych oznaczeń na materiale syntetycznym',
    description: `Taśma żywiczna Zebra do druku na etykietach syntetycznych (PP, PE, PET) wymagających wysokiej trwałości.

Odporna na ścieranie, chemikalia i wilgoć. Idealna do oznaczeń produktów, etykiet laboratoryjnych i przemysłowych.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 89,
    images: ['/images/products/zebra-ribbon-resin.jpg'],
    tags: ['produkcja', 'healthcare'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Typ taśmy', value: 'Żywiczna (resin)' },
      { name: 'Szerokość', value: '110 mm' },
      { name: 'Długość', value: '300 m' },
      { name: 'Nawój', value: '1" (25 mm)' },
      { name: 'Odporność', value: 'Ścieranie, chemikalia, wilgoć' },
    ],
    applications: ['Etykiety syntetyczne', 'Oznaczenia trwałe', 'Healthcare', 'Przemysł'],
    compatibleAccessories: [],
    downloads: [],
    createdAt: '2022-01-01',
  },
  {
    id: 'zebra-labels-100x50',
    slug: 'zebra-etykiety-termiczne-100x50',
    name: 'Etykiety termiczne 100x50mm (1000 szt.)',
    shortDescription: 'Etykiety termiczne TOP do druku direct thermal',
    description: `Etykiety termiczne Zebra o wymiarach 100x50mm do druku bezpośredniego bez użycia taśmy barwiącej.

Wysoka jakość druku i dobra odporność na ścieranie. Perforacja między etykietami dla łatwego odrywania.

Idealne do etykiet wysyłkowych i magazynowych o średnim czasie życia.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 38,
    images: ['/images/products/zebra-labels.jpg'],
    tags: ['magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Typ', value: 'Termiczne TOP' },
      { name: 'Wymiary', value: '100 x 50 mm' },
      { name: 'Ilość na rolce', value: '1000 szt.' },
      { name: 'Gilza', value: '40 mm' },
      { name: 'Perforacja', value: 'Tak' },
    ],
    applications: ['Etykiety wysyłkowe', 'Etykiety magazynowe', 'Etykiety produktowe'],
    compatibleAccessories: [],
    downloads: [],
    createdAt: '2022-01-01',
  },
  {
    id: 'zebra-battery-tc52-extended',
    slug: 'zebra-bateria-tc52-extended',
    name: 'Bateria rozszerzona Zebra TC52/TC57 (7000mAh)',
    shortDescription: 'Bateria PowerPrecision+ o zwiększonej pojemności',
    description: `Oryginalna bateria Zebra PowerPrecision+ o pojemności 7000mAh do terminali TC52 i TC57.

Znacznie dłuższy czas pracy dla użytkowników pracujących na długich zmianach. Inteligentne zarządzanie energią.

Wskaźnik stanu naładowania i pozostałego czasu pracy.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 490,
    images: ['/images/products/zebra-battery-tc52.jpg'],
    tags: ['magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Pojemność', value: '7000 mAh' },
      { name: 'Napięcie', value: '3.85V' },
      { name: 'Technologia', value: 'Li-Ion PowerPrecision+' },
      { name: 'Kompatybilność', value: 'TC52, TC52x, TC57, TC57x' },
      { name: 'Funkcje', value: 'Wskaźnik stanu, diagnostyka' },
    ],
    applications: ['Praca na długich zmianach', 'Praca w terenie'],
    compatibleAccessories: ['zebra-tc52x', 'zebra-tc57x'],
    downloads: [],
    createdAt: '2023-02-01',
  },
  {
    id: 'zebra-cradle-tc52',
    slug: 'zebra-stacja-dokujaca-tc52',
    name: 'Stacja dokująca Zebra TC52/TC57 (5-stanowiskowa)',
    shortDescription: '5-portowa stacja ładowania z Ethernet',
    description: `Stacja dokująca Zebra do jednoczesnego ładowania 5 terminali TC52/TC57 z funkcją komunikacji Ethernet.

Idealna do stanowisk dystrybucji urządzeń i nocnego ładowania floty terminali.

Możliwość łączenia wielu stacji dla dużych instalacji.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 1890,
    images: ['/images/products/zebra-cradle-tc52.jpg'],
    tags: ['magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Liczba stanowisk', value: '5' },
      { name: 'Kompatybilność', value: 'TC52, TC52x, TC57, TC57x' },
      { name: 'Funkcje', value: 'Ładowanie, Ethernet' },
      { name: 'Zasilanie', value: 'Zasilacz w zestawie' },
    ],
    applications: ['Ładowanie floty', 'Dystrybucja urządzeń', 'Stanowisko IT'],
    compatibleAccessories: ['zebra-tc52x', 'zebra-tc57x'],
    downloads: [],
    createdAt: '2023-03-01',
  },
  {
    id: 'zebra-stand-ds22',
    slug: 'zebra-podstawka-ds22',
    name: 'Podstawka Zebra do skanerów DS22xx',
    shortDescription: 'Ergonomiczna podstawka hands-free',
    description: `Podstawka Zebra umożliwiająca pracę ze skanerem DS2208/DS2278 w trybie hands-free.

Stabilna konstrukcja i możliwość regulacji kąta nachylenia. Idealna do stanowisk kasowych.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 89,
    images: ['/images/products/zebra-stand-ds22.jpg'],
    tags: ['retail'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Kompatybilność', value: 'DS2208, DS2278' },
      { name: 'Tryb pracy', value: 'Hands-free / prezentacyjny' },
      { name: 'Regulacja', value: 'Kąt nachylenia' },
      { name: 'Materiał', value: 'Tworzywo ABS' },
    ],
    applications: ['Stanowisko kasowe', 'Punkt obsługi klienta'],
    compatibleAccessories: ['zebra-ds2208', 'zebra-ds2278'],
    downloads: [],
    createdAt: '2022-06-01',
  },
  {
    id: 'zebra-charger-4slot',
    slug: 'zebra-ladowarka-4-baterie',
    name: 'Ładowarka 4-stanowiskowa do baterii TC/MC',
    shortDescription: 'Ładowarka do 4 baterii terminali Zebra',
    description: `Ładowarka Zebra do jednoczesnego ładowania 4 baterii terminali serii TC i MC.

Indywidualne wskaźniki LED dla każdego stanowiska. Szybkie ładowanie i diagnostyka baterii.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 590,
    images: ['/images/products/zebra-charger-4slot.jpg'],
    tags: ['magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Liczba stanowisk', value: '4 baterie' },
      { name: 'Kompatybilność', value: 'TC52, TC57, MC3300 i inne' },
      { name: 'Wskaźniki', value: 'LED indywidualne' },
      { name: 'Zasilanie', value: 'Zasilacz w zestawie' },
    ],
    applications: ['Ładowanie baterii zapasowych', 'Wymiana na gorąco'],
    compatibleAccessories: [],
    downloads: [],
    createdAt: '2022-08-01',
  },
  {
    id: 'zebra-antenna-an440',
    slug: 'zebra-antena-rfid-an440',
    name: 'Antena RFID Zebra AN440',
    shortDescription: 'Antena RFID UHF do czytników stacjonarnych',
    description: `Antena RFID Zebra AN440 do czytników stacjonarnych FX7500 i FX9600.

Szeroki kąt odczytu idealny do bramek i punktów kontrolnych. Wytrzymała konstrukcja przemysłowa.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 890,
    images: ['/images/products/zebra-antenna-an440.jpg'],
    tags: ['magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Typ', value: 'Antena RFID UHF' },
      { name: 'Zysk', value: '6 dBiC' },
      { name: 'Kąt odczytu', value: 'Szeroki' },
      { name: 'Kompatybilność', value: 'FX7500, FX9600' },
      { name: 'Złącze', value: 'RP-TNC' },
    ],
    applications: ['Bramki RFID', 'Punkty kontrolne', 'Stacjonarne odczyty'],
    compatibleAccessories: ['zebra-fx7500', 'zebra-fx9600'],
    downloads: [],
    createdAt: '2022-04-01',
  },
]

// ============================================
// EXPORT - WSZYSTKIE PRODUKTY
// ============================================

export const products: Product[] = [
  ...desktopPrinters,
  ...industrialLightPrinters,
  ...industrialPrinters,
  ...mobilePrinters,
  ...scanners,
  ...mobileComputers,
  ...rfidProducts,
  ...accessories,
]

// Helper do pobrania produktu po slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

// Helper do filtrowania produktów
export function filterProducts(params: {
  categoryId?: string
  manufacturerId?: string
  tags?: ProductTag[]
  search?: string
  isNew?: boolean
  sortBy?: 'popularity' | 'price-asc' | 'price-desc' | 'newest'
}): Product[] {
  let filtered = [...products]

  if (params.categoryId) {
    filtered = filtered.filter(p => p.categoryId === params.categoryId)
  }

  if (params.manufacturerId) {
    filtered = filtered.filter(p => p.manufacturerId === params.manufacturerId)
  }

  if (params.tags && params.tags.length > 0) {
    filtered = filtered.filter(p =>
      params.tags!.some(tag => p.tags.includes(tag))
    )
  }

  if (params.search) {
    const searchLower = params.search.toLowerCase()
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchLower) ||
      p.shortDescription.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    )
  }

  if (params.isNew) {
    filtered = filtered.filter(p => p.isNew)
  }

  // Sortowanie
  switch (params.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => (a.priceFrom || 0) - (b.priceFrom || 0))
      break
    case 'price-desc':
      filtered.sort((a, b) => (b.priceFrom || 0) - (a.priceFrom || 0))
      break
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'popularity':
    default:
      filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
  }

  return filtered
}

// Helper do pobrania bestsellerów
export function getBestsellers(limit: number = 6): Product[] {
  return products.filter(p => p.isBestseller).slice(0, limit)
}

// Helper do pobrania nowych produktów
export function getNewProducts(limit: number = 4): Product[] {
  return products.filter(p => p.isNew).slice(0, limit)
}

// Helper do pobrania kategorii po ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

// Helper do pobrania producenta po ID
export function getManufacturerById(id: string): Manufacturer | undefined {
  return manufacturers.find(m => m.id === id)
}

// Helper do pobrania produktów po kategorii
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.categoryId === categoryId)
}

// Helper do zliczenia produktów w kategorii
export function countProductsInCategory(categoryId: string): number {
  return products.filter(p => p.categoryId === categoryId).length
}
