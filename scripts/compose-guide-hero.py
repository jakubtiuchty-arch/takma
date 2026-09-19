#!/usr/bin/env python3
"""Hero poradnika z prawdziwych renderów produktów na wygenerowanym tle.

Użycie: python3 scripts/compose-guide-hero.py <tlo.png> <wyjscie.webp> [linia_podlogi=720]
Tło (2000×848, bez produktów) generuje np. ElevenLabs; rendery z public/images/products
muszą mieć kanał alfa. Lista items poniżej: (plik, wysokość px, lewy x), od tyłu do przodu.
"""
import sys, os
from PIL import Image, ImageFilter, ImageDraw, ImageChops
plate_path, out_path = sys.argv[1], sys.argv[2]
FLOOR = int(sys.argv[3]) if len(sys.argv) > 3 else 720
ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images", "products") + os.sep
W, H = 2000, 848
bg = Image.open(plate_path).convert('RGBA').resize((W, H), Image.LANCZOS)

def load(name, h):
    im = Image.open(ROOT + name).convert('RGBA')
    a = im.getchannel('A').point(lambda v: 255 if v > 8 else 0)
    im = im.crop(a.getbbox())
    s = h / im.height
    return im.resize((int(im.width * s), h), Image.LANCZOS)

# (plik, wysokość px, lewy x) — kolejność = od tyłu do przodu
items = [
    ('magicard-600-duo-angle.png', 430, 1350),
    ('zc350_1.png', 520, 1130),
    ('magicard-pronto100-main.png', 330, 960),
]
for name, h, x in items:
    im = load(name, h)
    y = FLOOR - h
    # odbicie w podłodze
    ref = im.transpose(Image.FLIP_TOP_BOTTOM)
    mask = Image.new('L', ref.size, 0); md = ImageDraw.Draw(mask)
    for yy in range(ref.height):
        md.line([(0, yy), (ref.width, yy)], fill=int(max(0, 95 * (1 - yy / (ref.height * 0.5)))))
    ref.putalpha(ImageChops.multiply(ref.getchannel('A'), mask))
    ref = ref.filter(ImageFilter.GaussianBlur(2.5))
    bg.alpha_composite(ref, (x, FLOOR + 1))
    # miękki cień pod urządzeniem
    sh = Image.new('RGBA', (im.width + 120, 70), (0, 0, 0, 0)); sd = ImageDraw.Draw(sh)
    sd.ellipse([0, 12, im.width + 120, 58], fill=(0, 0, 0, 190)); sh = sh.filter(ImageFilter.GaussianBlur(16))
    bg.alpha_composite(sh, (x - 60, FLOOR - 36))
    bg.alpha_composite(im, (x, y))

out = bg.convert('RGB')
out.save(out_path, 'WEBP', quality=86, method=6)
out.save(out_path.replace('.webp', '-preview.png'))
print('zapisano', out.size, os.path.getsize(out_path), 'B ->', out_path)
