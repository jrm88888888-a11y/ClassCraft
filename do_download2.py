import os, re, urllib.request, json, sys, concurrent.futures

exec(open('download_nature_photos.py').read().split('def download')[0])

UA = 'MartinEduBot/1.0 (educational website; jrm88888888@gmail.com)'

def get_filename(url):
    m = re.search(r'/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+?)(?:/\d+px-|$)', url)
    if m:
        return urllib.request.unquote(m.group(1))
    return None

# Build path->filename mapping
items = []
for path, url in DOWNLOADS:
    fname = get_filename(url)
    items.append((path, fname))

# Query API in batches of 50 to get valid thumb URLs
path_to_url = {}
missing_files = []

for i in range(0, len(items), 50):
    batch = items[i:i+50]
    titles = '|'.join(f'File:{fn}' for _, fn in batch)
    api = f'https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.request.quote(titles)}&redirects=1&prop=imageinfo&iiprop=url&iiurlwidth=960&format=json'
    req = urllib.request.Request(api, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            d = json.loads(resp.read())
    except Exception as e:
        print(f'API error batch {i}: {e}')
        continue
    
    # Map normalized/redirected titles back
    title_to_info = {}
    for pid, page in d['query']['pages'].items():
        if int(pid) > 0 and 'imageinfo' in page:
            title_to_info[page['title']] = page['imageinfo'][0]
    
    # Handle normalizations
    norm_map = {}
    for n in d['query'].get('normalized', []):
        norm_map[n['from']] = n['to']
    redir_map = {}
    for r in d['query'].get('redirects', []):
        redir_map[r['from']] = r['to']
    
    for path, fname in batch:
        query_title = f'File:{fname}'
        resolved = norm_map.get(query_title, query_title)
        resolved = redir_map.get(resolved, resolved)
        if resolved in title_to_info:
            info = title_to_info[resolved]
            url = info.get('thumburl') or info.get('url', '')
            if url:
                path_to_url[path] = url
            else:
                missing_files.append((path, fname))
        else:
            missing_files.append((path, fname))

print(f"Found URLs for {len(path_to_url)} files, {len(missing_files)} missing on Commons")

# Save results for download
import json as j
with open('/tmp/download_urls.json', 'w') as f:
    j.dump(path_to_url, f)
with open('/tmp/missing_files.json', 'w') as f:
    j.dump(missing_files, f)

print("Saved URL mapping and missing list")
