import type { Product, ProductSpecification } from './products'

type Accessory = {
  id: string
  slug: string
  name: string
  pn: string
  description: string
  specifications: ProductSpecification[]
  image?: string
}

// Zgodność: katalog Desktop Printers Accessories Guide, str. 6, oraz
// katalog akcesoriów modelu 691484 w Zebra Solutions Pathway (15.10.2026).
// Brak statycznych cen i stanów: każdy PN korzysta z /api/stock.
const additionalAccessories: Accessory[] = [
  {
    id: 'zebra-media-core-adapters-zd621r',
    slug: 'zebra-adaptery-gilz-p1080383-022',
    name: 'Adaptery gilz Zebra ZD621t / ZD621R — P1080383-022',
    pn: 'P1080383-022',
    description: 'Adaptery Zebra P1080383-022 umożliwiają założenie rolek etykiet na gilzach o średnicy wewnętrznej 38,1, 50,8 lub 76,2 mm. Zestaw zawiera po dwa adaptery każdego rozmiaru. Maksymalna średnica całej rolki w ZD621R nadal wynosi 127 mm.',
    specifications: [{ name: 'Średnice wewnętrzne gilz', value: '38,1 / 50,8 / 76,2 mm' }, { name: 'Zawartość zestawu', value: 'Po 2 adaptery każdego rozmiaru — 6 sztuk' }],
    image: 'P1080383-022.png',
  },
  {
    id: 'zebra-attached-power-supply-zd621r',
    slug: 'zebra-podstawa-zasilacz-p1080383-234',
    name: 'Podstawa z zasilaczem Zebra ZD621t / ZD621R — P1080383-234',
    pn: 'P1080383-234',
    description: 'Podstawa Zebra P1080383-234 mocuje zasilacz pod drukarką ZD621t lub ZD621R. Ułatwia ustawienie urządzenia na stanowisku. Zestaw obejmuje zasilacz i jest alternatywą dla standardowego zasilacza zewnętrznego. Nie jest podstawą do baterii.',
    specifications: [{ name: 'Typ', value: 'Podstawa z zasilaczem sieciowym' }, { name: 'Zastosowanie', value: 'Montaż zasilacza pod drukarką' }],
    image: 'P1080383-234.png',
  },
  {
    id: 'zebra-mounting-adapter-zd621r',
    slug: 'zebra-adapter-montazowy-p1080383-037',
    name: 'Adapter montażowy Zebra ZD621t / ZD621R — P1080383-037',
    pn: 'P1080383-037',
    image: 'P1080383-037.jpg',
    description: 'Adapter Zebra P1080383-037 pozwala zamontować ZD621t lub ZD621R w miejscu drukarki termotransferowej GK/GX. Wykorzystuje rozstaw otworów montażowych poprzedniego urządzenia. Przed montażem sprawdź miejsce na otwieranie pokrywy i podłączenie przewodów.',
    specifications: [{ name: 'Rozstaw montażowy', value: 'Drukarki termotransferowe GK/GX' }, { name: 'Typ', value: 'Adapter montażowy' }],
  },
  {
    id: 'zebra-printkiosk-cc600-zd621r',
    slug: 'zebra-uchwyt-printkiosk-cc600-brkt-dpa-sk1-02',
    name: 'Uchwyt Zebra PrintKiosk z CC600 — BRKT-DPA-SK1-02',
    pn: 'BRKT-DPA-SK1-02',
    image: 'BRKT-DPA-SK1-02.jpg',
    description: 'Uchwyt Zebra BRKT-DPA-SK1-02 służy do budowy stanowiska PrintKiosk z urządzeniem CC600 i drukarką ZD621R. CC600 oraz drukarka są sprzedawane osobno. Uchwyt nie pasuje do konfiguracji z CC6000; ta wymaga BRKT-DPA-SK1-01.',
    specifications: [{ name: 'Urządzenie stanowiskowe', value: 'Zebra CC600 — sprzedawane osobno' }, { name: 'Typ', value: 'Uchwyt PrintKiosk' }],
  },
  {
    id: 'zebra-printkiosk-cc6000-zd621r',
    slug: 'zebra-uchwyt-printkiosk-cc6000-brkt-dpa-sk1-01',
    name: 'Uchwyt Zebra PrintKiosk z CC6000 — BRKT-DPA-SK1-01',
    pn: 'BRKT-DPA-SK1-01',
    image: 'BRKT-DPA-SK1-01.png',
    description: 'Uchwyt Zebra BRKT-DPA-SK1-01 służy do budowy stanowiska PrintKiosk z urządzeniem CC6000 i drukarką ZD621R. CC6000 oraz drukarka są sprzedawane osobno. Do konfiguracji z CC600 wybierz BRKT-DPA-SK1-02.',
    specifications: [{ name: 'Urządzenie stanowiskowe', value: 'Zebra CC6000 — sprzedawane osobno' }, { name: 'Typ', value: 'Uchwyt PrintKiosk' }],
  },
  {
    id: 'zebra-case-zd621r',
    slug: 'zebra-futeral-zd621r-sg-dm-case2-01',
    name: 'Futerał Zebra ZD621R z podstawą baterii — SG-DM-CASE2-01',
    pn: 'SG-DM-CASE2-01',
    description: 'Futerał Zebra SG-DM-CASE2-01 służy do przenoszenia drukarki termotransferowej ZD621R wyposażonej w podstawę baterii. Nie zawiera drukarki, baterii ani podstawy. Produkt jest wycofywany; dostępność zależy od pozostałego zapasu.',
    specifications: [{ name: 'Wymagana konfiguracja', value: 'Drukarka z podstawą baterii P1080383-600' }, { name: 'Zawartość zestawu', value: 'Futerał; drukarka, bateria i podstawa sprzedawane osobno' }],
    image: 'SG-DM-CASE2-01.png',
  },
  {
    id: 'zebra-cleaning-pens-zd621r',
    slug: 'zebra-pisaki-czyszczace-105950-035',
    name: 'Pisaki do czyszczenia głowicy Zebra — 105950-035',
    pn: '105950-035',
    description: 'Zestaw Zebra 105950-035 zawiera 12 pisaków do czyszczenia głowic drukujących. Służy do konserwacji drukarki ZD621R i innych zgodnych drukarek Zebra. Wyłącz drukarkę i zaczekaj, aż głowica ostygnie. Czyść zgodnie z instrukcją urządzenia.',
    specifications: [{ name: 'Zawartość opakowania', value: '12 pisaków czyszczących' }, { name: 'Zastosowanie', value: 'Czyszczenie głowicy drukującej' }],
    image: '105950-035.png',
  },
  {
    id: 'zebra-cleaning-swabs-zd621r',
    slug: 'zebra-patyczki-czyszczace-47362',
    name: 'Patyczki do czyszczenia drukarki Zebra — 47362',
    pn: '47362',
    description: 'Zestaw konserwacyjny Zebra 47362 zawiera 6 nasączonych patyczków z piankową końcówką. Służy do czyszczenia zgodnych elementów drukarki. Przed użyciem wyłącz drukarkę i postępuj zgodnie z instrukcją konserwacji ZD621R.',
    specifications: [{ name: 'Zawartość opakowania', value: '6 nasączonych patyczków z piankową końcówką' }, { name: 'Zastosowanie', value: 'Konserwacja drukarki' }],
    image: '47362.jpg',
  },
  {
    id: 'zebra-usb-cable-zd621r',
    slug: 'zebra-przewod-usb-105850-006',
    name: 'Przewód USB A–B Zebra 1,83 m — 105850-006',
    pn: '105850-006',
    description: 'Przewód Zebra 105850-006 łączy drukarkę ZD621R z portem USB komputera. Ma złącza USB A i USB B oraz długość 1,83 m. Może służyć jako przewód zapasowy. Przewód USB jest już dołączony do opisanych wariantów drukarki.',
    specifications: [{ name: 'Złącza', value: 'USB A — USB B' }, { name: 'Długość', value: '1,83 m (6 stóp)' }],
    image: '105850-006.png',
  },
  {
    id: 'zebra-serial-cable-zd621r',
    slug: 'zebra-przewod-rs232-g105950-054',
    name: 'Przewód RS-232 Zebra 1,83 m — G105950-054',
    pn: 'G105950-054',
    description: 'Przewód Zebra G105950-054 łączy port szeregowy drukarki z urządzeniem nadrzędnym. Ma złącza DB9–DB9, połączenie typu null modem i długość 1,83 m. Przed zakupem sprawdź zgodność portu i ustawienia transmisji.',
    specifications: [{ name: 'Złącza', value: 'DB9 — DB9, null modem' }, { name: 'Długość', value: '1,83 m (6 stóp)' }],
    image: 'G105950-054.jpg',
  },
]

export const zd621rAdditionalAccessories: Product[] = additionalAccessories.map(item => ({
  id: item.id,
  slug: item.slug,
  name: item.name,
  seoTitle: item.name,
  shortDescription: item.description.split('. ').slice(0, 2).join('. ') + '.',
  description: item.description,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  images: item.image ? [`/images/products/${item.image}`] : [],
  imageDescriptions: item.image ? [item.name] : [],
  tags: ['magazyn', 'logistyka'],
  availability: 'unavailable',
  isNew: false,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: item.pn },
    { name: 'Kompatybilność', value: 'Zebra ZD621R' },
    ...item.specifications,
  ],
  applications: [],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-zd621r'],
  downloads: [],
  createdAt: '2026-10-15',
}))

export const zd621rAccessoryIds = [
  'zebra-module-wifi-zd621t',
  'zebra-cutter-zd621t',
  'zebra-dispenser-zd621t',
  'zebra-media-core-adapters-zd621r',
  'zebra-battery-zd420',
  'zebra-battery-module-zd420t',
  'zebra-case-zd621r',
  'zebra-power-supply-zd421-zd621',
  'zebra-attached-power-supply-zd621r',
  'zebra-mounting-adapter-zd621r',
  'zebra-printkiosk-cc600-zd621r',
  'zebra-printkiosk-cc6000-zd621r',
  'zebra-keyboard-zkdu',
  'zebra-usb-cable-zd621r',
  'zebra-serial-cable-zd621r',
  'zebra-cleaning-pens-zd621r',
  'zebra-cleaning-swabs-zd621r',
  'zebra-printhead-zd621t-203',
  'zebra-printhead-zd621t-300',
  'zebra-platen-roller-zd621t-203',
  'zebra-platen-roller-zd621t-300',
  'zebra-module-ethernet-rs232-zd621',
]
