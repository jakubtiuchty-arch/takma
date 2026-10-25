# Loftware Cloud — opisy wizualne trzech edycji (25.10.2026)

## Zakres

Designer, Essentials i Business otrzymały osobne opisy w stylu ProGlove / BarTender: nawigację, hero, kluczowe cechy, oryginalną animację producenta, podglądy programu, proces uruchomienia, dobór licencji, wymagania stanowisk, porównanie edycji i kontakt. Teksty napisano po polsku, z odstępami niełamliwymi po jednoliterowych wyrazach. Zachowano aktualne warianty, ceny, quoteOnly, FAQ, dokumenty i zdjęcia główne.

Współdzielone układy i podglądy BarTender rozszerzono o opcjonalny katalog zdjęć, rozmiar obrazu oraz niebieski motyw. Domyślny wygląd BarTender pozostaje pomarańczowy. ProductMotion działa bez widocznych przycisków, z obsługą ograniczonego ruchu i odtwarzaniem wyłącznie w widoku.

## Źródła

- https://pl.loftware.com/products/loftware-cloud
- https://pl.loftware.com/products/loftware-cloud/design
- https://pl.loftware.com/products/loftware-cloud/print
- https://pl.loftware.com/products/loftware-cloud/integrate-and-manage
- https://help.loftware.com/cloud/GetStartedCloudDesigner/02_About-Cloud-Designer.html
- https://help.loftware.com/cloud/ReleaseNotes/24.2/Rebrand/Loftware-product-range.html
- https://help.loftware.com/cloud/LicenseActivate/How-licensing-works/08_Licensing_and_Activation_Glossary.htm
- Wcześniej zweryfikowana dokumentacja produktów: docs/catalog/oprogramowanie-2026-10-25/L2.md i public/downloads/loftware/loftware-cloud-porownanie-edycji-en.pdf.

Rozróżniono Designer (projektowanie i podstawowy druk), Essentials (PowerForms, Web Client, integracje na poziomie Essentials) i Business (Cloud API, zarządzanie drukarkami, analityka). Nie przypisano Designer pełnej automatyzacji; nie przedstawiono SAP, Oracle, hybrydy lub dodatkowych środowisk jako standardowych składników każdego planu. Dodano informację, że wirtualne drukarki PDF/XPS zajmują miejsce w licencji. Zakres Small/Large opisuje konkretne dostępne SKU. Nie zmieniano ich handlowych warunków.

## Media

Film „Loftware Cloud Designer” z oficjalnej strony /design, Wistia ID zz0wdl0jqf:
https://fast.wistia.com/embed/medias/zz0wdl0jqf.json
https://embed-ssl.wistia.com/deliveries/102fce4653e76f6485dda317c721734241049234.bin

Zachowano fragment 59–82 s z animowanym projektantem i podłączaniem danych. Bez dźwięku; kadr przycięto z 1920 × 1080 do 1920 × 960, usuwając dolny pas angielskich napisów. Nie rekonstruowano ani nie generowano interfejsu. Lokalny plik designer-motion.mp4 ma 23 s, ok. 1,57 MB; poster pochodzi z 2. sekundy fragmentu.

Oryginalne obrazy producenta:
- web-designer.png: https://www.loftware.com/siteassets/photos/products/loftwarecloud-image2-design.png
- connected-printing.png: https://www.loftware.com/siteassets/photos/connected-printing-across-the-enterprise---1.png
- roles.jpg: https://www.loftware.com/siteassets/photos/nicelabel/control_center_role_based_access_v11.jpg

## Kontrola

- Lint nowych i zmienionych komponentów: bez błędów; git diff --check: bez błędów.
- Wszystkie trzy karty: jeden H1, dziewięć nowych sekcji, jedna animacja, brak poziomego przewijania przy 390 px i brak błędnych załadowanych obrazów.
- Essentials i Business: przełączniki widoków zmieniają treść i aria-pressed.
- Animacja: readyState 4, odtwarzanie w widoku potwierdzone; przyciski mają wymiar 1 px i clip-path inset(50%).
- Regresja BarTender Professional: zachowane pomarańczowe wyróżnienie, domyślna ścieżka zdjęć i poprawne proporcje.

## Publikacja

Zmiana przygotowana lokalnie. Przy wydaniu pobrać aktualną produkcję i dodać wyłącznie nowe pliki, rozszerzenie wspólnego CSS / podglądów oraz importy i warunek renderowania LoftwareStory w aktualnym page.tsx. Zachować niezależną, niezatwierdzoną zmianę sekcji etykiet termicznych innej sesji. Nie publikować pełnego lokalnego products.ts ani synchronizacji starszego checkoutu.
