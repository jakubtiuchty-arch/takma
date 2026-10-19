# Zasady treści w projekcie TAKMA

- W treściach dla klientów nie umieszczaj notatek o źródłach ani sposobie weryfikacji informacji, np. „Parametry pochodzą ze specyfikacji producenta, a okresy ochrony z warunków gwarancji”. Takie informacje i odnośniki źródłowe zachowuj w audytach oraz dokumentacji roboczej, nie w opisie produktu.
- Weryfikuj parametry i gwarancję w wiarygodnych źródłach, ale klientowi podawaj same przydatne fakty i warunki. Powyższa zasada nie wyklucza potrzebnych instrukcji, sterowników ani plików do pobrania.

## Standard języka

- Przy pisaniu i poprawianiu treści dla klientów stosuj [standard języka TAKMA](docs/standard-jezyka.md), oparty na ASD-STE100.
- W języku polskim stosuj adaptację zasad prostego języka technicznego; nie deklaruj formalnej zgodności polskiego tekstu z angielskim standardem.
- Dotyczy to także opisów akcesoriów, krótkich opisów, komunikatów i metadanych SEO. Zachowuj wymagania techniczne, zgodność modeli i oryginalne numery PN.

## Spójność wyglądu i działania strony

- Przy każdej zmianie strony najpierw sprawdź analogiczne istniejące karty lub sekcje i użyj tych samych komponentów, układu oraz sposobu działania. Nie wprowadzaj własnych wzorców bez wyraźnego polecenia użytkownika.
- Przed publikacją porównaj zmienioną stronę z istniejącą kartą wzorcową, także wizualnie. Sprawdź rozmiary zdjęć, odstępy, przyciski oraz rozwijanie i zwijanie sekcji.
- Akcesoria na karcie produktu: początkowo pokaż pierwszy rząd (4 produkty na komputerze), a pozostałe udostępnij przez istniejące rozwijanie „Pokaż pozostałe” i zwijanie „Zwiń”. Zachowaj standardowy rozmiar zdjęć i jeden wspólny dział „Akcesoria”, chyba że użytkownik poleci inaczej.
- Zdjęcia produktów: przed publikacją zmierz wymiary pola zdjęcia oraz udział widocznego produktu w kadrze i porównaj z co najmniej dwiema istniejącymi kartami podobnych produktów. Sam identyczny rozmiar pola nie wystarcza. Jeśli produkt jest za duży, popraw skalę i białe marginesy w Imagen (`image_gen`), zachowaj konstrukcję produktu i ponownie sprawdź wynik na stronie. Nie zmieniaj układu kafelków, aby dopasować pojedyncze zdjęcie.

- Akcesoria RFD40: zachowuj standardowe pole zdjęcia 4:3 i wspólną linię tytułów w rzędzie. Nie dodawaj wpisów wymuszających kwadratowe pola dla pojedynczych akcesoriów. Widoczny produkt ma zajmować około 66% wysokości pola; sprawdzaj pierwszy rząd i całą rozwiniętą listę na dwóch kartach wzorcowych.

## Wdrożenia produkcyjne

- Każdą zmianę najpierw zapisz w commicie i wypchnij na gałąź `claude/takma-frontend-build-RrM9E`.
- Produkcję wdrażaj wyłącznie z Gita, z tej gałęzi. Nie uruchamiaj lokalnych wdrożeń produkcyjnych przez `vercel --prod`, `vercel deploy --prod`, `--prebuilt --prod` ani ręcznego promowania lokalnego wdrożenia.
- Przed pushem pobierz aktualny stan gałęzi i zachowaj zmiany dodane przez innych. Funkcje przeznaczone na produkcję muszą być zapisane w repozytorium; nie mogą istnieć wyłącznie w osobnym folderze roboczym.
- Widok `/admin/etykiety-na-magazynie`, jego pozycja w menu i obsługa danych są częścią strony produkcyjnej. Przy kolejnych zmianach zachowaj je na gałęzi produkcyjnej i sprawdź ich obecność we wdrożeniu z Gita.

## Pliki do pobrania

- Nowe dokumenty do pobrania zapisuj na infrastrukturze TAKMA, np. w `public/datasheets/` lub `public/instrukcje/`, i podpinaj lokalne adresy. Nie kieruj przycisków pobierania PDF do serwerów producentów ani dystrybutorów.
- Zachowuj oryginalną treść dokumentów. Adres źródłowy, wersję i datę pozyskania zapisuj w dokumentacji roboczej.
- Przed publikacją sprawdź, czy plik jest rzeczywistym PDF, a nie stroną błędu HTML. Po wdrożeniu sprawdź pobieranie z domeny TAKMA, kod 200 i typ pliku. Nie dodawaj odnośnika do dokumentu, którego nie udało się pozyskać.
