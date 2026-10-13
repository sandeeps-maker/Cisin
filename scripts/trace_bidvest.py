import cv2
import numpy as np

img = cv2.imread('public/logos/logo-bidvest-v2.png', cv2.IMREAD_UNCHANGED)
h, w = img.shape[:2]
alpha = img[:, :, 3]

# Upscale 4x with lanczos
h4, w4 = h * 4, w * 4
a4 = cv2.resize(alpha, (w4, h4), interpolation=cv2.INTER_LANCZOS4)
_, thresh = cv2.threshold(a4, 100, 255, cv2.THRESH_BINARY)

# Find contours (external + internal)
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

paths = []
for i, cnt in enumerate(contours):
    if len(cnt) < 3:
        continue
    area = cv2.contourArea(cnt)
    if area < 30:
        continue
    approx = cv2.approxPolyDP(cnt, 0.45, True)
    pts = approx.reshape(-1, 2)
    d = f"M {pts[0][0]} {pts[0][1]} " + " ".join([f"L {p[0]} {p[1]}" for p in pts[1:]]) + " Z"
    paths.append(d)

svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w4} {h4}" width="{w4}" height="{h4}">\n  <path d="{" ".join(paths)}" fill="#d2d7de" fill-rule="evenodd" />\n</svg>'
with open('public/logos/bidvest.svg', 'w', encoding='utf-8') as f:
    f.write(svg)
print('Generated bidvest.svg with', len(paths), 'paths')
