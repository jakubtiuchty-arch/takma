# Datalogic: rozbudowa ręcznych skanerów i audyt SEO — 20.10.2026

## Zakres

Dodano 16 modeli oraz 9 zgodnych akcesoriów. Kategoria obejmuje łącznie 26 kart skanerów. Zakres to ręczne skanery z kategorii producenta wskazanej przez użytkownika; nie obejmuje stacjonarnych Magellan, OEM, terminali ani ponownej rozbudowy RFID.

## Inwentaryzacja cyklu życia

Źródło listy rodzin: https://www.datalogic.com/eng/automatic-data-capture/handheld-scanners-pc-3.html i publiczny endpoint /Ajax/productsResult (categoryId=3). Źródła PN: sekcje Models & Accessories na stronach rodzin. Nie publikowano nowych modeli na podstawie samej obecności w starym katalogu.

- QuickScan QBT2131, QM2131 i QD2131: oznaczone jako Obsolete w aktualnej galerii PartnerNet. Pominięte.
- QuickScan QBT2101: brak dostatecznie jednoznacznego aktualnego zestawu specyfikacji i cyklu życia; pominięty.
- Gryphon 4500: nie dodano. Dystrybutorzy opublikowali informację o ostatnich zamówieniach 10.10.2026 i zastąpieniu przez 4600. Wymagałby potwierdzenia oryginalnego komunikatu EOL przed ewentualną ofertą wyprzedażową. https://www.alcaidc.com/mobile/newsinfo.aspx?%3FTitle=Obsolescence+Notice+EOL+Datalogic+GD4500+SERIES&emailID=31951
- PowerScan 9500: aktualna sekcja PN na stronie producenta prowadzi do PD9531/PBT9501/PM9501 DPM Evo; te wersje dodano. Nie dodano zwykłych 9501 ani AR z historycznych materiałów bez potwierdzonego bieżącego statusu.
- Rodziny PowerScan 9600, QuickScan 2500 i Gryphon 4600 były już obecne. Zachowano je i sprawdzono ich treści.

## Nowe modele i intencje wyszukiwania

| Karta | Główna intencja | Kody | Interfejs/radio |
|---|---|---|---|
| Datalogic QuickScan QD2220 | skaner 1D USB do długich kodów | 1D | USB |
| Datalogic Gryphon GD4220 | Gryphon 1D tylko USB | 1D | USB |
| Datalogic Gryphon GD4290 | Gryphon 1D USB i RS-232 | 1D | USB / RS-232 |
| Datalogic Gryphon GBT4200 | skaner 1D Bluetooth z ładowaniem indukcyjnym | 1D | Bluetooth 5.0 |
| Datalogic Gryphon GM4200 | skaner 1D STAR 433 MHz | 1D | STAR 433,92 MHz |
| Datalogic Heron HD3130 | Heron 1D do kasy i recepcji | 1D | USB / RS-232 / KBW |
| Datalogic Heron HD3430 | Heron 2D do QR i kodów z ekranów | 1D i 2D | USB / RS-232 / KBW |
| Datalogic TD1120 | TD1100 Lite USB, okno 65 lub 90 mm | 1D | USB |
| Datalogic TD1170 | TD1100 Lite RS-232 i KBW | 1D | RS-232 / KBW |
| Datalogic TD1130 | TD1100 Pro z wieloma interfejsami | 1D | USB / RS-232 / KBW / Wand |
| Datalogic PowerScan PD9130 | przemysłowy skaner 1D przewodowy | 1D | USB / RS-232 / KBW |
| Datalogic PowerScan PBT9100 | przemysłowy skaner 1D Bluetooth | 1D | Bluetooth 3.0 |
| Datalogic PowerScan PM9100 | przemysłowy skaner 1D STAR 433 MHz | 1D | STAR 433 MHz |
| Datalogic PowerScan PD9531 DPM Evo | skaner przewodowy DPM do oznaczania części | 1D i 2D, DPM | USB / RS-232 / KBW / RS-485 |
| Datalogic PowerScan PBT9501 DPM Evo | skaner DPM Bluetooth z wymiennym akumulatorem | 1D i 2D, DPM | Bluetooth 3.0 |
| Datalogic PowerScan PM9501 DPM Evo | skaner DPM STAR 433 MHz do produkcji | 1D i 2D, DPM | STAR 433 MHz |

## PN, ceny i stany

Snapshot sprzedażowy z istniejącego API sklepu. Ceny netto PLN. Fizyczny stan PL/EU, bez doliczania dostaw w drodze. Zapytano Ingram, BlueStar i Jarltech; zbiorcze zapytanie Ingram miało timeout, późniejsze zapytania API kart odświeżyły dane przez zwykły mechanizm. Nie zapisano cen zakupu. Ceny i stany na kartach są dynamiczne.

| PN | Cena netto PLN | PL | EU |
|---|---:|---:|---:|
| QD2220-BK | 173.89 | 0 | 0 |
| QD2220-BKK1 | 186.20 | 0 | 469 |
| QD2220-BKK1S | 201.59 | 0 | 966 |
| GD4220-BKK1 | 333.63 | 0 | 674 |
| GD4290-BK | 308.39 | 0 | 730 |
| GBT4200-BK-WLC | 515.74 | 0 | 0 |
| GBT4200-BK-BTK1 | 959.34 | 0 | 80 |
| GM4200-BK-433-WLC | 515.74 | 0 | 129 |
| GM4200-BK-433K1 | 959.34 | 0 | 301 |
| HD3130-BK | 450.05 | 0 | 120 |
| HD3130-BKK1B | 499.53 | 0 | 395 |
| HD3130-BKK1S | 572.58 | 0 | 12 |
| HD3430-BK | 855.34 | 0 | 11 |
| HD3430-BKK1B | 902.46 | 0 | 108 |
| HD3430-BKK1S | 975.50 | 0 | 0 |
| TD1120-BK-65 | 205.00 | 0 | 37 |
| TD1120-BK-65K1 | 235.63 | 0 | 399 |
| TD1120-BK-90 | 205.00 | 0 | 16 |
| TD1120-BK-90K1 | 235.63 | 0 | 147 |
| TD1170-BK-65 | 205.00 | 0 | 709 |
| TD1170-BK-90 | 205.00 | 0 | 18 |
| TD1130-BK-65 | 273.33 | 0 | 169 |
| TD1130-BK-90 | 273.33 | 0 | 100 |
| PD9130 | 1326.93 | 0 | 26 |
| PD9130-K1 | 1410.02 | 0 | 59 |
| PBT9100-RB | 2316.28 | 0 | 0 |
| PBT9100-RBK10EU | 3474.43 | 0 | 27 |
| PM9100-433RB | 2207.22 | 0 | 32 |
| PM9100-433RBK10 | 3305.64 | 0 | 38 |
| PD9531-DPM | 3051.16 | 0 | 10 |
| PD9531-DPMK1 | 3139.44 | 0 | 116 |
| PBT9501-DPMRB | 3708.13 | 0 | 9 |
| PM9501-DPM433RB | 3531.55 | 0 | 45 |
| PM9501-DPM433RBK10 | 4616.99 | 0 | 27 |
| WLC4190-BK-BT | 567.86 | 0 | 8 |
| WLC4190-BK-433 | 539.59 | 0 | 107 |
| RBP-GM4200 | 72.51 | 0 | 120 |
| BC9030-BT | 997.14 | 0 | 9 |
| BC9030-433 | 950.40 | 0 | 129 |
| 90A052065 | 50.20 | 0 | 351 |
| 90A051230 | 55.30 | 0 | 166 |
| CAB-438 | 80.88 | 0 | 398 |
| CAB-524 | 97.61 | 0 | 106 |

## Źródła techniczne i dokumenty

- QuickScan 2200 Series: https://www.datalogic.com/eng/handheld-scanners/quickscan-2200-series-pd-933.html
- Gryphon 4200 Series: https://www.datalogic.com/eng/retail-transportation-logistics-healthcare-other-applications/handheld-scanners/gryphon-4200-series-pd-878.html
- Heron 3400: https://www.datalogic.com/eng/retail-healthcare/handheld-scanners/heron-3400-pd-694.html
- Heron 3100: https://www.datalogic.com/eng/handheld-scanners/heron-3100-pd-652.html
- TD1100: https://www.datalogic.com/eng/handheld-scanners/td1100-pd-342.html
- PowerScan 9100 Series: https://www.datalogic.com/eng/manufacturing-transportation-logistics/handheld-scanners/powerscan-9100-series-pd-868.html
- PowerScan 9500 Series: https://www.datalogic.com/eng/retail-manufacturing-transportation-logistics-healthcare/handheld-scanners/powerscan-9500-series-pd-866.html
- quickscan2200: https://cdn.datalogic.com/Download?iddwnfile=37567 → public/datasheets/datalogic-quickscan2200-en.pdf
- gryphon4200: https://cdn.datalogic.com/Download?iddwnfile=39690 → public/datasheets/datalogic-gryphon4200-en.pdf
- heron3430: https://cdn.datalogic.com/Download?iddwnfile=37239 → public/datasheets/datalogic-heron3430-en.pdf
- heron3130: https://cdn.datalogic.com/Download?iddwnfile=37241 → public/datasheets/datalogic-heron3130-en.pdf
- td1100: https://cdn.datalogic.com/Download?iddwnfile=25372 → public/datasheets/datalogic-td1100-en.pdf
- powerscan9100: https://cdn.datalogic.com/Download?iddwnfile=34416 → public/datasheets/datalogic-powerscan9100-en.pdf
- powerscan9501dpm: https://cdn.datalogic.com/Download?iddwnfile=27217 → public/datasheets/datalogic-powerscan9501dpm-en.pdf

Dokumenty zachowano bez zmiany treści. Sprawdzono sygnaturę %PDF-. Pobieranie na nowych kartach prowadzi do domeny TAKMA.

## Zgodność akcesoriów

- WLC4190-BK-BT: GBT4200, WLC4190-BK-433: GM4200 433 MHz. Producent wykorzystuje wspólne zdjęcie obudowy. Nie przypisano ich do Gryphon 4600.
- RBP-GM4200: GBT4200 i GM4200, 2550 mAh; bez przypisania do GD lub Gryphon 4600.
- BC9030-BT: PBT9100/PBT9501 DPM; BC9030-433: PM9100/PM9501 DPM 433 MHz. Baza STAR ma antenę; zdjęcie Bluetooth nie zostało użyte do STAR.
- CAB-438 do baz BC9030. CAB-524 do PD9130 i PD9531 DPM według listy producenta; zestaw PD9531-DPMK1 zawiera inny przewód CAB-550, co zachowano w opisie i tabeli.
- 90A052065: QD2220, TD1120, TD1130. Nie do TD1170 (bez USB).
- 90A051230/CAB-350: GD4290, Heron HD3130/HD3430, TD1170/TD1130; wymagane źródło zasilania według instrukcji, bez sugerowania bezpośredniego podłączenia 12 V do czytnika 5 V.
- Wykorzystano istniejące karty 90A052258, STD-G041-BK, STD-QW25-BK, STD-AUTFLX-QD25-BK, 8-0935 i 6003-0940. Rozszerzono potwierdzone przypisania i linki zwrotne.

## SEO, AEO, GEO i kanibalizacja

- Sprawdzono wszystkie 26 kart: odrębne tytuły i metaopisy, H1, sekcje, linki, Product/ProductGroup z aktualnymi ofertami. Nowe opisy są własną polską redakcją prostego języka technicznego.
- Kategoria odpowiada na zapytanie ogólne i wybór rodziny. Karty odpowiadają na konkretny model/PN i jego rolę: 1D/2D/DPM oraz USB/RS-232/Bluetooth/STAR. Karty nie są wariantami indeksowanymi pod osobnymi URL każdego PN. Canonicale prowadzą do właściwej karty modelu.
- TD1120/1130/1170 rozdzielono według interfejsów; Heron 3130/3430 według rodzaju kodów; Gryphon 4200/4600 według 1D/2D; PowerScan 9100/9600/DPM według rodzaju i podłoża kodów. Nie stosowano canonicali między odrębnymi modelami.
- Nie utworzono konkurencyjnych stron rodzin, takich jak dodatkowa kategoria QuickScan 1D z podobnym tekstem. Każdy nowy model ma link z tabeli kategorii i co najmniej jednego akcesorium lub porównania.
- Rozbudowano kategorię przez istniejące bloki strony marki: tabelę rodzin, poradnik, zastosowania, porównania i FAQ. Hero pozostaje krótki. W tabeli użyto istniejącego renderera RichText; bez nowego wzorca interfejsu.
- FAQ widoczne dla klienta, bez FAQPage na tych stronach handlowych. Nie dodano HowTo ani obietnic rozszerzonych wyników FAQ.
- Publiczne robots.txt pozwala botom wyszukiwania/AI pobierać stronę. Dodano adres kategorii do llms.txt, co ułatwia odkrywanie, ale samo nie gwarantuje cytowań.
- Audyt struktury i treści nie dowodzi braku kanibalizacji w wynikach wyszukiwania. Nie analizowano danych zapytanie→URL z Search Console; po indeksacji potrzebna jest obserwacja rzeczywistych wyświetleń i kliknięć.

Porównano także nakładanie słów w opisach (Jaccard, narzędzie pomocnicze, nie próg rankingowy). Najbardziej podobne pary do kontroli ręcznej:

- datalogic-gryphon-gbt4200 / datalogic-gryphon-gm4200: 0.696
- datalogic-td1120 / datalogic-td1170: 0.656
- datalogic-powerscan-pbt9100 / datalogic-powerscan-pm9100: 0.655
- datalogic-gryphon-gd4220 / datalogic-gryphon-gd4290: 0.651
- datalogic-td1120 / datalogic-td1130: 0.635
- datalogic-td1170 / datalogic-td1130: 0.63
- datalogic-heron-hd3130 / datalogic-heron-hd3430: 0.623
- datalogic-gryphon-gd4290 / datalogic-td1130: 0.617

Wspólne zdania opisują interfejsy, wyposażenie i warunki pracy rodziny. Pierwszy akapit, zawartość PN, ograniczenia i porównanie rozdzielają zastosowania. Nie znaleziono identycznych pełnych opisów, tytułów ani metaopisów kart.

## Zdjęcia i kontrola wyglądu

Oryginały PartnerNet zapisano jako WebP. Poniżej adresy źródłowe użytych ujęć (nie wszystkie fotografie w każdej rodzinie są osobnym modelem).

- PLP-QUICKSCAN-QD2200-FRONT-BLACK-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/products/PLP-QUICKSCAN-QD2200-FRONT-BLACK-HR.jpg
- PLP-QUICKSCAN-QD2200-RIGHT-FACING-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/products/PLP-QUICKSCAN-QD2200-RIGHT-FACING-HR.jpg
- PLP-GRYPHON-GD4200-BLACK-RIGHT-FACING-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-GRYPHON-GD4200-BLACK-RIGHT-FACING-HR.jpg
- PLP-GRYPHON4200-LEFT-FACING-BLACK-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-GRYPHON4200-LEFT-FACING-BLACK-HR.jpg
- PLP-GRYPHON4200-RIGHT-FACING-IN-CRADLE-BLACK-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-GRYPHON4200-RIGHT-FACING-IN-CRADLE-BLACK-HR.jpg
- PLP-HERONHD3100-BLACK-LF-300.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-HERONHD3100-BLACK-LF-300.jpg
- PLP-HERONHD3100-BLACK-RF-300.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-HERONHD3100-BLACK-RF-300.jpg
- PLP-HERONHD3430-BLACK-LF-300.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-HERONHD3430-BLACK-LF-300.jpg
- PLP-HERONHD3430-BLACK-RF-300.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-HERONHD3430-BLACK-RF-300.jpg
- PLP-TOUCHTD1100-65-RF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-TOUCHTD1100-65-RF-HR.jpg
- PLP-TOUCHTD1100-90-RF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-TOUCHTD1100-90-RF-HR.jpg
- PLP-PD9100-LF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-PD9100-LF-HR.jpg
- PLP-PS9100-RF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-PS9100-RF-HR.jpg
- PLP-PS-PBT9100-INBASE-LF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-PS-PBT9100-INBASE-LF-HR.jpg
- PLP-POWERSCANPD9530-DPM-LF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-POWERSCANPD9530-DPM-LF-HR.jpg
- PLP-POWERSCANPD9530-DPM-RF-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-POWERSCANPD9530-DPM-RF-HR.jpg
- PLX-GRYPHON4200-CRADLE-LEFT-FACING-BLACK-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/accessories/PLX-GRYPHON4200-CRADLE-LEFT-FACING-BLACK-HR.jpg
- PLP-PS-PBT9100-BASE-HR.jpg: https://partnernet.datalogic.com/upload/image_gallery/eps/plp/PLP-PS-PBT9100-BASE-HR.jpg

Dodatkowe źródła:
- PM9100: https://www.jarltech.com/sites/default/files/images/product/main/datalogic_pm9100.png
- PBT9501 DPM: https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/PBT9501-DPM-img2.jpg
- PM9501 DPM: https://www.ico.de/img-79/p/bcdpf22/2000x2000/datalogic-powerscan-pm9501-hd-dpm-rb-multi-if-gun-only.jpg
- BC9030-433: https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/BC9030-433.jpg
- RBP-GM4200: https://www.esto.de/media/image/80/97/50/gryphon4200_batterie_600x600.jpg
- 90A052065: https://image320.macovi.de/images/product_images/320/762233_0__8977097_5193111503.jpg
- 90A051230: https://amlabels.co.uk/media/catalog/product/cache/aff90e433e2a95a89f550fc51690d0ee/9/0/90a051230.png
- CAB-438: https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/CAB-438.jpg
- CAB-524: https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/CAB-524.jpg

Imagen poprawił ostrość PM9100, BC9030-433, RBP-GM4200 i 90A052065. Porównano z oryginałami: zachowano okno odczytu, antenę, styki, przewody i złącza. Kadr ma białe tło. Pomiar źródłowych granic i skali odbywa się w istniejącym mechanizmie obrazów. Kafelki: pole 4:3, dłuższy bok skanera 73% wysokości pola, akcesorium 62%, tak jak wcześniej dodane Datalogic. Galerie używają standardowej skali. Wzorce: GD4690 i GBT4600 oraz akcesoria 90A052258 i 8-0935. Zmierzono pola akcesoriów 282,25 × 211,6875 px (dłuższy bok produktu 131,25 px). Pierwszy rząd 4 akcesoriów, reszta przez istniejące rozwijanie.

## Sprawdzenia

TypeScript, lint, integralność PN/linków/plików i test HTTP nowych oraz istniejących kart. 35 stron (26 skanerów + 9 nowych akcesoriów) zwraca 200, zachowuje kanoniczny URL oraz właściwy schemat. /admin/etykiety-na-magazynie nadal wymaga logowania (307). Filtry obejmują 12 modeli 1D, 14 modeli 2D, 3 DPM, Bluetooth i STAR. Przed publikacją sprawdzono galerie, kafelki, tabelę kategorii i rozwijanie akcesoriów. Po wdrożeniu z Gita: kontrola tej samej domeny, obrazów, filtrów i pobierania PDF.
