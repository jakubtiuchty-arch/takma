/**
 * Treść huba /tasmy-termotransferowe-sato (przewodnik, tabele, HowTo, FAQ).
 * Fakty: katalog taśm SATO 2026 (PL), karty techniczne serii SATO (2025), karty drukarek SATO w sklepie.
 * Tabela drukarek renderuje się z `sato-ribbon-printers.ts`.
 */

import type { SatoRibbonHub } from './sato-ribbon-hub-types'

const S = '/tasmy-termotransferowe-sato/serie'

export const satoRibbonHub: SatoRibbonHub = {
  seoTitle: 'Taśmy termotransferowe SATO | woskowe, woskowo-żywiczne, żywiczne',
  seoDescription: 'Taśmy termotransferowe SATO: woskowe SWX, woskowo-żywiczne SWR i żywiczne SRS w liniach Value, Flex i Flow. 61 rozmiarów, gilza ½″ lub 1″, nawój IN i OUT.',
  h1: 'Taśmy termotransferowe SATO',
  heroIntro: 'Oryginalne taśmy barwiące SATO do druku termotransferowego na etykietach papierowych i foliowych. **8 serii w 3 liniach**: Value do ekonomicznego druku na co dzień, Flex do różnych materiałów i zastosowań oraz Flow do długich serii z rzadszą wymianą taśmy. Taśmy woskowe SWX służą do papieru, woskowo-żywiczne SWR do etykiet narażonych na tarcie, a żywiczne SRS do folii syntetycznych.',
  badges: ['8 serii, 61 rozmiarów', 'Linie Value, Flex i Flow', 'Doradztwo w doborze'],
  modelsIntro: 'Seria określa skład taśmy (wosk, wosk-żywica lub żywica) i linię SATO. Strona serii pokazuje parametry techniczne, pasujące drukarki SATO i wszystkie rozmiary. Każdy rozmiar ma osobną kartę z ceną, dostępnością i doborem do drukarki.',
  sections: [
    { label: 'Woskowe', flagship: 'swx95', rest: ['swx85', 'swx100', 'swx-max'] },
    { label: 'Woskowo-żywiczne', flagship: 'swr100', rest: ['swr85'] },
    { label: 'Żywiczne', flagship: 'srs100', rest: ['srs85'] },
  ],
  guide: [
    {
      heading: 'Co to jest taśma termotransferowa SATO?',
      content: 'Taśma termotransferowa (taśma barwiąca) to cienka folia poliestrowa (PET) z warstwą barwnika. Głowica drukarki nagrzewa wybrane punkty, a barwnik przechodzi z taśmy na etykietę. Skład barwnika decyduje o trwałości nadruku, odporności i materiałach, na których taśma drukuje:\n\n- **wosk** — do etykiet papierowych, najniższy koszt i niska energia głowicy;\n- **wosk-żywica** — do papieru powlekanego i wybranych tworzyw, większa odporność na tarcie;\n- **żywica** — do folii syntetycznych PET, PE, PP i PVC, najwyższa odporność na ścieranie, chemikalia i ciepło.\n\nSATO projektuje taśmy razem z etykietami i drukarkami SATO. Każda seria przechodzi testy jakości, trwałości i prędkości druku w europejskim laboratorium technicznym SATO we Francji.',
    },
    {
      heading: 'Trzy linie taśm SATO: Value, Flex i Flow',
      content: '**Linia Value** — do ekonomicznego druku na co dzień. Ma najniższy koszt etykiety w ofercie taśm SATO. Służy do dużych nakładów standardowych etykiet papierowych w wysyłce, transporcie i magazynie. Serie: [SWX85](/tasmy-termotransferowe-sato/serie/swx85) (wosk), [SWR85](/tasmy-termotransferowe-sato/serie/swr85) (wosk-żywica), [SRS85](/tasmy-termotransferowe-sato/serie/srs85) (żywica).\n\n**Linia Flex** — do zastosowań mieszanych, które wymagają większej trwałości. Taśmy Flex drukują na szerszej gamie materiałów: papierze, materiałach powlekanych i wybranych materiałach syntetycznych. Dzięki temu jedna seria zastępuje kilka taśm w magazynie. Serie: [SWX95](/tasmy-termotransferowe-sato/serie/swx95), [SWX100](/tasmy-termotransferowe-sato/serie/swx100) (wosk), [SWR100](/tasmy-termotransferowe-sato/serie/swr100) (wosk-żywica), [SRS100](/tasmy-termotransferowe-sato/serie/srs100) (żywica).\n\n**Linia Flow** — do druku w dużych nakładach z mniejszą liczbą wymian taśmy. Taśma ma cieńszą folię, więc na rolce mieści się jej więcej: drukarka o limicie 600 m przyjmuje do 800 m taśmy Flow. Według SATO drukarka pracuje do 40% dłużej bez wymiany, a taśma zużywa o 26% mniej tworzywa i nie zawiera rozpuszczalników. Seria: [SWX-MAX](/tasmy-termotransferowe-sato/serie/swx-max).',
    },
    {
      heading: 'Wosk, wosk-żywica czy żywica — porównanie',
      content: 'Typ taśmy wynika z materiału etykiety i warunków, w jakich etykieta będzie używana. Tabela porównuje trzy typy taśm SATO.',
      table: 'porownanie',
    },
    {
      heading: 'Parametry 8 serii taśm SATO',
      content: 'Tabela zbiera najważniejsze parametry wszystkich serii. Oceny materiałów i odporności są w skali SATO od 0 do 5 (5 = najlepiej). Pełne dane są na stronie każdej serii.',
      table: 'serie',
    },
    {
      heading: 'Którą taśmę SATO wybrać do etykiety?',
      content: 'Najczęstsze zastosowania i pasujące serie. Przy nietypowym materiale lub wymaganiach (chemikalia, praca na zewnątrz, normy branżowe) dobór należy potwierdzić wydrukiem próbnym na docelowej etykiecie.',
      table: 'dobor',
    },
    {
      heading: 'Drukarki SATO i taśmy: gilza, długość, szerokość, nawój',
      content: 'Taśma pasuje do drukarki, gdy zgadzają się cztery parametry: gilza, maksymalna długość rolki, zakres szerokości i nawój. Tabela pokazuje te wartości dla drukarek SATO. Karta każdego rozmiaru taśmy pokazuje drukarki SATO, do których ten rozmiar pasuje.',
      table: 'drukarki',
    },
    {
      heading: 'Jak dobrać taśmę SATO do drukarki',
      content: '- **Druk termotransferowy.** Drukarka musi mieć mechanizm taśmy. Drukarki tylko termiczne nie używają taśmy.\n- **Gilza.** Drukarka biurkowa CT4-LX przyjmuje rolki na gilzie 12,7 mm (½″). Pozostałe drukarki SATO przyjmują gilzę 25,4 mm (1″).\n- **Długość rolki.** CT4-LX przyjmuje do 100 m, WS4 do 300 m, WT4-AXB do 450 m, a CL4NX Plus, CL6NX Plus, CL4-SXR, CL6-SXR, S84NX i S86NX do 600 m. Wyjątek: rolka [SWX-MAX](/tasmy-termotransferowe-sato/serie/swx-max) 800 m ma średnicę rolki 600 m.\n- **Szerokość.** Taśma powinna być nieco szersza od etykiety, aby osłonić głowicę, np. etykieta 102 mm → taśma 110 mm. Szerokość musi mieścić się w zakresie drukarki: CL4NX Plus i CL4-SXR 39,5–128 mm, CL6NX Plus i CL6-SXR 59–177 mm.\n- **Nawój.** OUT oznacza warstwę barwiącą na zewnątrz rolki, IN do wewnątrz. Drukarki przemysłowe SATO przyjmują oba nawoje bez zmiany ustawień. CT4-LX przyjmuje tylko OUT.\n- **Typ taśmy.** Papier → wosk, papier powlekany i tarcie → wosk-żywica, folia syntetyczna i chemikalia → żywica.\n- **Prędkość.** Taśmy SWX85, SWX95, SWX-MAX i SWR85 drukują do 400 mm/s, SWR100 i SRS100 do 300 mm/s, a SWX100 i SRS85 do 250 mm/s.',
    },
    {
      heading: 'Nawój IN i OUT — co oznacza',
      content: 'Nawój określa, po której stronie rolki jest warstwa barwiąca:\n\n- **OUT** (ink out, face out) — barwnik na zewnątrz rolki. To najczęstszy nawój w ofercie taśm SATO.\n- **IN** (ink in, face in) — barwnik do wewnątrz rolki.\n\nTen sam rozmiar bywa dostępny w obu wersjach, np. [SWX95](/tasmy-termotransferowe-sato/serie/swx95) 110 × 450 m (OUT i IN). Wersje mają różne numery katalogowe. Drukarki SATO CL4NX Plus, CL6NX Plus, CL4-SXR, CL6-SXR, WS4, WT4-AXB, S84NX i S86NX przyjmują oba nawoje. Biurkowa CT4-LX przyjmuje tylko OUT, a SG112-ex tylko IN. Taśma z nieodpowiednim nawojem nie drukuje, bo warstwa barwiąca nie styka się z etykietą.',
    },
    {
      heading: 'Laboratorium techniczne SATO',
      content: 'Taśmy SATO przechodzą testy w europejskim laboratorium technicznym SATO we Francji. Laboratorium sprawdza połączenie materiału etykiety, typu taśmy, prędkości druku i temperatury. Testy obejmują odporność na rozmazywanie, zgodność z powierzchnią, odporność na warunki otoczenia i przyczepność. Dla trudnych zastosowań (chemikalia, praca na zewnątrz, skrajne temperatury) SATO wykonuje testy specjalne.\n\nTAKMA pomaga dobrać taśmę i etykietę do drukarki. Przy większych zamówieniach można zamówić próbkę taśmy do testu na własnej etykiecie.',
    },
    {
      heading: 'Ile etykiet wydrukuje jedna rolka taśmy?',
      content: 'Liczba etykiet zależy od długości rolki i wysokości etykiety:\n\n**liczba etykiet ≈ (długość rolki w mm − ok. 2000 mm strat) / (wysokość etykiety + 3 mm przerwy)**\n\nPrzykład: rolka 450 m i etykieta o wysokości 150 mm → (450 000 − 2000) / 153 ≈ 2900 etykiet. Rolka 74 m i etykieta 50 mm → (74 000 − 2000) / 53 ≈ 1350 etykiet. Karta każdego rozmiaru taśmy SATO ma kalkulator, który liczy ten wynik dla podanej wysokości etykiety.',
    },
  ],
  tables: {
    porownanie: {
      header: ['Cecha', 'SWX — wosk', 'SWR — wosk-żywica', 'SRS — żywica'],
      rows: [
        ['Materiały', 'Papier niepowlekany, powlekany maszynowo i półbłyszczący', 'Papier powlekany, błyszczący i półbłyszczący, wybrane tworzywa sztuczne', 'Papier błyszczący i materiały syntetyczne (PET, PE, PP, PVC)'],
        ['Trwałość nadruku', 'Niska', 'Średnia', 'Bardzo wysoka'],
        ['Odporność na ścieranie', 'Niska', 'Średnia', 'Bardzo wysoka'],
        ['Odporność chemiczna', 'Niska', 'Średnia', 'Ekstremalnie wysoka'],
        ['Odporność na ciepło', 'Niska', 'Średnia', 'Bardzo wysoka'],
        ['Odporność na wilgoć', 'Niska', 'Średnia', 'Wysoka'],
        ['Energia głowicy', 'Niska', 'Średnia', 'Wysoka'],
        ['Ostrość nadruku', 'Dobra', 'Bardzo dobra', 'Doskonała'],
        ['Praca na zewnątrz', 'Niezalecana', 'Ograniczona', 'Doskonała'],
        ['Okres użycia etykiety', 'Krótki i średni', 'Średni i długi', 'Długi'],
        ['Identyfikowalność', 'Ograniczona', 'Średnia', 'Wysoka'],
        ['Poziom kosztów', '€', '€€', '€€€'],
        ['Branże', 'Żywność i napoje, transport i logistyka, handel', 'Produkcja, opieka zdrowotna, transport i logistyka, ogrodnictwo, handel, motoryzacja', 'Motoryzacja, chemia, elektronika, produkcja, transport i logistyka, opieka zdrowotna'],
        ['Typowe etykiety', 'Wysyłkowe, trasowe, półkowe, magazynowe, skrzyniowe', 'Metki odzieżowe, etykiety pojemników magazynowych, oznaczenia roślin', 'Pojemniki z chemikaliami, silniki, kontenery morskie, opakowania krytyczne, etykiety zewnętrzne, mikroetykiety PCB'],
        ['Serie SATO', `[SWX85](${S}/swx85), [SWX95](${S}/swx95), [SWX100](${S}/swx100), [SWX-MAX](${S}/swx-max)`, `[SWR85](${S}/swr85), [SWR100](${S}/swr100)`, `[SRS85](${S}/srs85), [SRS100](${S}/srs100)`],
      ],
    },
    serie: {
      caption: 'Oceny w skali SATO 0–5 (5 = najlepiej).',
      header: ['Seria', 'Typ', 'Linia', 'Maks. prędkość', 'Folia PET / cała taśma', 'Papier niepowlekany / powlekany / syntetyki', 'Ścieranie / rozpuszczalniki', 'Rozmiary'],
      rows: [
        [`[SWX85](${S}/swx85)`, 'Wosk', 'Value', '400 mm/s', '4,5 μm / poniżej 8 μm', '4 / 5 / 1', '1 / poniżej 1', '4: 83–154 mm, 300–450 m'],
        [`[SWX95](${S}/swx95)`, 'Wosk', 'Flex', '400 mm/s', '4,5 μm / poniżej 9 μm', '5 / 5 / 1', '1 / poniżej 1', '13: 35–154 mm, 74–450 m'],
        [`[SWX100](${S}/swx100)`, 'Wosk z żywicą', 'Flex', '250 mm/s', '4,5 μm / poniżej 8 μm', '4 / 5 / 2', 'ok. 2 / 1', '8: 45–154 mm, 300–450 m'],
        [`[SWX-MAX](${S}/swx-max)`, 'Wosk', 'Flow', '400 mm/s', '3,35 μm / poniżej 7 μm', '5 / 5 / 1', '1 / poniżej 1', '5: 83–273 mm, 450–800 m'],
        [`[SWR85](${S}/swr85)`, 'Wosk-żywica', 'Value', '400 mm/s', '4,5 μm / poniżej 9 μm', '5 / 5 / 3', '2 / poniżej 1', '4: 83–154 mm, 300–450 m'],
        [`[SWR100](${S}/swr100)`, 'Wosk-żywica', 'Flex', '300 mm/s', '4 μm / poniżej 9 μm', '5 / 5 / 3', 'ok. 3 / poniżej 1', '16: 35–154 mm, 74–600 m'],
        [`[SRS85](${S}/srs85)`, 'Żywica', 'Value', '250 mm/s', '4,5 μm / poniżej 9 μm', 'poniżej 1 / 2 / 5', '5 / 2', '4: 60–154 mm, 300–450 m'],
        [`[SRS100](${S}/srs100)`, 'Żywica', 'Flex', '300 mm/s', '4,5 μm / poniżej 9 μm', 'poniżej 1 / 2 / 5', '5 / 3', '7: 60–154 mm, 110–450 m'],
      ],
    },
    dobor: {
      header: ['Zastosowanie', 'Materiał etykiety', 'Taśma SATO'],
      rows: [
        ['Etykiety wysyłkowe, kurierskie i magazynowe w dużych nakładach', 'Papier niepowlekany lub powlekany', `[SWX85](${S}/swx85) lub [SWX95](${S}/swx95)`],
        ['Etykiety z drukarki biurkowej CT4-LX', 'Papier', `[SWX95](${S}/swx95) lub [SWR100](${S}/swr100), rolki 74 i 100 m`],
        ['Linia produkcyjna w pracy ciągłej, rzadkie wymiany taśmy', 'Papier', `[SWX-MAX](${S}/swx-max), rolka 800 m`],
        ['Papierowe etykiety RFID', 'Papier', `[SWX100](${S}/swx100)`],
        ['Pojemniki magazynowe, metki odzieżowe, etykiety roślin', 'Papier powlekany, wybrane tworzywa', `[SWR85](${S}/swr85) lub [SWR100](${S}/swr100)`],
        ['Drobny tekst i kody kreskowe obrócone o 90°', 'Papier, wybrane tworzywa', `[SWR100](${S}/swr100)`],
        ['Etykiety znamionowe z wymaganiem UL 969', 'Folia syntetyczna', `[SRS85](${S}/srs85)`],
        ['Elektronika, płytki PCB, motoryzacja', 'Folia PET, PP, PE, PVC', `[SRS100](${S}/srs100) lub [SRS85](${S}/srs85)`],
        ['Kontakt z chemikaliami i rozpuszczalnikami', 'Folia syntetyczna', `[SRS100](${S}/srs100)`],
      ],
    },
  },
  howTo: {
    name: 'Jak dobrać taśmę termotransferową SATO do drukarki',
    description: 'Siedem kroków doboru taśmy SATO: technologia druku, gilza, długość rolki, szerokość, nawój, typ taśmy i prędkość druku.',
    steps: [
      { name: 'Sprawdzić technologię druku', text: 'Drukarka musi drukować termotransferowo, czyli mieć mechanizm taśmy. Drukarki tylko termiczne nie używają taśmy.' },
      { name: 'Dobrać gilzę', text: 'SATO CT4-LX przyjmuje gilzę 12,7 mm (½″) i rolki 74–100 m. Pozostałe drukarki SATO przyjmują gilzę 25,4 mm (1″).' },
      { name: 'Sprawdzić maksymalną długość rolki', text: 'CT4-LX do 100 m, WS4 do 300 m, WT4-AXB do 450 m, CL4NX Plus, CL6NX Plus, CL4-SXR, CL6-SXR, S84NX i S86NX do 600 m. Rolka SWX-MAX 800 m ma średnicę rolki 600 m.' },
      { name: 'Dobrać szerokość', text: 'Taśma powinna być nieco szersza od etykiety (np. etykieta 102 mm → taśma 110 mm) i mieścić się w zakresie drukarki: CL4 39,5–128 mm, CL6 59–177 mm.' },
      { name: 'Dobrać nawój', text: 'OUT — barwnik na zewnątrz rolki, IN — do wewnątrz. Drukarki przemysłowe SATO przyjmują oba nawoje, CT4-LX tylko OUT.' },
      { name: 'Dobrać typ taśmy do materiału', text: 'Papier → wosk (SWX), papier powlekany i tarcie → wosk-żywica (SWR), folia syntetyczna i chemikalia → żywica (SRS).' },
      { name: 'Sprawdzić prędkość druku', text: 'SWX85, SWX95, SWX-MAX i SWR85 drukują do 400 mm/s, SWR100 i SRS100 do 300 mm/s, SWX100 i SRS85 do 250 mm/s.' },
    ],
  },
  faq: [
    { question: 'Jakie taśmy termotransferowe SATO są w ofercie TAKMA?', answer: '8 serii w 61 rozmiarach: woskowe SWX85, SWX95, SWX100 i SWX-MAX, woskowo-żywiczne SWR85 i SWR100 oraz żywiczne SRS85 i SRS100. Szerokości od 35 do 273 mm, długości od 74 do 800 m, gilza 12,7 mm (½″) lub 25,4 mm (1″), nawój OUT lub IN.' },
    { question: 'Czym różnią się linie taśm SATO Value, Flex i Flow?', answer: 'Value (SWX85, SWR85, SRS85) ma najniższy koszt etykiety i służy do dużych nakładów standardowych etykiet. Flex (SWX95, SWX100, SWR100, SRS100) drukuje na szerszej gamie materiałów i daje większą trwałość. Flow (SWX-MAX) ma cieńszą folię: rolka 800 m mieści się w drukarce o limicie 600 m, więc taśmę wymienia się rzadziej.' },
    { question: 'Którą taśmę SATO wybrać do etykiet papierowych?', answer: 'Do papieru niepowlekanego i powlekanego służą taśmy woskowe: SWX85 (najniższy koszt), SWX95 (papier gładki i szorstki, rolki biurkowe) lub SWX100 (wosk z żywicą, etykiety RFID). Gdy etykieta ma kontakt z tarciem, lepsza jest taśma woskowo-żywiczna SWR85 lub SWR100.' },
    { question: 'Którą taśmę SATO wybrać do etykiet foliowych?', answer: 'Do folii PET, PE, PP i PVC służą taśmy żywiczne: SRS85 (certyfikat UL 969) lub SRS100 (najwyższa odporność na rozpuszczalniki w ofercie SATO). Na część materiałów syntetycznych drukują też taśmy woskowo-żywiczne SWR85 i SWR100.' },
    { question: 'Co oznacza nawój IN i OUT taśmy SATO?', answer: 'OUT oznacza warstwę barwiącą na zewnątrz rolki, IN do wewnątrz. Drukarki SATO CL4NX Plus, CL6NX Plus, CL4-SXR, CL6-SXR, WS4, WT4-AXB, S84NX i S86NX przyjmują oba nawoje bez zmiany ustawień. Biurkowa CT4-LX przyjmuje tylko OUT.' },
    { question: 'Jaka taśma SATO pasuje do drukarki CL4NX Plus lub CL4-SXR?', answer: 'Taśma na gilzie 25,4 mm (1″), o szerokości 39,5–128 mm i długości do 600 m, z nawojem OUT lub IN. Do głowicy 104 mm typowa jest taśma 110 mm, np. SWX95, SWR100 lub SRS100 w rolkach 450 m albo SWR100 w rolce 600 m. Pasuje też SWX-MAX 110 × 800 m.' },
    { question: 'Jaka taśma SATO pasuje do drukarki CL6NX Plus lub CL6-SXR?', answer: 'Taśma na gilzie 25,4 mm (1″), o szerokości 59–177 mm i długości do 600 m, z nawojem OUT lub IN. Do szerokich etykiet typowa jest taśma 154 mm, np. SWX95, SWR100 lub SRS100 154 × 450 m, SWR100 154 × 600 m albo SWX-MAX 154 × 800 m.' },
    { question: 'Jaka taśma SATO pasuje do drukarki biurkowej CT4-LX?', answer: 'Taśma na gilzie 12,7 mm (½″), o szerokości 45–111 mm i długości do 100 m, z nawojem OUT. W ofercie są to SWX95 i SWR100 w rozmiarach 65 × 74, 110 × 74 i 110 × 100.' },
    { question: 'Czy taśma 800 m zmieści się w drukarce z limitem 600 m?', answer: 'Tylko taśma SATO SWX-MAX z linii Flow. Ma folię PET 3,35 μm, więc rolka 800 m ma średnicę standardowej rolki 600 m. Standardowa rolka 800 m ma większą średnicę i nie mieści się w takiej drukarce.' },
    { question: 'Jak dobrać szerokość taśmy SATO do etykiety?', answer: 'Taśma powinna być nieco szersza od etykiety, aby osłonić głowicę przed kontaktem z podłożem, np. etykieta 102 mm → taśma 110 mm, etykieta 150 mm → taśma 154 mm. Szerokość taśmy musi też mieścić się w zakresie drukarki.' },
    { question: 'Czy taśmy SATO pasują do drukarek innych producentów?', answer: 'Taśma SATO pasuje do drukarki innego producenta, gdy zgadzają się gilza, nawój, szerokość i maksymalna długość rolki. Dobór do konkretnego modelu potwierdza doradca TAKMA.' },
    { question: 'Czy taśmy SATO można kupić na sztuki?', answer: 'Tak. Taśmy SATO są w sprzedaży na pojedyncze rolki i w pełnych kartonach. Karton ma od 5 do 50 rolek, zależnie od rozmiaru, a cena za rolkę w kartonie jest niższa. Liczba rolek w kartonie jest na karcie każdego rozmiaru.' },
    { question: 'Czy taśmy SATO mają atest kontaktu z żywnością?', answer: 'Tak. SWX85, SWX95, SWX-MAX, SWR85, SWR100 i SRS85 mają zgodność z rozporządzeniem UE 1935/2004/WE i przepisami FDA. SWX100 i SRS100 mają atest kontaktu z żywnością ISEGA.' },
    { question: 'Jak przechowywać taśmy termotransferowe SATO?', answer: 'Do 12 miesięcy w oryginalnym opakowaniu, w wilgotności 20–80%. Temperatura: 5–35°C, a dla SWX100 i SRS100 5–30°C.' },
  ],
  datePublished: '2026-10-31',
  dateModified: '2026-10-31',
}
