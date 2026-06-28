import os

def bundle_css():
    files = [
        'css/base/variables.css',
        'css/base/reset.css',
        'css/base/typography.css',
        'css/components/header.css',
        'css/components/button.css',
        'css/components/product-card.css',
        'css/components/footer.css',
        'css/components/toast.css',
        'css/pages/home.css',
        'css/pages/checkout.css',
        'css/pages/cart.css',
        'css/pages/products.css',
        'css/pages/brand.css',
        'css/pages/product-detail.css',
        'css/pages/orders.css',
        'css/pages/auth.css',
        'css/pages/contact.css'
    ]
    
    import_lines = []
    other_lines = []
    
    for f in files:
        path = f.replace('/', os.sep)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
                # Find all @import statements
                lines = content.split('\n')
                for line in lines:
                    if line.strip().startswith('@import'):
                        import_lines.append(line)
                    else:
                        # Skip comments at the top if they are empty
                        other_lines.append(line)
                other_lines.append('\n\n')
    
    # Clean up imports (remove duplicates)
    unique_imports = list(dict.fromkeys(import_lines))
    
    # Combine: imports first, then the rest
    final_css = '\n'.join(unique_imports) + '\n\n' + '\n'.join(other_lines)
    
    # Write to css/main.css (as pure ASCII to prevent any BOM/encoding issues)
    with open('css/main.css', 'w', encoding='ascii', errors='ignore') as fh:
        fh.write(final_css)
    print("[SUCCESS] Bundled main.css with imports at the absolute top!")

if __name__ == '__main__':
    bundle_css()
