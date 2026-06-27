import { formatPrice } from './format.js';

export function createProductCard(product, options = {}) {
    const { compact = false } = options;
    const saleBadge = product.badge === 'Sale' ? `<span class="product-badge sale">Sale</span>` : '';
    const newBadge = product.badge === 'New' ? `<span class="product-badge new">New</span>` : '';
    const bestBadge = product.badge === 'Best Seller' ? `<span class="product-badge best">Best Seller</span>` : '';
    const oldPriceHTML = product.oldPrice > 0
        ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
        : '';

    const colClass = compact
        ? 'col-lg-3 col-md-4 col-sm-6 mb-4 product-item'
        : 'col-lg-3 col-md-4 col-sm-6 mb-4 product-item';

    return `
        <div class="${colClass}">
            <div class="product-card luxury-card">
                <div class="product-image">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}" loading="lazy"
                             onerror="this.src='assets/images/default-product.webp'">
                    </a>
                    <div class="product-badges">${saleBadge}${newBadge}${bestBadge}</div>
                    <div class="product-overlay">
                        <a href="product-detail.html?id=${product.id}" class="overlay-btn">View Detail</a>
                    </div>
                </div>
                <div class="product-info">
                    <p class="product-brand">${product.brand}</p>
                    <h3 class="product-name">
                        <a href="product-detail.html?id=${product.id}">${product.name}</a>
                    </h3>
                    <div class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${oldPriceHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function createCartItemRow(item, index, context = 'mini') {
    const detail = item.size && item.color ? `Size: ${item.size} | Color: ${item.color}` : '';
    const itemTotal = item.price * item.quantity;

    if (context === 'mini') {
        return `
            <div class="mini-cart-item">
                <img src="${item.image || 'assets/images/default-product.webp'}" alt="${item.name}">
                <div class="mini-cart-info">
                    <p class="mini-cart-name">${item.name}</p>
                    <p class="mini-cart-detail">${detail}</p>
                    <div class="mini-cart-price-qty">
                        <span>${item.quantity} x ${formatPrice(item.price)}</span>
                    </div>
                </div>

                <button class="cart-item-remove" data-index="${index}" aria-label="Remove">&times;</button>
            </div>
        `;
    }

    return `
        <div class="cart-item" data-index="${index}">
            <img src="${item.image || 'assets/images/default-product.webp'}" alt="${item.name}">
            <div class="cart-item-info">
                <p class="item-name">${item.name}</p>
                <p class="item-detail">${detail}</p>
                <div class="cart-item-qty">
                    <button class="qty-decrease" data-index="${index}">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-increase" data-index="${index}">+</button>
                </div>
            </div>
            <div class="cart-item-price">
                <p class="item-price">${formatPrice(itemTotal)}</p>
            </div>
            <button class="cart-item-remove" data-index="${index}">&times;</button>
        </div>
    `;
}

export function createBrandCard(brand) {
    return `
        <div class="col-lg-4 col-md-6 mb-4 brand-card-wrapper">
            <a href="brand-detail.html?brand=${encodeURIComponent(brand.name)}" class="brand-card luxury-brand-card">
                <div class="brand-card-image">
                    <img src="${brand.banner}" alt="${brand.name}" loading="lazy">
                </div>
                <div class="brand-card-body">
                    <img src="${brand.logo}" alt="${brand.name} logo" class="brand-card-logo">
                    <h3>${brand.name}</h3>
                    <p>${brand.description}</p>
                    <span class="brand-card-link">Explore Collection →</span>
                </div>
            </a>
        </div>
    `;
}

export function createFeaturedBrandCard(brand, isReverse = false) {
    return `
        <div class="featured-brand-row ${isReverse ? 'reverse' : ''}">
            <div class="featured-brand-image">
                <img src="${brand.banner}" alt="${brand.name}" loading="lazy">
            </div>
            <div class="featured-brand-content">
                <img src="${brand.logo}" alt="${brand.name} logo" class="featured-brand-logo">
                <p>${brand.description}</p>
                <a href="brand-detail.html?brand=${encodeURIComponent(brand.name)}" class="btn-luxury">Explore Collection</a>
            </div>
        </div>
    `;
}

