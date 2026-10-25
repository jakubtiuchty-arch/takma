# BarTender — pięć kart w stylu ProGlove (25.10.2026)

## Zakres

Nowy opis wizualny dla Starter, Professional, Automation, Enterprise i Cloud: nawigacja wewnętrzna, hero, cztery kluczowe cechy, animacje producenta, podglądy programu, przebieg pracy, dobór licencji, odnośniki do innych edycji i kontakt. Nie zmieniano wariantów, cen, dotychczasowych FAQ ani dokumentów do pobrania.

Wykorzystano istniejący wzorzec SunmiD3Story / ProgloveLanaStory i komponent ProductMotion. Animacje startują w widoku, zatrzymują się poza nim, mają pauzę i respektują prefers-reduced-motion. Interaktywne podglądy korzystają z przycisków aria-pressed i aria-controls. Cała treść opisu jest renderowana po stronie serwera; stan klienta ograniczono do podglądów i istniejącego komponentu wideo.

## Weryfikacja merytoryczna

Źródła producenta, odczyt 25.10.2026:
- https://www.bartendersoftware.com/product
- https://www.bartendersoftware.com/product/on-premises
- https://www.bartendersoftware.com/product/cloud
- https://www.bartendersoftware.com/product/pricing
- https://www.bartendersoftware.com/product/capabilities/create

Starter: Workstation, jeden użytkownik / komputer, drukarki bez limitu, Excel i CSV. Professional: dynamiczne szablony, rozszerzone źródła danych, formularze i RFID; nie przedstawiano automatyzacji ERP jako funkcji tej edycji. Automation: integracje, API, File Drop i formularze druku. Enterprise: Librarian, workflow, audyt, role i failover wymagające konfiguracji. Cloud: zakres zależy od planu; bez obietnicy braku jakiejkolwiek instalacji — opisano Print Gateway i zgodność bezpośredniego druku. Nie skopiowano przyszłych funkcji Enterprise Cloud oznaczonych przez producenta „future”. Nie dodawano gwarancji zgodności regulacyjnej ani procentowych wyników marketingowych.

Widoki programu zachowują oryginalny angielski interfejs; towarzyszące opisy i nawigacja są po polsku. Animacje przedstawiają zasadę procesu, a nie symulację konkretnego interfejsu lub obietnicę pełnego zakresu funkcji w każdej edycji.

## Media

Oryginalne pliki producenta zapisano lokalnie w public/images/bartender-landing. Filmy mają rozdzielczość 2160 × 2160, obrazy interfejsu 1000 × 1000. Postery wyodrębniono z 3. sekundy filmów przez ffmpeg. Nie wykonywano rekonstrukcji ani generowania ekranów programu.

- https://servd-bartender-software.b-cdn.net/production/files/Capabilities-Animations/BarTender-CapabilitiesOvw-Design_080125.mp4
- https://servd-bartender-software.b-cdn.net/production/files/Capabilities-Animations/BarTender-CapabilitiesOvw-Compliance_080125.mp4
- https://servd-bartender-software.b-cdn.net/production/files/Capabilities-Animations/BarTender-CapabilitiesOvw-Print_080125.mp4
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/BT12_Corner_IntelligentFormBuilder_1000x1000.jpg
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/BT12_Corner_TemplateLibrary-Filter_1000x1000.jpg
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/BT12_Screen_CloudWorkflowDesigner_1000x1000.jpg
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/BT12_Mobile_Printingx2_1000x1000.jpg
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/CloudDesigner_Warehouse_screen-1000x1000.jpg
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/BT12_web_bracket-CloudDashboard-1000x1000.jpg
- https://bartender-software.files.svdcdn.com/production/default/BarTender/Product-Images/BT12_Corner_CloudDataConnect_1000x1000.jpg

## Kontrola

Lint nowych komponentów bez błędów. W istniejącym page.tsx pozostaje wcześniejsze ostrzeżenie img w linii ok. 872, niezwiązane ze zmianą. Kontrola w przeglądarce: poprawne renderowanie pięciu kart, jeden H1, brak poziomego przewijania na szerokości 390 px, przełączanie widoków Automation i Cloud, odtwarzanie i pauza animacji. Ogólna kontrola tsc nie zakończyła się z powodu zawieszenia odczytu lokalnego drzewa iCloud; przerwano ją, bez deklaracji pełnego typecheck.

## Integracja i publikacja

Lokalna baza była starsza od produkcji; wcześniejszy commit 2125a9de dodał już lokalnie moduły BarTender / Loftware. Dodano brakujące lokalne slugi middleware, które produkcja już posiada. Tego wyrównania nie należy nakładać ponownie na produkcję. Przy publikacji zastosować nowe pliki i tylko importy / warunek renderowania BartenderStory w aktualnym zdalnym page.tsx. Zachować niezależną, niezatwierdzoną zmianę innej sesji dotyczącą etykiet termicznych (nie włączać jej do commita ani wydania).

Zmiana jest lokalna; brak publikacji w ramach tego etapu.
