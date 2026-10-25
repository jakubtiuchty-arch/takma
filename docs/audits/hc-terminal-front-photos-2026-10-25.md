# Zdjęcia frontowe CT37 HC i Memor 12 HC

Status: podgląd lokalny.

Źródła oryginalne:
- Honeywell CT37 HC: https://reach.bluestarinc.com/honeywell-new-ct37-mobile-computer ; arkusz https://reach.bluestarinc.com/hubfs/CT37_White%20pack.png (1420 × 961). Przedni biały terminal w drugim ujęciu od lewej. Ekran pozostaje ciemny jak w materiale źródłowym.
- Datalogic Memor 12 HC: https://www.datalogic.com/eng/healthcare/mobile-computers/memor-12-17-hc-pd-1130.html ; https://www.datalogic.com/upload/products/MobileComputers/Memor12-17HC_700x700.png . Wybrano centralny przedni terminal z zielonym ekranem 12:00; pominięto fioletowy ekran 17:00 i widok tylny.

Przygotowanie: wbudowane image_gen, wyodrębnienie i poprawa ostrości pojedynczych frontów z oficjalnych arkuszy. Prompt: zachować geometrię białej wersji HC, ramki, aparaty, logo, przyciski i oryginalny ekran; usunąć pozostałe urządzenia, widok pionowy na wprost, czyste białe tło, bez cienia, wyśrodkować. Nie dodawano tapety do Honeywella ani elementów konstrukcji.

Wyniki 1254 × 1254 px: public/images/products/ct37-hc-front.png i memor12-hc-front.png. Pierwszy adres i opis w honeywell-hc-terminals.ts i datalogic-hc-terminals.ts dodano na początku galerii (tylko CT37 HC i Memor 12 HC, bez zmian Memor 17 HC). Zachowano poprzednie zdjęcia. Dane plików synchronizowano z produkcją, więc przed publikacją należy przenieść tylko dwie zmiany galerii na aktualną bazę.

Kontrola: ProductGrid i ProductGallery obok Zebra HC55. Pola zdjęć 384,33 × 288,25 px, bez zmiany układu. Widoczna wysokość obiektów w podglądzie: Zebra około 219 px, Honeywell około 224 px, Datalogic około 236 px. Granice obiektu w plikach przy progu różnicy od bieli >22: Honeywell (363,81)-(890,1171); Datalogic (353,54)-(900,1200). Porównano pojedyncze przednie ujęcia z materiałami źródłowymi.

Podgląd: /podglad/terminale-hc-zdjecia. Ceny i stany w podglądzie są pomocnicze; właściwe karty pobierają je z aktualnego API.

## Korekta jednakowej wysokości

Po porównaniu w podglądzie dodano precyzyjną korektę skali zdjęć CT37 HC i Memor 12 HC w istniejących komponentach ProductCard i ProductGallery. Bazą jest widoczna wysokość Zebry HC55: 1026/1200 = 0,855 (próg kontrastu >35). Honeywell: współczynnik 0,984545; Datalogic: 0,935576. Oba ujęcia lekko przesunięto w górę, aby dopasować pionowe położenie do Zebry. Nie zmieniono pól ani układu kafelków. Korekta dotyczy tylko dwóch nowych adresów zdjęć. Sprawdzono kafelki oraz galerie obok Zebry; ESLint trzech zmienionych plików przeszedł bez uwag.
