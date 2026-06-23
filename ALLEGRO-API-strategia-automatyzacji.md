# Allegro REST API — strategia automatyzacji ofert dla TAKMA

**Data**: 3 czerwca 2026
**Cel**: zautomatyzowanie wystawiania i synchronizacji materiałów eksploatacyjnych Zebra (etykiety DT, TT, taśmy) na Allegro
**Stan obecny**: brak automatyzacji — produkty w repo (`src/data/*.ts`), brak integracji z Allegro

---

## 1. Skala problemu — co konkretnie automatyzujemy

**Realna liczba SKU TAKMA z trzech kategorii** (z poprzednich audytów + plików data w repo):

| Kategoria | Liczba serii | Wariantów rozmiarowych | Razem SKU |
|---|---|---|---|
| Etykiety termiczne (DT) | 12 | od 1 (Z-Essentials 500D, 8000D Jewelry) do 216 (Z-Perform 1000D) | ~580 |
| Etykiety termotransferowe (TT) | 16 | od 4 do ~100 per seria (papierowe, foliowe, specjalne) | ~980 |
| Taśmy termotransferowe | 12 | od 4 (Zebra 3300) do 25 (Zebra 2300 Wax) | ~260 |
| **Razem** | **40** | — | **~1 820 SKU** |

Plus inne kategorie sklepu (drukarki, terminale, czytniki, etc.) — łącznie sklep ma kilka tysięcy SKU. Ten dokument zajmuje się **wyłącznie materiałami eksploatacyjnymi** (~1 820 SKU).

**Kluczowy fakt biznesowy**: materiały eksploatacyjne to **powtarzalna sprzedaż** (klient kupuje raz, potem co miesiąc nową rolkę). Allegro to świetny kanał dla pierwszego zakupu — tani CAC, łatwy onboarding. Dla powtarzalnych zakupów klient częściej przechodzi na takma.com.pl bezpośrednio. Dlatego automatyzacja powinna **maksymalizować widoczność na Allegro** (więcej ofert = więcej pierwszych zakupów) bez zwiększania obsługi ręcznej.

---

## 2. Co umożliwia Allegro REST API (najważniejsze fakty)

**Adres API**: `https://api.allegro.pl`
**Sandbox testowy**: `https://api.allegro.pl.allegrosandbox.pl` (osobne konta, osobna rejestracja aplikacji)
**Format**: REST + JSON, HTTPS
**Autoryzacja**: OAuth 2.0 (Authorization Code Grant lub Client Credentials)
**Limity**: 9 000 zapytań na minutę per Client ID + dodatkowe limity Leaky Bucket per user

**Najważniejsze endpointy do tego projektu**:

| Endpoint | HTTP | Co robi |
|---|---|---|
| `POST /sale/product-offers` | POST | Tworzy ofertę powiązaną z produktem z katalogu Allegro |
| `GET /sale/categories` | GET | Pobiera drzewo kategorii Allegro |
| `GET /sale/matching-categories` | GET | Sugeruje kategorię dla nazwy produktu (np. "Z-Perform 1000D") |
| `GET /sale/categories/{id}/parameters` | GET | Pobiera obowiązkowe parametry dla kategorii (np. "Marka", "Rozmiar etykiety") |
| `GET /sale/products` | GET | Wyszukuje produkty w katalogu Allegro (po GTIN, nazwie) |
| `POST /sale/product-proposals` | POST | Proponuje dodanie nowego produktu do katalogu Allegro (gdy GTIN nie istnieje) |
| `PUT /sale/offers/{id}` | PUT | Aktualizuje ofertę (cena, ilość, opis) |
| `PATCH /sale/product-offers/{id}` | PATCH | Częściowa aktualizacja (sama cena lub samo stan magazynowy) |
| `DELETE /sale/offers/{id}` | DELETE | Usuwa draft (aktywne oferty się "kończy", nie usuwa) |
| `GET /order/checkout-forms` | GET | Pobiera zamówienia (do synchronizacji z systemem TAKMA) |

**Wzorzec Command**: dla operacji asynchronicznych (np. grupowa edycja 500 ofert) Allegro używa `commandId` — wysyłasz polecenie, sprawdzasz status po jakimś czasie. Konieczne dla wsadowych operacji.

**Sandbox**:
- Osobne konto Allegro testowe (`allegro.pl.allegrosandbox.pl`)
- Osobna rejestracja aplikacji
- Te same limity co produkcyjne
- Raz na kwartał Allegro czyści dane Sandboxa — testowe oferty kasowane

---

## 3. Trzy ścieżki wdrożenia — porównanie

### Ścieżka A — Custom integracja (Node.js w istniejącym repo Next.js TAKMA)

**Co budujemy**:
- Worker Node.js synchronizujący `src/data/*.ts` → Allegro API
- Skrypt CLI do jednorazowego wystawienia (`npm run allegro:publish`)
- Cron job do dziennej synchronizacji cen i stanów magazynowych
- Webhook handler dla zamówień (przychodzące z Allegro)

**Architektura**:

```
src/data/*.ts (12 DT + 16 TT + 12 taśm = ~1820 SKU)
  ↓
allegro-sync/
  ├── auth.ts        (OAuth 2.0 token management)
  ├── mapper.ts      (TAKMA product → Allegro offer struct)
  ├── publisher.ts   (POST /sale/product-offers)
  ├── updater.ts     (PATCH ceny/stany)
  └── orders.ts      (poll GET /order/checkout-forms)
  ↓
Allegro REST API
```

**Plusy**:
- Pełna kontrola — możesz dokładnie kontrolować jak SKU TAKMA mapuje się na ofertę Allegro
- Jeden codebase — wszystko w repo `takma` (Next.js + worker)
- Brak abonamentu miesięcznego (tylko prowizje Allegro od sprzedaży)
- Dane produktowe (specyfikacje, atesty, ceny) zostają w jednym źródle: repo TAKMA

**Minusy**:
- **Czas wdrożenia: 3-4 tygodnie pełnej pracy** (1 deweloper, z testami w sandboxie)
- Trzeba utrzymywać (Allegro zmienia API ~2 razy w roku — wersjonowanie metod)
- Brak gotowych integracji z kurierami, fakturowaniem, magazynem — wszystko trzeba dorobić
- Brak monitoringu (sami musicie ogarniać błędy 422/429)

**Koszt jednorazowy**: 12 000 - 20 000 zł netto (3-4 tyg. pracy seniora Node.js przy stawce 150-200 zł/h)
**Koszt miesięczny**: ~0 zł (poza prowizjami Allegro)

### Ścieżka B — Base.com (dawniej BaseLinker), gotowy integrator

**Co budujemy**: praktycznie nic kodowo. Logujesz się do Base.com, podpinasz konto Allegro, importujesz produkty (z CSV, XML lub przez API), klikasz "wystaw na Allegro".

**Co Base.com daje out of the box**:
- Wystawianie ofert na Allegro (Polska + zagraniczne Allegro CZ/SK/HU)
- Synchronizacja stanów magazynowych w czasie rzeczywistym
- Repricer (automatyczna zmiana cen pod konkurencję)
- Manager zamówień z marketplace
- Integracja z kurierami (InPost, DPD, DHL, GLS)
- Automatyczne fakturowanie
- Manager produktów ze zdjęciami, parametrami, tłumaczeniami
- Wystawianie wielowariantowe (ważne — TAKMA ma 216 wariantów Z-Perform 1000D!)
- Asystent Pakowania
- 2000+ gotowych integracji (sklepy, hurtownie, ERP)

**Cennik (czerwiec 2026)**:

| Plan | Koszt | Limity | Dla TAKMA? |
|---|---|---|---|
| **Freemium** | 0 zł/mies | 100 zamówień/mies, 1 000 produktów | **Nie pasuje** — TAKMA ma 1 820 SKU samych materiałów |
| **Business** | **149 zł netto + 0,79 zł netto/zamówienie** | Nielimitowane produkty/zamówienia | **Tak** — przy 200 zamówieniach/mies to **307 zł netto/mies** |
| **Enterprise** | Indywidualna wycena | >5 000 zamówień lub >1 mln zł GMV/mies | Tylko gdy TAKMA przekroczy próg |

**Plusy**:
- **Wdrożenie 1-2 tygodnie** vs 3-4 tygodnie custom
- Wszystkie integracje (Allegro + kurierzy + fakturowanie + sklep) w jednym panelu
- Profesjonalne wsparcie 24/7 (plan Business)
- 14 dni darmowy test pełnej funkcjonalności
- Repricer często zwraca koszt abonamentu w 1 miesiącu (automatyczne dopasowanie cen pod konkurencję)
- Automatyczne aktualizacje API Allegro (Base.com śledzi zmiany za Was)

**Minusy**:
- **Miesięczny koszt 200-500 zł netto** zamiast jednorazowego
- Dane produktowe muszą być w Base.com (drugie źródło prawdy obok repo TAKMA) — chyba że spinasz przez API
- Możliwość uzależnienia operacyjnego od zewnętrznego dostawcy
- Synchronizacja repo TAKMA ↔ Base.com wymaga dodatkowej integracji (export XML/CSV lub API)

**Koszt jednorazowy**: 0-3 000 zł (konfiguracja, import danych — przez Was albo płatne wsparcie wdrożeniowe Base.com)
**Koszt miesięczny**: ~150-500 zł netto (zależy od wolumenu zamówień)

### Ścieżka C — Hybrydowo (Base.com dla operacji + custom integration dla synchronizacji repo)

**Co budujemy**:
1. **Base.com** zajmuje się wystawieniem na Allegro, zamówieniami, kurierami, fakturowaniem (operacyjnie)
2. **Custom skrypt w repo TAKMA** wysyła dane produktowe i ceny z `src/data/*.ts` do Base.com przez ich API
3. **Repo TAKMA pozostaje pojedynczym źródłem prawdy** dla danych produktowych

**Architektura**:

```
src/data/*.ts (źródło prawdy)
  ↓ codzienny cron job
Base.com API (import produktów + cen + stanów)
  ↓
Allegro REST API (zarządzane przez Base.com)
  ↓
Zamówienia ↓
Base.com Manager Zamówień + integracje kurierskie
  ↓ webhook
Notyfikacja dla TAKMA (e-mail / Slack)
```

**Plusy**:
- **Najlepsze z dwóch światów** — dane w repo TAKMA, operacje w Base.com
- Wdrożenie 1-2 tyg. (Base.com setup) + 3-5 dni (skrypt sync repo→Base.com)
- Dane produktowe nie duplikują się — zawsze jedno źródło
- Profesjonalna obsługa operacji (Base.com zarządza zmianami API Allegro)
- Skalowalność — jutro dodajesz drukarki, terminale, czytniki bez przepisywania logiki Allegro

**Minusy**:
- Wymaga **trochę kodowania** (skrypt sync repo→Base.com) i **trochę konfiguracji** Base.com
- 2 systemy do monitorowania (repo + Base.com)
- Pełen koszt Base.com (200-500 zł/mies)

**Koszt jednorazowy**: 3 000-6 000 zł (skrypt sync + konfiguracja Base.com)
**Koszt miesięczny**: 150-500 zł netto

---

## 4. Rekomendacja dla TAKMA — Ścieżka C (hybrydowa)

**Dlaczego Ścieżka C, a nie A albo B**:

**Przeciwko Ścieżce A (custom)**:
- Zbyt drogie wdrożenie (12-20 tys.) i utrzymanie. Dla 1 820 SKU + zamówień + zwrotów + zmian API Allegro to zbyt duże obciążenie.
- Wymyślilibyście od zera coś, co Base.com robi dobrze za 150-500 zł/mies.
- TAKMA jako firma B2B z drukarkami — wasze kompetencje są w produkcie, nie w integracjach marketplace. Nie warto budować tej kompetencji w domu.

**Przeciwko Ścieżce B (czysty Base.com)**:
- Dane produktowe muszą być w dwóch miejscach: repo TAKMA (dla sklepu takma.com.pl) + Base.com (dla Allegro). To prowadzi do desynchronizacji, błędów w opisach, niespójnych cen.
- Tracicie kontrolę nad źródłem prawdy.

**Za Ścieżką C (hybrydowa)**:
- **Repo TAKMA pozostaje jedynym źródłem prawdy** — bardzo cenne strategicznie. Wszystkie audyty SEO/AEO, opisy techniczne, atesty — w `src/data/*.ts`.
- **Base.com zarządza tym, co operacyjne** — zamówienia, kurierzy, fakturowanie, aktualizacje API Allegro.
- **Skrypt sync `repo → Base.com`** to 3-5 dni pracy seniora — nie 3-4 tygodnie pełnej integracji Allegro.
- **Skalowalność** — kiedy w przyszłości dodacie drukarki/terminale do Allegro, ten sam pipeline obsłuży nowe kategorie bez zmian.

---

## 5. Roadmapa wdrożenia ścieżki C — 3 fazy

### Faza 1 — Pilotaż (tydzień 1-3)

**Cel**: 10 wybranych SKU w sandboxie Allegro przez Base.com, walidacja procesu.

| # | Zadanie | Czas | Odpowiedzialny |
|---|---|---|---|
| 1 | Założenie konta deweloperskiego Allegro (`apps.developer.allegro.pl`) | 30 min | Kuba |
| 2 | Rejestracja aplikacji w sandboxie + uzyskanie Client ID i Secret | 30 min | Kuba |
| 3 | Test 14-dniowy Base.com (rejestracja, podpięcie konta Allegro testowego) | 2-3 dni | Kuba |
| 4 | Ręczne wystawienie 5 ofert w Base.com sandbox (np. Zebra 2300 Wax, Z-Perform 1000D 100×150) | 1 dzień | Kuba |
| 5 | Sprawdzenie czy 5 ofert pojawia się w sandbox Allegro z prawidłowymi parametrami | 30 min | Kuba |
| 6 | Decyzja: kontynuujemy z Base.com czy szukamy alternatywy | 1 dzień | Kuba |

**Koszt fazy 1**: 0 zł (sandbox + Base.com free trial)
**Czas**: 1-3 tyg. (z 14-dniowym testem)

### Faza 2 — Skrypt synchronizacji repo → Base.com (tydzień 4-6)

**Cel**: automatyczna codzienna synchronizacja `src/data/*.ts` → Base.com.

Konkretne zadania:

1. **Mapowanie struktur**: `ThermalLabelSeries` (z repo) → format produktu Base.com. Obejmuje rozmiary wariantów, ceny, opisy, zdjęcia, parametry (atesty BfR XIV, FDA, BS5609, UL).
2. **Skrypt Node.js w repo TAKMA** (`scripts/sync-baselinker.ts`):
   - Czyta `src/data/thermal-label-series.ts`, `transfer-label-series.ts`, `transfer-ribbon-series.ts`
   - Konwertuje na format Base.com (przez ich API — endpoint `addInventoryProduct`)
   - Aktualizuje istniejące produkty (jeśli zmieniła się cena lub opis)
   - Loguje zmiany do pliku audytowego
3. **Cron job** uruchamiający skrypt raz dziennie (np. o 4:00 rano)
4. **Mapowanie kategorii Allegro** — przez `GET /sale/matching-categories` Allegro znajdujemy właściwe kategorie i zapisujemy w pliku mapowania:
   - "etykiety termiczne" → kategoria Allegro `Drukarki i etykiety > Etykiety samoprzylepne` (do uzupełnienia)
   - "taśmy termotransferowe" → kategoria Allegro odpowiednia
5. **Identyfikacja po SKU TAKMA** — Base.com używa pola `sku` (numer materiału RM z kart Zebra: `05311RM` dla Z-Select 2000D, `10026927RM` dla Z-Essentials 500D, `05095BK08305` dla Zebra 5095 Resin)

**Koszt fazy 2**: 3 000-5 000 zł netto (3-5 dni pracy seniora Node.js)
**Czas**: 2-3 tyg.

### Faza 3 — Wystawienie na produkcję + monitoring (tydzień 7-10)

**Cel**: 1 820 SKU na żywym Allegro, codzienna synchronizacja, obsługa zamówień przez Base.com.

| # | Zadanie | Czas |
|---|---|---|
| 1 | Rejestracja aplikacji produkcyjnej Allegro + token OAuth | 1 dzień |
| 2 | Przepięcie skryptu sync z sandbox na produkcję | 1 dzień |
| 3 | Wystawienie pierwszej partii ~50 SKU (4 modele Z-Perform 1000D × 12 rozmiarów + 5 modeli taśm) | 1 dzień |
| 4 | Walidacja — czy oferty się wyświetlają, parametry, zdjęcia, opisy | 2 dni |
| 5 | Wystawienie pozostałych ~1 770 SKU | 3-5 dni (rate limit Allegro!) |
| 6 | Konfiguracja w Base.com: kurierzy (InPost/DPD/DHL/GLS), automatyczne fakturowanie, repricer | 2 dni |
| 7 | Pierwsze zamówienia testowe (kupić własną etykietę z testowego konta) | 1 dzień |
| 8 | Monitoring: ustawienie alertów na błędy synchronizacji | 1 dzień |

**Koszt fazy 3**: ~3 000 zł netto (czas seniora + ewentualne wsparcie Base.com)
**Czas**: 3-4 tyg.

**Łączny czas**: 7-10 tyg. wdrożenia
**Łączny koszt jednorazowy**: 6 000-8 000 zł netto
**Koszt operacyjny**: ~200-500 zł netto/mies (Base.com plan Business)

---

## 6. Pułapki i ważne ostrzeżenia

### 6.1 GTIN — czy Zebra ma GTIN-y dla wszystkich SKU

Z analizy repo: w `data` files są pola typu `gtin` lub `numer materiału (RM)`, np. **05311RM** dla Z-Select 2000D, **10026927RM** dla Z-Essentials 500D. **To NIE są GTIN-y/EAN-y** — to numery materiałowe Zebry. Allegro wymaga GTIN dla identyfikacji produktu w katalogu.

**Trzy ścieżki**:

1. **Sprawdzić u dystrybutora Zebra** — większość etykiet i taśm Zebra ma GTIN-13 zdefiniowany na poziomie producenta. Trzeba o niego prosić.
2. **Stworzyć nowy produkt w katalogu Allegro** (przez `POST /sale/product-proposals`) — Allegro pozwala dodać produkt bez GTIN, ale wymaga akceptacji moderatorów (24-72h).
3. **Wystawić ofertę bez katalogu Allegro** — możliwe ale ograniczone (mniejszy zasięg w wyszukiwarce Allegro, niższa pozycja w listingach).

**Praktycznie**: pierwsze 50-100 SKU wystawcie metodą "produkt bez katalogu" żeby ruszyć szybko, równolegle zbierajcie GTIN-y od Zebry. Po 3-6 miesiącach migrujcie do produktów z GTIN.

### 6.2 Prowizja Allegro od sprzedaży

Allegro pobiera prowizję od sprzedaży zależną od kategorii. Dla "Drukarki i etykiety / Etykiety samoprzylepne" prowizja typowa to **5-8% wartości netto**.

Plus opłata za wystawienie (zwykle 0 zł w kategorii podstawowej) + opcjonalne promowanie ofert.

**Praktycznie**: marża TAKMA na materiałach eksploatacyjnych musi być **co najmniej 15-20%** żeby kanał Allegro był zyskowny po prowizji. Sprawdź marżowość przed wystawieniem.

### 6.3 Zarządzanie wariantami (216 wariantów Z-Perform 1000D)

Allegro pozwala wystawiać **oferty wielowariantowe** — jedna oferta z 216 wariantami (różne rozmiary) zamiast 216 osobnych ofert. To rekomendowane:

- Mniejsza opłata za wystawienie (1 oferta vs 216)
- Lepsze pozycjonowanie w wynikach Allegro
- Łatwiejsze zarządzanie (jedna oferta = jeden punkt aktualizacji)

Base.com wspiera oferty wielowariantowe natywnie — to **standard rynkowy**.

### 6.4 Synchronizacja stanów magazynowych

**Kluczowe**: TAKMA prowadzi sklep takma.com.pl z własnym magazynem. Wystawienie na Allegro to **drugi kanał sprzedaży** dla tego samego stanu magazynowego.

Bez synchronizacji ryzyko: ktoś kupuje na Allegro produkt, który już sprzedaliście przez sklep — musicie odwołać zamówienie Allegro (negatywna ocena, kara od Allegro za niezrealizowanie zamówienia).

**Base.com synchronizuje stany w czasie rzeczywistym** między sklepem (Next.js/Sanity/itp.) a Allegro — to argument **kluczowy** za hybrydą.

### 6.5 Konkurencja na Allegro

**Sprawdziłem wcześniej** (w researchu Ahrefs): w SERP-ach Allegro dla "etykiety termiczne 100x150" konkurują głównie chińskie Xprintery + drobni dystrybutorzy. **TAKMA z markowymi etykietami Zebra ma silną pozycję cenową w premium segmencie** — to atut, nie wada.

ALE — Allegro też zawiera oferty samej **Zebry przez innych autoryzowanych partnerów** w Polsce (BCmarket, agbit, scanter, elmatech). Konkurencja w segmencie premium jest. Repricer Base.com automatycznie dopasowuje ceny pod konkurencję — ważna funkcja.

---

## 7. Pierwsza akcja — co zrobić TERAZ (15 minut)

**Krok 1**: Załóż konto deweloperskie Allegro
- Wejdź na **https://apps.developer.allegro.pl** (sandbox: `https://apps.developer.allegro.pl.allegrosandbox.pl`)
- Zaloguj się swoim kontem Allegro TAKMA (jeśli już sprzedajesz na Allegro)
- Jeśli nie — załóż konto firmowe Allegro Standard (Firma) — wymagane NIP i KRS
- Zarejestruj aplikację: nazwa "TAKMA Sync", typ "Aplikacja po stronie klienta z odpowiednim zabezpieczeniem"

**Krok 2**: Włącz 14-dniowy darmowy test Base.com
- Wejdź na **https://base.com/pl-PL/rejestracja**
- Załóż konto firmowe TAKMA
- W panelu Base.com dodaj integrację "Allegro" → wpisz swoje dane konta Allegro
- W panelu Base.com dodaj 1-3 produkty ręcznie (np. 5 wariantów Zebra 2300 Wax)
- Spróbuj wystawić te produkty na Allegro przez Base.com (w trybie nieaktywnym, żeby przetestować bez sprzedaży)

**Krok 3**: Decyzja po 14 dniach
- Jeśli Base.com działa intuicyjnie i obsługuje TAKMA dane bez problemów → przechodzimy do Fazy 2 (skrypt sync repo → Base.com)
- Jeśli są blokery (np. wymagane parametry Allegro których nie mamy, problemy z kategoriami) → reevaluation, ewentualnie wracamy do custom (ścieżka A)

---

## 8. Alternatywy które rozważyłem ale odrzuciłem

| Rozwiązanie | Dlaczego odrzuciłem |
|---|---|
| **IAI Shop / Selly / Subiekt nexo** | ERPy zorientowane na małe sklepy — duża narzut, niska elastyczność. Cena 300-800 zł/mies + wymagana migracja sklepu z Next.js |
| **Sky-Shop / Shoper integracja** | TAKMA nie ma sklepu na Shoperze — musielibyście przenosić cały sklep |
| **Allegro własna integracja w Sanity / Strapi CMS** | TAKMA nie używa CMS — repo jest źródłem prawdy |
| **Marketplaceintegracje typu Channable, Marketplacers** | Drogie (od 5 000 zł/mies), zbędne dla skali ~1 800 SKU |
| **Allegro Excel / CSV upload** | Allegro tego nie wspiera oficjalnie (Allegro tylko API + ręczne wystawianie w panelu) |

---

## 9. Streszczenie strategiczne

**Co zrobić**: hybrydę — Base.com (Business plan, ~200-500 zł/mies) jako warstwa operacyjna + skrypt Node.js (`scripts/sync-baselinker.ts`) synchronizujący `src/data/*.ts` → Base.com.

**Dlaczego**: repo TAKMA pozostaje pojedynczym źródłem prawdy, Base.com zarządza zmianami API Allegro i operacją (kurierzy, fakturowanie, repricer), TAKMA inwestuje 6-8 tys. zł netto jednorazowo zamiast 12-20 tys. w pełną custom implementację.

**Kiedy zaczynać**: TERAZ (15-minutowa pierwsza akcja w sekcji 7). 14-dniowy test Base.com bez zobowiązań — decyzja "go/no-go" za 2 tygodnie.

**Co dalej**: jeśli decyzja "go" → 3 fazy wdrożenia przez 7-10 tygodni → produkcja na pełnych 1 820 SKU + zamówienia + kurierzy + fakturowanie w jednym panelu Base.com.

**Spodziewany ROI**:
- **Wzrost przychodu z kanału Allegro o 30-100%** (zależy od marży i pricingu) w pierwszych 6 mies. od pełnego wdrożenia
- **Oszczędność czasu pracownika** — Base.com ogarnia operację, zamówienia automatycznie → faktury → wysyłka → potwierdzenia. Ręczna obsługa redukowana z ~10h/tydz. do ~2h/tydz. (alerty, wyjątki)
- **Zwrot inwestycji**: 6-12 mies. zależnie od wolumenu sprzedaży na Allegro

---

## 10. Pytania, które jeszcze warto rozważyć

1. **Czy sprzedaż na Allegro nie kanibalizuje takma.com.pl?**
   Częściowo tak — klienci poznają TAKMA przez Allegro, drugi raz kupują bezpośrednio. To **zysk netto** (Allegro = lead generation B2C → B2B konwersja).

2. **Czy Zebra ma wymagania co do kanałów sprzedaży?**
   Autoryzowani partnerzy Zebra (TAKMA) mogą mieć ograniczenia w MAP (minimum advertised price) lub kanałach (np. zakaz sprzedaży poniżej ceny detalicznej). Sprawdzić warunki partnerskie z Zebrą zanim ustawicie ceny niższe niż konkurencja.

3. **Czy automatyzować też kategorię drukarek?**
   Po wdrożeniu materiałów eksploatacyjnych — naturalna ekspansja na drukarki (60 modeli), terminale (40 modeli), czytniki (30 modeli). Ten sam pipeline w Base.com obsłuży to bez zmian. Plan długoterminowy.

4. **Czy Sklep TAKMA i Allegro mają identyczne ceny?**
   Praktyka rynkowa: ceny na Allegro są zwykle **5-10% wyższe** (uwzględniają prowizję Allegro). Albo: takie same ceny, ale Allegro pokrywa wysyłkę bezpłatnie (Smart!).

---

**Następny krok**: zrób 15-minutową pierwszą akcję z sekcji 7. Po niej (najpóźniej za tydzień) możemy razem przygotować konkretną dokumentację mapowania `src/data/*.ts` → format Base.com (3-5 dni pracy programisty).
