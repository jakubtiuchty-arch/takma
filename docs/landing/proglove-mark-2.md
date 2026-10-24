# ProGlove MARK 2 — lokalny landing, 24.10.2026

Źródła: https://proglove.com/products/hardware/mark-2/ oraz public/datasheets/proglove-mark-2.pdf (Technical Specification, October2022), istniejący katalog src/data/proglove-products.ts. Nie stosowano notatek o źródłach w tekście klienta.

Oryginalne media z proglove.com/wp-content/uploads/2023/03/: mark2-hero-scanner-1.png, mark2-benefits-variants-1.png, mark-2-image.jpg i Connectivity-desktop-1.gif. Obrazy WebP z zachowaną przezroczystością (paleta źródła ma zielony RGB, ale alpha0 — nie spłaszczano tła). Animacja60klatek640×480przekształcona do H264, bez zmiany treści. wear3/4 to oryginalne zdjęcia istniejącej galerii produktów proglove-m004-eu-3/4.png.

Parametry:40g,50×45×16mm,670mAh,ok.12000skanów (zależneodwarunków),2hładowania,IP54,upadki2m,-20…+50°C,ładowanie5…40°C. Porównanie tych samych kodów:UPC-A SR4.1–58.4cm/MR5.8–96.5cm;Code3920mil SR4.1–92.2cm/MR5.3–137.2cm. Zaokrąglone wartości w UI. Bez twierdzenia,że150cm dotyczy każdej etykiety.

SR M004-EU, MR M003-EU. BLE Android/iOS/HID; rozszerzona integracja AndroidINSIGHTMobile/iOSSDK. PCUSBprzezGateway osobno. Nie obiecano bezpośredniego połączenia z każdym Windows ani integracjiERP bez konfiguracji.

Mocowanie i ładowarka wymagane, po jednym z każdej grupy, sprzedawane osobno. Osobne linki do3mocowań i2stacji. IndexTriggerod-5°C, do zimnaHandStrap/Reel. Główna galeria, ceny, stock, natywne wymagane-elementy i4kafelkiakcesoriów bez zmian.

Zakres publikacji: podgląd lokalny do oceny. Użytkownik polecił natychmiastową publikację FLEX3 i poprawek SUNMI, następnie rozpoczęcie MARK2. MARK2 nie wysyłano na produkcję.

Weryfikacja: ESLint i kontrola TypeScript nowych komponentów poprawne. Przełączniki SR/MR zmieniają PN i zakres; animacja parowania odtwarza się (readyState4). Mobile390px: scrollWidth390, brak poziomego przewijania. Kontrast nagłówków na jasnym tle skorygowany do #626b73. Screenshot outputs/proglove-mark-2-local.png w folderze rozmowy.
