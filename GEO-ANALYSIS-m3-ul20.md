# GEO Analysis: takma.com.pl/produkt/m3-ul20

**Data:** 2026-03-29
**Strona:** https://www.takma.com.pl/produkt/m3-ul20
**Produkt:** M3 UL20 — terminal gun z klawiaturą, 5" FHD, IP67

---

## 1. GEO Readiness Score: 58/100

| Kryterium | Waga | Wynik | Ocena |
|-----------|------|-------|-------|
| Citability Score | 25% | 16/25 | Dobra treść, brak cytowanych źródeł |
| Structural Readability | 20% | 17/20 | Bardzo dobra struktura |
| Multi-Modal Content | 15% | 7/15 | Zdjęcia OK, brak video/infografik |
| Authority & Brand Signals | 20% | 8/20 | Słaba obecność marki w sieci |
| Technical Accessibility | 20% | 10/20 | CSR zamiast SSR — krytyczny problem |

---

## 2. Platform Breakdown

| Platforma | Wynik | Komentarz |
|-----------|-------|-----------|
| **Google AI Overviews** | 62/100 | Dobra struktura + schema, ale CSR ogranicza crawlability |
| **ChatGPT** | 48/100 | GPTBot dozwolony, ale brak entity presence (Wikipedia, Reddit) |
| **Perplexity** | 52/100 | PerplexityBot dozwolony, dobra treść FAQ, brak walidacji społecznościowej |

### Google AI Overviews
- **Pozytywne:** Tabele porównawcze, FAQ z 11 pytaniami, schema Product + FAQPage, BreadcrumbList
- **Negatywne:** Treść renderowana client-side (CSR) — Googlebot renderuje JS, ale z opóźnieniem i nie zawsze kompletnie. Brak dat publikacji widocznych dla użytkownika.

### ChatGPT (via GPTBot / OAI-SearchBot)
- **Pozytywne:** Crawler dozwolony, bogate dane techniczne, tabela wariantów z cenami
- **Negatywne:** Brak obecności TAKMA na Wikipedii, Reddicie, YouTube. ChatGPT cytuje głównie Wikipedia (47.9%) i Reddit (11.3%) — TAKMA nie istnieje w tych źródłach. CSR = GPTBot nie wykonuje JavaScript, więc widzi pusty shell.

### Perplexity
- **Pozytywne:** PerplexityBot dozwolony, FAQ dobrze sformatowane
- **Negatywne:** Perplexity opiera się na Reddit (46.7%) i Wikipedia — brak wątków o M3 UL20 na Reddicie. CSR = PerplexityBot prawdopodobnie nie widzi treści.

---

## 3. AI Crawler Access Status

| Crawler | Owner | Status | Cel |
|---------|-------|--------|-----|
| **GPTBot** | OpenAI | ✅ Dozwolony | ChatGPT web search |
| **OAI-SearchBot** | OpenAI | ⚠️ Brak wpisu | OpenAI search (domyślnie dozwolony) |
| **ChatGPT-User** | OpenAI | ✅ Dozwolony | ChatGPT browsing |
| **ClaudeBot** | Anthropic | ✅ Dozwolony | Claude web features |
| **anthropic-ai** | Anthropic | ❌ Zablokowany | Claude training |
| **Claude-Web** | Anthropic | ❌ Zablokowany | Claude training |
| **PerplexityBot** | Perplexity | ✅ Dozwolony | Perplexity AI search |
| **GoogleOther** | Google | ✅ Dozwolony | Google AI features |
| **Google-Extended** | Google | ❌ Zablokowany | Gemini training |
| **CCBot** | Common Crawl | ❌ Zablokowany | Training data |
| **Bytespider** | ByteDance | ❌ Zablokowany | TikTok AI |
| **cohere-ai** | Cohere | ❌ Zablokowany | Model training |

**Ocena:** Bardzo dobra strategia — AI search crawlery dozwolone, training crawlery zablokowane. Brakuje wpisu dla `OAI-SearchBot` (warto dodać explicit allow).

### KRYTYCZNY PROBLEM: CSR nullyfikuje dostęp crawlerów

Mimo że GPTBot, ClaudeBot i PerplexityBot mają dostęp, **nie wykonują JavaScript**. Strona jest renderowana client-side (Next.js CSR z `__next_f` push arrays). Crawlery AI widzą pusty HTML shell bez treści produktowej. **To najpoważniejszy problem tej strony.**

---

## 4. llms.txt Status

**Status:** ✅ Plik istnieje pod adresem `https://www.takma.com.pl/llms.txt`

**Zawartość:** Plik zawiera opis firmy TAKMA — informacje o specjalizacji AutoID, partnerach (Zebra, Honeywell, Datalogic), usługach serwisowych i danych kontaktowych.

**Rekomendacje ulepszeń:**
- Dodać sekcję z kluczowymi produktami i linkami (w tym M3 UL20)
- Dodać structured sections: `## Produkty`, `## Usługi`, `## Poradniki`
- Dodać kluczowe fakty liczbowe (25+ lat doświadczenia, 15 pracowników, 9 partnerów)
- Dodać link do sitemap XML

---

## 5. Brand Mention Analysis

| Platforma | TAKMA | M3 UL20 | Ocena |
|-----------|-------|---------|-------|
| **Wikipedia (PL/EN)** | ❌ Brak | ❌ Brak | Krytyczny brak |
| **Reddit** | ❌ Brak | ❌ Brak | Krytyczny brak |
| **YouTube** | ❌ Brak filmów | ❌ Brak recenzji | Krytyczny brak |
| **LinkedIn** | ✅ Profil osobowy + firmowy | ❌ Brak wzmianek | Częściowa obecność |
| **Wikidata** | ❌ Brak encji | ❌ Brak | Brak entity linkage |
| **Katalogi biznesowe** | ✅ Aleo, Marketplanet, YellowPages | — | Podstawowa obecność |

**Brand Mention Score: 15/100**

Wg badania Ahrefs (grudzień 2025), brand mentions korelują 3× silniej z widocznością AI niż backlinki. YouTube mentions mają najsilniejszą korelację (~0.737). TAKMA ma **zerową obecność** na YouTube i Reddicie — dwóch najważniejszych platformach dla AI citations.

---

## 6. Passage-Level Citability Analysis

### Dobre przykłady (gotowe do cytowania)

**Passage 1 — Definicja produktu (ocena: 8/10)**
> "M3 UL20 to wytrzymały terminal magazynowy gun (kolektor danych) z fizyczną klawiaturą i ekranem 5" Full HD (1920x1080), przeznaczony do pracy w magazynach, centrach dystrybucyjnych, produkcji i chłodniach."

✅ Wzorzec "X to..." (definicja), ✅ konkretne fakty, ✅ self-contained

**Passage 2 — Warianty (ocena: 7/10)**
> "UL20W: Wi-Fi + opcjonalny GPS, procesor 2.0 GHz — wariant entry-level. UL20F: wyższa specyfikacja (2.2 GHz, 4 GB/32-64 GB), wersja Freezer do −30°C. UL20X: moduł 4G LTE + GPS do pracy terenowej bez Wi-Fi."

✅ Konkretne dane, ✅ zrozumiałe bez kontekstu

**Passage 3 — Porównanie z konkurencją (ocena: 9/10)**
> Tabela porównawcza UL20 vs UL30 vs MC3400 vs SL20K z konkretnymi parametrami.

✅ Unikalne dane, ✅ structured format, ✅ AI chętnie cytuje tabele

### Słabe przykłady (wymagają poprawy)

**Problem 1: Brak cytowanych źródeł**
Żaden fragment nie zawiera odniesień do zewnętrznych badań, testów, certyfikacji. Np. "IP67" jest podane bez wyjaśnienia co to oznacza w praktyce (zanurzenie 1m/30min).

**Problem 2: Brak autora/eksperta**
Strona nie ma byline — kto napisał te treści? AI systemy preferują content z przypisanym autorem.

**Problem 3: Brak unique data**
Dane techniczne są kopiowane ze spec sheet producenta. Brakuje unikalnych testów, benchmarków, porównań z realnego użycia.

### Rekomendowane nowe passages (134-167 słów)

Dodać blok "Dla kogo jest M3 UL20?" z konkretnym case study:
> "M3 UL20 sprawdza się najlepiej w średnich i dużych magazynach (5 000–50 000 m²), gdzie operatorzy potrzebują fizycznej klawiatury do szybkiego wprowadzania kodów lokalizacji i ilości. W testach naszych klientów wariant UL20F Freezer z klawiaturą 53-klawiszową obsługiwał [X] skanów dziennie w temperaturze −25°C bez spadku wydajności baterii poniżej [Y]%. Koszt TCO (Total Cost of Ownership) na 5 lat przy floty 20 terminali wynosi ok. [Z] PLN dzięki kompatybilności akcesoriów z nowszym UL30..."

---

## 7. Server-Side Rendering Check

| Element | Status | Wpływ na GEO |
|---------|--------|--------------|
| Framework | Next.js (App Router) | — |
| Rendering | ❌ **Client-Side Rendering (CSR)** | KRYTYCZNY |
| `__next_f` push arrays | Obecne — dane serializowane w JS chunks | Treść niewidoczna dla AI crawlerów |
| JSON-LD Schema | ✅ Obecne w HTML | Crawlery widzą schema ale nie content |
| Meta tags | ⚠️ Nieweryfikowalne (brak w widocznym HTML head) | Potencjalny problem |
| `<noscript>` fallback | ❌ Brak | AI crawlery widzą pusty DOM |

### KRYTYCZNY PROBLEM

**AI crawlery (GPTBot, ClaudeBot, PerplexityBot) nie wykonują JavaScript.** Strona renderowana client-side oznacza, że:

1. Crawlery widzą pusty `<div id="__next"></div>` + serialized JS chunks
2. Treść produktowa (opisy, specyfikacje, FAQ) jest **niewidoczna**
3. Jedynie JSON-LD schema może być parsowane (jeśli jest w initial HTML)
4. **Cała treść zoptymalizowana pod GEO jest bezużyteczna** dopóki nie zostanie dostarczona jako SSR/SSG

**Google** renderuje JS (Googlebot używa headless Chrome), ale z opóźnieniem 5-20s i nie zawsze kompletnie. Dla Google AI Overviews wpływ jest umiarkowany, ale dla ChatGPT i Perplexity — **destrukcyjny**.

---

## 8. Top 5 Highest-Impact Changes

### 1. 🔴 CRITICAL: Przejście na SSR/SSG (wpływ: +20-30 pkt GEO)

**Problem:** CSR sprawia, że AI crawlery widzą pusty HTML.
**Rozwiązanie:** Zmienić stronę produktową na Server-Side Rendering (SSR) lub Static Site Generation (SSG) w Next.js.

```tsx
// pages/produkt/[slug].tsx lub app/produkt/[slug]/page.tsx
export async function generateStaticParams() { ... }
// lub
export const dynamic = 'force-static' // SSG
```

**Priorytet:** NATYCHMIASTOWY — bez tego pozostałe optymalizacje GEO mają ograniczony efekt.

### 2. 🟠 HIGH: Budowa obecności marki na YouTube i Reddit (+10-15 pkt)

**Problem:** Zerowa obecność na platformach o najwyższej korelacji z AI citations.
**Rozwiązanie:**
- Nagrać 3-5 filmów: "M3 UL20 unboxing i test w magazynie", "UL20 vs UL30 — który wybrać?", "Jak wybrać terminal gun?"
- Założyć wątki na r/logistics, r/supplychain, r/warehousemanagement z realnym doświadczeniem
- Opublikować case study na LinkedIn z tagami M3 Mobile

### 3. 🟡 MEDIUM: Dodanie autora + dat widocznych dla użytkownika (+5-8 pkt)

**Problem:** Brak byline, brak widocznych dat publikacji/aktualizacji.
**Rozwiązanie:**
- Dodać "Autor: Krzysztof Wójcik, specjalista AutoID | Aktualizacja: 29.03.2026"
- Implementować schema `Person` z `sameAs` do LinkedIn
- Dodać krótki bio autora z credentials

### 4. 🟡 MEDIUM: Wzbogacenie treści o unikalne dane i źródła (+5-7 pkt)

**Problem:** Dane techniczne skopiowane ze spec sheet — brak unikalnej wartości.
**Rozwiązanie:**
- Dodać wyniki własnych testów (czas pracy baterii, szybkość skanowania)
- Dodać case study klienta ("Magazyn X zwiększył wydajność o Y%")
- Cytować źródła: "Wg certyfikacji IEC 60529, IP67 oznacza ochronę przed zanurzeniem do 1m na 30 min"
- Dodać passage 134-167 słów z unique data

### 5. 🟢 QUICK WIN: Rozbudowa llms.txt o produkty (+2-3 pkt)

**Problem:** llms.txt istnieje ale nie linkuje do kluczowych stron produktowych.
**Rozwiązanie:**
```
## Najpopularniejsze produkty
- [M3 UL20](https://www.takma.com.pl/produkt/m3-ul20): Wytrzymały terminal gun z klawiaturą 28/35/53, IP67, skaner SE4750/SE4850/SE5800, cena od 4920 PLN
- [M3 UL30](https://www.takma.com.pl/produkt/m3-ul30): Następca UL20 z AI NPU 12 TOPS, Wi-Fi 6E, Android 14-18
- [Zebra MC3400](https://www.takma.com.pl/produkt/zebra-mc3400): Terminal gun Zebra, 4" WVGA, IP65
```

---

## 9. Schema Recommendations

### Obecny schema (dobrze zaimplementowany)

| Schema Type | Status | Ocena |
|-------------|--------|-------|
| Product | ✅ z 34 wariantami Offer | Bardzo dobry |
| AggregateOffer | ✅ 4920-6800 PLN | OK |
| FAQPage | ✅ 11 Q&A | Bardzo dobry |
| BreadcrumbList | ✅ 4-level | OK |
| Organization | ✅ z credentials | Dobry |
| WebPage (speakable) | ✅ | Dobry |
| Brand (M3 Mobile) | ✅ | OK |

### Brakujący / rekomendowany schema

| Schema | Priorytet | Dlaczego |
|--------|-----------|----------|
| **Person** (autor) | Wysoki | AI systemy sprawdzają E-E-A-T; autor z credentials wzmacnia citability |
| **Review / AggregateRating** | Wysoki | Google AIO preferuje produkty z ocenami; ChatGPT cytuje ratings |
| **HowTo** (np. "Jak wybrać wariant UL20") | Średni | HowTo schema zwiększa szanse na AI Overview citation |
| **VideoObject** | Średni | Gdy pojawią się filmy — wideo ma najwyższą korelację z AI citations |
| **sameAs** w Organization | Średni | Linkowanie do LinkedIn, Google Business Profile — entity resolution |
| **ItemList** (warianty) | Niski | Lepsze parsowanie listy 34 SKU przez AI |

### Przykład Person schema do dodania:

```json
{
  "@type": "Person",
  "name": "Krzysztof Wójcik",
  "jobTitle": "Specjalista AutoID",
  "worksFor": {
    "@type": "Organization",
    "name": "TAKMA"
  },
  "sameAs": ["https://www.linkedin.com/in/krzysztof-wojcik-takma"]
}
```

### Rekomendacja sameAs dla Organization:

```json
"sameAs": [
  "https://pl.linkedin.com/company/takma-mobile-systems",
  "https://pl.linkedin.com/in/takma-tadeusz-tiuchty-b7078552",
  "https://aleo.com/int/company/takma-tadeusz-tiuchty",
  "https://www.yellowpages.pl/takma1/"
]
```

---

## 10. Content Reformatting Suggestions

### 10.1 Dodać "Quick Answer" block na górze strony

Pierwsze 40-60 słów powinno bezpośrednio odpowiadać na zapytanie "co to jest M3 UL20":

```html
<section class="quick-answer">
  <p><strong>M3 UL20</strong> to wytrzymały terminal magazynowy gun producenta M3 Mobile
  z fizyczną klawiaturą (28/35/53 klawisze), 5-calowym ekranem Full HD i certyfikatem IP67.
  Cena od 4 920 PLN netto. Dostępny w wersjach Wi-Fi (UL20W), Freezer do −30°C (UL20F)
  i 4G LTE (UL20X).</p>
</section>
```

### 10.2 Przeformatować FAQ na question-based H2

Zamiast generycznego "Najczęściej zadawane pytania" z nested Q&A, wyciągnąć kluczowe pytania jako H2/H3 headings bezpośrednio w treści:

**Obecnie:**
```
## Najczęściej zadawane pytania
  Q: Jakie warianty klawiatury...?
  Q: Czym różni się UL20W od UL20F...?
```

**Rekomendacja — dodać H2 w sekcji opisu:**
```
## Czym różni się UL20W od UL20F i UL20X?
[134-167 słów self-contained answer]

## Jaki skaner wybrać: SE4750, SE4850 czy SE5800?
[134-167 słów self-contained answer]

## Ile kosztuje M3 UL20 i od czego zależy cena?
[134-167 słów self-contained answer]
```

### 10.3 Rozbudować tabelę porównawczą

Tabela UL20 vs UL30 vs MC3400 vs SL20K jest doskonałym elementem citowalnym. Rekomendacja:
- Dodać kolumnę "Najlepszy do..." (use case recommendation)
- Dodać wiersz "TCO 5 lat" z szacunkowymi kosztami
- Dodać wiersz "Nasz werdykt" z krótkim podsumowaniem

### 10.4 Dodać sekcję "Kluczowe fakty" (key facts box)

```html
<aside class="key-facts">
  <h3>M3 UL20 — kluczowe fakty</h3>
  <ul>
    <li>Producent: M3 Mobile (Korea Południowa)</li>
    <li>34 konfiguracje (3 linie × klawiatury × skanery)</li>
    <li>Cena: 4 920 – 6 800 PLN netto</li>
    <li>Certyfikat: IP67 (kurz + zanurzenie 1m/30min)</li>
    <li>Upadek: 2.0 m na beton</li>
    <li>Bateria: 6700 mAh, hot-swap (wersja FX)</li>
    <li>Następca: M3 UL30 (2025, AI NPU, Wi-Fi 6E)</li>
    <li>Dystrybutor PL: TAKMA — partner M3 Mobile od 2001 r.</li>
  </ul>
</aside>
```

### 10.5 Dodać daty i autora widoczne na stronie

```html
<div class="article-meta">
  <span>Autor: Krzysztof Wójcik, specjalista AutoID w TAKMA</span>
  <span>Opublikowano: 15.01.2026</span>
  <span>Ostatnia aktualizacja: 29.03.2026</span>
</div>
```

---

## Podsumowanie priorytetów

| # | Zmiana | Wpływ | Trudność | Priorytet |
|---|--------|-------|----------|-----------|
| 1 | SSR/SSG zamiast CSR | +20-30 pkt | Średnia (zmiana Next.js config) | 🔴 CRITICAL |
| 2 | YouTube + Reddit presence | +10-15 pkt | Wysoka (tworzenie contentu) | 🟠 HIGH |
| 3 | Autor + daty na stronie | +5-8 pkt | Niska (HTML + schema) | 🟡 MEDIUM |
| 4 | Unikalne dane / case study | +5-7 pkt | Średnia (zbieranie danych) | 🟡 MEDIUM |
| 5 | Rozbudowa llms.txt | +2-3 pkt | Niska (edycja pliku) | 🟢 QUICK WIN |
| 6 | Question-based H2 headings | +3-5 pkt | Niska (reorganizacja treści) | 🟢 QUICK WIN |
| 7 | Key facts box | +2-3 pkt | Niska (dodanie HTML) | 🟢 QUICK WIN |
| 8 | Person + sameAs schema | +3-4 pkt | Niska (JSON-LD) | 🟢 QUICK WIN |
| 9 | AggregateRating schema | +3-5 pkt | Średnia (system recenzji) | 🟡 MEDIUM |
| 10 | Video content + VideoObject schema | +5-8 pkt | Wysoka (produkcja wideo) | 🟠 HIGH |

**Szacowany wynik po wdrożeniu wszystkich zmian: 85-92/100**

---

*Raport wygenerowany: 2026-03-29*
*Metodologia: GEO Analysis Framework (Ahrefs 2025, BrightEdge AI Search Study, llms.txt standard)*
