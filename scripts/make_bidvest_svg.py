import cv2
import numpy as np

img = cv2.imread('public/logos/logo-bidvest.png', cv2.IMREAD_UNCHANGED)
if img is not None:
    h, w = img.shape[:2]
    alpha = img[:, :, 3]
    scale = 4
    h4, w4 = h * scale, w * scale
    alpha4 = cv2.resize(alpha, (w4, h4), interpolation=cv2.INTER_LANCZOS4)
    _, thresh = cv2.threshold(alpha4, 128, 255, cv2.THRESH_BINARY)
    
    contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_KCOS)
    svg_paths = []
    for cnt in contours:
        epsilon = 0.001 * cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, epsilon, True)
        pts = approx.reshape(-1, 2)
        if len(pts) < 3:
            continue
        d = f"M {pts[0][0]} {pts[0][1]} " + " ".join([f"L {p[0]} {p[1]}" for p in pts[1:]]) + " Z"
        svg_paths.append(d)
    
    path_str = " ".join(svg_paths)
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w4} {h4}" width="{w4}" height="{h4}">
  <path d="{path_str}" fill="#d2d7de" fill-rule="evenodd" />
</svg>'''
    with open('public/logos/bidvest.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("Successfully generated vector public/logos/bidvest.svg!")
