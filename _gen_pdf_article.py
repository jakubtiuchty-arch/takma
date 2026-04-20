#!/usr/bin/env python3
"""Generate PDF article for trans.info — Zebra-focused TCO article."""

from fpdf import FPDF

class ArticlePDF(FPDF):
    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f'Strona {self.page_no()}', align='C')

pdf = ArticlePDF()
pdf.set_auto_page_break(auto=True, margin=20)
pdf.add_page()
pdf.set_margins(25, 20, 25)

def heading(text, size=14):
    pdf.set_draw_color(200, 200, 200)
    pdf.line(25, pdf.get_y(), 185, pdf.get_y())
    pdf.ln(5)
    pdf.set_font('Helvetica', 'B', size)
    pdf.set_text_color(34, 34, 34)
    pdf.cell(0, 8, text, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

def body(text):
    pdf.set_font('Helvetica', '', 10.5)
    pdf.set_text_color(26, 26, 26)
    pdf.multi_cell(0, 5.5, text)
    pdf.ln(3)

def numbered_item(num, bold_part, rest):
    pdf.set_font('Helvetica', 'B', 10.5)
    pdf.set_text_color(26, 26, 26)
    pdf.cell(8, 5.5, f'{num}.')
    pdf.cell(0, 5.5, bold_part, new_x="LMARGIN", new_y="NEXT")
    if rest:
        pdf.set_font('Helvetica', '', 10.5)
        pdf.set_x(33)
        pdf.multi_cell(0, 5.5, rest)
    pdf.ln(1)

def bullet_item(bold_part, rest):
    pdf.set_font('Helvetica', '', 10.5)
    pdf.set_text_color(26, 26, 26)
    pdf.cell(5, 5.5, '-')
    pdf.set_font('Helvetica', 'B', 10.5)
    pdf.cell(0, 5.5, bold_part, new_x="LMARGIN", new_y="NEXT")
    if rest:
        pdf.set_font('Helvetica', '', 10.5)
        pdf.set_x(30)
        pdf.multi_cell(0, 5.5, rest)
    pdf.ln(1)

# === TITLE ===
pdf.set_font('Helvetica', 'B', 20)
pdf.set_text_color(17, 17, 17)
pdf.multi_cell(0, 10, 'Prawdziwy koszt sprzetu AutoID\nw logistyce - cena zakupu\nto dopiero poczatek')
pdf.ln(3)

pdf.set_font('Helvetica', 'I', 9)
pdf.set_text_color(136, 136, 136)
pdf.cell(0, 6, 'Artykul ekspercki | trans.info | marzec 2026', new_x="LMARGIN", new_y="NEXT")
pdf.ln(6)

# === LEAD ===
pdf.set_font('Helvetica', '', 11)
pdf.set_text_color(51, 51, 51)
pdf.multi_cell(0, 6, 'Terminal mobilny za 2 500 zl. Tyle widzi dzial zakupow na fakturze. Ale ile ten terminal kosztuje przez piec lat codziennej pracy w magazynie? Baterie, naprawy, przestoje, wymiana po trzech latach zamiast po siedmiu. Prawdziwy koszt sprzetu AutoID to zakup plus eksploatacja plus serwis plus utracona produktywnosc. Kto tego nie liczy, placi dwa razy.')
pdf.ln(5)

# === SECTION 1 ===
heading('Czym jest TCO sprzetu AutoID')
body('TCO (Total Cost of Ownership) to suma kosztow od zakupu do wycofania urzadzenia. W sprzecie AutoID sklada sie z pieciu elementow:')

numbered_item(1, 'Zakup', 'urzadzenie, akcesoria startowe (stacja dokujaca, zapasowa bateria), licencje.')
numbered_item(2, 'Wdrozenie', 'konfiguracja, integracja z WMS lub ERP, szkolenie operatorow.')
numbered_item(3, 'Eksploatacja', 'wymiana baterii, glowic drukujacych, zakup etykiet i ribbonow.')
numbered_item(4, 'Serwis', 'naprawy, przeglady, czas reakcji, urzadzenia zastepcze.')
numbered_item(5, 'Wymiana', 'zywotnosc 3-7 lat, koszt migracji na nowy model.')
pdf.ln(2)

body('W logistyce TCO jest krytyczne - sprzet pracuje w trudnych warunkach (kurz, upadki, mroz), a kazda godzina przestoju to realna strata: niewydane zamowienia, opoznione dostawy, stojacy pracownik.')

# === SECTION 2 ===
heading('Terminale mobilne - drozszy nie znaczy drozszy')

body('Scenariusz z wielu magazynow: firma kupuje najtanszy terminal, bo "spelnia wymagania". Po roku bateria trzyma trzy godziny. Po dwoch - pekniety ekran. Po trzech - koniec wsparcia producenta. Koszt godziny przestoju stanowiska to 80-150 zl (pracownik + utracona przepustowosc + kary za opoznienia).')

body('Co decyduje o piecioletnim koszcie posiadania terminala:')

bullet_item('Klasa IP', 'IP67/IP68 (pyloszczelnosc + zanurzenie) = statystycznie mniej napraw niz IP54/65.')
bullet_item('Odpornosc na upadki', 'MIL-STD-810G/H, 1,5-3,0 m na beton. Kazdy przezyty upadek to zaoszczedzone 400-1 200 zl.')
bullet_item('Bateria hot-swap', 'wymiana bez wylaczania eliminuje przestoje na ladowanie.')
bullet_item('Wsparcie producenta', 'Zebra LifeGuard daje aktualizacje do 10 lat; budzetowe marki koncza po 3 latach.')
pdf.ln(2)

body('Porownanie na urzadzeniach Zebra: TC22 za 2 417 zl (IP68, 6", Wi-Fi 6E) po pieciu latach generuje TCO 5 200-6 500 zl - wliczajac wymiane baterii i naprawy. MC3400 za 4 561 zl (gun z klawiatura, MIL-STD-810H) - TCO 6 000-7 000 zl, ale z minimalna liczba serwisow i siedmioletnia zywotnoscia. Cena zakupu podwojna - TCO rocznie porownywalne.')

body('Porownujac terminale mobilne do magazynu (takma.com.pl/terminale-mobilne) warto zestawic nie cene z faktury, a piecioletni koszt posiadania.')

# === SECTION 3 ===
heading('Drukarki etykiet - koszt ukryty w kazdej przesylce')

body('Drukarka etykiet to ciagly koszt operacyjny. Biurkowa Zebra ZD421t (od 1 649 zl) w trybie termicznym (DT) nie wymaga ribbonu, ale etykiety blakna - do etykiet wysylkowych. Przemyslowa Zebra ZT231 (od 2 550 zl) w termotransferze (TT) wymaga ribbonu, ale etykiety trwaja latami - do regalow i inwentaryzacji. Wybor metody druku wplywa na TCO bardziej niz cena drukarki.')

body('Najwiekszy ukryty koszt to glowica drukujaca - wymiana co 50-150 km druku, 300-800 zl (glowica do Zebra ZT411: ok. 550 zl). Tanie materialy skracaja zywotnosc glowicy - pozorna oszczednosc 20% oznacza dwukrotnie czestsza wymiane. Przy 1 000 etykiet dziennie to tysiace zlotych rocznie.')

body('Koszt jednej etykiety = amortyzacja drukarki + material + zuzycie glowicy. Malo kto to liczy. Przy wyborze drukarki etykiet dla logistyki (takma.com.pl/drukarki-etykiet) kluczowy jest laczny koszt eksploatacji, nie cena katalogowa.')

# === SECTION 4 ===
heading('Serwis - czynnik, ktory przesadza o TCO')

body('Terminal w naprawie przez piec dni roboczych to 3 000-6 000 zl utraconych (przy 80-150 zl/h przestoju stanowiska). Serwis z reakcja next business day i urzadzeniem zastepczym ogranicza ten koszt do minimum. Pakiet serwisowy za 300-600 zl rocznie jest wielokrotnie tanszy niz koszt jednego dluzszego przestoju.')

body('Cztery rzeczy do sprawdzenia przy wyborze partnera serwisowego:')

numbered_item(1, 'Czas reakcji (SLA)', 'czy gwarantuje next business day, czy "do 14 dni roboczych"?')
numbered_item(2, 'Autoryzacja producenta', 'dostep do oryginalnych czesci, firmware i narzedzi diagnostycznych.')
numbered_item(3, 'Urzadzenia zastepcze', 'czy na czas naprawy otrzymasz dzialajacy terminal?')
numbered_item(4, 'Serwis w Polsce', 'lokalna naprawa trwa dni; wysylka za granice - tygodnie.')
pdf.ln(2)

body('Zebra Technologies to najczesciej spotykany producent sprzetu AutoID w polskiej logistyce. Dostep do autoryzowanego serwisu urzadzen Zebra (serwis-zebry.pl) z gwarantowanym SLA i oryginalnymi czesciami bezposrednio obniza TCO floty.')

# === SUMMARY ===
heading('Podsumowanie')

body('Regula kciuka: TCO sprzetu AutoID to 2-4 razy cena zakupu. Przed zakupem warto zadac trzy pytania: ile kosztuje eksploatacja przez piec lat? Jak dlugo producent wspiera urzadzenie? Jaki jest czas reakcji serwisu?')

pdf.set_font('Helvetica', 'I', 11)
pdf.set_text_color(68, 68, 68)
pdf.multi_cell(0, 6, 'Kto liczy TCO przed zakupem - oszczedza. Kto nie - placi dwa razy.')

# === LINKS REFERENCE ===
pdf.ln(10)
pdf.set_draw_color(100, 100, 100)
pdf.line(25, pdf.get_y(), 185, pdf.get_y())
pdf.ln(5)
pdf.set_font('Helvetica', 'B', 9)
pdf.set_text_color(100, 100, 100)
pdf.cell(0, 5, 'LINKI DOFOLLOW W ARTYKULE (3 szt.):', new_x="LMARGIN", new_y="NEXT")
pdf.ln(2)
pdf.set_font('Helvetica', '', 9)
for link in [
    '1. "terminale mobilne do magazynu" -> https://takma.com.pl/terminale-mobilne (sekcja 2)',
    '2. "drukarki etykiet dla logistyki" -> https://takma.com.pl/drukarki-etykiet (sekcja 3)',
    '3. "autoryzowanego serwisu urzadzen Zebra" -> https://serwis-zebry.pl (sekcja 4)',
]:
    pdf.cell(0, 5, link, new_x="LMARGIN", new_y="NEXT")

out = '/Users/jakubtiuchty/takma/public/downloads/ART-tco-sprzetu-autoid-trans-info.pdf'
pdf.output(out)
print(f'PDF saved: {out}')
print(f'Pages: {pdf.page_no()}')
