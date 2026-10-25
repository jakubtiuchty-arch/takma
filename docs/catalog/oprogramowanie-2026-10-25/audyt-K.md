# Audyt K — przegląd kodu licencji oprogramowania (25.10.2026)

Gałąź `audyt/licencje-k` z `integracja/oprogramowanie` (23c1387b). Zakres: zmiany kodu L3 i koordynatora względem
`origin/claude/takma-frontend-build-RrM9E` (`src/lib`, `src/app`, `src/components`, `src/actions`, `scripts`,
`src/middleware.ts`) oraz zadanie dodatkowe koordynatora „0 zł za licencje” (decyzja właściciela z 25.10).
Dokumentacji L3 nie przyjmowałem na wiarę — każdy punkt sprawdzony w kodzie, testach albo na zbudowanej stronie.
Ceny, marża i progi dostawy dla sprzętu bez zmian.

## Ustalenia

| ID | Plik / obszar | Było | Jest | Uzasadnienie | Kategoria |
|---|---|---|---|---|---|
| K-01 | `src/lib/licencje.ts`, `src/lib/licencje-katalog.ts`, `src/actions/checkout.ts` | Dostawa z kwoty przysłanej przez koszyk (25 zł netto poniżej 1000 zł) także dla samych licencji | `czyTylkoLicencje` + `dostawaZamowienia`: koszyk z samymi licencjami e-mailem → `shippingNetto = 0` na serwerze (P24, pro forma, zamówienie w bazie); koszyk mieszany i sam sprzęt — kwota jak dotąd | Decyzja właściciela „0 zł za licencje”; kwotę rozstrzyga serwer, maile/admin/wydruk/PDF czytają `order.shippingNetto` (0 → „Gratis” / brak wiersza dostawy) | zadanie dodatkowe |
| K-02 | `src/app/zamowienie/page.tsx` | `isFreeShipping = suma ≥ 1000` | `tylkoLicencje \|\| suma ≥ 1000` (ta sama funkcja co serwer, rozpoznanie po karcie i PN); w kroku 2 boks „Dostawa 0 zł · Licencja elektroniczna — kod e-mailem” zamiast „Darmowa dostawa”; podpowiedź „brakuje do darmowej dostawy” znika | Kasa pokazuje tę samą kwotę, którą zapisze serwer | zadanie dodatkowe |
| K-03 | `src/components/rfq/RFQDrawer.tsx` | Pasek „Do darmowej dostawy brakuje …” także przy samych licencjach | Zielony boks „Dostawa 0 zł · Licencja elektroniczna — kod e-mailem”, gdy każda pozycja ma `electronicLicense` z `/api/stock` | Szuflada nie ładuje `products.ts` (4 MB, każda podstrona) — licencję rozpoznaje po odpowiedzi API; test pilnuje, że każdy PN karty licencji dostaje regułę | zadanie dodatkowe |
| K-04 | `src/app/produkt/[slug]/SmartPrice.tsx` | Karta licencji: „Dostawa darmowa / kurier w cenie od 1000 zł netto” albo „Dostawa 25 zł netto · brakuje …” + pasek; nad nim zielona kropka z tym samym tekstem licencji | Ten sam wiersz dostawy (obramowanie, `text-xs`): „Dostawa **0 zł**” · „Licencja elektroniczna — kod e-mailem”, bez paska progu; zdublowana linia w sekcji stanów usunięta | Polecenie koordynatora; ten sam układ co wiersz darmowej dostawy, bez nowych wzorców | zadanie dodatkowe |
| K-05 | `src/app/api/merchant-feed/route.ts` | Licencje bez `g:shipping` — Google stosuje stawki kuriera z konta | `<g:shipping>` PL 0.00 PLN dla kart z `licenseDelivery` | Spójność kosztu dostawy w Zakupach Google z kasą; sprzęt bez zmian | zadanie dodatkowe |
| K-06 | Reguła dostępności (`unified-stock.ts`, `licencje-katalog.ts`, `product-stock.ts`, `catalog-live.ts`) | — | bez zmian | Dla PN spoza kart licencji/na zapytanie `zastosujRegulyLicencji` nic nie zmienia; `jestNaStanie` = dawny warunek `stockPL + stockDE > 0`, gdy brak `electronicLicense`. Dziś jedynymi PN „na zapytanie” są edycje oprogramowania (BarTender Enterprise, Cloud Enterprise, Loftware Business). Wszystkie ścieżki odpowiedzi (`cache`, `live`, `mixed`) nakładają reguły; ścieżka ręcznych stanów nie zawiera PN licencji; zapis do StockCache idzie z surowych danych (obiekty budowane przed regułami) | OK |
| K-07 | Istniejące karty `quoteOnly` (4× CipherLab cOS, Bluebird T40 Ultra) | — | bez zmian | Nie mają PN (ani wariantów, ani „Part Number”), więc reguły API/feedów ich nie dotyczą. Widoczna zmiana L3: przycisk „Zapytaj o cenę” zamiast „Zapytaj o produkt” (desktop i pasek mobilny), pasek mobilny nie pokazuje koszyka w czasie ładowania — zgodne z opisem pola („konfigurację wyceniamy po zapytaniu”) | OK (uwaga) |
| K-08 | Cena w boksie i na kaflu (`SmartPriceContext.tsx`, `ProductCard.tsx`) | — | bez zmian | 11 wariantów-dodatków rozpoznanych (`BTP-PRT-*`, `BTA-PRT-*`, `BTE-PRT-*`, `BTC-ENT-PRT-*`, `NSCDAD001Y`, `NSCEAO001M`, `NSCEDB001M`, `NSCEPH001M`, `NSCBSA001M`), żaden wariant podstawowy nie jest błędnie dodatkiem; boks i kafel biorą najtańszą licencję podstawową, wariant `quoteOnly` nie daje ceny; dodatek z kafla do koszyka nie trafia (pierwszy wariant każdej karty to licencja podstawowa) | OK |
| K-09 | JSON-LD karty (`page.tsx`) | — | bez zmian | `AggregateOffer.lowPrice` obejmuje dodatki (np. BarTender Professional: 390,09 zł „dodatkowa drukarka” przy cenie w boksie 1129,22 zł). Spójne z tabelą wariantów, ale fragment z ceną „od” w Google może pokazać cenę dodatku — do decyzji właściciela (wykluczenie dodatków z `offers` albo zostawienie) | niepewne |
| K-10 | `src/lib/catalog-live.ts` (`withLiveCatalogData`) | — | bez zmian | Komentarz mówi „ta sama reguła co ProductCard”, ale funkcja nie pomija dodatków ani wariantów `quoteOnly`. Dziś nie działa na kartach oprogramowania (używana tylko w kategoriach POS, RFID, akcesoriach i `/katalog` dla akcesoriów) — ryzyko przy przyszłym włączeniu cen na żywo dla `/programy-do-etykiet` | ryzyko |
| K-11 | Kasa: licencjobiorca (`zamowienie/page.tsx`, `actions/checkout.ts`) | — | bez zmian | Serwer odrzuca pozycje na zapytanie (obejście przez fałszywy `quoteNumber` blokuje `applyQuotePricing`), wymaga firmy i e-maila licencjobiorcy (także gdy z przeglądarki przyjdzie wartość innego typu), dopisuje wiersz na początek uwag bez gubienia uwag klienta; firma jest w kasie polem obowiązkowym, więc opcja „Takie same jak dane zamawiającego” zawsze przechodzi walidację serwera. Koszyk mieszany: dane licencjobiorcy wymagane, dostawa jak dla sprzętu | OK |
| K-12 | Odczyt i escapowanie `customerNotes` | — | bez zmian | Admin (React), e-maile (`esc`), wydruk (`esc`), pro forma HTML (`escapeHtml`), PDF (tekst), panel klienta (React) — brak XSS. Uwagi zwykłego zamówienia zaczynające się od „Dane licencjobiorcy — firma: …” admin zobaczy jako boks licencjobiorcy — bez skutków | OK |
| K-13 | Komunikaty błędów server action | — | bez zmian | W produkcji Next 14 treść wyjątku z server action może dotrzeć do klienta jako ogólny komunikat (wzorzec sprzed zmian, dotyczy też ofert). Kasa sprawdza pozycje na zapytanie i pola licencjobiorcy przed wysłaniem, więc przypadki z wyjątkiem serwera wymagają zmienionego koszyka | uwaga (sprzed zmian) |
| K-14 | Zaufanie do koszyka (sprzed zmian) | — | bez zmian | Serwer przyjmuje z koszyka ceny pozycji spoza ofert i kwotę dostawy dla sprzętu; `/api/checkout/proforma` wysyła maile z kwotami od klienta; strażnik pozycji na zapytanie rozpoznaje kartę po `productSlug` z koszyka. Poza zakresem audytu — po K-01 dostawa licencji jest rozstrzygana na serwerze | uwaga (sprzed zmian) |
| K-15 | Feedy Merchant / Ceneo | — | bez zmian (poza K-05) | Reguły licencji na wierszach StockCache, pozycje na zapytanie pominięte, licencja z ceną przechodzi mimo stanu 0. Karty `oprogramowanie` nie mają mapowania kategorii Google (Google klasyfikuje sam) — opcjonalnie 313 „Oprogramowanie komputerowe” | OK |
| K-16 | `docs/catalog/oprogramowanie-2026-10-25/L3.md` | „kurier 30 zł netto” | — | Stała `SHIPPING_COST_NETTO` = 25 zł netto; po K-01 koszyk z samymi licencjami ma 0 zł | uwaga (dokumentacja) |
| K-17 | Regulamin (`src/app/regulamin/page.tsx`) | — | bez zmian | Zasady dostawy w regulaminie nie wspominają licencji elektronicznych (0 zł, kod e-mailem) — treść do decyzji właściciela | uwaga (treść) |

## Testy

- `node scripts/test-licencje.cjs` — OK; dopisany blok 11: koszyk z samymi licencjami → 0 zł (także gdy koszyk przysłał 25 zł),
  koszyk mieszany i sam sprzęt → kwota bez zmian, pusty koszyk i pozycja bez karty nie są „samymi licencjami”,
  każdy PN karty licencji dostaje regułę `electronicLicense` (warunek zgodności szuflady z kasą).
- `node scripts/test-ceny-pochodne.cjs`, `test-accessory-navigation`, `test-ingram-brother-tj`, `test-ingram-partial-batch`,
  `test-newland-mt95-pro-iii`, `test-newland-stock`, `test-rfid-labels`, `test-tenders`, `test-warehouse-sizes`,
  `test-zebra-terminal-prices` — OK.
- Nie startują identycznie na produkcji (`origin/claude/takma-frontend-build-RrM9E`, 670ecc34) i na tej gałęzi — ten sam
  błąd w obu: `test-accessory-catalog`, `test-catalog-accessory-filters`, `test-magicard-offer`, `test-part-number-search`,
  `test-zd421t-offers` (TypeError: `map` na `undefined`), `test-newland-accessories` (760 ≠ 23),
  `test-required-accessory-copy` (brak modułu `@/lib/product-image-frame` w harnessie), `test-stock-on-order-jarltech`
  (niezamockowany `@/lib/ceny-pochodne`). Żaden nie dotyczy zmian L3 ani tego audytu.
- `npx tsc --noEmit` — 0 błędów; `npx next build` — OK.

## Wydajność (rozmiar strony / First Load JS, `next build`)

| Strona | Produkcja (670ecc34) | Integracja (23c1387b) | Audyt K |
|---|---|---|---|
| `/produkt/[slug]` | 92,9 kB / 1,78 MB | 93,4 kB / 1,79 MB | 93,4 kB / 1,80 MB |
| `/zamowienie` | 14,7 kB / 1,64 MB | 15,7 kB / 1,66 MB | 15,5 kB / 1,66 MB |
| `/katalog` | 33,5 kB / 1,70 MB | 33,5 kB / 1,72 MB | 33,5 kB / 1,72 MB |
| `/oprogramowanie` | 2,46 kB / 153 kB | 2,46 kB / 154 kB | 2,46 kB / 154 kB |
| `/programy-do-etykiet` | — | 166 B / 157 kB | 167 B / 157 kB |
| `/` | 7,77 kB / 153 kB | 7,76 kB / 153 kB | 7,76 kB / 153 kB |
| wspólne dla wszystkich | 87,7 kB | 87,7 kB | 87,7 kB |

Kod L3 nie dokłada katalogu do nowych miejsc: `lib/licencje.ts` (komponenty klienta) importuje tylko typ `Product`;
`licencje-katalog.ts` (import `products.ts`) trafia do `unified-stock`, feedów i akcji kasy — wszystkie te moduły
już ładowały katalog (strona kasy importuje `products.ts` od dawna). Middleware dostał tylko prefiksy slugów.
Przyrost First Load JS kart i kasy wynika z danych nowych kart w `products.ts`, nie z kodu reguł.
Szuflada koszyka (każda podstrona) nadal nie ładuje katalogu.

## Sprawdzenie na zbudowanej stronie

`npx next build` + `npx next start -p 3306` (lokalnie `/api/stock` zwraca 500 — brak bazy; szuflada sprawdzona z podmienionym
w przeglądarce `fetch` dla `/api/stock`, wiersze jak po regułach licencji). Bez składania zamówienia, bez logowania.

- Karta BarTender Professional (1440 px) i Loftware Cloud Designer (390 px): boks ceny — cena, brutto, wiersz
  „Dostawa **0 zł** · Licencja elektroniczna — kod e-mailem” w jednej linii, bez paska progu i bez zdublowanej linii;
  390 px: szerokość dokumentu 390 px (bez poziomego przewijania).
- Karta sprzętu (Zebra ZD220d): wiersz „Dostawa 25 zł netto · darmowa od 1000 zł · brakuje 350 zł” bez zmian.
- Szuflada z samą licencją (1440 px: BarTender Professional 1129,22 zł; 390 px: BarTender Starter 751,44 zł, poniżej progu):
  zielony boks „Dostawa 0 zł · Licencja elektroniczna — kod e-mailem” zamiast „Do darmowej dostawy brakuje …”.
- Kasa, krok 1 i 2: sama licencja (także 200 zł netto, poniżej progu) — „Dostawa: Gratis”, razem = netto × 1,23,
  bez podpowiedzi o progu; krok 2 — boks „Dostawa 0 zł · Licencja elektroniczna — kod e-mailem” i sekcja
  „Dane licencjobiorcy”. Licencja + ZD220d: 1778,99 zł → „Gratis” (jak dotąd), 849,77 zł → „25,00 zł” i podpowiedź
  „brakuje 150,23 zł” (jak dotąd).
