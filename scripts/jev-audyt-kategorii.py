#!/usr/bin/env python3
"""Jev (TypeSafe) dla jednej strony kategorii: dokąd kierować zapytania z GSC i które sekcje strony są zbędne.

Użycie:
  python3 scripts/jev-audyt-kategorii.py /drukarki-etykiet <gsc.json> <strony.json> [--kandydaci=/a,/b,...] [--json=wynik.json]

Test A: dla każdego zapytania, przy którym Google pokazuje tę stronę, Jev wskazuje najlepszą z naszych
        stron (choice), ocenia, czy bieżąca strona odpowiada wprost (noul) i czy zapytanie jest lokalne (noul).
Test B: dla każdej sekcji H2 strony: przydatność dla kupującego (score 0-3), ogólnikowość (noul), dubel (noul).
Wymaga TYPESAFE_API_KEY w .env.local. Pobiera stronę z produkcji przez curl.
"""
import html, json, re, subprocess, sys

args = [a for a in sys.argv[1:] if not a.startswith('--')]
if len(args) < 3:
    sys.exit(__doc__)
sciezka, plik_gsc, plik_stron = args[0], args[1], args[2]
opc = {a.split('=')[0][2:]: a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--')}
klucz = [l.split('=', 1)[1].strip().strip('"\'') for l in open('.env.local') if l.startswith('TYPESAFE_API_KEY=')][0]

KONTEKST = ('Sklep B2B TAKMA (takma.com.pl), Wrocław. Sprzedajemy i serwisujemy drukarki etykiet, drukarki kart, '
            'terminale mobilne, skanery kodów, tablety przemysłowe i materiały eksploatacyjne.')


def jev(state, questions):
    body = json.dumps({'state': state, 'model': 'jev-latest', 'questions': questions})
    r = subprocess.run(['curl', '-s', '-X', 'POST', 'https://api.typesafe.ai/v1/systemone',
                        '-H', 'Authorization: Bearer ' + klucz, '-H', 'Content-Type: application/json',
                        '--data-binary', '@-'], input=body.encode(), capture_output=True, timeout=180)
    odp = json.loads(r.stdout.decode())
    if 'answers' not in odp:
        sys.exit('Błąd API: ' + json.dumps(odp)[:400])
    return odp


# --- strona z produkcji: wstęp i sekcje H2 ---
ADRES = sciezka if sciezka.startswith('http') else 'https://www.takma.com.pl' + sciezka
h = subprocess.run(['curl', '-sL', '--compressed', '-A', 'Mozilla/5.0', ADRES], capture_output=True).stdout.decode('utf-8', 'replace')
h = re.sub(r'<script.*?</script>|<style.*?</style>', '', h, flags=re.S)
tekst = lambda s: html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s))).strip()
m_t = re.search(r'<title>(.*?)</title>', h, re.S)
tytul = tekst(m_t.group(1)) if m_t else sciezka
main = re.search(r'<main[^>]*>(.*?)</main>', h, re.S)
main = main.group(1) if main else h
czesci = re.split(r'(<h2[^>]*>.*?</h2>)', main, flags=re.S)
wstep = tekst(czesci[0])[:1200]
sekcje = [(tekst(czesci[i])[:80], tekst(czesci[i + 1])[:700]) for i in range(1, len(czesci) - 1, 2)]

# --- zapytania z GSC dla tej strony ---
gsc = json.load(open(plik_gsc))
zap = sorted([g for g in gsc if g['top_url'].rstrip('/').endswith(sciezka) and not sciezka.startswith('http')], key=lambda x: -x['impressions'])
strony = {s['url']: s for s in json.load(open(plik_stron))}
# W inwentarzu strony kategorii, podkategorii, marek i zastosowań mają typ równy własnemu slugowi,
# więc kandydatów wybieramy po rdzeniach rzeczowników z adresu (bez przymiotników), odrzucając
# produkty, poradniki, instrukcje i strony ogólne. Nadmiarowy kandydat nie szkodzi: Jev go nie wybierze.
NIE_KANDYDAT = {'produkt', 'instrukcje', 'poradnik', 'promocje', 'home', 'katalog', 'kontakt', 'zapytanie',
                'polityka-prywatnosci', 'regulamin', 'mapa-strony', 'o-nas', 'serwis'}
PRZYMIOTNIKI = {'mobilne', 'przemyslowe', 'biurkowe', 'termiczne', 'termotransferowe', 'do', 'kodow', 'kreskowych'}
rdzenie = [w[:6] for w in sciezka.strip('/').split('-') if w not in PRZYMIOTNIKI and len(w) > 3]
kandydaci = opc['kandydaci'].split(',') if 'kandydaci' in opc else \
    [u for u, s in strony.items() if any(r in u for r in rdzenie) and s['typ'] not in NIE_KANDYDAT and u.count('/') == 1][:18]
if sciezka not in kandydaci:
    kandydaci.insert(0, sciezka)
opis = {c: f"{c} — [{strony.get(c, {}).get('typ', '?')}] {strony.get(c, {}).get('tytul', '?')}" for c in kandydaci}
kryteria = {c.strip('/'): opis[c] for c in kandydaci}
kryteria['karta_produktu'] = 'konkretna karta produktu jednego modelu'
kryteria['zadna'] = 'żadna z powyższych, potrzebna nowa strona lub temat poza ofertą'

print(f'Strona {sciezka}: „{tytul}”, sekcji H2: {len(sekcje)}, zapytań z GSC: {len(zap)}, '
      f'wyświetleń: {sum(z["impressions"] for z in zap)}')
wynik = {'strona': sciezka, 'tytul': tytul, 'wyswietlenia': sum(z['impressions'] for z in zap),
         'zapytania': [], 'sekcje': [], 'tokeny': 0}

if zap:
    stan = (KONTEKST + f'\n\nStrona {sciezka}, tytuł: „{tytul}”. Wstęp strony: {wstep}\n\n'
            'Nasze strony, które mogą odpowiadać na zapytania:\n' + '\n'.join(opis.values()) +
            f'\n\nZapytania z Google Search Console, przy których Google pokazuje {sciezka}:\n' +
            '\n'.join(f'#{i + 1} „{g["keyword"]}” (wyświetlenia {g["impressions"]}, pozycja {g["position"]:.0f})'
                      for i, g in enumerate(zap)))
    pyt = {}
    for i in range(len(zap)):
        n = i + 1
        pyt[f'q{n}_strona'] = {'type': 'choice', 'instructions': f'Która z naszych stron najlepiej odpowiada na zapytanie #{n}, tak aby użytkownik od razu znalazł to, czego szuka?', 'criteria': kryteria}
        pyt[f'q{n}_trafiona'] = {'type': 'noul', 'instructions': f'Strona {sciezka}, opisana wstępem powyżej, odpowiada wprost na zapytanie #{n}, bez dalszego klikania.'}
        pyt[f'q{n}_lokalne'] = {'type': 'noul', 'instructions': f'Zapytanie #{n} zawiera intencję lokalną (miasto, region, „w pobliżu”).'}
    odpA = jev(stan, pyt)
    a = odpA['answers']
    wynik['tokeny'] += odpA.get('usage', {}).get('input_tokens', 0)
    print(f'\nTEST A — dokąd kierować zapytania\n{"wyśw":>5} {"zapytanie":40} {"najlepsza strona":34} {"p":>4} {"traf":>4} {"lok":>4}')
    for i, g in enumerate(zap):
        n = i + 1
        s = a[f'q{n}_strona']
        wynik['zapytania'].append({'zapytanie': g['keyword'], 'wyswietlenia': g['impressions'], 'pozycja': g['position'],
                                   'najlepsza': s['choice'], 'p': round(s['probabilities'][s['choice']], 2),
                                   'trafiona': round(a[f'q{n}_trafiona']['noul'], 2), 'lokalne': round(a[f'q{n}_lokalne']['noul'], 2)})
        print(f'{g["impressions"]:5} {g["keyword"][:40]:40} {s["choice"]:34} {s["probabilities"][s["choice"]]:4.2f} '
              f'{a[f"q{n}_trafiona"]["noul"]:4.2f} {a[f"q{n}_lokalne"]["noul"]:4.2f}')

if sekcje:
    stan = (KONTEKST + f'\n\nStrona {sciezka}. Jej sekcje (nagłówek i początek treści):\n' +
            '\n'.join(f'#{i + 1} NAGŁÓWEK: {hd}\nTREŚĆ: {tx}' for i, (hd, tx) in enumerate(sekcje)))
    pyt = {}
    for i in range(len(sekcje)):
        n = i + 1
        pyt[f's{n}_przydatnosc'] = {'type': 'score', 'instructions': f'Jak przydatna jest sekcja #{n} dla firmy, która chce wybrać i kupić produkt z tej kategorii?',
                                   'criteria': ['zbędna, nic nie wnosi do decyzji zakupowej', 'ogólnikowa, treść znana każdemu kupującemu', 'pomocna, doprecyzowuje wybór', 'niezbędna, bez niej klient nie dokona wyboru']}
        pyt[f's{n}_ogolnik'] = {'type': 'noul', 'instructions': f'Treść sekcji #{n} brzmi jak ogólnikowy tekst marketingowy lub wygenerowany automatycznie, bez konkretnych modeli, liczb i cen.'}
        pyt[f's{n}_dubel'] = {'type': 'noul', 'instructions': f'Sekcja #{n} powtarza temat, który omawia już inna sekcja na tej stronie.'}
    odpB = jev(stan, pyt)
    b = odpB['answers']
    wynik['tokeny'] += odpB.get('usage', {}).get('input_tokens', 0)
    print(f'\nTEST B — sekcje strony (przydatność 0-3, ogólnik 0-1, dubel 0-1)\n{"#":>2} {"sekcja":62} {"przyd.":>6} {"ogóln.":>6} {"dubel":>5}')
    for i, (hd, tx) in enumerate(sekcje):
        n = i + 1
        wynik['sekcje'].append({'naglowek': hd, 'przydatnosc': round(b[f's{n}_przydatnosc']['score'], 2),
                                'ogolnik': round(b[f's{n}_ogolnik']['noul'], 2), 'dubel': round(b[f's{n}_dubel']['noul'], 2)})
        print(f'{n:2} {hd[:62]:62} {b[f"s{n}_przydatnosc"]["score"]:6.2f} {b[f"s{n}_ogolnik"]["noul"]:6.2f} {b[f"s{n}_dubel"]["noul"]:5.2f}')

if 'json' in opc:
    json.dump(wynik, open(opc['json'], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('zapisano', opc['json'])
