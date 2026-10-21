# SUNMI — poprawki po audycie SEO, AEO, GEO

21.10.2026. Zakres: kategoria, 8 terminali, 22 akcesoria, lista producenta, dane Product/ProductGroup, feed.

## Zmiany

- 22 warianty w sześciu grupach mają nazwy z PN i potwierdzonym wyposażeniem. Nazwy trafiają do schema, Merchant Center i Ceneo bez powtarzania nazwy modelu.
- Pamięć wspólna L2H, V3 i V3H pozostaje we właściwościach wariantów. L2s Pro ma kolumnę RAM/Flash dla wszystkich pięciu PN.
- Dla P09064007 i P09064014 sprzeczne oznaczenia w tytule Jarltech zastąpiono potwierdzonym określeniem „Moduł 1D/2D”. Nie ustalono nowych różnic między PN L2H; nie wymyślono różnic. Puste atrybuty nie przeszkadzają identyfikacji przez PN.
- Osiem metaopisów i początków opisów wymienia model. Dodano konkretne zastosowania oraz po dwa pytania na model. Widoczny FAQ nie generuje FAQPage dla komercyjnych kart SUNMI.
- Usunięto zdublowane akapity 22 akcesoriów. Dodano funkcję, warunki zgodności i rozróżnienie zestawu oraz opcjonalnego wyposażenia. C02004005 ma neutralną nazwę osłony ekranu, bez deklaracji nieustalonego materiału.
- Kategoria korzysta z istniejących komponentów treści: osiem porównań modeli, zastosowania, dobór, zgodność, FAQ. Zachowano krótki hero i wygląd katalogu.
- Lista /katalog?producent=sunmi ma noindex,follow oraz pojedynczy sufiks TAKMA. Nie kanonikalizowano listy 30 pozycji do kategorii ośmiu terminali. Zmiana obejmuje także kombinację SUNMI z innymi filtrami.
- Logo zastępcze pozostaje w interfejsie, ale nie jest Product.image. Produkty bez zdjęcia rastrowego już wcześniej nie trafiały do Merchant Center.
- Cztery ilustracje C14004127, C14004131, C14004143 i C14004144 zawierają niedołączone urządzenia/baterie. Pozostawiono je z objaśnieniem na stronie. Wyłączono te cztery oferty z feedu Merchant Center do czasu uzyskania zdjęć samego sprzedawanego elementu. Nie odtwarzano nieznanej konstrukcji pod zasłaniającym ją terminalem.
- Sześć wcześniej edytowanych WebP ma XMP IPTC DigitalSourceType = compositeWithTrainedAlgorithmicMedia. Dodano metadane bez rekompresji; binarna zawartość VP8/VP8L/ALPH pozostała identyczna. Nie deklaruje to podpisu C2PA.
- Dopisano adres kategorii do istniejącego llms.txt. Ten plik nie jest wymaganiem Google ani gwarancją cytowania.

## Walidacja przed pushem

- TypeScript: bez błędów.
- 30 kart, canonical, schema, oferty oraz osiem rzeczywistych PDF: poprawne odpowiedzi lokalnego serwera.
- Sprawdzono unikalność 22 nazw konfiguracji, pamięć wariantów, osiem metaopisów i 16 pytań, brak zdublowanych akapitów akcesoriów i brak logo w Product.image.
- Merchant: 21 aktualnie kwalifikujących się ofert SUNMI; liczba zależy od potwierdzonej ceny. Cztery ilustracje wyłączone, SVG nie trafiają do feedu.
- Lista producenta: poprawny tytuł i noindex,follow.
- Kontrola przeglądarki: wygląd opisu i tabeli L2s Pro, porównanie kategorii w istniejącym komponencie, rozwijanie akcesoriów. Skala zdjęć nie zmienia się; piksele sześciu edytowanych plików są identyczne z poprzednim commitem. Wcześniejsze pomiary dwóch wzorców CipherLab i SUNMI zachowują ważność.

## Źródła i ograniczenia

- https://www.jarltech.com/en/sunmi-l2s-pro — opisy PN i RAM/Flash; tytuły z niejednoznacznymi nazwami silnika skanującego.
- https://www.jarltech.com/en/sunmi-l2h — wspólne parametry, brak wystarczającego potwierdzenia różnic PN.
- Oficjalne PDF SUNMI na /datasheets/sunmi-*.pdf oraz wcześniejsza macierz compatibility.json.
- https://developers.google.com/search/docs/appearance/structured-data/product-variants
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/ai-features
- https://support.google.com/merchants/answer/6324350?hl=en
- https://cv.iptc.org/newscodes/digitalsourcetype/compositeWithTrainedAlgorithmicMedia

Nie wykonano inspekcji indeksacji ani analizy zapytań GSC. Zmiany usuwają nakładanie intencji w treści i indeksowaniu; nie stanowią dowodu braku kanibalizacji w rzeczywistych wynikach. Brak autentycznych zdjęć 18 akcesoriów pozostaje ograniczeniem materiałów. Nie zastąpiono ich obrazami wymyślonego sprzętu.
