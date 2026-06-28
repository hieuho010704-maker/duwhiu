import os
import glob

def ensure_utf8():
    html_files = glob.glob('*.html')
    for html_file in html_files:
        try:
            # Read first to detect or decode properly
            with open(html_file, 'rb') as f:
                raw_data = f.read()
            
            # Try decoding as utf-8 first
            try:
                content = raw_data.decode('utf-8')
            except UnicodeDecodeError:
                # If fail, try cp1252 or utf-16
                try:
                    content = raw_data.decode('utf-16')
                except UnicodeDecodeError:
                    content = raw_data.decode('latin-1')
            
            # Write back as strict utf-8
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[UTF-8 OK] {html_file}")
        except Exception as e:
            print(f"[ERROR] Failed to convert {html_file}: {e}")

if __name__ == '__main__':
    ensure_utf8()
