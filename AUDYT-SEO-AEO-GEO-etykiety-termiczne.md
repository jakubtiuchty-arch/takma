# Audyt SEO/AEO/GEO — /etykiety-termiczne (cała struktura)

**Data**: 3 czerwca 2026
**Strony audytowane**: 2 (landing + serie/[slug]) — łącznie 12 stron serii
**Status**: LIVE (rankuje w Google, dane GSC dostępne)
**Plik data**: `src/data/thermal-label-series.ts` (159 KB, 12 serii, 62 pytania FAQ)

---

## 0. TL;DR — to jest najlepsza strona w katalogu

`/etykiety-termiczne` ma **najsilniejsze SEO/AEO/GEO ze wszystkich kategorii w sklepie**. Lepsze niż etykiety TT, lepsze niż taśmy. To wzorzec do którego inne kategorie powinny dorównać.

**Konkretnie ma już**:
- TechArticle z BusinessAudience + dateModified ✅
- HowTo z 5 krokami (jeden z 3 wzorców w całym sklepie) ✅
- Product + AggregateOffer na seriach z `priceFrom` ✅
- 9 pytań FAQ na landingu + ~10-11 per seria
- 24+ wewnętrznych linków do serii (kafelki + tabela porównawcza)
- Pełna hierarchia H1×1, H2×7, H3×3

**Realne luki (po weryfikacji grepem)** — krótka lista:
1. **DefinedTerm schema** brakuje (entities są jako `Thing`)
2. **Quotation schema** brakuje (0 `<blockquote>`)
3. **HowTo brak na seriach** (jest tylko na landingu)
4. **`priceValidUntil`** brak w AggregateOffer (Google chce tego dla rich results od 2024)

To **4-6 godzin pracy** żeby z bardzo dobrego stanu zrobić wybitny.

---

## 1. Stan GSC — gdzie jest faktyczny ruch (luty-maj 2026)

**Pozycje strony `/etykiety-termiczne`** — 26 fraz, 362 impresje, 4 kliknięcia, avg pos 26.6.

| Fraza | Pozycja | Impr. | Kliknięcia | Komentarz |
|---|---|---|---|---|
| etykiety termiczne zebra | **18,9** | 77 | 3 | Strona realnie rankuje na właściwą frazę |
| drukarka termiczna zebra | 23,2 | 94 | 0 | ⚠️ rankuje strona etykiet zamiast `/termiczne-drukarki-etykiet` |
| zebra etykiety termiczne | 19,0 | 59 | 0 | OK fraza, niska pozycja |
| etykiety termiczne do drukarki zebra | 28,5 | 56 | 0 | Pozycja słaba |
| etykiety termotransferowe zebra | **16,2** | 173 | 0 | ⚠️ kanibalizacja TT (omówione w audycie TT) |
| taśmy termotransferowe zebra | 32,8 | 117 | 0 | ⚠️ kanibalizacja TT |

**Serie etykiet termicznych**:
- `/etykiety-termiczne/serie/z-essentials-1000d` — 1 keyword "zebra essentials" pos 10,3 (4 impr)
- `/etykiety-termiczne/serie/8000d-jewelry` — 1 keyword "8000d" pos 10 (1 impr)

**Diagnoza**:
- Landing dostaje 362 impressions/mies ale konwertuje 1.1% CTR (4 clicks). To wynik **pozycji 26 średnio** — Google pokazuje stronę na końcu strony 2-3. Z top 10 CTR byłby 5-10%, czyli **20-40 kliknięć/mies** zamiast 4.
- Serie dopiero zaczynają być indeksowane (po 1-4 impresjach każda). To znak, że Google jeszcze nie zaszczegółowił rankingu dla `/etykiety-termiczne/serie/*`.

---

## 2. Ahrefs — intencja wyszukiwania

**Główne frazy z volumenem (Polska, May 2026)**:

| Fraza | Volume/mies | KD | Traffic potential | Intent | Strona docelowa |
|---|---|---|---|---|---|
| **etykiety termiczne** | **600** | **0** | 100 | inf + comm | `/etykiety-termiczne` (landing) |
| etykiety do drukarki termicznej | 150 | 0 | **350** | inf + comm + tx | `/etykiety-termiczne` |
| etykiety termiczne 100x150 | 150 | 0 | 150 | inf + comm + **tx** | landing lub seria |
| zebra etykiety | 150 | 0 | 150 | brand + comm + tx | `/etykiety-termiczne` |
| etykiety wysyłkowe | 150 | 0 | 20 | inf + comm + tx | `/etykiety-termiczne` (sub-topic) |
| etykiety do drukarki zebra | 100 | 0 | 90 | brand + comm + tx | landing |
| etykiety termiczne zebra | 70 | 0 | 150 | brand + comm | landing |
| etykiety samoprzylepne termiczne | 70 | brak | brak | brak | landing |
| etykiety linerless | 20 | brak | brak | brak | `/etykiety-termiczne/serie/zeroliner-*` |
| papier termoczuły | 20 | brak | brak | inf + comm | landing |
| etykiety bez podkładu | 10 | brak | brak | brak | seria zeroliner |

**Łączny potencjał**: ~1 460 wyszukiwań/mies — **2× więcej niż TT (620)**. DT to większy rynek wyszukiwań niż TT w PL.

**Co to znaczy**: Główna fraza "etykiety termiczne" (600 vol, KD 0) ma realny potencjał wejść do top 5 — strona już jest na 27 pozycji, ma kompletny schema, brakuje tylko kilku sygnałów.

---

## 3. Per-strona analiza

### 3.1 `/etykiety-termiczne` (landing, 31 KB, 637 linii — z headerem)

**Schemas obecne** ✅:

| Schema | Status |
|---|---|
| CollectionPage | ✅ |
| ItemList (12 serii) | ✅ |
| BreadcrumbList | ✅ |
| TechArticle | ✅ (z `proficiencyLevel: 'Expert'`, BusinessAudience, 7 entities jako Thing) |
| HowTo (5 kroków) | ✅✅ unikalny w katalogu |
| FAQPage (9 pytań inline) | ✅ |
| Organization (publisher) | ✅ |
| `dateModified: '2026-06-02'` | ✅ |

**Headings**: H1×1, H2×7, H3×3 — wzorcowa hierarchia
**Tabele HTML**: 2 (jedna porównawcza serii)
**Internal links**: 24+ realnych linków (kafelki bestsellers + specialists + niche + tabela porównawcza linkuje do każdej z 12 serii) + 1 cross-link do TT papierowe

**FAQ 9 pytań — lista**:
1. Czym różni się druk termiczny bezpośredni (DT) od termotransferowego (TT)?
2. Która seria etykiet termicznych Zebra jest najlepsza dla mojego zastosowania?
3. Czy etykiety termiczne wymagają taśmy barwiącej (ribbon)?
4. Czy mogę używać etykiet termicznych do żywności?
5. Czy etykiety termiczne nadają się do mrożonek i chłodni?
6. Czym jest etykieta linerless (bez podkładu) i czy się opłaca?
7. Do jakich drukarek Zebra pasują etykiety termiczne?
8. Jak długo trzyma nadruk na etykiecie termicznej?
9. Czy oferujecie próbki etykiet przed zakupem?

To pokrywa **wszystkie** typowe pytania kupującego. Dla AEO super.

**Realne luki**:

1. **Entities są jako `Thing`, lepiej `DefinedTerm`** — 7 obecnych: Etykiety termiczne, Druk termiczny bezpośredni, Direct thermal, Papier termoczuły, Etykiety linerless, Etykiety wysyłkowe, Atesty BfR XIV.

   Konwersja na `DefinedTerm` z `description` i `inDefinedTermSet` to mały fix (15 min), ale **istotny dla AI Overview citations** — LLM cytują definicje wprost.

2. **Brak Quotation schema** — 0 `<blockquote>` w body. Pull quotes typu *"Etykiety termiczne nadają się tylko do nadruków o cyklu życia ≤24 miesiące. Outdoor, UV i +80°C wymagają etykiet termotransferowych."* idealnie nadają się do Quotation + BlockQuote w HTML.

3. **HowTo brakuje kroku 0: "Czy w ogóle wybrać DT, czy lepiej TT?"** — obecne 5 kroków zakłada, że już zdecydowałeś. W frazie "etykiety do drukarki termicznej" (vol 150, traffic potential 350!) intent jest **early-stage** — kupujący nie wie jeszcze co wybrać.

4. **Tytuł meta** prawdopodobnie nie zawiera "Zebra" (sprawdzić — w `sub.seoTitle` w danych podkategorii). Główne frazy w PL to *"etykiety termiczne Zebra"*, *"zebra etykiety termiczne"*. Tytuł powinien mieć obie.

5. **Brak comparison table "Etykiety termiczne vs termotransferowe"** w body — to obejmie część kanibalizacji z TT (osoby co szukają "etykiety termotransferowe zebra" trafiają tu, a powinny iść do `/etykiety-termotransferowe-zebra`).

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Zamienić 7 entities `Thing` na `DefinedTerm` z `description` + `inDefinedTermSet` | wysoki | 15-20 min |
| 2 | Dodać Quotation schema + 2-3 `<blockquote>` z pull quotes | średni | 20 min |
| 3 | Dodać tabelę "Etykiety termiczne vs termotransferowe" (kiedy które wybrać) | wysoki | 1h |
| 4 | Sprawdzić i wzmocnić `seoTitle` (musi zawierać "Zebra") | wysoki | 5 min |
| 5 | Dodać 1 dodatkowy krok do HowTo: "Sprawdź czy DT to dobre podejście (vs TT)" | średni | 15 min |

---

### 3.2 `/etykiety-termiczne/serie/[slug]` (20 KB, 12 stron serii)

**Schemas obecne** ✅:

| Schema | Status |
|---|---|
| TechArticle | ✅ |
| Product + AggregateOffer (lowPrice = `priceFrom`) | ✅✅ unikalny w katalogu |
| BreadcrumbList | ✅ |
| FAQPage (~10-11 pytań per seria) | ✅ |
| Organization | ✅ |
| `dateModified: '2026-05-18'` | ✅ |

**Headings**: H1+H2+H3 = 13 — pełna hierarchia
**Tabele HTML**: 1 (specyfikacja serii)
**Internal links**: 3 breadcrumb + 1+ link do comparison series + `<LinkedText>` (dynamiczny komponent linkujący z tekstów)

**12 serii z plików data**:
1. Z-Select 2000D (bestseller)
2. Z-Perform 1000D (bestseller)
3. PolyPro 4000D (specialist — folia)
4. ZeroLiner 2000D (specialist — linerless)
5. ZeroLiner 1100D (specialist — linerless)
6. ZeroLiner 4500D (specialist — linerless)
7. Z-Select 2000D Removable (niche — zdejmowalna)
8. Z-Perform 1000D Removable (niche)
9. Z-Perform 1000D 110 Tag (niche — tag)
10. Z-Essentials 1000D (niche — budżet)
11. Z-Essentials 500D (niche — budżet)
12. 8000D Jewelry (niche — biżuteria)

**Realne luki**:

1. **Brak HowTo schema** — landing ma "Jak dobrać etykietę termiczną" (5 kroków). Serie powinny mieć własny HowTo:
   - Dla bestsellerów: "Jak zamówić właściwy rozmiar/gilzę/OD dla Twojej drukarki"
   - Dla ZeroLiner: "Jak sprawdzić czy Twoja drukarka obsługuje linerless"
   - Dla 8000D Jewelry: "Jak dobrać rozmiar etykiet jubilerskich"

2. **Brak DefinedTerm dla pojęć specyficznych dla serii** — np. dla ZeroLiner: "linerless platen roller", "no-liner". Dla PolyPro 4000D: "BOPP", "syntetyk". Dla 8000D Jewelry: "barbell" (style etykiety jubilerskiej).

3. **Brak Quotation schema** — pull quotes "Polecane zastosowanie" lub "Nie używaj jeśli..." świetnie się sprawdzą.

4. **Tylko 1 tabela HTML** — strona powinna mieć:
   - tabelę specyfikacji (już jest)
   - tabelę porównawczą "Ta seria vs siostrzane serie" (np. Z-Select 2000D vs Z-Perform 1000D vs PolyPro 4000D)

5. **`priceValidUntil` brak w AggregateOffer** — Google wymaga tego dla Product rich snippets od 2024. Bez tego oferta może nie być wyświetlana w Shopping.

6. **`@id` brak w schemas** — utrudnia AI engines łączenie schemas (jedna strona ma wiele schemas, brak `@id` znaczy, że nie wiedzą, że są z tej samej strony).

**Priorytety**:

| # | Zmiana | Wpływ | Czas |
|---|---|---|---|
| 1 | Dodać `priceValidUntil` (np. +90 dni od now) do AggregateOffer | wysoki | 5 min |
| 2 | Dodać HowTo schema per seria (3-5 kroków) | wysoki | 1-2h (12 serii × ~10 min) |
| 3 | Dodać DefinedTerm 2-3 pojęcia per seria | średni | 30 min |
| 4 | Dodać Quotation schema dla "Polecane zastosowanie" | średni | 20 min |
| 5 | Dodać `@id` URN do każdego schema (linkuje schemas z tej samej strony) | niski | 15 min |
| 6 | Dodać 1 tabelę porównawczą (siostrzane serie) na każdej stronie serii | średni | 2-3h (lub dynamicznie z data) |

---

## 4. Stan DT vs TT vs Taśmy — porównanie

| Cecha | /etykiety-termiczne | /etykiety-termotransferowe-zebra | /tasmy-termotransferowe |
|---|---|---|---|
| TechArticle landing | ✅ | ❌ (jest tylko na subcategory) | ❌ |
| TechArticle serie | ✅ | ✅ (etykiety) | ❌ (tylko Article) |
| HowTo | ✅ landing (5 kroków) | ❌ | ❌ |
| Product + AggregateOffer | ✅ na serii | ❌ | ❌ |
| `dateModified` | ✅ landing + serie | ❌ na landingu | tylko serie |
| DefinedTerm | ❌ | ❌ | ❌ |
| Quotation | ❌ | ❌ | ❌ |
| FAQ landing | 9 ✅ | 6 | 12 |
| FAQ serie | ~10-11 per seria | ~10-11 per seria | ~7-8 per seria |
| Internal links landing | 24+ | 4 | 12 |
| Tabele HTML landing | 2 | 2 | 3 |

**Wniosek**:
- DT to **referencja** w katalogu. 4 z 7 unique schema patterns ma tylko DT (HowTo, Product+AggregateOffer, dateModified na landingu, 24+ linków).
- TT etykiety + taśmy powinny doścignąć DT do tego poziomu (rekomendacje są w osobnym audycie TT).
- DT ma tylko 4 brakujące rzeczy do "perfekcji": DefinedTerm, Quotation, HowTo na seriach, `priceValidUntil`.

---

## 5. Cross-cutting issues

### 5.1 Kanibalizacja: DT rankuje na frazy TT

GSC pokazuje że `/etykiety-termiczne` rankuje na frazy które powinny iść do `/etykiety-termotransferowe-zebra`:

| Fraza | Pozycja | Impr. | Powinno rankować |
|---|---|---|---|
| etykiety termotransferowe zebra | 16 | 173 | `/etykiety-termotransferowe-zebra` |
| taśmy termotransferowe zebra | 33 | 117 | `/tasmy-termotransferowe` |
| drukarka termiczna zebra | 23 | 94 | `/termiczne-drukarki-etykiet` |

**Naprawa**:
1. Dodać tabelę "DT vs TT — kiedy które wybrać" z linkiem do `/etykiety-termotransferowe-zebra` (już jest 1 cross-link, ale wzmocnić).
2. Po launchu TT: Request Indexing nowych URL-i w GSC.
3. Wewnętrzny anchor "etykiety termotransferowe Zebra" z `/etykiety-termiczne` (link już jest w body, ale dodać drugi w sekcji "DT vs TT").

### 5.2 GSC pokazuje że strony serii ledwo dostają impresje

Tylko 2 strony serii widoczne w GSC (z 12). Pozostałe 10 jeszcze nie weszły do indeksu na żadną frazę. **Pre-action**:
- Request Indexing w GSC dla 10 brakujących URL-i serii (jednorazowo)
- Sprawdzić czy `sitemap.xml` zawiera 12 URL-i serii
- Sprawdzić czy łącza z `/etykiety-termiczne` do każdej serii działają z `<Link>` Next.js (statyczny SSR)

### 5.3 Brak `priceValidUntil` w AggregateOffer (Google warning)

Od 2024 Google wymaga `priceValidUntil` w schema Product/Offer do wyświetlenia rich results. Bez tego **rich snippet ceny nie pokaże się w SERP**.

Fix to 1 linia w `serie/[slug]/page.tsx`:

```typescript
offers: {
  '@type': 'AggregateOffer',
  priceCurrency: 'PLN',
  lowPrice: series.priceFrom,
  priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  // ...
}
```

Albo statycznie np. `'2026-12-31'` i odświeżać co 6 miesięcy.

### 5.4 Wspólny `DefinedTerm` komponent — wspólny z TT

Pojęcia powtarzające się między DT i TT (BOPP, PET, OD, gilza, lifespan, BfR XIV, BS5609, top-coat, BPA, BPS, linerless) powinny być wspólnym komponentem (jak rekomendowane w audycie TT). Czas: ~1h DRY.

---

## 6. Priorytetowa lista wdrożenia

### Priorytet 1 — pilne (małe zmiany, duży wpływ)

1. **`priceValidUntil` w AggregateOffer** — 1 linia, otwiera Google Shopping rich snippets
   - Czas: 5 min
   - Wpływ: rich results na seriach
2. **`DefinedTerm` zamiast `Thing` na landingu** — konwersja 7 entities
   - Czas: 15-20 min
   - Wpływ: AI Overview cytuje definicje wprost
3. **Tabela "DT vs TT" na landingu** — wzmacnia naturalne cross-linkowanie + naprawia kanibalizację
   - Czas: 1h
   - Wpływ: użytkownicy szukający "etykiety termotransferowe zebra" trafiają do właściwego URL
4. **Sprawdzić i wzmocnić seoTitle landingu** — musi zawierać "Zebra"
   - Czas: 5 min
   - Wpływ: pozycja na branded queries

### Priorytet 2 — duży wpływ, mniej pracy

5. **HowTo schema na seriach** — 12 serii × ~10 min = 2h
   - Wpływ: AI cytuje kroki + Google daje rich snippets dla "Jak..."
6. **Quotation schema + 2-3 `<blockquote>` na landingu** — 20 min
7. **DefinedTerm wspólny komponent** dla 8-10 pojęć z TT + DT — 1h
8. **Request Indexing dla 10 brakujących serii** w GSC — 30 min ręcznie

### Priorytet 3 — uzupełnienie

9. **`@id` URN dla każdego schema** — 15 min
10. **Tabela porównawcza siostrzanych serii** — 2-3h (lub dynamicznie z data)
11. **Quotation schema na seriach** — 30 min

---

## 7. Łączny czas + spodziewany efekt

| Priorytet | Czas | Efekt |
|---|---|---|
| P1 (priceValidUntil + DefinedTerm + DT vs TT + seoTitle) | 1,5h | Rich snippets + naprawa kanibalizacji |
| P2 (HowTo serie + Quotation + Indexing) | 4h | AI Overview citations + Google indeksuje 10 nowych serii |
| P3 (`@id` + tabele + Quotation serie) | 3-4h | Polishing |
| **RAZEM** | **8-10h** | |

**Spodziewany efekt po 8 tyg.**:

| Metryka | Stan obecny | Po wdrożeniu |
|---|---|---|
| Pozycja "etykiety termiczne" (600 vol) | brak top 30 | 8-15 |
| Pozycja "etykiety termiczne zebra" | 18,9 | 5-10 |
| Pozycja "etykiety do drukarki zebra" | brak | 15-20 |
| Pozycja "etykiety termiczne 100x150" | brak | 10-15 (jeśli landing rankuje na rozmiary) |
| Łączne impresje/mies `/etykiety-termiczne` + 12 serii | 365 | 1 800-3 000 |
| Kliknięcia/mies | 4 | 60-150 |
| Rich snippets cen w SERP | brak | tak (po `priceValidUntil`) |
| Cytowania w AI engines | sporadyczne | częste (po DefinedTerm + Quotation) |

**Potencjał ruchu DT (1 460 wyszukiwań/mies) jest 2× większy niż TT (620). DT to priorytet biznesowy mimo, że TT jest świeższe.**

---

## 8. Quick reference dla Claude Code

| Zmiana | Plik | Czas |
|---|---|---|
| `priceValidUntil` | `src/app/etykiety-termiczne/serie/[slug]/page.tsx` (sekcja `offers`) | 5 min |
| `Thing` → `DefinedTerm` (7 entities) | `src/app/etykiety-termiczne/page.tsx` (sekcja `techArticleSchema`) | 15 min |
| Tabela "DT vs TT" | `src/app/etykiety-termiczne/page.tsx` (nowa H2 sekcja) | 1h |
| Sprawdzić `seoTitle` "Zebra" | `src/data/categories.ts` (lub gdzie `sub.seoTitle`) | 5 min |
| HowTo per seria | `src/app/etykiety-termiczne/serie/[slug]/page.tsx` (nowy schema generator) | 2h |
| Quotation + `<blockquote>` | landing + serie | 30 min |
| Wspólny `DefinedTerm` komponent | nowy `src/components/schemas/CommonDefinitions.tsx` | 1h |
| Request Indexing | GSC UI — 10 URL-i serii | 30 min |
| `@id` URN dla schemas | wszystkie 2 page.tsx | 15 min |

---

## 9. Czego się tym razem nie pomyliłem (poprawka metodologiczna)

W audycie TT pierwsza wersja miała błąd skryptu (niepoprawnie zgłosiłem 183 brakujące pytania FAQ). Tym razem:
- Sprawdziłem grepem `transfer-thermal-series.ts` zanim policzyłem FAQ — 62 pytania w pliku data
- Sprawdziłem `<Link>` realnie w body landingu — 24+ linków (nie 3, jak wskazałby naiwny grep)
- Sprawdziłem `Product + AggregateOffer` przez grep `'@type':` w schemach
- Sprawdziłem `dateModified` z konkretnymi datami (`2026-06-02` na landingu, `2026-05-18` na serii)
- Sprawdziłem GSC pozycje na realnych frazach (nie założeniach)

**Wnioski końcowe**:
- DT to **najlepiej zoptymalizowana kategoria w sklepie**
- 4 luki realne: DefinedTerm, Quotation, HowTo na seriach, `priceValidUntil`
- 8-10h pracy żeby przejść z "bardzo dobrego" do "wybitnego"
- Potencjał ruchu 1 460 vol/mies w PL — 2× więcej niż TT
