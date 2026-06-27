import { initLayout, updateCartCount } from './layout.js';
import './cart.js';

document.addEventListener('DOMContentLoaded', () => {
    initLayout();
});

window.addEventListener('cartUpdated', updateCartCount);
window.addEventListener('storage', (e) => {
    if (e.key === 'cart') updateCartCount();
});
