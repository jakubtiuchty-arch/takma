# Akcesoria terminali Bluebird — poprawki zgodności z kartami producenta (24.10.2026)

Dokument roboczy, nie jest treścią dla klientów. Zakres: tablica `bluebirdAccessories` w `src/data/bluebird-products.ts` (79 kart). Podstawa: audyty A1 (pozycje 0–39) i A2 (pozycje 40–78) z 24.10.2026, wykonane na stanie 6daa476c. Raporty z cytatami źródeł: `scratchpad/audyt-opisy/raport-A1-bluebird-akcesoria.md`, `raport-A2-bluebird-akcesoria.md`.

## 1. Wprowadzone poprawki

### A1 (pozycje 0–39)

| ID | Karta, pole | Zmiana |
|---|---|---|
| A1-01 | `602010012`, `shortDescription` | Przywrócone zastrzeżenie: z S20 tylko podstawowa stacja `204010086` pracuje z 9 V / 3 A. |
| A1-02 | `602010013`, `shortDescription` | Przywrócone zastrzeżenie: z S20 tylko podstawowa stacja `204020037` pracuje z 9 V / 10 A. |
| A1-03 | `204010094`, `description` | Ten sam zasilacz 9 V / 3 A co stacje 1-gniazdowe EF551 i EK430 oraz podstawowa stacja S20 (`204010086`), a nie „stacje S20” ogólnie. |
| A1-04 | `602020024`, `description` | Usunięta sugestia, że tablet wymaga dokupienia zasilacza i kabla. Tablety T30 i T10 mają zasilacz i kabel w zestawie. |
| A1-05 | `602010041`, `603010005`, `description` | Dopisane, że T30 i T10 mają własny zasilacz i kabel w zestawie; zasilacz służy jako zapasowy. |
| A1-06 | `355040100`, `applications` | „Lokalizowanie zgubionych terminali” → „Lokalizowanie i monitorowanie baterii zapasowych” (BLE jest w baterii, nie w funkcji „find lost device”). |
| A1-07 | `355040070`, `description` | „litowo-jonowa” → „litowo-polimerowa” według karty EF551 z 2026 r. (decyzja głównej sesji). |

### A2 (pozycje 40–78)

| ID | Karta, pole | Zmiana |
|---|---|---|
| A2-01 | `624010031`, `description` | Usunięte „tylko” przy przypisaniu szkła do S70. |
| A2-02 | `355040073`, `seoDescription`, `shortDescription`, `description`, spec „Ładowanie” | Czas ładowania poniżej 5 h dotyczy ładowania w terminalu z szybkim ładowaniem. |
| A2-03 | `355040087`, `seoDescription`, `description` | Usunięte napięcie 3,85 V (wyliczone, nie ma go w źródłach). |
| A2-04 | `210120014` (opis, SEO), `210120016` (opis), `210120014/015/016/004/005` (`applications`) | Zamiast „wolnych rąk”: terminal na przedramieniu, nie trzeba go trzymać w dłoni. `applications` z nazwą modelu: „Kompletacja z terminalem S20 na przedramieniu” itd. Zdanie 016 napisane inaczej niż w raporcie, bo propozycja z raportu dawała wspólny 6-gram z kartą 015. |
| A2-05 | `351120049`, `description`, `seoDescription` | Bez podkładki w stacjach 1- i 4-gniazdowych S20 (nie we wszystkich stacjach S20). Zdanie przeredagowane, żeby nie powtarzało 6-gramu z kartą osłony S10. |
| A2-06 | `624010029`, `624010031`, `624010040`, `624010017`, `624010018`, `description` | Usunięta ochrona przed rysami. Szkła: drobne uderzenia i upadki. Folia 017: chroni ekran. 018: usunięte zdanie o rysach. Zdanie 040 napisane inaczej niż 029, żeby nie było wspólnego 6-gramu. |
| A2-07 | `624010018`, `seoDescription` | Usunięta „matowa” i „rysy”; brzmienie inne niż w raporcie, żeby nie powtarzało SEO karty 017. |
| A2-08 | `624010029`, `624010031`, `624010040`, `624010041` (spec, opis, SEO) | „chusteczka” → „chusteczki z alkoholem”. |
| A2-09 | `210080024`, `seoDescription` | Spust połączony z terminalem przez tylne złącze (spust jest w rękojeści). |
| A2-10 | `351120049`, `351120042` (`applications`), `626010007` (opis, `applications`), `626010005` (`applications`) | Bez „pracy w terenie” i „podpisów”: ochrona przed skutkami upadków; obsługa ekranu dotykowego. |

### STYL

| ID | Karty | Zmiana |
|---|---|---|
| A1 S-01 | 19 stacji: `204010058`, `204010059`, `204010063`, `204010064`, `204010078`, `204010079`, `204010080`, `204010081`, `204010086`, `204010094`, `204020019`, `204020022`, `204020023`, `204020028`, `204020029`, `204020030`, `204020031`, `204020037`, `204020041` | Zdanie „Zasilacz łączy się z gniazdkiem przez przewód zasilający EU.” zastąpione na każdej karcie innym zdaniem z danymi tej stacji (napięcie i prąd zasilacza, przewód 14948). |
| A1 S-02 | `602010012`, `602010013`, `602010025`, `602010035` | „Przewód nie jest dołączony do zasilacza.” napisane inaczej na każdej karcie. |
| A1 S-03 | `355040070` | „Baterię wymienia się bez wyłączania EF551.” Karta `355040097` zostaje bez zmian (po zmianie zdanie nie jest już wspólne). |
| A1 S-04 | `602010024` | „Ładowarka jest przeznaczona do terminali EF551 i EK430 oraz smartfona SF650.” |
| A2-11 | `626010005` | „Rysik współpracuje z ekranami EF551, EK430 i SF650.” |

Dlaczego zdanie pod blokiem „Wymagane” zostało zastąpione, a nie usunięte: regex w `RequiredAccessories.tsx` (`getRequiredAccessories`) i w `src/lib/accessory-navigation.ts` wymaga pustego wiersza i tekstu po ostatniej liście. Bez zdania na końcu opisu ostatni blok („Wymagane dla terminala … bez osłony rugged boot”) przestałby się wyświetlać. Zdanie zostaje widoczne pod nagłówkiem „Co jest potrzebne do użycia?” jak przedtem.

Kontrola bloku „Wymagane”: parsowanie opisów regexem z `getRequiredAccessories` przed i po zmianie daje te same pozycje na 43 kartach (99 pozycji) w `bluebird-products.ts` i `bluebird-tablet-products.ts`.

## 2. Ustalenia celowo bez zmian

- **Uwagi U-1–U-6 z raportu A1** (poza liczbą ustaleń):
  - U-1, podkładka stacji EF551 sprzedawana osobno (`204010058`, `204010059`, `204020019`): zgodnie z decyzją z `audit.md` §12. Jarltech wymienia podkładkę wśród wymagań („requires 1x Shim for EF440/EF551”), a nie w „order separately”. Do potwierdzenia u Jarltech, czy podkładka jest w zestawie.
  - U-2, `602010041` a zasilacz 5 V / 2 A w przewodniku EF551 z 2022 r.: bez sprzeczności, bez zmian.
  - U-3, „2 × Ethernet” w `204020029` i `204020031`: liczba złączy tylko według Jarltech („2x Ethernet”); przewodniki podają „Supports Ethernet Connection (1Gbps)”. Bez zmian.
  - U-4, RFR900 w stacjach S20, S50 i S70: potwierdzone kartą S20 i Part Name stacji.
  - U-5, stacje S10 bez wzmianki o RFR: niski priorytet, bez zmian.
  - U-6, forma „Ty” w `src/lib/required-accessory-copy.ts`: wspólny komponent sklepu, poza zakresem (brief: bez zmian).
- **Kwestia otwarta z A2, pierścień spustu EF551 a złącze 10-pin** (`210120004`, `210120005`): przewodnik EF551 (2022) podaje „Requires Standard / Extended Battery Cover (with 10-pin connector)”. Karta EF551 wymienia „Rear 10-pin connector” jako standardowe złącze. Bez zmian; do potwierdzenia u Jarltech przy pierwszym zamówieniu.
- **A1-04 i A1-05, „kabel USB-C”**: w opisach wpisano „kabel”, nie „kabel USB-C”. Zestaw T30 ma kabel USB-C (Quick Guide), a karta T10 podaje tylko „USB Cable”.
- **Zdanie „Zasilacz, wtyczka i kabel nie są dołączone do terminala.”** na 7 kartach terminali: tablica `bluebirdProducts` jest poza zakresem tej poprawki.

## 3. Sprzeczności źródeł

- **Typ ogniwa baterii EF551 `355040070`**: karta EF551 (EF551_EN_260714, 2026) podaje „Rechargeable Li-Polymer”, przewodnik akcesoriów EF551 (2022) „Li-Ion 3.85V/4350mAh”. Przyjęto kartę katalogową (nowsza, wyższa w hierarchii źródeł).
- **Szkło `624010031`**: przewodnik S50 (s. 17) podaje ten PN jako szkło do S50, a `audit.md` §5 przypisuje je do S70. Zostaje przypisanie do S70, bez słowa „tylko”.
- **Osłona S20 `351120049`**: przewodnik podaje 1,6 m, karta S20 1,8 m. Bez wysokości upadku w opisie (decyzja §5 i §10).
- **Podkładka EF551**: Jarltech („requires”) a decyzja „sprzedawana osobno” (§12) — patrz U-1.

## 4. Samokontrola

- `python3 -I porownaj-opisy.py src/data/bluebird-products.ts --prefiks=bluebird- --kategoria=akcesoria`: liczba par z powtórzeniami przed i po zmianie — `description` 101 → 98, `shortDescription` 23 → 23, `seoDescription` 56 → 56, `faq` 0 → 0. Pozostałe pary to nazwy produktów w linkach i listy modeli. Jedyna nowa wspólna fraza to lista modeli „tablety Bluebird T30 i Bluebird T10” (`602010041`, `602020024`, `603010005`).
- Zdania pod blokami „Wymagane” (skrypt ich nie sprawdza, bo obcina opis na „## Co jest potrzebne”) sprawdzone osobno: brak identycznych zdań na kartach akcesoriów; wspólne 6-gramy to tylko parametry zasilacza („zasilacz 9 V / 3 A”).
- `npx tsc --noEmit`: 215 błędów przed zmianą i po niej, te same (żaden w plikach danych Bluebird).
- `npm run build` bez błędów; `next start -p 3162`: 33 zmienione strony (karty akcesoriów i tabletów, `/tablety-bluebird`, `/llms.txt`) zwracają 200, w HTML są nowe sformułowania, a starych błędnych nie ma.
- Boks „Wymagane” porównany z produkcją (stan 6daa476c): `204020037`, `204010086`, `204010063`, `602010012` oraz `getac-stacja-biurkowa-gdodxc` i `newland-nls-mcd9557-1cc` — ten sam nagłówek, opis i pozycje.
