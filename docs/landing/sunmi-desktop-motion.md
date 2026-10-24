# Uzupełnienie animacji T3 PRO / D3 — 24.10.2026

Źródła: https://www.sunmi.com/en/t3-pro-series/, https://www.sunmi.com/en/d3-family, https://www.sunmi.com/en/d3-pro/ — HTML, skrypty produktu i CSS.

T3 PRO oraz T3 PRO MAX:
- pre-launch/video/p4-1-en.mp4 + p4-1-poster.mp4 — film rodziny i zapowiedź.
- pre-launch/video/p4-2-en.mp4 + p4-2-poster.mp4 — konstrukcja, film angielski i zapowiedź.
- t3-pro/lg/p6-1-video.mp4 — czytnik linii papilarnych.
- t3-pro/lg/p6-2-video.mp4 — odchylenie ekranu.
- t3-pro/lg/print_0.jpg … print_67.jpg — kompletna oryginalna sekwencja otwierania drukarki, przekształcona do MP424fps; tylko MAX.

D3: d3-family/video/tvc-en.mp4 + tvc-poster.mp4. Film przedstawia całą rodzinę, opis jasno odróżnia D3 P01300033 bez drukarki. Świadomie pominięto p14-1.mp4, bo pokazuje prowadnicę papieru drukarki innych modeli; nie jest wyposażeniem oferowanego D3.
D3 PRO: d3-pro/video/video-en.mp4 + poster-en.mp4. Pozostałe sekcje producenta są zdjęciami i przejściami CSS, a nie dodatkowymi filmami sprzętu.

Źródła mediów w domenie https://file.cdn.sunmi.com/newebsite/products/. Lokalne pliki public/images/sunmi-desktop-motion. H264, max1600px, CRF24, faststart; sekwencja drukarki1400pxCRF20. Pliki angielskie, bez zmiany konstrukcji sprzętu.

ProductMotion: ładowanie po wejściu w widok, pauza poza ekranem, ręczna pauza trwała, reduced motion, odtwarzanie raz dla krótkich prezentacji. Pełne filmy z dźwiękiem tylko na żądanie; zapowiedzi bez dźwięku z pętlą.

Kontrola TypeScript dla zmienionych komponentów, ESLint i git diff --check poprawne. Ceny, galeria i kafelki bez zmian.
