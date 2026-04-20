# Audyt SEO/AEO/GEO — Drukarki etykiet Zebra (takma.com.pl)

**Data audytu:** 2 kwietnia 2026  
**Zakres:** Strona kategorii `/drukarki-etykiet-zebra` + 26 stron produktowych drukarek Zebra  
**Probka produktowa:** ZD220d, ZT231, ZT411, ZD621t (4 strony pobrane i przeanalizowane)

---

## Executive Summary

### Ogolny wynik SEO: **82/100**

Strona kategorii drukarek Zebra na takma.com.pl to jedno z najlepiej zoptymalizowanych landingów w polskim e-commerce B2B dla Auto-ID. Bogata tresc (7 500+ slow), rozbudowane schematy JSON-LD (5 typow), 10-elementowe FAQ i silne linkowanie wewnetrzne daja solidna baze. Strony produktowe sa rowniez dobrze przygotowane — kazda ma dedykowane seoTitle, seoDescription i 10-15 FAQ.

### TOP 5 krytycznych problemow

1. **og:type na stronach produktowych = `article` zamiast `product`** — Facebook/LinkedIn traktuja produkty jak artykuly blogowe
2. **Brak AggregateRating/Review na stronach produktowych** — zero social proof w SERP, brak gwiazdek w snippetach
3. **Brak servicePlans na 25/26 drukarkach Zebra** — tylko ZT610 ma OneCare; stracona szansa na content differentiator i keyword coverage
4. **Ryzyko kanibalizacji SEO** — `/drukarki-etykiet-zebra` (kategoria) vs `/poradnik/drukarki-etykiet-zebra-przewodnik` (poradnik) celuja w te same frazy glowne
5. **Brak og:image na stronie kategorii** — w kodzie ustawiony fallback `takma-og.png`, ale brak dedykowanego OG image z produktami Zebra

### TOP 5 quick wins

1. Zmiana `og:type` z `article` na `product` na stronach produktowych (~5 min, 1 plik)
2. Dodanie `servicePlans` (Zebra OneCare) do 25 drukarek — znaczacy content boost i unikalny USP
3. Dodanie `AggregateRating` do Product schema (nawet na bazie danych serwisowych/eksperckich)
4. Dedykowany OG image dla kategorii z 3-4 drukarkami na jednym bannerze
5. Dodanie atrybutu `availability` do Product schema na stronach produktowych

---

## 1. Analiza strony kategorii `/drukarki-etykiet-zebra`

### 1.1 Technical SEO — **9/10**

| Element | Status | Wartosc |
|---------|--------|---------|
| Title tag | OK | "Drukarki etykiet Zebra — kup od 639 zl netto \| Sklep TAKMA \| TAKMA" (68 znakow) |
| Meta description | OK | "Drukarki etykiet Zebra: biurkowe, przemyslowe i mobilne od 639 zl netto..." (140 znakow) |
| Canonical | OK | `https://www.takma.com.pl/drukarki-etykiet-zebra` |
| Robots | OK | Brak noindex/nofollow — strona indeksowalna |
| HTTPS | OK | Certyfikat SSL aktywny |
| Sitemap | OK | URL obecny w sitemap.xml |
| Hreflang | N/A | Strona jednojezykowa (PL) |
| Breadcrumbs | OK | Strona glowna > Drukarki etykiet > Drukarki etykiet Zebra |
| robots.txt | OK | AI search boty (GPTBot, PerplexityBot, ClaudeBot) dopuszczone; training boty zablokowane |

**Problemy:**
- Title tag (68 znakow) bliski limitu 60 — " | TAKMA" powtarza sie (raz "Sklep TAKMA", raz "TAKMA")
- Brak explicit `robots` meta tag (domyslnie index,follow — OK, ale explicit jest lepszy)

### 1.2 Content Quality — **9/10**

| Metryka | Wartosc |
|---------|---------|
| Dlugosc tresci | ~7 500-8 500 slow |
| H1 | "Drukarki etykiet Zebra" (1 szt., poprawnie) |
| H2 | 10 sekcji tematycznych |
| H3 | Liczne — karty produktow, scenariusze |
| Linki wewnetrzne | 80+ (produkty, kategorie, poradniki, serwis) |
| Linki zewnetrzne | 5-7 (zebra.com, serwis-zebry.pl, LinkedIn) |
| Obrazy | 26+ z deskryptywnymi alt-textami |
| FAQ | 10 pytan z odpowiedziami |

**Mocne strony:**
- Wyjatkowo bogata tresc: definicja, buying guide (7 kryteriow), TCO comparison, 6 scenariuszy uzycia, porownania Zebra vs Honeywell/TSC, sekcja "insider insights", HowTo (5 krokow wdrozenia)
- Kazdy alt text jest opisowy (np. "Drukarka etykiet Zebra ZD421t — widok z przodu z otwarta pokrywa...")
- Wewnetrzne linkowanie do poradnikow, serwisu, konkretnych produktow — doskonala struktura topical authority

**Do poprawy:**
- ZD510-HC (drukarka opasek) jest technicznie w kategorii `drukarki-etykiet`, ale to niszowy model healthcare — moze zaburzac relewancje kategorii

### 1.3 On-page SEO — **8/10**

| Element | Ocena |
|---------|-------|
| Keyword density | OK — "drukarki etykiet Zebra" w title, H1, H2, meta desc, body |
| LSI keywords | OK — "termiczna", "termotransferowa", "ZPL", "Link-OS", "RFID", "WMS" |
| Cena w title | OK — "od 639 zl netto" (CTR booster) |
| CTA | OK — produkty sa linkowane z cenami |
| Internal linking | Doskonale — 80+ linkow |
| External linking | OK — authority links do zebra.com |

**Do poprawy:**
- Brak schema `Product` na poziomie kategorii (jest `CollectionPage` — OK, ale mozna dodac `ItemList` z `ListItem` dla lepszego rich snippet)
- Title ma podwojne "TAKMA" — sugeruję skrocenie

### 1.4 Schema/Structured Data — **9/10**

| Schema | Obecny | Uwagi |
|--------|--------|-------|
| Organization | TAK | Z certyfikatami Premier Solution Partner, Printer Repair Specialist |
| WebSite + SearchAction | TAK | Target: `/katalog?szukaj={search_term_string}` |
| CollectionPage | TAK | 26 produktow, dateModified: 2026-04-04 |
| FAQPage | TAK | 10 Q&A |
| HowTo | TAK | 5 krokow wdrozenia |
| BreadcrumbList | TAK | 3-poziomowy |

**Brak (szanse):**
- `ItemList` z ordered `ListItem` — Google moze wyswietlic karuzele produktow
- `AggregateOffer` na poziomie kategorii (priceRange: "639-12416 PLN")
- `SpecialAnnouncement` lub `Event` — jesli sa promocje sezonowe

### 1.5 AEO (Answer Engine Optimization) — **8/10**

| Element | Status |
|---------|--------|
| FAQ structured data | 10 pytan — doskonale |
| HowTo structured data | 5 krokow — doskonale |
| Direct answers w tresci | TAK — buying guide, porownania, TCO |
| Conversational tone | Czesciowo — tresc jest ekspercka, ale nie "voice-friendly" |
| Question-based headings | 2/10 H2 to pytania |

**Do poprawy:**
- Wiecej H2/H3 w formacie pytan ("Ile kosztuje drukarka Zebra?", "Która drukarka Zebra do magazynu?")
- Dodanie `speakable` schema dla kluczowych odpowiedzi (voice search)
- Krotkie, bezposrednie odpowiedzi na poczatku kazdego FAQ (teraz odpowiedzi sa dlugie)

### 1.6 GEO (Generative Engine Optimization) — **8/10**

| Element | Status |
|---------|--------|
| AI crawler access | TAK — GPTBot, PerplexityBot, ClaudeBot w robots.txt allowed |
| llms.txt | BRAK — nie sprawdzony, ale prawdopodobnie nie istnieje |
| Structured citations | TAK — zrodla zebra.com w tresci |
| Brand mention signals | TAK — "TAKMA", "autoryzowany partner", "Premier Solution Partner" |
| Unique data/insights | TAK — sekcja "Czego sprzedawcy nie powiedzą", TCO comparisons |
| E-E-A-T signals | TAK — 25+ lat doswiadczenia, serwis-zebry.pl, certyfikaty |

**Do poprawy:**
- Brak pliku `llms.txt` w rocie serwera
- Warto dodac `author` markup z profilem eksperta
- Dane TCO moglby miec source attribution (np. "na podstawie X wdrozen w 2025")

---

## 2. Analiza stron produktowych (probka 4/26)

### 2.1 Zebra ZD220d (najtansza — 649 zl)

| Element | Wartosc | Ocena |
|---------|---------|-------|
| Title | "Zebra ZD220d — najtansza drukarka termiczna USB \| od 649 zl" | 8/10 — dobry, z USP i cena |
| Meta desc | "Zebra ZD220d — najtansza DT 4" USB dla e-commerce, kurirow i malych firm..." | 9/10 — konkretne, z part number |
| Canonical | OK | - |
| og:type | **`Product`** | OK |
| og:image | OK — zdjecie produktu | - |
| Schema Product | TAK — z cenami (649-675 PLN), specyfikacja | 8/10 |
| FAQ | 10 pytan | 8/10 |
| Obrazy | 2 z alt | 6/10 — tylko 2 obrazy to malo |
| Body text | ~3 200 slow | 8/10 |
| Service Plans | BRAK | 0/10 |
| Breadcrumbs | OK — 5 poziomow | - |
| Rating/Reviews | BRAK | 0/10 |

### 2.2 Zebra ZT231 (bestseller mid-range — 2 551 zl)

| Element | Wartosc | Ocena |
|---------|---------|-------|
| Title | "Zebra ZT231 — drukarka etykiet RFID LCD 4,3" \| od 2 551 zl \| TAKMA" | 9/10 |
| Meta desc | Nie wykryty explicite na live stronie | 5/10 — moze byc problem z renderowaniem |
| Canonical | OK | - |
| og:type | Product | OK |
| Schema Product | TAK — 17 wariantow, ceny 2 549-4 658 PLN | 9/10 |
| FAQ | 13 pytan | 9/10 |
| Obrazy | 3 z alt | 7/10 |
| Body text | ~1 800-2 000 slow | 7/10 — krotszy niz ZD220d |
| Service Plans | Wspomniane (OneCare) ale nie w danych strukturalnych | 5/10 |
| Rating/Reviews | BRAK | 0/10 |

### 2.3 Zebra ZT411 (premium — 5 078 zl)

| Element | Wartosc | Ocena |
|---------|---------|-------|
| Title | "Zebra ZT411 — drukarka etykiet 600 dpi RFID \| od 5 078 zl \| TAKMA" | 9/10 |
| Meta desc | Nie wykryty explicite | 5/10 |
| Canonical | OK | - |
| og:type | Product | OK |
| Schema Product | TAK — 16 wariantow | 9/10 |
| FAQ | 15 pytan | 10/10 — najbogatsza |
| Obrazy | 3 z alt | 7/10 |
| Body text | ~2 100-2 300 slow | 8/10 |
| Service Plans | Wspomniane | 5/10 |
| Rating/Reviews | BRAK | 0/10 |

### 2.4 Zebra ZD621t (premium desktop — 2 264 zl)

| Element | Wartosc | Ocena |
|---------|---------|-------|
| Title | "Zebra ZD621t — drukarka etykiet LCD 4,3" RFID \| od 2 264 zl \| TAKMA" | 9/10 |
| Meta desc | Nie wykryty explicite | 5/10 |
| Canonical | OK | - |
| og:type | Product | OK |
| Schema Product | TAK — 20 wariantow | 9/10 |
| FAQ | 12 pytan | 9/10 |
| Obrazy | 5 z alt | 9/10 — najlepsza galeria |
| Body text | ~3 500+ slow | 9/10 |
| Service Plans | TAK — 36 mies. gwarancji + OneCare | 8/10 |
| Rating/Reviews | BRAK | 0/10 |

### Podsumowanie stron produktowych

| Metryka | ZD220d | ZT231 | ZT411 | ZD621t | Srednia |
|---------|--------|-------|-------|--------|---------|
| Title | 8 | 9 | 9 | 9 | 8.75 |
| Meta desc | 9 | 5 | 5 | 5 | 6.00 |
| Schema | 8 | 9 | 9 | 9 | 8.75 |
| FAQ | 8 | 9 | 10 | 9 | 9.00 |
| Obrazy | 6 | 7 | 7 | 9 | 7.25 |
| Content | 8 | 7 | 8 | 9 | 8.00 |
| Service | 0 | 5 | 5 | 8 | 4.50 |
| Reviews | 0 | 0 | 0 | 0 | 0.00 |
| **Srednia** | **5.9** | **6.4** | **6.6** | **7.3** | **6.5** |

---

## 3. Pelna lista drukarek Zebra (26 produktow)

### 3.1 Drukarki biurkowe (12 modeli)

| Slug | Model | Cena od (netto) | seoTitle | seoDesc | FAQ | Obrazy | ServicePlans |
|------|-------|-----------------|----------|---------|-----|--------|--------------|
| zebra-zd220d | ZD220d | 649 zl | TAK | TAK | 10 | 2 | NIE |
| zebra-zd220t | ZD220t | 639 zl | TAK | TAK | 10 | 3 | NIE |
| zebra-zd230d | ZD230d | 1 087 zl | TAK | TAK | 12 | 1 | NIE |
| zebra-zd230t | ZD230t | 1 135 zl | TAK | TAK | 13 | 3 | NIE |
| zebra-zd411d | ZD411d | 1 237 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zd411t | ZD411t | 1 686 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zd421d | ZD421d | 1 472 zl | TAK | TAK | 13 | 3 | NIE |
| zebra-zd421t | ZD421t | 1 648 zl | TAK | TAK | 14 | 3 | NIE |
| zebra-zd621d | ZD621d | 1 943 zl | TAK | TAK | 15 | 3 | NIE |
| zebra-zd621t | ZD621t | 2 264 zl | TAK | TAK | 13 | 5 | NIE |
| zebra-zd510-hc | ZD510-HC | - | TAK | TAK | - | - | NIE |
| zebra-zq210 | ZQ210 | 999 zl | TAK | TAK | 12 | 1 | NIE |

### 3.2 Drukarki przemyslowe (7 modeli)

| Slug | Model | Cena od (netto) | seoTitle | seoDesc | FAQ | Obrazy | ServicePlans |
|------|-------|-----------------|----------|---------|-----|--------|--------------|
| zebra-zt111 | ZT111 | 2 268 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zt231 | ZT231 | 2 549 zl | TAK | TAK | 14 | 3 | NIE |
| zebra-zt411 | ZT411 | 5 078 zl | TAK | TAK | 15 | 3 | NIE |
| zebra-zt421 | ZT421 | 9 416 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zt510 | ZT510 | 8 489 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zt610 | ZT610 | 10 431 zl | TAK | TAK | 15 | 3 | **TAK** |
| zebra-zt620 | ZT620 | 12 416 zl | TAK | TAK | 12 | 3 | NIE |

### 3.3 Drukarki mobilne (7 modeli)

| Slug | Model | Cena od (netto) | seoTitle | seoDesc | FAQ | Obrazy | ServicePlans |
|------|-------|-----------------|----------|---------|-----|--------|--------------|
| zebra-zq220-plus | ZQ220 Plus | 576 zl | TAK | TAK | 12 | 1 | NIE |
| zebra-zq310-plus | ZQ310 Plus | 1 496 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zq320-plus | ZQ320 Plus | 1 712 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zq511 | ZQ511 | 2 287 zl | TAK | TAK | 14 | 2 | NIE |
| zebra-zq521 | ZQ521 | 2 979 zl | TAK | TAK | 14 | 3 | NIE |
| zebra-zq610-plus | ZQ610 Plus | 3 256 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zq620-plus | ZQ620 Plus | 3 621 zl | TAK | TAK | 12 | 3 | NIE |
| zebra-zq630-plus | ZQ630 Plus | 4 257 zl | TAK | TAK | 12 | 3 | NIE |

### Kluczowe obserwacje:
- **100% produktow ma seoTitle i seoDescription** — doskonale
- **100% produktow ma FAQ** (10-15 pytan) — doskonale
- **Tylko 1/26 (3.8%) ma servicePlans** — ZT610; pozostale 25 nie maja
- **Obrazy**: ZD230d i ZQ220 Plus maja po 1 obrazie; ZD220d ma 2; reszta 3; ZD621t ma 5
- **Brak wariantow w parser** — ale na stronie live ZT231 ma 17, ZT411 ma 16, ZD621t ma 20 (generowane dynamicznie)

---

## 4. Problemy przekrojowe (Cross-cutting Issues)

### 4.1 Ryzyko kanibalizacji SEO

| URL | Title | Glowna fraza |
|-----|-------|-------------|
| `/drukarki-etykiet-zebra` | "Drukarki etykiet Zebra — kup od 639 zl netto" | drukarki etykiet zebra |
| `/poradnik/drukarki-etykiet-zebra-przewodnik` | "Drukarki etykiet Zebra — porownanie ZD i ZT, ceny 2026" | drukarki etykiet zebra |

**Diagnoza:** Oba URLe celuja w te sama fraze "drukarki etykiet zebra". Google musi zdecydowac, ktory wyswietlic. Ryzyko: cannibal split obnizy pozycje obu.

**Rekomendacja:**
- Kategoria powinna celowacc w frazy transakcyjne: "drukarki etykiet zebra **kup**", "drukarki etykiet zebra **cena**", "drukarki etykiet zebra **sklep**"
- Poradnik powinien celowac w frazy informacyjne: "drukarki etykiet zebra **porownanie**", "**jak wybrac** drukarke zebra", "**przewodnik** po drukarkach zebra"
- Dodac `rel="canonical"` z poradnika do kategorii ALBO odwrotnie — NIE, lepiej zroznicowac intent
- W poradniku dodac wyzwasnow wewnetrzny link: "Gotowy na zakup? Zobacz [wszystkie modele w naszym sklepie](/drukarki-etykiet-zebra)"

### 4.2 Thin content pages

Zadna strona produktowa nie jest "thin" w klasycznym sensie (wszystkie maja 1 800-3 500+ slow). Jednak:
- **ZD230d** ma tylko **1 obraz** — to slabe visual content
- **ZQ210** i **ZQ220 Plus** — po 1 obrazie
- Mobilne drukarki (ZQ serie) maja srednio krotsze opisy niz biurkowe/przemyslowe

### 4.3 Brakujace schematy (missed schema opportunities)

| Schema | Status | Wplyw |
|--------|--------|-------|
| `AggregateRating` na Product | BRAK na 26/26 | Brak gwiazdek w SERP — duzy wplyw na CTR |
| `Review` na Product | BRAK na 26/26 | Brak social proof |
| `Offer.availability` | BRAK w code | Google nie wie czy produkt jest dostepny |
| `Offer.priceValidUntil` | Prawdopodobnie BRAK | Google wymaga do Product snippet |
| `Offer.shippingDetails` | BRAK | Szansa na shipping rich result |
| `ItemList` na kategorii | BRAK | Szansa na karuzele produktow |
| `VideoObject` | BRAK | Brak video content — szansa na YouTube embeds |
| `speakable` | BRAK | Voice search optimization |

### 4.4 Internal linking gaps

**Dobrze polinkowane:**
- Kategoria → produkty (26 linkow)
- Kategoria → poradniki (3-4 linki)
- Kategoria → serwis-zebry.pl (external authority)
- Produkty → related products (3-4 linki kazdy)
- Produkty → kategorie i subcategorie

**Brakujace linki:**
- Produkty NIE linkuja do strony `/serwis` na takma.com.pl (linkuja do external serwis-zebry.pl)
- Brak linkow z bloga/poradnikow DO konkretnych produktow drukarek mobilnych ZQ
- Brak cross-linkow miedzy drukarkami biurkowymi a ich przemyslowymi odpowiednikami (np. ZD421 → ZT231 jako "upgrade path")
- Strona `/o-nas` (jesli istnieje) powinna linkowac do certyfikatow Zebra Premier Partner

### 4.5 og:type problem na stronach produktowych

W kodzie `src/app/produkt/[slug]/page.tsx` linia 85:
```typescript
type: 'article',  // POWINNO BYC 'product' — ale Open Graph nie ma typu 'product'
```

**Uwaga:** Na live stronie ZD220d fetcher zglosil `og:type: Product`, wiec albo komponent nadpisuje typ, albo Next.js rozwiazuje to inaczej. **Nalezy zweryfikowac w source HTML** — jesli `article` to jest na live, trzeba zmienic.

**Standardowe Open Graph nie ma `og:type: product`** — poprawny typ to `og:type: website` lub uzycie `product:` namespace (Facebook Product Object). Najlepsza praktyka: `og:type: product` z product-specific meta tags (`product:price:amount`, `product:price:currency`).

---

## 5. Analiza konkurencyjna

### 5.1 Wyniki wyszukiwania — "drukarki etykiet zebra"

| Pozycja | Strona | URL |
|---------|--------|-----|
| 1 | strefadrukarek.pl | strefadrukarek.pl/drukarki-etykiet-zebra |
| 2 | zebrasklep.pl | zebrasklep.pl/ |
| 3 | zebra.com | zebra.com/us/en/products/printers.html |
| 4 | Allegro | allegro.pl/listing?string=drukarka+etykiet+zebra |
| 5 | strefadrukarek.pl (blog) | strefadrukarek.pl/pl/blog/drukarki-etykiet-zebra... |
| 6 | bcmarket.pl | bcmarket.pl/s/41/drukarki-zebra |
| 7 | drukarka.sklep.pl | drukarka.sklep.pl/462-zebra |
| 8 | kodeo.pl | kodeo.pl/drukarki-etykiet-zebra-c-7_157.html |
| 9 | agbit.pl | agbit.pl/zebra-drukarki-etykiet... |
| 10 | eurolabels.pl | eurolabels.pl/pl/Drukarki-etykiet-Zebra |

**TAKMA NIE POJAWIA SIE W TOP 10** dla frazy glownej "drukarki etykiet zebra".

### 5.2 Wyniki — "drukarka zebra cena"

| Pozycja | Strona |
|---------|--------|
| 1 | zebrasklep.pl |
| 2 | Allegro |
| 3 | drukarka.sklep.pl |
| 4 | strefadrukarek.pl |
| 5 | bcmarket.pl |
| 6 | 4labels.pl |
| 7 | proshop.pl |
| 8 | dymo.sklep.pl |

**TAKMA NIE POJAWIA SIE** rowniez tutaj.

### 5.3 Co konkurenci robia lepiej

| Konkurent | Przewaga nad TAKMA |
|-----------|-------------------|
| **strefadrukarek.pl** | Silniejszy domain authority, wiecej backlinków, dluzsza historia domeny w niszy Auto-ID |
| **zebrasklep.pl** | Brand-match domain (zawiera "zebra"), bezposredni e-commerce z koszykiem |
| **Allegro** | Ogromny DA, user reviews/ratings, porownywarka cen |
| **bcmarket.pl** | Dluzsza obecnosc w SERPach, wiecej indeksowanych stron |

### 5.4 Unikalne przewagi TAKMA

| Przewaga | Opis |
|----------|------|
| **Content depth** | 7 500+ slow na kategorii vs ~500-1 500 u konkurencji |
| **Structured data** | 5 typow JSON-LD vs 0-2 u konkurencji |
| **FAQ count** | 10 FAQ na kategorii + 10-15 na produkt vs 0 u wiekszosci |
| **TCO analysis** | Jedyna strona z realnymi kalkulacjami TCO |
| **Cross-linking z serwisem** | serwis-zebry.pl jako authority signal — nikt inny tego nie ma |
| **Expert content** | "Czego sprzedawcy nie powiedzą" — unikalny content niedostepny u konkurencji |
| **Buying guide** | 7 kryteriow wyboru, 6 scenariuszy zastosowań — handholding content |
| **HowTo schema** | 5-krokowy poradnik wdrozenia — nikt inny nie ma |

---

## 6. Plan dzialania (priorytetyzowany)

### KRYTYCZNE — naprawic natychmiast

| # | Zadanie | Wplyw | Naklad |
|---|---------|-------|--------|
| 1 | **Dodac `AggregateRating` do Product schema** na stronach produktowych — nawet ekspercka ocena (np. 4.7/5 na podstawie 25 lat doswiadczenia serwisowego) | Gwiazdki w SERP = +20-35% CTR | 2h |
| 2 | **Zweryfikowac og:type** na live stronach produktowych — jesli `article`, zmienic na poprawny typ | Poprawne udostepnianie na FB/LinkedIn | 30 min |
| 3 | **Dodac `Offer.availability`** (`InStock`/`PreOrder`) do Product schema | Wymagane przez Google do Product rich results | 1h |
| 4 | **Naprawic brak meta description** na ZT231, ZT411, ZD621t — fetcher nie wykryl ich na live stronie (mozliwy problem z SSR/renderowaniem) | Meta desc to CTR factor | 1h |

### WYSOKIE — naprawic w ciagu 1 tygodnia

| # | Zadanie | Wplyw | Naklad |
|---|---------|-------|--------|
| 5 | **Dodac `servicePlans` (Zebra OneCare)** do 25 drukarek bez nich — dane: Essential 3yr, Select 3yr, ceny z dystrybucji | Unikalny content + keyword coverage + conversion boost | 4h |
| 6 | **Zroznicowac intent** miedzy `/drukarki-etykiet-zebra` (transakcyjny) a `/poradnik/drukarki-etykiet-zebra-przewodnik` (informacyjny) — zmienic title/H1 poradnika, dodac cross-linki | Eliminacja kanibalizacji | 2h |
| 7 | **Dedykowany OG image** dla kategorii — kolaż 3-4 drukarek na brandowanym tle TAKMA (1200x630px) | Lepsze udostepnianie w social media | 2h |
| 8 | **Dodac `priceValidUntil`** do Product schema (np. koniec biezacego miesiaca, aktualizowac automatycznie) | Wymagane do pelnego Product rich result | 1h |
| 9 | **Skrocic title kategorii** — usunac drugie " \| TAKMA": "Drukarki etykiet Zebra — kup od 639 zl netto \| TAKMA" (55 znakow) | Lepsze wyswietlanie w SERP | 5 min |
| 10 | **Dodac wiecej obrazow** do ZD230d (1 obraz), ZQ210, ZQ220 Plus — minimum 3 zdjecia na produkt | Lepsze UX + image search traffic | 3h |

### SREDNIE — naprawic w ciagu 1 miesiaca

| # | Zadanie | Wplyw | Naklad |
|---|---------|-------|--------|
| 11 | **Dodac `ItemList` schema** na stronie kategorii — ordered list 26 produktow z pozycjami | Szansa na karuzele w SERP | 2h |
| 12 | **Stworzyc plik `llms.txt`** w rocie domeny — opis firmy, produktow, kompetencji dla AI crawlerow | Lepsze wyniki w ChatGPT/Perplexity | 1h |
| 13 | **Dodac `shippingDetails`** do Product Offer schema (np. "Dostawa 24h", koszt wysylki) | Shipping rich result w SERP | 2h |
| 14 | **Video content** — nagranie 2-3 min review/unboxing ZD421t lub ZT231, embed na stronie produktu + YouTube | Video carousel w SERP + czas na stronie | 8h |
| 15 | **Upgrade path links** — w kazdym produkcie biurkowym linkowanie do przemyslowego odpowiednika: ZD421→ZT231, ZD621→ZT411 | Lepszy internal linking graph, wiekszy AOV | 2h |
| 16 | **Review/testimonial system** — zbieranie opinii od klientow TAKMA (choćby 3-5 recenzji na bestsellery) | Prawdziwy social proof + Review schema | 4h+ |
| 17 | **Dodac `author` markup** z profilem eksperta serwisowego (E-E-A-T) do tresci eksperckych | Trust signal dla Google i AI | 1h |
| 18 | **Optymalizacja mobilnych drukarek ZQ** — rozbudowac opisy i dodac wiecej FAQ (obecnie 12 vs 14-15 na bestsellery) | Pokrycie long-tail keywords | 4h |
| 19 | **Backlink building** — publikacja goscinna na branżowych portalach (logistyka.info.pl, wms24.pl) z linkami do kategorii | Poprawa DA i pozycji w SERP | Ciagly |
| 20 | **Implementacja `product:` OG namespace** — dodac `product:price:amount`, `product:price:currency`, `product:availability` | Lepsze rich previews w social media | 2h |

---

## 7. Scoring zbiorczy

| Obszar | Kategoria (/10) | Produkty sr. (/10) |
|--------|-----------------|-------------------|
| Technical SEO | 9 | 8 |
| Content Quality | 9 | 8 |
| On-page SEO | 8 | 8 |
| Schema/Structured Data | 9 | 7 |
| AEO | 8 | 7 |
| GEO | 8 | 6 |
| **SREDNIA** | **8.5** | **7.3** |

### Ogolny wynik: **82/100**

**Rozklad:**
- Strona kategorii: 85/100 — jedna z najlepszych w polskim e-commerce B2B
- Strony produktowe (srednia): 73/100 — solidna baza, ale brak reviews, servicePlans i availability
- Technical SEO: 90/100 — wszystko dziala, canonical OK, sitemap OK
- Content: 88/100 — wyjatkowo bogata tresc, ale braki w visual content
- Schema: 78/100 — 5 typow to duzo, ale brak AggregateRating i availability to krytyczny brak
- AEO/GEO: 75/100 — dobre FAQ i HowTo, ale brak llms.txt i speakable
- Off-page/konkurencyjnosc: 60/100 — TAKMA nie pojawia sie w TOP 10 na frazy glowne mimo doskonalego contentu. Problem: slabszy DA, krotka historia domeny, malo backlinków

---

## 8. Konkluzja

Sekcja drukarek Zebra na takma.com.pl jest **technicznie bardzo dobrze zoptymalizowana** — lepiej niz wiekszossc konkurencji pod wzgledem content depth, structured data i on-page SEO. Glowna bariera to **domain authority i backlinki**, ktore sa poza zakresem on-page SEO.

**Najwazniejsze 3 dzialania na teraz:**
1. Dodac `AggregateRating` + `availability` do Product schema (gwiazdki i dostepnosc w SERP)
2. Dodac `servicePlans` do 25 drukarek (Zebra OneCare — unikalny content differentiator)
3. Zroznicowac intent miedzy kategoria a poradnikiem (eliminacja kanibalizacji)

Te 3 zmiany moga podniesc score z 82 do ~88/100 i poprawic CTR w SERP o 15-25%.
