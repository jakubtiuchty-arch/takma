# Pobieranie danych klienta po NIP — GUS REGON/BIR

Endpoint: `/api/admin/nip?nip=...`, wyłącznie dla zalogowanego administratora.

GUS jest źródłem podstawowym dla przedsiębiorstw i instytucji wpisanych do REGON, również spoza wykazu VAT. Wykaz VAT MF pozostaje źródłem awaryjnym. Odpowiedź zawiera `source: gus | mf`; formularz wyświetla źródło. Nie ma wpisów na sztywno dla poszczególnych NIP-ów.

## Konfiguracja

W projekcie Vercel `takma`, środowisko Production, ustaw serwerową zmienną `GUS_BIR_API_KEY` na klucz produkcyjny uzyskany od GUS. Nie używaj prefiksu NEXT_PUBLIC. Po ustawieniu uruchom wdrożenie z gałęzi `claude/takma-frontend-build-RrM9E` zgodnie z AGENTS.md. Nie umieszczaj klucza w repozytorium, logach ani czacie.

11.11.2026: w konfiguracji produkcyjnej nie było klucza GUS. Do jego dodania instytucje nieobecne w wykazie VAT nie będą automatycznie uzupełniane. Formularz podaje przyczynę i pozwala wpisać dane ręcznie.

Dostęp GUS jest bezpłatny. Wniosek o klucz należy wysłać na regon_bir@stat.gov.pl, podając pełną nazwę podmiotu, REGON, imię i nazwisko osoby kontaktowej, jej email i telefon, przybliżoną liczbę jednoczesnych użytkowników oraz informacje o adresach IP zgodnie z instrukcją GUS. Vercel korzysta z dynamicznych adresów wyjściowych; nie deklarować stałego adresu bez jego skonfigurowania. Nie wysłano wniosku w imieniu użytkownika.

Źródła oficjalne:
- https://api.stat.gov.pl/Home/RegonApi
- https://api.stat.gov.pl/Content/files/regon/GUS-Regon-UslugaBIRver1.2-dokumentacjaVer1.4.zip (WSDL BIR 1.1 i instrukcja techniczna; pobrano 11.11.2026)
- https://www.gov.pl/web/kas/api-wykazu-podatnikow-vat. (nowy adres MF od 15.10.2026)

## Weryfikacja

`node scripts/test-gus-nip.cjs` — testy bez sieci: instytucja, format adresu, SOAP/MTOM i encje XML, NIP ze spacjami/myślnikami, suma kontrolna, wybór podmiotu zamiast oddziału, autoryzacja, brak wyników, brak konfiguracji, awaria i fallback MF.

Sprawdzono też rzeczywiste logowanie i wyszukiwanie w oficjalnym środowisku testowym GUS dla NIP 5261040828. Publiczny klucz testowy pochodzi z instrukcji GUS; nie jest używany przez kod produkcyjny. Baza testowa jest historyczna i anonimizowana — nie służy do potwierdzania aktualnych danych NAWA.

Po dodaniu klucza produkcyjnego: w `/admin/oferty/nowa` wpisz 5272820369 i wybierz „Pobierz dane”. Oczekiwane: Narodowa Agencja Wymiany Akademickiej, REGON 368205180, Polna 40, 00-635 Warszawa, źródło GUS. Sprawdź również znaną firmę VAT. Nie zapisuj testowej oferty. Samo pobranie nie tworzy klienta ani oferty; uzupełnia istniejący formularz.
