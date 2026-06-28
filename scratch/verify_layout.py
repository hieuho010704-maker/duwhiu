import os
import re

def verify_files():
    print("=== STARTING DESIGN & PATTERNS VERIFICATION ===")
    
    # Files to verify
    html_files = ['index.html', 'products.html', 'cart.html', 'payment.html']
    css_files = [
        'css/main.css',
        'css/base/variables.css',
        'css/base/reset.css',
        'css/base/typography.css',
        'css/components/header.css',
        'css/components/button.css',
        'css/components/product-card.css',
        'css/components/footer.css',
        'css/pages/home.css',
        'css/pages/checkout.css',
        'css/pages/cart.css',
        'css/pages/products.css'
    ]
    js_files = ['js/components.js', 'js/app.js', 'js/layout.js']

    # 1. Check existence of all files
    all_exist = True
    for f in html_files + css_files + js_files:
        path = os.path.join(os.getcwd(), f.replace('/', os.sep))
        if not os.path.exists(path):
            print(f"[ERROR] File does not exist: {f}")
            all_exist = False
        else:
            print(f"[OK] Found: {f} ({os.path.getsize(path)} bytes)")

    if not all_exist:
        return

    # 2. Check HTML references
    for html in html_files:
        with open(html, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            # Check if css/main.css is linked
            if 'css/main.css' not in content:
                print(f"[WARNING] css/main.css is NOT linked in {html}")
            else:
                print(f"[OK] css/main.css is linked in {html}")
            
            # Check for legacy CSS files still linked
            for legacy in ['variables.css', 'components.css', 'pages.css', 'luxury-global.css']:
                if legacy in content and 'main.css' not in content:
                    print(f"[WARNING] Legacy CSS '{legacy}' is still referenced in {html}")

    # 3. Check CSS for syntax errors (basic braces count per file)
    for css in css_files:
        with open(css, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            open_braces = content.count('{')
            close_braces = content.count('}')
            if open_braces != close_braces:
                print(f"[ERROR] Braces mismatch in {css}: {open_braces} open, {close_braces} close")
            
            # Check for unclosed comments
            open_comments = content.count('/*')
            close_comments = content.count('*/')
            if open_comments != close_comments:
                print(f"[ERROR] Comments mismatch in {css}: {open_comments} open, {close_comments} close")

    print("=== VERIFICATION COMPLETE ===")

if __name__ == '__main__':
    verify_files()
