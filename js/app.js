import { initLayout, updateCartCount, updateWishlistCount } from './layout.js';
import { initCart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
    initLayout();
    initCart();
});

window.addEventListener('cartUpdated', updateCartCount);
window.addEventListener('wishlistUpdated', updateWishlistCount);

window.addEventListener('storage', (e) => {
    if (e.key === 'cart') updateCartCount();
    if (e.key === 'wishlist') updateWishlistCount();
});

import { getCart, saveCart, showToast } from './cart.js';
window.addToCartFast = function(id, name, price, brand, image) {
    const cart = getCart();
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: parseFloat(price),
            brand: brand,
            image: image,
            quantity: 1,
            size: '', // Default placeholder
            color: ''
        });
    }
    saveCart(cart);
    updateCartCount();
    showToast('Added to cart successfully!', 'success');
    
    // Trigger storage event to update mini cart's internal DOM in the background without opening it
    window.dispatchEvent(new StorageEvent('storage', { key: 'cart' }));
};

import { toggleWishlist } from './utils/storage.js';

window.toggleWishlistFast = function(button, productId, productName) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    
    // Call the actual storage function
    const currentWishlist = toggleWishlist(productId);
    const isFav = currentWishlist.includes(parseInt(productId, 10));
    
    if (!isFav) {
        // Was active, now deactivating
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        showToast(`Removed ${productName} from wishlist`, 'info');
    } else {
        // Was inactive, now activating
        icon.classList.add('fa-solid');
        icon.classList.remove('fa-regular');
        showToast(`Added ${productName} to wishlist!`, 'success');
    }
    
    // Dispatch events to update UI
    window.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: { productId, isFav } }));
    window.dispatchEvent(new StorageEvent('storage', { key: 'wishlist' }));
};
