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
    seoTitle: 'Produkty Getac | Tablety i laptopy rugged',
    seoDescription: 'Tablety i laptopy przemysłowe Getac — fully rugged z MIL-STD-810H, IP65+, ekrany LumiBond do pracy na słońcu. TAKMA — autoryzowany partner.'
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
    id: 'sunmi',
    slug: 'sunmi',
    name: 'Sunmi',
    logo: '/images/partners/logo_sunmi.png',
    seoTitle: 'Sunmi — terminale POS i kolektory danych z Androidem | TAKMA',
    seoDescription: 'Urządzenia Sunmi: terminale POS z wbudowaną drukarką, stacjonarne stanowiska kasowe i kolektory danych L3 oraz L2s Pro. Android z GMS, trzy lata gwarancji, ceny netto B2B.'
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
