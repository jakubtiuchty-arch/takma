# AUDYT SEO / AEO / GEO — Wpis porównawczy M3 Mobile SM24 vs SM25

**URL:** `https://www.takma.com.pl/poradnik/m3-mobile-sm24-sm25-porownanie`
**Data audytu:** 2026-03-23
**Typ strony:** Poradnik / wpis blogowy (porównanie techniczne)
**Audytor:** Claude (na zlecenie TAKMA)

---

## WYNIK OGÓLNY: 74 / 100

| Kategoria | Waga | Wynik | Maks. |
|---|---|---|---|
| On-page SEO (meta, title, URL, nagłówki) | 25% | 16 | 25 |
| Content & E-E-A-T | 25% | 22 | 25 |
| Schema / Structured Data | 15% | 9 | 15 |
| AEO (Answer Engine Optimization) | 15% | 13 | 15 |
| GEO (Generative Engine Optimization) | 10% | 8 | 10 |
| Keyword Coverage & Internal Linking | 10% | 6 | 10 |

---

## 1. ON-PAGE SEO — 16/25

### Title tag — 5/10

**Live:** `M3 Mobile SM24 vs SM25 — porównanie nowych terminali mobilnych 2026 | TAKMA | TAKMA`

| Problem | Priorytet |
|---|---|
| **Podwójny sufiks „\| TAKMA \| TAKMA"** — duplikat. Prawdopodobnie `seoTitle` w `guides.ts` już zawiera „\| TAKMA", a szablon Next.js dokłada drugi. | **P1** |
| Długość 89 znaków (z duplikatem) — obcięcie w SERP po ~60 znaków. Po usunięciu duplikatu: ~77 znaków — wciąż za długo. | P2 |

**Rekomendacja:**
- Usunąć duplikat „\| TAKMA" z `seoTitle` w `guides.ts` (lub z szablonu `<Head>`).
- Skrócić title do ~60 znaków: `M3 Mobile SM24 vs SM25 — porównanie terminali 2026 | TAKMA` (59 znaków).

### Meta description — 4/10

**Live:** `M3 Mobile SM24 i SM25 — nowa seria terminali mobilnych z Android 16, IP67, Wi-Fi 6E i baterią hot-swap. SM25 z 5G i dual scanner SE5500, SM24 z niższym TCO. Porównanie specyfikacji, zastosowań i kosztów. Terminal mobilny M3 Mobile SM24, SM25 M3 Mobile, M3 Mobile SM24 cena, M3 Mobile SM25 cena. Doradztwo TAKMA.`

| Problem | Priorytet |
|---|---|
| **Keyword stuffing na końcu** — „Terminal mobilny M3 Mobile SM24, SM25 M3 Mobile, M3 Mobile SM24 cena, M3 Mobile SM25 cena" to oczywista lista fraz, nie zdanie. Google może: (a) zignorować meta description i wygenerować własny snippet, (b) w skrajnym przypadku uznać za spam. | **P1** |
| Długość ~340 znaków — Google wyświetla ~155-160. Cała „naturalna" część (do „kosztów.") ma ~210 znaków — też za dużo. | P2 |

**Rekomendacja:**
- Usunąć doklejoną listę fraz — cały fragment od „Terminal mobilny M3 Mobile SM24" do końca.
- Skrócić do ~155 znaków: `M3 Mobile SM24 i SM25 — nowa seria terminali z Android 16, IP67, Wi-Fi 6E. SM25 z 5G i dual scanner, SM24 z niższym TCO. Porównanie i doradztwo TAKMA.` (161 znaków).

### URL — 10/10

`/poradnik/m3-mobile-sm24-sm25-porownanie` — krótki, czytelny, z target keyword. Bez parametrów, bez numerów. Idealny.

### Nagłówek H1 — 8/10

`M3 Mobile SM24 vs SM25 — porównanie nowych terminali mobilnych 2026`

Zawiera target keyword, jest unikatowy. Drobny minus: nie zawiera słowa „test" ani „recenzja" — ale to porównanie, więc to prawidłowy intent.

### Canonical — 10/10

`https://www.takma.com.pl/poradnik/m3-mobile-sm24-sm25-porownanie` — poprawny, self-referencing.

### Open Graph — 3/10

| Tag | Wartość | Status |
|---|---|---|
| og:title | `...porównanie nowych terminali mobilnych 2026 \| TAKMA` | OK (bez duplikatu) |
| og:description | Taka sama jak meta description | Keyword stuffing (P1) |
| og:image | **null** | **BRAK — P1** |
| og:type | brak | Brak (powinno być `article`) |

**Brak og:image** oznacza: na Facebooku, LinkedIn, Slacku, Teamsach — wpis wyświetli się bez miniaturki. To dramatycznie obniża CTR przy udostępnianiu.

**Rekomendacja:**
- Dodać og:image (1200×630 px) — grafika hero SM24/SM25 obok siebie.
- Dodać og:type = `article`.

---

## 2. CONTENT & E-E-A-T — 22/25

### Struktura treści — 9/10

Wpis ma solidną, logiczną strukturę:

| Element | Wartość |
|---|---|
| Sekcje H2 | 8 (content) + „Spis treści" + elementy UI |
| Sekcje H3 | 16 |
| Tabele porównawcze | 2 (SM24 vs SM25 szczegółowa + 5 modeli konkurencja) |
| Sticky TOC | Tak (sidebar lewy) |
| Word count (schema) | 2 144 słów |
| FAQ accordion | 7 pytań, działający rozwijany |

Bardzo dobra hierarchia nagłówków. H2 prowadzą czytelnika od ogólnego porównania → scenariusze → konkurencja → specyfikacja → zakup → FAQ.

### E-E-A-T sygnały — 9/10

| Sygnał | Status |
|---|---|
| Autor z imieniem i nazwiskiem | ✅ Jakub Tiuchty |
| Rola / credentials | ✅ „Specjalista AutoID w TAKMA \| 25 lat doświadczenia w AutoID" |
| Data publikacji | ✅ 2026-03-23 |
| Źródła danych (specyfikacje producenta) | ✅ Odwołania do specyfikacji M3 Mobile |
| Uczciwe porównanie z konkurencją | ✅ Sekcja „Kiedy SM24/SM25, kiedy Zebra" — przyznaje wyższość Zebra w wsparciu Android |
| CTA z kontaktem | ✅ Telefon + formularz + e-mail |
| Author schema (Person) | ✅ W TechArticle |

Jedyny brak: author box nie ma zdjęcia autora ani linku do profilu (np. LinkedIn). To drobny minus E-E-A-T.

### Multimedia — 4/5 → **2/5**

| Element | Status |
|---|---|
| Obrazy w treści artykułu | ❌ **ZERO** — brak jakichkolwiek grafik, zdjęć produktów, infografik |
| Hero image | ❌ Brak |
| Tabele | ✅ 2 responsywne tabele porównawcze |
| Infografika drzewo decyzyjne | ❌ Brak (była w planie) |

**Wpis jest w 100% tekstowy** (poza tabelami HTML). Dla artykułu technicznego o urządzeniach fizycznych to poważny brak — czytelnik chce zobaczyć te terminale. Google Images nie zaindeksuje niczego.

**Rekomendacja (P1):**
- Dodać hero image: SM24 i SM25 obok siebie (zdjęcie z katalogów M3 Mobile).
- Dodać min. 2-3 zdjęcia w treści (front/back urządzeń, skaner, w kontekście magazynu).
- Dodać infografikę drzewa decyzyjnego (SM25 vs SM24).
- Każdy `<img>` z deskryptywnym `alt` zawierającym keyword.

---

## 3. SCHEMA / STRUCTURED DATA — 9/15

### Obecne schematy

| Schema | Status | Uwagi |
|---|---|---|
| TechArticle | ✅ | headline, author (Person), publisher, datePublished, dateModified, wordCount |
| FAQPage | ✅ | 7 pytań z odpowiedziami |
| BreadcrumbList | ✅ | 3 poziomy: Strona główna → Poradniki → SM24 vs SM25 |
| Organization | ⚠️ **×2** | Duplikat — systemowy bug |
| WebSite | ⚠️ **×2** | Duplikat — systemowy bug |

### Problemy

| Problem | Priorytet |
|---|---|
| **TechArticle.image = brak / null** — Google wymaga `image` do wyświetlenia w Top Stories i Discover. Bez image schema jest niekompletna. | **P1** |
| **Duplikat Organization ×2 i WebSite ×2** — 4 nadmiarowe bloki JSON-LD. Nie powoduje kary, ale zaśmieca i może mylić parsery. | P2 (systemowy) |
| **Brak og:type** — powiązane z OG, ale warto ustawić `article` | P3 |
| **Brak Article.articleSection** — TechArticle nie ma `articleSection` (np. „Poradniki" / „Terminale mobilne") | P3 |

**Rekomendacja:**
- Dodać `image` do TechArticle schema (URL grafiki hero, min. 1200px szerokości).
- Naprawić duplikację Organization/WebSite — wystarczy po 1 instancji na stronę (fix w szablonie `_app.tsx` lub `layout.tsx`).

---

## 4. AEO (ANSWER ENGINE OPTIMIZATION) — 13/15

### FAQ — 10/10

7 pytań pokrywających kluczowe intenty wyszukiwania:

1. „Czym różni się M3 Mobile SM24 od SM25?" — idealne na featured snippet
2. „Czy SM24 i SM25 mają ten sam form factor?" — pytanie porównawcze
3. „SM24/SM25 vs Zebra TC53 — co wybrać?" — intent porównawczy z konkurencją
4. „Czy SM24/SM25 działają w mroźni?" — intent funkcjonalny
5. „Jakie systemy WMS/ERP działają z SM24/SM25?" — kompatybilność
6. „Ile kosztuje M3 Mobile SM24 / SM25?" — intent transakcyjny
7. „Czy TAKMA serwisuje terminale M3 Mobile?" — intent serwisowy

Odpowiedzi mają 280-500 znaków — idealna długość na snippet. FAQPage schema poprawna.

**Drobny minus:** brak pytania typu „Jaki Android mają SM24/SM25?" lub „Jak długo M3 Mobile wspiera SM24/SM25?" — te pytania pojawiają się w kontekście „ile lat wsparcia" vs Zebra.

### Snippet-readiness — 3/5

- Tabele porównawcze → mogą generować Table Snippet ✅
- Pierwszy akapit pod H2 → zwięzłe podsumowania ✅
- Brak list z bullet points w treści → Google nie wyciągnie listy jako snippet ⚠️ (sekcje „Dla kogo SM25 / SM24" mogłyby mieć `<ul>` zamiast samych paragrafów)

---

## 5. GEO (GENERATIVE ENGINE OPTIMIZATION) — 8/10

### AI Citability — 8/10

| Czynnik | Ocena |
|---|---|
| Unikalne dane liczbowe (wymiary, waga, bateria, temperatury) | ✅ Obfite |
| Porównania head-to-head z konkretnymi wartościami | ✅ 2 tabele |
| Jednoznaczne rekomendacje kontekstowe | ✅ „SM25 wybierz, gdy..." / „SM24 wybierz, gdy..." |
| Uczciwy głos (przyznaje słabości) | ✅ „Zebra wygrywa 10-letnim wsparciem..." |
| Data freshness | ✅ Publikacja 2026-03-23, produkty 2025-2026 |
| Nazwany ekspert | ✅ Jakub Tiuchty, 25 lat doświadczenia |
| Źródła specyfikacji | ✅ Odwołania do rev. M3 Mobile |

Wpis jest doskonale przygotowany pod cytowanie przez AI — zawiera konkretne liczby, kontekstowe porównania i jednoznaczne rekomendacje z warunkami.

**Minus:** Brak linków zewnętrznych do źródeł (np. strona M3 Mobile, specyfikacja producenta). AI modele cenią treści, które odwołują się do oryginalnych źródeł z linkami.

---

## 6. KEYWORD COVERAGE & INTERNAL LINKING — 6/10

### Keyword coverage — 5/5

| Fraza | Obecność w treści |
|---|---|
| m3 mobile sm25 | ✅ Wielokrotnie |
| m3 mobile sm24 | ✅ Wielokrotnie |
| m3 mobile sm24 vs sm25 | ✅ H1 + treść |
| terminal mobilny android 2026 | ✅ Lead + treść |
| komputer mobilny 5g przemysłowy | ⚠️ Częściowo (5G tak, „komputer mobilny" — rzadziej) |
| terminal mobilny magazyn ip67 | ✅ Treść |
| m3 mobile terminal cena | ✅ FAQ + sekcja zamówień |
| alternatywa zebra tc53 | ✅ Dedykowana sekcja + FAQ |

### Internal linking — 1/5

| Problem | Priorytet |
|---|---|
| **115 internal links na stronie** — ale większość to nawigacja (menu, footer, TOC). W treści artykułu linki do produktów (Zebra TC53, TC58, CT47, kontakt) są obecne. | OK |
| **Brak linków wychodzących (external)** — zero linków do stron zewnętrznych. Dla artykułu eksperckiego to nienaturalne. Brak linka do m3mobile.com, strony producenta, specyfikacji źródłowej. | **P2** |
| **Brak linka z istniejącego poradnika** — poradnik „Jak wybrać terminal mobilny" (sekcja „M3 Mobile — król retail") nie linkuje jeszcze do tego wpisu. | **P2** |
| **Brak rel="nofollow" na linkach afiliacyjnych (jeśli dotyczy)** | N/A |

**Rekomendacja:**
- Dodać 2-3 linki external: m3mobile.com (strona producenta), specyfikacja SM24/SM25 (jeśli publiczna).
- Zaktualizować poradnik „Jak wybrać terminal mobilny" o wzmiankę SM24/SM25 z linkiem do tego wpisu.

---

## PODSUMOWANIE PRIORYTETÓW

### P1 — Krytyczne (wpływ na CTR, indeksację, wyświetlanie)

| # | Problem | Gdzie naprawić |
|---|---|---|
| 1 | **Podwójny „\| TAKMA \| TAKMA" w title** | `guides.ts` → `seoTitle` (usunąć „\| TAKMA") LUB szablon `<Head>` |
| 2 | **Keyword stuffing w meta description** | `guides.ts` → `seoDescription` — usunąć fragment od „Terminal mobilny M3 Mobile SM24" |
| 3 | **Brak og:image** (= brak miniaturki w social media) | Szablon guideʼów lub `guides.ts` — dodać URL grafiki |
| 4 | **Brak TechArticle.image w schema** | `guides.ts` lub generator schema — dodać image URL |
| 5 | **Brak jakichkolwiek obrazów w treści** (0 zdjęć produktu) | Dodać hero + min. 2-3 zdjęcia w sekcjach |

### P2 — Ważne (poprawa rankingu i UX)

| # | Problem | Gdzie naprawić |
|---|---|---|
| 6 | Duplikat Organization ×2 i WebSite ×2 | Szablon globalny (systemowy — dotyczy wszystkich stron) |
| 7 | Title za długi (~77 znaków po deduplikacji) | `guides.ts` → skrócić `seoTitle` |
| 8 | Brak linków zewnętrznych | Dodać linki do m3mobile.com w treści |
| 9 | Brak linka z poradnika „Jak wybrać terminal mobilny" | Zaktualizować istniejący wpis o wzmiankę SM24/SM25 |

### P3 — Nice to have

| # | Problem |
|---|---|
| 10 | Brak og:type = `article` |
| 11 | Brak articleSection w TechArticle schema |
| 12 | Author box bez zdjęcia i linku do profilu |
| 13 | Sekcje „Dla kogo SM24/SM25" — zamienić paragrafy na `<ul>` dla lepszego snippet |
| 14 | Dodać 1 dodatkowe FAQ: „Jak długo M3 Mobile wspiera SM24/SM25 aktualizacjami?" |

---

## CO JEST DOBRZE ZROBIONE

Warto podkreślić mocne strony tego wpisu — jest ich więcej niż problemów:

1. **Unikatowa treść w polskim internecie** — SERP dla „M3 Mobile SM24" / „SM25" zwraca zero polskojęzycznych wyników. Ten wpis ma szansę na pozycję #1 bez konkurencji.
2. **Tabele porównawcze** — 2 szczegółowe tabele (SM24 vs SM25 + 5-model competition matrix) — idealne pod table snippets.
3. **Uczciwy ton ekspercki** — sekcja „Kiedy SM24/SM25, kiedy Zebra" uczciwie przyznaje, gdzie konkurencja wygrywa. To buduje zaufanie (E-E-A-T) i jest cenne dla AI (GEO).
4. **Drzewo decyzyjne** — jasne scenariusze „wybierz SM25 gdy... / wybierz SM24 gdy..." — czytelnik dostaje konkretną odpowiedź.
5. **FAQ z FAQPage schema** — 7 trafnych pytań pokrywających różne intenty. Odpowiedzi o dobrej długości (280-500 znaków).
6. **BreadcrumbList schema** — 3 poziomy, poprawna hierarchia.
7. **TechArticle z autorem** — Person + Publisher + daty + wordCount.
8. **Sticky TOC** — ułatwia nawigację w długim wpisie.
9. **CTA** — sekcja „Potrzebujesz pomocy w wyborze?" z dwoma przyciskami + dane kontaktowe w treści.
10. **Author box** — Jakub Tiuchty z credentialsami (25 lat w AutoID).

---

## SZACOWANY WPŁYW PO NAPRAWACH

| Stan | Wynik |
|---|---|
| Obecny | **74/100** |
| Po naprawach P1 (title, meta, images, schema) | **~87/100** |
| Po naprawach P1 + P2 | **~92/100** |

Kluczowy blocker to **brak grafik** — wpis jest w 100% tekstowy. Dodanie hero image + 2-3 zdjęć produktów + infografiki drzewa decyzyjnego podniesie jednocześnie: Content score, Schema score (image w TechArticle), OG score (og:image), i szanse na Google Images traffic.

---

*Audyt przeprowadzony na żywej stronie 2026-03-23. Dane meta i schema wyekstrahowane z DOM.*
