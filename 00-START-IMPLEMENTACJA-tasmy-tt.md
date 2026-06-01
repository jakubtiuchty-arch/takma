# Start implementacji — Taśmy termotransferowe + mikrowidget

**Cel projektu**: Wdrożyć dział taśm termotransferowych Zebra w sklepie TAKMA + mikrowidget kalkulatora "ile etykiet z rolki" na karcie produktu.

**Status startu**: Etykiety termotransferowe (TT) już są wdrożone w sklepie pod `/etykiety-termotransferowe-zebra`. Pozostaje **tylko warstwa taśm** + ficzer kalkulatora.

**Dla Claude Code**: ten plik jest punktem wejścia. Przeczytaj go pierwszy, potem podążaj za briefami w kolejności faz.

---

## 1. Stan obecny w repo (już istnieje, ZACHOWAĆ)

### 1.1 Etykiety termotransferowe — w pełni wdrożone

| Pole | Wartość |
|---|---|
| URL rodzic | `/etykiety-termotransferowe-zebra` |
| URL serii | `/etykiety-termotransferowe-zebra/[subcategory]/serie/[slug]` |
| Plik danych | `src/data/transfer-label-series.ts` (16 serii, ~102 KB) |
| Layout stron | `src/app/etykiety-termotransferowe-zebra/page.tsx` + `[subcategory]/page.tsx` + `[subcategory]/serie/[slug]/page.tsx` + `SeriesVariantsTable.tsx` |
| Cross-link do taśm | pole `recommendedRibbons` w `TransferLabelSeries` (tablica nazw, np. `waxResin: ['Zebra 2300 Wax', 'Zebra 3200 Wax/Resin']`) |

### 1.2 Taśmy termotransferowe — stub do przebudowy

| Pole | Wartość |
|---|---|
| URL | `/tasmy-termotransferowe` ✅ **ZAINDEKSOWANY W GOOGLE** — nie ruszać |
| Plik | `src/app/tasmy-termotransferowe/page.tsx` (670 bajtów, generyczny `<SubcategoryPage>`) |
| Co jest | ~24 ribbony jako `productIds` w subcategory w `products.ts` |
| Co brakuje | Dynamiczny route `/serie/[slug]`, pełen landing, mikrowidget, cross-link |

### 1.3 Wzorzec referencyjny (klonujemy)

`/etykiety-termiczne` — pełen pattern landing → serie → tabela wariantów. **Nie ruszamy, tylko kopiujemy strukturę.**

---

## 2. Co budujemy — 2 moduły

| Moduł | SKU | Modeli | Slug rodzic | Status |
|---|---|---|---|---|
| **A. Taśmy TT — pełen katalog** | **140** | 12 | `/tasmy-termotransferowe` (URL zaindeksowany, rozbudowa) | nowy katalog produktów + serie + cross-link |
| **B. Mikrowidget kalkulatora** | — | — | komponent na karcie produktu rolki taśmy | nowy ficzer UX |

---

## 3. Pliki źródłowe — kompletna mapa

### 3.1 Dane gotowe do wklejenia do repo

| Plik | Co zawiera | Wkleić do |
|---|---|---|
| `/Users/jakubtiuchty/takma/NEW-PRODUCTS-tasmy-termotransferowe.ts` | **12 obiektów `Product`**, 140 wariantów (TypeScript, walidacja OK) | `src/data/products.ts` (zastępując/łącząc istniejące 24 ribbony) |

### 3.2 Briefy implementacyjne

| Brief | Co opisuje | Dla której fazy |
|---|---|---|
| `/Users/jakubtiuchty/takma/BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` | Typ `RibbonSeries`, struktura stron, komponenty cross-linku, schema markup | Faza 1-3 |
| `/Users/jakubtiuchty/takma/SPEC-kalkulator-zuzycia-tasmy.md` | Mikrowidget `<RibbonLabelCountWidget>`, helper `labelsPerRoll`, miejsce osadzenia, GA4 tracking | Faza 4 |

### 3.3 Raporty + analizy (do referencji)

- `/Users/jakubtiuchty/takma/RAPORT-analiza-tasm-tt.md` — strategia + matryca mapowania etykieta→taśma
- `/Users/jakubtiuchty/takma/Taśmy TT/MASTER-tasmy-tt-140.xlsx` — pełny rejestr 140 SKU + sheet "mapowanie etykieta→taśma"
- `/Users/jakubtiuchty/takma/Taśmy TT/IMPORT-tasmy-tt-FINAL.xlsx` — z polskimi nazwami, cenami PLN

### 3.4 Konwencje językowe (obowiązkowe)

- `/Users/jakubtiuchty/takma/PREFERENCJE-jak-pisac.md` — **bez anglicyzmów**

---

## 4. Architektura URL po wdrożeniu

```
JUŻ ISTNIEJE — ZACHOWAĆ
├── /etykiety-termiczne                                       (wzorzec referencyjny DT)
│   └── /serie/[slug]                                          (12 serii DT)
│
├── /etykiety-termotransferowe-zebra                          (wdrożone — etykiety TT)
│   ├── /papierowe/serie/[slug]                                (4 serie papierowe)
│   ├── /foliowe/serie/[slug]                                  (7 serii foliowych)
│   └── /specjalne/serie/[slug]                                (5 serii specjalnych)
│
└── /tasmy-termotransferowe                                    (URL zaindeksowany — NIE RUSZAĆ)


NOWE — FAZA 2 (taśmy TT)
└── /tasmy-termotransferowe                                    (REBUILD istniejącego stuba 670 bajtów → pełen landing)
    └── /serie/[slug]                                           (12 modeli: 1600/2100/2300/5319-wax, 3200/3300/3400/5555-wax-resin, 4800/5095/5100-resin, 8000-chemresist)


NOWE — FAZA 3 (cross-link)
└── komponent <RecommendedRibbonsBlock> osadzony w istniejących stronach serii etykiet TT
└── komponent <RecommendedForLabelsBlock> osadzony w nowych stronach serii taśm


NOWE — FAZA 4 (mikrowidget)
└── komponent <RibbonLabelCountWidget> osadzony w /produkt/[slug]/[size]/[pn]
    (warunkowo: gdy produkt ma subcategoryIds zawierające 'tasmy-termotransferowe')
```

---

## 5. Kolejność wdrożenia — 4 fazy

### Faza 1 — Dane taśm (1-2 dni)

1. **Stworzyć `src/data/transfer-ribbon-series.ts`** (12 obiektów + helpery `getRibbonSeriesBySlug`, `getRibbonSeriesByCategory`, `getAllRibbonSeriesSlugs`)
   - Typ: patrz Brief taśm, sekcja 2.1
   - Treść: rozszerzyć z `NEW-PRODUCTS-tasmy-termotransferowe.ts` (dodać sekcje opisowe + FAQ + comparedWith — 5-7 sekcji per model, 5-8 pytań FAQ)
   - Dodatkowo: dla każdego modelu pole `recommendedForLabels: { seriesSlug, seriesName, role: 'primary' | 'alternative' }[]` — patrz tabela w sekcji 6 poniżej
2. **Wkleić `NEW-PRODUCTS-tasmy-termotransferowe.ts` do `src/data/products.ts`** (zastępując 24 stare ribbony)
3. **Walidacja**: build OK, brak duplikatów `id`, schema TS zgadza się z typami z `products.ts`

### Faza 2 — Strony taśm (3-4 dni)

1. **Przebudować** `src/app/tasmy-termotransferowe/page.tsx` z 670 bajtów do pełnego landinga (klon `/etykiety-termiczne/page.tsx`, 3 sekcje kafelków: woskowe / woskowo-żywiczne / żywiczne — patrz Brief taśm sekcja 2.3)
2. **Stworzyć** `src/app/tasmy-termotransferowe/serie/[slug]/page.tsx` (klon `/etykiety-termiczne/serie/[slug]/page.tsx`)
3. **Stworzyć** `RibbonVariantsTable.tsx` w tym samym folderze (klon `SeriesVariantsTable.tsx` z filtrami szerokość / długość / gilza)
4. **Wszystkie 12 stron serii** muszą generować się staticznie (`generateStaticParams`)

### Faza 3 — Cross-link (1 dzień)

**Z etykiety TT do taśmy** (`<RecommendedRibbonsBlock>`):

1. Stworzyć helper `src/lib/ribbon-name-to-slug.ts`:
   ```typescript
   export function ribbonNameToSlug(name: string): string {
     // 'Zebra 2300 Wax' → '2300-wax'
     // 'Zebra 5095 Resin' → '5095-resin'
     // 'Zebra 3200 Wax/Resin' → '3200-wax-resin'
     return name
       .replace(/^Zebra\s+/, '')
       .toLowerCase()
       .replace(/\//g, '-')
       .replace(/\s+/g, '-');
   }
   ```
2. Stworzyć komponent `<RecommendedRibbonsBlock>` (patrz Brief taśm sekcja 3.3) który:
   - Przyjmuje `recommendedRibbons` z `TransferLabelSeries` (jak jest, nie ingerujemy w typ)
   - Mapuje nazwy stringami na linki `/tasmy-termotransferowe/serie/{ribbonNameToSlug(name)}`
   - Renderuje kafelki z nazwą modelu i pierwszej pozycji = "polecana"
3. Osadzić `<RecommendedRibbonsBlock>` w istniejącej `src/app/etykiety-termotransferowe-zebra/[subcategory]/serie/[slug]/page.tsx`

**Z taśmy do etykiet TT** (`<RecommendedForLabelsBlock>`):

4. Stworzyć komponent `<RecommendedForLabelsBlock>` (patrz Brief taśm sekcja 3.4) który:
   - Odczytuje `recommendedForLabels` z `RibbonSeries`
   - Linkuje do `/etykiety-termotransferowe-zebra/{subcategory}/serie/{seriesSlug}` — uwaga: musi znać subkategorię etykiety
5. Helper `getLabelSubcategoryBySlug(seriesSlug)` — odczyt z `transferLabelSeries` po slug → zwraca subcategory
6. Osadzić `<RecommendedForLabelsBlock>` w `src/app/tasmy-termotransferowe/serie/[slug]/page.tsx`

### Faza 4 — Mikrowidget kalkulatora (1 dzień)

1. **Stworzyć** `src/lib/ribbon-math.ts`:
   ```typescript
   export const GAP_MM = 3;
   export const WASTE_MM = 2000;
   
   export function labelsPerRoll(rollLengthM: number, labelHeightMm: number): number {
     if (rollLengthM <= 0 || labelHeightMm <= 0) return 0;
     const effective = rollLengthM * 1000 - WASTE_MM;
     if (effective <= 0) return 0;
     return Math.floor(effective / (labelHeightMm + GAP_MM));
   }
   
   export function parseLengthFromAttribute(value: string): number | null {
     const m = value.match(/(\d+)\s*m/);
     return m ? parseInt(m[1]) : null;
   }
   ```
   + 4 testy jednostkowe (h=80, L=450 → 4329; edge cases)
2. **Stworzyć** `src/components/calculators/RibbonLabelCountWidget.tsx` (~100 linii, gotowy szkielet w SPEC sekcja 3.4)
3. **Osadzić w** `src/app/produkt/[slug]/[size]/[pn]/page.tsx` warunkowo:
   ```typescript
   const isRibbon = product.subcategoryIds?.includes('tasmy-termotransferowe');
   const length = variant?.attributes['Długość']
     ? parseLengthFromAttribute(variant.attributes['Długość'])
     : null;
   
   {isRibbon && length && (
     <RibbonLabelCountWidget
       rollLengthM={length}
       pricePerRoll={variant.priceFrom ?? product.priceFrom}
       defaultLabelHeight={80}
     />
   )}
   ```
4. **Schema markup `HowTo`** na stronie produktu taśmy
5. **GA4 event** `ribbon_calc_used` z debounce 500 ms

**Razem szacowany czas**: 6-8 dni roboczych.

---

## 6. Pełna mapa cross-linku (16 etykiet → 12 taśm)

To **strategiczny rdzeń wdrożenia**. Etykiety już mają `recommendedRibbons` z nazwami taśm — komponent po stronie taśm odwzorowuje tę mapę na linki.

### 6.1 Mapowanie kierunek: etykieta → taśma (już w `transfer-label-series.ts`)

Stan obecny — sprawdzić każdy obiekt w `src/data/transfer-label-series.ts` pod kątem prawidłowych wartości `recommendedRibbons`. Idealny zestaw na podstawie analizy materiałów:

| Etykieta TT (slug) | Polecane taśmy (kolejność = priorytet) |
|---|---|
| `z-perform-1000t` | `['Zebra 2300 Wax', 'Zebra 1600 Wax']` |
| `z-perform-1000t-removable` | `['Zebra 2300 Wax']` |
| `z-select-2000t` | `['Zebra 2300 Wax', 'Zebra 3200 Wax/Resin']` |
| `z-essentials-500t` | `['Zebra 1600 Wax']` |
| `8000t-all-temp` | `['Zebra 2100 European Wax', 'Zebra 3400 Wax/Resin']` |
| `z-ultimate-3000t-white` | `['Zebra 5095 Resin', 'Zebra 5100 Premium Resin']` |
| `z-ultimate-3000t-silver` | `['Zebra 5095 Resin', 'Zebra 5100 Premium Resin']` |
| `polye-3100t-gloss` | `['Zebra 3400 Wax/Resin', 'Zebra 5095 Resin']` |
| `polypro-3000t-gloss` | `['Zebra 3200 Wax/Resin', 'Zebra 5095 Resin']` |
| `polypro-3000t-clear` | `['Zebra 3200 Wax/Resin']` |
| `polypro-4000t-matte` | `['Zebra 5095 Resin']` |
| `polyo-3100t` | `['Zebra 5095 Resin', 'Zebra 4800 Resin']` |
| `8100t-cryocool` | `['Zebra 5095 Resin', 'Zebra 5100 Premium Resin']` |
| `8000t-blood-bag-deep-freeze` | `['Zebra 5095 Resin']` |
| `8000t-void-matte` | `['Zebra 4800 Resin', 'Zebra 5100 Premium Resin']` |
| `8100t-z-destruct-pe` | `['Zebra 4800 Resin', 'Zebra 8000 ChemResist']` |

**Akcja w Fazie 1**: porównać aktualne `recommendedRibbons` w 16 obiektach `transferLabelSeries` z tą mapą; jeśli się różnią, **POPRAWIĆ** (uzupełnić brakujące, naprawić błędne).

### 6.2 Mapowanie kierunek: taśma → etykiety (do dodania w `transfer-ribbon-series.ts`)

W Fazie 1 każdy obiekt `RibbonSeries` dostaje pole:
```typescript
recommendedForLabels: {
  seriesSlug: string;             // slug etykiety w transferLabelSeries
  seriesName: string;             // wyświetlana nazwa
  role: 'primary' | 'alternative';
}[];
```

Wypełnienie (odwrócenie mapy z 6.1):

| Taśma (slug) | Polecana dla etykiet |
|---|---|
| `1600-wax` | z-perform-1000t (alt), z-essentials-500t (primary) |
| `2100-wax` | 8000t-all-temp (primary) |
| `2300-wax` | z-perform-1000t (primary), z-perform-1000t-removable (primary), z-select-2000t (primary) |
| `5319-wax` | (brak — niche performance) |
| `3200-wax-resin` | z-select-2000t (alt), polypro-3000t-gloss (primary), polypro-3000t-clear (primary) |
| `3300-wax-resin` | (brak — niche) |
| `3400-wax-resin` | 8000t-all-temp (alt), polye-3100t-gloss (primary) |
| `5555-wax-resin` | (brak — niche) |
| `4800-resin` | polyo-3100t (alt), 8000t-void-matte (primary), 8100t-z-destruct-pe (primary) |
| `5095-resin` | z-ultimate-3000t-white (primary), z-ultimate-3000t-silver (primary), polye-3100t-gloss (alt), polypro-3000t-gloss (alt), polypro-4000t-matte (primary), polyo-3100t (primary), 8100t-cryocool (primary), 8000t-blood-bag-deep-freeze (primary) |
| `5100-resin` | z-ultimate-3000t-white (alt), z-ultimate-3000t-silver (alt), 8100t-cryocool (alt), 8000t-void-matte (alt) |
| `8000-chemresist` | 8100t-z-destruct-pe (alt) |

---

## 7. Mikrowidget kalkulatora — quick reference

**Cel**: Na karcie konkretnej rolki taśmy klient widzi "ile etykiet z tej rolki" dla wpisanej wysokości etykiety.

**Matematyka**:
```typescript
labels_per_roll = floor((rollLengthM * 1000 - 2000) / (labelHeightMm + 3))
```

**UX** (1 input + 1 wynik główny + 2 mikro-info):
- Slider wysokości 10-200 mm, default 80 mm
- 6 presetów: 25 / 38 / 51 / 76 / 100 / 152 mm
- Duża liczba wyniku + koszt/etykiety + dni druku przy 90 et./dobę

**Gdzie**: tylko `/produkt/[slug]/[size]/[pn]` warunkowo gdy produkt jest taśmą

**Czego NIE robimy** (anty-wzorce w SPEC sekcja 10):
- Wybór klasy drukarki (klient już patrzy na konkretną rolkę)
- Pole ilości miesięcznej
- Porównanie wariantów (to na stronie serii, nie SKU)
- Toggle netto/brutto
- Roczne szacunki kosztu

**Pełny komponent**: gotowy szkielet w SPEC sekcja 3.4 (~100 linii)

---

## 8. Anty-wzorce — czego nie robić

### 8.1 Język
- **Bez anglicyzmów**: rugged → wytrzymały, stock → stan magazynowy, hot-swap → wymiana w trakcie pracy, gap → odstęp, ribbon → taśma barwiąca, wax → woskowa, resin → żywiczna
- Patrz `PREFERENCJE-jak-pisac.md`

### 8.2 Architektura
- **Nie ruszać URL `/tasmy-termotransferowe`** — jest zaindeksowany w Google
- **Nie ruszać URL `/etykiety-termotransferowe-zebra`** — istnieje i działa
- **Nie zmieniać typu `recommendedRibbons`** w `TransferLabelSeries` — działa jak jest (tablica stringów). Komponent po stronie taśm robi mapowanie nazwa→slug
- **Nie robić podkategorii URL dla taśm** (`/tasmy-termotransferowe/woskowe`) — 140 SKU mieści się w 1 landingu z 3 sekcjami
- **Nie tworzyć nowych komponentów UI bez potrzeby** — używać istniejących z `src/components/ui/`

### 8.3 Dane
- **Nie wymyślać** Qty/Box, GTIN, Stock — zostawić `undefined`/`null`
- **Nie zmieniać** `priceFrom` z `NEW-PRODUCTS-tasmy-termotransferowe.ts` — to wyliczone PLN netto wg EUR × 4,30 × 1,25

### 8.4 Mikrowidget
- **Bez wyboru klasy drukarki** — to nie jest zadanie tego widgetu
- **Bez pola ilości miesięcznej** — klient na karcie już zdecydował
- **Bez tabeli porównawczej** — to na stronie serii
- **Bez toggle netto/brutto** — B2B operuje netto

---

## 9. Definition of Done

Przed PR / deploy:

- [ ] Faza 1 — `transfer-ribbon-series.ts` (12 modeli) + helpery
- [ ] Faza 1 — 12 nowych obiektów `Product` w `products.ts` (140 wariantów), 24 stare ribbony usunięte
- [ ] Faza 1 — `recommendedRibbons` w 16 obiektach `transferLabelSeries` zweryfikowane wg mapy 6.1
- [ ] Faza 2 — `/tasmy-termotransferowe` przebudowane z 670 bajtów do pełnego landinga (3 sekcje × 4 kafelki)
- [ ] Faza 2 — `/tasmy-termotransferowe/serie/[slug]` generuje się dla 12 modeli staticznie
- [ ] Faza 2 — `RibbonVariantsTable` z filtrami szerokość/długość/gilza
- [ ] Faza 3 — helper `ribbonNameToSlug` z 4 testami jednostkowymi
- [ ] Faza 3 — `<RecommendedRibbonsBlock>` osadzony na 16 istniejących stronach serii etykiet TT
- [ ] Faza 3 — `<RecommendedForLabelsBlock>` osadzony na 12 nowych stronach serii taśm
- [ ] Faza 3 — Klikalne linki etykieta → taśma → etykieta (cykl działa w obie strony)
- [ ] Faza 4 — `ribbon-math.ts` z funkcją `labelsPerRoll` + 4 testy
- [ ] Faza 4 — `<RibbonLabelCountWidget>` osadzony na `/produkt/[slug]/[size]/[pn]` warunkowo dla taśm
- [ ] Faza 4 — Schema markup `HowTo` na karcie produktu taśmy
- [ ] Faza 4 — GA4 event `ribbon_calc_used` (debounce 500 ms)
- [ ] Build OK (`npm run build`), brak błędów TS
- [ ] Lighthouse SEO ≥95, Performance ≥85 dla 3 próbek
- [ ] Sitemap zawiera 12 nowych URL-i `/tasmy-termotransferowe/serie/*`
- [ ] Mobile responsive na 375 px

---

## 10. Wpływ biznesowy

| Wymiar | Przed | Po wdrożeniu |
|---|---|---|
| SKU taśm Zebra w sklepie | ~24 | **140** |
| Modeli taśm dostępnych | 6-7 (subset) | **12** (cały portfel Zebra TT) |
| Cross-link etykieta ↔ taśma | brak komponentów UI | 16 etykiet × średnio 1,5 taśmy = ~24 dodatkowe linki crawlable |
| Interaktywny ficzer UX | brak | mikrowidget kalkulatora na 140 kartach taśm |
| Pozycja vs konkurencja | parytet (BCMarket ma 24-30 taśm) | **5-7× więcej** taśm, doradca techniczny |

**Spodziewane efekty (przy zalewie etykiety + taśmy razem)**:
- AOV — wzrost o 30-50% (klient kupuje etykietę + polecaną taśmę razem)
- Support — spadek pytań "jaką taśmę kupić" o ~70%
- SEO — długie ogony na frazy niche (8000 ChemResist, 5100 Premium Resin)

---

## 11. Quick navigation

| Szukam... | Otwórz |
|---|---|
| Jak ma wyglądać `<RibbonSeries>` typ | `BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` sekcja 2.1 |
| Lista 12 modeli taśm z metadanymi | `NEW-PRODUCTS-tasmy-termotransferowe.ts` |
| Komponenty cross-linku (`<RecommendedRibbonsBlock>` etc.) | `BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` sekcje 3.3-3.4 |
| Mikrowidget — gotowy szkielet komponentu | `SPEC-kalkulator-zuzycia-tasmy.md` sekcja 3.4 |
| Matematyka kalkulatora | `SPEC-kalkulator-zuzycia-tasmy.md` sekcja 2 |
| Czego NIE robić w mikrowidgecie | `SPEC-kalkulator-zuzycia-tasmy.md` sekcja 10 |
| Strategia + SEO taśm | `RAPORT-analiza-tasm-tt.md` |
| Wzorzec referencyjny | `src/data/thermal-label-series.ts` + `src/app/etykiety-termiczne/` |
| Konwencje językowe | `PREFERENCJE-jak-pisac.md` |

---

## 12. Trzy pytania do potwierdzenia przed startem

1. **Czy `recommendedRibbons` w obecnym `transfer-label-series.ts` ma być przekształcony na bogatszą strukturę** (`{ primary, alternatives, pickerTip }`) jak proponowałem w briefie taśm, czy zostajemy przy obecnej tablicy stringów? **Rekomendacja**: zostajemy. Mniej ingerencji w wdrożone etykiety, komponent po stronie taśm radzi sobie z prostym formatem (pierwsza pozycja w `waxResin`/`resin` = "polecana", reszta = "alternatywy"). To samo działa, jest prostsze.

2. **Czy 24 stare ribbony w `products.ts` (lista `productIds` w subcategory `tasmy-termotransferowe`) usuwamy i dajemy 12 nowych z 140 wariantami?** **Rekomendacja**: tak. 24 stare są podzbiorem 140 nowych, po usunięciu nic się nie traci, a struktura jest spójna.

3. **Czy mikrowidget kalkulatora osadzamy też na stronach DT etykiet termicznych** (które są wdrożone)? **Rekomendacja**: nie teraz. Najpierw taśmy, sprawdzić 2 tygodnie GA4 event, potem decyzja o rozszerzeniu.

---

**GO TIME.** Zaczynaj od Fazy 1 (`src/data/transfer-ribbon-series.ts`). Następnie wkleić nowe Product, potem przebudowa landinga, dynamiczny route, komponenty cross-linku, mikrowidget.

Powodzenia!
