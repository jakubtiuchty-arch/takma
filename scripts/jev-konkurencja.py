#!/usr/bin/env python3
"""Jev (TypeSafe): analiza konkurencji dla jednego słowa kluczowego.

Użycie:
  python3 scripts/jev-konkurencja.py <serp.json> [--nasza=/drukarki-etykiet] [--limit=15] [--md=raport.md] [--json=wynik.json]

serp.json: {"keyword": "...", "paa": ["pytanie", ...], "organic": [{"position", "url", "title", "domain_rating", "traffic"}, ...]}
(eksport z Ahrefs serp-overview). Skrypt pobiera każdą stronę z listy oraz naszą stronę, wyciąga z HTML fakty
(tytuł, H1, H2, liczba słów, ceny, marki, tabela, FAQ, schema) i zadaje Jevowi ten sam zestaw pytań o każdą z nich:
typ strony, segment klienta, szerokość oferty, ceny, treść doradcza, porównania, FAQ, ogólnikowość, sygnały zaufania,
dopasowanie do zapytania oraz to, czy strona odpowiada na pytania z bloku „People Also Ask”.
Potem porównuje naszą stronę z medianą TOP 10 i wypisuje luki oraz przewagi. Wymaga TYPESAFE_API_KEY w .env.local.
"""
import html, json, re, statistics, subprocess, sys, time
from urllib.parse import urlparse

args = [a for a in sys.argv[1:] if not a.startswith('--')]
if not args:
    sys.exit(__doc__)
opc = {a.split('=')[0][2:]: a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--')}
NASZA = opc.get('nasza', '/drukarki-etykiet')
LIMIT = int(opc.get('limit', 15))
klucz = [l.split('=', 1)[1].strip().strip('"\'') for l in open('.env.local') if l.startswith('TYPESAFE_API_KEY=')][0]

serp = json.load(open(args[0], encoding='utf-8'))
KW = serp['keyword']
PAA = serp.get('paa', [])[:6]
MARKI = ['Zebra', 'Honeywell', 'TSC', 'Brother', 'Dymo', 'Godex', 'Citizen', 'Xprinter', 'Niimbot', 'Epson', 'Toshiba',
         'Sato', 'Datalogic', 'Intermec', 'Etisoft', 'Argox', 'Bixolon', 'Phomemo', 'Datamax']
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36'


def pobierz(url):
    r = subprocess.run(['curl', '-sL', '--compressed', '-m', '30', '-A', UA, '-o', '-', '-w', '\n%{http_code}', url],
                       capture_output=True)
    out = r.stdout.decode('utf-8', 'replace')
    body, _, code = out.rpartition('\n')
    return body, code.strip()


def tekst(s):
    return html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s))).strip()


def profil(url, body):
    h = re.sub(r'<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>', '', body, flags=re.S | re.I)
    t = lambda pat: [tekst(x) for x in re.findall(pat, h, re.S | re.I)]
    title = (t(r'<title[^>]*>(.*?)</title>') or [''])[0]
    desc = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)', h, re.I)
    h1 = t(r'<h1[^>]*>(.*?)</h1>')
    h2 = [x for x in t(r'<h2[^>]*>(.*?)</h2>') if x][:25]
    body_t = tekst(re.sub(r'<(header|nav|footer)[^>]*>.*?</\1>', ' ', h, flags=re.S | re.I))
    slowa = len(body_t.split())
    ceny = len(re.findall(r'\d[\d\s]*,?\d*\s?zł', body_t))
    marki = [m for m in MARKI if re.search(r'\b' + m + r'\b', body_t, re.I)]
    schema = sorted(set(re.findall(r'"@type"\s*:\s*"([A-Za-z]+)"', body)))
    ma_tabele = bool(re.search(r'<table', h, re.I))
    ma_faq = bool(re.search(r'FAQ|najczęściej zadawane|pytania i odpowiedzi', body_t, re.I)) or 'FAQPage' in schema
    ma_filtry = bool(re.search(r'filtr|producent|marka|sortuj', body_t[:20000], re.I))
    linki = len(re.findall(r'<a\s', h, re.I))
    excerpt = body_t[:2600]
    return {'title': title, 'description': (desc.group(1) if desc else '')[:300], 'h1': h1[:2], 'h2': h2, 'slowa': slowa,
            'ceny': ceny, 'marki': marki, 'schema': [s for s in schema if s in ('Product', 'ItemList', 'FAQPage', 'BreadcrumbList', 'CollectionPage', 'Offer', 'AggregateOffer', 'Article')],
            'tabela': ma_tabele, 'faq_tekst': ma_faq, 'filtry': ma_filtry, 'linki': linki, 'excerpt': excerpt}


def jev(state, questions):
    body = json.dumps({'state': state, 'model': 'jev-latest', 'questions': questions})
    r = subprocess.run(['curl', '-s', '-m', '180', '-X', 'POST', 'https://api.typesafe.ai/v1/systemone',
                        '-H', 'Authorization: Bearer ' + klucz, '-H', 'Content-Type: application/json',
                        '--data-binary', '@-'], input=body.encode(), capture_output=True)
    odp = json.loads(r.stdout.decode())
    if 'answers' not in odp:
        raise RuntimeError('Błąd API: ' + json.dumps(odp)[:300])
    return odp


def pytania():
    q = {
        'typ': {'type': 'choice', 'instructions': 'Jakiego typu jest ta strona?', 'criteria': {
            'sklep_kategoria': 'lista produktów wielu marek w sklepie internetowym',
            'sklep_marka': 'sklep lub kategoria jednej marki (np. tylko Brother)',
            'porownywarka': 'porównywarka cen, marketplace lub ranking agregatora',
            'producent': 'oficjalna strona producenta sprzętu',
            'poradnik': 'artykuł doradczy lub blog bez listy produktów do kupienia',
            'inne': 'żadne z powyższych'}},
        'segment': {'type': 'choice', 'instructions': 'Do jakiego klienta strona jest skierowana?', 'criteria': {
            'dom': 'użytkownik domowy, naklejki, drukarki Niimbot, Dymo, Phomemo',
            'maly_biznes': 'mała firma, e-commerce, etykiety kurierskie, drukarki do 1 500 zł',
            'b2b_przemysl': 'firmy, magazyn, produkcja, drukarki przemysłowe Zebra, Honeywell, TSC',
            'mieszany': 'wszystkie grupy naraz'}},
        'oferta': {'type': 'score', 'instructions': 'Jak szeroką ofertę drukarek widać na stronie?', 'criteria': [
            'brak produktów do kupienia', 'kilka modeli jednej marki', 'kilkanaście modeli, dwie lub trzy marki',
            'dziesiątki modeli wielu marek z podziałem na klasy']},
        'ceny': {'type': 'noul', 'instructions': 'Strona pokazuje ceny produktów przy modelach.'},
        'doradztwo': {'type': 'score', 'instructions': 'Jak dobrze treść strony pomaga wybrać drukarkę etykiet?', 'criteria': [
            'brak treści doradczej', 'kilka ogólnych zdań', 'omawia kryteria wyboru z konkretami',
            'pełny przewodnik z liczbami, porównaniami i scenariuszami']},
        'porownanie': {'type': 'noul', 'instructions': 'Strona zawiera porównanie modeli lub tabelę parametrów.'},
        'faq': {'type': 'noul', 'instructions': 'Strona odpowiada na pytania klientów w formie FAQ.'},
        'ogolnik': {'type': 'noul', 'instructions': 'Treść opisowa strony brzmi jak ogólnikowy tekst marketingowy lub wygenerowany automatycznie.'},
        'zaufanie': {'type': 'score', 'instructions': 'Ile sygnałów zaufania ma strona: dane firmy, serwis, gwarancja, opinie, partnerstwa z producentami?', 'criteria': [
            'żadnych', 'jeden lub dwa ogólne', 'kilka konkretnych', 'wiele konkretnych z liczbami i nazwami']},
        'dopasowanie': {'type': 'noul', 'instructions': f'Strona odpowiada wprost osobie, która wpisała w Google „{KW}” i chce kupić drukarkę: od razu widać ofertę i jak wybrać.'},
        'przewaga': {'type': 'choice', 'instructions': 'Co najbardziej wyróżnia tę stronę na tle zwykłej kategorii sklepu?', 'criteria': {
            'oferta': 'liczba modeli i marek', 'ceny': 'widoczne ceny i promocje', 'tresc': 'treść doradcza i porównania',
            'marka': 'autorytet producenta lub znanej sieci', 'opinie': 'opinie i oceny klientów', 'nic': 'nic szczególnego'}},
    }
    for i, p in enumerate(PAA):
        q[f'paa{i + 1}'] = {'type': 'noul', 'instructions': f'Strona odpowiada na pytanie: „{p}”.'}
    return q


def stan(kw, url, pr):
    return (f'Słowo kluczowe w Google: „{kw}”. Oceniana strona: {url}\n'
            f'Tytuł: {pr["title"]}\nOpis meta: {pr["description"]}\nH1: {" | ".join(pr["h1"])}\n'
            f'Nagłówki H2: {" | ".join(pr["h2"])}\n'
            f'Fakty z HTML: {pr["slowa"]} słów, {pr["ceny"]} cen w zł, marki: {", ".join(pr["marki"]) or "brak"}, '
            f'tabela: {"tak" if pr["tabela"] else "nie"}, FAQ: {"tak" if pr["faq_tekst"] else "nie"}, '
            f'filtry: {"tak" if pr["filtry"] else "nie"}, schema: {", ".join(pr["schema"]) or "brak"}, linków: {pr["linki"]}\n'
            f'Początek treści: {pr["excerpt"]}')


strony = [dict(s) for s in serp['organic'] if s.get('url')][:LIMIT]
strony.append({'position': 0, 'url': 'https://www.takma.com.pl' + NASZA, 'title': 'nasza strona', 'domain_rating': None, 'traffic': None, 'nasza': True})
wyniki = []
tokeny = 0
for s in strony:
    url = s['url']
    body, code = pobierz(url)
    if code != '200' or len(body) < 2000:
        print(f'  {s["position"]:2} {urlparse(url).netloc:28} HTTP {code}, pominięta')
        wyniki.append({**s, 'http': code, 'ok': False})
        continue
    pr = profil(url, body)
    try:
        odp = jev(stan(KW, url, pr), pytania())
    except Exception as e:
        print(f'  {s["position"]:2} {urlparse(url).netloc:28} Jev: {e}')
        wyniki.append({**s, 'http': code, 'ok': False, 'profil': pr})
        continue
    a = odp['answers']
    tokeny += odp.get('usage', {}).get('input_tokens', 0)
    oc = {'typ': a['typ']['choice'], 'typ_p': round(a['typ']['probabilities'][a['typ']['choice']], 2),
          'segment': a['segment']['choice'], 'oferta': round(a['oferta']['score'], 2), 'ceny': round(a['ceny']['noul'], 2),
          'doradztwo': round(a['doradztwo']['score'], 2), 'porownanie': round(a['porownanie']['noul'], 2),
          'faq': round(a['faq']['noul'], 2), 'ogolnik': round(a['ogolnik']['noul'], 2), 'zaufanie': round(a['zaufanie']['score'], 2),
          'dopasowanie': round(a['dopasowanie']['noul'], 2), 'przewaga': a['przewaga']['choice'],
          'paa': [round(a[f'paa{i + 1}']['noul'], 2) for i in range(len(PAA))]}
    wyniki.append({**s, 'http': code, 'ok': True, 'profil': {k: v for k, v in pr.items() if k != 'excerpt'}, 'ocena': oc})
    print(f'  {s["position"]:2} {urlparse(url).netloc:28} {oc["typ"]:16} {oc["segment"]:12} oferta {oc["oferta"]:.1f} '
          f'ceny {oc["ceny"]:.2f} doradztwo {oc["doradztwo"]:.1f} zaufanie {oc["zaufanie"]:.1f} dopas. {oc["dopasowanie"]:.2f} | {pr["slowa"]} słów')
    time.sleep(1)

# ---------- porównanie: nasza strona vs TOP 10 ----------
ok = [w for w in wyniki if w.get('ok')]
top = [w for w in ok if not w.get('nasza') and w['position'] <= 10]
nasza = next((w for w in ok if w.get('nasza')), None)
metryki = ['oferta', 'ceny', 'doradztwo', 'porownanie', 'faq', 'zaufanie', 'dopasowanie']
med = {m: statistics.median([w['ocena'][m] for w in top]) for m in metryki} if top else {}
med_slowa = statistics.median([w['profil']['slowa'] for w in top]) if top else 0
luki, przewagi = [], []
if nasza:
    for m in metryki:
        n, t = nasza['ocena'][m], med[m]
        if n + 0.15 < t: luki.append((m, n, t))
        elif n > t + 0.15: przewagi.append((m, n, t))
paa_cov = [statistics.mean([w['ocena']['paa'][i] for w in top]) for i in range(len(PAA))] if top else []

L = [f'# Konkurencja dla „{KW}” według Jev — {time.strftime("%d.%m.%Y")}\n',
     f'Źródło pozycji: {serp.get("source", "")}. Oceniono {len(top)} stron z TOP 10 organicznych i naszą stronę `{NASZA}`. '
     f'Tokeny wejścia: {tokeny}.\n',
     '## Tabela\n', '| Poz. | Strona | DR | Ruch | Typ | Segment | Oferta 0–3 | Ceny | Doradztwo 0–3 | Porówn. | FAQ | Zaufanie 0–3 | Dopasow. | Słowa | Przewaga |',
     '|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|']
for w in sorted(ok, key=lambda x: (x['position'] == 0, x['position'])):
    o, p = w['ocena'], w['profil']
    L.append(f'| {"nasza" if w.get("nasza") else w["position"]} | {urlparse(w["url"]).netloc} | {w.get("domain_rating") or "–"} | {w.get("traffic") or "–"} | {o["typ"]} | {o["segment"]} | '
             f'{o["oferta"]:.1f} | {o["ceny"]:.2f} | {o["doradztwo"]:.1f} | {o["porownanie"]:.2f} | {o["faq"]:.2f} | {o["zaufanie"]:.1f} | {o["dopasowanie"]:.2f} | {p["slowa"]} | {o["przewaga"]} |')
pominiete = [w for w in wyniki if not w.get('ok')]
if pominiete:
    L.append('\nNie pobrano lub nie oceniono: ' + ', '.join(f'{urlparse(w["url"]).netloc} (HTTP {w.get("http")})' for w in pominiete) + '.')
if top:
    from collections import Counter
    L.append('\n## Wspólny mianownik TOP 10\n')
    L.append(f'- Typ strony: {", ".join(f"{k} ×{v}" for k, v in Counter(w["ocena"]["typ"] for w in top).most_common())}.')
    L.append(f'- Segment: {", ".join(f"{k} ×{v}" for k, v in Counter(w["ocena"]["segment"] for w in top).most_common())}.')
    L.append(f'- Mediany: oferta {med["oferta"]:.1f}, ceny {med["ceny"]:.2f}, doradztwo {med["doradztwo"]:.1f}, porównanie {med["porownanie"]:.2f}, FAQ {med["faq"]:.2f}, zaufanie {med["zaufanie"]:.1f}, dopasowanie {med["dopasowanie"]:.2f}, słów {med_slowa:.0f}.')
    L.append(f'- Marki najczęściej obecne: {", ".join(f"{k} ×{v}" for k, v in Counter(m for w in top for m in w["profil"]["marki"]).most_common(8))}.')
    for i, p in enumerate(PAA):
        L.append(f'- PAA „{p}”: średnio {paa_cov[i]:.2f} w TOP 10' + (f', nasza {nasza["ocena"]["paa"][i]:.2f}' if nasza else '') + '.')
if nasza:
    L.append('\n## Nasza strona na tle TOP 10\n')
    L.append('Luki (nasza ocena poniżej mediany TOP 10):' if luki else 'Brak luk względem mediany TOP 10.')
    for m, n, t in luki: L.append(f'- {m}: nasza {n:.2f}, mediana {t:.2f}')
    L.append('\nPrzewagi:' if przewagi else '')
    for m, n, t in przewagi: L.append(f'- {m}: nasza {n:.2f}, mediana {t:.2f}')
    L.append(f'\nObjętość: nasza strona {nasza["profil"]["slowa"]} słów, mediana TOP 10 {med_slowa:.0f}.')
raport = '\n'.join(L)
print('\n' + raport)
if 'md' in opc:
    open(opc['md'], 'w', encoding='utf-8').write(raport)
if 'json' in opc:
    json.dump({'keyword': KW, 'paa': PAA, 'wyniki': wyniki, 'mediany': med, 'tokeny': tokeny}, open(opc['json'], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
