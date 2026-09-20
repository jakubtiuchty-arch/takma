#!/usr/bin/env python3
"""
Obróbka surowych zdjęć produktów: wycięcie tła, miękka poświata (cień) wokół
urządzenia i dopasowanie do płótna kategorii — tak jak zdjęcia obrabiane ręcznie
w Canvie (wzorzec: /images/products/zd421t_2.png).

Użycie:
  python3 scripts/obrob-zdjecia.py <katalog_lub_plik>... [--kategoria=drukarki-etykiet]
      [--plotno=1200x1200] [--wypelnienie=0.78] [--cien=0.41] [--zasieg=0.042]
      [--silnik=rembg|removebg|photoroom] [--model=birefnet-general] [--bez-ciena] [--wyjscie=<katalog>] [--jak=<plik_wzorcowy>]

Płótno bierze się z kategorii (--kategoria) albo wprost (--plotno). Wynik trafia do
<wyjscie>/ (domyślnie podkatalog „gotowe” obok źródeł) jako PNG z przezroczystym
tłem plus arkusz kontrolny `arkusz-kontrolny.png` do przejrzenia.

Cień: czarna poświata równomiernie dookoła sylwetki, krycie `--cien` przy krawędzi,
liniowo gasnąca do zera w odległości `--zasieg` × krótszy bok płótna (zmierzone
na wzorcu: 41 % krycia, ~50 px przy 1200 px). Kolor tła sklepu jest biały, więc
na karcie wygląda identycznie jak wzorzec wypalony na białym.

Wymaga: rembg, onnxruntime, numpy, opencv (wszystko instaluje się z rembg).
"""
import sys, os, math, glob
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFont

# Płótno wg kategorii — zmierzone na obecnych kartach (wrzesień 2026).
PLOTNA = {
    'drukarki-etykiet': (1200, 1200), 'drukarki-kart': (1200, 1200), 'drukarki-opasek': (1200, 1200),
    'akcesoria': (800, 800), 'materialy-eksploatacyjne': (800, 800), 'oprogramowanie': (800, 800),
    'terminale-mobilne': (600, 1200), 'skanery-kodow-kreskowych': (600, 1200),
    'tablety-przemyslowe': (1200, 800),
    # POS-y mają bardzo różne proporcje: monitor 15,6" stojąco, tablet 11" poziomo,
    # ręczny terminal z drukarką — kwadrat mieści każdy z nich bez przycięcia.
    'terminale-pos': (1200, 1200),
}
ROZSZERZENIA = ('.jpg', '.jpeg', '.png', '.webp', '.heic', '.tif', '.tiff', '.bmp')


def opcja(nazwa, domyslna=None):
    for a in sys.argv[1:]:
        if a.startswith(f'--{nazwa}='):
            return a.split('=', 1)[1]
    return domyslna


def flaga(nazwa):
    return f'--{nazwa}' in sys.argv[1:]


def zrodla(args):
    pliki = []
    for a in args:
        if os.path.isdir(a):
            for ext in ROZSZERZENIA:
                pliki += glob.glob(os.path.join(a, f'*{ext}')) + glob.glob(os.path.join(a, f'*{ext.upper()}'))
        elif os.path.isfile(a):
            pliki.append(a)
    return sorted(set(pliki))


def ma_przezroczyste_tlo(im):
    """Wejście już wycięte (PNG z alfą, rogi przezroczyste) — nie tniemy drugi raz."""
    if im.mode != 'RGBA':
        return False
    a = im.getchannel('A')
    w, h = im.size
    rogi = [a.getpixel(p) for p in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1))]
    return max(rogi) < 8


_sesja = None
def wytnij_tlo(im, model):
    """Lokalnie (rembg). Modele: isnet-general-use (szybki, gubi przezroczyste plastiki),
    birefnet-general (~1 GB, lepsze krawędzie i półprzezroczystość)."""
    global _sesja
    from rembg import remove, new_session
    if _sesja is None:
        _sesja = new_session(model)
    return remove(im.convert('RGBA'), session=_sesja, post_process_mask=(model.startswith('isnet') or model.startswith('u2net')))


def wytnij_tlo_api(im, silnik):
    """Zewnętrzne API, gdy model lokalny psuje szkło albo przezroczyste plastiki.
    removebg  — remove.bg (marka Canvy; od 1.12.2026 to samo API u Leonardo.Ai), klucz REMOVEBG_API_KEY, ~0,20 USD/zdjęcie
    photoroom — Photoroom, klucz PHOTOROOM_API_KEY, ~0,02 USD/zdjęcie
    Oba zwracają PNG z kanałem alfa w pełnej rozdzielczości."""
    import io, urllib.request, uuid
    buf = io.BytesIO(); im.convert('RGB').save(buf, 'JPEG', quality=95); dane = buf.getvalue()
    if silnik == 'removebg':
        klucz = os.environ.get('REMOVEBG_API_KEY') or sys.exit('Brak REMOVEBG_API_KEY w env (klucz z https://www.remove.bg/api).')
        url, naglowki, pola = 'https://api.remove.bg/v1.0/removebg', {'X-Api-Key': klucz}, {'size': 'auto', 'type': 'product', 'format': 'png', 'semitransparency': 'true'}
    elif silnik == 'photoroom':
        klucz = os.environ.get('PHOTOROOM_API_KEY') or sys.exit('Brak PHOTOROOM_API_KEY w env (klucz z https://www.photoroom.com/api).')
        url, naglowki, pola = 'https://sdk.photoroom.com/v1/segment', {'x-api-key': klucz}, {'format': 'png'}
    else:
        sys.exit(f'Nieznany silnik: {silnik}')
    granica = uuid.uuid4().hex
    cialo = b''
    for k, v in pola.items():
        cialo += f'--{granica}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()
    cialo += f'--{granica}\r\nContent-Disposition: form-data; name="image_file"; filename="zdjecie.jpg"\r\nContent-Type: image/jpeg\r\n\r\n'.encode() + dane + f'\r\n--{granica}--\r\n'.encode()
    req = urllib.request.Request(url, data=cialo, headers={**naglowki, 'Content-Type': f'multipart/form-data; boundary={granica}'})
    try:
        with urllib.request.urlopen(req, timeout=120) as odp:
            return Image.open(io.BytesIO(odp.read())).convert('RGBA')
    except urllib.error.HTTPError as e:
        raise RuntimeError(f'{silnik} HTTP {e.code}: {e.read()[:300].decode(errors="ignore")}')


def przytnij(im, prog=8):
    a = np.array(im.getchannel('A'))
    ys, xs = np.where(a > prog)
    if len(xs) == 0:
        return im
    return im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))


def wypelnienie_wzorca(sciezka):
    """Odczytuje z gotowej karty, jaką część płótna zajmuje obiekt (większy wymiar)."""
    im = Image.open(sciezka).convert('RGBA')
    w, h = im.size
    if ma_przezroczyste_tlo(im):
        a = np.array(im.getchannel('A')) >= 250
    else:  # tło białe — obiekt = piksele wyraźnie ciemniejsze od bieli
        a = np.array(im.convert('L')) < 235
    ys, xs = np.where(a)
    ow, oh = xs.max() - xs.min() + 1, ys.max() - ys.min() + 1
    return max(ow / w, oh / h)


def dopasuj_do_plotna(obiekt, plotno, wypelnienie):
    W, H = plotno
    ow, oh = obiekt.size
    skala = min(W * wypelnienie / ow, H * wypelnienie / oh)
    nw, nh = max(1, round(ow * skala)), max(1, round(oh * skala))
    obiekt = obiekt.resize((nw, nh), Image.LANCZOS)
    kanwa = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    kanwa.paste(obiekt, ((W - nw) // 2, (H - nh) // 2), obiekt)
    return kanwa


def dodaj_poswiate(kanwa, krycie, zasieg_px, gamma=2.1):
    """Czarna poświata: krycie maleje z odległością od sylwetki, (1 - d/R)^gamma.
    gamma 2,1 dopasowane do profilu wzorca (szybki spadek przy krawędzi, długi słaby ogon)."""
    a = np.array(kanwa.getchannel('A')).astype(np.uint8)
    sylwetka = (a >= 128).astype(np.uint8)
    # odległość każdego piksela tła od najbliższego piksela sylwetki
    dist = cv2.distanceTransform(1 - sylwetka, cv2.DIST_L2, 5)
    sila = np.clip(1.0 - dist / float(zasieg_px), 0.0, 1.0) ** gamma
    cien_alfa = (sila * krycie * 255.0).astype(np.uint8)
    cien = Image.new('RGBA', kanwa.size, (0, 0, 0, 0))
    cien.putalpha(Image.fromarray(cien_alfa))
    return Image.alpha_composite(cien, kanwa)


def arkusz_kontrolny(wyniki, sciezka, kol=4, kafel=300):
    if not wyniki:
        return
    wiersze = math.ceil(len(wyniki) / kol)
    ark = Image.new('RGB', (kol * kafel, wiersze * (kafel + 28)), (233, 237, 242))
    rys = ImageDraw.Draw(ark)
    try:
        font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 14)
    except Exception:
        font = ImageFont.load_default()
    for i, (nazwa, im) in enumerate(wyniki):
        m = im.copy(); m.thumbnail((kafel - 16, kafel - 16))
        biale = Image.new('RGBA', m.size, (255, 255, 255, 255))
        biale.alpha_composite(m)
        x, y = (i % kol) * kafel, (i // kol) * (kafel + 28)
        ark.paste(biale.convert('RGB'), (x + 8 + (kafel - 16 - m.width) // 2, y + 8 + (kafel - 16 - m.height) // 2))
        rys.text((x + 8, y + kafel - 4), nazwa[:40], fill=(20, 24, 32), font=font)
    ark.save(sciezka)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    pliki = zrodla(args)
    if not pliki:
        print(__doc__); sys.exit(1)
    kategoria = opcja('kategoria')
    if opcja('plotno'):
        W, H = (int(v) for v in opcja('plotno').lower().split('x'))
    elif kategoria in PLOTNA:
        W, H = PLOTNA[kategoria]
    else:
        print('Podaj --kategoria=<id z products.ts> albo --plotno=SZERxWYS. Znane kategorie:', ', '.join(PLOTNA)); sys.exit(1)
    wypelnienie = wypelnienie_wzorca(opcja('jak')) if opcja('jak') else float(opcja('wypelnienie', 0.78))
    krycie = float(opcja('cien', 0.41))
    zasieg = float(opcja('zasieg', 0.042)) * min(W, H)
    gamma = float(opcja('gamma', 2.1))
    model = opcja('model', 'birefnet-general')
    silnik = opcja('silnik', 'rembg')  # rembg | removebg | photoroom
    wyjscie = opcja('wyjscie') or os.path.join(os.path.dirname(pliki[0]) or '.', 'gotowe')
    os.makedirs(wyjscie, exist_ok=True)
    print(f'płótno {W}x{H} | wypełnienie {wypelnienie:.2f} | cień {krycie:.2f} do {zasieg:.0f} px | silnik {silnik}{" / " + model if silnik == "rembg" else ""} | wyjście {wyjscie}')

    wyniki = []
    for p in pliki:
        nazwa = os.path.splitext(os.path.basename(p))[0]
        try:
            im = Image.open(p)
            im = im.convert('RGBA')
            if ma_przezroczyste_tlo(im):
                print(f'  {nazwa}: tło już przezroczyste, pomijam wycinanie')
            elif silnik == 'rembg':
                im = wytnij_tlo(im, model)
            else:
                im = wytnij_tlo_api(im, silnik)
            obiekt = przytnij(im)
            kanwa = dopasuj_do_plotna(obiekt, (W, H), wypelnienie)
            if not flaga('bez-ciena'):
                kanwa = dodaj_poswiate(kanwa, krycie, zasieg, gamma)
            cel = os.path.join(wyjscie, f'{nazwa}.png')
            kanwa.save(cel, optimize=True)
            wyniki.append((nazwa, kanwa))
            print(f'  {nazwa}: obiekt {obiekt.size[0]}x{obiekt.size[1]} → {cel}')
        except Exception as e:
            print(f'  {nazwa}: BŁĄD {e}')
    arkusz_kontrolny(wyniki, os.path.join(wyjscie, 'arkusz-kontrolny.png'))
    print(f'gotowe: {len(wyniki)}/{len(pliki)} | arkusz: {os.path.join(wyjscie, "arkusz-kontrolny.png")}')


if __name__ == '__main__':
    main()
