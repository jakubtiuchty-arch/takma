# Brief implementacyjny dla Claude Code — Etykiety termotransferowe

**Cel**: Wdrożyć kategorię `/etykiety-termotransferowe` w sklepie TAKMA — 3 podkategorie materiałowe (papierowe, foliowe, specjalne), 16 serii, 982 SKU (warianty rozmiarowe), zgodnie ze wzorcem istniejącej kategorii `/etykiety-termiczne`.

**Status**: Dane gotowe (raport + 3 pliki źródłowe). Wzorzec istnieje w repo (`/etykiety-termiczne`). Wymagana implementacja: struktura URL + dane + UI.

---

## 1. Architektura URL (zatwierdzona, opcja A)

```
/etykiety-termotransferowe                                  ← LANDING-RODZIC (nowy)
/etykiety-termotransferowe/papierowe                        ← LANDING PODKATEGORII (nowy, 4 serie)
/etykiety-termotransferowe/papierowe/serie/[slug]           ← STRONA SERII (nowa)
/etykiety-termotransferowe/foliowe                          ← LANDING PODKATEGORII (nowy, 7 serii)
/etykiety-termotransferowe/foliowe/serie/[slug]             ← STRONA SERII (nowa)
/etykiety-termotransferowe/specjalne                        ← LANDING PODKATEGORII (nowy, 5 serii)
/etykiety-termotransferowe/specjalne/serie/[slug]           ← STRONA SERII (nowa)
```

**Stare stuby do migracji** (`src/app/etykiety-termotransferowe-papierowe/page.tsx` i `etykiety-termotransferowe-foliowe/page.tsx`):
- Zastąpić plikiem zwracającym **redirect 301** (`redirect()` z `next/navigation`) na nowe URL-e.
- Zachować pliki dla SEO juice z istniejących linków zewnętrznych.

**Konfiguracja redirectów** (`next.config.js` lub `middleware.ts` — wybierz wygodniejsze):
```js
{
  source: '/etykiety-termotransferowe-papierowe',
  destination: '/etykiety-termotransferowe/papierowe',
  permanent: true,
},
{
  source: '/etykiety-termotransferowe-foliowe',
  destination: '/etykiety-termotransferowe/foliowe',
  permanent: true,
},
```

---

## 2. Wzorzec do skopiowania 1:1

**Główny wzorzec referencyjny — `/etykiety-termiczne`**:

| Plik wzorzec | Co robi |
|---|---|
| `src/app/etykiety-termiczne/page.tsx` | Landing kategorii z kafelkami serii (3 sekcje wg pozycjonowania) + CategoryGuide (rich SEO content) + FAQ schema |
| `src/app/etykiety-termiczne/serie/[slug]/page.tsx` | Strona serii: hero z akcentem koloru, sekcje opisowe, tech specs, kompatybilne drukarki, certyfikaty, FAQ, `<SeriesVariantsTable>` |
| `src/app/etykiety-termiczne/serie/[slug]/SeriesVariantsTable.tsx` | Client component — tabela wariantów z filtrami (rozmiar, gilza, perforacja), search, sortowanie |
| `src/data/thermal-label-series.ts` | Definicje 12 serii — typy, metadane, sekcje, FAQ |

**Reguła**: Skopiować strukturę, layout, klasy Tailwind, komponenty UI **bez odstępstw**. Klient ma rozpoznać że to ten sam sklep.

---

## 3. Pliki do utworzenia

### 3.1 Plik danych: `src/data/transfer-label-series.ts`

Stworzyć analogiczny plik do `thermal-label-series.ts` z 16 seriami TT podzielonymi na 3 podkategorie. Typ + helper:

```typescript
export type TransferLabelSubcategory = 'papierowe' | 'foliowe' | 'specjalne';

export type TransferLabelMaterial =
  | 'papier-niepowlekany'
  | 'papier-powlekany'
  | 'papier-all-temp'
  | 'poliester-bialy'
  | 'poliester-srebrny'
  | 'polietylen'
  | 'polipropylen-bialy'
  | 'polipropylen-przezroczysty'
  | 'polipropylen-matowy'
  | 'poliolefina'
  | 'folia-kriogeniczna'
  | 'folia-blood-bag'
  | 'folia-void'
  | 'folia-destruktywna';

export type TransferLabelGlue =
  | 'permanentny-akrylowy'
  | 'zdejmowalny'
  | 'all-temperature'
  | 'kriogeniczny'
  | 'tamper-evident'
  | 'destruktywny';

export type TransferLabelPositioning =
  | 'bestseller'              // Z-Perform 1000T, Z-Ultimate 3000T White
  | 'premium'                  // Z-Select 2000T, Z-Ultimate 3000T Silver
  | 'specjalistyczna'          // 8000T All-Temp, PolyO 3100T
  | 'budżetowa'                // Z-Essentials 500T
  | 'niche-zabezpieczenia'     // Void Matte, Z-Destruct PE
  | 'niche-krio';              // Cryocool, Blood Bag Deep Freeze

export interface TransferLabelSeries {
  // IDENTITY
  slug: string;                            // np. "z-perform-1000t"
  productId: string;                       // np. "zebra-z-perform-1000t" (link do products.ts)
  subcategory: TransferLabelSubcategory;   // "papierowe" | "foliowe" | "specjalne"
  badge: string;                           // "Z-Perform 1000T"
  title: string;                           // "Z-Perform 1000T"
  tagline: string;                         // max ~110 chars
  positioning: TransferLabelPositioning;

  // ATRYBUTY DO FILTRÓW / TABELI
  material: TransferLabelMaterial;
  glue: TransferLabelGlue;
  topcoat: boolean;
  removable: boolean;
  foodSafe: boolean;
  outdoorResistant: boolean;               // UV-resist, weatherproof
  chemicalResistant: boolean;
  cryogenic: boolean;                      // -196°C
  ulCertified: boolean;                    // dla UL (Z-Ultimate White)
  priceFrom: number;                       // PLN netto, najtańszy wariant
  accent: string;                          // hex kolor (np. '#0F766E')

  // SEO
  seoTitle: string;
  seoDescription: string;
  h1: string;

  // HERO LANDINGU SERII
  heroIntro: string;                       // 2-3 zdania pod H1
  keyHighlights: string[];                 // 5-7 bullet pointów

  // SEKCJE OPISOWE
  sections: { heading: string; content: string }[];  // 7-9 sekcji jak w thermal

  // SPECYFIKACJA
  techSpecs: { label: string; value: string }[];

  // ZASTOSOWANIA
  applications: string[];
  notRecommendedFor: string[];

  // KOMPATYBILNE DRUKARKI (4 grupy)
  compatiblePrinters: {
    desktop: string[];
    midRange: string[];
    industrial: string[];
    mobile: string[];
  };

  // ATESTY
  certifications: { name: string; description: string }[];

  // PORÓWNANIE (top 2-3 alternatywne serie)
  comparedWith: { seriesSlug: string; whenToChooseThis: string }[];

  // FAQ
  faq: { question: string; answer: string }[];

  // ZWIĄZANE TAŚMY BARWIĄCE (kluczowe dla TT — różnica vs DT!)
  recommendedRibbons: {
    waxResin?: string[];                   // np. ['Zebra 2300 Wax/Resin']
    resin?: string[];                       // np. ['Zebra 5095 Resin']
  };
}

export const transferLabelSeries: TransferLabelSeries[] = [
  // 16 obiektów — patrz dane z RAPORT-analiza-etykiet-termotransferowych.md
];

// HELPERY
export function getTransferLabelSeriesBySlug(slug: string): TransferLabelSeries | undefined { ... }
export function getTransferLabelSeriesBySubcategory(sub: TransferLabelSubcategory): TransferLabelSeries[] { ... }
export function getAllTransferLabelSeriesSlugs(): string[] { ... }
```

**Źródło treści dla 16 obiektów**: plik `/Users/jakubtiuchty/takma/NEW-PRODUCTS-etykiety-termotransferowe.ts` zawiera już `shortDescription`, `description`, `specifications`, `applications`, `tags` — przekopiować i rozszerzyć do pełnego schema `TransferLabelSeries` (dodać `sections` 7-9 szt., `faq` 5-8 szt., `compatiblePrinters`, `comparedWith`).

**Lista 16 serii do utworzenia**:

| # | Slug | Subcategory | Positioning | Bestseller? |
|---|---|---|---|---|
| 1 | `z-perform-1000t` | papierowe | bestseller | **TAK** |
| 2 | `z-perform-1000t-removable` | papierowe | specjalistyczna | nie |
| 3 | `z-select-2000t` | papierowe | premium | nie |
| 4 | `z-essentials-500t` | papierowe | budżetowa | nie |
| 5 | `z-ultimate-3000t-white` | foliowe | bestseller | **TAK** |
| 6 | `z-ultimate-3000t-silver` | foliowe | premium | nie |
| 7 | `polye-3100t-gloss` | foliowe | specjalistyczna | nie |
| 8 | `polypro-3000t-gloss` | foliowe | specjalistyczna | nie |
| 9 | `polypro-3000t-clear` | foliowe | specjalistyczna | nie |
| 10 | `polypro-4000t-matte` | foliowe | specjalistyczna | nie |
| 11 | `polyo-3100t` | foliowe | specjalistyczna | nie |
| 12 | `8000t-all-temp` | specjalne | niche-krio | nie |
| 13 | `8100t-cryocool` | specjalne | niche-krio | nie |
| 14 | `8000t-blood-bag-deep-freeze` | specjalne | niche-krio | nie |
| 15 | `8000t-void-matte` | specjalne | niche-zabezpieczenia | nie |
| 16 | `8100t-z-destruct-pe` | specjalne | niche-zabezpieczenia | nie |

### 3.2 Produkty: rozszerzyć `src/data/products.ts`

W pliku `/Users/jakubtiuchty/takma/NEW-PRODUCTS-etykiety-termotransferowe.ts` masz gotową tablicę 16 obiektów `Product` z 982 wariantami. Wkleić do `products.ts` (do głównej tablicy `products`).

**Krytyczne**: zaktualizować `subcategoryIds` w każdym obiekcie zgodnie z nową strukturą URL:
- Wszystkie 16 produktów → `['etykiety-termotransferowe']` (zawsze)
- Plus jeden z: `'etykiety-termotransferowe-papierowe'` / `'etykiety-termotransferowe-foliowe'` / `'etykiety-termotransferowe-specjalne'`

W `NEW-PRODUCTS-etykiety-termotransferowe.ts` już to mam ustawione poprawnie.

### 3.3 Strony Next.js

#### `src/app/etykiety-termotransferowe/page.tsx` (NOWY landing-rodzic)

Hero z 3 dużymi kafelkami podkategorii (analogiczne do `BannerCard size="large"` z `/etykiety-termiczne/page.tsx`):

```
┌─────────────────────────────────────────────────┐
│                  HERO (slate-950)               │
│  H1: Etykiety termotransferowe Zebra            │
│  Sub: 16 serii, 982 warianty + USP badges       │
└─────────────────────────────────────────────────┘

┌───────────┬───────────┬───────────┐
│ PAPIEROWE │  FOLIOWE  │ SPECJALNE │   ← duże kafelki
│  4 serie  │  7 serii  │  5 serii  │     (klik → podkategoria)
│  604 SKU  │  361 SKU  │  17 SKU   │
└───────────┴───────────┴───────────┘

[ CategoryGuide — rich SEO content
  + tabela porównawcza wszystkich 16 serii
  + FAQ schema (10 pytań) ]
```

Kafelki podkategorii niech mają **różne gradient akcenty**:
- Papierowe: gradient niebieski (`#2563EB → #1E40AF`)
- Foliowe: gradient zielony (`#059669 → #047857`)
- Specjalne: gradient amber (`#D97706 → #B45309`) — uwaga jako "wyjątkowe nisze"

#### `src/app/etykiety-termotransferowe/papierowe/page.tsx` (NOWY)

**Wzorzec 1:1 z `/etykiety-termiczne/page.tsx`**:
- Hero z H1: "Etykiety termotransferowe papierowe Zebra"
- Sekcja "Najczęściej wybierane" (1 duży kafelek): Z-Perform 1000T
- Sekcja "Premium i specjalistyczne" (3 normalne kafelki): Z-Select 2000T, Z-Perform 1000T Removable, Z-Essentials 500T
- CategoryGuide z tabelą porównawczą 4 serii + 6-8 pytań FAQ specyficznych dla papieru TT

#### `src/app/etykiety-termotransferowe/foliowe/page.tsx` (NOWY)

**Wzorzec 1:1**:
- Hero z H1: "Etykiety termotransferowe foliowe Zebra"
- Sekcja "Najczęściej wybierane" (1 duży): Z-Ultimate 3000T White
- Sekcja "Polipropylen — codzienny przemysł" (3): PolyPro 3000T Gloss, PolyPro 3000T Clear, PolyPro 4000T Matte
- Sekcja "Specjalistyczne folie" (3): Z-Ultimate 3000T Silver, PolyE 3100T Gloss, PolyO 3100T
- CategoryGuide z tabelą porównawczą 7 serii + FAQ specyficzny dla folii

#### `src/app/etykiety-termotransferowe/specjalne/page.tsx` (NOWY)

**Wzorzec 1:1, ale CHARAKTER NICHE**:
- Hero z H1: "Etykiety termotransferowe specjalne — krio, zabezpieczające, do worków z krwią"
- Sekcja "Mróz i kriogenika" (3): 8100T Cryocool, 8000T Blood Bag Deep Freeze, 8000T All-Temp
- Sekcja "Zabezpieczenia i plomby" (2): 8000T Void Matte, 8100T Z-Destruct PE
- CategoryGuide z mocnym SEO na frazy: "etykiety kriogeniczne", "etykiety zabezpieczające", "plomby destruktywne"
- Tabela "Branże docelowe" — z mapowaniem konkretnych zastosowań (biotech, banki krwi, służby specjalne, lotnictwo)

#### `src/app/etykiety-termotransferowe/[subcategory]/serie/[slug]/page.tsx` (NOWY — dynamiczny)

**Wzorzec 1:1 z `/etykiety-termiczne/serie/[slug]/page.tsx`** z tą różnicą:
- Routing przyjmuje 2 paramy: `subcategory` + `slug`
- `generateStaticParams()` generuje wszystkie kombinacje:
  ```typescript
  export async function generateStaticParams() {
    return transferLabelSeries.map(s => ({
      subcategory: s.subcategory,
      slug: s.slug,
    }));
  }
  ```
- Breadcrumby 5-poziomowe: Strona główna → Materiały eksploatacyjne → Etykiety termotransferowe → Papierowe → Z-Perform 1000T
- **NOWA SEKCJA**: "Polecane taśmy barwiące" (kluczowa różnica TT vs DT) — wyświetla `series.recommendedRibbons.waxResin` i `series.recommendedRibbons.resin` z linkiem do strony `/tasmy-termotransferowe`

#### `src/app/etykiety-termotransferowe/[subcategory]/serie/[slug]/SeriesVariantsTable.tsx` (NOWY)

**Wzorzec 1:1 z `/etykiety-termiczne/serie/[slug]/SeriesVariantsTable.tsx`** — copy-paste, plus filtry specyficzne dla TT:

| Filtr | Wartości | Default |
|---|---|---|
| **Rozmiar (szerokość)** | 19, 25, 32, 38, 51, 57, 64, 70, 76, 100, 102, 148, 152 mm | Wszystkie |
| **Rozmiar (wysokość)** | 13, 19, 25, 32, 38, 51, 76, 102, 127, 152, 210 mm | Wszystkie |
| **Gilza** | 19, 25, 76 mm + Fanfold | Wszystkie |
| **Materiał** | Wynika z serii (1 wartość per seria — ukryć filtr) | — |
| **Klej** | Permanentny, Zdejmowalny, All-temp, Krio | Wszystkie |

Sortowanie: cena ASC (default), cena DESC, rozmiar, Part Number.

Search: pełnotekstowy po Part Number i opisie wariantu.

### 3.4 Migracja stubów (redirect 301)

**`src/app/etykiety-termotransferowe-papierowe/page.tsx`** — zastąp:
```typescript
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/etykiety-termotransferowe/papierowe');
}
```

**`src/app/etykiety-termotransferowe-foliowe/page.tsx`** — analogicznie:
```typescript
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/etykiety-termotransferowe/foliowe');
}
```

Albo lepiej: usunąć foldery i dodać redirecty w `next.config.js`:
```js
async redirects() {
  return [
    { source: '/etykiety-termotransferowe-papierowe', destination: '/etykiety-termotransferowe/papierowe', permanent: true },
    { source: '/etykiety-termotransferowe-foliowe', destination: '/etykiety-termotransferowe/foliowe', permanent: true },
  ];
}
```

### 3.5 Aktualizacja subkategorii w `products.ts`

Sprawdzić w `src/data/products.ts` czy istnieją obiekty subcategory dla:
- `etykiety-termotransferowe` (rodzic)
- `etykiety-termotransferowe-papierowe`
- `etykiety-termotransferowe-foliowe`
- `etykiety-termotransferowe-specjalne` (NOWA — dodać)

Każdy obiekt musi mieć:
```typescript
{
  slug: 'etykiety-termotransferowe-specjalne',
  name: 'Etykiety termotransferowe specjalne',
  seoTitle: 'Etykiety termotransferowe specjalne Zebra — krio, plomby, zabezpieczające',
  seoDescription: 'Specjalistyczne etykiety termotransferowe Zebra: kriogeniczne (-196°C), do worków z krwią, zabezpieczające VOID, plomby destruktywne. 5 serii, 17 wariantów.',
  parentSlug: 'etykiety-termotransferowe',
  // ...
}
```

### 3.6 Komponent kafelka podkategorii (opcjonalnie nowy)

Jeśli landing-rodzic ma 3 duże kafelki podkategorii (a nie kafelki serii), prawdopodobnie potrzebny będzie nowy komponent `<SubcategoryBanner>`. Alternatywa: użyć istniejącego wzoru `<BannerCard size="large">` z innym mapowaniem danych.

---

## 4. UX requirements — kluczowe rzeczy

### 4.1 Hero każdej strony

USP badges (4 sztuki):
- "16 serii, 982 warianty"
- "Atesty BfR XIV, FDA, EC 1935/2004"
- "Autoryzowany partner Zebra"
- "Doradztwo techniczne i próbki"

### 4.2 Tabela porównawcza serii

Każda strona-rodzic ma tabelę porównującą wszystkie serie tej podkategorii. Kolumny:

| Seria (link) | Materiał | Klej | Top-coat | Atest żywnościowy | Trwałość | Od (zł) |
|---|---|---|---|---|---|---|

Wiersze posortowane: bestseller → premium → specjalistyczne → budżetowa → niche.

### 4.3 Sticky CTA na stronie serii

Po prawej stronie stronie serii w sticky pozycji (desktop) lub bottom-sticky bar (mobile):
- Cena od XXX zł netto
- "Zobacz warianty" (scroll do tabeli)
- "Zapytaj o próbkę" (link do formularza)
- "Zadzwoń: +48 607 819 688"

### 4.4 Tabela wariantów

Kluczowe wymagania:
- **Default state**: tabela rozwinięta z pierwszymi 20 wariantami widocznymi, reszta za "Pokaż wszystkie 458 wariantów"
- **Filtry collapse-able**: na mobile zwinięte, na desktop rozwinięte
- **Liczniki przy filtrach**: "Rozmiar (3 wybrane) → 47 wariantów"
- **Empty state**: "Nie znaleźliśmy wariantu? Zapytaj o niestandardowy rozmiar"
- **CTA per wariant**: "Dodaj do koszyka" → przekieruj na stronę produktu z preselekcjonowanym Part Number w URL `/produkt/zebra-z-perform-1000t?pn=87985`

### 4.5 Schema JSON-LD

Na każdej stronie:
- **Landing-rodzic**: `CollectionPage` + `ItemList` (3 podkategorie) + `BreadcrumbList` + `FAQPage`
- **Landing podkategorii**: `CollectionPage` + `ItemList` (serie tej podkategorii) + `BreadcrumbList` + `FAQPage`
- **Strona serii**: `Article` + `BreadcrumbList` + `FAQPage` + `Product` (z `offers` dla najtańszego wariantu jako representative)

Wzór generator dla Product schema na stronie serii:
```typescript
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: series.h1,
  image: product?.images?.[0],
  description: series.seoDescription,
  brand: { '@type': 'Brand', name: 'Zebra Technologies' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'PLN',
    lowPrice: series.priceFrom,
    highPrice: Math.max(...product.variants.map(v => v.priceFrom || 0)),
    offerCount: product.variants.length,
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'TAKMA' },
  },
};
```

---

## 5. SEO — kluczowe frazy do osadzenia

### Strona-rodzic `/etykiety-termotransferowe`

- H1: "Etykiety termotransferowe Zebra"
- Title: "Etykiety termotransferowe Zebra — 16 serii, 982 warianty | TAKMA"
- Meta: "Pełna gamma etykiet termotransferowych Zebra w jednym miejscu: papierowe, foliowe i specjalistyczne. Z-Perform 1000T, Z-Ultimate 3000T, Cryocool. Doradztwo + próbki."

### `/etykiety-termotransferowe/papierowe`

- H1: "Etykiety termotransferowe papierowe Zebra"
- Title: "Etykiety termotransferowe papierowe Zebra — Z-Perform, Z-Select | TAKMA"
- Frazy: "etykiety termotransferowe papierowe", "Z-Perform 1000T", "etykiety wysyłkowe", "etykiety na karton"

### `/etykiety-termotransferowe/foliowe`

- H1: "Etykiety termotransferowe foliowe Zebra"
- Title: "Etykiety termotransferowe foliowe Zebra — Z-Ultimate, PolyPro, PolyE | TAKMA"
- Frazy: "etykiety termotransferowe foliowe", "etykiety poliestrowe", "Z-Ultimate 3000T", "etykiety na produkty"

### `/etykiety-termotransferowe/specjalne`

- H1: "Etykiety termotransferowe specjalne — krio, plomby, zabezpieczające"
- Title: "Etykiety kriogeniczne, plomby destruktywne i zabezpieczające Zebra | TAKMA"
- Frazy: "etykiety kriogeniczne", "etykiety na worki z krwią", "etykiety VOID", "etykiety destruktywne", "plomby zabezpieczające"
- **Strategia**: bardzo długie ogony, niska konkurencja, wysoka intencja zakupowa

---

## 6. Kolejność implementacji

**Faza 1 — Dane (2-3 dni)**
1. Stworzyć `src/data/transfer-label-series.ts` (16 obiektów + helpery)
2. Wkleić zawartość `NEW-PRODUCTS-etykiety-termotransferowe.ts` do `src/data/products.ts`
3. Dodać subcategorię `etykiety-termotransferowe-specjalne` do `products.ts`

**Faza 2 — Strony (3-4 dni)**
4. Stworzyć landing-rodzic `/etykiety-termotransferowe/page.tsx`
5. Stworzyć 3 strony podkategorii (`papierowe`, `foliowe`, `specjalne`)
6. Stworzyć dynamiczną stronę serii `[subcategory]/serie/[slug]/page.tsx` + `SeriesVariantsTable.tsx`

**Faza 3 — Migracja (1 dzień)**
7. Dodać redirecty 301 w `next.config.js`
8. Usunąć/zastąpić stuby `etykiety-termotransferowe-papierowe` i `etykiety-termotransferowe-foliowe`

**Faza 4 — Weryfikacja (1 dzień)**
9. Sprawdzić build (`npm run build`), brak błędów TS
10. Walidacja schema JSON-LD przez [Google Rich Results Test](https://search.google.com/test/rich-results)
11. Lighthouse audit — Performance >85, SEO 100
12. Sprawdzić wszystkie linki wewnętrzne (Linkcheck)
13. Dodać linki do sitemap `app/sitemap.ts`

---

## 7. Checklist weryfikacji (DoD)

Przed merge'em PR:

- [ ] Wszystkie 982 warianty wyświetlają się w tabelach (po podkategoriach: 604 + 361 + 17)
- [ ] Filtry rozmiaru, gilzy i kleju działają poprawnie
- [ ] Sortowanie po cenie ASC/DESC działa
- [ ] Search pełnotekstowy po Part Number działa
- [ ] Breadcrumby 5-poziomowe są zgodne ze strukturą URL
- [ ] Schema JSON-LD valid (Article + Product + ItemList + BreadcrumbList + FAQPage)
- [ ] Wszystkie 16 stron serii generują się staticznie (`generateStaticParams`)
- [ ] Strona serii zawiera sekcję "Polecane taśmy barwiące" z linkiem do `/tasmy-termotransferowe`
- [ ] Redirecty 301 z `/etykiety-termotransferowe-papierowe` i `-foliowe` działają
- [ ] Sitemap zawiera wszystkie nowe URL-e
- [ ] Lighthouse SEO 100, Performance >85
- [ ] Nigdzie nie używamy anglicyzmów w UI (zamiast "rugged" piszemy "wytrzymały", zamiast "stock" piszemy "stan magazynowy" itp. — patrz `PREFERENCJE-jak-pisac.md`)
- [ ] Mobile responsive — tabela wariantów scrollowalna, filtry collapse-able
- [ ] Polskie znaki diakrytyczne w slug-ach NIE występują (tylko ASCII)

---

## 8. Pliki źródłowe — gdzie szukać danych

**Wszystkie 982 SKU z cenami PLN, opisami i atrybutami**:
- `/Users/jakubtiuchty/takma/Etykiety termotransferowe/MASTER-etykiety-termotransferowe-982.xlsx` — pełny rejestr
- `/Users/jakubtiuchty/takma/Etykiety termotransferowe/IMPORT-etykiety-termotransferowe-FINAL.xlsx` — import-ready z polskimi nazwami

**16 obiektów Product gotowych do wklejenia do `src/data/products.ts`**:
- `/Users/jakubtiuchty/takma/NEW-PRODUCTS-etykiety-termotransferowe.ts`

**Strategia, SEO i analiza**:
- `/Users/jakubtiuchty/takma/RAPORT-analiza-etykiet-termotransferowych.md`

**Preferencje językowe użytkownika (NIE używać anglicyzmów)**:
- `/Users/jakubtiuchty/takma/PREFERENCJE-jak-pisac.md`

**Wzorzec do skopiowania 1:1 (DT)**:
- `src/app/etykiety-termiczne/page.tsx`
- `src/app/etykiety-termiczne/serie/[slug]/page.tsx`
- `src/app/etykiety-termiczne/serie/[slug]/SeriesVariantsTable.tsx`
- `src/data/thermal-label-series.ts`

---

## 9. Czego NIE robić

**Anty-wzorce do unikania**:

1. **Nie kopiuj generycznego `<SubcategoryPage>` z istniejących stubów** — to placeholder bez UX. Klient odbiera to jako "niedopracowany sklep".
2. **Nie używaj anglicyzmów** w opisach (rugged → wytrzymały, stock → stan magazynowy, hot-swap → wymiana w trakcie pracy). Patrz `PREFERENCJE-jak-pisac.md`.
3. **Nie wymyślaj danych** — wszystkie 982 warianty + ceny + opisy są w plikach źródłowych. Jeśli czegoś brakuje (np. Qty/Box) — zostaw `undefined` lub `null`, NIE wymyślaj liczb.
4. **Nie mieszaj DT z TT** — to dwie różne technologie, klient kupuje albo jedno albo drugie. Nie pokazuj DT w sekcjach TT.
5. **Nie buduj nowych komponentów UI bez potrzeby** — używaj istniejących z `src/components/ui/` (Icons, InfoTooltip, LinkedText etc.).
6. **Nie zmieniaj `priceFrom` z `NEW-PRODUCTS-etykiety-termotransferowe.ts`** — to są wyliczone ceny PLN netto wg formuły EUR × 4,30 × 1,25. Jeśli kurs się zmieni, regeneruj z xlsx, nie edytuj ręcznie.

---

## 10. Pytania, które należy zadać klientowi PRZED implementacją

(Jeśli coś jest niejasne — przed rozpoczęciem kodu)

1. Czy 3 sekcje na landing-rodzicu (papierowe, foliowe, specjalne) mają być w jednym widoku, czy z kotwicami #papierowe / #foliowe / #specjalne dla nawigacji?
2. Czy filtr "Materiał" ma być widoczny na poziomie podkategorii (gdzie różne materiały istnieją), czy tylko na stronie serii?
3. Czy klient chce mieć "Porównaj 3 serie" (compare modal) jak np. na bcmarket.pl?
4. Czy zdjęcia produktów mają być z Image URL Zebra (bezpośredni link), czy najpierw pobrać i hostować lokalnie w `/public/images/products/etykiety-tt/`?
5. Czy `priceFrom` powinno być wyświetlane "od XXX zł netto" czy "od XXX zł brutto"?

---

**KONIEC BRIEFU.**

To wszystko, czego Claude Code potrzebuje, żeby wdrożyć kategorię TT w 1-2 tygodnie pracy.
