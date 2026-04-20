# Audyt SEO / AEO / GEO — M3 US30

**URL:** https://www.takma.com.pl/produkt/m3-us30
**Data audytu:** 2 kwietnia 2026
**Typ strony:** Strona produktowa
**Zakres:** SEO techniczne, SEO on-page, AEO, GEO, analiza konkurencji

---

## Podsumowanie (Executive Summary)

M3 US30 to **wyraźna ewolucja szablonu** w porównaniu z pierwszym audytowanym M3 US20. Widać, że wnioski z poprzednich stron zostały częściowo wdrożone: jest 10 pytań FAQ (vs 6 na US20), 12 additionalProperty w schema Product (vs brak danych na US20), opis zaczyna się od zdania kontekstowego ("następca popularnego M3 US20"), Android 13 zamiast 10, Wi-Fi 6. Ale wiele systemowych problemów pozostaje.

| Obszar | Ocena | Komentarz |
|---|---|---|
| SEO techniczne | 🟢 8,5/10 | Product + AggOffer + FAQ + BreadcrumbList — duplikaty schema, og:type |
| SEO on-page | 🟢 8/10 | 1 538 słów, 23 obrazy z alt, 12 wariantów, porównanie 3 modeli |
| AEO | 🟢 8,5/10 | 10 pytań FAQ (lepsza od US20), porównanie, scenariusze |
| GEO | 🟡 7/10 | Lepsze zdanie otwierające niż US20, ale brak autora, zdania definicyjnego |
| Konkurencyjność | 🟢 8,5/10 | Znacznie lepsza niż ganeo, antumo, omegaprint, bcmarket (szacunek jakościowy) |

**Ogólna ocena: 8,1/10** — lepsza od M3 US20 (7,8), bliska stronie kategorii Citizen (8,2), poniżej ZT411 i poradnika TT (oba 8,7).

---

## 1. SEO TECHNICZNE (8,5/10)

### 1.1. Meta tagi — ✅ Bardzo dobrze

| Element | Wartość | Ocena |
|---|---|---|
| Title | `M3 US30 — terminal mobilny z klawiaturą, IP65, Wi-Fi 6 \| TAKMA` | ✅ 60 znaków, keyword + USP (Wi-Fi 6) + brand |
| Meta description | `M3 US30 — terminal mobilny z klawiaturą 30/38/42/51 klawiszy, IP65, hot-swap 6700 mAh, skaner SE4770/SE5500/SE5800. Wi-Fi 6, Android 13. Zamów w TAKMA.` | ✅ 152 znaki, parametry + CTA |
| Canonical | `https://www.takma.com.pl/produkt/m3-us30` | ✅ |
| Robots | `index, follow` | ✅ |

**Porównanie z M3 US20:** Title M3 US30 dodaje "Wi-Fi 6" jako USP zamiast "hot-swap" — dobra strategia różnicowania. Meta description dodaje "Android 13" i "SE5800" (nowy skaner), aktualizując parametry techniczne.

**Brak ceny w title** — ZT411 miał "od 5 078 zł" w title, co zwiększa CTR. M3 US30 (od 3 610 zł) mógłby skorzystać z tej samej strategii.

### 1.2. Open Graph — ⚠️ Znany problem

| Element | Wartość | Ocena |
|---|---|---|
| og:type | `article` | ❌ Powinno być `product` — ten sam problem co ZT411 |
| og:image | Dedykowany (m3-us30-1.png) | ✅ Lepsza niż generyczny na Citizen |
| og:image:alt | „M3 US30" | ✅ |
| og:description | Z ceną (od 3610 zł) | ✅ |

### 1.3. Schema.org — ✅ Bardzo dobrze

Wykryto **8 bloków JSON-LD** (standard TAKMA):

| Schema | Status | Komentarz |
|---|---|---|
| Organization | ✅ (ale 2×) | Duplikat — problem ogólnoserwisowy |
| WebSite | ✅ (ale 2×) | Duplikat |
| Product | ✅ | name, brand, sku, mpn, weight (369 g), **12 additionalProperty** |
| AggregateOffer | ✅ | 12 ofert, lowPrice: 3610, highPrice: 4330, InStock |
| BreadcrumbList | ✅ | 4 pozycje: Strona główna → Katalog → Terminale mobilne → M3 US30 |
| WebPage | ✅ | — |
| FAQPage | ✅ | **10 pytań** |

**Ewolucja vs M3 US20:**
- **12 additionalProperty** (vs brak danych ile miał US20) — rozbudowane parametry w schema
- **10 pytań FAQ** (vs 6 na US20) — +67% więcej pytań
- **4 klawiatury** (30/38/42/51) vs 3 na US20 — szerszy wybór
- **3 skanery** w meta description (SE4770/SE5500/SE5800) — nowszy SE5800

**Rekomendacje (te same systemowe):**

- Usunąć duplikaty Organization (2×) i WebSite (2×)
- Dodać `aggregateRating` / `review`
- Zmienić og:type na `product`

### 1.4. Wydajność — ✅ Dobrze

| Metryka | Wartość | vs US20 | vs ZT411 |
|---|---|---|---|
| TTFB | ~48 ms | ≈ (45 ms) | ≈ (46 ms) |
| DOM Content Loaded | ~335 ms | ≈ (307 ms) | ≈ (311 ms) |
| Load Complete | ~1 049 ms | ↓ wolniejsze (841 ms) | ↑ lepsze (1 156 ms) |
| Transfer Size | ~67 KB | ↓ większe (55 KB) | ≈ (69 KB) |

Większy transfer i dłuższy load wynikają z 23 obrazów (vs 16 na US20). Akceptowalne.

### 1.5. Tabele — ⚠️ Brak captionów

| # | Typ | Captiony? |
|---|---|---|
| 1 | Warianty (12 wariantów) | ❌ brak |
| 2 | Specyfikacja techniczna | ❌ brak |
| 3 | Porównanie US30 vs US20 vs MC3400 | ❌ brak |

ZT411 miał captiony, tu ich nie ma. Niespójność w szablonach.

---

## 2. SEO ON-PAGE (8/10)

### 2.1. Struktura nagłówków — ✅ Identyczna z US20 (dobra)

```
H1: M3 US30

  H2: Kluczowe parametry
  H2: Dostępne warianty
  H2: Opis produktu
  H2: Specyfikacja techniczna
  H2: Zastosowania
  H2: Porównanie M3 US30 vs M3 US20 vs Zebra MC3400
    H3: M3 US30 / M3 US20 / Zebra MC3400
  H2: Najczęściej zadawane pytania (10 pytań)
    H3: Czym różni się M3 US30 od US20?
    H3: Jakie klawiatury są dostępne w M3 US30?
    H3: Jaki skaner wybrać do M3 US30?
    H3: Czy M3 US30 ma wersję z 4G LTE?
    H3: Czy M3 US30 ma hot-swap baterii?
    H3: Czy akcesoria US20 pasują do US30?
    H3: M3 US30 vs Zebra MC3400 — porównanie
    H3: Czym różni się US30 od SM30?
    H3: Gdzie kupić M3 US30 w Polsce?
    H3: Jaki system operacyjny ma M3 US30?
  H2: Pliki do pobrania
  H2: Akcesoria
  H2: Podobne terminale
```

**Rekomendacja:** Rozbudować H1 — "M3 US30 — terminal mobilny z klawiaturą fizyczną i Wi-Fi 6".

### 2.2. Treść — ✅ Lepsza niż US20

| Metryka | M3 US30 | M3 US20 | Zmiana |
|---|---|---|---|
| Słowa | 1 538 | 1 074 | +43% ↑ |
| Znaki | 10 146 | 7 001 | +45% ↑ |
| Tabele | 3 | brak danych | — |
| FAQ pytań | 10 | 6 | +67% ↑ |
| Obrazy | 23 | 16 | +44% ↑ |

**Zdanie otwierające opis:** "M3 US30 to następca popularnego M3 US20 — wytrzymały terminal mobilny (kolektor danych) z fizyczną klawiaturą, produkowany przez koreańską firmę M3 Mobile."

To zdanie jest **znacznie lepsze** niż na US20 (które zaczynało się od "Dla kogo?"). Zawiera: pozycjonowanie jako następca, definicję produktu, producenta. Bliskie zdaniu definicyjnemu, ale jeszcze nie idealne dla GEO — brakuje parametrów (Wi-Fi 6, Android 13, IP65).

### 2.3. Obrazy — ✅ Wzorcowe

| Metryka | Wartość | Ocena |
|---|---|---|
| Łącznie obrazów | 23 | ✅ (tyle co ZT411) |
| Bez alt text | 0 | ✅ |
| Lazy loading | ✅ | Poprawne |

Obrazy obejmują: 4 zdjęcia produktu (przód, tył, bok, góra), logo M3 Mobile, stacje dokujące (3 typy), baterie, podobne terminale, loga marek w sidebarze. Kompleksowe pokrycie.

**Uwaga:** Alt texty akcesoriów mówią "Stacja dokująca ... M3 US**20**" — jeśli te same akcesoria pasują do US30, warto to wyjaśnić. Jeśli to inne akcesoria, alt texty powinny mówić "US30".

### 2.4. Linkowanie — ✅ Dobrze

| Metryka | Wartość |
|---|---|
| Łącznie linków | 186 |
| Wewnętrzne | 177 |
| Zewnętrzne | 6 (serwis-zebry.pl + qba.dev) |

Anchor navigation: Warianty, Opis, Specyfikacja, Zastosowania, Porównanie, FAQ, Do pobrania, Akcesoria — 8 pozycji.

**FAQ pytanie „Gdzie kupić M3 US30 w Polsce?"** — to świetne pytanie, którego brakowało na US20. Odpowiada na intencję nawigacyjną/transakcyjną.

---

## 3. AEO — ANSWER ENGINE OPTIMIZATION (8,5/10)

### 3.1. Co jest dobrze

- **10 pytań FAQ** — lepsza pokrycie intencji niż US20 (6):
  - Porównawcze: US30 vs US20, US30 vs MC3400, US30 vs SM30
  - Techniczne: klawiatury, skanery, 4G LTE, hot-swap, system
  - Kompatybilność: "Czy akcesoria US20 pasują do US30?"
  - Zakupowe: "Gdzie kupić M3 US30 w Polsce?"
- **Tabela porównawcza** US30 vs US20 vs Zebra MC3400 — pokrywa 3-way comparison
- **Pytanie o migrację** ("Czy akcesoria US20 pasują?") — adresuje klientów aktualnych

### 3.2. Rekomendacje

- **Dodać pytania o cenę i TCO:** "Ile kosztuje M3 US30?", "Czy US30 jest tańszy od Zebra MC3400?"
- **Dodać pytanie o baterię:** "Jak długo trzyma bateria M3 US30?" — z konkretną odpowiedzią w godzinach
- **Dodać pytanie o Wi-Fi 6:** "Jakie korzyści daje Wi-Fi 6 w terminalu mobilnym?" — wyróżnik vs US20
- **Dodać captiony do tabel** — "Warianty M3 US30", "Specyfikacja M3 US30", "Porównanie US30 vs US20 vs MC3400"

---

## 4. GEO — GENERATIVE ENGINE OPTIMIZATION (7/10)

### 4.1. Co jest lepsze niż na US20

- **Zdanie otwierające** jest bliższe definicji: "M3 US30 to następca popularnego M3 US20 — wytrzymały terminal mobilny (kolektor danych)..." — AI może to cytować.
- **12 additionalProperty w Product schema** — rozbudowane metadane (Wi-Fi 6, Android 13, SE5800).
- **FAQ z konkretnymi porównaniami** — AI cytuje porównania.
- **Pytanie „Gdzie kupić"** z odpowiedzią — adresuje intencję zakupową AI.

### 4.2. Czego brakuje

- **Brak pełnego zdania definicyjnego** — obecne zdanie jest dobre, ale powinno zawierać kluczowe parametry: *"M3 US30 to wytrzymały terminal mobilny (kolektor danych) z fizyczną klawiaturą, produkowany przez M3 Mobile (Korea). Następca US20 z Android 13, Wi-Fi 6, IP65 i hot-swap baterią 6700 mAh. Oferowany w 12 wariantach od 3 610 zł netto."*
- **Brak autora** — strona produktowa bez `author` / `reviewedBy` w schema.
- **og:type = `article`** zamiast `product`.
- **Brak odniesień do źródeł producenta** — link do oficjalnej strony M3 Mobile.
- **Brak `sameAs`** w Organization.
- **Brak `dateModified`** w WebPage schema.
- **Brak statystyk/benchmarków** — np. "Wi-Fi 6 zapewnia do 2× szybszy transfer danych vs Wi-Fi 5 w US20", "skaner SE5800 odczytuje kody z odległości do 21 m".

---

## 5. ANALIZA KONKURENCJI

### 5.1. Kto konkuruje

| Domena | Typ | Treść | Schema | FAQ |
|---|---|---|---|---|
| **takma.com.pl** | Sklep B2B + treść ekspercka | 1 538 słów, 10 FAQ, porównanie | Product + AggOffer + FAQ | 10 pytań |
| ganeo.pl | Listing produktu | ~200 słów, podstawowa specyfikacja | Brak schema | Brak |
| antumo.com | Listing produktu | ~150 słów | Brak | Brak |
| omegaprint.pl | Listing producenta | ~50 słów | Brak | Brak |
| bcmarket.pl | Listing | ~80 słów | Brak | Brak |
| logiscenter.us | Listing (EN) | Specyfikacja | Brak | Brak |

TAKMA ma **znaczną przewagę** — ~8-30× więcej treści, jedyna strona z FAQ i schema. M3 US30 jest nowszym produktem niż US20, więc konkurencja jest jeszcze mniej rozwinięta.

### 5.2. Frazy kluczowe — szanse

| Fraza | Szansa | Rekomendacja |
|---|---|---|
| "M3 US30" (brand) | ✅ Silna | Utrzymać |
| "M3 US30 vs US20" | ✅ Pokryte w FAQ i porównaniu | Rozważyć dedykowany poradnik |
| "M3 US30 cena" | ⚠️ Brak ceny w title | Dodać cenę do title |
| "terminal mobilny z klawiaturą Wi-Fi 6" | ⚠️ Niszowa | Dodać tę frazę do treści |
| "następca M3 US20" | ✅ W zdaniu otwierającym | Wzmocnić |
| "kolektor danych Android 13 klawiatura" | ⚠️ Long-tail | Dodać do treści |

---

## 6. PORÓWNANIE M3 US30 vs M3 US20 (ewolucja szablonu)

| Aspekt | M3 US20 (audyt #1) | M3 US30 (audyt #5) | Progres |
|---|---|---|---|
| Ogólna ocena | 7,8/10 | 8,1/10 | +0,3 ↑ |
| Słowa | 1 074 | 1 538 | +43% ↑ |
| FAQ pytań | 6 | 10 | +67% ↑ |
| Obrazy | 16 | 23 | +44% ↑ |
| additionalProperty | — | 12 | ✅ Nowe |
| Zdanie otwierające | "Dla kogo?" (marketingowe) | "Następca US20..." (definicyjne) | ↑ Lepsze |
| og:type | "website" ❌ | "article" ⚠️ | Inny błąd |
| Cena w title | ❌ | ❌ | Bez zmiany |
| Captiony tabel | ❌ | ❌ | Bez zmiany |
| Duplikaty schema | ❌ | ❌ | Bez zmiany |
| preconnect/preload | ❌ | ❌ | Bez zmiany |

**Wniosek:** Widoczna poprawa treści i FAQ, ale problemy systemowe (og:type, duplikaty schema, captiony, preconnect) pozostają nienaprawione.

---

## 7. PLAN DZIAŁANIA — PRIORYTETY

### 🔴 Wysoki priorytet (szybkie efekty)

1. **Dodać cenę do title** — "M3 US30 — terminal mobilny z klawiaturą, Wi-Fi 6 | od 3 610 zł | TAKMA" (wzór z ZT411).
2. **Zmienić og:type** z `article` na `product`.
3. **Dodać captiony do 3 tabel** — "Warianty M3 US30", "Specyfikacja M3 US30", "Porównanie US30 vs US20 vs MC3400".
4. **Rozbudować zdanie definicyjne** — dodać Wi-Fi 6, Android 13, cenę od.
5. **Usunąć duplikaty schema** (ogólnoserwisowe).

### 🟡 Średni priorytet

6. **Rozbudować FAQ** do 12-13 pytań (cena, bateria, Wi-Fi 6, TCO).
7. **Sprawdzić alt texty akcesoriów** — mówią "US20" zamiast "US30" (jeśli to te same akc.).
8. **Dodać link do poradnika** "Jak wybrać terminal mobilny" w opisie.
9. **Rozbudować H1** — dodać kontekst semantyczny.
10. **Dodać odniesienie do producenta** (m3mobile.com).

### 🟢 Niski priorytet

11. Dodać `aggregateRating`, `review`, `sameAs`, `dateModified`.
12. Dodać preconnect/preload.
13. Rozważyć wideo produktowe.
14. Dodać benchmarki Wi-Fi 6 vs Wi-Fi 5.

---

## 8. CHECKLIST

| Element | Status |
|---|---|
| Title tag z keyword + brand | ✅ |
| Meta description z parametrami + CTA | ✅ |
| Canonical self-referencing | ✅ |
| Jeden H1 | ✅ (ale zbyt krótki) |
| Logiczna hierarchia H2/H3 | ✅ |
| Product schema z AggregateOffer | ✅ (12 ofert) |
| FAQPage schema (10 pytań) | ✅ |
| BreadcrumbList | ✅ |
| Wszystkie 23 obrazy z alt | ✅ |
| Lazy loading | ✅ |
| Nawigacja kotwicowa | ✅ |
| Porównanie 3 modeli | ✅ |
| 12 additionalProperty | ✅ |
| Pytanie "Gdzie kupić?" w FAQ | ✅ |
| Mobile-friendly | ✅ |
| TTFB < 200 ms | ✅ (48 ms) |
| og:type = product | ❌ (jest "article") |
| Cena w title | ❌ |
| Captiony tabel | ❌ |
| AggregateRating / reviews | ❌ |
| Zdanie definicyjne pełne (GEO) | ⚠️ Częściowe |
| Autor / reviewedBy | ❌ |
| Preconnect / preload | ❌ |
| Duplikaty schema usunięte | ❌ |

---

## 9. RANKING WSZYSTKICH 5 AUDYTOWANYCH STRON

| # | Strona | Typ | Ocena | Największy atut | Największy brak |
|---|---|---|---|---|---|
| 1 | Zebra ZT411 | Produkt | **8,7** | 15 FAQ, captiony tabel, cena w title | og:type, brak autora |
| 1 | Taśma TT | Poradnik | **8,7** | 3 162 słów, 10 tabel, autor w schema | 3 obrazy (1 bez alt!) |
| 3 | Citizen | Kategoria | **8,2** | CollectionPage+ItemList, scenariusze, TCO | og:image generyczne, brak captionów |
| 4 | **M3 US30** | Produkt | **8,1** | 10 FAQ, dobry opis, 23 obrazy | og:type, brak ceny w title |
| 5 | M3 US20 | Produkt | **7,8** | Porównanie, anchor nav | 6 FAQ, 1 074 słów, og:type "website" |

---

*Raport nr 5 z serii audytów stron takma.com.pl. Analiza oparta na kodzie źródłowym, strukturze danych, treści i porównaniu z konkurencją. Uwzględniono ewolucję szablonu vs M3 US20 (audyt #1).*
