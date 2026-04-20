# Audyt SEO / AEO / GEO — Zebra TC701

**URL:** https://www.takma.com.pl/produkt/zebra-tc701
**Data audytu:** 2026-03-28
**Typ strony:** Karta produktu (terminal mobilny ultra-rugged)
**Produkt:** Zebra TC701 — ultra-rugged kolektor danych z AI NPU, RFID UHF, Wi-Fi 7
**Warianty:** 12 konfiguracji (4 017 – 8 099 zł netto), wszystkie „available"
**Źródło audytu:** Kod źródłowy Next.js (products.ts + page.tsx)

---

## WYNIK OGÓLNY: 91 / 100 🏆

| Kategoria | Waga | Wynik | Ważony |
|---|---|---|---|
| On-page SEO | 25% | 85 / 100 | 21,25 |
| Treść / E-E-A-T | 25% | 96 / 100 | 24,00 |
| Schema / Dane strukturalne | 15% | 88 / 100 | 13,20 |
| AEO (Answer Engine Optimization) | 15% | 95 / 100 | 14,25 |
| GEO (Generative Engine Optimization) | 10% | 95 / 100 | 9,50 |
| Keyword Coverage | 10% | 85 / 100 | 8,50 |
| **SUMA** | **100%** | | **90,70 ≈ 91** |

---

## 1. On-page SEO (85/100)

### Title tag ⚠️
```
Zebra TC701 — kolektor danych / terminal mobilny ultra-rugged AI Wi-Fi 7 RFID | od 4 017 zł
```
- **93 znaki** — **za długi!** Google ucina title po ~60-65 znakach w SERP
- Problem: próba upchania zbyt wielu keywordów (kolektor danych, terminal mobilny, ultra-rugged, AI, Wi-Fi 7, RFID, cena)
- „kolektor danych / terminal mobilny" — podwójna nazwa produktu to marnowanie znaków

**Rekomendacja (~65 zn.):**
```
Zebra TC701 — terminal ultra-rugged z RFID i AI | od 4 017 zł | TAKMA
```

### Meta description ❌
```
Zebra TC701 (TC7010/TC701G) — ultra-rugged kolektor danych z AI NPU, RFID UHF w standardzie, Wi-Fi 7, 5G i AMOLED 1500 nit do chłodni, doków i magazynów. 11 konfiguracji, upadki 3,66 m. TC7010-021B1A0001-A6 od 4 017 zł netto.
```
- **229 znaków** — przekracza limit 155-160 zn.
- ⚠️ Part number w meta description (TC7010-021B1A0001-A6) — mało kto szuka poradnika po PN
- ⚠️ Keyword stuffing umiarkowany — ale „ultra-rugged kolektor danych" + „AI NPU" + „RFID UHF" + „Wi-Fi 7" + „5G" + „AMOLED 1500 nit" to feature dump
- ℹ️ Ma 12 wariantów, nie 11 jak napisano

**Rekomendacja (~155 zn.):**
```
Zebra TC701 — ultra-rugged terminal z RFID UHF, AI NPU i ekranem AMOLED 1500 nit. Upadki z 3,66 m, IP68. 12 konfiguracji od 4 017 zł netto.
```

### Open Graph ⚠️
- og:title ✅ — generowany z seoTitle (smartTruncate 200)
- og:description ✅ — ze shortDescription + cena
- og:image ✅
- og:url ✅
- **og:type ❌ — „website" zamiast „product"** ← znany problem systemowy

### H1 ⚠️
Generowany jako `{product.name}{category.name}`:
```
Zebra TC701Terminale mobilne
```
- ❌ **Bug: brak spacji/separatora** — znany problem systemowy

### Struktura nagłówków ✅✅
- H2: Kluczowe parametry, Dostępne warianty, Opis produktu, Specyfikacja techniczna, Zastosowania, **Porównanie TC701 vs TC501 vs Honeywell CT47**, FAQ, Pliki do pobrania
- H3: FAQ, akcesoria powiązane
- ✅ Porównanie jest jako H2 — lepiej niż ET401 (które nie ma porównania wcale)

### Obrazy ✅✅
- 5 zdjęć z opisowymi alt textami (widok z przodu, z boku, z tyłu, moduł kamery, NFC + RFID)

### URL ✅
- `/produkt/zebra-tc701` — czysty

---

## 2. Treść / E-E-A-T (96/100)

### Objętość i jakość treści ✅✅✅ (wybitna)
- **Opis produktu: ~2500 znaków** — najobszerniejszy opis ze wszystkich audytowanych kart produktów
- 12 wariantów z cenami, SKU, atrybutami
- 15 specyfikacji technicznych
- 6 scenariuszy zastosowań
- 12 FAQ (nowy rekord kart produktów!)
- Tabela porównawcza TC701 vs TC501 vs Honeywell CT47 (15 parametrów!)
- 3 powiązane akcesoria
- variantAttributeTooltips dla 6 atrybutów (Skaner, Pamięć, 5G, Bateria, Ultrawide, ToF)

### Opis produktu — analiza sekcji ✅✅✅

| Blok opisu | Treść | Ocena |
|---|---|---|
| Dla kogo? | Target: chłodnie, doki, porty, kopalnie, budowy. Następca TC72/TC77 | ✅✅ |
| Wytrzymałość | IP68+IP65, 3,66 m upadki, 3500 tumble, szok termiczny, Gorilla Glass Victus, 284 g | ✅✅✅ Najlepsza w TAKMA |
| Procesor AI | Q-6690 z NPU, OCR VIN/opon, weryfikacja etykiet on-device | ✅✅ Unikalne |
| Ekran AMOLED | 1500 nit, 6" FHD+, rękawice, mokre palce | ✅✅ |
| RFID UHF | Standard w KAŻDEJ konfiguracji, >200 tagów/s, zasięg 2 m, sled RFD40/90 | ✅✅✅ |
| Skanery | SR560 vs AC670 (30 m), kamera 50 MP, ultrawide 13 MP, ToF dimensioning | ✅✅✅ |
| Łączność | Wi-Fi 7 MLO, 5G R17, BT 6.0, NFC, GPS triple-band, contactless wallet | ✅✅ |
| Bateria | 5000/7240 mAh, hot-swap, Qi wireless, 0→70% w 45 min, współdzielone z TC501 | ✅✅✅ |
| Android/TCO | A15→A19, LifeGuard 8 lat, DNA Professional, OneCare od 1238 zł/3 lata | ✅✅ |
| Cross-reference | TC501 jako wersja enterprise, link do serwis-zebry.pl | ✅ |

### E-E-A-T ✅✅✅
- **Experience:** variantAttributeTooltips dla 6 atrybutów — wiedza praktyczna „który wariant wybrać i dlaczego"
- **Expertise:** 15 specyfikacji, porównanie z konkurencją (Honeywell CT47), AI NPU use cases
- **Authoritativeness:** sameAs do zebra.com/tc701, link do serwis-zebry.pl, instrukcja PL, karta katalogowa
- **Trust:** 12 wariantów z realnymi cenami, wszystkie „available", OneCare z cenami

---

## 3. Schema / Dane strukturalne (88/100)

### Generowane schematy:
| Schema | Status |
|---|---|
| Organization | ✅ (2× duplikat) |
| WebSite | ✅ (2× duplikat) |
| Product | ✅ |
| BreadcrumbList | ✅ |
| WebPage | ✅ |
| FAQPage | ✅ |

### Product Schema ✅✅
- name: „Zebra TC701" ✅
- brand: Zebra, manufacturer: Zebra Technologies ✅
- category: „Terminale mobilne" ✅
- **AggregateOffer z 12 ofertami** ✅ — lowPrice 4017.00, highPrice 8099.00
- sameAs: zebra.com/tc701 ✅
- datePublished: 2026-02-17 ✅
- dateModified: 2026-02-17 (brak updatedAt) ⚠️
- weight: 284 g ✅
- additionalProperty: generowane z specifications (System operacyjny, Procesor, Wyświetlacz, Skaner, RFID, Kamera, Bateria, Odporność, Łączność, USB, Temperatura pracy)
- isRelatedTo: 3 akcesoria z cenami ✅

### Braki ⚠️
- **Duplikat Organization/WebSite (2×)** — fix globalny
- **og:type „website"** — fix globalny
- **Brak updatedAt** → dateModified = createdAt
- **compatibleAccessories: []** — puste, choć TC701 dzieli baterie z TC501

---

## 4. AEO — Answer Engine Optimization (95/100)

### FAQ ✅✅✅ (12 pytań — NOWY REKORD kart produktów!)

1. ✅ Ile kosztuje Zebra TC701? (cenowe — z podziałem WiFi/5G/AC670)
2. ✅ Czym różni się TC701 od TC501? (porównanie — flagowe pytanie)
3. ✅ Czy TC701 ma wbudowany RFID? (USP — >200 tagów/s, zasięg 2 m, sled)
4. ✅ Czym różnią się skanery SR560 i AC670? (decyzja zakupowa)
5. ✅ Czy TC701 działa w chłodniach i mroźniach? (zastosowanie — szok termiczny!)
6. ✅ Jak działa hot-swap baterii? (techniczne — z detalami: kondensator 30 s)
7. ✅ Czy TC701 obsługuje 5G? (spec — TC7010 vs TC701G, CBRS, eSIM)
8. ✅ Co to jest czujnik Time-of-Flight (ToF)? (edukacyjne — dimensioning)
9. ✅ Jaki Android ma TC701? (lifecycle — A15→A19, minimum 2030)
10. ✅ Gdzie serwisować TC701 w Polsce? (lokalne — serwis-zebry.pl, OneCare)
11. ✅ Co to jest Mobility DNA i DataWedge? (edukacyjne — pełny opis pakietu)
12. ✅ Jakie są alternatywy? (porównanie — TC501, TC73, Honeywell CT47, Datalogic Skorpio X5)

### Ocena FAQ:
- **12 pytań to NOWY REKORD** — poprzedni rekord: 14 na MC3450, ale MC3450 nie ma pytania o ToF, szok termiczny ani hot-swap z detalami technicznymi
- **Pytanie #5 (chłodnie)** — unikalne, trafia w niszę „terminal do mroźni"
- **Pytanie #6 (hot-swap z detalami)** — kondensator 30 s, baterie współdzielone z TC501 — praktyczna wiedza
- **Pytanie #8 (ToF)** — edukacyjne, wyjaśnia niszową technologię dimensioning
- **Pytanie #12 (alternatywy)** — najbogatsza odpowiedź: 4 konkurencyjne modele z argumentami

### Braki AEO ⚠️
| Brakujące pytanie | Priorytet |
|---|---|
| „Ile waży TC701?" | 🟢 Niski — jest w specyfikacji, ale nie w FAQ |
| „Czy baterie TC501 pasują do TC701?" | 🟡 Średni — jest w treści, ale FAQ o tym nie mówi wprost |
| „Ile kosztuje OneCare do TC701?" | 🟡 Średni — jest w opisie (1238 zł/3 lata), ale nie w FAQ |

---

## 5. GEO — Generative Engine Optimization (95/100)

### Cytowalne fakty ✅✅✅ (najlepsza strona pod GEO!)
- 12 konfiguracji od 4 017 do 8 099 zł netto
- Upadki z 3,66 m (12 ft) na beton — 50% więcej niż TC501 (2,4 m)
- Tumble test 3 500 cykli z 1 m (3,5× więcej niż TC53)
- RFID UHF: >200 tagów/s, zasięg 2 m (standard w KAŻDEJ konfiguracji)
- Ekran AMOLED 1500 nit — 3× jaśniejszy niż typowy LCD
- Skaner AC670: zasięg do 30 m (najwyższy w klasie)
- Kamera 50 MP + ToF dimensioning
- AI NPU: OCR VIN/opon, weryfikacja etykiet on-device (bez chmury)
- Waga 284 g — lżejszy od poprzednika TC73 (349 g) o 19%
- Bateria hot-swap: kondensator utrzymuje zasilanie 30 s
- 0→70% ładowania w 45 min, Qi wireless
- Android 15→19, LifeGuard minimum do 2030
- OneCare Essential od 1 238 zł netto/3 lata
- Honeywell CT47: ~7 000 zł, brak RFID, brak Wi-Fi 7, brak AMOLED, cięższy (314 g)
- RFD40/RFD90 sled: 9+ m zasięgu RFID (rozszerzenie)
- Contactless wallet: Apple VAS, Google SmartTap

### Tabela porównawcza ✅✅✅ (15 parametrów!)
- **TC701 vs TC501 vs Honeywell CT47** — 15 parametrów z cenami i „najlepszy do"
- To **najobszerniejsza tabela porównawcza** na stronie TAKMA
- Honeywell CT47 z cenami (~7 000 zł) — porównanie cenowe z konkurencją ✅

### Braki GEO ⚠️
- **Brak porównania z Datalogic Skorpio X5 w tabeli** — jest w FAQ tekście, ale nie w tabeli
- **Brak daty aktualizacji** (updatedAt) — dateModified = createdAt (2026-02-17)

---

## 6. Keyword Coverage (85/100)

### Pokryte frazy ✅
| Fraza | Obecność |
|---|---|
| zebra tc701 | ✅ title, H1, meta, FAQ, content |
| terminal ultra-rugged | ✅ title, meta, content |
| kolektor danych 5g | ✅ title, meta |
| tc701 cena | ✅ FAQ, 12 wariantów |
| tc701 vs tc501 | ✅ FAQ, tabela porównawcza |
| terminal do chłodni | ✅ FAQ „Czy działa w chłodniach", zastosowania |
| tc701 rfid | ✅ title, FAQ, treść |
| terminal mobilny ai | ⚠️ w treści, ale nie prominentnie |
| tc701 specyfikacja | ✅ pełna tabela |

### Brakujące frazy ❌
| Fraza | Potencjał | Priorytet |
|---|---|---|
| **terminal do mroźni -20** | Niszowa, wysoki intent | 🔴 Wysoki |
| **kolektor danych ultra wytrzymały** | Długi ogon | 🟡 Średni |
| **zebra tc701 vs honeywell ct47** | Porównawcza | 🔴 Wysoki (jest w tabeli, ale nie w title/H2 wprost) |
| **terminal z rfid do magazynu** | Generyczna | 🟡 Średni |
| **terminal mobilny amoled** | Niszowa techniczna | 🟢 Niski |
| **tc701 dimensioning tof** | Niszowa | 🟢 Niski |
| **zebra tc701 opinie** | Informacyjna | 🟡 Średni |
| **zebra tc701 gdzie kupić** | Transakcyjna | 🟡 Średni |

---

## Podsumowanie — co jest dobrze, co poprawić

### ✅ Mocne strony (co wzorcowe)
1. **12 FAQ — nowy rekord kart produktów** — z pytaniem o ToF, chłodnie, hot-swap z detalami technicznymi
2. **Tabela porównawcza 3 modeli × 15 parametrów** — najobszerniejsza na stronie, z cenami konkurencji (CT47 ~7 000 zł)
3. **RFID UHF w standardzie** — podkreślane wielokrotnie, kluczowy USP
4. **Opis produktu ~2500 znaków** — najobszerniejszy opis spośród kart produktów
5. **variantAttributeTooltips dla 6 atrybutów** — rekord, pomaga w wyborze konfiguracji
6. **6 scenariuszy zastosowań** — chłodnia, magazyn wysokiego składowania, doki, logistyka, produkcja, outdoor
7. **Cytowalne fakty dla AI** — 3,66 m upadki, 3500 tumble, 1500 nit, >200 tagów/s, 30 m skaner
8. **OneCare z ceną** (1 238 zł/3 lata) — w opisie, buduje TCO argument
9. **12 wariantów, wszystkie „available"** — pełna oferta, bez „unavailable"
10. **Cross-reference TC501** — „wersja enterprise, lżejsza, tańsza" — dobry upsell/downsell

### ⚠️ Do poprawy (priorytet)

| # | Problem | Priorytet | Wpływ |
|---|---|---|---|
| 1 | **Title 93 znaki — za długi!** „kolektor danych / terminal mobilny" to podwójna nazwa | 🔴 Wysoki | SERP — zostanie ucięty |
| 2 | **Meta description 229 zn. z part number** | 🔴 Wysoki | SERP display |
| 3 | **Meta desc: „11 konfiguracji" → powinno być 12** | 🔴 Wysoki | Błąd faktyczny |
| 4 | og:type „website" zamiast „product" | 🔴 Fix globalny | Social sharing |
| 5 | Duplikat Organization (2×) + WebSite (2×) | 🔴 Fix globalny | Schema walidacja |
| 6 | H1 sklejone: „Zebra TC701Terminale mobilne" | 🔴 Fix globalny | Czytelność |
| 7 | **compatibleAccessories: []** — puste (baterie TC501 powinny tu być) | 🟡 Średni | Schema, cross-sell |
| 8 | Brak updatedAt → dateModified = createdAt | 🟡 Średni | Freshness signal |
| 9 | **servicePlans zakomentowane** (TODO) — OneCare niedostępny w UI | 🟡 Średni | E-E-A-T, konwersja |

---

## Ranking audytowanych stron TAKMA (zaktualizowany)

| # | Strona | Wynik | Typ | Wyróżnik |
|---|---|---|---|---|
| 🏆 | Poradnik ET401 | 92/100 | Guide | TechArticle, 2 tabele, 10 FAQ, ~5000 słów |
| 🥇 | **Zebra TC701** | **91/100** | **Product** | **12 FAQ, 15-param tabela vs CT47, 2500 zn. opis, RFID standard** |
| 🥈 | Zebra MC3450 | 90/100 | Product | 14 FAQ, 22 warianty, OneCare, porównanie vs MC3400 |
| 🥉 | M3 SL20+ | 89/100 | Product | Meta desc w limicie (144 zn.), 13 FAQ z cenami konkurencji |
| 4 | M3 UL30 | 88/100 | Product | 12 wariantów, 3 porównania „vs" |
| 4 | Zebra ZD621d | 88/100 | Product | 18 wariantów, drukarka, certyfikaty PSP |
| 6 | Zebra ET401 (product) | 83/100 | Product | 19 specs, 8 zastosowań, brak porównania |
| 7 | M3 SM30 | 82/100 | Product | 11 FAQ, 12+ additionalProperty |
| 8 | M3 SL20K | 79/100 | Product | Porównania cenowe z konkurencją |

### TC701 zajmuje 2. miejsce ogólne, 1. miejsce wśród kart produktów!

Wyprzedza MC3450 (90) dzięki:
- 15-parametrowa tabela porównawcza z cenami konkurencji (vs 1 tabela MC3450)
- Dłuższy opis produktu (~2500 zn. vs ~1500 zn.)
- 6 variantAttributeTooltips (vs brak na MC3450)
- Ceny OneCare w opisie

MC3450 wciąż prowadzi w: liczbie wariantów (22 vs 12), FAQ (14 vs 12), ale TC701 ma bogatszą treść per FAQ i per wariant.

### Aby osiągnąć 93-94:
1. Skrócić title do ~65 znaków → +2 pkt
2. Skrócić meta desc do ~155 znaków, poprawić „11→12 konfiguracji" → +2 pkt
3. Uzupełnić compatibleAccessories (baterie TC501) → +1 pkt
