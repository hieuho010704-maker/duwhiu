import os

def extract_styles():
    source_file = 'css/pages.css.old'
    if not os.path.exists(source_file):
        print(f"[ERROR] Source file {source_file} not found!")
        return

    with open(source_file, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()

    # Define page sections (0-indexed, start/end line numbers from 1-indexed view)
    sections = {
        'product-detail.css': (964, 1765),
        'orders.css': (2612, 2916),
        'auth.css': (3365, 3439),
        'contact.css': (3440, 3487)
    }

    os.makedirs('css/pages', exist_ok=True)

    for filename, (start, end) in sections.items():
        dest_path = f"css/pages/{filename}"
        
        # 1-indexed to 0-indexed adjustment
        section_lines = lines[start-1:end]
        
        # Write to file
        with open(dest_path, 'w', encoding='utf-8') as df:
            df.write(f"/* ==========================================================================\n")
            df.write(f"   #{filename.upper().replace('.CSS', '')} PAGE (MIGRATED FROM PAGES.CSS.OLD)\n")
            df.write(f"   ========================================================================== */\n\n")
            df.write(''.join(section_lines))
        
        print(f"[EXTRACTED] {dest_path} ({len(section_lines)} lines)")

if __name__ == '__main__':
    extract_styles()
