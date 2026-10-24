# SUNMI NT320 — lokalny landing

Źródła sprawdzone 24.10.2026:
- https://www.sunmi.com/en/80-label-printer — układ prezentacji, animacje i fotografie.
- src/data/sunmi-products.ts i public/datasheets/sunmi-nt320.pdf — wyposażenie sześciu wersji i warunki podłączenia.

## Wszystkie filmy i animacje produktowe z angielskiej strony

- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p1-bg-en.mp4 → public/images/sunmi-nt320/p1-bg-en.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p10-1.mp4 → public/images/sunmi-nt320/p10-1.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p10-2.mp4 → public/images/sunmi-nt320/p10-2.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p10-3.mp4 → public/images/sunmi-nt320/p10-3.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p10.mp4 → public/images/sunmi-nt320/p10.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p3-2-1.mp4 → public/images/sunmi-nt320/p3-2-1.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p5-1.mp4 → public/images/sunmi-nt320/p5-1.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p5-2.mp4 → public/images/sunmi-nt320/p5-2.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p5-3.mp4 → public/images/sunmi-nt320/p5-3.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/p9-1-en.mp4 → public/images/sunmi-nt320/p9-1-en.mp4
- https://file.cdn.sunmi.com/newebsite/products/80-label-printer/video/tvc-en.mp4 → public/images/sunmi-nt320/tvc-en.mp4

10 animacji + film prezentacyjny. Inne warianty językowe tych samych filmów pominięte. Filmy przekodowano do H.264, szerokość 1600 px i faststart; TVC zachowuje dźwięk i natywne sterowanie. Animacje ładowane przy wejściu w ekran, zatrzymywane poza widokiem; możliwość pauzy i respektowanie prefers-reduced-motion.

Odtworzone także ruchoma galeria siedmiu konfiguracji i animowany przewód. Zdjęcia i konstrukcja sprzętu nie były generowane. Ceny, dostępność i główna galeria pozostają bez zmian.

Warunki w opisie: skaner tylko C04050007; linerless C04050001/C04050009; Wi-Fi i BLE w czterech wskazanych wersjach; Hyper Wi-Fi wymaga dostosowania; personalizacja i podstawa opcjonalne; aplikacja i integracja wymagane dla chmury/płatności.

Weryfikacja lokalna: lint dwóch komponentów, brak poziomego przepełnienia przy 390 px, kotwice wskazują istniejące sekcje, przełączanie typów wydruków i personalizacji, pauza filmu, poprawne ładowanie i odtwarzanie w przeglądarce.
