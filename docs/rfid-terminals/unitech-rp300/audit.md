# Unitech RP300 — kontrola, 20.10.2026

## Zakres
Dwa europejskie PN: RP300-37E830G bez skanera, RP300-37EA30G ze skanerem SE4107. Jedna karta w Uchwyty RFID. Pięć produktów Zebra nadal zajmuje początek kategorii. Nie dodano TSL1166 ani innych modeli.

## Parametry i wyposażenie
- Źródło producenta: https://www.ute.com/eu/products/detail/RP300 . Karta EN Rev.D 07/26, Quick Start V1.4, Accessories Brochure2026/5, Cradle Quick Start V1.1. Oryginalne pliki zapisane w public/datasheets i public/instrukcje.
- E710, EPCGen2v2/Gen2X, Bluetooth5.3 SPP/HID/iAP2, IP65, 1.5m warunki testowe, bateria7000mAh, 564g z2D, 172.02×81×156.36mm. Do25m jest zastrzeżone warunkami. Nie obiecano tego zasięgu dla każdego znacznika ani podano globalnej mocy33dBm jako dopuszczalnej w Europie.
- PN i rozróżnienie EU: oferta BlueStar, https://www.levata.com/en-gb/unitech-rp300-37ea30g-reader oraz katalog referencji https://www.a3multimedia.com/lecteur-code-barre-rfid/lecteur-rfid-a-main-sr269/references?fabricant=UNITECH . Skaner SE4107 jest opcją rodziny według producenta.
- Zestaw QSG: RP300, bateria, pasek,5tagów,kartaQR. Zasilacz, stacja, adapter i terminal osobno. Tagi z zestawu nie są osobną ofertą sampli.
- Pięć akcesoriów potwierdza katalog: stacja5000-900148G, PSU1010-900072G, EU1.8m1550-905940G, EA660holder3210-900047G iEA530holder3210-900048G. Zawartość adapterów: tray,odpowiedni bumper,2małe+4dużeśruby. Nie dopisano zgodności innych terminali.
- Stacja zawiera samą stację; wymagaPSU45W iEUcord. PSU maC6,wymagaC5. Wariant stacji148nie maUSB-A z149. QSGpotwierdza bezpośrednieUSB-C PD czytnika i brak ładowania zamontowanego iOS; zgodny Android może ładować równocześnie.
- Nie dodano baterii1400-900080G bez oferty cenowej. Brak jednoznacznych regionalnych warunków gwarancji konkretnegoPN: nie dopisano okresu.

## Dystrybucja
Świeże bezpośrednie zapytania doIngram/BlueStar/Jarltech. BlueStar potwierdził obaPN i5akcesoriów. Ingram/Jarltech bez oferty. Ceny sprzedażyPLN po standardowej konwersji i narzucie, zapi/stock. Koszty zakupu nie są publikowane w dokumentacji. Czytnikbez2D:2szt;2D:0;akcesoria:0fizycznie.71przewodów oczekiwanych to dostawa, nie stan.

## Zdjęcia i wygląd
Główne źródło to sam czytnik z ilustracji oryginalnej kartyPDF. Galerie HTML mają opcjonalnyEA660; ujęcie zachowane jako drugie z jednoznacznym podpisem. Built-in image_gen poprawił ostrość i tło. Dla akcesoriów wyodrębniono osobny przedmiot z kolażu, bez opcjonalnego terminala. Manifest i pomiary obok.
Normalizacja istniejącym mechanizmem: długi bok66.2% głównego pola,66% dla akcesoriów. Galeria na ekranie1280px ma około570–584px zależnie od paska przewijania. Porównanie wizualne TSL3128 i3138, około62.4% i65.9% widocznego produktu, wykonane przedpublikacją. Układu nie zmieniano.
Jedna sekcjaAkcesoria:4widoczne,piąte poPokażpozostałe;Zwińdziała. Tabela PNwyłącznie różnica Skanerkodów. Linki blue600 bezpodkreślenia. Opis unikalny, krótki język techniczny, FAQ, metaopis i standardowe Product/Offer.

## Kontrola
TypeScript iESLint bezbłędów. Wszystkie6kart,4PDFikategoriaHTTP200. ObaPN mają właściweceny i schemaInStock/OutOfStock. Powiązania i rejestracja podkategorii poprawne. /admin/etykiety-na-magazynie zachowane307dologowania. Produkcja wyłącznieGit.

## Korekta kafelka po zgłoszeniu użytkownika

Przyczyną rozbieżności był warunek w ProductCard: wpis w product-image-frames zmieniał pole RP300 na kwadratowe. TSL3128 i3138 miały pola4:3. Sama kontrola galerii nie wykryła błędu w kategorii.

Dla RP300 zastosowano istniejącą normalizację obrazu w standardowym polu4:3. Widoczny długi bok ma58% wysokości pola, dopasowane do zdjęć TSL z naturalnymi marginesami i paddingiem. Pozostałe produkty i galeria RP300 zachowują dotychczasowe ustawienia.

Pomiar lokalny przy1280px: TSL3138,TSL3128,RP300 mają pola293.664×220.242px. Tytuły TSL3128 iRP300 mają identyczne y2117.469px w ostatnim rzędzie. Porównanie wizualne potwierdziło podobną wielkość sprzętu. AGENTS.md uzupełniono o kontrolę kategorii i kafelków powiązanych na produkcji po wdrożeniu.
