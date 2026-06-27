import { getCart, saveCart } from './utils/storage.js';
import { formatPrice } from './utils/format.js';
import { showToast } from './utils/dom.js';
import { createCartItemRow } from './utils/render.js';
import { calcGrandTotal } from './utils/pricing.js';

function bindEvents(onUpdate) {
    const container = document.getElementById('cartItems');
    if (!container) return;

    container.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', function () {
            const cart = getCart();
            const index = parseInt(this.dataset.index, 10);
            if (cart[index]) {
                cart[index].quantity += 1;
                saveCart(cart);
                onUpdate();
            }
        });
    });

    container.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', function () {
            const cart = getCart();
            const index = parseInt(this.dataset.index, 10);
            if (!cart[index]) return;
            if (cart[index].quantity > 1) cart[index].quantity -= 1;
            else cart.splice(index, 1);
            saveCart(cart);
            onUpdate();
        });
    });

    container.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', function () {
            const cart = getCart();
            cart.splice(parseInt(this.dataset.index, 10), 1);
            saveCart(cart);
            showToast('Item removed', 'info');
            onUpdate();
        });
    });
}

function renderCartPage() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const summaryEl = document.getElementById('cartSummary');
    const cart = getCart();

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <h2>Your bag is empty</h2>
                <p>Discover our curated collection of premium menswear.</p>
                <a href="products.html" class="btn-luxury">Shop Collection</a>
            </div>`;
        if (totalEl) totalEl.textContent = formatPrice(0);
        if (summaryEl) summaryEl.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map((item, i) => createCartItemRow(item, i, 'page')).join('');
    const { grandTotal } = calcGrandTotal(cart);
    if (totalEl) totalEl.textContent = formatPrice(grandTotal);
    if (summaryEl) summaryEl.style.display = 'block';
    bindEvents(renderCartPage);
}

document.addEventListener('DOMContentLoaded', renderCartPage);
