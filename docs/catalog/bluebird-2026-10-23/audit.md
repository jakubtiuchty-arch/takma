# Terminale Bluebird w /terminale-bluebird — dokumentacja robocza (23.10.2026)

Dokument roboczy: źródła, konfiguracje PN, pominięte PN, rozbieżności, prefiks Ingram, akcesoria, zdjęcia i zmiany treści. Nie jest treścią dla klientów.

## 1. Źródła

- Karty katalogowe Bluebird (EN), pobrane ze stron modeli bluebirdcorp.com, hostowane lokalnie w `public/datasheets/`:
  - `bluebird-s10.pdf` (S10_EN_260709, 3,7 MB), `bluebird-s20.pdf` (S20_EN_260709, 3,1 MB), `bluebird-s50.pdf` (S50_EN_260806, 3,1 MB), `bluebird-s70.pdf` (S70_EN_260806, 2,8 MB), `bluebird-s70-explosion-protection.pdf` (S70 Explosion Protection_EN_260709, 3,8 MB), `bluebird-ef551.pdf` (EF551_EN_260714, 3,6 MB), `bluebird-ek430.pdf` (EK430_English_260904, 2,2 MB), `bluebird-sf650.pdf` (SF650_EN_260714, 299 KB).
  - `bluebird-s10-rfid.pdf` (S10RFID_EN, 382 KB) — karta S10 RFID nie ma odnośnika na stronie producenta w rozpoznaniu; pobrana z Jarltech (`/sites/default/files/documents/product/datasheet/en/S10RFID_EN.pdf`), dokument Bluebird.
- Przewodniki akcesoriów Bluebird (z numerami materiałowymi „Part #”), pobrane z Jarltech (`/sites/default/files/documents/product/accessory_guide/en/…`), hostowane lokalnie: `bluebird-s10-akcesoria.pdf`, `bluebird-s20-akcesoria.pdf`, `bluebird-s50-akcesoria.pdf`, `bluebird-s70-akcesoria.pdf`, `bluebird-ef551-akcesoria.pdf` (przewodnik EF551 z 2022 r. ma tylko kody opisowe, bez numerów materiałowych).
- Jarltech (opisy PN, zawartość zestawu, gwarancja 12 miesięcy): strony rodzin `https://www.jarltech.com/en/bluebird-<rodzina>`; ERS (UK) dla `EK430-ANLC`.
- Ceny i stany: `https://www.takma.com.pl/api/stock`, partie po 3 PN, każda partia 2 razy (drugie wywołanie uruchamia fallback Jarltech), 23.10.2026 ok. 20:30. 49 PN terminali i 84 PN akcesoriów; `found: false` tylko `355040102` (bateria BLE S50/S70) i `355040116` (bateria rozszerzona S10) — pominięte.
- Rozpoznanie: scratchpad sesji `bluebird/rozpoznanie.md` (parametry, przypisy, sprzeczności).

## 2. Karty i PN

Dostępność: stan > 0 → `available`; 0 i dostawa → `on-order`; 0/0 → `unavailable`. `priceFrom` = najniższa cena netto z API spośród PN karty (także niedostępnego, jak w całym sklepie). Kod wybiera wariant: `?pn=` → najtańszy dostępny z ceną → najtańszy z ceną.

| Karta | Slug | PN | Domyślny PN (wybór kodu) | Cena od (netto) | Stan karty |
|---|---|---|---|---|---|
| Bluebird S20 | bluebird-s20 | 4 | S20-ANLB (2 szt.) | 2 600,99 zł | available |
| Bluebird S50 | bluebird-s50 | 8 | S50-ANLB (5 szt.) | 6 052,74 zł | available |
| Bluebird S70 | bluebird-s70 | 9 | S70-ANLC (5 szt.) | 7 148,87 zł | available |
| Bluebird S70 Explosion Protection | bluebird-s70-explosion-protection | 1 | S70-A5LJWEX (0 szt.) | 13 609,39 zł | unavailable |
| Bluebird S10 | bluebird-s10 | 3 | S10-A4LCW (1 szt.) | 1 840,75 zł | available |
| Bluebird S10 RFID | bluebird-s10-rfid | 1 | S10-ANLJRW (0 szt.) | 4 000,21 zł | unavailable |
| Bluebird EF551 | bluebird-ef551 | 10 | EF551-ANLB (0 szt.) | 5 480,82 zł | unavailable |
| Bluebird EK430 | bluebird-ek430 | 11 | EK430-ANLC (0 szt.) | 4 813,58 zł | unavailable |
| Bluebird SF650 | bluebird-sf650 | 1 | SF650-A4LAW (0 szt.) | 1 509,21 zł | unavailable |

### Konfiguracje PN

**Bluebird S20**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| S20-ANLB | Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 2 600,99 zł | 2 | available |
| S20-ANLI | Łączność: Wi-Fi 6E, Pamięć: 8/128 GB | 3 139,92 zł | 10 | available |
| S20-A5LAW | Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 2 900,94 zł | 199 | available |
| S20-A5LGW | Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 3 444,55 zł | 0 | unavailable |

**Bluebird S50**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| S50-ANLB | Skaner: SE4720, Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 6 052,74 zł | 5 | available |
| S50-ANLC | Skaner: SE4770, Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 6 211,58 zł | 0 | unavailable |
| S50-ANLF | Skaner: SE55, Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 6 497,57 zł | 0 | unavailable |
| S50-ANLG | Skaner: SE55, Łączność: Wi-Fi 6E, Pamięć: 8/128 GB | 7 228,29 zł | 0 | unavailable |
| S50-A5LAW | Skaner: SE4720, Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 6 592,88 zł | 5 | available |
| S50-A5LBW | Skaner: SE4770, Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 6 751,72 zł | 0 | unavailable |
| S50-A5LCW | Skaner: SE55, Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 7 037,66 zł | 0 | unavailable |
| S50-A5LDW | Skaner: SE55, Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 7 768,42 zł | 0 | unavailable |

**Bluebird S70**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| S70-ANLC | Skaner: SE4720, Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 7 148,87 zł | 5 | available |
| S70-ANLB | Skaner: SE4770, Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 7 307,75 zł | 0 | unavailable |
| S70-ANLF | Skaner: SE55, Łączność: Wi-Fi 6E, Pamięć: 6/64 GB | 7 593,74 zł | 0 | unavailable |
| S70-ANLG | Skaner: SE55, Łączność: Wi-Fi 6E, Pamięć: 8/128 GB | 8 324,46 zł | 0 | unavailable |
| S70-A5LBW | Skaner: SE4720, Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 7 689,01 zł | 1 | available |
| S70-A5LHW | Skaner: SE4720, Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 8 419,82 zł | 0 | unavailable |
| S70-A5LAW | Skaner: SE4770, Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 7 847,90 zł | 0 | unavailable |
| S70-A5LCW | Skaner: SE55, Łączność: Wi-Fi 6E + 5G, Pamięć: 6/64 GB | 8 133,83 zł | 0 | unavailable |
| S70-A5LDW | Skaner: SE55, Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 8 864,65 zł | 0 | unavailable |

**Bluebird S70 Explosion Protection**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| S70-A5LJWEX | — | 13 609,39 zł | 0 | unavailable |

**Bluebird S10**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| S10-A4LCW | Skaner: Imager 1D/2D, Łączność: Wi-Fi + 4G LTE | 2 199,93 zł | 1 | available |
| S10-ANLJ | Skaner: BE470, Łączność: Wi-Fi | 1 840,75 zł | 0 | unavailable |
| S10-ANLD | Skaner: Imager 1D/2D, Łączność: Wi-Fi | 2 065,25 zł | 0 | unavailable |

**Bluebird S10 RFID**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| S10-ANLJRW | — | 4 000,21 zł | 0 | unavailable |

**Bluebird EF551**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| EF551-ANLB | Obudowa: Standardowa, Skaner: 1D/2D, Łączność: Wi-Fi 6E, Pamięć: 4/64 GB | 5 480,82 zł | 0 | unavailable |
| EF551-ANLF | Obudowa: Standardowa, Skaner: 1D/2D, Łączność: Wi-Fi 6E, Pamięć: 8/128 GB | 6 211,58 zł | 0 | unavailable |
| EF551-ANLM | Obudowa: Standardowa, Skaner: SE55 (daleki zasięg), Łączność: Wi-Fi 6E, Pamięć: 8/128 GB | 6 497,57 zł | 0 | unavailable |
| EF551-A5LAW | Obudowa: Standardowa, Skaner: 1D/2D, Łączność: Wi-Fi 6E + 5G, Pamięć: 4/64 GB | 5 957,38 zł | 0 | unavailable |
| EF551-A5LEW | Obudowa: Standardowa, Skaner: 1D/2D, Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 6 688,19 zł | 0 | unavailable |
| EF551-A5LIW | Obudowa: Standardowa, Skaner: SE55 (daleki zasięg), Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 6 974,13 zł | 0 | unavailable |
| EF551-ANLBR | Obudowa: Rugged, Skaner: 1D/2D, Łączność: Wi-Fi 6E, Pamięć: 4/64 GB | 5 639,65 zł | 0 | unavailable |
| EF551-ANLFR | Obudowa: Rugged, Skaner: 1D/2D, Łączność: Wi-Fi 6E, Pamięć: 8/128 GB | 6 370,47 zł | 0 | unavailable |
| EF551-A5LAWR | Obudowa: Rugged, Skaner: 1D/2D, Łączność: Wi-Fi 6E + 5G, Pamięć: 4/64 GB | 6 116,27 zł | 0 | unavailable |
| EF551-A5LEWR | Obudowa: Rugged, Skaner: 1D/2D, Łączność: Wi-Fi 6E + 5G, Pamięć: 8/128 GB | 6 847,03 zł | 0 | unavailable |

**Bluebird EK430**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| EK430-ANLC | Klawiatura: 34 klawisze, Obudowa: Prosta, Skaner: SE4710, Łączność: Wi-Fi 5 | 4 813,58 zł | 0 | unavailable |
| EK430-ANLF | Klawiatura: 34 klawisze, Obudowa: Prosta, Skaner: SE4850, Łączność: Wi-Fi 5 | 7 212,44 zł | 0 | unavailable |
| EK430-ANLCT | Klawiatura: 34 klawisze, Obudowa: Pistoletowa, Skaner: SE4710, Łączność: Wi-Fi 5 | 5 321,93 zł | 0 | unavailable |
| EK430-ANLFT | Klawiatura: 34 klawisze, Obudowa: Pistoletowa, Skaner: SE4850, Łączność: Wi-Fi 5 | 7 720,79 zł | 0 | unavailable |
| EK430-ANLGT | Klawiatura: 47 klawiszy, Obudowa: Pistoletowa, Skaner: SE4710, Łączność: Wi-Fi 5 | 5 321,93 zł | 0 | unavailable |
| EK430-A4LAW | Klawiatura: 34 klawisze, Obudowa: Prosta, Skaner: SE4710, Łączność: Wi-Fi 5 + 4G LTE | 5 449,03 zł | 0 | unavailable |
| EK430-A4LEW | Klawiatura: 34 klawisze, Obudowa: Prosta, Skaner: SE4850, Łączność: Wi-Fi 5 + 4G LTE | 7 847,90 zł | 0 | unavailable |
| EK430-A4LGW | Klawiatura: 47 klawiszy, Obudowa: Prosta, Skaner: SE4710, Łączność: Wi-Fi 5 + 4G LTE | 5 449,03 zł | 0 | unavailable |
| EK430-A4LAWT | Klawiatura: 34 klawisze, Obudowa: Pistoletowa, Skaner: SE4710, Łączność: Wi-Fi 5 + 4G LTE | 5 957,38 zł | 0 | unavailable |
| EK430-A4LEWT | Klawiatura: 34 klawisze, Obudowa: Pistoletowa, Skaner: SE4850, Łączność: Wi-Fi 5 + 4G LTE | 8 356,25 zł | 0 | unavailable |
| EK430-A4LGWT | Klawiatura: 47 klawiszy, Obudowa: Pistoletowa, Skaner: SE4710, Łączność: Wi-Fi 5 + 4G LTE | 5 957,38 zł | 0 | unavailable |

**Bluebird SF650**

| PN | Atrybuty | Cena netto | Stan DE | availability |
|---|---|---|---|---|
| SF650-A4LAW | — | 1 509,21 zł | 0 | unavailable |


## 3. Konfiguracja PN — ustalenia

- Konfiguracja według opisu Jarltech, sprawdzona z kartą Bluebird. Przy sprzeczności w treści dane z karty Bluebird, a w atrybutach tylko cechy pewne.
- **S10:** karta podaje silnik BE470. Jarltech: `S10-ANLJ` „Scan-Engine” (silnik Bluebird, przyjęto BE470), `S10-ANLD` i `S10-A4LCW` — SE4710. Atrybut: „BE470” dla ANLJ, „Imager 1D/2D” dla ANLD i A4LCW (bez modelu silnika). W specyfikacji „Imager 1D/2D (BE470 albo inny moduł 1D/2D, zależnie od PN)”.
- **EF551:** ekran według karty 5,45″ HD+ 1440 × 720 (Jarltech i ERS: FHD+ 2160 × 1080). Skaner: karta — SE4720 (opcje SE4770, SE55); Jarltech — SE4710 (8 PN) i SE5500 (`ANLM`, `A5LIW`). Atrybut: „1D/2D” (moduł standardowy) albo „SE55 (daleki zasięg)”; nazwy SE4710/SE4720 nie podano. Krótsze wartości („1D/2D”, „Rugged”, kolumna „Pamięć”) — tabela przy 1024 px nie mieściła się o 36 px, potem o 1 px.
- **EF551R:** wariant „Obudowa: Rugged” na karcie EF551 (PN z sufiksem R). Upadki 2,4 m tylko w temperaturze pokojowej, 1,8 m w całym zakresie.
- **S20:** bateria według karty 4000 mAh, opcja 6000 mAh / 23,1 Wh (Jarltech i przewodnik S20 przy `355040099`: 6160 mAh).
- **S50, S70:** SE5500 z opisów Jarltech zapisano jako SE55 (nazwa z karty).
- **S70 Explosion Protection:** certyfikaty i oznaczenia Ex dosłownie z karty. Nie napisano, że opcje (mmWave, baterie BLE i Qi) są objęte certyfikatem. Do karty podpięto tylko zasilacz, wtyczkę i kabel; baterii i stacji nie podpięto (karta nie mówi o akcesoriach w strefie Ex).
- **S10 RFID:** karta nie podaje wersji Androida — w treści „Android” bez numeru. Pasmo EU 865–868 MHz. W zestawie bateria i pasek na nadgarstek (karta: In-box), więc pasek `621020002` nie ma osobnej karty.
- **SF650:** bez skanera kodów (nazwa specyfikacji „Skaner kodów: Brak”, żeby terminal nie trafiał do filtra „Skaner”). Zasilacz EU w zestawie (Jarltech). Karta podaje Androida 12 → 15, strona 14; wersji docelowej nie podano (procesor nie Qualcomm, brak przypisu o BluebirdCare).
- **EK430:** `EK430-ANLC` z ERS (SE4710, 34 klawisze, „Brick”, Wi-Fi). Karta: „Addroid 10 & 14” [sic], „Planned to be upgraded to Android 14” — w treści Android 10 i planowana aktualizacja do 14.
- **Gwarancja:** 12 miesięcy (warunek oferty dystrybutora) na wszystkich kartach.
- **Aktualizacje Androida:** na kartach z przypisem Bluebird (wszystkie poza SF650): deklaracja producenta + „wymagają programu serwisowego Bluebird (BluebirdCare), a plan zależy od harmonogramu Qualcomm”.

## 4. PN pominięte

| PN | Powód |
|---|---|
| `S10-A4LKW` | API zna (1 975,44 zł), ale konfiguracja niejednoznaczna: brak u Jarltech i ERS, eutronix podaje to samo co `S10-A4LCW`; różnica sufiksu K/C nieznana |
| `EK430-A4LFW` | opis identyczny z `EK430-A4LAW`, ta sama cena |
| `S10-ANLJRN` | UHF 902–928 MHz (poza UE) |
| HF550X (wszystkie), S21, X20, X40, EF550/EF550R, VX500, VX500 PTT, VF550, EF501/EF501R, BP30 | poza zakresem (decyzja właściciela) |

## 5. Rozbieżności źródeł

| Gdzie | Źródło A | Źródło B | Na karcie TAKMA |
|---|---|---|---|
| EF551 ekran | karta: 5,45″ HD+ 1440 × 720 | Jarltech/ERS: FHD+ 2160 × 1080 | karta |
| EF551 skaner | karta: SE4720 (opc. SE4770, SE55) | Jarltech: SE4710 / SE5500 | „1D/2D” / „SE55 (daleki zasięg)” |
| S10 skaner | karta: BE470 | Jarltech: SE4710 (ANLD, A4LCW) | „Imager 1D/2D” bez modelu dla ANLD i A4LCW |
| S10 bateria | karta: „4500mAh / 15.4 Wh” (15,4 Wh to ok. 4000 mAh) | przewodnik S10, Jarltech: 4500 mAh | 4500 mAh, bez Wh |
| S20 bateria rozszerzona `355040099` | karta S20: 6000 mAh / 23,1 Wh | przewodnik S20 i Jarltech: 6160 mAh | 6000 mAh, 23,1 Wh |
| S20 rugged boot `351120049` | karta S20: 1,8 m „with protective boot” | przewodnik S20 i Jarltech: 1,6 m | na karcie akcesorium bez liczby; na karcie S20 1,8 m (karta) |
| Szkło S50 | przewodnik S20: `624010029` „S2#&S5#”; Jarltech: S20, S50 | przewodnik S50: `624010031` (kod S7#) | `624010029` → S20 i S50, `624010031` → S70 |
| Pasek na dłoń S10/S20/S50 | przewodniki: `357010003` (STRP-HDSTP-S1#&S2#&S5#) | Jarltech: `357010006` (fits S10, S20, S50, 4 szt.) | `357010003` (przewodnik); `357010006` pominięty — do wyjaśnienia, czy to następca |
| `210120019` | przewodnik S70: „for S50” | kod WRBL-WSTBNDKIT-S7#, Jarltech: S70 | S70 |
| Uchwyty i zestawy na nadgarstek EF551 | Jarltech: zestawy na nadgarstek do baterii standardowej | przewodnik EF551: pierścień dla baterii standardowej i rozszerzonej | bateria standardowa (opis PN) |
| Stacje EF551 | Jarltech: „requires 1x shim” | przewodnik EF551: podkładka ma wkładkę wyjmowaną przed EF551R; brak PN podkładki | opis: gniazdo wymaga podkładki; PN podkładki EF551 nieznany |
| `204020020` (4-gn. Ethernet EF55x) | Jarltech: strona EF550/EF550R, opis „fits S50, S70”, „shim for EF551” | przewodnik EF551: tylko kod opisowy | pominięty (zgodność niepotwierdzona) |
| SF650 Android | karta: do 15 | strona: do 14 | Android 12, bez wersji docelowej |
| S70 EP cena | API 13 609,39 zł | S70 `A5LAW` 7 847,90 zł | cena z API bez komentarza; ok. 1,7 × S70 |

## 6. Prefiks Ingram i kolizje (bez zmian w kodzie)

- `toIngramItemId()` (`src/lib/ingram.ts`) nie ma reguły dla Bluebird. PN terminali (`S10-`, `S20-`, `S50-`, `S70-`, `EF551-`, `EK430-`, `SF650-`) i większość akcesoriów (`204…`, `351…`, `355…`, `357…`, `602…`, `603…`, `621…`, `622…`, `624…`, `626…`, `629…`, `14948`) dostają domyślny prefiks `ZB` (Zebra) — Ingram ich nie znajdzie.
- Kolizje: uchwyty `210080023/24/25/27/18/20` zaczynają się od `2100` → prefiks `ON` (Honeywell); podkładki `501260117/118/145` od `501` → `ON`. Ingram może teoretycznie zwrócić produkt innej marki o tym samym ciągu.
- Ceny i stany pochodzą w praktyce z Jarltech (`stockDE`); `stockPL` = 0 we wszystkich PN.

## 7. Akcesoria

### Nowe karty akcesoriów

| PN | Nazwa | Zgodność | Cena netto | Stan DE | Zdjęcie |
|---|---|---|---|---|---|
| 602010041 | Zasilacz sieciowy 5 V / 3 A Bluebird | S20, S50, S70, S70 Explosion Protection, S10, S10 RFID, EF551, EK430 | 41,45 zł | 30 | tak |
| 602020024 | Wtyczka EU do zasilacza Bluebird 5 V / 3 A | S20, S50, S70, S70 Explosion Protection, S10, S10 RFID, EF551, EK430 | 13,82 zł | 29 | tak |
| 603010005 | Kabel USB-A – USB-C Bluebird | S20, S50, S70, S70 Explosion Protection, S10, S10 RFID, EF551, EK430 | 26,33 zł | 336 | tak |
| 14948 | Przewód zasilający EU Bluebird | S20, S50, S70, S10, EF551, EK430 | 27,63 zł | 29 | tak |
| 602010012 | Zasilacz 9 V / 3 A do stacji Bluebird | S20, S10, EF551, EK430 | 110,53 zł | 2 | tak |
| 602010013 | Zasilacz 9 V / 10 A do stacji Bluebird | S20, S10, EF551, EK430 | 248,64 zł | 0 | tak |
| 602010025 | Zasilacz 12 V / 5 A do stacji Bluebird | S20, S50, S70 | 165,75 zł | 32 | tak |
| 602010035 | Zasilacz 12 V / 10 A do stacji Bluebird | S20, S50, S70 | 312,22 zł | 0 | tak |
| 602010023 | Ładowarka samochodowa Bluebird 5 V / 4 A, 2 × USB-A | S20, S50, S70, S10, EF551, EK430, SF650 | 93,96 zł | 52 | tak |
| 602010024 | Ładowarka samochodowa Bluebird 5 V / 2 A z kablem USB-C | EF551, EK430, SF650 | 89,46 zł | 0 | logo zastępcze |
| 204010086 | Stacja ładująca 1-gniazdowa Bluebird S20 | S20 | 284,59 zł | 0 | tak |
| 204010078 | Stacja ładująca 1-gniazdowa Bluebird S20 (także z czytnikiem RFR) | S20 | 643,71 zł | 0 | tak |
| 204010079 | Stacja ładująca 1-gniazdowa Bluebird S20 z Ethernetem | S20 | 837,14 zł | 1 | tak |
| 204020037 | Stacja ładująca 4-gniazdowa Bluebird S20 | S20 | 1 270,91 zł | 4 | tak |
| 204020028 | Stacja ładująca 4-gniazdowa Bluebird S20 (także z czytnikiem RFR) | S20 | 1 856,65 zł | 0 | tak |
| 204020029 | Stacja ładująca 4-gniazdowa Bluebird S20 z Ethernetem | S20 | 2 796,01 zł | 0 | tak |
| 501260118 | Podkładka do stacji Bluebird S20 | S20 | 5,56 zł | 2 | tak |
| 204010080 | Stacja ładująca 1-gniazdowa Bluebird S50 i S70 | S50, S70 | 643,71 zł | 1 | tak |
| 204010081 | Stacja ładująca 1-gniazdowa Bluebird S50 i S70 z Ethernetem | S50, S70 | 837,14 zł | 30 | tak |
| 204020030 | Stacja ładująca 4-gniazdowa Bluebird S50 i S70 | S50, S70 | 2 271,09 zł | 6 | tak |
| 204020031 | Stacja ładująca 4-gniazdowa Bluebird S50 i S70 z Ethernetem | S50, S70 | 2 671,67 zł | 0 | tak |
| 501260117 | Podkładka do stacji Bluebird S50 | S50 | 5,56 zł | 15 | tak |
| 204010094 | Stacja ładująca 1-gniazdowa Bluebird S10 | S10 | 232,08 zł | 2 | tak |
| 204020041 | Stacja ładująca 4-gniazdowa Bluebird S10 | S10 | 975,30 zł | 0 | tak |
| 501260145 | Podkładka do stacji Bluebird S10 | S10 | 5,56 zł | 1 | tak |
| 204010058 | Stacja ładująca 1-gniazdowa Bluebird EF551 i EF551R | EF551 | 621,63 zł | 0 | logo zastępcze |
| 204010059 | Stacja ładująca 1-gniazdowa Bluebird EF551 i EF551R z Ethernetem | EF551 | 801,25 zł | 0 | logo zastępcze |
| 204020019 | Stacja ładująca 4-gniazdowa Bluebird EF551 i EF551R | EF551 | 1 312,36 zł | 1 | logo zastępcze |
| 204010063 | Stacja ładująca 1-gniazdowa Bluebird EK430 | EK430 | 483,53 zł | 0 | logo zastępcze |
| 204010064 | Stacja ładująca 1-gniazdowa Bluebird EK430 z Ethernetem | EK430 | 663,08 zł | 0 | logo zastępcze |
| 204020022 | Stacja ładująca 4-gniazdowa Bluebird EK430 | EK430 | 1 063,71 zł | 0 | logo zastępcze |
| 204020023 | Stacja ładująca 4-gniazdowa Bluebird EK430 z Ethernetem | EK430 | 1 864,96 zł | 0 | logo zastępcze |
| 355040097 | Bateria standardowa 4000 mAh Bluebird S20 | S20 | 207,20 zł | 0 | tak |
| 355040099 | Bateria rozszerzona 6000 mAh Bluebird S20 | S20 | 309,46 zł | 0 | tak |
| 355040100 | Bateria 4000 mAh z nadajnikiem BLE Bluebird S20 | S20 | 279,03 zł | 0 | tak |
| 355040090 | Bateria standardowa 5000 mAh Bluebird S50 i S70 | S50, S70 | 290,09 zł | 20 | tak |
| 355040098 | Bateria rozszerzona 7000 mAh Bluebird S50 i S70 | S50, S70 | 411,69 zł | 0 | tak |
| 355040103 | Bateria 5000 mAh z ładowaniem bezprzewodowym Bluebird S50 i S70 | S50, S70 | 364,68 zł | 0 | tak |
| 355040117 | Bateria standardowa 4500 mAh Bluebird S10 | S10 | 207,20 zł | 0 | tak |
| 355040070 | Bateria standardowa 4350 mAh Bluebird EF551 | EF551 | 248,64 zł | 0 | logo zastępcze |
| 355040080 | Bateria rozszerzona 6160 mAh Bluebird EF551 | EF551 | 331,54 zł | 0 | logo zastępcze |
| 355040073 | Bateria 6800 mAh Bluebird EK430 | EK430 | 276,28 zł | 0 | logo zastępcze |
| 355040087 | Bateria 5000 mAh Bluebird SF650 | SF650 | 138,16 zł | 0 | logo zastępcze |
| 355040127 | Bateria 7000 mAh Bluebird S10 RFID | S10 RFID | 293,52 zł | 0 | logo zastępcze |
| 210080024 | Uchwyt pistoletowy Bluebird S20 | S20 | 580,18 zł | 2 | tak |
| 210080025 | Uchwyt pistoletowy Bluebird S50 | S50 | 580,18 zł | 2 | tak |
| 210080023 | Uchwyt pistoletowy Bluebird S70 | S70 | 580,18 zł | 1 | tak |
| 210080027 | Uchwyt pistoletowy Bluebird S10 | S10 | 312,22 zł | 7 | tak |
| 210080018 | Uchwyt pistoletowy Bluebird EF551 | EF551 | 580,18 zł | 0 | logo zastępcze |
| 210080020 | Uchwyt pistoletowy Bluebird EF551R | EF551 | 580,18 zł | 0 | logo zastępcze |
| 621020001 | Pasek na nadgarstek do uchwytu pistoletowego Bluebird | S10, S20, S50, S70 | 42,08 zł | 0 | tak |
| 210120014 | Zestaw na nadgarstek z pierścieniem spustu Bluebird S20 | S20 | 539,42 zł | 0 | tak |
| 210120017 | Mocowanie na nadgarstek Bluebird S20 | S20 | 400,62 zł | 1 | tak |
| 210120015 | Zestaw na nadgarstek z pierścieniem spustu Bluebird S50 | S50 | 539,42 zł | 0 | tak |
| 210120018 | Mocowanie na nadgarstek Bluebird S50 | S50 | 400,62 zł | 1 | tak |
| 210120016 | Zestaw na nadgarstek z pierścieniem spustu Bluebird S70 | S70 | 539,42 zł | 0 | tak |
| 210120019 | Mocowanie na nadgarstek Bluebird S70 | S70 | 400,62 zł | 0 | tak |
| 210120004 | Zestaw na nadgarstek z pierścieniem spustu Bluebird EF551 | EF551 | 539,42 zł | 0 | logo zastępcze |
| 210120006 | Mocowanie na nadgarstek Bluebird EF551 | EF551 | 400,62 zł | 0 | logo zastępcze |
| 210120005 | Zestaw na nadgarstek z pierścieniem spustu Bluebird EF551R | EF551 | 539,42 zł | 0 | logo zastępcze |
| 210120007 | Mocowanie na nadgarstek Bluebird EF551R | EF551 | 400,62 zł | 0 | logo zastępcze |
| 357010003 | Pasek na dłoń Bluebird S10, S20 i S50 | S10, S20, S50 | 78,94 zł | 0 | tak |
| 357010002 | Pasek na dłoń Bluebird S70 | S70 | 82,90 zł | 0 | tak |
| 621010014 | Pasek na dłoń Bluebird EK430 | EK430 | 41,45 zł | 0 | logo zastępcze |
| 621010025 | Pasek na dłoń Bluebird EF551 i EF551R | EF551 | 57,87 zł | 0 | logo zastępcze |
| 621040003 | Pasek na ramię Bluebird z metalowymi zaczepami | S10, S20, S50, S70, EF551 | 65,79 zł | 0 | tak |
| 622020004 | Kabura Bluebird z klipsem do paska | S10, S20, S50, S70, EF551, SF650 | 221,06 zł | 0 | tak |
| 351120049 | Osłona rugged boot Bluebird S20 | S20 | 131,55 zł | 0 | tak |
| 351120042 | Osłona rugged boot Bluebird S10 | S10 | 50,00 zł | 8 | tak |
| 629010006 | Osłona rugged boot Bluebird EK430 | EK430 | 26,32 zł | 0 | logo zastępcze |
| 624010029 | Szkło ochronne Bluebird S20 i S50 | S20, S50 | 55,26 zł | 2 | tak |
| 624010031 | Szkło ochronne Bluebird S70 | S70 | 87,48 zł | 0 | tak |
| 624010040 | Szkło ochronne Bluebird S10 | S10 | 27,63 zł | 0 | tak |
| 624010041 | Folia ochronna antyodciskowa Bluebird S10 | S10 | 41,69 zł | 0 | tak |
| 624010017 | Folia ochronna przezroczysta Bluebird EF551 | EF551 | 27,63 zł | 0 | logo zastępcze |
| 624010018 | Folia ochronna antyodciskowa Bluebird EF551 | EF551 | 27,63 zł | 0 | logo zastępcze |
| 626010007 | Rysik aluminiowy Bluebird z końcówką z włókna | S10, S20, S50, S70 | 27,63 zł | 30 | tak |
| 626010005 | Rysik Bluebird z plastikową końcówką | EF551, EK430, SF650 | 13,82 zł | 0 | logo zastępcze |

### Zasady


- 78 kart (`src/data/bluebird-products.ts`, `bluebirdAccessories`), `categoryId: akcesoria`, podkategorie: stacje i ładowarki, baterie, etui/kabury/uchwyty, kable i zasilacze + `akcesoria-do-terminali` (pętla w `products.ts` dopisuje je do `productIds` i liczy `productCount`).
- PN, opis Part Number i „Kompatybilność” w specyfikacji (filtr „Do terminala”: wartości Bluebird S10, S10 RFID, S20, S50 / S70, EF551 / EF551R, EK430, SF650).
- Zgodność: przewodniki S10/S20/S50/S70 (numery materiałowe) sprawdzone z Jarltech; EF551, EK430, SF650 i S10 RFID — Jarltech (przewodnik EF551 bez numerów, EK430/SF650 bez przewodnika).
- Stacje: blok „Wymagane — sprzedawane osobno” (zasilacz + przewód EU `14948`) i blok „Wymagane dla terminala … bez osłony rugged boot” (podkładka) dla S10, S20, S50.
- Terminale (poza SF650): blok „Wymagane”: `602010041` + `602020024` + `603010005`.
- MOQ > 1: brak w przewodnikach i u Jarltech.
- Bez zdjęcia (logo zastępcze, `placeholderLogo`): 25 PN — EF551/EF55x (przewodnik bez numerów), EK430, SF650, `355040127`, `602010024`.

### Pominięte akcesoria

| PN | Powód |
|---|---|
| `355040102` (bateria BLE S50/S70), `355040116` (bateria 7000 mAh S10) | API nie zna |
| `357010006` | pasek na dłoń wg Jarltech; przewodniki podają `357010003` |
| `621020002` | pasek S10 RFID w zestawie z urządzeniem |
| `621040006` | pasek na ramię 1,6 m; wymaga łącznika — PN łącznika dla serii S nieznany |
| `204020020` | zgodność z EF551 niepotwierdzona przewodnikiem |
| `204030009`, `204030010` (ładowarki 4 baterii), `204040004–007` i `210080022` (stacje pojazdowe i ramię) | poza listą briefu (kandydaci na kolejny etap) |
| `210080006`, `603080003` (pierścień i przewód zamienny), `626010004`, `19346` (linki do rysika), `351020049/050` (pokrywy baterii SF650) | części zamienne, poza listą briefu |
| `602020025` i inne wtyczki/przewody spoza UE, czytniki RFR, Mobilis, Brodit, kody opisowe `CRD-`, `BTRY-`, `STYLUS-` | zasada briefu |

## 8. Zdjęcia

- Terminale: PNG 600 × 1200, przezroczyste tło, `scripts/obrob-zdjecia.py --jak=CT47-X0N-37D100G.png --bez-ciena`. Źródła: grafiki z kart PDF (S20, S50, S70, EK430, EF551, SF650), Jarltech 1600 px (S10, S10 RFID), galeria S70 3840 px (tył), przewodniki (z uchwytem), broszura EK430 (tył, bok). Zdjęcia Jarltech EF551 i SF650 odrzucone — ściśnięte w poziomie (proporcje niezgodne z wymiarami z kart).
- Wzorce (szer. × wys. wypełnienia): M3 SM25 89,5 × 91,0%, Honeywell CT47 87,8 × 89,8%, Datalogic Memor 12 86,7 × 86,7%. Bluebird — pionowe ujęcia ok. 85,7% wysokości (nie większe niż wzorce).

| Domyślny PN | Pliki, wypełnienie (szer. × wys.) i ujęcie |
|---|---|
| S20-ANLB | `S20-ANLB.png` 81,3 × 85,7% (widok z przodu, ekran 6 cali); `S20-ANLB-2.png` 61,3 × 85,8% (tył obudowy z aparatem i złączem akcesoriów); `S20-ANLB-3.png` 85,7 × 34,8% (z opcjonalnym uchwytem pistoletowym) |
| S50-ANLB | `S50-ANLB.png` 80,7 × 85,8% (widok z przodu, ekran 6 cali); `S50-ANLB-2.png` 85,7 × 32,5% (widok pod kątem, dolna krawędź ze złączem USB-C); `S50-ANLB-3.png` 85,7 × 34,7% (z opcjonalnym uchwytem pistoletowym) |
| S70-ANLC | `S70-ANLC.png` 84,7 × 85,8% (widok z przodu, ekran 6 cali); `S70-ANLC-2.png` 70,0 × 85,8% (tył obudowy); `S70-ANLC-3.png` 67,2 × 85,7% (widok z przodu pod kątem, lewa strona z przyciskami) |
| S70-A5LJWEX | `S70-A5LJWEX.png` 84,7 × 85,8% (widok z przodu, ekran 6 cali); `S70-A5LJWEX-2.png` 70,0 × 85,8% (tył obudowy); `S70-A5LJWEX-3.png` 67,2 × 85,7% (widok z przodu pod kątem, lewa strona z przyciskami) |
| S10-A4LCW | `S10-A4LCW.png` 79,2 × 85,8% (widok z przodu, ekran 5,5 cala); `S10-A4LCW-2.png` 59,0 × 85,6% (tył obudowy z aparatem) |
| S10-ANLJRW | `S10-ANLJRW.png` 85,7 × 43,4% (widok pod kątem, uchwyt pistoletowy z czytnikiem UHF RFID) |
| EF551-ANLB | `EF551-ANLB.png` 84,3 × 85,6% (widok z przodu, ekran 5,45 cala); `EF551-ANLB-2.png` 84,2 × 85,8% (tył obudowy); `EF551-ANLBR.png` 85,7 × 83,9% (wersja EF551R w obudowie Rugged, widok z przodu) |
| EK430-ANLC | `EK430-ANLC.png` 62,8 × 85,8% (widok z przodu, ekran 4,3 cala i klawiatura); `EK430-ANLC-2.png` 60,7 × 85,6% (tył obudowy z oknem skanera i złączami); `EK430-ANLC-3.png` 30,8 × 85,8% (widok z boku) |
| SF650-A4LAW | `SF650-A4LAW.png` 79,2 × 85,7% (widok z przodu, ekran 6,5 cala); `SF650-A4LAW-2.png` 79,0 × 85,8% (tył obudowy z aparatem) |

- S70 Explosion Protection: kopie zdjęć S70 (karta S70 EP pokazuje to samo urządzenie); `imageDescriptions` z nazwą S70 Explosion Protection.
- Akcesoria: PNG 500 × 500, dłuższy bok produktu = 80% płótna (wzorce: M3 SL2K-1CRD-C00 65,7%, CipherLab ARS36CCCNUE01 84,9%, ARS35PSTNNN01 74,9%). Źródło: przewodniki S10/S20/S50/S70; kadry przypisane do PN po współrzędnych „Part #”. Te same zdjęcia (przewodnik ich nie różnicuje): zasilacze 9 V/12 V, pary stacji z Ethernetem i bez, baterie `355040097`/`355040100`; szkła i folia — zdjęcie opakowania z przewodnika.
- Logo: `public/images/manufacturers/bluebird.svg` — wektor z karty EF551 bez „A TSC Company”, viewBox `0.07 -0.825 100.54 37.70` (800 × 300); render 400 × 150: 88,3% × 52% (Getac 89,5% × 72%, SUNMI 89,5% × 46,7%).
- Mapy `product-image-dims.json`, `product-image-frames.json`, `product-image-uniform-bounds.json` — 76 wpisów dopisanych ręcznie na końcu; `generate-image-dims.mjs` nie uruchamiany.

## 9. Kod i treść strony marki

- `manufacturers.ts` (Bluebird), `brandCategories` (`terminale-bluebird`), `src/app/terminale-bluebird/page.tsx`, `bluebird-category.ts` (treść, tabela modeli, FAQ 7 pytań; FAQ współdzielone z `brandCategories`), menu „Terminale Bluebird” po „Terminale SUNMI”.
- `middleware.ts`: prefiks `bluebird-`. `product-stock.ts`: `LIVE_OFFER_SLUGS`. `product-variant-offers.ts`: flaga `bluebirdTerminal`. Karta produktu: `catalogMobileTerminal`, `rfidTextLinks`. `BrandCategoryPage`: `catalogSeo` i ukryty `<h2>`. `ProductCard`: `placeholderLogo`. `katalog/page.tsx`: noindex. `product-tab-title.ts`: tytuł „Bluebird Model | TAKMA”.
- Filtry: producent Bluebird w terminalach i akcesoriach, strona marki w pętli M3, filtr „Do terminala”. Filtr „Ekran” przyjmował jedną cyfrę po przecinku (`5,45″` wypadał) — wzorzec `[0-9]{0,2}`.
- **S10 RFID a `terminale-rfid`:** wzorzec innych marek (`subcategoryIds: ['terminale-rfid']`) usuwa terminal z `/terminale-mobilne` i ze strony marki (`belongsToCategory`). Wybrano: `subcategoryIds: []` + dopisanie `bluebird-s10-rfid` do `rfidTerminalCategory.productIds` (productCount 8). Karta jest na `/terminale-bluebird`, `/terminale-rfid` i `/terminale-mobilne`. Opis SEO `/terminale-rfid`: „Zebra, Newland i Bluebird”.
- `getProductVariantTooltips`: Bluebird nie dopisany (wzór M3 — dymki tylko z karty produktu; dopisanie dokleiłoby automatyczne punkty do „Łączność”).
- Merchant feed: kategoria Google bez zmian (jak Zebra, M3, CipherLab; tylko SUNMI ma 5256). Nazwy wariantów zaczynają się od PN (wzór CipherLab), tytuł w feedzie: „Terminal mobilny Bluebird S20 Wi-Fi 6E, 6/64 GB (S20-ANLB)”.
- `llms.txt`: sekcja „Terminale Bluebird”.

## 10. Samokontrola z kartami katalogowymi (23.10.2026)

Sprawdzono title, meta, shortDescription, opis, specyfikację, FAQ, dymki i opisy zdjęć każdej karty oraz treść strony marki z kartą katalogową modelu (i przewodnikiem akcesoriów przy akcesoriach). Klasyfikacja rozbieżności: SPRZECZNE / SPOZA KARTY / POMINIĘTE / NIEPRECYZYJNE.

| Karta | SPRZECZNE | SPOZA KARTY | POMINIĘTE | NIEPRECYZYJNE |
|---|---|---|---|---|
| S20 | 0 | gwarancja 12 mies., zawartość zestawu, konfiguracje PN (dystrybutor) | silniki opcjonalne SE4100/SE4720/SE4770/SE55 (brak w ofercie), dwa SKU regionalne 5G (pasma), aparat przedni 5 MP (opcja) | 0 |
| S50 | 0 | jw. | 5G mmWave (opcja), ToF (opcja), aparat 50 MP (opcja) | 0 |
| S70 | 0 | jw. | 5G mmWave, ToF, aparat 50 MP, bateria BLE (opcje) | 0 |
| S70 Explosion Protection | 0 | jw.; jedna konfiguracja (SE4770, 6/64 GB) z opisu PN | opcje mmWave, BLE i Qi — celowo (karta nie mówi, czy są objęte certyfikatem) | 0 |
| S10 | 0 | atrybut „Imager 1D/2D” (ANLD, A4LCW — opis PN: SE4710), BE470 dla ANLJ („Scan-Engine”) | opcja 8/128 GB (brak w ofercie) | bateria: karta sama sobie przeczy (4500 mAh / 15,4 Wh) — podano 4500 mAh bez Wh |
| S10 RFID | 0 | gwarancja, zestaw | wersja Androida (karta jej nie podaje), aparat tylny (brak w karcie) | 0 |
| EF551 / EF551R | 0 (ekran i skaner wg karty, nie wg dystrybutora) | pasek w zestawie EF551R (dystrybutor), atrybut skanera z opisu PN | Innovatron NFC i SAM (opcje), wyświetlacz 600 nitów (opcja) | 0 |
| EK430 | 0 | `EK430-ANLC` (ERS), aparaty jako wyposażenie oferowanych PN (karta: opcja) | klawiatura 30-klawiszowa, silniki SE965/SE4720/SE4770/SE4750 (brak w ofercie) | 0 |
| SF650 | 0 | zasilacz EU w zestawie (dystrybutor) | wersja docelowa Androida (karta 15, strona 14) | 0 |
| Strona marki | 0 | gwarancja 12 mies. | — | 0 |
| Akcesoria | 0 | zgodność EF551/EK430/SF650 i S10 RFID — opisy PN dystrybutora | — | osłona `351120049`: przewodnik 1,6 m, karta S20 1,8 m — na karcie akcesorium bez liczby |

Poprawki w trakcie samokontroli: S10 RFID — „HD+” zamieniono na rozdzielczość z karty (1440 × 720, karta: „HD”); SF650 — usunięto porównanie z S10 z opisu; S70 Explosion Protection — odłączono baterie (brak informacji o strefie Ex); bateria `355040100` — usunięto dopowiedzenie o aplikacji do lokalizowania; kabura — „długość 175 mm” zamiast „długość wewnętrzna”; folia `624010017` — usunięto „nie zmienia wyglądu ekranu”; szkło/folia S10 — usunięto porównania „cieńsza/twardsza ochrona”; EK430 — aparaty opisane jako wyposażenie oferowanych PN.

## 11. Tabele wariantów (build produkcyjny, `next start -p 3149`)

`#warianty .overflow-x-auto`: `scrollWidth` / `clientWidth`, stan zwinięty i po „Pokaż niedostępne warianty”.

| Karta | 1440 zwinięta | 1440 rozwinięta | 1280 zwinięta | 1280 rozwinięta | 1024 zwinięta | 1024 rozwinięta |
|---|---|---|---|---|---|---|
| bluebird-s20 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-s50 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-s70 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-s70-explosion-protection | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-s10 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-s10-rfid | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-ef551 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-ek430 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |
| bluebird-sf650 | 1216/1216 | 1216/1216 | 1216/1216 | 1216/1216 | 960/960 | 960/960 |

Wszystkie 9 kart: bez przewijania przy 1440, 1280 i 1024 px w obu stanach. Uwaga: lokalny `next start` nie ma dostępu do bazy (`ECONNREFUSED`), więc ceny i stany na żywo na kartach lokalnych są puste; wymiary tabel tego nie zmieniają.

## 12. Poprawki po audytach (23.10.2026)

Podstawa: dwa niezależne audyty (karty terminali; akcesoria, strona marki i zdjęcia). Zmiany porównano ponownie z kartami katalogowymi i przewodnikami akcesoriów Bluebird.

### Karty terminali

| Karta | Pole | Przed | Po |
|---|---|---|---|
| S20, S50, S70, S70 EP, S10, EF551, EK430 | opis, FAQ (Android) | „Producent deklaruje możliwość aktualizacji do Androida 17 / planuje aktualizację do Androida 18. Aktualizacje systemu wymagają programu serwisowego Bluebird (BluebirdCare), a plan zależy od harmonogramu Qualcomm.” | „Android 17 to najwyższa zapowiedziana wersja dla S20. Aktualizacje systemu wymagają wykupienia programu gwarancyjnego Bluebird (BluebirdCare). Wersje i terminy zależą od planu Qualcomm.” Wersje: S20 — 17; S50, S70, S70 EP, EF551 — 16; S10 — 18; EK430 — 14 (karty: „Upgradeable to” / „Planned to be upgraded to”; „Bluebird warranty program should be purchased to get Android upgrade service”). |
| S10 RFID | opis, FAQ | jw., bez wersji | „Aktualizacje systemu wymagają wykupienia programu gwarancyjnego Bluebird (BluebirdCare). Wersje i terminy zależą od planu Qualcomm.” (karta nie podaje wersji docelowej) |
| EF551 | `shortDescription` | „…Rugged (EF551R) z odpornością na upadki z 2,4 m.” | „…z 2,4 m w temperaturze pokojowej.” (karta: „at room temperature”) |
| S70 | `seoDescription` | „Wi-Fi 6E lub 5G, upadki z 3,05 m. Kolektor danych Bluebird full rugged.” | „Wi-Fi 6E, opcja 5G, upadki z 3,05 m w temperaturze pokojowej. Wzmocniony kolektor danych Bluebird.” (158 znaków) |
| S70 | `shortDescription` | „IP68 i IP65.” | „IP68 i IP65 z założoną baterią.” |
| S20, S50, S70, S70 EP | opis, specyfikacja | „IP68 i IP65 z baterią” / „IP68 i IP65 (z baterią)” | „IP68 i IP65 z założoną baterią” (EF551 bez zmian — karta nie wiąże IP z baterią) |
| S10 | atrybut „Skaner” (`S10-ANLD`, `S10-A4LCW`) | „Imager 1D/2D” | „SE4710” (Jarltech i ERS zgodnie) |
| S10 | dymek „Skaner” | „Imager 1D/2D — moduł 1D/2D innego typu niż BE470.” | „SE4710 — imager Zebra do kodów 1D i 2D, standardowy zakres odczytu.” |
| S10 | specyfikacja „Skaner”, opis, FAQ | „Imager 1D/2D (BE470 albo inny moduł 1D/2D…)”; FAQ „inny moduł 1D/2D” | „BE470 albo SE4710, zależnie od PN; kody 1D i 2D”; FAQ: „silnik Bluebird BE470 albo imager Zebra SE4710” |
| S10 | dymek „Łączność” | tylko punkt 4G LTE | dodany punkt „Wi-Fi — praca w sieci firmowej.” |
| S10 | `relatedProducts` | S20, SF650, EF551, S50 | S20, S70, EF551, S50 (SF650 nie ma skanera; S20 była już na liście, więc w miejsce SF650 wstawiono S70) |
| EF551 | dymek i FAQ „Skaner” | „moduł standardowy do odczytu z bliska” | „standardowy zakres odczytu” / „moduł 1D/2D o standardowym zakresie odczytu” (karta: „scan in standard range”) |
| EK430 | `seoTitle` | „…z klawiaturą, wersja pistoletowa” | „…z klawiaturą, wersja prosta lub pistoletowa” |
| EK430 | opis | „Na każdym modelu jest fabrycznie zainstalowany emulator terminala (TE)…” | dopisane: „Licencję emulatora ma tylko wersja pistoletowa.” (strona EK430: „pre-loaded on every model and pre-licensed on the gun-style model”) |
| S70, S70 EP | `imageDescriptions[2]` | „widok z przodu pod kątem, lewa strona z przyciskami” | „widok z przodu pod kątem, prawa krawędź z przyciskiem skanowania i przyciskami głośności” (sprawdzone na zdjęciu) |
| EK430 | `imageDescriptions[1]` | „tył obudowy z oknem skanera i złączami” | „tył obudowy z aparatem, złączem 10-pinowym i baterią” (sprawdzone na zdjęciu) |
| Wszystkie 9 | FAQ | PN w odpowiedziach (np. „uchwyt pistoletowy 210080024”, „S20-A5LAW”, „A5 w PN”, „PN z literą T”, „S10-ANLJRW”) | nazwy z linkami do kart (np. „[uchwyt pistoletowy do S20](…)”), „wersje 5G”, „wersja pistoletowa”; w FAQ nie ma PN |
| S20, S50, EF551 | opis, specyfikacja | upadki z 1,5 m bez temperatury | „…w temperaturze od −10°C do +50°C” (karty: „-10° C to 50° C”) |
| S50 | opis, specyfikacja „Masa” | „Masa terminala wynosi 322 g.” / „322 g” | „…z baterią standardową wynosi 322 g.” / „322 g (z baterią standardową)” |
| S20 | FAQ | „Ile pracuje bateria i czy można ją wymienić w czasie pracy?” | „Jaką baterię ma Bluebird S20 i czy można ją wymienić w czasie pracy?” |
| EK430 | FAQ | „Ile pracuje bateria EK430?” | „Jaką baterię ma Bluebird EK430?” |
| S20, S50, S70, EF551 | `seoDescription`, `shortDescription`, `llms.txt` | „Wi-Fi 6E lub/albo 5G” | `seoDescription`: „Wi-Fi 6E, opcja 5G”; `shortDescription` (S50, S70, EF551): „Wi-Fi 6E w każdej wersji, a wersje 5G mają także modem 5G” |
| S70 (strona marki, `llms.txt`) | rola / opis | „full rugged” | „wzmocniony” |
| S20 | FAQ ładowania | bez podkładki | „Terminal bez osłony wymaga w stacji podkładki do stacji S20” (przewodnik S20: „Requires (Shim [1ea]) … without Rugged Boots”) |
| EF551 | FAQ ładowania | „Stacje EF551 pasują do EF551 i EF551R i wymagają zasilacza 9 V.” | dodane: podkładka i „EF551R wkłada się do stacji po wyjęciu wkładki z podkładki.” (przewodnik EF551) |
| S70 EP | opis, specyfikacja „Bateria” | „Bateria 5000 mAh obsługuje szybkie ładowanie i wymianę bez wyłączania terminala (hot swap)”; spec. „…szybkie ładowanie, wymiana bez wyłączania (hot swap)” | „Bateria ma pojemność 5000 mAh.”; spec. „5000 mAh, 19,25 Wh”. Tekst nie sugeruje wymiany ani ładowania baterii w strefie Ex; warunków nie dopisano (karta ich nie podaje). |
| S20 | opis, specyfikacja „Bateria” | link „Bateria rozszerzona 6000 mAh…”; spec. „opcja: 6000 mAh” | link „bateria rozszerzona do S20” bez liczby; spec. „opcja: bateria rozszerzona” (specyfikacja nie renderuje linków — link jest w opisie i FAQ) |
| SF650 | opis, „Zawartość zestawu”, FAQ, blok „Wymagane” | „Zasilacz z wtyczką EU jest w zestawie.”; bez kabla | zasilacz EU w zestawie; kabel USB-A – USB-C (`603010005`) w bloku „Wymagane — sprzedawane osobno” i w „Zawartości zestawu” jako zamawiany osobno (Jarltech wymienia w zestawie tylko „power supply unit (EU, wall wart)”, a przy PN z kablem pisze „incl.: cable (USB)”) |

### Blok „Wymagane — sprzedawane osobno” (kabel `603010005`) — wynik dla każdej karty

| Karta | Złącze ładowania (karta) | Dystrybutor / przewodnik | Blok |
|---|---|---|---|
| S20, S50, S70, S10 | USB-C | przewodniki S10/S20/S50/S70: `602010041` „Requires Country Specific Adapter Plug and USB Type C to A cable”; `603010005` „USB A to USB C communications and charging cable” | zasilacz `602010041` + wtyczka `602020024` + kabel `603010005` (bez zmian) |
| S70 Explosion Protection | USB-C (jak S70) | Jarltech: S70 EP brak osobnego opisu akcesoriów; zasilacz i kabel jak S70 | bez zmian |
| S10 RFID | USB-C (USB 3.0, OTG) | karta: „5V/3A Direct Charging Power adapter”; Jarltech `602010041`/`602020024` z „s10-rfid” | bez zmian |
| EF551 | USB-C (USB 3.1) i złącze dokujące | przewodnik EF551: zasilacz do ładowania bezpośredniego „Requires Country Specific Adapter Plug”, „Requires USB Type C to USB Type A Cable for charging”; Jarltech: „order separately: power cable, power supply unit” | bez zmian |
| EK430 | USB-C (USB 3.1, OTG); dodatkowo 8-pinowe złącze na dole i 10-pinowe z tyłu (akcesoria) | karta: „Direct Charger Kit”; Jarltech: „connection: USB-C”, „order separately: power cable, power supply unit” | bez zmian; ładowanie przez USB-C, więc kabel USB-A – USB-C pasuje |
| SF650 | USB-C (USB 2.0) | Jarltech: w zestawie tylko zasilacz EU | nowy blok: kabel `603010005` |

### Akcesoria

| PN | Pole | Przed | Po |
|---|---|---|---|
| `355040099` | nazwa, SEO, opisy, specyfikacja, opis zdjęcia | 6000 mAh, 23,1 Wh | 6160 mAh, bez Wh (przewodnik S20 i Jarltech) |
| `355040097` | link w opisie | „Bateria rozszerzona 6000 mAh Bluebird S20” | „Bateria rozszerzona 6160 mAh Bluebird S20” |
| `204020029` | „Komunikacja” | „Ethernet 1 Gb/s” | „2 × Ethernet 1 Gb/s” |
| `204010058`, `204010059`, `204020019` | opis | „Gniazdo wymaga podkładki dopasowującej terminal.” | „Stacja wymaga podkładki dopasowanej do obudowy terminala (standardowej albo Rugged); podkładka nie jest w zestawie.” (PN podkładki EF551 nieznany API; Jarltech: „requires 1x Shim”); w stacji 4-gniazdowej 4 podkładki |
| `204010059` | opis | brak kabla | „Do komunikacji przez USB potrzebny jest [Kabel USB-A – USB-C Bluebird (603010005)]” (przewodnik EF551) |
| `210080018` | opis, „Pasuje do” | EF551 w obudowie standardowej; EF551R → `210080020` | EF551 standardowy i EF551R w obudowie Rugged Type 3; „Dobór uchwytu zależy od typu obudowy Rugged (Type 1 albo Type 3).” |
| `210080020` | opis, „Pasuje do” | EF551R w obudowie Rugged | EF551R w obudowie Rugged Type 1; to samo zdanie o doborze. Typu obudowy oferowanych PN EF551R nie da się ustalić (opisy PN i przewodnik go nie podają; karta podaje wymiary „Rugged SKU 1”). |
| `210120005`, `210120007` | opis, spec. „Bateria” | „współpracuje z baterią: standardowa” | ograniczenie usunięte (Jarltech podaje je tylko przy `004`/`006`) |
| 10 zestawów na nadgarstek | opis | „z baterią: standardowa i rozszerzona” | „z baterią standardową i rozszerzoną” / „z baterią standardową” |
| `355040080` | opis | „Zestawy na nadgarstek EF551 są przeznaczone do baterii standardowej.” | „Zestawy na nadgarstek do EF551 w obudowie standardowej…” |
| `602010012`, `602010013`, `602010025`, `602010035` | SEO, krótki opis, opis | „zasilacz do stacje 1-gniazdowe Bluebird” | „zasilacz do stacji 1-gniazdowych S10, S20 (204010086), EF551 i EK430” / „4-gniazdowych S10, S20 (204020037), EF551 i EK430” / „1-gniazdowych S20 (204010078, 204010079), S50 i S70” / „4-gniazdowych S20 (204020028, 204020029), S50 i S70” |
| 12 stacji | `seoDescription` | „(204010078). stacja ładuje…” | „(204010078). Stacja ładuje…” |
| 19 stacji | opis | „Do zasilania stacji potrzebne są zasilacz … i przewód zasilający EU. Oba elementy są sprzedawane osobno.” | zdanie usunięte (wymóg jest w bloku „Wymagane”) |
| 6 stacji 4-gniazdowych S10/S20/S50 | opis | „…czyli do 4 szt. na stację” | „Do pełnej stacji potrzebne są 4 podkładki.” Blok „Wymagane” (`getRequiredAccessories`) nie obsługuje ilości — podkładka jest w bloku jako 1 pozycja. |
| `602010041` | opis | S10, S20, S50, S70, EF551, EK430 | dopisane S10 RFID i S70 Explosion Protection (jak w specyfikacji) |
| `603010005` | „Kompatybilność”, opis, `relatedProducts` | bez SF650 | dodane SF650 (USB-C; potrzebny też do ładowarki samochodowej `602010023`) i EK430 w opisie |
| baterie (9 kart) | `shortDescription`, `seoDescription` | np. „bateria standardowa do terminala S10” | konkret ze źródła: Wh, napięcie, hot swap, szybkie ładowanie, czas ładowania |
| `357010003` / `357010006` | — | — | API zna oba PN (`357010003`: 78,94 zł, 0 szt.; `357010006`: 82,90 zł, 4 szt.). Zostaje `357010003` z przewodników S10/S20/S50; `357010006` (Jarltech: „fits for: S10, S20, S50”) to prawdopodobnie nowszy numer tego samego paska — do potwierdzenia u dystrybutora. |

### Strona marki, `llms.txt`, `/terminale-rfid`

- FAQ „Czy terminale Bluebird dostają aktualizacje Androida?”: przed — „Producent deklaruje dla każdego modelu docelową wersję Androida…”; po — „Najwyższa zapowiedziana wersja Androida zależy od modelu, np. Android 17 dla S20 i Android 18 dla S10. Aktualizacje systemu wymagają wykupienia programu gwarancyjnego Bluebird (BluebirdCare). Wersje i terminy zależą od planu Qualcomm.”
- FAQ 5G/eSIM: lista modeli z eSIM uzupełniona o S70 Explosion Protection (karta S70 EP: „1 Nano SIM ; 1 eSIM”).
- „Co sprawdzić przed zakupem”: dopisane „Stacje EF551 wymagają podkładki dopasowanej do obudowy terminala.”
- Tabela modeli: S70 „Dotykowy, full rugged” → „Dotykowy, wzmocniony”.
- `llms.txt`: ceny Bluebird z dopiskiem „netto”; „Wi-Fi 6E lub 5G” → „Wi-Fi 6E, opcja 5G”; „full rugged” → „wzmocniony”.
- `/terminale-rfid`: w definicji dodane zdanie o [Bluebird S10 RFID](/produkt/bluebird-s10-rfid) (czytnik UHF z układem Impinj E710 w uchwycie pistoletowym, pasmo 865–868 MHz); `updatedAt` 2026-10-23.

### Zdjęcia

- Białe plamy (niebieskie elementy zamienione na biel przy wycinaniu): `bluebird-210080023/024/025/027`, `bluebird-210120017/018/019`, `bluebird-621020001`, `S20-ANLB-3`, `S50-ANLB-3`. Wycięte ponownie z obrazów osadzonych w przewodnikach S10/S20/S50/S70 razem z ich maską przezroczystości (smask z PDF) — bez progu koloru, niebieskie przyciski i paski zostały. Płótno jak wcześniej: akcesoria 500 × 500, wypełnienie 0,80; zdjęcia galerii 600 × 1200 wg wzoru CT47; pngquant 85–98. Wynik obejrzany na tle białym, szarym i ciemnym.
- Szkła i folie `624010029/031/040/041`: przewodniki mają tylko rozmyte zdjęcie instrukcji i naklejek, bez produktu — zdjęcia usunięte (logo zastępcze).
- Pasek na ramię `621040003`: jedyne źródło to obraz 99 × 237 px z przewodnika — zdjęcie usunięte (logo zastępcze).
- Nowe zdjęcia z przewodnika EF551 (13 kart): stacje `204010058`, `204010059` (to samo zdjęcie stacji 1-gniazdowej), `204020019`; baterie `355040070`, `355040080`; ładowarka samochodowa ze spiralnym kablem `602010024`; uchwyty `210080018`, `210080020` (jedno zdjęcie uchwytu z przewodnika); zestawy z pierścieniem `210120004`, `210120005`; mocowania `210120006`, `210120007`; rysik `626010005`. Obrazy ze smask — maska z PDF; obrazy na białym tle (stacje, bateria `355040080`) — tło liczone wypełnieniem od krawędzi kadru (piksele jasne połączone z krawędzią), nie progiem w całym obrazie.
- Bez zdjęcia (logo zastępcze) zostaje 17 kart: EK430 (stacje 4, bateria, pasek, osłona), `355040087`, `355040127`, `621010025` (przewodnik EF551 pokazuje terminal od tyłu, pasek niewidoczny), `621040003`, szkła i folie S20/S50/S70/S10 (4) oraz folie EF551 `624010017/018` (to samo rozmyte zdjęcie instrukcji).
- Mapy `product-image-dims.json`, `product-image-frames.json`, `product-image-uniform-bounds.json` poprawione ręcznie tylko w bloku Bluebird (`generate-image-dims.mjs` nieuruchamiany).

### Kontrola po poprawkach

- `npx tsc --noEmit` i `npm run build` bez błędów (komunikaty Prisma/`featuredSlugs` wynikają z braku bazy lokalnie, jak wcześniej); `node scripts/check-product-images.mjs` — wszystkie pliki na miejscu; skrypt kontroli zdjęć Bluebird — 84 zdjęcia zgodne z trzema mapami, przezroczyste rogi, brak białych plam w 23 zdjęciach poprawianych w tym kroku, brak plików i wpisów osieroconych.
- `next start -p 3149`: 9 kart terminali, 78 kart akcesoriów, `/terminale-bluebird` i `/terminale-rfid` — HTTP 200.
- Tabele wariantów (`scrollWidth`/`clientWidth`, zwinięta i rozwinięta): wszystkie 9 kart 1216/1216 przy 1440 i 1280 px oraz 960/960 przy 1024 px — bez przewijania.

## 13. RFR901 i RFR971 (czytniki UHF RFID, 23.10.2026)

Polecenie właściciela: dodać czytniki RFR901 i RFR900 z Jarltech. Dwie karty w `/uchwyty-rfid`: `bluebird-rfr901` i `bluebird-rfr900` (PN `RFR971-…`) oraz karta baterii `bluebird-355040055`.

### Źródła

- Bluebird, dział RFID Solutions → Handheld RFID Reader: strony `RFR901-Universal`, `RFR901-Stand-Alone`, `RFR901-for-S50`, `RFR900-for-EF551`, `RFR900-for-HF550X`, `RFR900S` (zapis w scratchpadzie `bluebird/rfr/pages/`).
- Karty katalogowe (`common/download.php`): `[Data Sheet] RFR901_SA-Universal_EN.pdf` (→ `/datasheets/bluebird-rfr901.pdf`), `[Data Sheet] RFR900(RFR971)_EN.pdf` (→ `/datasheets/bluebird-rfr900-rfr971.pdf`), `RFR901_Manual.pdf` (→ `/instrukcje/bluebird-rfr901-instrukcja-en.pdf`), `[UserManual] RFR900_EN.pdf` (→ `/instrukcje/bluebird-rfr900-instrukcja-en.pdf`), `[CX Proposal] RFR901_EN.pdf` (tylko do weryfikacji).
- Jarltech: `bluebird-rfr901`, `bluebird-rfr900` (opisy PN, „incl.”, „fits for”, akcesoria).
- Przewodnik akcesoriów EF501/EF501R (stary schemat PN RFR900: `W` = 865–868 MHz, `A` = Bluetooth, `X` = bez Bluetooth, `S` = skaner, `E` = bateria rozszerzona).

### Nazwa modelu

Bluebird nazywa czytnik „RFR900” (strony „RFR900 for EF551”, „RFR900 for HF550X”), a kartę katalogową „RFR900(RFR971)”. RFR971 to oznaczenie aktualnej wersji (Bluetooth 5.3, USB-C, wg Jarltech Impinj E710); wszystkie PN u Jarltech zaczynają się od `RFR971-`. Karta: „Bluebird RFR900”, w tytule SEO „RFR900 (RFR971)”, wyjaśnienie w opisie i FAQ.

### PN, ceny, stany (API `/api/stock`, 3 PN na zapytanie, 2 wywołania na partię, 23.10.2026)

| PN | Karta | Cena netto | Stan | Uwagi |
|---|---|---|---|---|
| `RFR901-WCAUN` | RFR901 | 3 950,88 zł | 0 / 0, 57 szt. w dostawie (`on-order`) | EMEA 800 MHz, SE4710, Universal Mount |
| `RFR901-WCASA` | RFR901 | 3 591,71 zł | 0 (`unavailable`) | EMEA 800 MHz, SE4710, Stand Alone Mount |
| `RFR971-WX4S` | RFR900 | 3 423,20 zł | 0 | „EF40X Standard Battery Mount, 3400mAh … 1 USB-C” — opis Jarltech bez słowa „Bluetooth” |
| `RFR971-WA4S` | RFR900 | 3 508,85 zł | 0 | Bluetooth, 3400 mAh, fits for: EF40X |
| `RFR971-WA4SE` | RFR900 | 3 591,70 zł | 0 | Bluetooth, 4000 mAh, fits for: EF40X |
| `RFR971-WAH5X` | RFR900 | 3 508,86 zł | 0 | Bluetooth, 3400 mAh, fits for: HF550X |
| `355040055` | bateria 4000 mAh | 232,08 zł | 0 | Jarltech: „fits for: RFR900, RFR900S” |

### Pominięte

- `RFR901-NCASA`, `RFR901-NCAUNS`, `RFR971-NAH5X`, `RFR971-NX4S` — pasmo 902–928 MHz, nie do UE.
- `355040053` (bateria standardowa 3350 mAh) — Jarltech: „removed from range”, następca bez PN.
- Stacje `204010074`, `204020036` (HF550X), `204020020`, `204010076`, `204010001` — brak kart terminali w sklepie.
- Brak PN baterii RFR901 (4900/7000 mAh) i dedykowanych stacji RFR901 Universal/Standalone u Jarltech.

### Zgodność — dokładne brzmienie źródeł

- RFR971 (Jarltech, każdy PN): `RFR971-WA4S`, `-WA4SE`, `-WX4S` — „fits for: EF40X”; `RFR971-WAH5X` — „fits for: HF550X”. Karta katalogowa RFR900(RFR971): „RFR900 enables you to add long range UHF RFID reading capability to EF401, VF550, EF550, EF550R and EF551”; „Physical Interface for Bluebird EF Series & iOS Devices”; „Bluetooth Wireless Connection for all Kinds of Bluetooth Devices”. Instrukcja RFR900: parowanie z Androidem („Android 5.0 or higher”) i Windows. Na karcie: mocowanie EF40X / HF550X według PN; EF551 — „mocowanie potwierdzimy przed zamówieniem” (żadne źródło nie wiąże oferowanych PN z EF551).
- RFR901 uchwyt uniwersalny: „The RFR901 handheld RFID reader seamlessly integrates with popular smartphones such as iPhone and Samsung through flexible mounting options”; „designed to attach to various types of consumer smartphones”. **Zakresu szerokości ani grubości telefonu nie podaje żadne źródło** (strony, karta, instrukcja, CX Proposal, Jarltech). Na karcie: przykład iPhone/Samsung i potwierdzenie modelu telefonu przed zamówieniem.
- RFR901 a terminale z oferty: „it supports Bluetooth 5.0, which makes it easy to pair it with all mobile devices, including Bluebird current and future models and consumer smartphones”; „you can select the mount for each Bluebird mobile computer, including future models like the S20, S50, S70” (osobne wersje, np. „RFR901 for S50”; oferowane PN to Universal i Stand Alone). EF551, EK430, SF650, S10 — źródła nie wymieniają mocowania; tylko ogólne „all mobile devices” przez Bluetooth.
- Stacje: Jarltech „charges up to 1x device, 1x spare battery and 1x RFR900/901”. Zdjęcia stacji pokazują wyłącznie gniazda terminala i baterii — stacja ładuje terminal z nałożonym czytnikiem w wersji z mocowaniem do tego terminala. Oferowane PN RFR mają inne mocowania, dlatego stacji nie dopisano do `relatedAccessories` RFR; FAQ obu kart opisuje to z linkiem do stacji, a 11 stacji z istniejącym zdaniem o RFR900/RFR901 dostało link do obu kart z tym zastrzeżeniem.

### Rozbieżności źródeł

| Parametr | Źródło A | Źródło B | Na karcie |
|---|---|---|---|
| RFR971 szybkość / zasięg | karta katalogowa, strona 1 i strony www: 900+ tagów/s, 6 m | ta sama karta, tabela: 1250+ tagów/s, 8+ m | „ponad 900 tagów/s”, „ponad 6 m” (prawdziwe w obu wariantach) |
| RFR971 Bluetooth | tabela karty: V5.3+EDR, Class 2 | strony www RFR900 for HF550X / RFR900S: V2.1+EDR | 5.3 (karta katalogowa RFR971) |
| RFR901 bateria standardowa | karta katalogowa, CX, strony: 4 900 mAh | instrukcja: 5 000 mAh; Jarltech (opis PN): 3 400 mAh | 4900 mAh |
| RFR901 Bluetooth | karta: nagłówek „Bluetooth 5.0”, lista przycisków „BT5.3”; instrukcja 5.0; CX 5.3 | — | bez numeru wersji |
| RFR901 szczelność | karta i CX (tabela): IP54 | CX (sekcja trwałości): IP42 | IP54 |
| RFR901 Jarltech opis modelu | „4,900 mAh … IP54 … 1.5 m” | opis PN: „battery, 3400 mAh” | 4900 mAh |
| RFR900 opis Jarltech | 3 050 mAh, Bluetooth 2.1, Micro-USB, 328 g (stary RFR900) | PN RFR971: USB-C, 3400 mAh | dane RFR971 |

### Treść

- Opisy RFR901 i RFR900 napisane od nowa na podstawie kart katalogowych (pozycjonowanie: RFR901 — następca RFR900, trzy tryby spustu, klawisz programowalny, uchwyt uniwersalny, NFC, hot swap, zastosowania z karty; RFR900 — nakładka na terminal, przełączanie przyciskiem terminala, SDK, TankSmith, zastosowania ze strony modelu). Kontrola: 163 i 162 słowa widocznej części; brak wspólnych ciągów 6+ słów między kartami (opis, `shortDescription`, `seoDescription`, FAQ) i z istniejącymi kartami Bluebird. Blok „Wymagane” jest wspólny (te same 3 akcesoria) i trafia do boksu zakupowego.
- Kategoria `/uchwyty-rfid`: `seoTitle`, `seoDescription`, zdanie w `longDescription`, akapit w definicji, FAQ o zgodności z terminalami Bluebird, porównanie „Bluebird RFR901 czy RFR900?”, skaner SE4710 w FAQ o skanerach, `productIds` + `productCount` 13.
- Strona `/terminale-bluebird`: karty RFR nie są widoczne — tak jak Zebra RFD40 na `/terminale-mobilne-zebra` (`belongsToCategory` pomija `uchwyty-rfid` w kategorii `terminale-mobilne`).
- Schema: `product-variant-offers.ts` — dla kart Bluebird z `uchwyty-rfid` kategoria „Uchwyty RFID” zamiast „Terminale mobilne Bluebird”.

### Zdjęcia

- RFR901: `RFR901-WCASA.png` (Stand Alone, obraz 606 × 620 z karty katalogowej z maską `smask`) jako pierwsze — domyślnie wybrany PN to najtańszy `RFR901-WCASA`; `RFR901-WCAUN.png` (uchwyt uniwersalny, 515 × 583 z maską) jako drugie. RFR900: `RFR971-WA4S.png` (sam czytnik, 482 × 321 z maską, powiększenie 1,86×), `RFR971-WAH5X.png` (z zamontowanym terminalem, 479 × 435 z maską).
- Płótno jak pozostałe zdjęcia Bluebird: 600 × 1200 RGBA, produkt 514 px szerokości (margines 43 px), wyśrodkowany. Obejrzane na szarym tle — bez białych plam.
- Mapy zdjęć uzupełnione ręcznie (4 wpisy w każdej), `generate-image-dims.mjs` nieuruchamiany.

### Samokontrola z kartami katalogowymi

| Pole | Ustalenie | Klasa | Działanie |
|---|---|---|---|
| RFR901 opis, specyfikacja: bateria 4900 mAh | Jarltech (opis PN) 3400 mAh, instrukcja 5000 mAh | SPRZECZNE między źródłami | zostaje 4900 mAh z karty katalogowej; do wyjaśnienia z Jarltech, którą baterię dołącza |
| RFR901 wersja Bluetooth | karta 5.0 i 5.3, instrukcja 5.0, CX 5.3 | NIEPRECYZYJNE w źródle | wersja pominięta |
| RFR901 ładowanie bezprzewodowe Qi 15 W | tylko „Universal.Wireless Mount SKU” | POMINIĘTE | nie wiadomo, czy `RFR901-WCAUN` to wersja Wireless; na karcie brak |
| RFR901 złącze 10-pin do EF/VX500/HF550 | dotyczy mocowań do tych terminali | POMINIĘTE | oferowane PN mają uchwyt uniwersalny lub Stand Alone |
| RFR901 Extra Battery Lock, stacje Universal & Standalone, ładowarka 4-gniazdowa | brak PN u Jarltech | POMINIĘTE | — |
| RFR901 gwarancja 12 miesięcy, zawartość „battery, wrist strap” | Jarltech / karta | SPOZA KARTY (dystrybutor) dla gwarancji | — |
| RFR900 szybkość i zasięg | karta przeczy sama sobie (900+/6 m i 1250+/8 m) | SPRZECZNE w źródle | wartości ostrożne 900+/6 m |
| RFR900 Impinj E710, USB-C, mocowanie EF40X / HF550X, Bluetooth według PN | Jarltech | SPOZA KARTY (dystrybutor) | oznaczone w tej dokumentacji |
| RFR900 konfiguracja „RFID with 1D/2D Imager” | karta podaje dwie konfiguracje, źródła nie wiążą ich z PN | POMINIĘTE | skaner w nakładce nie jest opisany; zdjęcie główne pokazuje wersję z okienkiem skanera (ogólne zdjęcie z karty) |
| RFR900 brak Bluetooth w `RFR971-WX4S` | opis Jarltech bez „Bluetooth” + stary schemat PN (`X` = bez Bluetooth) | SPOZA KARTY (wniosek) | w tabeli brak atrybutu „Bluetooth” dla WX4S; do potwierdzenia z Jarltech |
| RFR900 zastosowania (handel, produkcja, dystrybucja) | strona modelu | zgodne | — |
| Bateria `355040055` do RFR971 | Jarltech: „fits for: RFR900, RFR900S”; karta RFR971: Extended 3,65 V, 4000 mAh | SPOZA KARTY (dystrybutor) | karta baterii mówi o RFR900 i RFR900S |
| „Aplikacja i ekran pozostają w terminalu”, „zapasowa bateria pozwala kontynuować inwentaryzację” | ogólne dopowiedzenia | SPOZA KARTY | bez wpływu na zgodność |

Poprawione w trakcie: dymek „Mocowanie” — „Gniazdo …, w które wsuwa się terminal” → „Element …, na którym mocuje się terminal” (instrukcja RFR901 zabrania wsuwania urządzenia); „Zawartość zestawu” bez dopisku o elementach osobnych (lista w „Co jest w kartonie?” dzieliła tekst po przecinkach).

### Kontrola

- `npx tsc --noEmit` bez błędów; `npm run build` — exit 0 (komunikaty Prisma `/api/stock` z braku lokalnej bazy, jak wcześniej); `node scripts/check-product-images.mjs` — wszystkie pliki na miejscu.
- `next start -p 3151`: `/produkt/bluebird-rfr901`, `/produkt/bluebird-rfr900`, `/produkt/bluebird-355040055`, `/uchwyty-rfid`, `/terminale-bluebird`, PDF-y i zdjęcia — HTTP 200, bez przekierowań. Sitemap zawiera 3 nowe karty. `/terminale-bluebird` nie zawiera kart RFR (tak jak RFD40 na stronie Zebra).
- Tabele wariantów (`#warianty .overflow-x-auto`, zwinięte i rozwinięte): RFR900 — 1216/1216 (1440 px), 1201/1201 (1280), 945/945 (1024); RFR901 — 1216/1216, 1201/1201, 945/945. Bez przewijania.
- Kafle `/uchwyty-rfid` (1440 px, pole zdjęcia 299 × 224, wysokość karty 425 px jak w rzędach 2–4; rząd 1 — 421 px): RFR901 152 × 162 px (51% szer., 72% wys.), RFR900 160 × 150 (53%, 67%). Porównanie: RFD40 Premium 156 × 167 (52%, 74%), RFD9030 155 × 155 (52%, 69%), TSL 3128 121 × 125 (41%, 56%), Unitech RP300 130 × 117 (44%, 52%). Skala jak RFD40/RFD90, większa niż TSL i RP300 w tym samym rzędzie (Bluebird ma stałą skalę 0,72 w `ProductCard.tsx`).

## 14. Poprawki RFR po audycie (23.10.2026)

Niezależny audyt RFR901, RFR900 (RFR971), baterii 355040055, 11 stacji i `/uchwyty-rfid` wykazał 4 sprzeczności (S1–S4) i 12 nieprecyzyjności (N1–N12). Poprawki:

| # | Przed | Po |
|---|---|---|
| S1 | RFR901: „wymienia się bez wyłączania czytnika (hot swap)” w opisie i specyfikacji; instrukcja 4.1.2 każe wyłączyć zasilanie przed wyjęciem baterii | „Bateria 4900 mAh jest wymienna.”; spec. „4900 mAh, 3,63 V, wymienna; opcjonalnie 7000 mAh” |
| S2 | RFR900: „ponad 900 tagów na sekundę w odległości ponad 6 m”, spec. „Ponad 6 m”, porównanie w `/uchwyty-rfid` „z ponad 6 m” | „Zasięg odczytu wynosi do 6 m” (karta s. 1, strona modelu, Jarltech: „up to 6 m”); spec. „Do 6 m”; porównanie „z odległości do 6 m”; „ponad 900 tagów/s” bez zmian |
| S3 | RFR971-WX4S bez atrybutu „Bluetooth”, nazwy pozostałych PN z „Bluetooth”, spec. „5.3 … zależnie od PN”, FAQ „w wersjach z Bluetooth” | Atrybut i dymek „Bluetooth” usunięte, nazwy PN bez „Bluetooth”, spec. „5.3 + EDR, klasa 2”, FAQ o RFR971: „z układem Impinj E710 i gniazdem USB-C”. Jarltech przy RFR971-NX4S (ta sama konfiguracja) podaje Bluetooth, a karta RFR971 podaje 5.3 dla modelu. RFR971-WX4S i RFR971-WA4S mają teraz te same atrybuty (mocowanie EF40X, 3400 mAh) |
| S4 | Zdjęcie główne RFR900 `RFR971-WA4S.png` — wersja samodzielna RFR900S z okienkiem skanera, powiększona 1,86× | Plik usunięty (`git rm`) i wykreślony ręcznie z 3 map zdjęć; jedyne zdjęcie `RFR971-WAH5X.png` (nakładka z terminalem) |
| N1 | FAQ RFR900 o ładowaniu: przykład 204020030 i „zgodność potwierdzimy” | „Stacje Bluebird w ofercie nie przyjmują terminali EF40X ani HF550X. Stację do terminala z nałożonym RFR900 dobierzemy na zapytanie.” |
| N2 | 11 stacji: to samo zdanie „…w wersji z mocowaniem do tego terminala” + „Czytniki w ofercie: [RFR900] … i [RFR901] …” (55 par z wspólnymi 6-gramami) | Jedno zdanie na stację, inne w każdej, z nazwą terminala (S20, S50/S70, EF551); bez linków do kart RFR; wprost, że oferowane PN mają inne mocowanie, a wersję do terminala dobierzemy na zapytanie. Wspólne 6-gramy z tego zdania: 0 |
| N3 | FAQ RFR901: „WCASA … przesyła dane przez Bluetooth” | Obie wersje przesyłają dane przez Bluetooth lub kabel USB-C (instrukcja: USB-C „Provides communications”, „Interface USB, Bluetooth”; CX „Bluetooth Connection; USB-C Cable”). Tak samo w dymku „Uchwyt” i spec. „Złącze” |
| N4 | „RFR900 jest nakładką na terminale EF40X i HF550X” (FAQ RFR901, `shortDescription` RFR900, kategoria) | „Oferowane PN mają mocowanie do EF40X albo HF550X” |
| N5 | „…Impinj E710, dlatego od RFR971 zaczynają się numery katalogowe” | „Oferowane PN mają oznaczenie RFR971 i układ Impinj E710.” |
| N6 | `seoTitle` RFR901 „z uchwytem pistoletowym” | „z rękojeścią pistoletową” |
| N7 | „odprawy gości w hotelarstwie” | „zameldowania gości w hotelach” |
| N8 | `seoDescription` RFR900: „PN: RFR971-WA4S, WA4SE, WAH5X, WX4S” | pełne PN: RFR971-WA4S, RFR971-WA4SE, RFR971-WAH5X, RFR971-WX4S |
| N9 | Instrukcja RFR900 z 2016 r. (micro USB, BT 2.1, 3050 mAh) w `downloads` | usunięta z `downloads`; plik PDF pozostał w `public/instrukcje/` |
| N10 | Bateria 355040055: „Standardowa bateria RFR900 ma pojemność 3400 mAh” | „…RFR900 w wersji RFR971 ma pojemność 3400 mAh” |
| N11 | Opisy zdjęć RFR901: „widok z boku”, „widok z przodu” | oba „widok z góry pod kątem” |
| N12 | Kategoria: „Bluebird RFR901 ma … uchwyt na smartfon” | „…a w wersji RFR901-WCAUN uchwyt na smartfon” (także FAQ RFR900 „Kiedy wybrać…”) |

Pominięte w audycie, uzupełnione:

- Zasilacz 602010041, wtyczka 602020024, kabel 603010005: RFR901 i RFR900 dopisane w spec. „Kompatybilność” i w `relatedProducts` (karty RFR wymieniają je jako „Wymagane”).
- RFR901: przycisk zmiany trybu RFID/kody kreskowe w FAQ o przełączaniu (instrukcja 5.1–5.2, przycisk „RFID, barcode switch button”); przesyłanie danych przez USB-C (patrz N3).
- Stacje RFR901 Universal/Standalone nie zostały dodane: brak PN w API.

Kategoria `/uchwyty-rfid`: `seoDescription` bez trybu rozkazującego („Zgodność terminali, łączność i ładowanie w porównaniu.”); zdania o RFR według S2, N4, N12.

Kontrola (`porownaj-opisy.py`):

- `--prefiks=bluebird-rfr`, pola `description`, `shortDescription`, `seoDescription`, `faq`: 0 par.
- `--kategoria=akcesoria`, przed → po: `description` 149 → 100 (zniknęło 49 par stacji; pozostałe 6 par między stacjami to wcześniejsze wspólne frazy o zasilaczu 12 V i komorach na baterie), `shortDescription` 23 → 23, `seoDescription` 55 → 55, `faq` 0 → 0.
