import os
import re

svg_files = [
    'nokia.svg',
    'careem.svg',
    'crunchbase.svg',
    'worldvision.svg',
    'spirit.svg',
    'ebay.svg',
    'amcor.svg',
    'bcg.svg'
]

target_fill = "#d2d7de"

for filename in svg_files:
    filepath = os.path.join('public', 'logos', filename)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace existing fills (except fill="none")
    # Replace fill="..."
    content = re.sub(r'fill="(?!(?:none|url))[^"]+"', f'fill="{target_fill}"', content)
    # Replace style="...fill:...;..."
    content = re.sub(r'(style="[^"]*?fill:)\s*[^;"]+', rf'\1{target_fill}', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Normalized {filename} with fill={target_fill}")
