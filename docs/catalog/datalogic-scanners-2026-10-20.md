# Datalogic — skanery ręczne, 20.10.2026

## Zakres

Poprawiono cztery istniejące karty QuickScan. Dodano GD4690, GBT4600 i GM4600 433 MHz oraz cztery zgodne akcesoria. Nie dodawano starszej serii Gryphon 4500 ani wersji 915 MHz. Zawartość zestawów odróżnia się według PN. Nie przypisano konfiguracji SC parametrów optyki HP bez jednoznacznej deklaracji dla tego PN.

## Źródła producenta

- [QuickScan — PN i zestawy](https://apps.datalogic.com/e-catalog/ec-QSI2500.aspx)
- [Gryphon — PN i akcesoria](https://apps.datalogic.com/e-catalog/ec-gryphon-4600.aspx)
- [QuickScan — specyfikacja](https://cdn.datalogic.com/Download?iddwnfile=40613)
- [Gryphon 4600 — specyfikacja](https://cdn.datalogic.com/Download?iddwnfile=42930)
- [GD4600 — instrukcja](https://cdn.datalogic.com/Download?iddwnfile=42753)
- [GBT/GM4600 — pierwsze uruchomienie](https://cdn.datalogic.com/Download?iddwnfile=42941)
- [QuickScan przewodowe — instrukcja](https://cdn.datalogic.com/Download?iddwnfile=34396)
- [QuickScan bezprzewodowe — instrukcja](https://cdn.datalogic.com/Download?iddwnfile=36726)

Pliki do pobrania zapisano w public/datasheets oraz public/instrukcje. Opisy klientów nie zawierają notatek badawczych.

## Istotne korekty

- QW2520: właściwe zdjęcie wersji przewodowej; VGA 640 × 480, tylko USB.
- QM2500: zdjęcie przypisane do QM; STAR 433,92 MHz, bez deklarowania Bluetooth.
- QBT2500: Bluetooth 5.0 SPP, nie 4.0; nominalne 50 m mierzone przez bazę.
- QuickScan: oświetlenie 617 nm; gwarancja producenta 5 lat dla czterech modeli.
- Gryphon: 5 lat dla przewodowego, 3 lata dla bezprzewodowych czytników. Warunki szybkiego ładowania wymagają zewnętrznego zasilania 12 V, nie samego USB.
- GD4690-BKK1B-HP zawiera PM-BASE-GD46-BK; nie STD-G041-BK (ten jest w BKK1S).
- WLC4690-BK-BT: tylko transmisja GBT; WLC4690-BK-433: tylko transmisja GM 433 MHz. Brak krzyżowego przypisania baz.
- RBP-GM46 to akumulator, nie SuperCap; zdjęcie pokazuje wymianę w rękojeści, co opisano na karcie.

## Ceny i stany

Snapshot sprzedażowy z istniejącego API sklepu, bez kosztów zakupu. Stany PL i EU są fizyczne; dostaw w drodze nie doliczano. Jarltech, Ingram i BlueStar sprawdzono po dokładnym PN. Zestawy i akcesoria korzystają z dotychczasowego API cen i stanów oraz LIVE_OFFER_SLUGS.

| PN | Cena netto PLN | PL | EU |
|---|---:|---:|---:|
| QD2590-BK | 312.72 | 0 | 627 |
| QD2590-BKK1 | 338.20 | 0 | 1168 |
| QD2590-BKK1B | 367.29 | 0 | 461 |
| QW2520-BK | 225.82 | 0 | 30 |
| QW2520-BKK1 | 245.53 | 0 | 1534 |
| QBT2500-BK-BTK1 | 722.04 | 0 | 875 |
| QM2500-BK-433 | 703.96 | 0 | 51 |
| QM2500-BK-433K1 | 722.04 | 0 | 180 |
| GD4690-BK-HP | 836.48 | 0 | 575 |
| GD4690-BKK1-HP | 874.18 | 0 | 34 |
| GD4690-BKK1B-HP | 947.23 | 0 | 349 |
| GBT4600-BK-BTK1-HP | 2049.97 | 0 | 250 |
| GBT4600-BK-BTK1-SC | 2172.50 | 0 | 75 |
| GM4600-BK-433K1-HP | 2049.97 | 1 | 692 |
| PM-BASE-GD46-BK | 97.61 | 0 | 9 |
| WLC4690-BK-BT | 607.93 | 0 | 116 |
| WLC4690-BK-433 | 607.93 | 0 | 101 |
| RBP-GM46 | 139.46 | 0 | 28 |

## Zdjęcia i wygląd

Zdjęcia modeli pobrano z właściwych rodzin Jarltech: QD2500, QW2500, QBT2500, QM2500, GD4600 oraz GBT/GM4600. Dostawca używa wspólnego zdjęcia obudowy GBT/GM. Akcesoria: PM-BASE i WLC z The Barcode Warehouse, bateria RBP-GM46 z galerii Snapweb. Źródła techniczne i zgodność akcesoriów: katalog producenta powyżej.

Imagen poprawił klarowność i białe marginesy. Pliki źródłowe zachowano poza katalogiem publikowanym. Dla każdego publikowanego obrazu zmierzono granice produktu (próg 210, z uwzględnieniem alfa). Galeria korzysta z dotychczasowej normalizacji, a kafelki zachowują pole 4:3 i stały dłuższy bok produktu 62% wysokości pola. Nie zmieniono układu kafelków ani wspólnego rozwijania akcesoriów.

Wzorce: Zebra DS2208 oraz Honeywell Voyager XP 1470g. Obie galerie miały pole 576,5 × 576,5 px przy tym samym oknie. Widoczny produkt w źródłach zajmował odpowiednio 81,6% i 89,5% dłuższego boku; finalny rozmiar zależy też od paddingu i contain. Kafelki Datalogic: pola 293,66 × 220,24 px, produkt 136,55 px, bez różnic wysokości między modelami.

## Kontrola

TypeScript, lint zmienionych plików, integralność linków/PN/plików, 11 kart HTTP 200 z danymi Product, warianty i stany lokalnie. Panel magazynu nadal wymaga logowania (307). Po wdrożeniu należy sprawdzić kategorię, galerię i kafelki akcesoriów na produkcji.

## Uzupełnienie zdjęć — 20.10.2026

Po uwadze dotyczącej widoków z góry znaleziono dodatkowe oryginalne ujęcia:

- GD4690, ujęcie pod kątem: https://www.snapweb.net/catalogo/images/lettori/datalogic/gryphon%204600/gryphon4600_corded_right-light.jpg
- GD4690, tył i ujęcie tylne pod kątem: galeria PN https://scanshop.ee/en/products/datalogic-gryphon-gd4690-barcode-scanner-gd4690-bk-hp
- Bezprzewodowy z bazą, przód i tył: galeria PN https://www.snapweb.net/scheda-prodotto/gbt4600-bk-btk1-hp-datalogic-mod-gryphon-gbt4600-103559
- Oficjalna galeria rodziny: https://www.datalogic.com/upload/prod_line2/Gryphon4600/3.jpg oraz 4.jpg, 5.jpg i 6.jpg. Materiały zastosowań i Healthcare nie zostały użyte jako główne zdjęcia czarnych modeli.

Nowe główne zdjęcia pokazują GD4690 pod kątem oraz bezprzewodowy czytnik z bazą. Baza jest częścią wszystkich oferowanych zestawów GBT i GM. Galerie zawierają po cztery zdjęcia, w tym dotychczasowy widok z góry. Zdjęcie obudowy bezprzewodowej jest wspólne dla GBT/GM; nie zmieniano geometrii ani konfiguracji sprzętu w Imagen. Ujednolicono klarowność i białe tło głównych zdjęć, zmierzono granice widocznego produktu. Zachowano skalę kafelków 62% wysokości pola i istniejący układ 4:3, porównując z QuickScan QD2590 i QBT2500.
