import os, re, urllib.request, concurrent.futures, sys, json, time

exec(open('download_nature_photos.py').read().split('def download')[0])

# Extract filename from each URL
def get_filename(url):
    # URL pattern: .../thumb/x/xy/FILENAME/800px-FILENAME
    # or .../x/xy/FILENAME
    m = re.search(r'/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+?)(?:/\d+px-|$)', url)
    if m:
        return urllib.request.unquote(m.group(1))
    return None

def dl(item):
    path, url = item
    if os.path.exists(path):
        return ('SKIP', path)
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        fname = get_filename(url)
        if not fname:
            return ('FAIL', path, 'Could not extract filename')
        
        # Use Special:FilePath to resolve correct URL
        fp_url = f"https://commons.wikimedia.org/wiki/Special:FilePath/{urllib.request.quote(fname)}?width=960"
        req = urllib.request.Request(fp_url, headers={
            'User-Agent': 'MartinEduBot/1.0 (educational website; jrm88888888@gmail.com)',
        })
        with urllib.request.urlopen(req, timeout=25) as resp:
            data = resp.read()
        if len(data) < 500:
            return ('FAIL', path, f'Too small: {len(data)} bytes')
        with open(path, 'wb') as f:
            f.write(data)
        return ('OK', path)
    except Exception as e:
        return ('FAIL', path, str(e))

# Get batch range from args
start = int(sys.argv[1])
end = int(sys.argv[2])
batch = DOWNLOADS[start:end]

print(f"Batch [{start}:{end}] — {len(batch)} items")

with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
    results = list(ex.map(dl, batch))

ok = sum(1 for r in results if r[0]=='OK')
skip = sum(1 for r in results if r[0]=='SKIP')
fail = [r for r in results if r[0]=='FAIL']
print(f"OK: {ok}, SKIP: {skip}, FAIL: {len(fail)}")
for f in fail:
    print(f"  FAIL: {f[1]} — {f[2][:80]}")
