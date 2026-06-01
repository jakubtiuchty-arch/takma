# Start implementacji — Materiały eksploatacyjne TAKMA

**Cel projektu**: Wdrożyć kompletny dział materiałów eksploatacyjnych Zebra w sklepie TAKMA — etykiety termotransferowe (TT) + taśmy termotransferowe + mikrowidget kalkulatora — łącznie **1 122 nowych wariantów SKU w 28 seriach**.

**Status startu**: Wszystkie analizy ukończone, wszystkie pliki danych wygenerowane, wszystkie briefy gotowe. Czas na kodowanie.

**Dla Claude Code**: ten plik jest punktem wejścia. Przeczytaj go pierwszy, potem podążaj za briefami w kolejności faz.

---

## 1. Czego nie ruszamy (już wdrożone)

**Etykiety termiczne (Direct Thermal)** — `/etykiety-termiczne`:
- 292 SKU, 12 serii, struktura URL jako wzorzec referencyjny dla wszystkiego nowego
- Pliki: `src/data/thermal-label-series.ts`, `src/app/etykiety-termiczne/page.tsx`, `src/app/etykiety-termiczne/serie/[slug]/page.tsx`, `src/app/etykiety-termiczne/serie/[slug]/SeriesVariantsTable.tsx`

Ten katalog **nie wymaga zmian** — kopiujemy z niego pattern dla TT etykiet i taśm.

---

## 2. Co budujemy — 3 moduły

| # | Moduł | SKU | Serii | Slug rodzic | Status |
|---|---|---|---|---|---|
| **A** | Etykiety termotransferowe (TT) | **982** | 16 | `/etykiety-termotransferowe` | nowa kategoria, 3 podkategorie |
| **B** | Taśmy termotransferowe | **140** | 12 | `/tasmy-termotransferowe` | URL zaindeksowany — rozbudowa istniejącego stuba |
| **C** | Mikrowidget kalkulatora | — | — | komponent osadzony na karcie produktu rolki | nowy ficzer UX |

**Łącznie**: 1 122 nowych SKU, 28 obiektów `Product`, 28 obiektów serii, **2 routy dynamiczne**.

---

## 3. Pliki źródłowe — kompletna mapa

### 3.1 Dane gotowe do wklejenia do repo

| Plik | Co zawiera | Wkleić do |
|---|---|---|
| `/Users/jakubtiuchty/takma/NEW-PRODUCTS-etykiety-termotransferowe.ts` | **16 obiektów `Product`**, 982 warianty (TypeScript, walidacja OK) | `src/data/products.ts` (do głównej tablicy `products`) |
| `/Users/jakubtiuchty/takma/NEW-PRODUCTS-tasmy-termotransferowe.ts` | **12 obiektów `Product`**, 140 wariantów (TypeScript, walidacja OK) | `src/data/products.ts` (zastępując/łącząc istniejące 24 ribbony) |

### 3.2 Briefy implementacyjne — instrukcje krok po kroku

| Brief | Co opisuje | Dla której fazy |
|---|---|---|
| `/Users/jakubtiuchty/takma/BRIEF-CLAUDE-CODE-etykiety-termotransferowe.md` | Architektura URL etykiet TT, typ `TransferLabelSeries`, layout 4 stron (rodzic + 3 podkategorie + dynamiczny route), redirecty starych URL, schema markup | Faza 1-2 |
| `/Users/jakubtiuchty/takma/BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` | Typ `RibbonSeries`, **kluczowy `LABEL_RIBBON_MAP`** dla cross-linku z etykietami, komponenty `<RecommendedRibbonsBlock>` i `<RecommendedForLabelsBlock>`, layout strony serii taśmy | Faza 3 |
| `/Users/jakubtiuchty/takma/SPEC-kalkulator-zuzycia-tasmy.md` | Mikrowidget `<RibbonLabelCountWidget>`, helper `labelsPerRoll`, miejsce osadzenia na karcie produktu, GA4 tracking | Faza 4 |

### 3.3 Raporty + analiza (do referencji, nie do wdrożenia)

- `/Users/jakubtiuchty/takma/RAPORT-analiza-etykiet-termotransferowych.md` — strategia + SEO + cross-link z taśmami
- `/Users/jakubtiuchty/takma/RAPORT-analiza-tasm-tt.md` — strategia + matryca mapowania etykieta→taśma
- `/Users/jakubtiuchty/takma/PORÓWNANIE-takma-vs-bcmarket.md` — kontekst konkurencyjny

### 3.4 Pliki Excel źródłowe (do referencji, nie do wdrożenia)

- `/Users/jakubtiuchty/takma/Etykiety termotransferowe/MASTER-etykiety-termotransferowe-982.xlsx` — pełny rejestr 982 SKU
- `/Users/jakubtiuchty/takma/Etykiety termotransferowe/IMPORT-etykiety-termotransferowe-FINAL.xlsx` — z polskimi nazwami, cenami PLN
- `/Users/jakubtiuchty/takma/Taśmy TT/MASTER-tasmy-tt-140.xlsx` — pełny rejestr 140 SKU + sheet "mapowanie etykieta→taśma"
- `/Users/jakubtiuchty/takma/Taśmy TT/IMPORT-tasmy-tt-FINAL.xlsx` — z polskimi nazwami, cenami PLN

### 3.5 Konwencje językowe (obowiązkowe)

- `/Users/jakubtiuchty/takma/PREFERENCJE-jak-pisac.md` — **bez anglicyzmów**, polskie tłumaczenia (rugged → wytrzymały, stock → stan magazynowy, hot-swap → wymiana w trakcie pracy)

---

## 4. Pełna architektura URL po wdrożeniu

```
JUŻ ISTNIEJE — ZACHOWAĆ
├── /etykiety-termiczne                                       (wzorzec referencyjny)
│   └── /serie/[slug]                                          (12 serii DT)
│
└── /tasmy-termotransferowe                                    (URL zaindeksowany — nie ruszać)


NOWE — FAZA 1-2 (etykiety TT)
├── /etykiety-termotransferowe                                 (LANDING-RODZIC nowy)
│   ├── /papierowe                                              (4 serie, 604 SKU)
│   │   └── /serie/[slug]                                       (z-perform-1000t, z-select-2000t, z-perform-1000t-removable, z-essentials-500t)
│   ├── /foliowe                                                (7 serii, 361 SKU)
│   │   └── /serie/[slug]                                       (z-ultimate-3000t-white/silver, polyE-3100t, polyPro-3000t/4000t, polyO-3100t)
│   └── /specjalne                                              (5 serii, 17 SKU)
│       └── /serie/[slug]                                       (cryocool, blood-bag, all-temp, void-matte, z-destruct-pe)


REDIRECTY 301 — FAZA 2 (next.config.js)
├── /etykiety-termotransferowe-papierowe  →  /etykiety-termotransferowe/papierowe
└── /etykiety-termotransferowe-foliowe    →  /etykiety-termotransferowe/foliowe


NOWE — FAZA 3 (taśmy TT)
└── /tasmy-termotransferowe                                    (REBUILD istniejącego stuba 670 bajtów → pełen landing)
    └── /serie/[slug]                                           (12 modeli: 1600/2100/2300/5319-wax, 3200/3300/3400/5555-wax-resin, 4800/5095/5100-resin, 8000-chemresist)


NOWE — FAZA 4 (mikrowidget)
└── osadzony na każdej karcie /produkt/[slug] gdzie:
    subcategoryIds zawiera 'tasmy-termotransferowe'
    AND wybrany wariant ma atrybut 'Długość'
```

---

## 5. Kolejność wdrożenia — 5 faz

### Faza 1 — Dane (2-3 dni)

1. **Stworzyć `src/data/transfer-label-series.ts`** (16 obiektów + helpery `getTransferLabelSeriesBySlug`, `getTransferLabelSeriesBySubcategory`, `getAllTransferLabelSeriesSlugs`)
   - Typ: patrz Brief etykiet TT, sekcja 3.1
   - Treść: rozszerzyć z `NEW-PRODUCTS-etykiety-termotransferowe.ts` (sekcje 7-9 i FAQ trzeba dopisać samodzielnie, 5-8 pozycji per seria)
2. **Stworzyć `src/data/transfer-ribbon-series.ts`** (12 obiektów + helpery)
   - Typ: patrz Brief taśm TT, sekcja 2.1
   - Treść: rozszerzyć z `NEW-PRODUCTS-tasmy-termotransferowe.ts`
3. **Wkleić `NEW-PRODUCTS-etykiety-termotransferowe.ts` do `src/data/products.ts`** (do tablicy `products`)
4. **Wkleić `NEW-PRODUCTS-tasmy-termotransferowe.ts` do `src/data/products.ts`** (zastępując/łącząc istniejące 24 ribbony)
5. **Dodać subkategorię `etykiety-termotransferowe-specjalne`** do `products.ts` (jeśli jej brakuje)

### Faza 2 — Strony etykiet TT (3-4 dni)

1. **Stworzyć landing-rodzic** `/src/app/etykiety-termotransferowe/page.tsx` (3 duże kafelki podkategorii + CategoryGuide)
2. **Stworzyć 3 podstrony** `/papierowe/page.tsx`, `/foliowe/page.tsx`, `/specjalne/page.tsx` (każda klonem `/etykiety-termiczne/page.tsx` z innymi grupami serii)
3. **Stworzyć dynamiczny route** `/[subcategory]/serie/[slug]/page.tsx` (klon `/etykiety-termiczne/serie/[slug]/page.tsx`)
4. **Stworzyć** `SeriesVariantsTable.tsx` w tym samym folderze (klon istniejącego)
5. **Migracja redirectów** — `next.config.js` dodać 2 reguły 301 (papierowe, foliowe)

### Faza 3 — Strony taśm TT (3-4 dni)

1. **Przebudować** `src/app/tasmy-termotransferowe/page.tsx` z 670 bajtów do pełnego landinga (klon `/etykiety-termiczne/page.tsx`, 3 sekcje kafelków: woskowe / woskowo-żywiczne / żywiczne)
2. **Stworzyć** `/src/app/tasmy-termotransferowe/serie/[slug]/page.tsx` (klon `/etykiety-termiczne/serie/[slug]/page.tsx` + sekcja "Polecana dla etykiet")
3. **Stworzyć** `RibbonVariantsTable.tsx` (klon `SeriesVariantsTable.tsx` z filtrami szerokość/długość/gilza)
4. **Dodać `LABEL_RIBBON_MAP` do `transfer-label-series.ts`** (patrz Brief taśm, sekcja 3.2 — gotowy kod do skopiowania)
5. **Stworzyć komponent** `<RecommendedRibbonsBlock>` (patrz Brief taśm, sekcja 3.3 — gotowy JSX)
6. **Stworzyć komponent** `<RecommendedForLabelsBlock>` (patrz Brief taśm, sekcja 3.4)
7. **Osadzić oba komponenty** odpowiednio: ribbons na stronie etykiety, labels na stronie taśmy

### Faza 4 — Mikrowidget kalkulatora (1 dzień)

1. **Stworzyć** `src/lib/ribbon-math.ts` z funkcją `labelsPerRoll` + 4 testy jednostkowe
2. **Stworzyć** `src/components/calculators/RibbonLabelCountWidget.tsx` (~100 linii, gotowy szkielet w SPEC sekcja 3.4)
3. **Osadzić w** `/src/app/produkt/[slug]/page.tsx` warunkowo gdy produkt ma `subcategoryIds.includes('tasmy-termotransferowe')` i wybrany wariant ma atrybut `Długość`
4. **Helper** `parseLengthFromAttribute('450 m')` w `ribbon-math.ts`
5. **Schema markup `HowTo`** na stronie produktu taśmy
6. **GA4 event** `ribbon_calc_used` z debounce 500 ms

### Faza 5 — Weryfikacja i deploy (1-2 dni)

1. **Build OK** (`npm run build` — brak błędów TS, ESLint)
2. **Wszystkie 16 stron serii etykiet TT** generują się staticznie (`generateStaticParams`)
3. **Wszystkie 12 stron serii taśm** generują się staticznie
4. **Cross-link działa w obie strony**: etykieta → polecana taśma → tabela wariantów → kalkulator (na wariancie) → wracam
5. **Schema JSON-LD validacja** — Article + Product/AggregateOffer + ItemList + BreadcrumbList + FAQPage + HowTo
6. **Lighthouse SEO 100, Performance >85** dla wszystkich 28 nowych stron
7. **Sitemap zawiera nowe URL-e**
8. **Lokalny test** redirectów 301 (papierowe + foliowe → nowe URL-e)
9. **Mobile responsive** — wszystko działa na 375 px szerokości

**Razem szacowany czas**: 10-14 dni roboczych.

---

## 6. KRYTYCZNY ELEMENT — cross-link etykieta ↔ taśma

To jest **strategiczny rdzeń całego wdrożenia**. Bez tego sklep jest typowym e-commercem. Z tym — staje się doradcą technicznym.

### 6.1 Co się dzieje na stronie etykiety TT

Każda strona serii etykiety TT (np. `/etykiety-termotransferowe/papierowe/serie/z-perform-1000t`) zawiera sekcję `<RecommendedRibbonsBlock>` ze:

- **Polecana taśma** (primary, 1) — z polem `why` (dlaczego ta)
- **Alternatywy** (0-2) — z polem `when` (kiedy wybrać alternatywną)
- **`pickerTip`** — krótkie zdanie pomocy gdy jest >1 opcja

Wszystkie kafelki są klikalne i prowadzą do strony serii taśmy.

### 6.2 Co się dzieje na stronie taśmy

Każda strona serii taśmy (np. `/tasmy-termotransferowe/serie/2300-wax`) zawiera sekcję `<RecommendedForLabelsBlock>` z listą etykiet, dla których ta taśma jest polecana (`primary` lub `alternative`).

### 6.3 Pełna mapa cross-linku (16 etykiet → 12 taśm)

W briefie taśm jest **gotowy `LABEL_RIBBON_MAP`** do wklejenia (sekcja 3.2). Tutaj skrót:

| Etykieta TT | Polecana taśma | Alternatywa | Picker tip |
|---|---|---|---|
| Z-Perform 1000T | **2300 Wax** | 1600 Wax | 2300 = standard codzienny. 1600 = jeszcze taniej, krótkie serie |
| Z-Perform 1000T Removable | **2300 Wax** | — | — |
| Z-Select 2000T | **2300 Wax** | 3200 Wax/Resin | 2300 zwykle wystarcza. 3200 gdy wilgoć/tarcie |
| Z-Essentials 500T | **1600 Wax** | — | — |
| 8000T All-Temp | **2100 Wax** | 3400 Wax/Resin | 2100 jeśli tylko mróz. 3400 jeśli mróz + tarcie/wilgoć |
| Z-Ultimate 3000T White | **5095 Resin** | 5100 Premium Resin | 5095 standard. 5100 dla gwarancji 10+ lat |
| Z-Ultimate 3000T Silver | **5095 Resin** | 5100 Premium Resin | Analogicznie |
| PolyE 3100T Gloss | **3400 Wax/Resin** | 5095 Resin | 3400 do typowych. 5095 jeśli chemikalia |
| PolyPro 3000T Gloss | **3200 Wax/Resin** | 5095 Resin | 3200 standard. 5095 jeśli outdoor/UV |
| PolyPro 3000T Clear | **3200 Wax/Resin** | — | — |
| PolyPro 4000T Matte | **5095 Resin** | — | — |
| PolyO 3100T | **5095 Resin** | 4800 Resin | 5095 standard. 4800 jeśli agresywne chemikalia |
| 8100T Cryocool | **5095 Resin** | 5100 Premium Resin | 5095 dla większości. 5100 dla biobanków |
| 8000T Blood Bag | **5095 Resin** | — | — |
| 8000T Void Matte | **4800 Resin** | 5100 Premium Resin | 4800 standard |
| 8100T Z-Destruct PE | **4800 Resin** | 8000 ChemResist | 4800 typowo. ChemResist dla chemii/wojska |

---

## 7. Mikrowidget kalkulatora (Faza 4) — quick reference

**Cel**: Na karcie konkretnej rolki taśmy klient widzi "Ile etykiet z tej rolki" dla wpisanej wysokości etykiety.

**Matematyka**:
```typescript
labels_per_roll = floor((rollLengthM * 1000 - 2000) / (labelHeightMm + 3))
```

**UX** (1 input + 1 wynik):
- Slider wysokości 10-200 mm, default 80 mm
- 6 presetów: 25 / 38 / 51 / 76 / 100 / 152 mm
- Duża liczba wyniku + 2 mikro-info (koszt/etykieta + dni druku przy 90 et./dobę)

**Gdzie**: tylko `/produkt/[slug]` warunkowo

**Pełny komponent**: gotowy szkielet w SPEC sekcja 3.4 (~100 linii)

---

## 8. Anty-wzorce — czego nie robić

### 8.1 Język

- **Bez anglicyzmów** w UI: rugged → wytrzymały, stock → stan magazynowy, hot-swap → wymiana w trakcie pracy, gap → odstęp, ribbon → taśma barwiąca, wax → woskowa, resin → żywiczna
- Patrz `PREFERENCJE-jak-pisac.md`

### 8.2 Architektura

- **Nie kopiować** generycznego `<SubcategoryPage>` z istniejących stubów (`/etykiety-termotransferowe-papierowe` 683 bajty, `/tasmy-termotransferowe` 670 bajtów) — to placeholdery. Klonujemy `/etykiety-termiczne/page.tsx`.
- **Nie ruszać URL `/tasmy-termotransferowe`** — jest zaindeksowany w Google. Tylko rozbudowa contentu.
- **Nie robić podkategorii URL dla taśm** (`/tasmy-termotransferowe/woskowe`) — 140 SKU mieści się w 1 landingu z 3 sekcjami.
- **Nie tworzyć nowych komponentów UI bez potrzeby** — używać `src/components/ui/` (Icons, InfoTooltip, LinkedText).

### 8.3 Dane

- **Nie wymyślać** danych których nie ma w plikach źródłowych (Qty/Box, GTIN, Stock) — zostawić `undefined`/`null`.
- **Nie zmieniać** `priceFrom` z `NEW-PRODUCTS-*.ts` — to wyliczone PLN netto wg EUR × 4,30 × 1,25.
- **Nie mieszać** DT z TT — klient kupuje albo jedno albo drugie.

### 8.4 Kalkulator

- **Bez wyboru klasy drukarki** — to nie jest zadanie tego widgetu
- **Bez pola "ile etykiet miesięcznie"** — klient na karcie już zdecydował co kupuje
- **Bez tabeli porównawczej wariantów** — to jest na stronie serii, nie na karcie SKU
- **Bez toggle netto/brutto** — B2B operuje netto

---

## 9. Definition of Done — całość projektu

Przed PR / deploy:

- [ ] Faza 1 — **wszystkie 28 obiektów** (16 etykiet TT + 12 taśm) w `products.ts`
- [ ] Faza 1 — `transfer-label-series.ts` (16 serii) + `transfer-ribbon-series.ts` (12 serii) + helpery
- [ ] Faza 2 — 4 strony etykiet TT (rodzic + 3 podkategorie) + dynamiczny route + tabela wariantów
- [ ] Faza 2 — 2 redirecty 301 w `next.config.js` (papierowe + foliowe)
- [ ] Faza 3 — rozbudowana `/tasmy-termotransferowe` + dynamiczny route + tabela wariantów
- [ ] Faza 3 — komponenty `<RecommendedRibbonsBlock>` + `<RecommendedForLabelsBlock>` osadzone w odpowiednich miejscach
- [ ] Faza 3 — pełny `LABEL_RIBBON_MAP` (16 etykiet → polecane taśmy)
- [ ] Faza 4 — `RibbonLabelCountWidget` osadzony na kartach produktu rolek taśmy
- [ ] Faza 4 — GA4 event `ribbon_calc_used`
- [ ] Faza 5 — build OK, brak błędów TS
- [ ] Faza 5 — wszystkie strony serii (16 + 12 = 28) generują się staticznie
- [ ] Faza 5 — Schema JSON-LD waliduje (Article + Product + ItemList + BreadcrumbList + FAQPage + HowTo)
- [ ] Faza 5 — Lighthouse SEO 100, Performance >85 dla próbki 5 stron
- [ ] Faza 5 — sitemap zawiera 28 nowych URL-i
- [ ] Faza 5 — mobile responsive na 375 px

---

## 10. Wpływ biznesowy (z czym idziemy do TAKMA po wdrożeniu)

| Wymiar | Przed | Po wdrożeniu |
|---|---|---|
| SKU materiałów eksploatacyjnych Zebra w sklepie | ~316 (292 DT + ~24 ribbony) | **1 414** (292 DT + 982 TT + 140 ribbony) |
| Serii produktowych | 12 | **40** |
| Stron produktowych (serie + landingi) | 14 | **44** |
| Pokrycie SKU vs konkurencja PL | parytet z BCMarket | **7× więcej** SKU |
| Cross-link etykieta ↔ taśma | brak | 16 etykiet × średnio 1,5 taśmy = 24 dodatkowe linki crawlable per cykl |
| Interaktywny ficzer UX | brak | mikrowidget kalkulatora na 140 kartach taśm |
| Pozycja vs konkurencja | "kolejny sklep AutoID" | **doradca techniczny** (mikrowidget + cross-link + matryca dobierania) |

**Spodziewane efekty**:
- AOV (Average Order Value) — wzrost o 30-50% (klient kupuje etykietę + polecaną taśmę razem)
- Wsparcie/support — spadek pytań "jaką taśmę kupić" o ~70%
- SEO — gęsta sieć linków wewnętrznych, długie ogony na frazy niche (etykiety kriogeniczne, plomby destruktywne)
- Zebra Specialisation — łatwiejsze utrzymanie progów Synthetic Supplies dzięki widoczności pełnego katalogu

---

## 11. Pytania, na które warto odpowiedzieć przed startem

1. **Czy zachowujemy istniejące 24 ribbony** w `products.ts`, czy podmieniamy całość na nowe 12 obiektów × 140 wariantów? **Rekomendacja**: usuwamy 24 stare, dajemy 12 nowych z 140 wariantami (te 24 stare i tak są podzbiorem 140 nowych).

2. **Czy wszystkie 16 etykiet TT mają mieć FAQ napisany?** Mam je gotowe dla większości (po 5-8 pytań per seria w `transfer-label-series.ts`), ale 2-3 nisze (Cryocool, Z-Destruct PE, Blood Bag) mają tylko po 2-3 pytania. **Rekomendacja**: minimum 5 pytań per seria; jeśli mniej, dopisać sztampowe ("Czy ta seria pasuje do drukarki XYZ?").

3. **Czy używamy ExifTool/jakiegokolwiek narzędzia do walidacji obrazków produktów?** Wszystkie 982 SKU TT mają `Image URL` z `zebra.com` (linkowane bezpośrednio). **Rekomendacja na początek**: linkować bezpośrednio z Zebra; po wdrożeniu wybrać top 50 najczęściej kupowanych i hostować lokalnie.

4. **Czy mikrowidget kalkulatora osadzamy też na stronach DT** (etykiety termiczne)? **Rekomendacja**: tak, ale w kolejnej iteracji — najpierw TT, sprawdzić działanie 2 tygodnie, potem rozszerzyć na DT.

---

## 12. Quick navigation — gdzie znajdę co

| Szukam... | Otwórz |
|---|---|
| Jak ma wyglądać `<TransferLabelSeries>` typ | `BRIEF-CLAUDE-CODE-etykiety-termotransferowe.md` sekcja 3.1 |
| Jak ma wyglądać `<RibbonSeries>` typ | `BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` sekcja 2.1 |
| Lista 16 serii etykiet TT z metadanymi | `NEW-PRODUCTS-etykiety-termotransferowe.ts` |
| Lista 12 modeli taśm z metadanymi | `NEW-PRODUCTS-tasmy-termotransferowe.ts` |
| Pełny `LABEL_RIBBON_MAP` (cross-link) | `BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` sekcja 3.2 |
| Komponenty cross-linku (`<RecommendedRibbonsBlock>` etc.) | `BRIEF-CLAUDE-CODE-tasmy-tt-DODATEK.md` sekcje 3.3-3.4 |
| Mikrowidget — gotowy szkielet komponentu | `SPEC-kalkulator-zuzycia-tasmy.md` sekcja 3.4 |
| Matematyka kalkulatora | `SPEC-kalkulator-zuzycia-tasmy.md` sekcja 2 |
| Czego nie robić w mikrowidgecie | `SPEC-kalkulator-zuzycia-tasmy.md` sekcja 10 |
| SEO / frazy kluczowe per podkategoria | `RAPORT-analiza-etykiet-termotransferowych.md` sekcja 9 |
| Wzorzec referencyjny (działający kod DT) | `src/data/thermal-label-series.ts` + `src/app/etykiety-termiczne/` |
| Konwencje językowe (anglicyzmy) | `PREFERENCJE-jak-pisac.md` |

---

**GO TIME.** Zaczynaj od Fazy 1 (`src/data/transfer-label-series.ts`). Najwięcej czasu zajmie napisanie sekcji opisowych i FAQ — to wymaga branżowej wiedzy, której Claude Code nie wymyśli. Mamy szkielet w `NEW-PRODUCTS-etykiety-termotransferowe.ts` — trzeba go rozszerzyć z `RAPORT-analiza-etykiet-termotransferowych.md` (sekcje 3-5, pozytywne argumenty per rodzina).

Powodzenia!
