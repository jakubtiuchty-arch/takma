import { honeywellCt70Pl } from './manual-content/honeywell-ct70-pl'
import { honeywellCt32Pl } from './manual-content/honeywell-ct32-pl'
import { honeywellCt47Pl } from './manual-content/honeywell-ct47-pl'
import { honeywellCk62Pl } from './manual-content/honeywell-ck62-pl'
import { honeywellCk67Pl } from './manual-content/honeywell-ck67-pl'
import { honeywellPc45dPl } from './manual-content/honeywell-pc45d-pl'
import { honeywellPc45tPl } from './manual-content/honeywell-pc45t-pl'
import { honeywellPc42etPl } from './manual-content/honeywell-pc42e-t-pl'

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
