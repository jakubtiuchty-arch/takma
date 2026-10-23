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
