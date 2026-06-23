import { honeywellCt70Pl } from './manual-content/honeywell-ct70-pl'
import { honeywellCt32Pl } from './manual-content/honeywell-ct32-pl'
import { honeywellCt47Pl } from './manual-content/honeywell-ct47-pl'
import { honeywellCk62Pl } from './manual-content/honeywell-ck62-pl'
import { honeywellCk67Pl } from './manual-content/honeywell-ck67-pl'
import { honeywellPc45dPl } from './manual-content/honeywell-pc45d-pl'
import { honeywellPc45tPl } from './manual-content/honeywell-pc45t-pl'
import { honeywellPc42etPl } from './manual-content/honeywell-pc42e-t-pl'
import { honeywellPd45Pl } from './manual-content/honeywell-pd45-pl'
import { honeywellPd45sPl } from './manual-content/honeywell-pd45s-pl'
import { honeywellPm45Pl } from './manual-content/honeywell-pm45-pl'
import { honeywellPm45cPl } from './manual-content/honeywell-pm45c-pl'
import { honeywellPm65Pl } from './manual-content/honeywell-pm65-pl'
import { honeywellPx45Pl } from './manual-content/honeywell-px45-pl'
import { honeywellPx65Pl } from './manual-content/honeywell-px65-pl'
import { honeywellPx940Pl } from './manual-content/honeywell-px940-pl'
import { honeywellRp2fPl } from './manual-content/honeywell-rp2f-pl'
import { honeywellRp4fPl } from './manual-content/honeywell-rp4f-pl'
import { honeywellLnx3Pl } from './manual-content/honeywell-lnx3-pl'
import { honeywellGranitUltra2100iPl } from './manual-content/honeywell-granit-ultra-2100i-pl'
import { granitXp1990iPl } from './manual-content/honeywell-granit-xp-1990i-pl'
import { granitXp1991iPl } from './manual-content/honeywell-granit-xp-1991i-pl'
import { honeywellGranitUltra2105iPl } from './manual-content/honeywell-granit-ultra-2105i-pl'
import { granitXp1991ixlrPl } from './manual-content/honeywell-granit-xp-1991ixlr-pl'
import { honeywellXenonUltra1962Pl } from './manual-content/honeywell-xenon-ultra-1962-pl'
import { honeywellXenonUltra1960Pl } from './manual-content/honeywell-xenon-ultra-1960-pl'
import { honeywellVoyagerXp1470gPl } from './manual-content/honeywell-voyager-xp-1470g-pl'
import { honeywellVoyagerXp1472gPl } from './manual-content/honeywell-voyager-xp-1472g-pl'
import { honeywellEda10aPl } from './manual-content/honeywell-eda10a-pl'

// ---------------------------------------------------------------------------
// Instrukcje obsługi / dokumentacja PDF do urządzeń ze sklepu TAKMA.
//
// Wzorzec skopiowany z serwis-zebry.pl (zakładka /instrukcje generuje tam ~60%
// ruchu), ale w wersji natywnej dla takma: dane statyczne (jak products.ts),
// PDF-y w `public/instrukcje/`, multi-brand.
//
// Dodawanie nowej instrukcji:
//  1. Wgraj PDF do `public/instrukcje/` wg konwencji:
//     {marka}-{model}-{typ}-{lang}.pdf  → honeywell-ct70-qs-pl.pdf
//     typ: qs (szybki start) | ug (instrukcja obsługi) | prog (programowanie) |
//          srv (serwisowa) | ds (karta katalogowa)
//  2. Dopisz wpis Manual poniżej (powiąż z kartą produktu przez `productSlug`).
// ---------------------------------------------------------------------------

export type ManualCategory =
  | 'terminale'
  | 'skanery'
  | 'drukarki-etykiet'
  | 'drukarki-kart'
  | 'tablety'
  | 'oprogramowanie'

export type ManualDocType =
  | 'quick-start'
  | 'user-guide'
  | 'programming'
  | 'service'
  | 'datasheet'

export type ManualLang = 'pl' | 'en'

export interface ManualDocument {
  type: ManualDocType
  title: string
  lang: ManualLang
  /** Ścieżka publiczna, np. '/instrukcje/honeywell-ct70-qs-pl.pdf' */
  file: string
  /** Rozmiar do wyświetlenia, np. '964 KB' */
  size?: string
}

export interface Manual {
  /** Slug URL: /instrukcje/[slug] — np. 'honeywell-ct70' */
  slug: string
  /** Model urządzenia, np. 'CT70' */
  model: string
  /** Pełna nazwa, np. 'Honeywell CT70' */
  name: string
  /** Marka, np. 'Honeywell' */
  brand: string
  category: ManualCategory
  /** Krótki opis na liście i w nagłówku */
  description: string
  /** Slug karty produktu (/produkt/[slug]) do cross-linkowania */
  productSlug?: string
  documents: ManualDocument[]
  /** Skrócona instrukcja po polsku (HTML) — osobna podstrona /instrukcja-po-polsku */
  polishManual?: PolishManual
  /** Dodatkowe frazy SEO specyficzne dla modelu */
  keywords?: string[]
  /** YYYY-MM-DD */
  updatedAt: string
}

// --- Metadane kategorii (etykiety + kolejność na liście) --------------------

export const manualCategories: { id: ManualCategory; label: string }[] = [
  { id: 'terminale', label: 'Terminale mobilne' },
  { id: 'skanery', label: 'Skanery kodów' },
  { id: 'drukarki-etykiet', label: 'Drukarki etykiet' },
  { id: 'drukarki-kart', label: 'Drukarki kart' },
  { id: 'tablety', label: 'Tablety przemysłowe' },
  { id: 'oprogramowanie', label: 'Oprogramowanie' },
]

// --- Metadane typów dokumentów (etykieta + opis) ----------------------------

export const docTypeMeta: Record<
  ManualDocType,
  { label: string; short: string; description: string; slug: string }
> = {
  'quick-start': {
    label: 'Szybki start',
    short: 'Start',
    description: 'Podstawowa konfiguracja i pierwsze uruchomienie',
    slug: 'szybki-start',
  },
  'user-guide': {
    label: 'Instrukcja obsługi',
    short: 'Manual',
    description: 'Pełna dokumentacja ze wszystkimi funkcjami',
    slug: 'instrukcja-obslugi',
  },
  programming: {
    label: 'Programowanie',
    short: 'Dev',
    description: 'Komendy, integracja i przykłady',
    slug: 'programowanie',
  },
  service: {
    label: 'Instrukcja serwisowa',
    short: 'Serwis',
    description: 'Procedury naprawcze i diagnostyka',
    slug: 'instrukcja-serwisowa',
  },
  datasheet: {
    label: 'Karta katalogowa',
    short: 'Specyfikacja',
    description: 'Pełna specyfikacja techniczna',
    slug: 'karta-katalogowa',
  },
}

/** Slug podstrony z polską instrukcją tekstową (HTML, mocna pod SEO). */
export const PL_MANUAL_SLUG = 'instrukcja-po-polsku'

/** Banery (grafiki Higgsfield) do kart dokumentów na hubie. */
export const docBanner: Record<ManualDocType, string> = {
  'quick-start': '/images/instrukcje/banner-quick-start.webp',
  'user-guide': '/images/instrukcje/banner-user-guide.webp',
  programming: '/images/instrukcje/banner-user-guide.webp',
  service: '/images/instrukcje/banner-user-guide.webp',
  datasheet: '/images/instrukcje/banner-user-guide.webp',
}

/** Baner dla skróconej instrukcji po polsku (barwy + flaga PL). */
export const PL_MANUAL_BANNER = '/images/instrukcje/banner-pl.webp'

/** Blok treści — renderowany zarówno na stronie (HTML), jak i do PDF.
 *  Inline pogrubienie: fragmenty w **gwiazdkach**. */
export type ManualBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }

export interface PolishManualSection {
  title: string
  blocks: ManualBlock[]
}

export interface PolishManual {
  updatedAt: string
  /** Krótki wstęp pod nagłówkiem */
  intro?: string
  sections: PolishManualSection[]
}

// --- Dane instrukcji --------------------------------------------------------

export const manuals: Manual[] = [
  {
    slug: 'honeywell-ct70',
    model: 'CT70',
    name: 'Honeywell CT70',
    brand: 'Honeywell',
    category: 'terminale',
    description:
      'Terminal mobilny 6" z Wi-Fi 7, Bluetooth 6.0 i skanerem FlexRange. Instrukcja szybkiego uruchomienia po polsku — pierwsza konfiguracja, ładowanie, skanowanie i obsługa baterii.',
    productSlug: 'honeywell-ct70',
    documents: [
      {
        type: 'quick-start',
        title: 'Instrukcja szybkiego uruchomienia (CT70-L0, CT70-X1)',
        lang: 'pl',
        file: '/instrukcje/honeywell-ct70-qs-pl.pdf',
        size: '964 KB',
      },
      {
        type: 'user-guide',
        title: 'Pełna instrukcja obsługi CT70 (User Guide)',
        lang: 'en',
        file: '/instrukcje/honeywell-ct70-ug-en.pdf',
        size: '2,3 MB',
      },
    ],
    polishManual: honeywellCt70Pl,
    keywords: [
      'honeywell ct70 instrukcja',
      'ct70 instrukcja po polsku',
      'ct70 instrukcja obsługi pdf',
      'ct70 quick start',
      'ct70 szybki start',
      'honeywell ct70 manual pdf',
      'ct70 pierwsza konfiguracja',
      'ct70 jak skonfigurować',
      'ct70 ładowanie baterii',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-ct32',
    model: 'CT32',
    name: 'Honeywell CT32',
    brand: 'Honeywell',
    category: 'terminale',
    description:
      'Terminal mobilny 6" z Wi-Fi 6, 5G i skanerem FlexRange, Android 14→18. Skrócona instrukcja po polsku — pierwsza konfiguracja, skanowanie, sieci i konserwacja.',
    productSlug: 'honeywell-ct32',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia CT32', lang: 'en', file: '/instrukcje/honeywell-ct32-qs-en.pdf', size: '1,3 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi CT32 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-ct32-ug-en.pdf', size: '2,3 MB' },
    ],
    polishManual: honeywellCt32Pl,
    keywords: [
      'honeywell ct32 instrukcja',
      'ct32 instrukcja po polsku',
      'ct32 instrukcja obsługi pdf',
      'ct32 szybki start',
      'honeywell ct32 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-ct47',
    model: 'CT47',
    name: 'Honeywell CT47',
    brand: 'Honeywell',
    category: 'terminale',
    description:
      'Terminal mobilny 5,5" z 5G, Wi-Fi 6E i skanerem FlexRange XLR (do ~24 m), hot-swap baterii. Skrócona instrukcja po polsku — pierwsze uruchomienie, skanowanie, sieci.',
    productSlug: 'honeywell-ct47',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia CT47', lang: 'en', file: '/instrukcje/honeywell-ct47-qs-en.pdf', size: '1,6 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi CT47 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-ct47-ug-en.pdf', size: '3,4 MB' },
    ],
    polishManual: honeywellCt47Pl,
    keywords: [
      'honeywell ct47 instrukcja',
      'ct47 instrukcja po polsku',
      'ct47 instrukcja obsługi pdf',
      'ct47 szybki start',
      'honeywell ct47 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-ck62',
    model: 'CK62',
    name: 'Honeywell CK62',
    brand: 'Honeywell',
    category: 'terminale',
    description:
      'Wytrzymały terminal z fizyczną klawiaturą i skanerem FlexRange XLR (do ~24 m), Wi-Fi 6E. Skrócona instrukcja po polsku — klawiatura, skanowanie, bateria, sieci.',
    productSlug: 'honeywell-ck62',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia CK62', lang: 'pl', file: '/instrukcje/honeywell-ck62-qs-pl.pdf', size: '1,3 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi CK62 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-ck62-ug-en.pdf', size: '3,6 MB' },
    ],
    polishManual: honeywellCk62Pl,
    keywords: [
      'honeywell ck62 instrukcja',
      'ck62 instrukcja po polsku',
      'ck62 instrukcja obsługi pdf',
      'ck62 szybki start',
      'honeywell ck62 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-ck67',
    model: 'CK67',
    name: 'Honeywell CK67',
    brand: 'Honeywell',
    category: 'terminale',
    description:
      'Ultra-wytrzymały terminal z fizyczną klawiaturą i skanerem FlexRange XLR (do ~24 m) do magazynów wysokiego składowania, hot-swap baterii. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-ck67',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia CK67', lang: 'en', file: '/instrukcje/honeywell-ck67-qs-en.pdf', size: '1,1 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi CK67 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-ck67-ug-en.pdf', size: '7,3 MB' },
    ],
    polishManual: honeywellCk67Pl,
    keywords: [
      'honeywell ck67 instrukcja',
      'ck67 instrukcja po polsku',
      'ck67 instrukcja obsługi pdf',
      'ck67 szybki start',
      'honeywell ck67 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pc45d',
    model: 'PC45d',
    name: 'Honeywell PC45d',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Biurkowa drukarka etykiet z drukiem termicznym bezpośrednim (bez taśmy), ekran 3,5" LCD, Wi-Fi 6. Skrócona instrukcja po polsku — ładowanie etykiet, kalibracja, sieć, czyszczenie głowicy.',
    productSlug: 'honeywell-pc45d',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PC45d / PC45t', lang: 'pl', file: '/instrukcje/honeywell-pc45-qs-pl.pdf', size: '2,2 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PC45d / PC45t (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pc45-ug-en.pdf', size: '7,2 MB' },
    ],
    polishManual: honeywellPc45dPl,
    keywords: [
      'honeywell pc45d instrukcja',
      'pc45d instrukcja po polsku',
      'pc45d instrukcja obsługi pdf',
      'pc45d szybki start',
      'honeywell pc45d manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pc45t',
    model: 'PC45t',
    name: 'Honeywell PC45t',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Biurkowa drukarka etykiet termotransferowa (z taśmą), ekran 3,5" LCD, Wi-Fi 6. Skrócona instrukcja po polsku — etykiety i taśma, kalibracja, sieć, czyszczenie głowicy.',
    productSlug: 'honeywell-pc45t',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PC45d / PC45t', lang: 'pl', file: '/instrukcje/honeywell-pc45-qs-pl.pdf', size: '2,2 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PC45d / PC45t (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pc45-ug-en.pdf', size: '7,2 MB' },
    ],
    polishManual: honeywellPc45tPl,
    keywords: [
      'honeywell pc45t instrukcja',
      'pc45t instrukcja po polsku',
      'pc45t instrukcja obsługi pdf',
      'pc45t szybki start',
      'honeywell pc45t manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pc42e-t',
    model: 'PC42E-T',
    name: 'Honeywell PC42E-T',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Ekonomiczna biurkowa drukarka etykiet termotransferowa (z taśmą), USB, tryb ECO. Skrócona instrukcja po polsku — etykiety i taśma, kalibracja, panel LED, czyszczenie głowicy.',
    productSlug: 'honeywell-pc42e-t',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia (wielojęzyczna)', lang: 'pl', file: '/instrukcje/honeywell-pc42e-t-qs-ml.pdf', size: '11,2 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PC42E-T (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pc42e-t-ug-en.pdf', size: '2,9 MB' },
    ],
    polishManual: honeywellPc42etPl,
    keywords: [
      'honeywell pc42e-t instrukcja',
      'pc42e-t instrukcja po polsku',
      'pc42e instrukcja obsługi pdf',
      'pc42e-t szybki start',
      'honeywell pc42e manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pd45',
    model: 'PD45',
    name: 'Honeywell PD45',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Półprzemysłowa drukarka etykiet w metalowej obudowie, druk termotransferowy i termiczny, ekran dotykowy LCD, ZPL-II. Skrócona instrukcja po polsku — etykiety i taśma, kalibracja, sieć, czyszczenie głowicy.',
    productSlug: 'honeywell-pd45',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PD45', lang: 'en', file: '/instrukcje/honeywell-pd45-qs-en.pdf', size: '13,0 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PD45 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pd45-ug-en.pdf', size: '4,6 MB' },
    ],
    polishManual: honeywellPd45Pl,
    keywords: [
      'honeywell pd45 instrukcja',
      'pd45 instrukcja po polsku',
      'pd45 instrukcja obsługi pdf',
      'pd45 szybki start',
      'honeywell pd45 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pd45s',
    model: 'PD45S',
    name: 'Honeywell PD45S',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Półprzemysłowa drukarka etykiet z ekranem dotykowym 3,5", druk termotransferowy i termiczny, 256 MB RAM, do 250 mm/s, ZPL-II. Skrócona instrukcja po polsku — etykiety i taśma, kalibracja, sieć, czyszczenie głowicy.',
    productSlug: 'honeywell-pd45s',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PD45', lang: 'en', file: '/instrukcje/honeywell-pd45-qs-en.pdf', size: '13,0 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PD45S (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pd45s-ug-en.pdf', size: '4,7 MB' },
    ],
    polishManual: honeywellPd45sPl,
    keywords: [
      'honeywell pd45s instrukcja',
      'pd45s instrukcja po polsku',
      'pd45s instrukcja obsługi pdf',
      'pd45s szybki start',
      'honeywell pd45s manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pm45',
    model: 'PM45',
    name: 'Honeywell PM45',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Przemysłowa drukarka etykiet 4", druk termotransferowy i termiczny, do 350 mm/s, 203–600 dpi, Gigabit Ethernet, opcje RFID UHF i LTE, ZPL-II. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-pm45',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PM45 / PM45c / PM65', lang: 'en', file: '/instrukcje/honeywell-pm45-qs-en.pdf', size: '1,9 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PM45 / PM45c / PM65 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pm45-65-ug-en.pdf', size: '10,0 MB' },
    ],
    polishManual: honeywellPm45Pl,
    keywords: [
      'honeywell pm45 instrukcja',
      'pm45 instrukcja po polsku',
      'pm45 instrukcja obsługi pdf',
      'pm45 szybki start',
      'honeywell pm45 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pm45c',
    model: 'PM45c',
    name: 'Honeywell PM45c',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Kompaktowa przemysłowa drukarka etykiet 4", druk termotransferowy i termiczny, ekran dotykowy 3,5", ZPL-II. Skrócona instrukcja po polsku — etykiety i taśma, kalibracja, sieć, czyszczenie głowicy.',
    productSlug: 'honeywell-pm45c',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PM45 / PM45c / PM65', lang: 'en', file: '/instrukcje/honeywell-pm45-qs-en.pdf', size: '1,9 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PM45 / PM45c / PM65 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pm45-65-ug-en.pdf', size: '10,0 MB' },
    ],
    polishManual: honeywellPm45cPl,
    keywords: [
      'honeywell pm45c instrukcja',
      'pm45c instrukcja po polsku',
      'pm45c instrukcja obsługi pdf',
      'pm45c szybki start',
      'honeywell pm45c manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-pm65',
    model: 'PM65',
    name: 'Honeywell PM65',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Szerokoformatowa przemysłowa drukarka etykiet 6", druk termotransferowy i termiczny, do 300 mm/s, Wi-Fi 6, ruchomy sprzęg RFID, ZPL-II. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-pm65',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PM45 / PM45c / PM65', lang: 'en', file: '/instrukcje/honeywell-pm45-qs-en.pdf', size: '1,9 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PM45 / PM45c / PM65 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-pm45-65-ug-en.pdf', size: '10,0 MB' },
    ],
    polishManual: honeywellPm65Pl,
    keywords: [
      'honeywell pm65 instrukcja',
      'pm65 instrukcja po polsku',
      'pm65 instrukcja obsługi pdf',
      'pm65 szybki start',
      'honeywell pm65 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-px45',
    model: 'PX45',
    name: 'Honeywell PX45',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Przemysłowa drukarka etykiet premium 4", metalowa obudowa, druk termotransferowy i termiczny, do 300 mm/s, głowica QuickMount, Smart Calibration, ZPL-II. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-px45',
    documents: [
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PX45 / PX65 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-px45-65-ug-en.pdf', size: '13,0 MB' },
    ],
    polishManual: honeywellPx45Pl,
    keywords: [
      'honeywell px45 instrukcja',
      'px45 instrukcja po polsku',
      'px45 instrukcja obsługi pdf',
      'px45 user guide',
      'honeywell px45 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-px65',
    model: 'PX65',
    name: 'Honeywell PX65',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Przemysłowa drukarka etykiet heavy-duty 6", IP64, metalowa obudowa, druk termotransferowy i termiczny, głowica QuickMount, Smart Calibration, ZPL-II. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-px65',
    documents: [
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PX45 / PX65 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-px45-65-ug-en.pdf', size: '13,0 MB' },
    ],
    polishManual: honeywellPx65Pl,
    keywords: [
      'honeywell px65 instrukcja',
      'px65 instrukcja po polsku',
      'px65 instrukcja obsługi pdf',
      'px65 user guide',
      'honeywell px65 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-px940',
    model: 'PX940',
    name: 'Honeywell PX940',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Przemysłowa drukarka etykiet 4" wysokiej precyzji (±0,2 mm) z opcjonalnym wbudowanym weryfikatorem kodów 1D/2D (PX940V), druk termotransferowy i termiczny, ZPL-II. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-px940',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia PX940', lang: 'en', file: '/instrukcje/honeywell-px940-qs-en.pdf', size: '7,5 MB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi PX940 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-px940-ug-en.pdf', size: '3,7 MB' },
    ],
    polishManual: honeywellPx940Pl,
    keywords: [
      'honeywell px940 instrukcja',
      'px940 instrukcja po polsku',
      'px940 instrukcja obsługi pdf',
      'px940 weryfikator',
      'honeywell px940 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-rp2f',
    model: 'RP2f',
    name: 'Honeywell RP2f',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Mobilna drukarka 2" z drukiem termicznym, baterią hot-swap, Bluetooth 5.0 i Wi-Fi. Skrócona instrukcja po polsku — bateria, ładowanie nośnika, łączność i konserwacja.',
    productSlug: 'honeywell-rp2f',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia RP2f / RP4f', lang: 'en', file: '/instrukcje/honeywell-rp2f-4f-qs-en.pdf', size: '690 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi RP2f / RP4f (User Guide)', lang: 'en', file: '/instrukcje/honeywell-rp2f-4f-ug-en.pdf', size: '2,5 MB' },
    ],
    polishManual: honeywellRp2fPl,
    keywords: [
      'honeywell rp2f instrukcja',
      'rp2f instrukcja po polsku',
      'rp2f instrukcja obsługi pdf',
      'rp2f szybki start',
      'honeywell rp2f manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-rp4f',
    model: 'RP4f',
    name: 'Honeywell RP4f',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Mobilna drukarka etykiet 4" (etykiety kurierskie 100×150) z drukiem termicznym, baterią hot-swap, Bluetooth 5.0 i Wi-Fi. Skrócona instrukcja po polsku.',
    productSlug: 'honeywell-rp4f',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia RP2f / RP4f', lang: 'en', file: '/instrukcje/honeywell-rp2f-4f-qs-en.pdf', size: '690 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi RP2f / RP4f (User Guide)', lang: 'en', file: '/instrukcje/honeywell-rp2f-4f-ug-en.pdf', size: '2,5 MB' },
    ],
    polishManual: honeywellRp4fPl,
    keywords: [
      'honeywell rp4f instrukcja',
      'rp4f instrukcja po polsku',
      'rp4f instrukcja obsługi pdf',
      'rp4f etykiety kurierskie',
      'honeywell rp4f manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-lnx3',
    model: 'LNX3',
    name: 'Honeywell LNX3',
    brand: 'Honeywell',
    category: 'drukarki-etykiet',
    description:
      'Mobilna drukarka etykiet 3" z drukiem termicznym, baterią hot-swap, Bluetooth, NFC i USB-C. Skrócona instrukcja po polsku — bateria, ładowanie nośnika, łączność i konserwacja.',
    productSlug: 'honeywell-lnx3',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia LNX3', lang: 'en', file: '/instrukcje/honeywell-lnx3-qs-en.pdf', size: '800 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi LNX3 (User Guide)', lang: 'en', file: '/instrukcje/honeywell-lnx3-ug-en.pdf', size: '1,7 MB' },
    ],
    polishManual: honeywellLnx3Pl,
    keywords: [
      'honeywell lnx3 instrukcja',
      'lnx3 instrukcja po polsku',
      'lnx3 instrukcja obsługi pdf',
      'lnx3 szybki start',
      'honeywell lnx3 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-ultra-2100i',
    model: 'Granit Ultra 2100i',
    name: 'Honeywell Granit Ultra 2100i',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Przemysłowy przewodowy skaner kodów 1D/2D (warianty SR/XR), ultrawytrzymały IP65/IP68, konfiguracja kodami i narzędziem EZConfig. Skrócona instrukcja po polsku — podłączenie, skanowanie, symbologie, konfiguracja.',
    productSlug: 'honeywell-granit-ultra-2100i',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit Ultra 2100i', lang: 'en', file: '/instrukcje/honeywell-granit-ultra-2100i-qs-en.pdf', size: '250 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-ultra-2100i-ug-en.pdf', size: '4,9 MB' },
    ],
    polishManual: honeywellGranitUltra2100iPl,
    keywords: [
      'honeywell granit ultra 2100i instrukcja',
      'granit 2100i instrukcja po polsku',
      'granit ultra 2100i instrukcja obsługi pdf',
      '2100i sr xr konfiguracja',
      'honeywell 2100i manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-xp-1990isr',
    model: 'Granit XP 1990iSR',
    name: 'Honeywell Granit XP 1990iSR',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Przewodowy przemysłowy skaner kodów 1D/2D o standardowym zasięgu (SR), ultrawytrzymały. Skrócona instrukcja po polsku — podłączenie, skanowanie, konfiguracja kodami i EZConfig.',
    productSlug: 'honeywell-granit-xp-1990isr',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit XP 1990i', lang: 'en', file: '/instrukcje/honeywell-granit-xp-1990i-qs-en.pdf', size: '550 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 199xi (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-xp-199x-ug-en.pdf', size: '9,1 MB' },
    ],
    polishManual: granitXp1990iPl,
    keywords: [
      'honeywell granit xp 1990isr instrukcja',
      'granit xp 1990i instrukcja po polsku',
      'granit 1990isr instrukcja obsługi pdf',
      '1990i sr konfiguracja',
      'honeywell 1990isr manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-xp-1990ixr',
    model: 'Granit XP 1990iXR',
    name: 'Honeywell Granit XP 1990iXR',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Przewodowy przemysłowy skaner kodów 1D/2D o rozszerzonym zasięgu (XR), ultrawytrzymały. Skrócona instrukcja po polsku — podłączenie, skanowanie, konfiguracja kodami i EZConfig.',
    productSlug: 'honeywell-granit-xp-1990ixr',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit XP 1990i', lang: 'en', file: '/instrukcje/honeywell-granit-xp-1990i-qs-en.pdf', size: '550 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 199xi (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-xp-199x-ug-en.pdf', size: '9,1 MB' },
    ],
    polishManual: granitXp1990iPl,
    keywords: [
      'honeywell granit xp 1990ixr instrukcja',
      'granit xp 1990ixr instrukcja po polsku',
      'granit 1990ixr instrukcja obsługi pdf',
      '1990i xr konfiguracja',
      'honeywell 1990ixr manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-xp-1991isr',
    model: 'Granit XP 1991iSR',
    name: 'Honeywell Granit XP 1991iSR',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Bezprzewodowy (Bluetooth) przemysłowy skaner kodów 1D/2D o standardowym zasięgu (SR), z baterią i bazą ładującą. Skrócona instrukcja po polsku — bateria, baza, parowanie, konfiguracja.',
    productSlug: 'honeywell-granit-xp-1991isr',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit XP 1990i', lang: 'en', file: '/instrukcje/honeywell-granit-xp-1990i-qs-en.pdf', size: '550 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 199xi (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-xp-199x-ug-en.pdf', size: '9,1 MB' },
    ],
    polishManual: granitXp1991iPl,
    keywords: [
      'honeywell granit xp 1991isr instrukcja',
      'granit xp 1991i instrukcja po polsku',
      'granit 1991isr instrukcja obsługi pdf',
      '1991i sr bluetooth konfiguracja',
      'honeywell 1991isr manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-xp-1991ixr',
    model: 'Granit XP 1991iXR',
    name: 'Honeywell Granit XP 1991iXR',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Bezprzewodowy (Bluetooth) przemysłowy skaner kodów 1D/2D o rozszerzonym zasięgu (XR), z baterią i bazą ładującą. Skrócona instrukcja po polsku — bateria, baza, parowanie, konfiguracja.',
    productSlug: 'honeywell-granit-xp-1991ixr',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit XP 1990i', lang: 'en', file: '/instrukcje/honeywell-granit-xp-1990i-qs-en.pdf', size: '550 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 199xi (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-xp-199x-ug-en.pdf', size: '9,1 MB' },
    ],
    polishManual: granitXp1991iPl,
    keywords: [
      'honeywell granit xp 1991ixr instrukcja',
      'granit xp 1991ixr instrukcja po polsku',
      'granit 1991ixr instrukcja obsługi pdf',
      '1991i xr bluetooth konfiguracja',
      'honeywell 1991ixr manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-ultra-2105i',
    model: 'Granit Ultra 2105i',
    name: 'Honeywell Granit Ultra 2105i',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Bezprzewodowy (Bluetooth) przemysłowy skaner kodów 1D/2D z baterią i bazą ładującą, ultrawytrzymały IP65/IP68 (warianty SR/XR). Skrócona instrukcja po polsku — bateria, baza, parowanie Bluetooth, konfiguracja.',
    productSlug: 'honeywell-granit-ultra-2105i',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit Ultra 2105i (Cordless)', lang: 'en', file: '/instrukcje/honeywell-granit-ultra-2105i-qs-en.pdf', size: '245 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 210Xi (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-ultra-2105i-ug-en.pdf', size: '6,0 MB' },
    ],
    polishManual: honeywellGranitUltra2105iPl,
    keywords: [
      'honeywell granit ultra 2105i instrukcja',
      'granit 2105i instrukcja po polsku',
      'granit ultra 2105i instrukcja obsługi pdf',
      '2105i bluetooth bateria baza',
      'honeywell 2105i manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-granit-xp-1991ixlr',
    model: 'Granit XP 1991iXLR',
    name: 'Honeywell Granit XP 1991iXLR',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Bezprzewodowy (Bluetooth) przemysłowy skaner kodów 1D/2D dalekiego zasięgu (XLR), z baterią i bazą ładującą, ultrawytrzymały. Skrócona instrukcja po polsku — bateria, baza, parowanie Bluetooth, konfiguracja.',
    productSlug: 'honeywell-granit-xp-1991ixlr',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Granit XP 1990i', lang: 'en', file: '/instrukcje/honeywell-granit-xp-1990i-qs-en.pdf', size: '550 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 199xi (User Guide)', lang: 'en', file: '/instrukcje/honeywell-granit-xp-199x-ug-en.pdf', size: '9,1 MB' },
    ],
    polishManual: granitXp1991ixlrPl,
    keywords: [
      'honeywell granit xp 1991ixlr instrukcja',
      'granit xp 1991ixlr instrukcja po polsku',
      'granit 1991ixlr instrukcja obsługi pdf',
      '1991i xlr daleki zasięg bluetooth',
      'honeywell 1991ixlr manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-xenon-ultra-1962',
    model: 'Xenon Ultra 1962',
    name: 'Honeywell Xenon Ultra 1962',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Bezprzewodowy (Bluetooth) uniwersalny skaner kodów 1D/2D do handlu i ochrony zdrowia, z baterią i bazą ładującą, wariant Healthcare. Skrócona instrukcja po polsku — bateria, baza, parowanie, tryb healthcare, konfiguracja.',
    productSlug: 'honeywell-xenon-ultra-1962',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Xenon Ultra 1962', lang: 'en', file: '/instrukcje/honeywell-xenon-ultra-1962-qs-en.pdf', size: '310 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 196X (User Guide)', lang: 'en', file: '/instrukcje/honeywell-xenon-ultra-1962-ug-en.pdf', size: '6,1 MB' },
    ],
    polishManual: honeywellXenonUltra1962Pl,
    keywords: [
      'honeywell xenon ultra 1962 instrukcja',
      'xenon 1962 instrukcja po polsku',
      'xenon ultra 1962 instrukcja obsługi pdf',
      '1962 bluetooth healthcare konfiguracja',
      'honeywell 1962 manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-xenon-ultra-1960',
    model: 'Xenon Ultra 1960g',
    name: 'Honeywell Xenon Ultra 1960g',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Przewodowy uniwersalny skaner kodów 1D/2D do handlu i ochrony zdrowia, wariant Healthcare (obudowa odporna na dezynfekcję). Skrócona instrukcja po polsku — podłączenie, skanowanie, tryb healthcare, konfiguracja.',
    productSlug: 'honeywell-xenon-ultra-1960',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Xenon Ultra 1960', lang: 'en', file: '/instrukcje/honeywell-xenon-ultra-1960-qs-en.pdf', size: '310 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 196X (User Guide)', lang: 'en', file: '/instrukcje/honeywell-xenon-ultra-1960-ug-en.pdf', size: '6,1 MB' },
    ],
    polishManual: honeywellXenonUltra1960Pl,
    keywords: [
      'honeywell xenon ultra 1960g instrukcja',
      'xenon 1960g instrukcja po polsku',
      'xenon ultra 1960 instrukcja obsługi pdf',
      '1960g usb healthcare konfiguracja',
      'honeywell 1960g manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-voyager-xp-1470g',
    model: 'Voyager XP 1470g',
    name: 'Honeywell Voyager XP 1470g',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Przewodowy uniwersalny skaner kodów 1D/2D klasy handlowej (czujnik stojaka, odczyt z ekranów telefonów). Skrócona instrukcja po polsku — podłączenie, skanowanie, tryby pracy, konfiguracja.',
    productSlug: 'honeywell-voyager-xp-1470g',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia Voyager XP 1470g', lang: 'en', file: '/instrukcje/honeywell-voyager-xp-1470g-qs-en.pdf', size: '490 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 147x (User Guide)', lang: 'en', file: '/instrukcje/honeywell-voyager-xp-147x-ug-en.pdf', size: '4,4 MB' },
    ],
    polishManual: honeywellVoyagerXp1470gPl,
    keywords: [
      'honeywell voyager xp 1470g instrukcja',
      'voyager 1470g instrukcja po polsku',
      'voyager xp 1470g instrukcja obsługi pdf',
      '1470g usb konfiguracja',
      'honeywell 1470g manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-voyager-xp-1472g',
    model: 'Voyager XP 1472g',
    name: 'Honeywell Voyager XP 1472g',
    brand: 'Honeywell',
    category: 'skanery',
    description:
      'Bezprzewodowy (Bluetooth) uniwersalny skaner kodów 1D/2D klasy handlowej, z baterią i bazą ładującą. Skrócona instrukcja po polsku — bateria, baza, parowanie Bluetooth, konfiguracja.',
    productSlug: 'honeywell-voyager-xp-1472g',
    documents: [
      { type: 'user-guide', title: 'Pełna instrukcja obsługi / programowania serii 147x (User Guide)', lang: 'en', file: '/instrukcje/honeywell-voyager-xp-147x-ug-en.pdf', size: '4,4 MB' },
    ],
    polishManual: honeywellVoyagerXp1472gPl,
    keywords: [
      'honeywell voyager xp 1472g instrukcja',
      'voyager 1472g instrukcja po polsku',
      'voyager xp 1472g instrukcja obsługi pdf',
      '1472g bluetooth bateria baza',
      'honeywell 1472g manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
  {
    slug: 'honeywell-eda10a',
    model: 'EDA10A',
    name: 'Honeywell EDA10A',
    brand: 'Honeywell',
    category: 'tablety',
    description:
      'Wytrzymały tablet enterprise 10,1" z Androidem, baterią hot-swap, opcjonalnym skanerem 2D i WWAN/5G (IP65). Skrócona instrukcja po polsku — konfiguracja, bateria, skanowanie, sieci, akcesoria.',
    productSlug: 'honeywell-eda10a',
    documents: [
      { type: 'quick-start', title: 'Instrukcja szybkiego uruchomienia EDA10A', lang: 'pl', file: '/instrukcje/honeywell-eda10a-qs-pl.pdf', size: '800 KB' },
      { type: 'user-guide', title: 'Pełna instrukcja obsługi EDA10A (User Guide)', lang: 'en', file: '/instrukcje/honeywell-eda10a-ug-en.pdf', size: '2,6 MB' },
    ],
    polishManual: honeywellEda10aPl,
    keywords: [
      'honeywell eda10a instrukcja',
      'eda10a instrukcja po polsku',
      'eda10a instrukcja obsługi pdf',
      'eda10a tablet szybki start',
      'honeywell eda10a manual pdf',
    ],
    updatedAt: '2026-06-22',
  },
]

// --- Helpery ----------------------------------------------------------------

export function getManualBySlug(slug: string): Manual | undefined {
  return manuals.find((m) => m.slug === slug)
}

export function getManualByProductSlug(productSlug: string): Manual | undefined {
  return manuals.find((m) => m.productSlug === productSlug)
}

export function getManualsByCategory(category: ManualCategory): Manual[] {
  return manuals.filter((m) => m.category === category)
}

export function categoryLabel(category: ManualCategory): string {
  return manualCategories.find((c) => c.id === category)?.label ?? category
}

/** Slug podstrony dla danego dokumentu (np. 'szybki-start'). */
export function docSlug(type: ManualDocType): string {
  return docTypeMeta[type].slug
}

/** Dokument PDF wg sluga podstrony (np. 'szybki-start'). */
export function getDocBySlug(
  manual: Manual,
  slug: string,
): ManualDocument | undefined {
  return manual.documents.find((d) => docTypeMeta[d.type].slug === slug)
}
