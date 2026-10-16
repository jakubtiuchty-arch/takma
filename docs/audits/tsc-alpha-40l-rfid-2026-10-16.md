# TSC Alpha-40L RFID — 16.10.2026

## Europejskie PN i ceny

A40LR-A001-0002: Bluetooth MFi, USB-C, NFC, RFID, zasilacz i przewódEU. A40LR-A001-1002: Wi-Fi802.11a/b/g/n/ac + Bluetooth, ten sam zestawEU. ObaPN znalezione z ceną w API BlueStar i Jarltech. Jarltech odpowiednio8/0szt., BlueStar0/0. Publiczne ceny sprzedaży4521,25/5272,67złnetto. Początkowa odpowiedź publicznego API miała stany0; po live fallback cacheJarltech ma8 (sprawdzone /api/stock?pn=A40LR-A001-0002&debug=1). Nie wpisano stałych cen ani stanów do katalogu.

Warianty mają tylko jedną kolumnę cechy: Łączność bezprzewodowa. Wspólne203dpi,104mm,127mm/s,RFID,bateria iEU nie są powielane jako kolumny. Zarejestrowano kartę i6akcesoriów w LIVE_OFFER_SLUGS, istniejącej integracjiSSR/JSON-LD i automatycznej synchronizacjiPN.

## Zgodność i źródła

- https://emea.tscprinters.com/en/products/alpha-series-4-inch-performance-mobile-rfid-printers — FAQ: RFID tylko tear, brak on-metal, rolka RFID zalecane62mm vs67mm non-RFID; USB-C communication only; brak rozbudowy zwykłejAlpha40L oRFID. Opisy i FAQ uwzględniają te ograniczenia. Brak automatycznej zgodności etykietZebra.
- https://fs.tscprinters.com/system/files/alpha-40l_rfid_web_20240110_en.pdf — producent,3strony, aktualny katalogRFID z akcesoriami; bateria7,4V6200mAh, masa1,025kg,IP54 z wyłączeniemtorupapieru,1,8mupadek/2,5mz etui, ekran2,3cala, gwarancja2lata/bateria1rok/głowica25km lub12mies./wałek50km lub12mies. Zapisano lokalnie prawdziwyPDF.
- https://fs.tscprinters.com/system/files/31-0710008-00_alpha-40lr_user_manual_en_e.pdf — instrukcja producenta,69stron,10.11.2025, zapisano prawdziwyPDF.
- https://shop.bluestoreinc.com/en/tsc-alpha40l — mapowanie numerów akcesoriów (nie utożsamiono zwykłychPN A40L zRFID A40LR).
- https://www.jarltech.com/en/tsc-alpha-40l?hide=none — dokładneEU PN i wyposażenie wariantów oraz części. Autoryzowane API obu dystrybutorów, tylko odczyt.

## Akcesoria

6pozycji w jednym dziale, standardowe4+Pokażpozostałe2/Zwiń:
- OP-P-SB-001-0001 bateria6200mAh,1szt., bezładowarki (Jarltech21).
- OP-P-DC1-001-2001 stacja1drukarki,EU zasilacz+przewód (Jarltech8).
- OP-P-EC-002-0001 etui z paskiem (Jarltech16).
- OP-P-SS-001-0001 osobny pasek do drukarki bezetui; niepotrzebnydrugipasek przy zakupieetui.
- OP-P-DC4-001-2001 stacja4drukarek,EU zasilacz+przewód (Jarltech1).
- OP-P-BC4-001-2001 ładowarka4wyjętychbaterii,EU zasilacz+przewód; baterieosobno (stan0).

ZgodnośćAlpha40LRFID na oficjalnejstronie i wPDFRFID. Stacje do całych drukarek rozróżnione odładowarkiwyjętychbaterii. Nie przypisano niezweryfikowanej głowicy ani odklejaka. Nie dodano sampli.

## Zdjęcia i pomiary

Konstrukcja z fotografii producenta; image_gen tylko skala, białe marginesy i wyodrębnienie pojedynczej dużej baterii ze zdjęcia zbiorczego. Oryginały300px bywały przycięte, użyto pełnych plików producenta (usunięty segment styles/accessories_supplies/public z widocznegoURL), sprawdzone wizualnie przededycją.

Pola galerii576,5×576,5px na nowej karcie i obu wzorcachZQ521RFID/ZQ630PlusRFID. Bbox(prog35)wzorce75,7×80,2% i66,3×79,6%; nowa drukarka76,7×41,8% — inna, płaska orientacja, spójna szerokośćwidocznegourządzenia. Bez zmianCSS.

Akcesoria pola282,25×211,69px. KwadratoweRGBWebP1254px,quality92. Bbox: bateria51,4×35,5%,case76,4×60,4%,pasek65,6×62%,dock189,5×37,2%,dock489,1×31,8%,charger490,7×45%. Dzięki kwadratowemu tłu ich faktyczna szerokość jest ograniczona wysokością standardowego pola; wizualnie dopasowane. Pierwszyrząd4,po rozwinięciu6,zwinięcie4 sprawdzone wUI.

Prompty image_gen: zachowaj dokładny oryginalny sprzęt, kąt, porty, logo i konstrukcję; tylko zmniejsz i wyśrodkuj na białymkwadracie z dużymimarginesami, beznowychczęści. Cele szerokości: main70%,battery48%,case60%,strap50%,dock162%,dock4/charger465%. Battery: tylko duża luźna bateria z lewejgóry, usuń drugą iładowarkę. Charger4 zachowano widoczne baterie, w opisie ialcie podano, że sąosobno.

Pliki wygenerowane:
- main: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-e97924cf-8b31-49ed-af6f-2ad686a765a7.png
- battery: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-ae6c784d-6de5-48c8-a228-ffd4435501e1.png
- case: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-564f6660-1c70-486c-ae66-b2e7738de5c4.png
- strap: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-e2ae6ee3-aea3-4f86-8a83-077c4d1dab00.png
- dock1: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-a3e20818-ee9d-4768-96a1-d009a9f5bfb1.png
- dock4: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-d40c35fc-da3e-47c1-be11-428b3416af45.png
- charger4: /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124/exec-4dae90f4-a863-4392-96a1-c357612651e5.png

Źródła fotografii:
- alpha-40l-rfid_1.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/product_slider/public/2022-04/alpha-40l-rfid_1.png?itok=UyFf1UTM
- alpha-40l-rfid_3.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/product_slider/public/2022-04/alpha-40l-rfid_3.png?itok=NmWE-zXd
- alpha-40l-rfid_4.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/product_slider/public/2022-04/alpha-40l-rfid_4.png?itok=uuHP2pH6
- 4bay-batterycharger-3_0.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2021-04/4bay-batterycharger-3_0.png?itok=MpdhpiiR
- 4bay-cradle-1_0.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2021-04/4bay-cradle-1_0.png?itok=sNFCgJ2L
- 1bay-cradle-2_0.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2021-04/1bay-cradle-2_0.png?itok=VxS4D1MJ
- liionsmart.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2021-04/liionsmart.png?itok=WmkpceXo
- alpha40lcase.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2021-04/alpha40lcase.png?itok=7HmYx91I
- alphashoulder_0.png: https://emea.tscprinters.com/sites/emea.tscprinters.com/files/styles/accessories_supplies/public/2021-04/alphashoulder_0.png?itok=UXXOI4M8

## Kontrole

Lint,TypeScript,integralnośćID/slugów,relacji,plików i liczników. RFID21,mobilne19,termiczne33,akcesoria245. Widok390px/scroll375 bez przepełnienia. Filtr mobilne4modele. Lokalna baza i kluczeAPIwyłączone, stockprzezpublicznyGET. Zachowano komponenty, rozmiaryzdjęć, odstępy i przyciski. Publikacja wyłączniecommit/push na claude/takma-frontend-build-RrM9E, automatyczne wdrożenieGit.
