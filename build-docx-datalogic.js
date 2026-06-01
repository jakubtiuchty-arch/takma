const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, HeadingLevel,
  Table, TableRow, TableCell, BorderStyle, ShadingType, WidthType,
  LevelFormat, AlignmentType, PageOrientation
} = require('docx');

// Helper: build paragraph from inline pieces (text or hyperlink)
function p(children, opts = {}) {
  return new Paragraph({ ...opts, children });
}
function t(text, opts = {}) {
  return new TextRun({ text, ...opts });
}
function link(text, url) {
  return new ExternalHyperlink({
    children: [new TextRun({ text, style: "Hyperlink" })],
    link: url,
  });
}

const border = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: border, bottom: border, left: border, right: border };

const tableCellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function cell(text, opts = {}) {
  return new TableCell({
    borders,
    width: { size: opts.width || 3120, type: WidthType.DXA },
    shading: opts.header ? { fill: "EAEAEA", type: ShadingType.CLEAR } : undefined,
    margins: tableCellMargins,
    children: [p([t(text, { bold: !!opts.header })])],
  });
}

const intro =
  "W typowym polskim magazynie pracują dwa zespoły: ludzie chodzący między regałami z koszykiem lub wózkiem ręcznym, którzy kompletują zamówienia, oraz operatorzy wózków widłowych, którzy przyjmują dostawy i przemieszczają palety. Obie role potrzebują urządzenia mobilnego do skanowania kodów i wprowadzania danych do systemu magazynowego. Ale typ urządzenia powinien być inny — i próby kupna „jednego dla wszystkich” zwykle kończą się tym, że jedna z grup pracuje wolniej, niż mogłaby. Pokazujemy, na czym polega różnica i jakie modele są warte uwagi w 2026 roku.";

const sec1Intro =
  "Magazynier kompletujący zamówienia chodzi po alejkach przez 8 godzin. Skanuje kody na półkach, potwierdza ilość, czasem wpisuje liczbę ręcznie (bo na regale jest pęknięta etykieta albo zamówienie wymaga niestandardowej liczby sztuk). Spędza dziennie tysiące skanów. W jego ręce powinno znaleźć się urządzenie spełniające trzy warunki:";

const sec1Bullets = [
  "Waga w przedziale 300-400 g — bo 8 godzin trzymania w jednej ręce.",
  "Pistoletowy uchwyt z wbudowanym skanerem 2D — pozwala skanować naciśnięciem spustu, bez celowania ekranem.",
  "Klawiatura fizyczna — bo dotyk w rękawicy to walka z urządzeniem, a klawisze pod palcami działają niezależnie od tego, czy ekran jest mokry, brudny, czy w rękawicy.",
];

const sec1Conclusion =
  "Co ważne: w tej klasie sprzętu ekran ma znaczenie drugorzędne. Magazynier i tak skanuje, potwierdza i idzie dalej. 3,5–4 cale wystarczy do listy pozycji.";

const sec2Intro =
  "Operator wózka widłowego ma zupełnie inny dzień. Podjeżdża pod regał, zatrzymuje wózek, skanuje kod palety, potwierdza odbiór, czasem patrzy w mapę magazynu, żeby znaleźć miejsce, gdzie ma ustawić paletę. Robi to siedząc, z otwartą kabiną, w kurzu i wibracjach. Czasem w chłodni przy -20°C.";

const sec2Intro2 = "Tutaj nie ma sensu trzymać małego kolektora. Urządzenie powinno być:";

const sec2Bullets = [
  "Tabletem o ekranie 8-10 cali — żeby było widać z odległości 50-60 cm, w siedzącej pozycji.",
  "Z mocowaniem na uchwycie kabinowym (popularne to mocowania RAM Mount lub własne uchwyty producenta).",
  "Z zasilaniem 12-24 V z gniazda wózka — bo bateria w tablecie bez ładowania nie wytrzyma zmiany 12-godzinnej.",
  "Z opcjonalnym zewnętrznym skanerem pistoletowym po Bluetooth — bo skanowanie tabletem przez celowanie ekranem jest powolne.",
  "Odporny na wibracje — wózek widłowy generuje znacznie więcej drgań niż chód magazyniera.",
];

const sec3Intro =
  "Próby zaopatrzenia obu zespołów w jeden typ urządzenia są typowe w pierwszym roku po wdrożeniu systemu magazynowego. Argumentem zwykle jest oszczędność: jedna platforma, jedna umowa serwisowa, mniej szkoleń. W praktyce kończą się one tak:";

const sec3Bullets = [
  "Operator wózka z 250-gramowym kolektorem nie ma jak go bezpiecznie odłożyć — uchwyt nie pasuje do kabiny, mocowanie palmowe na ramieniu przeszkadza w kierowaniu wózkiem.",
  "Magazynier z 700-gramowym tabletem dostaje skurczu w przedramieniu po 4 godzinach trzymania w jednej ręce.",
  "Bateria tabletu po 6 godzinach kończy się — nie ma jak ją wymienić w terenie, bo tablet nie ma hot-swap.",
  "Skaner ekranowy w tablecie skanuje 25-30 kodów na minutę, kolektor z pistoletem 60-80.",
];

const sec3Conclusion =
  "Po 3 miesiącach jedna z grup zaczyna pracować na własnych telefonach służbowych (z odpowiednią aplikacją), co całkowicie psuje cele inwestycji w „jedno rozwiązanie”.";

const sec4Intro = "Typowy magazyn 1 000-5 000 m² potrzebuje:";

const sec4After =
  "Dla magazynu z 30 magazynierami i 8 wózkami widłowymi pełen zestaw to około 10-12 kolektorów i 8 tabletów. Łączny roczny koszt to 50 000-65 000 zł — typowo zwraca się w 8-12 miesięcy przyspieszeniem kompletacji zamówień o 25-40%.";

const sec5Intro = "Kupując oba typy urządzeń, sprawdź:";
const sec5Bullets = [
  "Zgodność z istniejącym systemem magazynowym (Comarch WMS, Subiekt, SAP, Soflab, własny) — czy producent ma referencje wdrożeń z takim systemem.",
  "5 lat wsparcia technicznego — części, akcesoria, aktualizacje bezpieczeństwa Androida. Bez tego po 3 latach masz problem.",
  "Polski dystrybutor z serwisem — bo wysyłka urządzenia do Włoch (siedziba Datalogic) zajmuje 4-6 tygodni, polski serwis robi w 7-14 dni.",
  "System zdalnego zarządzania flotą (po polsku — narzędzie do centralnej aktualizacji wszystkich urządzeń jednocześnie). Datalogic udostępnia własne, ale działa też z popularnymi systemami SOTI, VMware czy Ivanti.",
];

const summary1 =
  "Krótko: jeden magazyn — dwa typy urządzeń. Magazynier kompletujący zamówienia powinien dostać lekki kolektor z klawiaturą fizyczną i baterią hot-swap. Operator wózka widłowego — tablet z mocowaniem do kabiny i zasilaniem z gniazda 12-24 V. Kupowanie „jednego dla wszystkich” oszczędza około 30% na koszcie sprzętu i kosztuje 50% efektywności pracy.";

const summary2 =
  "W praktyce większość polskich magazynów dobiera oba typy urządzeń od tego samego producenta — np. Datalogic Skorpio dla magazynierów i Datalogic Falcon dla operatorów wózków. Pozwala to uprościć obsługę serwisową i mieć jedną platformę do zarządzania całą flotą urządzeń.";

const bulletPara = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  children: [t(text)],
});

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1F2937" },
        paragraph: { spacing: { before: 320, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "1F2937" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [t("Tablet na wózku widłowym czy kolektor w ręce magazyniera? Jak dobrać sprzęt do roli")],
      }),

      // Lead
      p([t(intro)]),

      // Section 1
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t("Magazynier z koszem: szybkie skanowanie i klawiatura w ręce")] }),
      p([t(sec1Intro)]),
      ...sec1Bullets.map(bulletPara),
      p([
        t("W tej kategorii w 2026 roku dobrym wyborem są nowe modele Datalogic. Kolektor "),
        link("Datalogic Skorpio X40 i X45", "https://www.takma.com.pl/poradnik/datalogic-skorpio-x40-x45"),
        t(" ma do wyboru klawiaturę 28-, 38- lub 47-klawiszową, akumulator hot-swap (czyli wymiana baterii bez wyłączania urządzenia, co liczy się szczególnie na zmianie nocnej) i odporność IP65, czyli na pył i wodę pod ciśnieniem. To ten typ urządzenia, który operator magazynowy zna z poprzednich generacji Skorpio X3, X4, X5 — z nowszym Androidem, dłuższym wsparciem producenta i lepszym skanerem 1D/2D."),
      ]),
      p([t(sec1Conclusion)]),

      // Section 2
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t("Operator wózka widłowego: większy ekran, mocowanie do kabiny")] }),
      p([t(sec2Intro)]),
      p([t(sec2Intro2)]),
      ...sec2Bullets.map(bulletPara),
      p([
        t("W 2026 roku najnowszą propozycją w tej klasie jest "),
        link("Datalogic Falcon X60 i X65", "https://www.takma.com.pl/poradnik/datalogic-falcon-x60-x65"),
        t(" — tablet rugged z 8-calowym ekranem, klasą IP65, certyfikacją do pracy w chłodniach do -20°C, mocowaniem do kabiny wózka i obsługą zewnętrznych skanerów po Bluetooth. Co istotne dla działu IT: pracuje na tym samym Androidzie i z tym samym systemem zarządzania flotą, co kolektory Skorpio. Czyli jedna konsola do aktualizacji obu typów urządzeń jednocześnie."),
      ]),

      // Section 3
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t("Dlaczego nie da się „jeden tablet dla wszystkich”")] }),
      p([t(sec3Intro)]),
      ...sec3Bullets.map(bulletPara),
      p([t(sec3Conclusion)]),

      // Section 4 — table
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t("Co kupić — w liczbach")] }),
      p([t(sec4Intro)]),
      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1800, 1800, 2526, 2900],
        rows: [
          new TableRow({
            children: [
              cell("Rola", { header: true, width: 1800 }),
              cell("Liczba urządzeń", { header: true, width: 1800 }),
              cell("Typ urządzenia", { header: true, width: 2526 }),
              cell("Roczny koszt na 1 sztukę (amortyzacja 4 lata)", { header: true, width: 2900 }),
            ],
          }),
          new TableRow({
            children: [
              cell("Magazynier kompletujący", { width: 1800 }),
              cell("1 na 2-3 osoby na zmianę", { width: 1800 }),
              cell("Kolektor z klawiaturą fizyczną", { width: 2526 }),
              cell("2 500-3 500 zł", { width: 2900 }),
            ],
          }),
          new TableRow({
            children: [
              cell("Operator wózka", { width: 1800 }),
              cell("1 na każdy wózek", { width: 1800 }),
              cell("Tablet przemysłowy z mocowaniem", { width: 2526 }),
              cell("3 000-4 500 zł", { width: 2900 }),
            ],
          }),
        ],
      }),
      p([t(sec4After)], { spacing: { before: 200 } }),

      // Section 5
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t("Czego pilnować przy wyborze")] }),
      p([t(sec5Intro)]),
      ...sec5Bullets.map(bulletPara),

      // Summary
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t("Podsumowanie")] }),
      p([t(summary1)]),
      p([t(summary2)]),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "/sessions/pensive-sleepy-cray/mnt/takma/ARTYKUL-datalogic-falcon-skorpio.docx";
  fs.writeFileSync(out, buf);
  console.log("WROTE:", out, buf.length, "bytes");
}).catch((e) => { console.error(e); process.exit(1); });
