import os
import glob

def clean_html_links():
    html_files = glob.glob('*.html')
    legacy_patterns = [
        r'<link\s+rel=["\']stylesheet["\']\s+href=["\']css/variables\.css["\']\s*/?>',
        r'<link\s+rel=["\']stylesheet["\']\s+href=["\']css/components\.css["\']\s*/?>',
        r'<link\s+rel=["\']stylesheet["\']\s+href=["\']css/pages\.css["\']\s*/?>',
        r'<link\s+rel=["\']stylesheet["\']\s+href=["\']css/responsive\.css["\']\s*/?>',
        r'<link\s+rel=["\']stylesheet["\']\s+href=["\']css/luxury-global\.css["\']\s*/?>'
    ]
    
    # We will search for any of these lines and replace the whole block with the link to css/main.css
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        modified = False
        # Remove any legacy stylesheet links
        import re
        new_content = content
        
        # Check if we have legacy links
        has_legacy = False
        for pattern in legacy_patterns:
            if re.search(pattern, new_content, re.IGNORECASE):
                has_legacy = True
                new_content = re.sub(pattern, '', new_content, flags=re.IGNORECASE)
                modified = True
                
        # If legacy links were removed, ensure css/main.css is linked
        if has_legacy:
            if 'css/main.css' not in new_content:
                # Insert main.css right before </head> or after another stylesheet
                head_match = re.search(r'</head>', new_content, re.IGNORECASE)
                if head_match:
                    head_pos = head_match.start()
                    link_str = '    <!-- Custom CSS Architecture -->\n    <link rel="stylesheet" href="css/main.css">\n'
                    new_content = new_content[:head_pos] + link_str + new_content[head_pos:]
                    modified = True
                    print(f"[FIX] Added main.css to {html_file}")
            else:
                print(f"[OK] main.css already present in {html_file}")
        
        if modified:
            # Clean up empty lines or multiple consecutive newlines caused by removal
            new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[SUCCESS] Updated links in {html_file}")
        else:
            print(f"[NO CHANGE] {html_file}")

if __name__ == '__main__':
    clean_html_links()
