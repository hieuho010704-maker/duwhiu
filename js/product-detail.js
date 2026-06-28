import products from './products-data.js';
import { showToast, getCart, saveCart, updateCartCount } from './cart.js';
import { getWishlist, toggleWishlist, isInWishlist } from './utils/storage.js';
import { createProductCard } from './utils/render.js';

// ================= UTILITY =================
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ================= COLOR HELPER =================
function getColorHex(colorName) {
    const colorMap = {
        'Black': '#1a1a1a',
        'White': '#f5f5f5',
        'Blue': '#1a56db',
        'Navy': '#0a1628',
        'Khaki': '#c3b091',
        'Grey': '#808080',
        'Brown': '#8b5a2b',
        'Red': '#dc2626',
        'Green': '#16a34a',
        'Yellow': '#eab308',
        'Purple': '#7c3aed',
        'Orange': '#ea580c',
        'Pink': '#ec4899',
        'Teal': '#0d9488',
        'Olive': '#4b5e3a',
        'Burgundy': '#800020',
        'Charcoal': '#36454f',
        'Cream': '#fffdd0',
        'Beige': '#f5f5dc',
        'Coral': '#ff7f50'
    };
    return colorMap[colorName] || '#cccccc';
}

// ================= RENDER PRODUCT DETAIL =================
function renderProductDetail() {
    const container = document.getElementById('productDetailContent');
    if (!container) return;

    const productId = parseInt(getUrlParam('id'));
    if (!productId) {
        container.innerHTML = `<div class="alert alert-danger">Product not found.</div>`;
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        container.innerHTML = `<div class="alert alert-danger">Product not found.</div>`;
        return;
    }

    document.title = `${product.name} - Men's Wear`;

    // ----- Gallery -----
    const mainImage = product.gallery && product.gallery.length > 0
        ? product.gallery[0]
        : product.image || 'assets/images/default-product.webp';

    const thumbnails = product.gallery && product.gallery.length > 1
        ? product.gallery.slice(1)
        : [];

    // ----- Badge -----
    let badgeHTML = '';
    if (product.badge === 'New') badgeHTML = `<span class="detail-image-badge new">New</span>`;
    else if (product.badge === 'Sale') badgeHTML = `<span class="detail-image-badge sale">Sale</span>`;
    else if (product.badge === 'Best Seller') badgeHTML = `<span class="detail-image-badge best">Best Seller</span>`;

    // ----- Rating -----
    const fullStars = Math.floor(product.rating || 0);
    const halfStar = (product.rating || 0) % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fa-solid fa-star"></i>';
    if (halfStar) starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
    const emptyStars = 5 - Math.ceil(product.rating || 0);
    for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="fa-regular fa-star"></i>';

    // ----- Colors -----
    let colorsHTML = '';
    if (product.colors && product.colors.length > 0) {
        colorsHTML = `
            <div class="detail-colors">
                <h4>Color</h4>
                <div class="color-options" id="colorOptions">
                    ${product.colors.map((c, index) => {
                        const hex = getColorHex(c);
                        const borderColor = c === 'White' ? '#ccc' : 'transparent';
                        return `
                            <button class="color-btn ${index === 0 ? 'active' : ''}" 
                                    data-color="${c}" 
                                    style="background-color: ${hex}; border-color: ${borderColor};">
                                <span class="color-name">${c}</span>
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    // ----- Sizes -----
    let sizesHTML = '';
    if (product.sizes && product.sizes.length > 0) {
        sizesHTML = `
            <div class="detail-sizes">
                <h4>Size</h4>
                <div class="size-options" id="sizeOptions">
                    ${product.sizes.map((s, index) => `
                        <button class="size-btn ${index === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ----- Stock -----
    const stockStatus = product.stock > 0
        ? `<span class="detail-stock">✅ In Stock (${product.stock} available)</span>`
        : `<span class="detail-stock out-of-stock">❌ Out of Stock</span>`;

    // ----- Price -----
    const oldPriceHTML = product.oldPrice && product.oldPrice > product.price
        ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
        : '';

    // ----- Breadcrumb -----
    const categoryName = product.category ? product.category.charAt(0).toUpperCase() + product.category.slice(1) : '';
    const breadcrumb = `
        <nav class="detail-breadcrumb">
            <a href="index.html">Home</a>
            <span class="separator">/</span>
            <a href="products.html">Products</a>
            ${categoryName ? `<span class="separator">/</span> <a href="products.html?category=${product.category}">${categoryName}</a>` : ''}
            <span class="separator">/</span>
            <span class="current">${product.name}</span>
        </nav>
    `;

    // ----- Policies -----
    const policiesHTML = `
        <div class="detail-policies">
            <div class="policy-item">
                <i class="fa-solid fa-truck"></i>
                <div>
                    <strong>Free Shipping</strong>
                    <span>On orders over 500,000 VND</span>
                </div>
            </div>
            <div class="policy-item">
                <i class="fa-solid fa-rotate-left"></i>
                <div>
                    <strong>30-Day Returns</strong>
                    <span>Hassle-free returns</span>
                </div>
            </div>
            <div class="policy-item">
                <i class="fa-solid fa-lock"></i>
                <div>
                    <strong>Secure Payment</strong>
                    <span>100% secure checkout</span>
                </div>
            </div>
        </div>
    `;

    // ----- Wishlist -----
    const wishlistIcon = isInWishlist(product.id) ? 'fa-solid' : 'fa-regular';
    const wishlistHTML = `
        <button class="detail-wishlist-btn" id="wishlistBtn">
            <i class="${wishlistIcon} fa-heart"></i>
        </button>
    `;

    // ----- Main HTML -----
    const html = `
        ${breadcrumb}
        <div class="row">
            <div class="col-lg-6">
                <div class="detail-gallery">
                    <div class="detail-thumbnails" id="thumbnails">
                        ${thumbnails.map(img => `
                            <img src="${img}" alt="${product.name}" class="thumbnail-img" data-image="${img}">
                        `).join('')}
                    </div>
                    <div class="detail-main-image" id="mainImageContainer">
                        <img src="${mainImage}" alt="${product.name}" id="mainImage">
                        ${badgeHTML}
                        <div class="lightbox-overlay" id="lightboxOverlay">
                            <span class="lightbox-close" id="lightboxClose">&times;</span>
                            <img src="${mainImage}" alt="${product.name}" id="lightboxImage">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="detail-info">
                    <p class="detail-brand">${product.brand.toUpperCase()}</p>
                    <h1 class="detail-name">${product.name}</h1>
                    <div class="detail-rating">
                        ${starsHTML} <span>(${product.rating || 0})</span>
                    </div>
                    <div class="detail-price">
                        ${formatPrice(product.price)} ${oldPriceHTML}
                    </div>
                    ${stockStatus}
                    <p class="detail-description">${product.description || 'No description available.'}</p>

                    ${colorsHTML}
                    ${sizesHTML}

                    <div class="detail-quantity">
                        <label for="quantityInput">Quantity</label>
                        <div class="quantity-control">
                            <button id="qtyDecrease">−</button>
                            <input type="number" id="quantityInput" value="1" min="1" max="${product.stock || 0}">
                            <button id="qtyIncrease">+</button>
                        </div>
                    </div>

                    <div class="detail-actions">
                        ${wishlistHTML}
                        <button class="detail-add-to-cart" id="addToCartBtn">
                            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>
                    </div>

                    ${policiesHTML}
                </div>
            </div>
        </div>

        <div class="related-products-section" id="relatedProductsSection">
            <h3 class="related-title">You May Also Like</h3>
            <div class="row related-products-grid" id="relatedProductsGrid"></div>
        </div>
    `;

    container.innerHTML = html;

    // ===== SỰ KIỆN =====

    // 1. Thumbnail
    const mainImageEl = document.getElementById('mainImage');
    document.querySelectorAll('.thumbnail-img').forEach(img => {
        img.addEventListener('click', function() {
            const src = this.dataset.image;
            mainImageEl.style.opacity = '0';
            setTimeout(() => {
                mainImageEl.src = src;
                document.getElementById('lightboxImage').src = src;
                mainImageEl.style.opacity = '1';
            }, 200);
            document.querySelectorAll('.thumbnail-img').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    const firstThumb = document.querySelector('.thumbnail-img');
    if (firstThumb) firstThumb.classList.add('active');

    // 2. Lightbox
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');

    mainImageEl.addEventListener('click', function() {
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    lightboxClose.addEventListener('click', function() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 3. Color
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 4. Size
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 5. Quantity
    const qtyInput = document.getElementById('quantityInput');
    document.getElementById('qtyDecrease').addEventListener('click', function() {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) qtyInput.value = val - 1;
    });
    document.getElementById('qtyIncrease').addEventListener('click', function() {
        let val = parseInt(qtyInput.value) || 1;
        const max = parseInt(qtyInput.max) || 999;
        if (val < max) qtyInput.value = val + 1;
    });

    // 6. Wishlist
    document.getElementById('wishlistBtn').addEventListener('click', function() {
        const currentWishlist = toggleWishlist(product.id);
        const isFav = currentWishlist.includes(product.id);
        
        const icon = this.querySelector('i');
        if (isFav) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            showToast('Added to wishlist! ❤️', 'success');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            showToast('Removed from wishlist.', 'info');
        }
        
        // Dispatch events to update global UI
        window.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: { productId: product.id, isFav } }));
        window.dispatchEvent(new StorageEvent('storage', { key: 'wishlist' }));
    });

    // 7. Add to Cart (GỌI SHOWTOAST TỪ CART.JS)
    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const selectedColor = document.querySelector('.color-btn.active')?.dataset.color || '';
        const selectedSize = document.querySelector('.size-btn.active')?.dataset.size || '';
        const quantity = parseInt(qtyInput.value) || 1;

        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            showToast('Please select a size.', 'error');
            return;
        }
        if (product.colors && product.colors.length > 0 && !selectedColor) {
            showToast('Please select a color.', 'error');
            return;
        }

        let cart = getCart();
        const existingIndex = cart.findIndex(item =>
            item.id === product.id &&
            item.size === selectedSize &&
            item.color === selectedColor
        );

        if (existingIndex !== -1) {
            cart[existingIndex].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image || 'assets/images/default-product.webp',
                size: selectedSize,
                color: selectedColor,
                quantity: quantity
            });
        }

        saveCart(cart);
        showToast(`✅ ${product.name} added to cart!`, 'success');

        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    });

    // 8. Related Products
    renderRelatedProducts(product);
}

// ================= RELATED PRODUCTS =================
function renderRelatedProducts(product) {
    const grid = document.getElementById('relatedProductsGrid');
    if (!grid) return;

    let related = products.filter(p =>
        p.category === product.category &&
        p.id !== product.id
    );

    if (related.length < 6) {
        const brandRelated = products.filter(p =>
            p.brand === product.brand &&
            p.id !== product.id &&
            !related.some(r => r.id === p.id)
        );
        related = [...related, ...brandRelated];
    }

    related = related.slice(0, 6);

    if (related.length === 0) {
        grid.innerHTML = `<p class="no-related">No related products found.</p>`;
        return;
    }

    grid.innerHTML = related.map(p => createProductCard(p)).join('');
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', renderProductDetail);