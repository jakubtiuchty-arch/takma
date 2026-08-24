"""Kafle promocyjne do maila — cięcie zdjęć produktów na dwie części.

Na /promocje urządzenie wychodzi poza obrys ciemnego kafla. W mailu nie ma
pozycjonowania (Outlook i Gmail wycinają position/negative margin), więc ten
sam efekt składamy z dwóch kawałków zdjęcia: lewy leży w komórce z ciemnym
tłem, prawy w sąsiedniej komórce na jasnym tle wiadomości. Stykają się bez
szwu, bo pochodzą z jednego pliku i mają tę samą wysokość.

Uruchomienie:  python3 scripts/promo-mail-tiles.py
Wynik:         public/images/promocje/mail/<slug>-l.png i -r.png (2×)
Wymiary wypisane na końcu wklej do MAIL_TILE w src/lib/email-templates.ts.
"""

import json
from PIL import Image

# Wysokość zdjęcia w mailu (px, 1×). Skanery są pionowe i mogą być wyższe;
# drukarki poziome — przy tej samej wysokości byłyby nienaturalnie szerokie.
WYSOKOSC = {
    'zebra-ds4608': 215,
    'zebra-ds2208': 215,
    'zebra-zd230d': 165,
    'zebra-zd230t': 165,
}

# Ile szerokości zdjęcia leży na ciemnym kaflu; reszta wystaje poza jego obrys.
UDZIAL_NA_KAFLU = 0.55

wymiary = {}
for slug, h in WYSOKOSC.items():
    im = Image.open(f'public/images/promocje/{slug}.png').convert('RGBA')
    w = round(h * im.width / im.height)
    podzial = round(w * UDZIAL_NA_KAFLU)
    duze = im.resize((w * 2, h * 2), Image.LANCZOS)
    duze.crop((0, 0, podzial * 2, h * 2)).save(f'public/images/promocje/mail/{slug}-l.png')
    duze.crop((podzial * 2, 0, w * 2, h * 2)).save(f'public/images/promocje/mail/{slug}-r.png')
    wymiary[slug] = {'h': h, 'l': podzial, 'r': w - podzial}

print(json.dumps(wymiary, indent=2))
