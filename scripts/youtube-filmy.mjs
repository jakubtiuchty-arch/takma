/**
 * Lista filmów do publikacji na kanale TAKMA wraz z metadanymi.
 * Używa jej `scripts/youtube-upload.mjs`.
 *
 * `plik` to ścieżka lokalna (może nie istnieć — wtedy skrypt pobierze `blob`).
 * `napisy` i `plakat` są opcjonalne; napisy wchodzą jako ścieżka polska,
 * plakat jako miniatura (wymaga zweryfikowanego kanału).
 */

const OPIS_STOPKA = `
TAKMA — autoryzowany partner i serwis Zebra.
Drukarki kart, taśmy, karty PVC i serwis: https://www.takma.com.pl
Telefon: +48 607 819 688`

export default [
  {
    slug: 'rozpakowanie',
    plik: '~/Downloads/Zebra ZC100_ZC300_rozpakowanie_PL.mp4',
    blob: 'https://h9ytuea70wxpopwc.public.blob.vercel-storage.com/video/zebra-zc100-zc300-rozpakowanie-pl-cM8RuNmSEzDwnH2NT5POeqBE3ZSiLM.mp4',
    napisy: 'public/video/napisy/zebra-zc100-zc300-rozpakowanie-pl.vtt',
    plakat: 'public/images/products/zebra-zc100-zc300-rozpakowanie-poster.webp',
    tytul: 'Zebra ZC100 i ZC300 — rozpakowanie drukarki kart krok po kroku',
    opis: `Jak wyjąć drukarkę kart Zebra ZC100 lub ZC300 z opakowania, żeby niczego nie uszkodzić i mieć czym odesłać sprzęt do serwisu, gdyby zaszła potrzeba.

0:00 Wstęp
0:14 Dlaczego warto zachować opakowanie
0:32 Instrukcja i tacka z akcesoriami
0:51 Wyjęcie drukarki z pudełka
1:04 Zdjęcie pokrowca

Drukarki kart Zebra ZC100 i ZC300: https://www.takma.com.pl/produkt/zebra-zc100
Materiały eksploatacyjne do serii ZC: https://www.takma.com.pl/tasmy-do-drukarek-kart
${OPIS_STOPKA}`,
    tagi: ['zebra zc100', 'zebra zc300', 'drukarka kart', 'drukarka do kart plastikowych', 'rozpakowanie', 'unboxing', 'karty pvc', 'identyfikatory', 'takma'],
  },
  {
    slug: 'tasma',
    plik: '~/Downloads/Zebra ZC100_ZC300_zakladanie_tasmy_PL.mp4',
    blob: 'https://h9ytuea70wxpopwc.public.blob.vercel-storage.com/video/zebra-zc100-zc300-zakladanie-tasmy-pl.mp4',
    napisy: 'public/video/napisy/zebra-zc100-zc300-zakladanie-tasmy-pl.vtt',
    plakat: 'public/images/products/zebra-zc100-zc300-zakladanie-tasmy-poster.webp',
    tytul: 'Zebra ZC100 i ZC300 — jak założyć taśmę barwiącą',
    opis: `Wymiana taśmy w drukarce kart Zebra ZC100 i ZC300: wyjęcie kasety z opakowania, zdjęcie osłony wałka czyszczącego, napięcie taśmy i włożenie kasety do drukarki.

0:00 Wstęp
0:14 Kaseta z taśmą i osłona wałka
0:26 Napięcie taśmy i kontrola
0:36 Wsunięcie kasety do drukarki
0:46 Zamknięcie pokrywy

Taśmy do ZC100 i ZC300: https://www.takma.com.pl/tasmy-do-drukarek-kart
Drukarka Zebra ZC300: https://www.takma.com.pl/produkt/zebra-zc300
${OPIS_STOPKA}`,
    tagi: ['zebra zc100', 'zebra zc300', 'taśma ymcko', 'wymiana taśmy', 'drukarka kart', 'karty pvc', 'identyfikatory', 'takma'],
  },
  {
    slug: 'karty',
    plik: '~/Downloads/Zebra ZC100_ZC300_wkladanie_kart_PL.mp4',
    blob: 'https://h9ytuea70wxpopwc.public.blob.vercel-storage.com/video/zebra-zc100-zc300-wkladanie-kart-pl.mp4',
    napisy: 'public/video/napisy/zebra-zc100-zc300-wkladanie-kart-pl.vtt',
    plakat: 'public/images/products/zebra-zc100-zc300-wkladanie-kart-poster.webp',
    tytul: 'Zebra ZC100 i ZC300 — jak włożyć karty do podajnika',
    opis: `Wkładanie kart do drukarki Zebra ZC100 i ZC300, w tym orientacja kart z paskiem magnetycznym i z chipem stykowym. Podajnik mieści sto kart o standardowej grubości.

0:00 Wstęp
0:14 Otwarcie podajnika i karty zwykłe
0:25 Karta z paskiem magnetycznym i z chipem
0:37 Zamknięcie klapki

Karty PVC do drukarek Zebra: https://www.takma.com.pl/karty-pvc
Drukarka Zebra ZC100: https://www.takma.com.pl/produkt/zebra-zc100
${OPIS_STOPKA}`,
    tagi: ['zebra zc100', 'zebra zc300', 'karty pvc', 'karty zbliżeniowe', 'pasek magnetyczny', 'drukarka kart', 'identyfikatory', 'takma'],
  },
  {
    slug: 'czyszczenie',
    plik: '~/Downloads/Zebra ZC100_ZC300_czyszczenie_PL.mp4',
    blob: 'https://h9ytuea70wxpopwc.public.blob.vercel-storage.com/video/zebra-zc100-zc300-czyszczenie-pl.mp4',
    napisy: 'public/video/napisy/zebra-zc100-zc300-czyszczenie-pl.vtt',
    plakat: 'public/images/products/zebra-zc100-zc300-czyszczenie-poster.webp',
    tytul: 'Zebra ZC100 i ZC300 — czyszczenie drukarki kartą czyszczącą',
    opis: `Cykl czyszczenia drukarki kart Zebra ZC100 i ZC300 uruchamiany z komputera. Zebra zaleca czyszczenie co 1 000 kart — regularne czyszczenie przedłuża życie głowicy i wałków.

0:00 Wstęp
0:13 Skąd uruchomić czyszczenie
0:33 Wyjęcie kart i kasety z taśmą
0:55 Przebieg czyszczenia
1:08 Karta czyszcząca i powrót do pracy

Zestaw czyszczący do ZC100, ZC300 i ZC350: https://www.takma.com.pl/produkt/zebra-zestaw-czyszczacy-2-karty-zc100-zc300
Serwis drukarek Zebra: https://www.serwis-zebry.pl/serwis-drukarek-zebra
${OPIS_STOPKA}`,
    tagi: ['zebra zc100', 'zebra zc300', 'czyszczenie drukarki', 'karta czyszcząca', 'konserwacja', 'drukarka kart', 'identyfikatory', 'takma'],
  },
]
