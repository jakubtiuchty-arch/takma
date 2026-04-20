# DIAGNOSTYKA: Brak widocznosci stron skanerów Zebra w Google TOP 30

**Data analizy:** 2 kwietnia 2026
**Domena:** takma.com.pl
**Problem:** Żadna strona produktowa skanera Zebra nie pojawia się w Google TOP 30

---

## 1. CZY STRONY SA W OGOLE ZAINDEKSOWANE?

### Odpowiedz: TAK, ale z KRYTYCZNYM problemem duplikacji

Google indeksuje strony skanerów TAKMA, ale w dwóch wersjach jednocześnie:

| Zapytanie | Zaindeksowane URL-e TAKMA |
|-----------|---------------------------|
| `"zebra ds2208" site:takma.com.pl` | `takma.com.pl/produkt/zebra-ds2208/` (stary WP, trailing slash, bez www) ORAZ `www.takma.com.pl/skanery-kodow-kreskowych-zebra` (nowy) |
| `"zebra ds4608" site:takma.com.pl` | `takma.com.pl/produkt/zebra-ds4608-dpe/` (stary WP) |
| `"zebra ds3678" site:takma.com.pl` | `takma.com.pl/produkt/zebra-ds3678-sr/` (stary WP) ORAZ `www.takma.com.pl/produkt/zebra-ds3678-hd` (nowy) ORAZ `takma.com.pl/produkt/zebra-ds3678-kd/` (stary WP, produkt NIE istniejący na nowej stronie!) |
| `"zebra ds8288" site:takma.com.pl` | Brak bezpośredniego wyniku dla produktu |
| `site:takma.com.pl skanery` | 10+ stron zaindeksowanych (kategorie + brand pages) |
| `site:takma.com.pl/produkt/` | Mieszanka starych WP URL-i (trailing slash, bez www) i nowych |

### KLUCZOWE ODKRYCIE: Google widzi DWIE wersje domeny

W wynikach Google jednocześnie pojawiają się:
- `https://takma.com.pl/produkt/zebra-ds2208/` (stary WordPress, BEZ www, Z trailing slash)
- `https://www.takma.com.pl/produkt/zebra-ds2208` (nowy Next.js, Z www, BEZ trailing slash)

To oznacza, że Google traktuje te adresy jako OSOBNE strony i dzieli między nie sygnały rankingowe (link equity split). Stare URL-e WP wciąż żyją w indeksie i konkurują z nowymi.

Dodatkowo: strona `takma.com.pl/produkt/zebra-ds3678-kd/` jest zaindeksowana, ale ten produkt NIE ISTNIEJE na nowej stronie -- nie ma go w `existingSlugs` w middleware, więc middleware go przepuszcza (bo zaczyna się od `zebra-`) i Next.js zwraca 404 lub fallback.

---

## 2. CO KONKRETNIE BLOKUJE WIDOCZNOSC?

### Problem nr 1: AUTORYTET DOMENY (DR ~10 vs konkurencja DR 30-70)

To jest **GLÓWNY** powód. Brutalna prawda:

| Konkurent | Est. DR | Domena od | Profil backlinków |
|-----------|---------|-----------|-------------------|
| zebra.com | 80+ | Producent | Tysiące domen, .gov, .edu |
| ceneo.pl | 85+ | 2005 | Aggregator cenowy, miliony linków |
| allegro.pl | 90+ | 1999 | Marketplace, miliony linków |
| zebrasklep.pl | ~30-40 | 2012 | 14 lat w indeksie, setki backlinków |
| bcmarket.pl | ~25-35 | 2013 | 13 lat w indeksie, specjalizacja |
| 4labels.pl | ~20-30 | Wieloletnia | Niszowy sklep, organiczne linki |
| **takma.com.pl** | **~10** | **2002 (ale nowa strona od ~2025)** | **Minimalny profil, ~15 domen linkujących** |

TAKMA ma domenę od 2002, ale nowa strona Next.js jest de facto NOWA w oczach Google. Stary WordPress miał jakiś autorytet, ale migracja (zmiana struktury URL, zmiana CMS) spowodowała reset rankingowy.

### Problem nr 2: KANIBALIZACJA WEWNĘTRZNA

TAKMA ma ZBYT WIELE stron targetujących te same frazy skanerowe:

- `/skanery-kodow-kreskowych` -- strona kategorii ogólnej
- `/skanery-kodow-kreskowych-zebra` -- brand category page
- `/skanery-kodow-kreskowych/przewodowe` -- podkategoria
- `/skanery-kodow-kreskowych/bezprzewodowe` -- podkategoria
- `/skanery-kodow-kreskowych/prezentacyjne` -- podkategoria
- `/skanery-kodow-kreskowych/pierscieniowe` -- podkategoria
- `/skanery-honeywell` -- brand category page
- `/produkt/zebra-ds2208` -- strona produktowa
- `/produkt/zebra-ds3678-sr` -- strona produktowa
- ... i ~20 innych stron produktowych skanerów

Każda z tych stron ma bogate treści (FAQ, definicje, porównania, tabele techniczne). Ale Google na tak młodej domenie widzi to jako THIN CONTENT FARM -- wiele stron o podobnej tematyce bez wystarczającego zewnętrznego potwierdzenia autorytetu.

### Problem nr 3: ZERO BACKLINKÓW do stron skanerów

Profil backlinków TAKMA:
- `lasy.gov.pl` -- 1 link (ale do domeny ogólnej, nie do skanerów)
- `laspolski.pl` -- linki edukacyjne (leśnictwo, nie skanery)
- `serwis-zebry.pl` -- cross-link (ta sama firma, Google to wie)
- Katalogi firmowe -- niska wartość

**ZERO backlinków do stron produktowych skanerów.** Zero do `/skanery-kodow-kreskowych-zebra`. Zero do `/produkt/zebra-ds2208`.

### Problem nr 4: Brak sygnałów użytkowników

- Brak obecności na Ceneo (zawieszony od 12.2024)
- Brak na Allegro
- Brak opinii/recenzji
- Minimalny ruch organiczny = Google nie ma danych CTR do nauki

### Problem nr 5: DUPLIKACJA URL (stary WP vs nowy Next.js)

Jak opisano wyżej -- Google indeksuje stare URL-e z trailing slash i bez www obok nowych. Redirecty w `next.config.mjs` obejmują tylko ZMIANY slugów (np. `ds2208-hc` -> `ds2208`), ale NIE obejmują:
- `takma.com.pl/produkt/zebra-ds2208/` (bez www, trailing slash) -> `www.takma.com.pl/produkt/zebra-ds2208`
- Stare WP warianty produktów, które nie istnieją na nowej stronie (np. `zebra-ds3678-kd`)

---

## 3. KTO RANKUJE I DLACZEGO?

### Fraza: "skaner kodów kreskowych zebra"

| Poz. | Strona | Dlaczego rankuje |
|------|--------|-----------------|
| 1 | zebra.com | Producent. DR 80+. Tysiące backlinków. Brand authority. |
| 2 | zebrasklep.pl | DR ~35. 14 lat w indeksie. Dedykowany sklep Zebra. Setki backlinków. Ceneo integracja. |
| 3 | bcmarket.pl | DR ~30. 13 lat. Specjalista czytniki. Opinie. Ceneo. |
| 4 | 4labels.pl | DR ~25. Wieloletni sklep AutoID. Backlinki branżowe. |
| 5 | ceneo.pl | DR 85. Aggregator. Miliony linków. |
| 6-10 | allegro.pl, strefadrukarek.pl, fiskalne.org | Marketplaces lub starzy gracze z backlinkami |

**TAKMA: NIE POJAWIA SIĘ w TOP 30.**

### Fraza: "zebra ds2208 cena"

| Poz. | Strona | Dlaczego |
|------|--------|----------|
| 1 | ceneo.pl | Aggregator cenowy, porównywarka |
| 2 | zebrasklep.pl | Dedykowany sklep Zebra, DR ~35, opinie |
| 3 | sklep.elmatech.pl | Stary gracz, backlinki |
| 4 | bcmarket.pl | Specjalista czytniki |
| 5 | ganeo.pl | Sklep AutoID, lata w indeksie |

**TAKMA: NIE POJAWIA SIĘ.**

### Fraza: "skaner bezprzewodowy zebra"

TOP 5: fiskalne.org, zebra.com, strefadrukarek.pl, ceneo.pl, bcmarket.pl
**TAKMA: NIE POJAWIA SIĘ.**

### Fraza: "skaner przemysłowy zebra ds3678"

TOP 5: dsgcentrum.pl, interlabel.pl, kasy-fiskalne.elblag.pl, scanter.pl, gento.pl
**TAKMA: NIE POJAWIA SIĘ.**

### Wspólny mianownik konkurentów:
1. **DR 25-85** -- wielokrotnie wyższy niż TAKMA (~10)
2. **Lata w indeksie** -- stabilne URL-e od 5-15 lat
3. **Ceneo/Allegro** -- obecność na porównywarkach generuje ruch i backlinki
4. **Backlinki branżowe** -- linki z forów, blogów, porównywarek
5. **Sygnały transakcyjne** -- opinie, zamówienia, CTR

---

## 4. CO TAKMA MUSI ZROBIĆ ŻEBY WEJŚĆ DO TOP 30?

### A. NAPRAWY KRYTYCZNE (natychmiast, tydzień 1)

1. **Wymuszenie www + brak trailing slash** -- w middleware/next.config dodać redirect:
   - `takma.com.pl/*` -> `www.takma.com.pl/*` (301)
   - `*/trailing-slash/` -> `*/trailing-slash` (301)
   - To musi obsłużyć Vercel (headers/redirects na poziomie platformy) lub middleware

2. **Wyczyścić stare WP URL-e z indeksu Google:**
   - W Google Search Console: URL Inspection -> Request Removal dla starych URL-i
   - Dodać redirect `zebra-ds3678-kd` -> `zebra-ds3678-hp` (lub inny wariant)
   - Upewnić się, że KAŻDY stary WP slug albo redirectuje 301, albo zwraca 410

3. **Przywrócić Ceneo** -- to jednorazowa czynność, która generuje:
   - Backlinki z Ceneo (DR 85+)
   - Ruch porównywarkowy
   - Sygnały cenowe dla Google

### B. BUDOWA AUTORYTETU (tygodnie 1-12)

4. **Link building -- minimum 5-10 backlinków miesięcznie do stron skanerów:**
   - Guest posty na blogach logistycznych/magazynowych
   - Artykuły eksperckie Tadeusza na branżowych portalach
   - Linki z `serwis-zebry.pl` do konkretnych produktów (nie tylko do domeny)
   - Profil na Allegro z linkami
   - Wpisy w katalogach branżowych (logistyka, retail, AutoID)
   - Artykuły na LinkedIn z linkami

5. **Reaktywować Ceneo z pełną ofertą skanerów** -- ceny, opisy, zdjęcia

6. **Allegro -- wystawić przynajmniej 5-10 najpopularniejszych skanerów** -- to generuje entity recognition w Google

### C. CONTENT STRATEGY (tygodnie 2-8)

7. **Skonsolidować treści** -- zamiast 6 podstron skanerów, zbudować jedną MEGA-stronę `/skanery-kodow-kreskowych-zebra` z anchor linkami do sekcji. Podstrony powinny celować w INNE frazy (long-tail), nie te same.

8. **Dodać unikalne treści, których nie ma konkurencja:**
   - Video unboxing/review skanerów (YouTube + embed)
   - Realne zdjęcia skanerów w użyciu (nie stockowe)
   - Case study: "Jak wdrożyliśmy 200 skanerów DS3678 w centrum logistycznym"
   - Porównywarki: DS2208 vs Honeywell Voyager vs Newland HR23

9. **Blog/poradnik targetujący frazy informacyjne:**
   - "Jak wybrać skaner kodów kreskowych do magazynu 2026"
   - "Zebra DS2208 vs DS4608 -- który wybrać?"
   - "Skaner przewodowy czy bezprzewodowy -- porównanie kosztów"

### D. TECHNICAL SEO (tydzień 1-2)

10. **Sprawdzić w Google Search Console:**
    - Coverage report -- ile stron zaindeksowanych, ile excluded
    - Crawl stats -- czy Googlebot crawluje strony produktowe
    - Manual actions -- czy nie ma kary
    - Core Web Vitals -- czy strony produktowe przechodzą

11. **Sitemap -- dodać `priority` i `changefreq`** do stron produktowych skanerów (wyższa niż akcesoria)

12. **Internal linking -- dodać więcej deep links:**
    - Z poradników do konkretnych produktów
    - Z każdej strony produktowej do 3-4 powiązanych
    - Ze strony głównej do top 5 skanerów

---

## 5. REALISTYCZNY TIMELINE

### Miesiąc 1-2 (kwiecień-maj 2026):
- Naprawy techniczne (duplikacja URL, redirecty, Ceneo)
- Wynik: strony wchodzą do indeksu jako JEDYNA wersja, nie duplikat
- **Oczekiwany ranking: TOP 50-100 dla fraz produktowych**

### Miesiąc 3-4 (czerwiec-lipiec 2026):
- Efekty link buildingu zaczynają działać
- Ceneo generuje pierwsze backlinki i sygnały cenowe
- **Oczekiwany ranking: TOP 30-50 dla fraz long-tail** ("zebra ds3678-hd cena", "skaner zebra bezprzewodowy przemysłowy")

### Miesiąc 5-8 (sierpień-listopad 2026):
- DR rośnie do ~20-25
- Google zaczyna ufać domenie
- **Oczekiwany ranking: TOP 20-30 dla fraz mid-tail** ("skaner kodów zebra", "czytnik zebra cena")

### Miesiąc 9-12 (grudzień 2026 - marzec 2027):
- **Oczekiwany ranking: TOP 10-20 dla głównych fraz** (jeśli link building jest konsekwentny)
- TOP 10 dla fraz long-tail

### REALISTYCZNIE: TOP 10 dla fraz głównych ("skaner kodów kreskowych zebra") -- **12-18 miesięcy minimum**

Dlaczego tak długo? Bo:
- zebrasklep.pl ma 14 lat przewagi w indeksie
- bcmarket.pl ma 13 lat
- TAKMA startuje de facto od zera (nowy CMS, nowe URL-e, prawie zerowy profil backlinków)
- Google March 2026 Core Update prawdopodobnie premiuje stabilne, stare domeny

---

## 6. CZY JEST COŚ KRYTYCZNIE ZLEGO TECHNICZNIE?

### TAK -- 3 problemy krytyczne:

#### A. DUPLIKACJA URL (KRYTYCZNE)
Google indeksuje jednocześnie `takma.com.pl/produkt/zebra-ds2208/` i `www.takma.com.pl/produkt/zebra-ds2208`. To DZIELI link equity na pół i powoduje confusion w indeksie.

**Rozwiązanie:** Wymuszenie canonical na poziomie serwera (Vercel) + redirect 301 z non-www na www + strip trailing slash.

#### B. STARE WP GHOST PAGES (KRYTYCZNE)
Stare URL-e WordPress (np. `zebra-ds3678-kd`, `czytnik-kodow-kreskowych-zebra-ds8178`) są wciąż w indeksie Google. Middleware ich przepuszcza (bo zaczynają się od `zebra-`), a Next.js albo zwraca 200 z fallback, albo soft 404.

**Rozwiązanie:** Dodać KAŻDY stary WP slug skanera do explicit redirectów w `next.config.mjs` albo zwracać 410 Gone.

#### C. BRAK SYGNAŁU WWW PREFERENCE (WYSOKIE)
robots.txt wskazuje sitemap na `www.takma.com.pl`, canonical-e w HTML wskazują `www.takma.com.pl`, ale brak wymuszonego redirectu z `takma.com.pl` na `www.takma.com.pl`. Google crawluje obie wersje.

**Rozwiązanie:** Vercel redirect rule: `takma.com.pl` -> `www.takma.com.pl` (301).

### Co NIE jest problemem:
- robots.txt -- OK, nie blokuje `/produkt/` ani skanerów
- Sitemap -- OK, 1041 URL-i, skanery są obecne z aktualnymi datami
- Schema -- OK, bardzo bogate (Product, FAQPage, BreadcrumbList, CollectionPage, Organization, WebPage, AggregateOffer)
- Treści produktowe -- OK, ~3000 słów na stronę, FAQ, porównania, TCO
- Internal linking -- OK, 39 linków ze strony kategorii do produktów, 20 z brand category page
- Meta tagi -- OK, canonical self-referencing, brak noindex/nofollow
- Redirecty WP -> Next.js -- w większości OK (obsługiwane przez next.config + middleware)

---

## PODSUMOWANIE

**Główny problem to NIE technika, a AUTORYTET.** TAKMA ma świetną stronę technicznie (schema, treści, internal linking), ale Google jej nie ufa, bo:

1. Domena ma de facto ~6 miesięcy w nowej formie (reset po migracji z WP)
2. DR ~10 vs konkurencja DR 30-80
3. Zero backlinków do stron skanerów
4. Brak sygnałów transakcyjnych (Ceneo, Allegro, opinie)
5. Duplikacja URL zmniejsza i tak nikły autorytet o połowę

**Priorytety:**
1. FIX: Wymuszenie www + strip trailing slash (dzień 1)
2. FIX: Oczyszczenie starych WP URL-i z indeksu (tydzień 1)
3. FIX: Reaktywacja Ceneo (tydzień 1)
4. BUILD: Link building 5-10 linków/miesiąc (ongoing)
5. BUILD: Obecność na Allegro (tydzień 2)
6. CONTENT: Poradniki porównawcze + case study (tydzień 3-8)

Bez link buildingu i Ceneo, nawet najlepsza technika nie wejdzie do TOP 30. To jest gra o autorytet, a TAKMA startuje z prawie zerowym kontem.
