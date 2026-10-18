# Korekta treści i SEO terminali RFID — 18.10.2026

Zakres: Zebra TC22R, EM45 RFID, TC53e-RFID. Śródtytuły w standardowym rendererze opisów (## → h3), bez nowego komponentu i bez zmiany galerii, przycisków, tabeli wariantów ani sekcji akcesoriów. Krótkie porównania odsyłają do pozostałych kart.

EM45 RFID: uzupełniono 20 znaczników/s i zakres temperatur pracy 0–50°C w opisie, specyfikacji i odpowiednim FAQ. Źródło: https://www.zebra.com/gb/en/products/spec-sheets/mobile-computers/handheld/em45-rfid.html oraz oryginalny PDF na TAKMA /datasheets/zebra-em45-rfid-en.pdf (sekcje Built-in RFID i Operating Temperature). Bez dopisywania niepotwierdzonych wersji Androida, akcesoriów czy parametrów z innych modeli.

Metadane: dla terminali w kategorii RFID używany dedykowany seoDescription. Wszystkie trzy opisy zawierają model i mieszczą się w 160 znakach. Generator zastępczy normalizuje kropkę końcową i polską odmianę liczby wariantów. Open Graph i Twitter otrzymują ten sam opis co wyszukiwarka na tych kartach.

Schema: pojedyncze PN TC22R i EM45 RFID → Product/Offer. TC53e-RFID → ProductGroup z dwoma Product/Offer. Wspólne potwierdzone parametry w additionalProperty; warianty mają własną dokładną pamięć zamiast zakresu obu konfiguracji. Nie wymyślono variesBy=size dla pamięci. Pozostałe produkty zachowują dotychczasowy kształt JSON-LD.

Dostawa: OutOfStock pozostaje prawdziwym stanem przy braku zapasu. Sklep pokazuje przycisk powiadomienia, więc nie ustawiamy BackOrder ani PreOrder. Przy potwierdzonej oczekiwanej dostawie oferta RFID zawiera opis dostępności, bez obietnicy terminu. Cena nadal pochodzi ze wspólnego snapshotu dystrybutorów i jest brutto. Brak potwierdzonej ceny nie tworzy oferty w JSON-LD.

Weryfikacja: test schematu na rzeczywistych produktach z kontrolowanymi stanami — pojedynczy/grupowy, RAM/Flash, oczekiwanie na dostawę, brak ceny i porównanie z poprzednią wersją dla innych modeli. Kontrola TypeScript i lint. Kontrola w przeglądarce: meta/OG/Twitter, H1/śródtytuły, JSON-LD, niezmienione zdjęcia i rozwijanie akcesoriów 4 → wszystkie → 4, brak przewijania poziomego na telefonie. Wdrożenie wyłącznie przez Git.
