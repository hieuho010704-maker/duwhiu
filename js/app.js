import { initLayout, updateCartCount } from './layout.js';
import { initCart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
    initLayout();
    initCart();
});

window.addEventListener('cartUpdated', updateCartCount);
window.addEventListener('storage', (e) => {
    if (e.key === 'cart') updateCartCount();
});
