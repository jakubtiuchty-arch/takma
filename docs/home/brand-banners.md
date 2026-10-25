# Banery ProGlove i SUNMI — podgląd lokalny, 25.10.2026

## Cel i format

Dwa ogólne banery do istniejącej karuzeli strony głównej. Desktop: 520 px wysokości, pełna szerokość, ruch po prawej i tekst po lewej. Samodzielne wersje mobilne: 740 px, tekst nad filmem. Obecna strona główna na telefonie zachowuje swój statyczny pierwszy slajd; nie zmieniano tej zasady przy dodawaniu dwóch pozycji karuzeli. Obie wersje można obejrzeć na /podglad/banery-marek (noindex).

## ProGlove — analiza i przekaz

Oferta TAKMA: LEO, MARK Basic, MARK 2, MARK 3, MARK Display, MAI, mocowania i stacje. Wspólnym wyróżnikiem jest skanowanie urządzeniem noszonym na dłoni, a nie jeden zasięg czy liczba skanów. Zastosowania obejmują kompletację, pakowanie, przyjęcia, produkcję i montaż. LEO jest modelem do bliskich odczytów, MARK obejmuje różne zasięgi, Display dodaje ekran e-paper, MAI dotyk i obsługę zadań. Nie wolno przenosić parametrów, ochrony IP ani sposobu integracji jednego modelu na całą markę.

Problem klienta: sięganie po ręczny skaner i odkładanie go pomiędzy operacjami. Główny przekaz: „Skanuj bez odkładania towaru.” Obraz pokazuje autentyczny produkt na dłoni podczas pracy z towarem. Cały baner prowadzi od korzyści do oferty skanerów; nie obiecuje procentowego przyspieszenia, zmniejszenia urazów, pracy bez konfiguracji ani darmowego oprogramowania INSIGHT. Nowe urządzenia MARK Pro/LANA z aktualnej strony producenta nie zostały dopisane do oferty TAKMA.

Źródła: https://proglove.com/, https://proglove.com/products/hardware/mark-3/, https://proglove.com/products/wearable-companion/mai/, lokalny katalog ProGlove i dokumentacja sześciu kart.

## SUNMI — analiza i przekaz

Oferta obejmuje stanowiska POS (T3/D3), mobilną obsługę (V/M), terminale do skanowania (L), modułowe kioski FLEX, ekrany kuchenne FLEX KDS i drukarki NT. Sprowadzanie marki do jednej drukarki lub komputera POS pomija jej główną zaletę: wybór różnych urządzeń do kolejnych miejsc obsługi. Android i integracja z aplikacjami są wspólnym kontekstem dostępnych urządzeń, ale baner nie obiecuje jednej dołączonej aplikacji, automatycznej integracji całej instalacji ani fiskalizacji/płatności w standardzie.

Przekaz: „Przy ladzie. W ruchu. W kuchni.” Trzy frazy odpowiadają trzem ujęciom i wyróżnionym przyciskom: POS, terminal mobilny, KDS. Opis wymienia też kioski, a dolna linia drukarki — film nie udaje kompletnej prezentacji każdego produktu. CTA prowadzi do ogólnej oferty SUNMI.

Źródła: https://www.sunmi.com/en/products/, https://www.sunmi.com/en/t3-pro-series/, https://www.sunmi.com/en/v3-plus/, https://www.sunmi.com/en/flex-3-kds/, lokalny katalog i istniejące opisy SUNMI. Nie użyto danych procentowych z laboratoriów jako ogólnej obietnicy dla marki.

## Media i obróbka

Nie generowano urządzeń ani scen AI. Wykorzystano rzeczywiste filmy producentów, bez dźwięku, lokalnie H264 1440×810, faststart. Podgląd statyczny WebP dla ograniczenia ruchu.

- ProGlove: https://proglove.com/wp-content/themes/proglove/videos/homepage-v2-hero-section-video.mp4 — fragmenty 6,6–8,1 s i 4,8–6,6 s; tempo 0,625×. Wynik ok. 5,3 s w pętli.
- SUNMI: dotychczasowe lokalne t3-intro.mp4 (źródło w docs/landing/sunmi-desktop-motion.md), 62,8–66,8 s; oryginalne kadry przycięte bez angielskich haseł poza urządzeniami. V3 PLUS: https://file.cdn.sunmi.com/newebsite/products/v3-plus/video/v3-plus-en.mp4 — 15–19 s. KDS: lokalny sunmi-flex-3-kds/tvc-en.mp4 — 7,5–11,5 s, źródło: film z https://www.sunmi.com/en/flex-3-kds/. Wynik 12 s w pętli; 3 rozdziały po 4 s.
- Logotypy z istniejących SVG producentów w repozytorium. Zmieniono wyłącznie viewBox i metryki płótna dla usunięcia pustych marginesów; kształty i kolory zachowane.

## Implementacja i kontrola

BrandBanner: jeden aktywny film na baner, lazy loading przez IntersectionObserver, pauza poza widokiem, ręczna pauza, obsługa prefers-reduced-motion, dostępne przyciski. SUNMI synchronizuje wyróżnienie hasła i rozdziałów z czasem filmu. Istniejące slajdy strony głównej pozostają; dwa banery dodano jako slajdy 2 i 3 z czasem 14 s każdy. Podgląd lokalny, bez publikacji.

ESLint, scoped TypeScript i diff check poprawne. Testy odtwarzania w przeglądarce (readyState 4, brak błędów), przełączania SUNMI i szerokości mobilnej 390 px bez poziomego przewijania. Kadry sprawdzone na desktopie i telefonie. Filmy/pauza sprawdzone również w lokalnej karuzeli. Przy prefers-reduced-motion oba filmy pozostają zatrzymane na czasie 0.

Publikacja ProGlove/SUNMI: dad0c96f, deployment dpl_2jRghTbbsDZyRkpi816uGiUAu3mL, READY. Oba filmy readyState 4 na produkcji. CTA SUNMI doprecyzowano do /katalog?producent=sunmi, ponieważ /terminale-sunmi obejmuje wyłącznie terminale mobilne, a baner pokazuje także POS i KDS.

## Aktualizacja jakości SUNMI
Montaż ponownie bezpośrednio z oryginalnych filmów Full HD producenta. T3 62,8–66,8 s, V3 15–19 s, KDS 7,5–10 s. Bez pośredniego pliku 1440 px i ponownego powiększania. Wynik 1920×700, H.264 CRF16, faststart; poster WebP95. Zachowano brak planszy Rebuilt i czarnego pasa. Do oceny lokalnej.
