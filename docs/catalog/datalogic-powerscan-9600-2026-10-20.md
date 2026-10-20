# PowerScan 9600 — dodanie 20.10.2026

## Zakres

3 karty: PD9630, PBT9600, PM9600. Każda ma 4 PN: SR/HP × sam czytnik/zestaw USB. PM wyłącznie 433 MHz. Bez AR, DPX, RFID i opcji wyświetlacza. Oferowane zestawy bezprzewodowe zawierają bazę, CAB-552, 8-0935 i przewód EU 6003-0940. Zestawy PD zawierają CAB-553.

4 akcesoria: oddzielne bazy BC9630-BT i BC9630-433, RBP-PM96 oraz CAB-552. Bazy nie są zamienne radiowo. CAB-552 nie jest przewodem do PD9630. Pole relatedAccessories służy do akcesoriów; compatibleAccessories pozostaje puste (legacy pole materiałów eksploatacyjnych).

## Źródła techniczne

- https://apps.datalogic.com/e-catalog/ec-ps9600series.aspx — dokładne PN i skład zestawów.
- https://www.datalogic.com/products/product?id=917&lang=eng — aktualna rodzina.
- https://cdn.datalogic.com/Download?iddwnfile=40865 — karta Rev C 26.06.2024: SR/HP, parametry, 3350 mAh, 3 lata na czytnik.
- https://cdn.datalogic.com/Download?iddwnfile=36482 — instrukcja przewodowa.
- https://cdn.datalogic.com/Download?iddwnfile=36483 — instrukcja bezprzewodowa.
- https://cdn.datalogic.com/Download?iddwnfile=36481 — instrukcja baz: USB-A około 16 h, USB-C około 6,5 h; BC9630 bez IP65.

Nowszy PDF 43645 dotyczy wariantu PBT9600-DKHPRB (3300 mAh i 455 g). Nie przenoszono tych danych na bezekranowe oferowane modele. Nie deklarowano IP65 dla BC9630 ani Ethernet w komplecie USB.

Dokumenty skopiowane do public/datasheets oraz public/instrukcje; linki klienta prowadzą do TAKMA.

## Ceny sprzedaży netto PLN i bieżący stan

Sprawdzono Ingram, BlueStar i Jarltech. Poniżej odpowiedź sklepowego /api/stock po odświeżeniu cache tych 19 PN. Stan w dostawie nie jest stanem dostępnym. Dane dynamiczne; ceny zakupu nie są częścią raportu.

| PN | Netto PLN | PL | EU | W dostawie |
|---|---:|---:|---:|---:|
| PD9630-SR | 1295.77 | 0 | 299 | 58 |
| PD9630-SRK1 | 1386.65 | 0 | 333 | 58 |
| PD9630-HP | 1451.57 | 0 | 257 | 85 |
| PD9630-HPK1 | 1542.45 | 0 | 227 | 20 |
| PBT9600-SRRB | 1986.5 | 0 | 74 | 12 |
| PBT9600-SRRBK10EU | 3227.74 | 1 | 118 | 94 |
| PBT9600-HPRB | 2155.29 | 0 | 30 | 18 |
| PBT9600-HPRBK10EU | 3401.72 | 0 | 61 | 18 |
| PM9600-SR433RB | 1986.5 | 0 | 106 | 10 |
| PM9600-SR433RBK10 | 3227.74 | 0 | 306 | 234 |
| PM9600-HP433RB | 2155.29 | 0 | 236 | 11 |
| PM9600-HP433RBK10 | 3401.72 | 0 | 214 | 30 |
| BC9630-BT | 1189.3 | 0 | 5 | 25 |
| BC9630-433 | 1189.3 | 0 | 155 | 191 |
| RBP-PM96 | 167.34 | 0 | 426 | 450 |
| CAB-553 | 97.61 | 0 | 157 | 90 |
| CAB-552 | 80.88 | 0 | 17 | 218 |
| 8-0935 | 61.36 | 0 | 1398 | 400 |
| 6003-0940 | 22.31 | 0 | 847 | 400 |

## Zdjęcia i pomiar

Główne: sam czytnik, bez opcjonalnej podstawki i ekranu. Dodatkowe ujęcie PD w galerii. Oryginały źródłowe:

- https://partnernet.datalogic.com/upload/image_gallery/eps/Products/PLP-PD9600-FRONT-HR.jpg
- https://partnernet.datalogic.com/upload/image_gallery/eps/Products/PLP-PD9600-LEFT-FACING-HR.jpg
- https://impresoradecredenciales.com/cdn/shop/files/PBT9600-SRRBK10US_1024x1024.jpg?v=1734390417 — sam czytnik PBT9600, bez elementów zestawu US.
- https://s3-apw.badencloud.store/49882-cdn/3487f2f5-6d8d-4934-8513-b7b3e26898b8_1_1687886009.jpg — karta dokładnego PM9600-SR433RBK10 w OCTO24.
- https://partnernet.datalogic.com/upload/image_gallery/eps/Accessories/PLX-PM9600-CRADLE-LEFT-FACING-HR.jpg
- https://partnernet.datalogic.com/upload/image_gallery/eps/Accessories/PLX-POWERSCAN9600-BATTERY-HR.jpg — wybrany lepszy oryginał baterii. Wariant obrazu PLX-PM9600-BATTERY-HR.jpg oraz próba Imagen odrzucone, nie publikowano.
- https://partnernet.datalogic.com/upload/image_gallery/eps/Accessories/cable-2.jpg

Wzorce Zebra DS2208 i DS8208: pole 293,664 × 220,242 px, produkt 160,10 px (72,69%) i 166,64 px (75,66%) wysokości pola. Zob. datalogic-photo-standard-2026-10-20.md. Nowe PD/PBT/PM: identyczne pole, dłuższy bok obiektu 160,78 px (73%). Akcesoria: 62% zamiast 73%. Pomiary obejmują fizyczny obiekt, nie biały plik. Zachowano wspólny ProductCard i układ 4:3.

## Weryfikacja

TypeScript, lint zmienionych plików, 7 kart HTTP 200, lokalne PDF z sygnaturą %PDF-, istniejące cele linków, różniące się kolumny wariantów, brak błędnej sekcji etykiet, admin magazynu chroniony przekierowaniem do logowania. Kontrola wizualna kategorii, karty i akcesoriów przed publikacją; po wdrożeniu kontrola produkcji.
