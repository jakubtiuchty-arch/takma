# SEO Audit: /terminale-honeywell (Brand Category Page)

**Data audytu**: 2026-03-03
**URL**: `https://www.takma.com.pl/terminale-honeywell`
**Typ strony**: Brand Category (marka + kategoria produktów)
**Status**: KRYTYCZNY — strona zwraca **404 na produkcji** (kod istnieje lokalnie)

---

## 0. CRITICAL: Strona zwraca HTTP 404

**Problem**: Pomimo istnienia pliku `src/app/terminale-honeywell/page.tsx`, definicji brand category w `products.ts` (linia 32436), pełnego rich contentu w `brand-category-content.ts` (linia 1154), i obecności w sitemap.ts — strona zwraca **404** na `https://www.takma.com.pl/terminale-honeywell`.

**Przyczyna prawdopodobna**: Strona nie została zdeployowana na Vercel (brak nowego buildu po dodaniu plików) LUB problem z Next.js cache/routing.

**Wpływ**: ZERO indeksacji, ZERO ruchu, ZERO SEO value. Cała praca nad contentem jest zmarnowana dopóki strona nie jest dostępna.

**Priorytet**: P0 CRITICAL — wymaga natychmiastowego deployu.

---

## 1. Analiza kodu źródłowego (co POWINNO być na stronie)

### 1.1 Route Page
- **Plik**: `/Users/jakubtiuchty/takma/src/app/terminale-honeywell/page.tsx`
- **Komponent**: `BrandCategoryPage` z slug `terminale-honeywell`
- **Metadata**: generowana dynamicznie z `getBrandCategoryBySlug()`

### 1.2 Metadata (z products.ts linia 32441-32442)
- **Title**: `Terminale mobilne Honeywell — CT70, CT47, CK67, CK62, CT32 | od 3 389 zł` (75 znaków)
- **Description**: `Terminale Honeywell do magazynów, logistyki i produkcji: CT70 (Wi-Fi 7), CT47 (5G, FlexRange XLR), CK67 (ultra-rugged gun), CK62 (lekki gun), CT32 (entry-level). Android 14→19, Mobility Edge. Od 3 389 zł netto. TAKMA — autoryzowany dystrybutor.` (254 znaki)
- **Canonical**: `https://www.takma.com.pl/terminale-honeywell`
- **OG Tags**: title, description, url

### 1.3 Ocena Title Tag
- **Długość**: 75 znaków — **OK** (granica 60 zn. w SERP, ale pełny tytuł indeksowany)
- **Słowa kluczowe**: "Terminale mobilne Honeywell", CT70, CT47, CK67, CK62, CT32, cena
- **Cena w tytule**: "od 3 389 zł" — **dobra praktyka** (CTR boost)
- **Ocena**: 8/10 — mogłoby być krótsze, ale zawiera kluczowe modele i cenę

### 1.4 Ocena Meta Description
- **Długość**: 254 znaki — **za długie** (Google ucina po ~155-160)
- **Zawiera**: modele, USP (Wi-Fi 7, 5G, FlexRange XLR), Mobility Edge, cenę, CTA
- **Problem**: Po ucięciu przez Google użytkownik zobaczy: "Terminale Honeywell do magazynów, logistyki i produkcji: CT70 (Wi-Fi 7), CT47 (5G, FlexRange XLR), CK67 (ultra-rugged gun)..."
- **Ocena**: 6/10 — za długie, najważniejsze info (TAKMA, cena) ucięte

---

## 2. Schema Markup (z BrandCategoryPage.tsx)

Komponent generuje **5 schematów JSON-LD**:

| Schema | Status | Poprawność |
|--------|--------|------------|
| BreadcrumbList | OK | 3-level: Strona główna → Terminale mobilne → Terminale mobilne Honeywell |
| CollectionPage | OK | name, description, url, numberOfItems, provider, brand, mainEntity.ItemList |
| FAQPage | OK | 12 pytań z rich content (brand-category-content.ts) |
| HowTo | OK | 5 kroków "Jak wybrać i wdrożyć terminale mobilne honeywell" |
| WebPage + Speakable | OK | cssSelector: h1, .definition-content, .faq-section |

**Ocena Schema**: 10/10 — kompletny zestaw, CollectionPage+FAQPage+HowTo+Speakable to rzadkość w branży.

---

## 3. Content Quality Analysis

### 3.1 Struktura nagłówków (z komponentu)
- **H1**: "Terminale mobilne Honeywell"
- **H2**: "Terminale mobilne Honeywell — platforma Mobility Edge i technologia FlexRange" (definition)
- **H2**: "Jak wybrać terminal mobilny Honeywell? 7 kryteriów" (buying guide)
- **H2**: "Dlaczego TAKMA?" (expert authority)
- **H2**: "Parametry techniczne i koszty" (technical deep dive)
- **H2**: "Scenariusze zastosowań" (use cases)
- **H2**: "Czego sprzedawcy terminali Honeywell nie powiedzą" (unique insights)
- **H2**: "Porównanie" (comparisons)
- **H2**: "Jak wdrożyć terminale mobilne honeywell?" (HowTo)
- **H2**: "Najczęściej zadawane pytania" (FAQ)
- **H2**: "Zobacz również" (cross-links)
- **H3**: 6 use cases, 4 unique insights, 3 comparisons, 5 HowTo steps = ~18 H3

**Ocena heading hierarchy**: 10/10 — logiczna, głęboka, kompletna

### 3.2 Szacunkowa ilość treści
- **longDescription**: ~150 słów
- **definition.content**: ~280 słów (1 passage)
- **buyingGuide**: ~350 słów (7 items)
- **expertAuthority**: ~100 słów
- **technicalDeepDive**: ~400 słów + tabela (5 modeli)
- **useCases**: ~300 słów (6 scenariuszy)
- **uniqueInsights**: ~300 słów (4 items)
- **comparisons**: ~400 słów (3 porównania)
- **howToSteps**: ~200 słów (5 kroków)
- **FAQ**: ~1800 słów (12 pytań × ~150 słów/odpowiedź)
- **tcoComparisons**: ~200 słów (1 tabela TCO)
- **brandCategory FAQ (products.ts)**: ~1600 słów (13 pytań) — UWAGA: mogą się pokrywać z rich content FAQ

**Szacunek łączny**: **~4,500-5,000 słów** (bez nawigacji i UI)

**Ocena ilości treści**: 10/10 — znacznie powyżej 3,000 słów minimum dla brand category

### 3.3 Treść FAQ
- **Rich content FAQ**: 12 pytań (brand-category-content.ts linia 1258-1313)
- **Fallback FAQ (products.ts)**: 13 pytań — renderowany tylko gdy `content` brak
- **Faktycznie**: Ponieważ rich content istnieje → renderowane 12 pytań z content
- **Długość odpowiedzi**: 50-120 słów (optymalne dla AEO: 40-60 słów target)
- **Linkowanie wewnętrzne w FAQ**: TAK — markdown linki do produktów, porównań, serwisu

**Ocena FAQ**: 9/10 — 12 pytań z linkami, passage-level citable. Odpowiedzi nieco za długie (50-120 słów vs. target 40-60).

### 3.4 Tabele porównawcze
- **Tabela modeli**: technicalDeepDive → parsowany w tabelę HTML (Model | Parametry | Cena | Zastosowanie)
- **TCO comparison**: 1 tabela (CK67 vs MC9400, 20 szt., 3 lata)
- **Porównania head-to-head**: 3 (Honeywell vs Zebra, CT32 vs TC22, CK67 vs MC9400)

**Ocena tabel**: 9/10 — tabela modeli + TCO + porównania. Brakuje tabelarycznego porównania wszystkich 5 modeli side-by-side.

---

## 4. Technical SEO

### 4.1 Sitemap
- **Status**: TAK — `src/app/sitemap.ts` linia 57-60 generuje URL-e dla wszystkich `brandCategories`
- `terminale-honeywell` jest w tablicy `brandCategories` → automatycznie w sitemap
- **Weryfikacja live**: Sitemap na produkcji zawiera URL-e produktów Honeywell (CT70, CT32, CK67, CT47, CK62)

### 4.2 Robots.txt
- **Status**: OK — żadne reguły nie blokują `/terminale-honeywell`
- AI boty (GPTBot, PerplexityBot, ClaudeBot) dozwolone
- Sitemap directive: `https://www.takma.com.pl/sitemap.xml`

### 4.3 Canonical
- **Status**: OK — `alternates.canonical: https://www.takma.com.pl/terminale-honeywell`

### 4.4 Mobile-friendly
- **BrandCategoryPage**: responsive (`flex-col lg:flex-row`, sidebar `hidden lg:block`)
- Sidebar schowane na mobile → pełna szerokość treści
- Tabela technicalDeepDive: `overflow-x-auto -mx-4 px-4` (horizontal scroll on mobile)
- FAQ: `details/summary` component (expandable)
- **Ocena**: 9/10 — responsive, ale sidebar ukryty kompletnie na mobile (brak filtrowania po marce)

### 4.5 Internal Linking
- **Navbar**: Link "Terminale Honeywell" w dropdown "Terminale mobilne" — OK
- **Footer**: BRAK bezpośredniego linku do `/terminale-honeywell`
- **W treści**: ~40+ linków wewnętrznych (markdown → LinkedText):
  - Linki do 5 produktów Honeywell: CT32, CT47, CT70, CK62, CK67
  - Linki do konkurencyjnych stron: `/terminale-mobilne-zebra`, `/terminale-newland`
  - Linki do serwisu: `serwis-zebry.pl`
  - Linki do porównania: `/poradnik/zebra-vs-honeywell-terminale-mobilne`
  - Linki do kategorii: `/terminale-mobilne`
- **Cross-links section**: "Zobacz również" z linkami do parent category + subcategories
- **Sibling brand categories**: automatycznie wyświetlane w sidebar

**Ocena internal linking**: 9/10 — bogaty, kontekstowy. Brakuje linku w Footer.

---

## 5. Produkty Honeywell w katalogu

| Model | ID | Status | Warianty |
|-------|----|--------|----------|
| CT70 | honeywell-ct70 | OK | Tak |
| CT32 | honeywell-ct32 | OK | Tak |
| CK67 | honeywell-ck67 | OK | Tak |
| CT47 | honeywell-ct47 | OK | Tak |
| CK62 | honeywell-ck62 | OK | Tak |

**5 terminali + ~35 akcesoriów** — kompletna linia aktualna (2026).

**Brakujące modele**: CT37 (nowy model 2026), EDA56 (mid-range)

---

## 6. AI Search Readiness (AEO/GEO)

### 6.1 Passage-level citability
- **Definition**: TAK — `.definition-content` z jasną definicją front-loaded
- **FAQ**: TAK — 12 pytań z odpowiedziami 50-120 słów
- **Speakable**: TAK — JSON-LD `SpeakableSpecification` z selektorami h1, .definition-content, .faq-section
- **Problem**: Odpowiedzi FAQ nieco za długie (target: 40-60 słów). Wiele odpowiedzi ma 80-120 słów.

### 6.2 Tabele porównawcze
- **TAK** — tabela modeli (5 wierszy), TCO comparison (CK67 vs MC9400)

### 6.3 Definicje front-loaded
- **TAK** — "Honeywell Technologies [...] to drugi co do wielkości producent terminali mobilnych klasy enterprise na świecie"

### 6.4 Cross-brand comparison
- **TAK** — 3 porównania (Honeywell vs Zebra, CT32 vs TC22, CK67 vs MC9400)

### 6.5 Buying guide z criteria
- **TAK** — 7 kryteriów z modelami i cenami

**Ocena AEO/GEO**: 9/10

---

## 7. E-E-A-T Signals

| Sygnał | Status | Opis |
|--------|--------|------|
| Expert authority | OK | Sekcja "Dlaczego TAKMA?" z opisem 25 lat doświadczenia |
| Certyfikaty | BRAK | Brak wymienionych certyfikatów partnerskich Honeywell |
| Serwis mention | OK | Linki do serwis-zebry.pl, "serwis pogwarancyjny Honeywell" |
| Unique insights | OK | 4 insighty "Czego sprzedawcy nie powiedzą" |
| TCO/ROI data | OK | Tabela TCO 3 lata CK67 vs MC9400 (20 szt.) |
| Ceny aktualne | OK | Ceny z Ingram/BlueStar ×1.15, aktualizowane codziennie |

**Ocena E-E-A-T**: 8/10 — brak certyfikatów partnerskich Honeywell (Authorized Reseller badge)

---

## 8. Porównanie z konkurencją

### 8.1 aspekt.net.pl
- **URL**: `/oferta/komputery-mobilne` (nie dedykowana strona Honeywell)
- **Content**: ~800-1000 słów, lista produktów (12 total, tylko 1 Honeywell CT70)
- **Schema**: CollectionPage, BreadcrumbList — OK
- **FAQ**: BRAK
- **Porównania**: BRAK
- **Unique content**: artykuły blogowe ("TOP 7 terminali", "TOP 10 terminali") — DOBRE
- **Honeywell focus**: SŁABY — 1 model z 12

### 8.2 ganeo.pl
- **URL**: `/terminale-kolektory/terminale-kolektory-wedlug-producenta/terminale-honeywell/`
- **Title**: "Terminale Honeywell – Wydajne i Niezawodne Kolektory Danych"
- **Content**: ~500-600 słów, 26 produktów (ale wiele wycofanych: CT60XP, CK65, CT40)
- **Schema**: Organization, WebPage — BRAK CollectionPage, FAQPage
- **FAQ**: BRAK
- **Porównania**: BRAK
- **Heading**: H1 + 2× H2 — minimalne

### 8.3 4labels.pl
- **URL**: `/producenci/terminale-honeywell.html`
- **Title**: "Terminale kodów kreskowych Honeywell - Sklep 4labels.pl"
- **Content**: ~800-1000 słów, 8 produktów (głównie wycofane: CN80, CN75, EDA50K)
- **Schema**: BRAK JSON-LD!
- **FAQ**: BRAK
- **Porównania**: BRAK, ale opcja "Dodaj do porównania"
- **Problem**: produkty nieaktualne (Dolphin CN80, CK3X — seria wycofana)

### 8.4 bcmarket.pl
- **URL**: Dynamiczna kategoria `/terminale-mobilne/` z filtrem Honeywell
- **Content**: minimalna (nazwy produktów + ceny)
- **Schema**: ProductList (dynamiczny)
- **FAQ**: BRAK
- **Porównania**: BRAK
- **Przewaga**: aktualne modele (CK67, CK62, CT47, CT37, EDA56)

### Podsumowanie konkurencji

| Cecha | TAKMA | aspekt.net.pl | ganeo.pl | 4labels.pl | bcmarket.pl |
|-------|-------|---------------|----------|------------|-------------|
| Dedykowana strona Honeywell | TAK (ale 404!) | NIE | TAK | TAK | NIE (filtr) |
| Aktualne modele | 5 (2024-2026) | 1 | 26 (mieszane) | 8 (wycofane!) | ~15 (aktualne) |
| Rich content (słowa) | ~5,000 | ~1,000 | ~500 | ~800 | ~100 |
| FAQ | 12 pytań | 0 | 0 | 0 | 0 |
| Schema (CollectionPage) | TAK | TAK | NIE | NIE | NIE |
| Schema (FAQPage) | TAK | NIE | NIE | NIE | NIE |
| Schema (HowTo) | TAK | NIE | NIE | NIE | NIE |
| Porównania cross-brand | 3 | 0 | 0 | 0 | 0 |
| TCO data | TAK | NIE | NIE | NIE | NIE |
| Buying guide | 7 kryteriów | NIE | 2× H2 | NIE | NIE |
| Use cases | 6 | 7 | 0 | 0 | 0 |
| Ceny | TAK (live) | NIE | NIE | NIE | TAK |
| Serwis mention | TAK | TAK | TAK | NIE | NIE |

**TAKMA jest absolutnym liderem contentu** — ale to nie ma znaczenia dopóki strona zwraca 404.

---

## 9. Scoring (skala 0-100)

### UWAGA: Scoring opiera się na kodzie źródłowym (co POWINNO być). Efektywny scoring = 0 dopóki strona zwraca 404.

| Kategoria | Waga | Score (kod) | Score (live) | Ważony (kod) | Ważony (live) |
|-----------|------|-------------|--------------|---------------|----------------|
| Technical SEO | 25% | 85 | 0 | 21.25 | 0.00 |
| Content Quality | 25% | 95 | 0 | 23.75 | 0.00 |
| On-Page SEO | 20% | 88 | 0 | 17.60 | 0.00 |
| Schema | 10% | 98 | 0 | 9.80 | 0.00 |
| Performance | 10% | 70 | 0 | 7.00 | 0.00 |
| Images | 5% | 60 | 0 | 3.00 | 0.00 |
| AI Search Readiness | 5% | 92 | 0 | 4.60 | 0.00 |
| **TOTAL** | **100%** | — | — | **87.0** | **0.0** |

### Scoring po naprawie 404 (projected):

**87.0 / 100** — doskonały wynik dla brand category page.

### Rozbicie punktowe:

**Technical SEO (85/100)**:
- (+) Canonical, sitemap, robots.txt, mobile responsive
- (+) Server-rendered (Next.js SSG)
- (-) Meta description za długie (254 zn.)
- (-) Brak `dateModified` dynamicznego w sitemap (hardcoded `2026-02-15`)
- (-) Title 75 zn. (ucięty w SERP)

**Content Quality (95/100)**:
- (+) ~5,000 słów rich content
- (+) 12 FAQ, 6 use cases, 3 porównania, 7 buying guide criteria, TCO
- (+) Unique insights ("Czego nie powiedzą")
- (+) HowTo 5-step implementation guide
- (-) Brak modelu CT37 i EDA56 (nowsze modele Honeywell)

**On-Page SEO (88/100)**:
- (+) H1 + 10× H2 + ~18× H3 — doskonała hierarchia
- (+) Breadcrumbs 3-level
- (+) 40+ linków wewnętrznych
- (-) Meta description 254 zn. (powinno: max 160)
- (-) Title 75 zn. (powinno: max 60)
- (-) Brak linku w Footer

**Schema (98/100)**:
- (+) 5 schematów: BreadcrumbList, CollectionPage, FAQPage, HowTo, Speakable
- (+) Unikalne w branży — żaden konkurent nie ma FAQPage+HowTo+Speakable
- (-) Brak `dateModified` w CollectionPage (hardcoded)
- (-) Brak Image w CollectionPage

**Performance (70/100)**:
- (+) Next.js SSG/ISR — szybki TTFB
- (-) Brak weryfikacji (strona 404) — nie można zmierzyć CWV
- (-) Brak `priority` w sitemap URL
- (-) Brak preload dla krytycznych zasobów (fonts, images)

**Images (60/100)**:
- (-) Strona brand-category nie ma hero image
- (-) Brak OG Image dedykowanego (brak `og:image` w metadata)
- (-) Product images — zależne od ProductGrid component

**AI Search Readiness (92/100)**:
- (+) Speakable JSON-LD
- (+) FAQ passage-level citable
- (+) Front-loaded definitions
- (+) Cross-brand comparisons z TCO
- (+) HowTo schema
- (-) FAQ odpowiedzi za długie (80-120 słów vs target 40-60)
- (-) Brak podsumowania (TL;DR) na górze

---

## 10. ACTION PLAN

### P0 — CRITICAL (natychmiast)

1. **Deploy strony na produkcję** — strona zwraca 404
   - Trigger: `git push` + Vercel rebuild
   - Sprawdzić: `next build` nie rzuca error na `terminale-honeywell`
   - Po deploy: weryfikacja HTTP 200 + Google Search Console → Request Indexing

2. **Zresetować cache `.next`** — `pkill -f "next dev"; rm -rf .next; npx next dev`

### P1 — HIGH (tydzień)

3. **Skrócić meta description** do max 155 znaków:
   - Obecne: 254 zn.
   - Propozycja: `Terminale mobilne Honeywell CT70, CT47, CK67, CK62, CT32 — od 3 389 zł netto. FlexRange XLR do 24 m, Wi-Fi 7, Android 14→19. TAKMA — autoryzowany dystrybutor.` (155 zn.)

4. **Skrócić title tag** do max 60 znaków:
   - Obecne: 75 zn.
   - Propozycja: `Terminale mobilne Honeywell — od 3 389 zł | TAKMA` (51 zn.)

5. **Dodać OG image** — dedykowany obraz brand category (Honeywell logo + terminale)

6. **Dodać link w Footer** do `/terminale-honeywell`

7. **Zaktualizować `lastModified` w sitemap** — dynamiczna data zamiast hardcoded `2026-02-15`

### P2 — MEDIUM (2 tygodnie)

8. **Skrócić odpowiedzi FAQ** — target 40-60 słów na odpowiedź (AEO optimization):
   - Obecne: 50-120 słów
   - Rozwiązanie: pierwsze 40-60 słów = direct answer, reszta = expanded detail

9. **Dodać TL;DR na górze strony** — 2-3 zdania podsumowania dla AI Overviews

10. **Dodać brakujące modele**: CT37 (nowy 2026), EDA56 (mid-range)

11. **Dodać tabela side-by-side** — wszystkie 5 modeli (CT32, CK62, CT70, CK67, CT47) w jednej tabeli porównawczej (like subcategory comparisonTable)

12. **Dodać `dateModified` dynamiczny** w CollectionPage schema (np. z `product.createdAt`)

13. **Dodać Image do CollectionPage schema** — `image: '/images/brand/honeywell-terminale.webp'`

### P3 — LOW (miesiąc)

14. **Poradnik**: "Zebra vs Honeywell — porównanie terminali mobilnych" (link z navbar i FAQ istnieje, ale strona `/poradnik/zebra-vs-honeywell-terminale-mobilne` może nie istnieć)

15. **Dodać certyfikat partnerski Honeywell** w sekcji E-E-A-T

16. **Mobile sidebar** — zamiast `hidden lg:block`, dodać collapsible drawer z filtrami

17. **Dodać `priority` w sitemap** dla brand category pages

18. **Performance audit** po deploy — Lighthouse, CWV

---

## 11. Podsumowanie

Strona `/terminale-honeywell` to **najlepsza brand category page Honeywell w polskim internecie** pod względem contentu, schema markup i AI readiness — daleko wyprzedzająca aspekt.net.pl, ganeo.pl, 4labels.pl i bcmarket.pl. Jednak **cały ten content jest bezużyteczny**, ponieważ strona zwraca HTTP 404 na produkcji.

**Natychmiastowe działanie**: Deploy na produkcję → Request Indexing w GSC → weryfikacja HTTP 200.

Po naprawie 404, projected score: **87/100** — z potencjałem do **92/100** po wdrożeniu P1-P2.

---

## 12. Produkty Honeywell — kompletność oferty

| Model | Typ | Status w TAKMA | Status u konkurencji |
|-------|-----|---------------|---------------------|
| CT32 | Entry-level dotykowy | OK (+ 12 akcesoriów) | ganeo, bcmarket |
| CT47 | Premium 5G | OK (+ 4 akcesoria) | bcmarket |
| CT70 | Premium Wi-Fi 7 | OK (+ 6 akcesoriów) | aspekt, bcmarket |
| CK62 | Lekki gun | OK (+ 8 akcesoriów) | bcmarket |
| CK67 | Ultra-rugged gun | OK (+ 12 akcesoriów) | ganeo, bcmarket |
| CT37 | Mid-range 5G (nowy 2026) | BRAK | aspekt, bcmarket |
| EDA56 | Mid-range dotykowy | BRAK | bcmarket |

**Rekomendacja**: Dodać CT37 i EDA56 w Q2 2026 (P2).
