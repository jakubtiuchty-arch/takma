# Brief implementacyjny dla Claude Code — Taśmy termotransferowe (DODATEK)

**Cel**: Rozbudować istniejącą zaindeksowaną stronę `/tasmy-termotransferowe` w sklepie TAKMA o pełen asortyment 140 SKU + 12 stron modeli + **kluczowe powiązanie z etykietami TT**.

**Zależność**: Ten brief jest komplementarny do `BRIEF-CLAUDE-CODE-etykiety-termotransferowe.md`. Czytać razem.

---

## 0. Co już jest w repo (NIE RUSZAĆ URL)

- ✅ `src/app/tasmy-termotransferowe/page.tsx` (670 bajtów, generyczny `<SubcategoryPage>`)
- ✅ Subcategory `tasmy-termotransferowe` w `src/data/products.ts` (linia 476)
- ✅ 24 ribbony już dodane (lista `productIds` w subcategory definition)
- ✅ URL **jest zaindeksowany w Google** — **nie tworzymy redirectu, tylko rozbudowujemy treść**

## 1. Architektura URL (FLAT — jak `/etykiety-termiczne`)

```
/tasmy-termotransferowe                              ← LANDING (rozbudować — zachować URL!)
/tasmy-termotransferowe/serie/[slug]                 ← STRONA MODELU TAŚMY (nowa, dynamiczna)
```

**Decyzja**: Płasko, bez zagnieżdżeń podkategoriami. 12 modeli grupowanych na 1 stronie według sekcji "Woskowe / Woskowo-żywiczne / Żywiczne" (wzorzec z `/etykiety-termiczne`).

## 2. Pliki do utworzenia / zmodyfikowania

### 2.1 `src/data/transfer-ribbon-series.ts` (NOWY)

Analogiczny do `thermal-label-series.ts`, ale dla taśm:

```typescript
export type RibbonCategory = 'woskowe' | 'woskowo-zywiczne' | 'zywiczne';

export type RibbonPositioning =
  | 'bestseller'
  | 'standard'
  | 'premium'
  | 'specjalistyczna'
  | 'ekonomiczna';

export interface RibbonSeries {
  // IDENTITY
  slug: string;                    // np. "2300-wax"
  productId: string;               // np. "zebra-2300-wax" (link do products.ts)
  category: RibbonCategory;
  badge: string;                   // np. "Zebra 2300"
  title: string;                   // np. "Zebra 2300 Wax"
  tagline: string;                 // max ~110 chars
  positioning: RibbonPositioning;

  // ATRYBUTY
  outsideCoated: boolean;          // OS — Out-Side Coated (standard Zebry)
  ulCertified: boolean;            // UL/cUL — dla sprzętu elektrycznego
  printSpeedMax: number;           // mm/s, np. 304 (12 ips)
  chemicalResistance: 'niska' | 'średnia' | 'wysoka' | 'ekstremalna';
  uvResistance: 'brak' | 'krótkoterminowa' | 'długoterminowa';
  temperatureRange: string;        // np. "-40°C do +120°C"
  priceFrom: number;               // PLN netto
  accent: string;                  // hex kolor

  // SEO
  seoTitle: string;
  seoDescription: string;
  h1: string;

  // HERO
  heroIntro: string;
  keyHighlights: string[];

  // SEKCJE OPISOWE (5-7 sekcji per taśma)
  sections: { heading: string; content: string }[];

  // SPECYFIKACJA
  techSpecs: { label: string; value: string }[];

  // ZASTOSOWANIA
  applications: string[];
  notRecommendedFor: string[];

  // KOMPATYBILNE DRUKARKI
  compatiblePrinters: {
    desktop: string[];
    midRange: string[];
    industrial: string[];
    mobile: string[];
  };

  // KLUCZOWE: ETYKIETY DO KTÓRYCH TA TAŚMA JEST POLECANA
  recommendedForLabels: {
    seriesSlug: string;             // slug z transfer-label-series.ts
    seriesName: string;              // wyświetlana nazwa
    role: 'primary' | 'alternative'; // główna lub alternatywa
    when?: string;                   // (alternatywa) kiedy wybrać
  }[];

  // FAQ
  faq: { question: string; answer: string }[];
}

export const transferRibbonSeries: RibbonSeries[] = [
  // 12 obiektów — patrz dane w NEW-PRODUCTS-tasmy-termotransferowe.ts
];

// HELPERY
export function getRibbonSeriesBySlug(slug: string): RibbonSeries | undefined { ... }
export function getRibbonSeriesByCategory(cat: RibbonCategory): RibbonSeries[] { ... }
export function getAllRibbonSeriesSlugs(): string[] { ... }
```

### 2.2 Lista 12 modeli taśm

| # | Slug | Category | Positioning | Bestseller |
|---|---|---|---|---|
| 1 | `1600-wax` | woskowe | ekonomiczna | nie |
| 2 | `2100-wax` | woskowe | premium | nie |
| 3 | `2300-wax` | woskowe | **bestseller** | **TAK** |
| 4 | `5319-wax` | woskowe | specjalistyczna | nie |
| 5 | `3200-wax-resin` | woskowo-zywiczne | **bestseller** | **TAK** |
| 6 | `3300-wax-resin` | woskowo-zywiczne | standard | nie |
| 7 | `3400-wax-resin` | woskowo-zywiczne | premium | nie |
| 8 | `5555-wax-resin` | woskowo-zywiczne | specjalistyczna | nie |
| 9 | `4800-resin` | zywiczne | standard | nie |
| 10 | `5095-resin` | zywiczne | **bestseller** | **TAK** |
| 11 | `5100-resin` | zywiczne | premium | nie |
| 12 | `8000-chemresist` | zywiczne | specjalistyczna | nie |

### 2.3 `src/app/tasmy-termotransferowe/page.tsx` (PRZEBUDOWAĆ z 670 bajtów do pełnego landinga)

Wzorzec **1:1 z `/etykiety-termiczne/page.tsx`**:
- Hero (slate-950, USP badges: "12 modeli, 140 wariantów" + "Polecane przez Zebra" + "Doradztwo techniczne" + "Bestseller 2300 Wax od 110 zł")
- 3 sekcje kafelków modeli:
  - **Najczęściej wybierane (bestsellery)** — 3 duże kafelki: 2300 Wax, 3200 Wax/Resin, 5095 Resin
  - **Pełna gamma woskowe** — 4 kafelki normalne: 1600, 2100, 2300, 5319
  - **Premium i specjalistyczne (resin)** — 5 kafelków: 3400, 4800, 5100, 8000 ChemResist + 5555
- CategoryGuide (rich SEO content): "Co to jest taśma termotransferowa", "Wax vs Wax/Resin vs Resin", tabela porównawcza 12 modeli, "Jak dobrać taśmę do drukarki", "Jak dobrać taśmę do etykiety", FAQ (10 pytań)

### 2.4 `src/app/tasmy-termotransferowe/serie/[slug]/page.tsx` (NOWY)

Wzorzec **1:1 z `/etykiety-termiczne/serie/[slug]/page.tsx`** + jeden NOWY blok:

**Blok "Polecana dla etykiet"** (kluczowy UX):
- Renderowany z `series.recommendedForLabels`
- Pokazuje główną polecaną etykietę + 0-2 alternatywy
- Każda etykieta = klikalny kafelek z linkiem `/etykiety-termotransferowe/{podkategoria}/serie/{seriesSlug}`
- Layout:
  ```
  ┌────────────────────────────────────────────┐
  │ Polecana dla etykiet:                      │
  │                                            │
  │ [Z-Perform 1000T]   [Z-Perform 1000T       │
  │  papier ekonomia     Removable]            │
  │                      papier zdejmowalny    │
  │                                            │
  │ [Z-Select 2000T]                           │
  │  papier premium                            │
  └────────────────────────────────────────────┘
  ```

### 2.5 `src/app/tasmy-termotransferowe/serie/[slug]/RibbonVariantsTable.tsx` (NOWY client component)

Wzorzec **1:1 z `SeriesVariantsTable.tsx`** + filtry specyficzne dla taśm:

| Filtr | Wartości | Default |
|---|---|---|
| **Szerokość** | 33, 40, 51, 56, 60, 64, 80, 83, 89, 102, 110, 131, 156, 174, 220 mm | Wszystkie |
| **Długość** | 30, 50, 74, 300, 450, 600, 900 m | Wszystkie |
| **Gilza** | 12 mm, 25 mm | Wszystkie |
| **Konstrukcja** | OS (Out-Side Coated — standard Zebry) | OS |

Sortowanie: cena ASC (default), cena DESC, szerokość, długość, Part Number.

Search: pełnotekstowy po Part Number i opisie wariantu.

## 3. **KLUCZOWE**: Cross-link etykieta TT → taśma

To **najważniejszy element UX** całego wdrożenia. Klient kupujący etykietę musi od razu wiedzieć, jaką taśmę dokupić.

### 3.1 Rozszerzyć `TransferLabelSeries` (z briefu etykiet TT)

W `src/data/transfer-label-series.ts` zmienić pole `recommendedRibbons` na bogatszą strukturę:

```typescript
recommendedRibbons: {
  primary: {
    seriesSlug: string;        // np. "2300-wax"
    model: string;             // np. "Zebra 2300 Wax"
    why: string;               // np. "Standard codzienny — najlepsza relacja jakość/cena"
  };
  alternatives?: {
    seriesSlug: string;
    model: string;
    when: string;              // np. "Wybierz gdy etykieta będzie miała kontakt z wilgocią lub tarciem"
  }[];
  pickerTip?: string;          // krótki tekst tipa doboru wyświetlany pod listą
};
```

### 3.2 Pełna mapa etykieta → taśma (do skopiowania jako dane TS)

```typescript
// Stała mapowania — wkleić do transfer-label-series.ts (lub osobnego pliku)

export const LABEL_RIBBON_MAP: Record<string, TransferLabelSeries['recommendedRibbons']> = {
  'z-perform-1000t': {
    primary: { seriesSlug: '2300-wax', model: 'Zebra 2300 Wax', why: 'Bestseller — standard codzienny do papieru ekonomicznego' },
    alternatives: [
      { seriesSlug: '1600-wax', model: 'Zebra 1600 Wax', when: 'Wybierz jeśli wymagana jest jeszcze niższa cena i krótkie serie w temp. pokojowej' },
    ],
    pickerTip: '2300 Wax to bezpieczny domyślny wybór. 1600 — tylko jeśli koszt jest absolutnym priorytetem.',
  },
  'z-perform-1000t-removable': {
    primary: { seriesSlug: '2300-wax', model: 'Zebra 2300 Wax', why: 'Standardowa kombinacja dla papieru z klejem zdejmowalnym' },
  },
  'z-select-2000t': {
    primary: { seriesSlug: '2300-wax', model: 'Zebra 2300 Wax', why: 'Wystarczająca dla większości zastosowań papieru powlekanego' },
    alternatives: [
      { seriesSlug: '3200-wax-resin', model: 'Zebra 3200 Wax/Resin', when: 'Wybierz gdy etykieta ma kontakt z wilgocią, tarciem (gastronomia, healthcare)' },
    ],
    pickerTip: '2300 wystarcza w typowych warunkach. 3200 zalecane dla aplikacji wymagających wyższej odporności na ścieranie.',
  },
  'z-essentials-500t': {
    primary: { seriesSlug: '1600-wax', model: 'Zebra 1600 Wax', why: 'Najtańsza kombinacja — papier budżetowy + ekonomiczna taśma' },
  },
  '8000t-all-temp': {
    primary: { seriesSlug: '2100-wax', model: 'Zebra 2100 European Wax', why: 'European Wax działa w niskich temperaturach (chłodnia, mróz)' },
    alternatives: [
      { seriesSlug: '3400-wax-resin', model: 'Zebra 3400 Wax/Resin', when: 'Wybierz gdy mróz dodatkowo łączy się z tarciem lub wilgocią (transport mroźniczy)' },
    ],
    pickerTip: '2100 dla typowej chłodni/mroźni. 3400 dla transportu mroźniczego z ekspozycją na warunki zewnętrzne.',
  },
  'z-ultimate-3000t-white': {
    primary: { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', why: 'Wymagana przez Zebrę dla wszystkich poliestrów Z-Ultimate' },
    alternatives: [
      { seriesSlug: '5100-resin', model: 'Zebra 5100 Premium Resin', when: 'Wybierz gdy wymagana gwarancja czytelności 10+ lat lub cert. UL na sprzęcie elektrycznym' },
    ],
    pickerTip: '5095 to standard producenta. 5100 — dla tabliczek znamionowych maszyn z długą żywotnością.',
  },
  'z-ultimate-3000t-silver': {
    primary: { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', why: 'Standard producenta dla wariantu Silver' },
    alternatives: [
      { seriesSlug: '5100-resin', model: 'Zebra 5100 Premium Resin', when: 'Tabliczki znamionowe z gwarancją długoterminową' },
    ],
  },
  'polye-3100t-gloss': {
    primary: { seriesSlug: '3400-wax-resin', model: 'Zebra 3400 Wax/Resin', why: 'Optymalna dla polietylenu w typowych zastosowaniach (kosmetyki, opakowania)' },
    alternatives: [
      { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', when: 'Wybierz gdy etykieta będzie miała kontakt z chemikaliami lub UV' },
    ],
    pickerTip: '3400 dla typowych zastosowań kosmetycznych i opakowaniowych. 5095 dla zastosowań przemysłowych chemicznych.',
  },
  'polypro-3000t-gloss': {
    primary: { seriesSlug: '3200-wax-resin', model: 'Zebra 3200 Wax/Resin', why: 'Standard dla polipropylenu białego błyszczącego' },
    alternatives: [
      { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', when: 'Wybierz dla aplikacji outdoor lub UV (krótkoterminowo)' },
    ],
    pickerTip: '3200 wystarcza w warunkach indoor. 5095 dla aplikacji z ekspozycją na słońce.',
  },
  'polypro-3000t-clear': {
    primary: { seriesSlug: '3200-wax-resin', model: 'Zebra 3200 Wax/Resin', why: 'Standard dla polipropylenu przezroczystego — efekt "no label"' },
  },
  'polypro-4000t-matte': {
    primary: { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', why: 'Wymagana dla matowego polipropylenu w aplikacjach machine vision' },
  },
  'polyo-3100t': {
    primary: { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', why: 'Optymalna dla poliolefiny w typowych zastosowaniach' },
    alternatives: [
      { seriesSlug: '4800-resin', model: 'Zebra 4800 Resin', when: 'Wybierz dla kontaktu z agresywnymi chemikaliami (beczki chemiczne, paliwa)' },
    ],
    pickerTip: '5095 dla większości aplikacji. 4800 dla aplikacji wymagających odporności na rozpuszczalniki.',
  },
  '8100t-cryocool': {
    primary: { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', why: 'Standard dla krioprzechowywania (-196°C ciekły azot)' },
    alternatives: [
      { seriesSlug: '5100-resin', model: 'Zebra 5100 Premium Resin', when: 'Wybierz dla długoterminowego przechowywania (10+ lat) w biobankach' },
    ],
    pickerTip: '5095 wystarcza dla większości aplikacji kriogenicznych. 5100 — gdy wymagana maksymalna trwałość.',
  },
  '8000t-blood-bag-deep-freeze': {
    primary: { seriesSlug: '5095-resin', model: 'Zebra 5095 Resin', why: 'Standard banków krwi zgodny z ISBT 128' },
  },
  '8000t-void-matte': {
    primary: { seriesSlug: '4800-resin', model: 'Zebra 4800 Resin', why: 'Standard dla plomb zabezpieczających VOID' },
    alternatives: [
      { seriesSlug: '5100-resin', model: 'Zebra 5100 Premium Resin', when: 'Wybierz dla wyższej jakości kodu kreskowego' },
    ],
  },
  '8100t-z-destruct-pe': {
    primary: { seriesSlug: '4800-resin', model: 'Zebra 4800 Resin', why: 'Standard dla plomb destruktywnych' },
    alternatives: [
      { seriesSlug: '8000-chemresist', model: 'Zebra 8000 ChemResist', when: 'Wybierz dla plomb na sprzęcie chemicznym, lotniczym lub wojskowym' },
    ],
    pickerTip: '4800 dla typowych zastosowań. ChemResist — gdy konieczna ekstremalna odporność na rozpuszczalniki.',
  },
};
```

### 3.3 Komponent UI: `<RecommendedRibbonsBlock>`

Wyświetlany na każdej stronie serii etykiety TT (np. `/etykiety-termotransferowe/papierowe/serie/z-perform-1000t`):

```tsx
function RecommendedRibbonsBlock({ recommendedRibbons }: { recommendedRibbons: TransferLabelSeries['recommendedRibbons'] }) {
  const r = recommendedRibbons;
  return (
    <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">🎯</span>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Jaką taśmę dokupić?</h3>
          <p className="text-sm text-gray-600">Dla tej etykiety potrzebujesz taśmę barwiącą (ribbon).</p>
        </div>
      </div>

      {/* PRIMARY */}
      <Link href={`/tasmy-termotransferowe/serie/${r.primary.seriesSlug}`}
            className="block bg-white border-2 border-emerald-300 rounded-lg p-4 mb-3 hover:border-emerald-500 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded">
            ✓ Polecana
          </span>
          <ArrowRightIcon size={16} className="text-emerald-600" />
        </div>
        <h4 className="font-bold text-gray-900 mb-1">{r.primary.model}</h4>
        <p className="text-sm text-gray-700">{r.primary.why}</p>
      </Link>

      {/* ALTERNATIVES */}
      {r.alternatives?.map((alt, i) => (
        <Link key={i} href={`/tasmy-termotransferowe/serie/${alt.seriesSlug}`}
              className="block bg-white border border-slate-200 rounded-lg p-4 mb-3 hover:border-slate-400 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded">
              Alternatywa
            </span>
            <ArrowRightIcon size={16} className="text-slate-400" />
          </div>
          <h4 className="font-bold text-gray-900 mb-1">{alt.model}</h4>
          <p className="text-sm text-gray-700"><strong className="text-amber-800">Kiedy wybrać:</strong> {alt.when}</p>
        </Link>
      ))}

      {/* PICKER TIP */}
      {r.pickerTip && (
        <div className="mt-4 p-3 bg-white/60 border border-amber-200 rounded-lg">
          <p className="text-sm text-gray-700"><strong className="text-amber-900">💡 Tip doboru:</strong> {r.pickerTip}</p>
        </div>
      )}
    </section>
  );
}
```

### 3.4 Odwrotna strona — na stronie taśmy pokazujemy etykiety, do których ta taśma jest polecana

Każda strona modelu taśmy (`/tasmy-termotransferowe/serie/[slug]`) ma sekcję **"Polecana dla etykiet"** z `series.recommendedForLabels`:

```tsx
function RecommendedForLabelsBlock({ items }: { items: RibbonSeries['recommendedForLabels'] }) {
  const primary = items.filter(i => i.role === 'primary');
  const alts = items.filter(i => i.role === 'alternative');
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Polecana dla etykiet</h2>
      {primary.length > 0 && (
        <>
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-2">
            Główna rekomendacja ({primary.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {primary.map(label => (
              <Link key={label.seriesSlug}
                    href={`/etykiety-termotransferowe/${labelSubcategory(label.seriesSlug)}/serie/${label.seriesSlug}`}
                    className="block bg-white border border-emerald-200 rounded-lg p-4 hover:border-emerald-500">
                <span className="text-xs font-bold uppercase text-emerald-700">Polecana</span>
                <h4 className="font-bold text-gray-900 mt-1">{label.seriesName}</h4>
              </Link>
            ))}
          </div>
        </>
      )}
      {alts.length > 0 && (
        <>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
            Alternatywa ({alts.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {alts.map(label => (
              <Link key={label.seriesSlug}
                    href={`/etykiety-termotransferowe/${labelSubcategory(label.seriesSlug)}/serie/${label.seriesSlug}`}
                    className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-400">
                <span className="text-xs font-bold uppercase text-slate-500">Alternatywa</span>
                <h4 className="font-bold text-gray-900 mt-1">{label.seriesName}</h4>
                {label.when && <p className="text-xs text-gray-600 mt-1">{label.when}</p>}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
```

## 4. Tabela porównawcza 12 modeli (do CategoryGuide na landingu)

```tsx
<table>
  <thead>
    <tr>
      <th>Model</th><th>Kategoria</th><th>UL/cUL</th>
      <th>Odporność chemiczna</th><th>Odporność UV</th>
      <th>Polecana do (etykiety)</th><th>Od (zł)</th>
    </tr>
  </thead>
  <tbody>
    {transferRibbonSeries.map(s => (
      <tr>
        <td><Link href={`/tasmy-termotransferowe/serie/${s.slug}`}>{s.title}</Link></td>
        <td>{categoryLabel(s.category)}</td>
        <td>{s.ulCertified ? '✓' : '—'}</td>
        <td>{s.chemicalResistance}</td>
        <td>{s.uvResistance}</td>
        <td>{s.recommendedForLabels.filter(l=>l.role==='primary').slice(0,2).map(l=>l.seriesName).join(', ') || '—'}</td>
        <td>{s.priceFrom.toLocaleString('pl-PL')} zł</td>
      </tr>
    ))}
  </tbody>
</table>
```

## 5. SEO — kluczowe frazy

| Strona | H1 | Frazy |
|---|---|---|
| `/tasmy-termotransferowe` | Taśmy termotransferowe Zebra (ribbon) | "taśma termotransferowa", "ribbon zebra", "taśma do drukarki etykiet" |
| `/tasmy-termotransferowe/serie/2300-wax` | Zebra 2300 Wax | "zebra 2300 wax", "taśma woskowa", "zebra ribbon 2300" |
| `/tasmy-termotransferowe/serie/3200-wax-resin` | Zebra 3200 Wax/Resin | "zebra 3200", "taśma woskowo-żywiczna", "3200 ribbon" |
| `/tasmy-termotransferowe/serie/5095-resin` | Zebra 5095 Resin | "zebra 5095 resin", "taśma żywiczna", "5095 ribbon", "taśma do poliestru" |

## 6. Kolejność implementacji

**Faza 1 — Dane (1 dzień)**
1. Stworzyć `src/data/transfer-ribbon-series.ts` (12 obiektów + helpery)
2. Wkleić `NEW-PRODUCTS-tasmy-termotransferowe.ts` do `src/data/products.ts` (zastępując 24 istniejące ribbony lub łącząc je z nowymi 140 SKU)
3. **W `transfer-label-series.ts` — rozszerzyć `recommendedRibbons`** o `LABEL_RIBBON_MAP` z sekcji 3.2

**Faza 2 — Strony (2 dni)**
4. Przebudować `src/app/tasmy-termotransferowe/page.tsx` (z 670 bajtów do pełnego landinga ~600 linii)
5. Stworzyć `src/app/tasmy-termotransferowe/serie/[slug]/page.tsx`
6. Stworzyć `RibbonVariantsTable.tsx` (klon `SeriesVariantsTable.tsx`)

**Faza 3 — UX cross-link (1 dzień)**
7. Stworzyć komponent `<RecommendedRibbonsBlock>` i osadzić w każdej stronie serii etykiety TT
8. Stworzyć komponent `<RecommendedForLabelsBlock>` i osadzić w każdej stronie serii taśmy
9. Aktualizować helpery `labelSubcategory(slug)` żeby budowały poprawne URL-e

**Faza 4 — Weryfikacja (1 dzień)**
10. Build OK, wszystkie 12 stron serii taśm generują się staticznie
11. Wszystkie 16 stron serii etykiet TT pokazują polecaną taśmę + alternatywy + tip
12. Wszystkie 12 stron serii taśm pokazują polecane etykiety
13. Cykl klika sklep: etykieta → polecana taśma → tabela wariantów → wracam do etykiety (UX flow OK)
14. Schema markup walidacja

## 7. Checklist DoD

- [ ] Wszystkie 140 wariantów wyświetlają się w tabelach (woskowe 64 + woskowo-żywiczne 37 + żywiczne 39)
- [ ] Filtry szerokość, długość, gilza, konstrukcja OS działają
- [ ] Każda strona serii TASMY ma sekcję "Polecana dla etykiet" z linkami
- [ ] Każda strona serii ETYKIETY TT ma sekcję "Jaką taśmę dokupić" z primary + alternatives + pickerTip
- [ ] Linki w obu kierunkach klikają i wracają (cross-link 2-way)
- [ ] Tabela porównawcza 12 modeli na landingu ma sortowanie i filtrowanie
- [ ] Schema JSON-LD waliduje (Article + Product + BreadcrumbList + FAQPage)
- [ ] URL `/tasmy-termotransferowe` ZACHOWANY (nie był ruszony)
- [ ] Lighthouse SEO 100, Performance >85
- [ ] Mobile responsive — kafelki polecanej taśmy / etykiety czytelne na mobile
- [ ] Polszczyzna bez anglicyzmów (rugged → wytrzymały, stock → stan magazynowy, hot-swap → wymiana w trakcie pracy)

## 8. Pliki źródłowe

- **Wszystkie 140 SKU**: `/Users/jakubtiuchty/takma/Taśmy TT/MASTER-tasmy-tt-140.xlsx`
- **Import-ready**: `/Users/jakubtiuchty/takma/Taśmy TT/IMPORT-tasmy-tt-FINAL.xlsx`
- **TS Products (12 obiektów, 140 wariantów)**: `/Users/jakubtiuchty/takma/NEW-PRODUCTS-tasmy-termotransferowe.ts`
- **Strategia + mapowanie**: `/Users/jakubtiuchty/takma/RAPORT-analiza-tasm-tt.md`
- **Wzorzec landinga**: `src/app/etykiety-termiczne/page.tsx`
- **Wzorzec strony serii**: `src/app/etykiety-termiczne/serie/[slug]/page.tsx`
- **Wzorzec tabeli wariantów**: `src/app/etykiety-termiczne/serie/[slug]/SeriesVariantsTable.tsx`
- **Preferencje językowe**: `/Users/jakubtiuchty/takma/PREFERENCJE-jak-pisac.md`

## 9. Anty-wzorce

1. **NIE RUSZAĆ URL `/tasmy-termotransferowe`** — jest zaindeksowany w Google. Tylko rozbudowa contentu.
2. **NIE robić podkategorii URL** (`/tasmy-termotransferowe/woskowe`) — flat lepiej dla 140 SKU.
3. **NIE pokazywać wszystkich 12 modeli w "Polecana dla etykiet"** — max 1 primary + 2 alternatywy z tipem doboru.
4. **NIE używać anglicyzmów** (ribbon → taśma barwiąca, wax → woskowa, resin → żywiczna).
5. **NIE wymyślać cen** — dla 12 SKU z ceną=0 wpisać "Cena na zapytanie" w wariancie, NIE generować random.

## 10. Podsumowanie — co zmienia ten cross-link

Po wdrożeniu **każdy klient kupujący etykietę TT** dostaje od razu rekomendację taśmy z uzasadnieniem ("dlaczego ta") i ewentualną alternatywą ("kiedy wybrać tamtą"). Plus klikalny link do strony taśmy z całą gamą wariantów rozmiarowych.

Efekt biznesowy:
- **Zwiększony AOV** (Average Order Value) — etykieta + taśma w jednym koszyku zamiast tylko etykieta
- **Zmniejszenie połączeń do supportu** — klient nie pyta "jaką taśmę kupić" bo widzi to na stronie
- **Lepszy SEO** — gęsta sieć linków wewnętrznych (16 etykiet × średnio 1,5 taśmy = 24 dodatkowych linków crawlable per cykl)
- **Cross-sell efficiency** — Z-Ultimate White → 5095 Resin (dwa najlepsze produkty w swoich kategoriach idą w parze)
