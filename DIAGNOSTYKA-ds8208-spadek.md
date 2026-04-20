# Diagnostyka spadku pozycji — Zebra DS8208

**Data analizy:** 2026-04-02  
**Strona:** https://www.takma.com.pl/produkt/zebra-ds8208  
**Problem:** Spadek z pozycji 2 (strona 1) poza stronę 3 w Google

---

## 1. Co dziala poprawnie

### Strona technicznie sprawna
- **Status HTTP:** 200 OK — strona laduje sie poprawnie
- **Rendering:** SSR (Server-Side Rendering) przez Next.js — pelna tresc dostepna dla Googlebota
- **Canonical URL:** Prawidlowy — `https://www.takma.com.pl/produkt/zebra-ds8208`
- **Brak noindex/nofollow** — strona jest w pelni indeksowalna
- **Brak redirectow** — strona serwowana bezposrednio, bez lancucha przekierowan

### SEO on-page
- **Title tag:** `Skaner kodow Zebra DS8208 — 2 MP PRZM, EAS, zasieg 70 cm | od 1 027 zl` — dobry, zawiera keyword + cene + USP
- **Meta description:** Pelna, 170 znakow, zawiera kluczowe frazy i cene
- **Open Graph:** Obecne (typ, cena, obraz, URL)
- **Schema JSON-LD Product:** Kompletna — nazwa, SKU, 3 warianty z cenami (1027-1131 PLN), InStock, NewCondition, gwarancja 60 mies.

### Dane produktu w kodzie
- Produkt istnieje w `src/data/products.ts` (linia 15430)
- `availability: 'available'` — poprawny status
- 3 warianty z cenami (1027, 1085, 1131 PLN) — wszystkie `available`
- 7 pytan FAQ — bogate, unikalne tresci
- 17 specyfikacji technicznych
- 4 obrazy z opisami alt
- Kompletny, dlugi opis (ok. 1500 znakow)
- Slug `zebra-ds8208` jest na liscie `existingSlugs` w middleware.ts (linia 203) — nie jest przekierowywany

### robots.txt
- Sciezka `/produkt/` NIE jest blokowana
- Googlebot ma pelny dostep
- Sitemap zadeklarowany prawidlowo

### Sitemap
- URL `/produkt/zebra-ds8208` jest obecny w sitemap.xml
- lastmod: `2026-02-26T00:00:00.000Z` (data `createdAt`)

---

## 2. Zidentyfikowane problemy

### KRYTYCZNY: Google March 2026 Core Update

**To jest najbardziej prawdopodobna przyczyna spadku.**

- **27 marca 2026** — Google rozpoczal rollout March 2026 Core Update
- **24-25 marca 2026** — March 2026 Spam Update (zakonczony w < 20 godzin)
- Narzedzia SEO zaraportowaly **najwyzsza zmiennosc SERP w 2026 roku**
- Rollout trwa do **ok. polowy kwietnia 2026** (szacowane 2 tygodnie)
- **Jestesmy w srodku rolloutu** — pozycje moga sie jeszcze zmieniac

### WAZNY: Strona DS8208 nie pojawia sie w wynikach `site:takma.com.pl`

Zapytanie `site:takma.com.pl zebra ds8208` **nie zwraca strony produktu DS8208 bezposrednio**. Zamiast tego Google pokazuje:
- Strone kategorii `/skanery-kodow-kreskowych`
- Strone DS8108 (inny model!)
- Strone kategorii `/skanery-kodow-kreskowych-zebra`
- Strone DS2208
- Stare URLe WordPress (np. `takma.com.pl/produkt/czytnik-kodow-kreskowych-zebra-ds8178/`)

**To sugeruje, ze Google moze miec problem z indeksowaniem nowej strony DS8208** lub preferuje stare URLe.

### WAZNY: Stare URLe WordPress wciaz w indeksie Google

Wyniki `site:takma.com.pl` pokazuja stare URLe WordPress:
- `takma.com.pl/produkt/zebra-ds8108/` (z ukosnikiem na koncu)
- `takma.com.pl/produkt/czytnik-kodow-kreskowych-zebra-ds8178/`
- `takma.com.pl/produkt/stacja-standardowa-zebra-ds8178-hc/`

Te stare strony moga powodowac **kanibalizacje tresci** — Google moze nie wiedziec, ktora strona jest "glowna" dla zapytania "zebra ds8208".

### SREDNI: Brak `updatedAt` — nieaktualna data w sitemap

Produkt DS8208 ma tylko `createdAt: '2026-02-26'` i **brak pola `updatedAt`**. W sitemap.ts lastmod bierze sie z:
```
lastModified: new Date(product.updatedAt || product.createdAt)
```
Czyli sitemap pokazuje date **26 lutego 2026** — ponad miesiac temu. Google moze interpretowac to jako stale, nieaktualizowane tresci.

### SREDNI: Brak `sameAs` (link do strony producenta)

Produkt DS8208 nie ma pola `sameAs` w danych. Inne produkty (np. ZD421) maja link do zebra.com. Brak `sameAs` w schema JSON-LD to utracony sygnal E-E-A-T.

### NISKI: `isNew: true` moze byc mylace

Produkt ma `isNew: true` ustawione od 26 lutego. Po ponad miesiacu flaga "nowy" traci sens i moze wplywac na postrzeganie aktualnosci tresci przez Google (jesli uzyto w schema).

### NISKI: og:type = 'article' zamiast 'product'

W metadanych OG typ jest ustawiony na `article` (linia 85 page.tsx) zamiast `product`. To nie wplywa bezposrednio na ranking, ale jest nieoptymalne.

---

## 3. Czynniki zewnetrzne

### Google March 2026 Core Update (KRYTYCZNY)

- Rollout: 27 marca — ok. 10 kwietnia 2026
- **Jestesmy w 7. dniu rolloutu** — za wczesnie na ostateczne wnioski
- Google radzi: "poczekaj co najmniej tydzien po zakonczeniu rolloutu, zanim zaczniesz analizowac wyniki w Search Console"
- Historycznie, odzyskanie pozycji po core update czesto nastepuje dopiero przy **nastepnym** core update

### Konkurencja

Wyniki wyszukiwania dla "zebra ds8208" zdominowane sa przez:
1. **zebra.com** — oficjalna strona producenta (pozycja 1)
2. **barcodefactory.com** — US reseller
3. Inne zagraniczne resellery (touchwindow.com, barcodesinc.com, barcodediscount.com)

**Takma.com.pl nie pojawia sie w top 10** dla zapytania "zebra ds8208" — ani globalnie, ani dla polskich wynikow w tym wyszukiwaniu.

Dla zapytan polskojezycznych ("zebra ds8208 skaner", "zebra ds8208 cena") — wyniki rowniez zdominowane przez zagraniczne strony. **Brak polskojezycznych konkurentow w top 10** (gento.pl, bcmarket itp. nie pojawiaja sie).

**Wniosek:** Core update mogl obnizyc cala kategorie polskich reselerow skanerkow na rzecz globalnych stron.

---

## 4. Rekomendowane dzialania

### Priorytet 1 — PILNE (do wykonania natychmiast)

#### 1a. Dodac `updatedAt` do produktu DS8208
```typescript
// src/data/products.ts, linia ~15556
createdAt: '2026-02-26',
updatedAt: '2026-04-02',  // <-- DODAC
```
To zmieni lastmod w sitemap z 26.02 na dzisiejsza date.

#### 1b. Dodac `sameAs` do produktu DS8208
```typescript
// po linii slug: 'zebra-ds8208',
sameAs: 'https://www.zebra.com/us/en/products/scanners/general-purpose-handheld-scanners/ds82-series/ds8208.html',
```

#### 1c. Zmienic `isNew: true` na `false`
Produkt jest w ofercie od ponad miesiaca — nie jest juz "nowy".

### Priorytet 2 — WAZNE (w ciagu 2-3 dni)

#### 2a. Zmienic og:type z 'article' na 'product'
W `src/app/produkt/[slug]/page.tsx`, linia 85:
```typescript
type: 'product',  // zamiast 'article'
```

#### 2b. Zweryfikowac stare URLe WordPress w Google Search Console
Sprawdzic w GSC:
- Czy stare URLe (np. `/produkt/czytnik-kodow-kreskowych-zebra-ds8178/`) zwracaja 410 lub 301
- Uzyc narzedzia "Kontrola adresu URL" dla `https://www.takma.com.pl/produkt/zebra-ds8208`
- Poprosic o ponowne zaindeksowanie

#### 2c. Wzbogacic tresc strony
Rozwazyc dodanie:
- Porownanie DS8208 vs DS2208 vs DS4608 (tabela HTML na stronie)
- Wiecej linkow wewnetrznych z poradnikow i kategorii do DS8208
- Sekcja "Dla kogo" z konkretnymi branzami (apteki, supermarkety, logistyka)

### Priorytet 3 — MONITORING (po zakonczeniu core update)

#### 3a. Poczekac na zakonczenie Core Update
- Szacowana data zakonczenia: ok. **10-12 kwietnia 2026**
- Analize w GSC zrobic najwczesniej **17-19 kwietnia 2026**
- Jesli pozycja nie wroci — przejsc do glebszej analizy

#### 3b. Monitorowac Search Console
- Porownac CTR i impresje sprzed i po 27 marca
- Sprawdzic, czy inne strony produktowe tez spadly (moze to wzorzec dla calej witryny)
- Sprawdzic raport "Strony" — czy Google indeksuje poprawny URL

#### 3c. Budowac linkowanie wewnetrzne
- Upewnic sie, ze DS8208 jest linkowany z:
  - Strony kategorii skanery
  - Poradnika o skanerach Zebra (juz jest)
  - Strony marki Zebra
  - Strony glownej (jesli to bestseller)

---

## Podsumowanie

| Czynnik | Wplyw | Pewnosc |
|---------|-------|---------|
| Google March 2026 Core Update | KRYTYCZNY | WYSOKA |
| Stare URLe WordPress w indeksie | SREDNI | SREDNIA |
| Brak `updatedAt` (staly lastmod) | SREDNI | SREDNIA |
| Brak `sameAs` w schema | NISKI | NISKA |
| og:type = article | NISKI | NISKA |
| isNew: true po miesiacu | NISKI | NISKA |

**Glowna hipoteza:** Spadek jest spowodowany Google March 2026 Core Update, ktory jest w trakcie rolloutu (dzien 7 z ~14). Nie nalezy panikiwac — ale warto natychmiast wdrozyc poprawki z Priorytetu 1, zeby dac Googleowi najlepsze sygnaly przy ponownym crawlu.

---

*Raport wygenerowany: 2026-04-02*
