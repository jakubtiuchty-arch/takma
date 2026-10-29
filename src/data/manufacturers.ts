/**
 * Producenci — wydzielone z `products.ts`, żeby komponenty klienckie (kafel
 * produktu, nagłówek) nie ciągnęły za sobą całego katalogu. Sam katalog waży
 * kilka megabajtów i trafiał do bundle'a każdej strony przez jeden helper.
 *
 * `products.ts` re-eksportuje oba symbole, więc stare importy działają dalej.
 */

export interface Manufacturer {
  id: string
  slug: string
  name: string
  logo: string
  seoTitle?: string
  seoDescription?: string
}

export const manufacturers: Manufacturer[] = [
  { id: 'sunmi', slug: 'sunmi', name: 'SUNMI', logo: '/images/manufacturers/sunmi.svg', seoTitle: 'SUNMI — terminale, komputery POS, drukarki POS | TAKMA', seoDescription: 'SUNMI do magazynu, sklepu i gastronomii: kolektory L, terminale V3 z drukarką, komputery POS T3 i drukarki POS NT220 i NT320. Europejskie PN, ceny i akcesoria.' },
  { id: 'bluebird', slug: 'bluebird', name: 'Bluebird', logo: '/images/manufacturers/bluebird.svg', seoTitle: 'Bluebird — terminale mobilne, tablety i akcesoria | TAKMA', seoDescription: 'Terminale mobilne i tablety Bluebird z Androidem: terminale dotykowe, z klawiaturą, z UHF RFID i do strefy Ex oraz tablety T30 i T10. PN, ceny i akcesoria.' },
  { id: 'proglove', slug: 'proglove', name: 'ProGlove', logo: '/images/manufacturers/proglove.svg', seoTitle: 'ProGlove — skanery noszone na dłoni i akcesoria | TAKMA', seoDescription: 'Skanery kodów noszone na dłoni ProGlove: LEO, MARK Basic, MARK 2, MARK 3, MARK Display i MAI. Mocowania, stacje ładujące i Gateway. PN, ceny i dostępność.' },
  { id: 'bartender', slug: 'bartender', name: 'BarTender', logo: '/images/manufacturers/bartender.svg', seoTitle: 'BarTender — program do etykiet Seagull Software | TAKMA', seoDescription: 'BarTender firmy Seagull Software: program do projektowania i drukowania etykiet w edycjach Starter, Professional, Automation, Enterprise i Cloud. Licencje elektroniczne, ceny netto.' },
  { id: 'loftware', slug: 'loftware', name: 'Loftware', logo: '/images/manufacturers/loftware.svg', seoTitle: 'Loftware NiceLabel — program do etykiet w chmurze | TAKMA', seoDescription: 'Loftware Cloud (NiceLabel): subskrypcje Designer i Essentials do projektowania i drukowania etykiet w chmurze oraz Business na zapytanie. Licencje elektroniczne, ceny netto.' },
  { id: 'socket-mobile', slug: 'socket-mobile', name: 'Socket Mobile', logo: '/images/manufacturers/socket-mobile.svg', seoTitle: 'Socket Mobile — skanery Bluetooth dla służby zdrowia | TAKMA', seoDescription: 'Kompaktowe skanery kodów Socket Mobile DuraScan D745 i D765 dla służby zdrowia: tworzywo klasy medycznej, IP54, Bluetooth do iOS, Androida i Windows. PN, ceny i dostępność.' },
  { id: 'cipherlab', slug: 'cipherlab', name: 'CipherLab', logo: '/images/manufacturers/cipherlab.webp', seoTitle: 'CipherLab — terminale Android i akcesoria', seoDescription: 'Terminale mobilne CipherLab do sklepu, magazynu i logistyki. Porównaj konfiguracje RS i RK, ceny, dostępność oraz zgodne wyposażenie.' },
  { id: 'unitech', slug: 'unitech', name: 'Unitech', logo: '/images/manufacturers/unitech.svg', seoTitle: 'Unitech — terminale mobilne, czytniki RFID i akcesoria | TAKMA', seoDescription: 'Terminale Unitech EA530 i EA660 z Androidem oraz czytniki UHF RFID RP300 i RP902 w wersjach europejskich. Ceny netto, stany i zgodne akcesoria.' },
  { id: 'tsl', slug: 'tsl', name: 'TSL', logo: '/images/manufacturers/tsl.webp', seoTitle: 'TSL — czytniki UHF RFID i akcesoria | TAKMA', seoDescription: 'Czytniki RFID TSL 3128, 3138 i 3166 w wersjach europejskich. Porównaj warianty ze skanerem kodów i bez niego. Sprawdź ceny, stany i zgodne akcesoria.' },
  { id: 'brady', slug: 'brady', name: 'Brady', logo: '/images/manufacturers/brady.svg', seoTitle: 'Brady — producent tabletów i akcesoriów | TAKMA', seoDescription: 'Tablety przemysłowe Brady RT710 z Androidem. Sprawdź konfiguracje, ceny i dostępność. Dobierz baterie, stacje oraz klawiatury.' },
  { id: 'bixolon', slug: 'bixolon', name: 'BIXOLON', logo: '/images/manufacturers/bixolon.jpg', seoTitle: 'Drukarki etykiet i akcesoria BIXOLON | TAKMA', seoDescription: 'Biurkowe i przemysłowe drukarki etykiet BIXOLON: termiczne, termotransferowe, linerless i RFID. Porównaj PN, ceny, dostępność oraz zgodne akcesoria.' },
  { id: 'sato', slug: 'sato', name: 'SATO', logo: '/images/partners/logo_sato.jpg', seoTitle: 'Drukarki RFID i akcesoria SATO | TAKMA', seoDescription: 'Drukarki etykiet SATO z UHF RFID oraz zgodne moduły. Wybierz konfigurację, sprawdź ceny i dostępność.' },
  {
    id: 'isiris',
    slug: 'isiris',
    name: 'Isiris',
    logo: '',
    seoTitle: 'Isiris | Mocowania do terminali',
    seoDescription: 'Mocowania Isiris z przyssawką i otworami AMPS. Dobierz osobny uchwyt do modelu terminala.'
  },
  {
    id: 'proclip',
    slug: 'proclip',
    name: 'ProClip',
    logo: '',
    seoTitle: 'ProClip | Stacje pojazdowe i mocowania',
    seoDescription: 'Stacje ładujące i mocowania ProClip do terminali Zebra. Dobierz uchwyt, zasilanie i podstawę do pojazdu.'
  },
  {
    id: 'ram',
    slug: 'ram',
    name: 'RAM Mounts',
    logo: '/images/manufacturers/ram.png',
    seoTitle: 'RAM Mounts | Mocowania i stacje pojazdowe',
    seoDescription: 'Mocowania, stacje pojazdowe i zasilacze RAM Mounts. Dobierz zestaw do terminala i miejsca montażu.'
  },
  {
    id: 'zebra',
    slug: 'zebra',
    name: 'Zebra',
    logo: '/images/partners/logo_zebra.png',
    seoTitle: 'Produkty Zebra Technologies | Autoryzowany partner',
    seoDescription: 'Pełna oferta Zebra Technologies - drukarki etykiet, skanery kodów, terminale mobilne, systemy RFID. TAKMA - autoryzowany partner Zebra w Polsce.'
  },
  {
    id: 'datalogic',
    slug: 'datalogic',
    name: 'Datalogic',
    logo: '/images/partners/logo_datalogic.png',
    seoTitle: 'Produkty Datalogic | Terminale mobilne i skanery',
    seoDescription: 'Terminale mobilne i komputery przenośne Datalogic - Memor, Skorpio. Profesjonalne urządzenia do magazynu, logistyki i handlu. TAKMA - autoryzowany partner.'
  },
  {
    id: 'newland',
    slug: 'newland',
    name: 'Newland',
    logo: '/images/partners/logo_newland.png',
    seoTitle: 'Produkty Newland AIDC | Terminale mobilne i skanery',
    seoDescription: 'Terminale mobilne i kolektory danych Newland AIDC — MT90 Orca, N7 Cachalot, MT93 Megattera. Budżetowa alternatywa dla Zebry. TAKMA — autoryzowany partner AutoID w Polsce.'
  },
  {
    id: 'honeywell',
    slug: 'honeywell',
    name: 'Honeywell',
    logo: '/images/partners/logo_honeywell.png',
    seoTitle: 'Produkty Honeywell | Drukarki etykiet, skanery i terminale',
    seoDescription: 'Drukarki etykiet, skanery kodów i terminale mobilne Honeywell. TAKMA - autoryzowany partner urządzeń AutoID w Polsce.'
  },
  {
    id: 'tsc',
    slug: 'tsc',
    name: 'TSC',
    logo: '/images/partners/logo_tsc.png',
    seoTitle: 'Produkty TSC | Drukarki etykiet przemysłowe i biurkowe',
    seoDescription: 'Drukarki etykiet TSC - modele biurkowe i przemysłowe. Wysoka jakość w przystępnej cenie. TAKMA - autoryzowany partner.'
  },
  {
    id: 'getac',
    slug: 'getac',
    name: 'Getac',
    logo: '/images/manufacturers/getac.svg',
    seoTitle: 'Tablety i laptopy przemysłowe Getac | TAKMA',
    seoDescription: 'Tablety i laptopy przemysłowe Getac z Windows 11 i Androidem 15: fully rugged i rugged, MIL-STD-810H, IP53–IP67, ekrany do pracy na słońcu. TAKMA — partner Getac.'
  },
  {
    id: 'brother',
    slug: 'brother',
    name: 'Brother',
    logo: '/images/partners/brother_logo.png',
    seoTitle: 'Drukarki etykiet Brother | Biurkowe drukarki termiczne TD-4D',
    seoDescription: 'Drukarki etykiet Brother — seria TD-4D: biurkowe drukarki termiczne 4 cale z emulacją ZPL II, 3-letnią gwarancją i BarTender w zestawie. TAKMA — autoryzowany partner AutoID w Polsce.'
  },
  {
    id: 'citizen',
    slug: 'citizen',
    name: 'Citizen',
    logo: '/images/partners/logo_citizen.png',
    seoTitle: 'Drukarki etykiet Citizen | Biurkowe i przemysłowe',
    seoDescription: 'Drukarki etykiet Citizen Systems — kompaktowe drukarki biurkowe i przemysłowe z Ethernet w standardzie, Cross-Emulation ZPL/EPL i certyfikatem ENERGY STAR. TAKMA — autoryzowany partner AutoID w Polsce.'
  },
  {
    id: 'epson',
    slug: 'epson',
    name: 'Epson',
    logo: '/images/partners/logo_epson.png',
    seoTitle: 'Kolorowe drukarki etykiet Epson ColorWorks | Tusze i etykiety',
    seoDescription: 'Epson ColorWorks: kolorowe drukarki etykiet z tuszem pigmentowym CMYK oraz oryginalne tusze SJIC22P i etykiety Premium Matte i High Gloss. TAKMA, partner AutoID w Polsce.'
  },
  {
    id: 'm3-mobile',
    slug: 'm3-mobile',
    name: 'M3 Mobile',
    logo: '/images/partners/logo_m3mobile.png',
    seoTitle: 'Terminale mobilne M3 Mobile | SM24, SM25',
    seoDescription: 'Terminale mobilne M3 Mobile — koreański producent urządzeń enterprise z hot-swap baterii, Wi-Fi 6E i Android 16. SM24 i SM25 do magazynów, retail i logistyki. TAKMA — partner AutoID w Polsce.'
  },
  {
    id: 'magicard',
    slug: 'magicard',
    name: 'Magicard by Brady',
    logo: '/images/partners/logo_magicard.png',
    seoTitle: 'Drukarki kart Magicard by Brady | Identyfikatory PVC',
    seoDescription: 'Drukarki kart Magicard by Brady do personalizacji identyfikatorów i kart PVC — druk Direct-to-Card i retransferowy, zabezpieczenia HoloKote oraz kodowanie kart.'
  },
  {
    id: 'labelmate',
    slug: 'labelmate',
    name: 'Labelmate',
    logo: '/images/partners/logo_labelmate.png',
    seoTitle: 'Nawijarki i odwijaki do etykiet Labelmate | MC-11, CAT-3, UNI-CAT',
    seoDescription: 'Nawijarki i odwijaki do etykiet Labelmate — MC-11, CAT-3 i UNI-CAT do drukarek Zebra, Honeywell i Epson ColorWorks. Rolki do 300 mm, nośnik do 255 mm, dwa lata gwarancji.'
  },
]

/** Producent po id (np. 'zebra'). */
export function getManufacturerById(id: string): Manufacturer | undefined {
  return manufacturers.find(m => m.id === id)
}
