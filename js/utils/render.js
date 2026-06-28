import { formatPrice } from './format.js';
import { isInWishlist } from './storage.js';

export function createProductCard(product, options = {}) {
    const { compact = false, isSlide = false, isMarquee = false } = options;
    const badgeMap = {
        'Sale': `<span class="product-badge sale">Sale</span>`,
        'New': `<span class="product-badge new">New</span>`,
        'Best Seller': `<span class="product-badge best">Best Seller</span>`,
        'Trending': `<span class="product-badge trending">Trending</span>`
    };
    const badgeHTML = product.badge ? (badgeMap[product.badge] || `<span class="product-badge">${product.badge}</span>`) : '';

    const isFav = isInWishlist(product.id);

    const colClass = isMarquee
        ? 'product-marquee-item product-item'
        : (isSlide ? 'swiper-slide product-item' : 'col-lg-3 col-md-4 col-sm-6 mb-4 product-item');

    // Use actual product description
    const description = product.description || '';
    const ratingHTML = product.rating ? `<div class="product-rating"><i class="fa-solid fa-star"></i> <span>${product.rating}</span></div>` : '';

    return `
        <div class="${colClass}">
            <div class="product-card">
                <div class="product-image">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}" loading="lazy"
                             onerror="this.src='assets/images/default-product.webp'">
                    </a>
                    ${badgeHTML ? `<div class="product-badges">${badgeHTML}</div>` : ''}
                    <div class="product-overlay">
                        <a href="product-detail.html?id=${product.id}" class="overlay-btn">View Detail</a>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand || 'Luxury'}</div>
                    <div class="product-info-top">
                        <h3 class="product-name">
                            <a href="product-detail.html?id=${product.id}">${product.name}</a>
                        </h3>
                        <button class="btn-heart ${isFav ? 'active' : ''}" aria-label="Add to wishlist" onclick="event.preventDefault(); event.stopPropagation(); window.toggleWishlistFast(this, '${product.id}', \`${product.name.replace(/'/g, "\\'")}\`)">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>
                    ${ratingHTML}
                    <p class="product-desc" title="${description}">${description}</p>
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                </div>
                <!-- Cutout Cart Button Area -->
                <div class="product-cart-cutout">
                    <button class="btn-cart-cutout" onclick="event.preventDefault(); event.stopPropagation(); window.addToCartFast('${product.id}', \`${product.name.replace(/'/g, "\\'")}\`, ${product.price}, '${product.brand}', '${product.image}')" aria-label="Add to cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
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
        <div class="cart-page-item" data-index="${index}">
            <div class="cart-page-item__img-wrapper">
                <a href="product-detail.html?id=${item.id}">
                    <img src="${item.image || 'assets/images/default-product.webp'}" alt="${item.name}">
                </a>
            </div>
            
            <div class="cart-page-item__main">
                <div class="cart-page-item__info">
                    <h3 class="item-name"><a href="product-detail.html?id=${item.id}">${item.name}</a></h3>
                    <p class="item-detail">${item.brand} | ${detail}</p>
                    
                    <div class="item-stock-status mt-2">
                        <span class="status-badge arrive"><i class="fa-solid fa-truck-fast"></i> Arrives Dec 18-20</span>
                        <span class="status-badge return"><i class="fa-solid fa-rotate-left"></i> Free returns within 30 days</span>
                    </div>
                    
                    <div class="item-price-qty mt-3 d-flex align-items-center" style="gap: 20px;">
                        <span class="item-price" style="font-size: 16px; font-weight: 700; color: var(--color-black);">${formatPrice(item.price)}</span>
                        
                        <div class="cart-item-qty">
                            <button class="qty-decrease" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
                            <span>${item.quantity}</span>
                            <button class="qty-increase" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cart-page-item__actions">
                <button class="action-btn save-btn"><i class="fa-regular fa-heart"></i> Save</button>
                <button class="action-btn remove-btn cart-item-remove" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>
    `;
}

export function createBrandCard(brand) {
    return `
        <div class="col-lg-3 col-md-6 mb-4 brand-card-wrapper">
            <a href="brand-detail.html?brand=${encodeURIComponent(brand.name)}" class="brand-card luxury-brand-card">
                <div class="brand-card-image">
                    <img src="${brand.banner}" alt="${brand.name}" loading="lazy">
                </div>
                <div class="brand-card-body">
                    <div class="brand-card-header">
                        <img src="${brand.logo}" alt="${brand.name} logo" class="brand-card-logo">
                        <h3>${brand.name}</h3>
                    </div>
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

