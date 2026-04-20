# Audyt SEO / AEO / GEO + Słowa kluczowe — M3 UL20

**Strona:** `https://www.takma.com.pl/produkt/m3-ul20`
**Data audytu:** 2026-04-01
**Plik źródłowy:** `src/data/products.ts` (linie 52198–52600+)

---

## 1. AUDYT SEO

### 1.1 Title tag

| Parametr | Wartość |
|---|---|
| Obecny | `M3 UL20 — terminal gun z klawiaturą, 5" FHD, IP67 \| TAKMA` |
| Długość | **~57 znaków** |
| Zalecana | 50–60 znaków |

**Ocena: DOBRZE.** Mieści się w limicie, zawiera nazwę produktu, typ urządzenia i kluczowe parametry. Jedyny zarzut: brak frazy **„kolektor danych"**, która jest jednym z najczęściej wyszukiwanych synonimów terminala mobilnego w Polsce (patrz sekcja 4 — Słowa kluczowe).

**Rekomendacja (opcjonalna, jeśli zmieści się w limicie):**
```
seoTitle: 'M3 UL20 — kolektor danych gun z klawiaturą | IP67, 5" FHD | TAKMA'
```

### 1.2 Meta description

| Parametr | Wartość |
|---|---|
| Obecna | *M3 UL20 — terminal gun z klawiaturą 28/35/53 kl., 5" FHD, SE4750/SE4850/SE5800, IP67, bateria 6700 mAh. Wersja Freezer (−30°C), 4G LTE. Zamów w TAKMA.* |
| Długość | **~152 znaki** |
| Zalecana | 120–160 znaków |

**Ocena: DOBRZE.** Mieści się w limicie, zawiera kluczowe parametry i CTA. Techniczne parametry (SE4750, SE4850) mogą być niezrozumiałe dla mniej technicznego odbiorcy, ale w tej niszy to prawdopodobnie OK.

**Drobna poprawa — dodać cenę (Google uwielbia ceny w meta):**
```
seoDescription: 'M3 UL20 — terminal gun z klawiaturą 28/35/53 kl., 5" FHD, IP67, bateria 6700 mAh. Od 4 920 zł netto. Freezer (−30°C), 4G LTE. Zamów w TAKMA.'
```

### 1.3 Struktura nagłówków

**H1:** `M3 UL20` — krótki, zwięzły.

**Problem (umiarkowany):** H1 zawiera tylko nazwę modelu bez jakiegokolwiek kontekstu. Google lepiej rozumie stronę, gdy H1 zawiera przynajmniej typ urządzenia: *„M3 UL20 — terminal mobilny gun z klawiaturą"*. Jednak w przypadku stron produktowych krótki H1 z nazwą modelu jest dopuszczalny, bo kontekst daje reszta strony.

**H2 (sekcje strony produktowej):**
1. Kluczowe parametry
2. Dostępne warianty
3. Opis produktu
4. Specyfikacja techniczna
5. Zastosowania
6. Porównanie M3 UL20 z następcą UL30 i konkurencją
7. Najczęściej zadawane pytania
8. Akcesoria
9. Podobne terminale

**Ocena: BARDZO DOBRZE.** Czysta, logiczna hierarchia. H2 „Porównanie" i „FAQ" to mocne sekcje pod kątem SEO.

**H3 w sekcji porównania:** M3 UL20, M3 UL30, Zebra MC3400, M3 SL20K — poprawne, nazwy modeli jako H3.

**H3 w sekcji FAQ:** Każde pytanie to H3 — poprawne semantycznie.

### 1.4 Obrazy

| Parametr | Wartość |
|---|---|
| Łączna liczba obrazów | **15** |
| Obrazy bez alt | **0** |
| Obrazy produktu (galeria) | 4 (z deskryptywnymi `imageDescriptions`) |
| OG Image | **Ustawiony** ✅ (`/images/products/m3-ul20-1.png`) |

**Ocena: DOBRZE.** Wszystkie obrazy mają alt, OG image ustawiony. Opisy galerii (`imageDescriptions`) zawierają kluczowe parametry (*„ekran 5" FHD"*, *„klawiatura numeryczna"*, *„obudowa gun"*) — doskonałe.

**Drobna uwaga:** Pliki obrazów to `.png` — warto rozważyć konwersję na WebP dla szybszego ładowania (szczególnie jeśli nie ma tego już w pipeline Next.js Image Optimization).

### 1.5 Linkowanie

| Typ | Ilość | Ocena |
|---|---|---|
| Linki wewnętrzne | **46** | Bardzo dobrze |
| Linki zewnętrzne | **0** | **Problem** |

**Problem:** Identycznie jak w audycie wpisu o Foresight — brak jakichkolwiek linków zewnętrznych. Opis produktu wspomina skanery Zebra SE4750/SE4850/SE5800, systemy MDM (SOTI, M3 Speedpack), WMS (SAP EWM, Oracle WMS, Comarch WMS, Subiekt GT) — ale do żadnego nie linkuje.

W przypadku strony produktowej to mniejszy problem niż w artykule poradnikowym, ale wciąż warto dodać 1–2 linki:
- Link do oficjalnej strony M3 Mobile (producent)
- Link do datasheet PDF M3 UL20 (jeśli dostępny)

### 1.6 Open Graph

| Parametr | Wartość | Ocena |
|---|---|---|
| og:title | `M3 UL20 — terminal gun z klawiaturą, 5" FHD, IP67` | OK |
| og:description | Zawiera cenę „Od 4920 zł netto" | Dobrze |
| og:image | Ustawiony | ✅ |
| og:type | **`website`** | **Błąd** |
| og:url | Ustawiony poprawnie | OK |
| canonical | Ustawiony poprawnie | OK |

**Problem: `og:type` powinien być `product`, nie `website`.** Dla strony produktowej poprawny typ OG to `product` — pozwala on na dodatkowe meta-tagi OG jak `product:price:amount`, `product:price:currency`.

**Rekomendacja:** W `generateMetadata` w `page.tsx` zmienić:
```typescript
openGraph: {
  type: 'website',  // ← zmienić na:
  type: 'article',  // lub lepiej obsługiwać 'product' (Next.js nie obsługuje natywnie og:type product, ale można to dodać ręcznie)
}
```

### 1.7 Dane techniczne SEO — podsumowanie

| Parametr | Stan | Ocena |
|---|---|---|
| Title | ~57 zn., OK | 7/10 |
| Meta description | ~152 zn., OK | 8/10 |
| Canonical | ✅ | 10/10 |
| OG Image | ✅ | 10/10 |
| og:type | ❌ `website` zamiast `product` | 4/10 |
| H1 | Krótki, tylko nazwa modelu | 6/10 |
| Struktura H2/H3 | Czysta hierarchia | 9/10 |
| Obrazy (alt) | 15 img, 0 bez alt | 10/10 |
| Link. wewnętrzne | 46 | 9/10 |
| Link. zewnętrzne | 0 | 2/10 |

### 1.8 Wynik SEO

| Kategoria | Ocena |
|---|---|
| Title + Meta | 7.5/10 |
| Technikalia (canonical, OG) | 7/10 |
| Nagłówki | 8/10 |
| Obrazy | 9.5/10 |
| Treść (description, FAQ, specyfikacja) | 9/10 |
| Linkowanie | 5.5/10 |
| **SEO łącznie** | **7.8/10** |

---

## 2. AUDYT AEO (Answer Engine Optimization)

### 2.1 Dane strukturalne (JSON-LD)

| Schema | Obecna? | Poprawność | Komentarz |
|---|---|---|---|
| Product | ✅ | Dobra | name, brand, sku, mpn, image, description, offers |
| AggregateOffer | ✅ | Dobra | lowPrice: 4920, highPrice: 6800, offerCount: 34, priceCurrency: PLN |
| BreadcrumbList | ✅ | Dobra | — |
| WebPage | ✅ | — | — |
| FAQPage | ✅ | Dobra | 11 pytań |
| Organization | ✅ | — | Globalna |
| AggregateRating | ❌ | Brak | Brak recenzji/ocen |
| GTIN | ❌ | Brak | Pole `gtin13` nie jest ustawione |

**Problemy:**

1. **Brak `gtin13` / `gtin`** — Google coraz mocniej waży GTIN (EAN) w Product schema. Jeśli M3 Mobile udostępnia kody EAN dla wariantów, warto je dodać. Bez GTIN Google może nie wyświetlić rich snippet cenowego.

2. **Brak `aggregateRating`** — strona nie ma systemu recenzji. To nie jest blokujące, ale strony z gwiazdkami mają o 20–30% wyższy CTR w SERP. Warto rozważyć dodanie mikro-systemu ocen lub przynajmniej importu recenzji z Google Business Profile.

3. **`description` w Product schema jest bardzo krótki (~102 znaków)** — Google preferuje 200–500 znaków w `description` schematu Product. Warto wykorzystać `shortDescription` lub skrócony `description` z products.ts.

### 2.2 FAQ — jakość (11 pytań)

| Pytanie | Typ | Ocena |
|---|---|---|
| Jakie warianty klawiatury oferuje M3 UL20? | Feature | Dobrze — konkretne, technicze |
| Jaka jest różnica między M3 UL20W, UL20F i UL20X? | Porównanie | Doskonałe — to dokładne zapytanie zakupowe |
| Czym różni się M3 UL20 od nowszego M3 UL30? | Porównanie | Doskonałe — z linkiem do UL30 |
| Jakie skanery są dostępne w M3 UL20? | Feature | Dobrze |
| Czy akcesoria M3 UL20 pasują do UL30? | Kompatybilność | Dobrze — praktyczne pytanie migracyjne |
| Czy M3 UL20F nadaje się do pracy w mroźni? | Zastosowanie | Doskonałe — branżowe |
| Ile kosztuje M3 UL20? | Cena | Doskonałe — z konkretnymi cenami |
| Do jakich branż nadaje się M3 UL20? | Zastosowanie | Dobrze |
| Jakie systemy WMS i ERP obsługuje M3 UL20? | Integracja | Doskonałe — wymienia konkretne systemy |
| Co to są modele UL20 FX? | Feature | Dobrze |
| Gdzie kupić M3 UL20 w Polsce? | Zakup | Doskonałe — lokalne SEO + CTA |

**Ocena: 9/10** — imponująca liczba i jakość pytań. Pokrywają cały funnel zakupowy: od researchu (parametry, porównania), przez decyzję (cena, branże), po zakup (gdzie kupić).

**Brakujące pytanie (1 sugestia):**
- *„Jak długo M3 UL20 będzie wspierany (aktualizacje Android)?"* — to kluczowe pytanie przy wyborze terminala enterprise; odpowiedź mogłaby podkreślić przewagę UL30.

### 2.3 Tabela porównawcza

Sekcja „Porównanie M3 UL20 z następcą UL30 i konkurencją" zawiera 4 modele (UL20, UL30, MC3400, SL20K) — doskonała pod kątem featured snippet typu table. Dane porównawcze obejmują ekran, klawiaturę, skaner, IP, upadki, baterię, NPU AI, Android, cenę.

**Problem:** Tabela porównawcza w kodzie jest renderowana jako komponent React (nie surowy `<table>` HTML) — warto zweryfikować, czy Google poprawnie ją parsuje. Jeśli jest renderowana jako `<table>` w DOM — OK.

### 2.4 Podsumowanie AEO

| Kategoria | Ocena |
|---|---|
| Product schema | 7/10 (brak GTIN, krótki description) |
| AggregateOffer | 9/10 |
| FAQ schema (11 pytań) | 9.5/10 |
| BreadcrumbList | 10/10 |
| AggregateRating | 0/10 (brak) |
| Tabela porównawcza | 8/10 |
| **AEO łącznie** | **7.3/10** |

---

## 3. AUDYT GEO (Generative Engine Optimization)

### 3.1 Klarowność encji

| Encja | Zdefiniowana? | Komentarz |
|---|---|---|
| M3 UL20 | ✅ Dobrze | Jasna definicja w pierwszym zdaniu opisu: „terminal magazynowy gun (kolektor danych)" |
| M3 Mobile | Częściowo | Wspomniane: „Korea, zał. 2000, producent enterprise terminali" — OK, ale krótko |
| Zebra SE4750 / SE4850 / SE5800 | ✅ | Wyjaśnione z zasięgami w tooltipach wariantów |
| M3 Speedpack MDM | Wspomniane | Brak definicji — AI nie wie, czym jest Speedpack |
| Gorilla Glass | Wspomniane | Bez wyjaśnienia — mało istotne, ale precyzja pomaga |
| Link-OS | Nieobecne | Nie dotyczy (to Zebra firmware, nie M3) |
| Android Enterprise | Wspomniane | Bez definicji |

**Rekomendacja:** Dodać 1 zdanie wyjaśniające M3 Speedpack MDM przy pierwszym użyciu — LLM-y cytują treści z dobrze zdefiniowanymi encjami.

### 3.2 Cytowalność

Artykuł ma konkretne, cytowalne fakty:
- *„IP67 i upadki z 2,0 m na beton"* — specyfikacja wytrzymałości
- *„Wersja UL20F Freezer działa od −30°C z podgrzewaniem ekranu i okna skanera"* — unikalna cecha
- *„Akcesoria UL20 i UL30 są w pełni kompatybilne"* — praktyczna informacja migracyjna
- Ceny od 4 920 zł do 6 800 zł netto — konkrety

**Problem:** Brak odniesień do zewnętrznych źródeł (datasheet producenta, certyfikaty IP67, testy wytrzymałości). LLM-y bardziej ufają treściom, które same cytują źródła.

### 3.3 Porównywalność z konkurencją

Sekcja porównawcza (UL20 vs UL30 vs MC3400 vs SL20K) jest **doskonała pod kątem GEO**. Gdy użytkownik pyta AI *„Jaki terminal gun do magazynu wybrać?"*, treść z porównaniem wielu modeli ma znacznie większą szansę na cytowanie niż opis jednego produktu.

**Brak:** Porównanie nie obejmuje konkurencyjnych produktów spoza portfolio TAKMA (np. Honeywell CK65, Datalogic Skorpio X5). Dodanie ich wzmocniłoby obiektywność i cytowalność (AI preferują treści „fair comparison").

### 3.4 Struktura pod ekstrakcję AI

| Element | Obecny? | Wpływ na GEO |
|---|---|---|
| Definicja produktu w 1. akapicie | ✅ „M3 UL20 to wytrzymały terminal magazynowy gun…" | Doskonałe |
| Specyfikacja tabelaryczna | ✅ 22 parametry | Doskonałe dla ekstrakcji |
| Lista zastosowań | ✅ 6 branż | Dobrze |
| FAQ z konkretnymi odpowiedziami | ✅ 11 pytań | Doskonałe |
| Porównanie z konkurencją | ✅ 4 modele | Doskonałe |
| Ceny wariantów | ✅ 34 warianty z cenami | Doskonałe |
| Author/publisher signal | ✅ TAKMA, partner M3 Mobile | Wiarygodność |
| Zewnętrzne cytowania | ❌ | Słabe |

### 3.5 Podsumowanie GEO

| Kategoria | Ocena |
|---|---|
| Entity clarity | 7/10 |
| Cytowalność | 7/10 |
| Porównywalność | 8/10 |
| Struktura pod ekstrakcję | 9/10 |
| Wiarygodność / źródła | 4/10 |
| **GEO łącznie** | **7.0/10** |

---

## 4. ANALIZA SŁÓW KLUCZOWYCH

### 4.1 Konkurencja w SERP

Strony polskie z kartami produktu M3 UL20:
- **ganeo.pl** — karta M3 UL20X
- **kreski.pl** — karta M3 UL20
- **bcmarket.pl** — karta M3 UL20W
- **netselekt.pl** — warianty UL20 z cenami
- **agc.com.pl** — M3 UL20X
- **grisbi.com.pl** — M3 UL20
- **omegaprint.pl** — kategoria M3 Mobile

Większość konkurentów ma krótkie, generyczne karty produktowe. Strona TAKMA ma **ogromną przewagę** dzięki: 11 FAQ, sekcji porównawczej, tooltipom wariantów, 34 wariantom z cenami i rozbudowanemu opisowi.

### 4.2 Pokrycie fraz kluczowych

| Fraza | Vol. (est.) | Obecna w title? | Obecna w H1? | Obecna w meta? | Obecna w treści? | Ocena |
|---|---|---|---|---|---|---|
| **M3 UL20** | Główna | ✅ | ✅ | ✅ | ✅ (wielokrotnie) | Doskonałe |
| **M3 UL20 cena** | Wysoki | ❌ | ❌ | ❌ | ✅ (FAQ) | OK — FAQ pokrywa |
| **M3 UL20W / UL20F / UL20X** | Średni | ❌ | ❌ | ❌ | ✅ (opis + FAQ) | OK |
| **M3 UL20 Freezer** | Średni | ❌ | ❌ | ✅ | ✅ | Dobrze |
| **terminal gun z klawiaturą** | Średni | ✅ | ❌ | ✅ | ✅ | Dobrze |
| **kolektor danych** | Wysoki | ❌ | ❌ | ❌ | ✅ (w opisie 1×) | **Za mało** |
| **kolektor danych M3** | Średni | ❌ | ❌ | ❌ | ✅ (1×) | **Za mało** |
| **terminal mobilny magazyn** | Wysoki | ❌ | ❌ | ❌ | ✅ (w opisie) | OK |
| **terminal przemysłowy z klawiaturą** | Średni | ❌ | ❌ | ❌ | ✅ (1×) | OK |
| **M3 UL20 vs UL30** | Niski | ❌ | ❌ | ❌ | ✅ (FAQ + porównanie) | Doskonałe |
| **M3 UL20 vs MC3400** | Niski | ❌ | ❌ | ❌ | ✅ (porównanie) | Dobrze |
| **M3 UL20 specyfikacja** | Niski | ❌ | ❌ | ❌ | ✅ (tabela 22 parametry) | Dobrze |
| **M3 UL20 akcesoria** | Niski | ❌ | ❌ | ❌ | ✅ (sekcja + 15 akc.) | Dobrze |
| **M3 Mobile terminal** | Średni | ❌ | ❌ | ❌ | ✅ (kilka razy) | OK |
| **SE4750 vs SE4850** | Niski | ❌ | ❌ | ❌ | ✅ (tooltip + FAQ) | Dobrze |
| **terminal do mroźni** | Średni | ❌ | ❌ | ❌ | ✅ | OK |
| **terminal WMS magazyn** | Średni | ❌ | ❌ | ❌ | ✅ | OK |

### 4.3 Kluczowe luki w słowach kluczowych

**1. Fraza „kolektor danych" — KRYTYCZNA LUKA**

To jeden z najpopularniejszych polskich synonimów terminala mobilnego. Wiele osób szuka „kolektor danych magazyn", „kolektor danych M3", „kolektor danych z klawiaturą". Fraza pojawia się tylko raz w opisie (*„terminal magazynowy gun (kolektor danych)"*), ale nie ma jej w title, meta, H1 ani shortDescription.

**Rekomendacja:** Dodać „kolektor danych" do `shortDescription`:
```
shortDescription: 'M3 UL20 — kolektor danych gun z klawiaturą 28/35/53 kl., 5" FHD, IP67, SE4750/SE4850/SE5800, bateria 6700 mAh'
```

**2. Fraza „M3 Mobile" w kontekście producenta**

Wiele osób szuka „terminale M3 Mobile" lub „M3 Mobile Polska". Nazwa producenta pojawia się w description, ale mogłaby być bardziej eksponowana — np. w breadcrumbie lub tagu.

**3. Frazy aplikacyjne — mało eksponowane**

Sekcja „Zastosowania" wymienia 6 branż, ale w formie listy `applications` — nie jako treść tekstowa. Warto rozbudować opis o 1–2 zdania kontekstu branżowego, np.: *„M3 UL20 z klawiaturą 53 kl. sprawdza się w systemach WMS wymagających ręcznego wpisywania kodów lokalizacji, ilości i numerów partii — np. SAP EWM, Comarch WMS czy Subiekt GT."*

### 4.4 Frazy do monitorowania (sugerowane)

**Priorytet wysoki (transakcyjne — kupujący):**
- `M3 UL20 cena`
- `M3 UL20 kupić`
- `M3 UL20 sklep`
- `kolektor danych M3 Mobile`
- `terminal gun z klawiaturą cena`

**Priorytet średni (porównawcze — decydenci):**
- `M3 UL20 vs MC3400`
- `M3 UL20 vs UL30`
- `terminal do mroźni -30`
- `terminal WMS z klawiaturą`
- `M3 UL20 Freezer cena`

**Priorytet niski (informacyjne — research):**
- `M3 UL20 specyfikacja`
- `M3 UL20 skaner SE4850 zasięg`
- `M3 UL20 Android wersja`
- `M3 UL20 akcesoria`
- `M3 Mobile partner Polska`

---

## 5. PODSUMOWANIE — PRIORYTETY NAPRAW

### Krytyczne

| # | Problem | Gdzie naprawić | Trudność |
|---|---|---|---|
| 1 | **Brak frazy „kolektor danych" w title/meta/H1** | `seoTitle`, `shortDescription` w products.ts | 5 min |
| 2 | **`og:type` = `website` zamiast `product`** | `generateMetadata` w `page.tsx` | 3 min |
| 3 | **Product schema `description` za krótki (~102 zn.)** | Schema generation w `page.tsx` — użyć dłuższego opisu | 5 min |
| 4 | **Zero linków zewnętrznych** | Dodać link do M3 Mobile i/lub datasheet | 10 min |

### Ważne

| # | Problem | Rekomendacja |
|---|---|---|
| 5 | Brak `gtin13` w Product schema | Dodać EAN-13 jeśli M3 Mobile je udostępnia |
| 6 | Brak `aggregateRating` | Rozważyć mikro-system ocen lub import z GMB |
| 7 | H1 = tylko „M3 UL20" bez kontekstu | Rozbudować do *„M3 UL20 — terminal gun z klawiaturą"* (opcjonalne) |
| 8 | Brak pytania FAQ o wsparcie Android | Dodać: *„Jak długo M3 UL20 będzie wspierany?"* |
| 9 | Brak definicji M3 Speedpack MDM | Dodać 1 zdanie przy pierwszym użyciu |

### Nice-to-have

| # | Problem | Rekomendacja |
|---|---|---|
| 10 | Obrazy w formacie PNG | Rozważyć WebP (jeśli Next.js Image nie robi tego automatycznie) |
| 11 | Brak porównania z konkurentami spoza TAKMA (Honeywell CK65, Datalogic Skorpio) | Dodać 1–2 modele konkurencji do tabeli porównawczej |
| 12 | Brak linku do datasheet PDF | Dodać downloadable PDF spec sheet (SEO + UX) |
| 13 | Cena w meta description | Dodać „Od 4 920 zł" do seoDescription (zwiększa CTR) |

---

## 6. WYNIK ZBIORCZY

| Obszar | Ocena | Waga | Wynik ważony |
|---|---|---|---|
| SEO | 7.8/10 | 35% | 2.73 |
| AEO | 7.3/10 | 25% | 1.83 |
| GEO | 7.0/10 | 20% | 1.40 |
| Słowa kluczowe | 7.0/10 | 20% | 1.40 |
| **RAZEM** | | | **7.36/10** |

**Strona produktowa M3 UL20 jest znacznie lepsza niż typowa karta produktowa w polskim e-commerce B2B.** 11 pytań FAQ, tabela porównawcza 4 modeli, 34 warianty z cenami, 22 parametry specyfikacji i rozbudowany opis to elementy, które konkurencja (GANEO, BCMarket, Kreski) po prostu nie ma.

Główne luki to: brak frazy „kolektor danych" w kluczowych lokalizacjach SEO, `og:type` = `website` zamiast `product`, za krótki `description` w schemacie Product i tradycyjny brak linków zewnętrznych.

Po naprawieniu 4 krytycznych problemów (20 min pracy) wynik podskoczy do ~8.5/10.
