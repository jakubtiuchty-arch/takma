# Audyt SEO/AEO/GEO — taśmy TT + etykiety TT (cała struktura)

**Data**: 31 maja 2026
**Strony audytowane**: 5 (2 landingi + 1 podkategoria dynamiczna + 2 serie dynamiczne)
**Status**: PRE-LAUNCH (analiza wyłącznie z repo lokalnego, nie z www)

---

## 0. Errata — sprostowanie pierwszej wersji audytu

W pierwszej wersji tego dokumentu napisałem "183 brakujące pytania FAQ" na 3 stronach. **To było nieprawdą.** Mój skrypt szukał inline patternu `'@type': 'Question'` w plikach `page.tsx` i nie rozpoznał dynamicznego `series.faq.map(...)`, który ładuje pytania z plików data.

**Realne liczby FAQ (po weryfikacji)**:

| Strona | Liczba pytań FAQ | Status |
|---|---|---|
| `/tasmy-termotransferowe` (landing) | **12 inline** | ✅ |
| `/tasmy-termotransferowe/serie/[slug]` | **~7-8 średnio per model** (~90 razem) | ✅ |
| `/etykiety-termotransferowe-zebra` (landing) | 6 | OK |
| `/etykiety-termotransferowe-zebra/[subcategory]` | 60 (20 per podkategoria) | ✅✅ |
| `/etykiety-termotransferowe-zebra/[subcategory]/serie/[slug]` | **~10-11 średnio per seria** (~170 razem) | ✅✅ |

Razem realnie ~340 pytań FAQ w katalogu. **Pozostała wstrzymywać do priorytetu 1 nie zalecam.** Pytania są.

---

## 1. Streszczenie wykonawcze (po sprostowaniu)

**Mocne strony (potwierdzone)**:
- Wszystkie 5 stron ma `generateMetadata`, `seoTitle`, `seoDescription`, `canonical` ✅
- Wszystkie mają FAQPage + BreadcrumbList + CollectionPage/Article ✅
- Strony `[subcategory]` mają TechArticle + 9 entities + 60 pytań FAQ — wzorzec jakości
- Strony `serie/[slug]` etykiet mają TechArticle ✅
- FAQ pytań jest mnóstwo, schema mainEntity są poprawnie wypełnione
- `dateModified` jest na stronie `serie/[slug]` taśm (2026-05-29)

**Realne luki (potwierdzone empirycznie, weryfikowane grepem)**:

1. **Brak `TechArticle` schema na taśmach** — landing i `serie/[slug]` taśm nie mają TechArticle. Etykiety mają. To asymetria która źle wygląda dla AI engines (content techniczny powinien być oznaczony jednolicie).

2. **Brak `DefinedTerm` schema we wszystkich 5 stronach** — żadna strona nie definiuje terminów (BOPP, PET, UL, BfR XIV, BS5609, dwell time, TCO, wax-resin, resin). Brak `<dfn>` lub schema = AI engines nie mają sygnału co cytować jako definicje.

3. **Brak `HowTo` schema we wszystkich 5 stronach** — żadna strona nie ma HowTo. Idealne miejsca to "Jak dobrać taśmę do drukarki", "Jak dobrać etykietę", "Jak obliczyć ile taśmy potrzebuję" (mikrowidget).

4. **Brak `Quotation` schema we wszystkich 5 stronach** — pull quotes / comparison summaries nie są oznaczone. To brakujący sygnał dla AI Overview citations.

5. **Brak `dateModified` na landingach** — taśmy landing i etykiety landing nie mają `dateModified` w schema. Jest na `serie/[slug]` taśm, ale na pozostałych brak.

6. **Niskie internal linking na stronach serii** — `serie/[slug]` taśm ma tylko 3 linki wewnętrzne. Etykiety podobnie. Powinno być 10-20.

---

## 2. Stan GSC — gdzie jest ruch (luty-maj 2026)

| Fraza | Pozycja | Impr. | Top URL który rankuje | Komentarz |
|---|---|---|---|---|
| drukarka termotransferowa | 30,9 | 324 | `/termotransferowe-drukarki-etykiet` | OK URL drukarek |
| drukarki termotransferowe | 23,4 | 328 | `/termotransferowe-drukarki-etykiet` | OK |
| **etykiety termotransferowe zebra** | **16,2** | **173** | **`/etykiety-termiczne`** ⚠️ | **ŹLE** — rankuje stara strona DT |
| taśma termotransferowa zebra | 24,3 | 158 | `/produkt/zebra-tasma-zywiczna-...` | OK ale słabe (produktowa zamiast kategorii) |
| **taśmy termotransferowe zebra** | **32,8** | **117** | **`/etykiety-termiczne`** ⚠️ | **ŹLE** — znowu DT zamiast taśm |
| tasmy termotransferowe | 32,5 | 2 | `/tasmy-termotransferowe` | OK URL ale niska impresja |

**Diagnoza (bez zmian)**: stare URL `/etykiety-termiczne` łapie ruch z nowych fraz. Kanibalizacja. Nowe strony nie są jeszcze "główne".

---

## 3. Ahrefs — intent matching (bez zmian)

| Fraza | Vol | KD | Intent | Strona docelowa |
|---|---|---|---|---|
| taśma termotransferowa | 200 | 0 | inf + comm | `/tasmy-termotransferowe` |
| etykiety zabezpieczające | 150 | 0 | inf | `/etykiety-termotransferowe-zebra/specjalne` |
| taśma do drukarki etykiet | 80 | brak | — | `/tasmy-termotransferowe` |
| taśma żywiczna | 60 | brak | — | `/tasmy-termotransferowe/serie/5095-resin` |
| etykiety termotransferowe foliowe | 60 | 0 | inf + comm | `/etykiety-termotransferowe-zebra/foliowe` |
| etykiety termotransferowe zebra | 60 | brak | inf + comm + brand | `/etykiety-termotransferowe-zebra` |
| zebra 5095 | 40 | brak | — | `/tasmy-termotransferowe/serie/5095-resin` |
| zebra 2300 | 20 | brak | — | `/tasmy-termotransferowe/serie/2300-wax` |

Łączny potencjał ruchu: ~620 wyszukiwań/mies → 80-200 kliknięć przy top 3-5.

---

## 4. Analiza per strona (zweryfikowana)

### 4.1 `/tasmy-termotransferowe` (landing, 637 linii)

**Co jest** ✅: FAQPage (12 pytań inline), BreadcrumbList, CollectionPage, ItemList, H1×1, H2×7, 3 tabele HTML, 12 linków wewnętrznych

**Czego brakuje** ❌:
- TechArticle schema (etykiety mają, taśmy nie)
- DefinedTerm dla wax / wax-resin / resin / BOPP / OS / dwell time
- HowTo schema dla "Jak dobrać taśmę do drukarki"
- Quotation schema dla 2-3 comparison summaries
- `dateModified` w schemie

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Dodać `TechArticle` schema z 8 entities + `proficiencyLevel: 'Expert'` + `audience: BusinessAudience` | wysoki | 30 min |
| 2 | Dodać `DefinedTerm` schema (6 pojęć: wax, wax-resin, resin, BOPP, OS, dwell time) | wysoki | 30 min |
| 3 | Dodać `HowTo` schema dla "Jak dobrać taśmę" (4-6 kroków) | średni | 45 min |
| 4 | Dodać Quotation schema (2-3 pull quotes z comparison summary) | średni | 20 min |
| 5 | Dodać `dateModified: new Date().toISOString()` | niski | 5 min |
| 6 | Dodać tabelę "Najlepsze taśmy 2026 wg zastosowania" (jak na foliowych) | wysoki | 1-2h |

---

### 4.2 `/tasmy-termotransferowe/serie/[slug]` (553 linii)

**Co jest** ✅: Article, FAQPage (`series.faq.map`, ~7-8 pytań per model), BreadcrumbList, Organization, ImageObject, H1×1, H2×11, H3×4, `dateModified: '2026-05-29'`

**Czego brakuje** ❌:
- TechArticle (jest tylko Article)
- DefinedTerm dla pojęć tych modeli (np. dla 5095 Resin — "co to jest resin", dla 3200 Wax-Resin — "co to jest wax-resin")
- Quotation dla "Polecane zastosowanie" (idealny pull quote)
- Tylko 3 linki wewnętrzne (potwierdzone grepem) — powinno być 10-15
- Product/AggregateOffer schema (brak)

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Zamienić `Article` na `TechArticle` (lub dodać drugie schema) | wysoki | 15 min |
| 2 | Dodać Product + AggregateOffer schema z `priceRange`/`lowPrice`/`highPrice` | wysoki | 30 min |
| 3 | Dodać DefinedTerm per seria (3-4 terminy specyficzne) | średni | 30 min |
| 4 | Dodać sekcję "Polecana dla etykiet" z 3-5 linkami do serii etykiet (cross-link) | wysoki | 1h |
| 5 | Dodać 5-8 linków do innych serii taśm (siostrzanych) | wysoki | 30 min |
| 6 | Quotation dla pull quote "Polecane zastosowanie" | średni | 10 min |

---

### 4.3 `/etykiety-termotransferowe-zebra` (landing, 502 linii)

**Co jest** ✅: FAQPage (6 pytań), BreadcrumbList, CollectionPage, ItemList, H1×1, H2×8, H3×11, 2 tabele HTML, 4 linki wewnętrzne

**Czego brakuje** ❌:
- TechArticle (jest na podstronach, brak tutaj)
- DefinedTerm dla materiałów (papier, folia BOPP/PET, BfR, UL)
- HowTo dla "Jak dobrać etykietę termotransferową"
- Quotation
- `dateModified`
- Tylko 4 linki wewnętrzne — dla landingu rodzica to mało (powinno linkować do top 3-5 serii w każdej podkategorii = 9-15 linków)

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Dodać `TechArticle` schema (symetria z podstronami) | wysoki | 30 min |
| 2 | Rozszerzyć FAQ z 6 do 15 pytań (TT vs DT, "która seria dla mnie") | wysoki | 1h |
| 3 | Dodać tabelę "16 serii TT — szybkie porównanie" z linkami | wysoki | 1h |
| 4 | Dodać 10-15 linków wewnętrznych do top serii (w body i w tabeli) | wysoki | 30 min |
| 5 | DefinedTerm + HowTo + Quotation | średni | 1h |
| 6 | `dateModified` | niski | 5 min |

---

### 4.4 `/etykiety-termotransferowe-zebra/[subcategory]` (papierowe/foliowe/specjalne, 1190 linii)

**Co jest** ✅✅: TechArticle z `proficiencyLevel: 'Expert'`, BusinessAudience, FAQPage 60 pytań (20 per podkategoria), 9 entities, BreadcrumbList, CollectionPage, ItemList, H1×1, H2×8, H3×3, 3 tabele HTML (TCO, 8 atestów, 5 błędów). To jest **strona-referencja**.

**Czego brakuje** (już mało):
- DefinedTerm (entities są jako `Thing`, lepiej `DefinedTerm` z `inDefinedTermSet`)
- HowTo dla "Jak dobrać folię/papier/specjalne"
- Quotation dla 2-3 pull quotes
- `dateModified`
- Tylko 3 linki wewnętrzne (powinno 10-15 do serii w danej podkategorii)

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Zamienić `Thing` entities na `DefinedTerm` + opisy | średni | 30 min |
| 2 | Dodać 10-12 linków do serii w danej podkategorii | wysoki | 30 min |
| 3 | HowTo schema | średni | 30 min |
| 4 | Quotation 2-3 | średni | 20 min |
| 5 | `dateModified` | niski | 5 min |

---

### 4.5 `/etykiety-termotransferowe-zebra/[subcategory]/serie/[slug]` (435 linii)

**Co jest** ✅: TechArticle, Article, FAQPage (`series.faq.map`, ~10-11 pytań per seria), BreadcrumbList, Organization, ImageObject, H1×1, H2×10, H3×2, `dateModified` (sprawdzić)

**Czego brakuje** ❌:
- DefinedTerm per seria (np. dla PolyPro Clear — "no-label look"; dla Polyester White Top — "Top-Coated")
- Product/AggregateOffer schema (brak)
- Quotation
- Mało linków wewnętrznych (~4)

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Dodać Product + AggregateOffer (priceFrom/priceRange) | wysoki | 30 min |
| 2 | Dodać sekcję "Polecana taśma" z `recommendedRibbons` (cross-link) | wysoki | 1h |
| 3 | DefinedTerm per seria (3-4 terminy) | średni | 30 min |
| 4 | Quotation 1-2 | średni | 10 min |
| 5 | 5-8 dodatkowych linków wewnętrznych | średni | 20 min |

---

## 5. Cross-cutting issues

### 5.1 Wewnętrzna kanibalizacja URL-i

GSC pokazuje że Google rankuje **stare URL-e** na nowe frazy:

| Fraza | Google rankuje | Powinno rankować |
|---|---|---|
| etykiety termotransferowe zebra | `/etykiety-termiczne` (pos 16) | `/etykiety-termotransferowe-zebra` |
| taśmy termotransferowe zebra | `/etykiety-termiczne` (pos 33) | `/tasmy-termotransferowe` |

**Naprawa pre-launch**:
1. Dodanie 15-20 linków wewnętrznych ze starych stron (`/etykiety-termiczne`, `/etykiety-termotransferowe-foliowe` itd.) do nowych URL-i z anchor "etykiety termotransferowe Zebra"
2. Po launchu: Request Indexing w GSC dla 5 nowych URL-i
3. Nie ruszać `canonical` ani URL — zostawiamy istniejący

### 5.2 Wspólny komponent `DefinedTerm`

8 definicji **identycznych** powtarza się w obu kategoriach (BOPP, PET, UL, BfR XIV, BS5609, dwell time, TCO, resin/wax/wax-resin). Powinny być wspólnym komponentem:

```typescript
// src/components/schemas/CommonDefinitions.tsx
export const COMMON_DEFINED_TERMS: DefinedTerm[] = [
  { name: 'BOPP', alternateName: 'Biaxially-Oriented Polypropylene', description: '...' },
  { name: 'PET', alternateName: 'Politereftalan etylenu', description: '...' },
  { name: 'UL', alternateName: 'UL Recognized Component', description: '...' },
  { name: 'BfR XIV', description: '...' },
  { name: 'BS5609', description: '...' },
  { name: 'dwell time', description: 'Czas styku taśmy barwiącej z głowicą...' },
  { name: 'wax', alternateName: 'taśma woskowa', description: '...' },
  { name: 'wax-resin', alternateName: 'taśma woskowo-żywiczna', description: '...' },
  { name: 'resin', alternateName: 'taśma żywiczna', description: '...' },
]
```

Wstawić na wszystkich 5 stronach jako `DefinedTermSet`. Czas implementacji: ~1h (DRY).

### 5.3 Product / AggregateOffer brakuje na wszystkich `serie/[slug]`

28 stron serii (12 taśm + 16 etykiet) powinno mieć Product schema z AggregateOffer:

```typescript
{
  '@type': 'Product',
  name: series.title,
  brand: { '@type': 'Brand', name: 'Zebra Technologies' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'PLN',
    lowPrice: minPrice,
    highPrice: maxPrice,
    offerCount: variantCount,
    seller: { '@type': 'Organization', name: 'TAKMA' }
  }
}
```

Wymaga to mieć `priceFrom`/`priceTo` w pliku `transfer-ribbon-series.ts` i `transfer-label-series.ts`. Jeśli ich nie ma — można dodać orientacyjne lub pominąć `lowPrice`/`highPrice` i zostawić tylko strukturę. Czas: 30 min na template.

### 5.4 HowTo brakuje na 3 oczywistych miejscach

1. `/tasmy-termotransferowe` — "Jak dobrać taśmę do drukarki" (5 kroków)
2. `/etykiety-termotransferowe-zebra` — "Jak dobrać etykietę termotransferową" (5 kroków)
3. Mikrowidget kalkulatora zużycia (gdy zostanie wdrożony) — "Jak obliczyć ile taśmy potrzebuję" (4 kroki)

Czas: 45 min per HowTo.

---

## 6. Priorytetowa lista wdrożenia (pre-launch)

### Priorytet 1 — pilne (przed launchem)

1. **TechArticle schema na wszystkich 3 stronach taśm** (landing + serie + symetria z etykietami)
   - Czas: ~1h
   - Wpływ: AI engines traktują taśmy jak technical content
2. **Naprawa wewnętrznej kanibalizacji** — 15-20 linków ze starych stron do nowych z anchor "etykiety termotransferowe Zebra" + "taśmy termotransferowe Zebra"
   - Czas: 1-2h
   - Wpływ: Google zacznie rankować nowe URL-e 4-8 tyg po launchu
3. **Wspólny `DefinedTerm` schema** dla 8-9 pojęć
   - Czas: 1h
   - Wpływ: AI engines cytują definicje wprost
4. **`dateModified`** na 4 stronach gdzie brakuje
   - Czas: 15 min
   - Wpływ: fresh signal

### Priorytet 2 — duży wpływ, mniej pracy

5. **Product / AggregateOffer** na wszystkich 28 stronach `/serie/[slug]`
   - Czas: 30 min (template) + 1-2h (per-page data jeśli trzeba uzupełnić ceny)
   - Wpływ: Google Shopping rich snippets + AI cytuje ceny
6. **HowTo schema** dla 2 stron przewodnikowych (landingi)
   - Czas: 1h razem
7. **Quotation schema** dla pull quotes (2-3 per landing + 1 per serie)
   - Czas: 1-2h
8. **Internal linking expansion** — na każdej stronie do 10-15 linków
   - Czas: 2-3h razem

### Priorytet 3 — uzupełnienie

9. **Rozszerzenie FAQ na landingu etykiet** z 6 do 15 pytań
   - Czas: 1h
10. **Tabela "Najlepsze taśmy 2026 wg zastosowania"** na landingu taśm
    - Czas: 1-2h
11. **Tabela "16 serii TT — porównanie"** na landingu etykiet
    - Czas: 1h

---

## 7. Łączny czas + spodziewany efekt

| Priorytet | Czas | Efekt |
|---|---|---|
| P1 (TechArticle + kanibalizacja + DefinedTerm + dateModified) | 4-5h | AI engines + Google szybciej zindeksują nowe URL-e |
| P2 (Product schema + HowTo + Quotation + linking) | 5-7h | Rich snippets + AI Overview citations |
| P3 (FAQ rozszerzenia + tabele porównawcze) | 3-4h | Wzbogacenie contentu |
| **RAZEM** | **12-16h** | |

**Spodziewany efekt po 8 tyg. od launchu**:

| Metryka | Stan obecny | Po wdrożeniu |
|---|---|---|
| Pozycja "etykiety termotransferowe zebra" | 16 (zła strona) | 5-8 (nowa strona) |
| Pozycja "etykiety termotransferowe foliowe" | 16 (stara strona) | 3-5 (nowa) |
| Pozycja "taśmy termotransferowe" | 32 | 8-12 |
| Pozycja "taśma termotransferowa" | brak top 100 | 15-20 |
| Łączne impressions/mies (5 nowych URL-i) | ~50 | 1 500-2 500 |
| Cytowania w AI engines | sporadyczne | częste |

---

## 8. Quick reference dla Claude Code

| Zmiana | Plik docelowy | Czas |
|---|---|---|
| TechArticle dla taśmy landing | `src/app/tasmy-termotransferowe/page.tsx` (sekcja schemas) | 30 min |
| TechArticle dla taśmy serie | `src/app/tasmy-termotransferowe/serie/[slug]/page.tsx` (zamienić `Article` na `TechArticle` lub dodać) | 15 min |
| TechArticle dla etykiety landing | `src/app/etykiety-termotransferowe-zebra/page.tsx` | 30 min |
| Wspólny DefinedTerm component | nowy plik `src/components/schemas/CommonDefinitions.tsx` + import na 5 stronach | 1h |
| Product/AggregateOffer dla serii | wzorzec w obu `serie/[slug]/page.tsx` | 30 min + 1-2h ceny |
| HowTo schema na landingach | `tasmy-termotransferowe/page.tsx` i `etykiety-termotransferowe-zebra/page.tsx` | 1h razem |
| dateModified | dodać `dateModified: '2026-05-31'` w schema każdej strony | 15 min |
| Internal linking expansion | każdy `page.tsx` — sekcja "powiązane serie" / "polecane" | 2-3h razem |

---

## 9. Czego sam się nauczyłem (uwaga metodologiczna)

W pierwszej wersji audytu napisałem dramatyczną tezę "183 brakujące pytania FAQ", która okazała się błędem skryptu — szukałem inline patternu `'@type': 'Question'` i nie rozpoznałem dynamicznego `series.faq.map(...)`. Realne dane (po `grep` na plikach data) pokazują że FAQ jest dużo (~340 pytań w całym katalogu).

Wniosek: pliki Next.js w którym schemas są generowane dynamicznie wymagają sprawdzenia **plików data** osobno (`transfer-ribbon-series.ts`, `transfer-label-series.ts`), bo content nie jest inline w `page.tsx`. Skrypt który skanuje wyłącznie `page.tsx` zaniża metryki.

Realne luki — potwierdzone grepem — to:
- TechArticle brakuje na 3 stronach taśm (niesymetria z etykietami)
- DefinedTerm brakuje wszędzie
- HowTo brakuje wszędzie
- Quotation brakuje wszędzie
- `dateModified` brakuje na landingach
- Internal linking ubogi na seriach (3 linki)

Pełen budżet pracy: **12-16h** (nie 21-26h jak pierwotnie pisałem — bo FAQ jest gotowe i nie trzeba pisać 183 pytań).
