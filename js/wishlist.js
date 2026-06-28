import products from './products-data.js';
import { getWishlist } from './utils/storage.js';
import { createProductCard } from './utils/render.js';

function checkEmptyState() {
    const wishlist = getWishlist();
    const emptyEl = document.getElementById('wishlistEmpty');
    const gridEl = document.getElementById('wishlistGrid');
    
    if (!emptyEl || !gridEl) return;
    
    if (wishlist.length === 0) {
        emptyEl.style.display = 'block';
        gridEl.style.display = 'none';
    } else {
        emptyEl.style.display = 'none';
        gridEl.style.display = 'flex';
    }
}

function renderWishlist() {
    const gridEl = document.getElementById('wishlistGrid');
    if (!gridEl) return;
    
    const wishlist = getWishlist();
    const favProducts = products.filter(p => wishlist.includes(p.id));
    
    if (favProducts.length === 0) {
        checkEmptyState();
        return;
    }
    
    gridEl.innerHTML = favProducts.map(p => createProductCard(p)).join('');
    checkEmptyState();
}

document.addEventListener('DOMContentLoaded', () => {
    renderWishlist();
});

// Real-time animation when item is unfavorited from the wishlist page
window.addEventListener('wishlistUpdated', (e) => {
    const { productId, isFav } = e.detail;
    if (!isFav) {
        const itemBtn = document.querySelector(`#wishlistGrid .wishlist-btn-overlay[data-id="${productId}"]`);
        if (itemBtn) {
            const productItem = itemBtn.closest('.product-item');
            if (productItem) {
                productItem.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                productItem.style.opacity = '0';
                productItem.style.transform = 'scale(0.8) translateY(20px)';
                setTimeout(() => {
                    productItem.remove();
                    checkEmptyState();
                }, 400);
            }
        }
    }
});

// Sync from other tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'wishlist') {
        renderWishlist();
    }
});