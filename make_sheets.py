from PIL import Image, ImageDraw, ImageFont
import os, sys

region = sys.argv[1]
region_dir = f'nature/{region}'

files = sorted([f for f in os.listdir(region_dir) if f.endswith(('.jpg','.jpeg','.png','.JPG')) and f != '.DS_Store'])

# Grid: 5 columns, enough rows
cols = 5
thumb_w, thumb_h = 250, 200
label_h = 30
cell_h = thumb_h + label_h
rows = (len(files) + cols - 1) // cols

sheet = Image.new('RGB', (cols * thumb_w, rows * cell_h), (255, 255, 255))
draw = ImageDraw.Draw(sheet)

for i, fn in enumerate(files):
    col = i % cols
    row = i // cols
    x = col * thumb_w
    y = row * cell_h
    
    try:
        img = Image.open(os.path.join(region_dir, fn))
        img.thumbnail((thumb_w - 4, thumb_h - 4))
        # Center the thumbnail
        px = x + (thumb_w - img.width) // 2
        py = y + (thumb_h - img.height) // 2
        sheet.paste(img, (px, py))
    except Exception as e:
        draw.text((x + 5, y + 5), f"ERROR: {e}"[:30], fill='red')
    
    # Label
    label = fn.replace('.jpg','').replace('.png','').replace('-', ' ')
    draw.text((x + 5, y + thumb_h + 5), label[:30], fill='black')

out = f'/tmp/sheet_{region}.jpg'
sheet.save(out, quality=90)
print(f'{region}: {len(files)} images -> {out}')
