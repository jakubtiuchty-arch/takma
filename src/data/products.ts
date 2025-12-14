// MOCK DATA - Do zastąpienia prawdziwym API w przyszłości

export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  categoryId: string
  manufacturerId: string
  priceFrom?: number // opcjonalna cena "od"
  images: string[] // placeholder URLs
  tags: ProductTag[]
  availability: 'available' | 'on-order' | 'unavailable'
  isNew: boolean
  isBestseller: boolean
  specifications: ProductSpecification[]
  applications: string[]
  compatibleAccessories: string[] // IDs produktów
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
  url: string // placeholder
  size: string
}

export type ProductTag = 'magazyn' | 'retail' | 'produkcja' | 'logistyka' | 'healthcare' | 'outdoor'

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  productCount: number
}

export interface Manufacturer {
  id: string
  slug: string
  name: string
  logo: string
}

// Kategorie produktów AutoID
export const categories: Category[] = [
  {
    id: 'drukarki-etykiet',
    slug: 'drukarki-etykiet',
    name: 'Drukarki etykiet',
    description: 'Drukarki termiczne i termotransferowe do etykiet kodów kreskowych',
    icon: 'printer',
    productCount: 24,
  },
  {
    id: 'skanery-kodow',
    slug: 'skanery-kodow',
    name: 'Skanery kodów',
    description: 'Skanery ręczne, prezentacyjne i przemysłowe do kodów 1D i 2D',
    icon: 'scan',
    productCount: 32,
  },
  {
    id: 'terminale-mobilne',
    slug: 'terminale-mobilne',
    name: 'Terminale mobilne',
    description: 'Komputery mobilne i kolektory danych do pracy w terenie',
    icon: 'smartphone',
    productCount: 18,
  },
  {
    id: 'rfid',
    slug: 'rfid',
    name: 'RFID',
    description: 'Czytniki, anteny i tagi RFID do automatycznej identyfikacji',
    icon: 'radio',
    productCount: 15,
  },
  {
    id: 'etykiety-tasmy',
    slug: 'etykiety-tasmy',
    name: 'Etykiety i taśmy',
    description: 'Materiały eksploatacyjne do druku etykiet',
    icon: 'tag',
    productCount: 45,
  },
  {
    id: 'akcesoria',
    slug: 'akcesoria',
    name: 'Akcesoria',
    description: 'Baterie, ładowarki, uchwyty i inne akcesoria',
    icon: 'package',
    productCount: 60,
  },
]

// Producenci
export const manufacturers: Manufacturer[] = [
  { id: 'zebra', slug: 'zebra', name: 'Zebra Technologies', logo: '/images/manufacturers/zebra.svg' },
  { id: 'honeywell', slug: 'honeywell', name: 'Honeywell', logo: '/images/manufacturers/honeywell.svg' },
  { id: 'datalogic', slug: 'datalogic', name: 'Datalogic', logo: '/images/manufacturers/datalogic.svg' },
  { id: 'tsc', slug: 'tsc', name: 'TSC', logo: '/images/manufacturers/tsc.svg' },
  { id: 'sato', slug: 'sato', name: 'SATO', logo: '/images/manufacturers/sato.svg' },
  { id: 'citizen', slug: 'citizen', name: 'Citizen', logo: '/images/manufacturers/citizen.svg' },
]

// Mock produkty - różnorodne urządzenia AutoID
export const products: Product[] = [
  // Drukarki etykiet
  {
    id: 'zd621t',
    slug: 'zebra-zd621t',
    name: 'Zebra ZD621t',
    shortDescription: 'Drukarka termotransferowa klasy desktop z 4" szerokością druku',
    description: `Zebra ZD621t to zaawansowana drukarka termotransferowa klasy desktop, oferująca niezawodność i wszechstronność dla wymagających środowisk pracy.

Dzięki rozdzielczości do 300 dpi i prędkości druku do 203 mm/s, drukarka ta idealnie sprawdza się w aplikacjach wymagających wysokiej jakości etykiet – od logistyki po oznaczanie produktów.

Wyposażona w szereg interfejsów komunikacyjnych (USB, Ethernet, Bluetooth, Wi-Fi) oraz intuicyjny kolorowy wyświetlacz, ZD621t zapewnia łatwą integrację i obsługę.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 2890,
    images: ['/images/products/placeholder.svg'],
    tags: ['magazyn', 'logistyka', 'produkcja'],
    availability: 'available',
    isNew: true,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203/300 dpi' },
      { name: 'Szerokość druku', value: '108 mm (4")' },
      { name: 'Prędkość druku', value: 'do 203 mm/s' },
      { name: 'Interfejsy', value: 'USB, Ethernet, Bluetooth, Wi-Fi (opcja)' },
      { name: 'Wyświetlacz', value: 'Kolorowy LCD 2.7"' },
    ],
    applications: ['Etykiety wysyłkowe', 'Oznaczanie produktów', 'Etykiety magazynowe', 'Etykiety z kodem kreskowym'],
    compatibleAccessories: ['tasma-woskowa-110', 'etykiety-termo-100x50'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.2 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '5.8 MB' },
    ],
    createdAt: '2024-01-15',
  },
  {
    id: 'tsc-te210',
    slug: 'tsc-te210',
    name: 'TSC TE210',
    shortDescription: 'Kompaktowa drukarka etykiet do małych i średnich wolumenów',
    description: `TSC TE210 to ekonomiczna drukarka termiczna i termotransferowa idealna dla firm poszukujących niezawodnego rozwiązania do druku etykiet przy ograniczonym budżecie.

Kompaktowa konstrukcja i prosta obsługa czynią ją idealnym wyborem do biur, małych magazynów i punktów sprzedaży.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'tsc',
    priceFrom: 890,
    images: ['/images/products/placeholder.svg'],
    tags: ['retail', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Szerokość druku', value: '108 mm' },
      { name: 'Prędkość druku', value: 'do 152 mm/s' },
      { name: 'Interfejsy', value: 'USB, Ethernet (opcja)' },
    ],
    applications: ['Etykiety cenowe', 'Oznaczanie produktów', 'Etykiety adresowe'],
    compatibleAccessories: ['tasma-woskowa-110'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '0.8 MB' },
    ],
    createdAt: '2023-08-10',
  },
  {
    id: 'zebra-zt411',
    slug: 'zebra-zt411',
    name: 'Zebra ZT411',
    shortDescription: 'Przemysłowa drukarka etykiet do intensywnej eksploatacji',
    description: `Zebra ZT411 to przemysłowa drukarka etykiet zaprojektowana do pracy w wymagających środowiskach produkcyjnych i magazynowych.

Metalowa konstrukcja, wysoka wydajność i zaawansowane opcje łączności sprawiają, że jest idealnym wyborem dla firm o dużych wolumenach druku.`,
    categoryId: 'drukarki-etykiet',
    manufacturerId: 'zebra',
    priceFrom: 5890,
    images: ['/images/products/placeholder.svg'],
    tags: ['produkcja', 'magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Metoda druku', value: 'Termotransferowa / termiczna' },
      { name: 'Rozdzielczość', value: '203/300/600 dpi' },
      { name: 'Szerokość druku', value: '104 mm' },
      { name: 'Prędkość druku', value: 'do 356 mm/s' },
      { name: 'Interfejsy', value: 'USB, Ethernet, Serial, Bluetooth, Wi-Fi' },
    ],
    applications: ['Etykiety produkcyjne', 'Oznaczanie palet', 'Etykiety wysyłkowe', 'Etykiety do warunków ekstremalnych'],
    compatibleAccessories: ['tasma-zywiczna-110', 'etykiety-pp-100x50'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.5 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '8.2 MB' },
    ],
    createdAt: '2023-03-20',
  },

  // Skanery kodów
  {
    id: 'ds2208',
    slug: 'zebra-ds2208',
    name: 'Zebra DS2208',
    shortDescription: 'Uniwersalny skaner 2D do codziennych zastosowań',
    description: `Zebra DS2208 to wszechstronny skaner kodów 2D, który zapewnia szybkie i precyzyjne skanowanie kodów kreskowych 1D i 2D, w tym kodów z ekranów urządzeń mobilnych.

Idealny do handlu detalicznego, obsługi klienta i lekkich zastosowań przemysłowych.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'zebra',
    priceFrom: 590,
    images: ['/images/products/placeholder.svg'],
    tags: ['retail', 'magazyn'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Typ skanera', value: 'Imager 2D' },
      { name: 'Skanowane kody', value: '1D, 2D, kody z ekranów' },
      { name: 'Interfejsy', value: 'USB, RS-232' },
      { name: 'Zasięg skanowania', value: 'do 36.8 cm' },
      { name: 'Odporność na upadki', value: '1.5 m na beton' },
    ],
    applications: ['Kasy sklepowe', 'Inwentaryzacja', 'Obsługa dokumentów', 'Weryfikacja produktów'],
    compatibleAccessories: ['podstawka-ds22xx'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '0.9 MB' },
    ],
    createdAt: '2022-11-05',
  },
  {
    id: 'honeywell-voyager-1472g',
    slug: 'honeywell-voyager-1472g',
    name: 'Honeywell Voyager 1472g',
    shortDescription: 'Bezprzewodowy skaner 2D z bazą ładującą',
    description: `Honeywell Voyager 1472g to bezprzewodowy skaner kodów 2D, który łączy mobilność z wysoką wydajnością skanowania.

Zasięg bezprzewodowy do 100 m i bateria wystarczająca na ponad 65 000 skanów sprawiają, że jest idealny do zastosowań wymagających swobody ruchu.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'honeywell',
    priceFrom: 1290,
    images: ['/images/products/placeholder.svg'],
    tags: ['retail', 'magazyn', 'logistyka'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Typ skanera', value: 'Imager 2D bezprzewodowy' },
      { name: 'Skanowane kody', value: '1D, 2D, PDF417, QR' },
      { name: 'Łączność', value: 'Bluetooth, USB (baza)' },
      { name: 'Zasięg bezprzewodowy', value: 'do 100 m' },
      { name: 'Bateria', value: '65 000 skanów' },
    ],
    applications: ['Handel detaliczny', 'Inwentaryzacja mobilna', 'Magazyn', 'Logistyka'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.1 MB' },
    ],
    createdAt: '2024-02-01',
  },
  {
    id: 'datalogic-gryphon-4500',
    slug: 'datalogic-gryphon-gd4520',
    name: 'Datalogic Gryphon GD4520',
    shortDescription: 'Skaner prezentacyjny 2D na ladę kasową',
    description: `Datalogic Gryphon GD4520 to zaawansowany skaner prezentacyjny zaprojektowany do intensywnego użytkowania w punktach sprzedaży.

Technologia Motionix™ automatycznie wykrywa ruch i aktywuje skanowanie, zapewniając błyskawiczną obsługę klientów.`,
    categoryId: 'skanery-kodow',
    manufacturerId: 'datalogic',
    priceFrom: 890,
    images: ['/images/products/placeholder.svg'],
    tags: ['retail'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Typ skanera', value: 'Prezentacyjny 2D' },
      { name: 'Skanowane kody', value: '1D, 2D, GS1, QR' },
      { name: 'Interfejsy', value: 'USB, RS-232' },
      { name: 'Technologia', value: 'Motionix™ auto-sensing' },
      { name: 'Odporność IP', value: 'IP52' },
    ],
    applications: ['Kasy sklepowe', 'Apteki', 'Punkty obsługi klienta'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.0 MB' },
    ],
    createdAt: '2023-06-15',
  },

  // Terminale mobilne
  {
    id: 'tc52x',
    slug: 'zebra-tc52x',
    name: 'Zebra TC52x',
    shortDescription: 'Wytrzymały terminal mobilny z Androidem dla przedsiębiorstw',
    description: `Zebra TC52x to wszechstronny terminal mobilny klasy enterprise, który łączy funkcjonalność smartfona z wytrzymałością urządzenia przemysłowego.

System Android, potężny procesor i zaawansowane możliwości skanowania czynią go idealnym narzędziem dla pracowników mobilnych.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'zebra',
    priceFrom: 4590,
    images: ['/images/products/placeholder.svg'],
    tags: ['magazyn', 'logistyka', 'retail'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'System operacyjny', value: 'Android 11' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '5" Full HD' },
      { name: 'Pamięć', value: '4GB RAM / 32GB Flash' },
      { name: 'Skaner', value: 'SE4720 Imager 2D' },
      { name: 'Bateria', value: '4150 mAh' },
      { name: 'Odporność', value: 'IP67, upadki z 1.5m' },
    ],
    applications: ['Zarządzanie magazynem', 'Inwentaryzacja', 'Dostawy', 'Obsługa w terenie'],
    compatibleAccessories: ['bateria-tc52-extended', 'uchwyt-samochodowy-tc52'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '2.1 MB' },
      { name: 'Instrukcja obsługi', type: 'manual', url: '#', size: '12.5 MB' },
    ],
    createdAt: '2023-01-10',
  },
  {
    id: 'honeywell-ct60xp',
    slug: 'honeywell-ct60xp',
    name: 'Honeywell CT60 XP',
    shortDescription: 'Terminal mobilny do ekstremalnych warunków',
    description: `Honeywell CT60 XP to wytrzymały komputer mobilny zaprojektowany do pracy w najtrudniejszych warunkach środowiskowych.

Klasa odporności IP67/IP65 i możliwość pracy w temperaturach od -20°C do +50°C czynią go idealnym wyborem dla logistyki i przemysłu.`,
    categoryId: 'terminale-mobilne',
    manufacturerId: 'honeywell',
    priceFrom: 5290,
    images: ['/images/products/placeholder.svg'],
    tags: ['logistyka', 'produkcja', 'outdoor'],
    availability: 'on-order',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'System operacyjny', value: 'Android 11' },
      { name: 'Procesor', value: 'Qualcomm Snapdragon 660' },
      { name: 'Wyświetlacz', value: '4.7" HD' },
      { name: 'Pamięć', value: '4GB RAM / 32GB Flash' },
      { name: 'Skaner', value: 'FlexRange Imager' },
      { name: 'Odporność', value: 'IP67/IP65, MIL-STD-810G' },
      { name: 'Temperatura pracy', value: '-20°C do +50°C' },
    ],
    applications: ['Transport i logistyka', 'Magazyn chłodniczy', 'Praca na zewnątrz', 'Przemysł'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.8 MB' },
    ],
    createdAt: '2024-01-20',
  },

  // RFID
  {
    id: 'zebra-fx9600',
    slug: 'zebra-fx9600',
    name: 'Zebra FX9600',
    shortDescription: 'Stacjonarny czytnik RFID o wysokiej wydajności',
    description: `Zebra FX9600 to stacjonarny czytnik RFID UHF oferujący najwyższą wydajność odczytu i elastyczność konfiguracji.

Obsługa do 32 anten i zaawansowane filtrowanie danych sprawiają, że jest idealny do rozbudowanych instalacji RFID.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 8900,
    images: ['/images/products/placeholder.svg'],
    tags: ['magazyn', 'logistyka', 'produkcja'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Standard', value: 'UHF RFID (EPC Gen2v2)' },
      { name: 'Porty antenowe', value: '4 lub 8 (do 32 z hubem)' },
      { name: 'Moc wyjściowa', value: 'do +33 dBm' },
      { name: 'Interfejsy', value: 'Ethernet, USB, GPIO' },
      { name: 'Prędkość odczytu', value: 'ponad 1100 tagów/s' },
    ],
    applications: ['Bramki RFID', 'Zarządzanie magazynem', 'Kontrola dostępu', 'Śledzenie aktywów'],
    compatibleAccessories: ['antena-rfid-an440', 'antena-rfid-an480'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.4 MB' },
      { name: 'Instrukcja integracji', type: 'manual', url: '#', size: '6.2 MB' },
    ],
    createdAt: '2022-05-15',
  },
  {
    id: 'zebra-rfd40',
    slug: 'zebra-rfd40',
    name: 'Zebra RFD40 RFID Sled',
    shortDescription: 'Przystawka RFID do smartfonów i terminali',
    description: `Zebra RFD40 to uniwersalna przystawka RFID, która zamienia kompatybilny smartfon lub terminal mobilny w wydajny czytnik RFID UHF.

Lekka konstrukcja i ergonomiczny uchwyt zapewniają komfort podczas długotrwałej pracy.`,
    categoryId: 'rfid',
    manufacturerId: 'zebra',
    priceFrom: 3490,
    images: ['/images/products/placeholder.svg'],
    tags: ['magazyn', 'retail', 'logistyka'],
    availability: 'available',
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Standard', value: 'UHF RFID (EPC Gen2v2)' },
      { name: 'Zasięg odczytu', value: 'do 6 m' },
      { name: 'Łączność', value: 'Bluetooth, USB-C' },
      { name: 'Bateria', value: '2280 mAh' },
      { name: 'Kompatybilność', value: 'TC52x, TC57, smartfony' },
    ],
    applications: ['Inwentaryzacja RFID', 'Lokalizacja produktów', 'Zarządzanie aktywami'],
    compatibleAccessories: ['tc52x'],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '1.1 MB' },
    ],
    createdAt: '2024-02-10',
  },

  // Etykiety i taśmy
  {
    id: 'tasma-woskowa-110',
    slug: 'tasma-woskowa-110mm',
    name: 'Taśma woskowa 110mm x 300m',
    shortDescription: 'Ekonomiczna taśma termotransferowa do etykiet papierowych',
    description: `Taśma woskowa o szerokości 110mm to ekonomiczne rozwiązanie do druku etykiet na papierze powlekanym i niepowlekanym.

Idealna do etykiet wysyłkowych, adresowych i magazynowych przy średnich wymaganiach jakościowych.`,
    categoryId: 'etykiety-tasmy',
    manufacturerId: 'zebra',
    priceFrom: 45,
    images: ['/images/products/placeholder.svg'],
    tags: ['magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: true,
    specifications: [
      { name: 'Typ taśmy', value: 'Woskowa (wax)' },
      { name: 'Szerokość', value: '110 mm' },
      { name: 'Długość', value: '300 m' },
      { name: 'Nawój', value: '1" (25mm)' },
      { name: 'Strona barwiąca', value: 'OUT (zewnętrzna)' },
    ],
    applications: ['Etykiety papierowe', 'Etykiety wysyłkowe', 'Etykiety magazynowe'],
    compatibleAccessories: [],
    downloads: [
      { name: 'Karta katalogowa', type: 'datasheet', url: '#', size: '0.3 MB' },
    ],
    createdAt: '2022-01-01',
  },
  {
    id: 'etykiety-termo-100x50',
    slug: 'etykiety-termiczne-100x50',
    name: 'Etykiety termiczne 100x50mm (1000 szt.)',
    shortDescription: 'Etykiety termiczne TOP do druku bez taśmy',
    description: `Etykiety termiczne o wymiarach 100x50mm, przeznaczone do druku bezpośredniego w drukarkach termicznych.

Wysoka jakość druku i dobra odporność na ścieranie. Idealne do etykiet wysyłkowych i magazynowych.`,
    categoryId: 'etykiety-tasmy',
    manufacturerId: 'zebra',
    priceFrom: 38,
    images: ['/images/products/placeholder.svg'],
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

  // Akcesoria
  {
    id: 'bateria-tc52-extended',
    slug: 'bateria-zebra-tc52-extended',
    name: 'Bateria rozszerzona Zebra TC52 (5200mAh)',
    shortDescription: 'Bateria o zwiększonej pojemności do terminali TC52/TC57',
    description: `Oryginalna bateria Zebra o pojemności 5200mAh, zapewniająca znacznie dłuższy czas pracy terminali TC52 i TC57.

Idealna dla użytkowników pracujących na długich zmianach bez dostępu do ładowarki.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 390,
    images: ['/images/products/placeholder.svg'],
    tags: ['magazyn', 'logistyka'],
    availability: 'available',
    isNew: false,
    isBestseller: false,
    specifications: [
      { name: 'Pojemność', value: '5200 mAh' },
      { name: 'Napięcie', value: '3.85V' },
      { name: 'Kompatybilność', value: 'TC52, TC52x, TC57' },
      { name: 'Typ', value: 'Li-Ion PowerPrecision+' },
    ],
    applications: ['Praca na długich zmianach', 'Praca w terenie'],
    compatibleAccessories: ['tc52x'],
    downloads: [],
    createdAt: '2023-02-01',
  },
  {
    id: 'podstawka-ds22xx',
    slug: 'podstawka-zebra-ds22xx',
    name: 'Podstawka do skanerów Zebra DS22xx',
    shortDescription: 'Ergonomiczna podstawka hands-free do skanerów serii DS22xx',
    description: `Podstawka umożliwia pracę ze skanerem w trybie hands-free, zapewniając wygodną prezentację produktów do skanowania.

Stabilna konstrukcja i możliwość regulacji kąta nachylenia.`,
    categoryId: 'akcesoria',
    manufacturerId: 'zebra',
    priceFrom: 89,
    images: ['/images/products/placeholder.svg'],
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
    compatibleAccessories: ['ds2208'],
    downloads: [],
    createdAt: '2022-06-01',
  },
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
      p.shortDescription.toLowerCase().includes(searchLower)
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
