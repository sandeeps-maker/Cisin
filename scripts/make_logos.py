import os
import re

# Clean and normalize all SVG files to have clean uniform silver-gray fill: #d1d5db / #e2e8f0
svg_files = {
    'nokia.svg': 'Nokia',
    'careem.svg': 'Careem',
    'crunchbase.svg': 'Crunchbase',
    'worldvision.svg': 'World Vision',
    'spirit.svg': 'Spirit Airlines',
    'ebay.svg': 'eBay',
    'amcor.svg': 'Amcor',
    'bcg.svg': 'BCG'
}

for filename in svg_files:
    filepath = os.path.join('public', 'logos', filename)
    if not os.path.exists(filepath):
        print(f"Missing {filename}")
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace fills with currentColor or uniform clean silver-slate #d2d7de
    # But preserve fill="none"
    lines = []
    # Replace non-none fill colors
    content_clean = re.sub(r'fill="(?!none)[^"]+"', 'fill="#d2d7de"', content)
    content_clean = re.sub(r'style="([^"]*?)fill:[^;"]+(;?)"', r'style="\1fill:#d2d7de\2"', content_clean)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content_clean)
    print(f"Normalized {filename}")

# Also generate a crisp vector bidvest.svg using cv2 contour tracing
try:
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
        
        # Save a 4x ultra HD PNG version
        clean_arr = np.zeros((h4, w4, 4), dtype=np.uint8)
        clean_arr[:, :, :3] = [210, 215, 222]
        clean_arr[:, :, 3] = alpha4
        cv2.imwrite('public/logos/logo-bidvest-hd.png', clean_arr)
        print("Generated logo-bidvest-hd.png (4x crisp HD)")
except Exception as e:
    print("Bidvest trace exception:", e)
