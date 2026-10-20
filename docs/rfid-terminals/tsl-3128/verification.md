# TSL 3128 — weryfikacja 20.10.2026

## Zakres i źródła

- Dodano tylko zatwierdzony PN 3128-EX1-EU: ETSI Lower Band 865–868 MHz, bez skanera kodów, Power Handle USB-C. Nie dodano EX2 ani konfiguracji z imagerem.
- https://www.tsl.com/products/3128/
- https://www.tsl.com/download-manager/3128-datasheet/?wpdmdl=55716 : oryginalny PDF v1.02, 14.10.2026, 8 stron. Pobranie przez przeglądarkę, lokalnie /datasheets/tsl-3128-en.pdf. Dokument obejmuje parametry, PN, akcesoria i mocowania. Nie dodano zewnętrznych linków do pobrania.
- Impinj E510, do 700 odczytów/s, EPC Class 1 Gen 2 v2, opcjonalna microSD do 256 GB osobno, Bluetooth 4.2, USB CDC, IP54, 445 g, 172 × 77 × 150 mm, −10°C do +40°C.
- Karta podaje 7 m nominalnego zasięgu z przypisem „TBC”. Nie publikujemy tej liczby jako potwierdzonego parametru. W treści wyjaśniono zależność zasięgu od etykiety, materiału i otoczenia.
- Gwarancja 12 miesięcy, normalne prawidłowe użytkowanie bez modyfikacji.
- Nie przeniesiono 32 GB pamięci ani skanera kodów z 3138. Nie przedstawiono Command Scan jako funkcji oferowanego EX1 bez imagera.
- Aktualna karta pokazuje mocowania Slide-On. Nie przypisujemy temu modelowi okrągłego złącza ePop-Loq z 3138 mimo pozostałego ogólnego tekstu na stronie producenta.

## Akcesoria

Ponownie użyto istniejących kart trzech potwierdzonych PN, bez duplikowania produktów i zdjęć:
- USBC-PSU-KIT45: 45 W USB-C PD, wtyki EU/UK/US/AU. Wymagane ładowanie min. 30 W PD.
- 31PH-01: zapasowy Power Handle USB-C, zawiera przewód USB-C.
- 31-HS-01: podtrzymanie zasilania podczas wymiany Power Handle, osobne akcesorium.

Karty otrzymały linki do obu modeli i PDF 3128. Nie dodano stacji 3138-CRD-01-KIT do wersji USB-C. Jest przeznaczona dla Power Handle z 8-Way Power Pins. Nie podpięto mocowań bez konkretnego potwierdzonego PN i urządzenia. Nie obiecano niepotwierdzonej zawartości zestawu czytnika; informacja o dołączonym przewodzie dotyczy potwierdzonego zestawu zapasowego 31PH-01.

## Dystrybucja

Odpytano BlueStar, Ingram i Jarltech dla czytnika i wspólnych akcesoriów. Oferty w BlueStar, brak ofert w dwóch pozostałych źródłach. Dane sprzedażowe w stock-check-2026-10-20.json. Czytnik: 0 sztuk fizycznie, 6 oczekiwanych. Nie liczymy oczekiwanych jako dostępnego stanu. Cena i stany korzystają ze wspólnego API, także HTML, metadane oraz JSON-LD. Brak fizycznego stanu wyklucza InStock.

## Zdjęcia i wygląd

- Główna referencja: https://www.tsl.com/wp-content/uploads/3128-A1-Front.jpg — trzy czwarte, bez skanera kodów.
- Druga referencja: https://www.tsl.com/wp-content/uploads/3128-Back-USB-C.jpg — tył, port USB-C.
- Imagen: ostrość i białe marginesy, zachowanie konstrukcji i detali. Drugi widok dodatkowo pomniejszono. Sprawdzono brak dodanego skanera, brak telefonu/stacji i poprawną postać USB-C.
- Porównano wizualnie TSL 3138 i TSL 3166. Wszystkie mają pole główne 584 × 584 px przy oknie 1280 px. Udział widocznego produktu w image-measurements.json; punkty odniesienia 3138: 65,9% wysokości, 3166: 59,5%.
- Akcesoria zachowują istniejące pola 4:3 i normalizację do 66%, jeden wspólny dział. Trzy akcesoria mieszczą się w pierwszym rzędzie.
- Linki tekstowe są niebieskie, semibold 600, bez podkreślenia. Nie zmieniono komponentów ani wzorców układu.

## SEO i kontrola

Unikalny opis, metaopis, FAQ i dane Product dla jednego PN. Brak zbędnej tabeli wariantów. Linki do kategorii, 3138 i 3166; link powrotny z 3138. Kategoria ma 10 uchwytów, pierwsze pięć to Zebra. Fizyczne stany są oddzielone od ilości w drodze; termin wymaga potwierdzenia. Sprawdzono linki, obrazy, pliki, cenę i JSON-LD, TypeScript i ESLint. Widok magazynu pozostaje w produkcji i przekierowuje niezalogowanego do /admin/login.
