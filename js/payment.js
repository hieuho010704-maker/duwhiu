// ================= PAYMENT / CHECKOUT =================

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

// ================= TOAST =================
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '✅'}</span>
        <span class="toast-text">${message}</span>
        <button class="toast-close">&times;</button>
    `;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    const timeout = setTimeout(() => {
        hideToast(toast);
    }, 3500);

    toast.querySelector('.toast-close')?.addEventListener('click', function(e) {
        e.stopPropagation();
        clearTimeout(timeout);
        hideToast(toast);
    });

    toast.addEventListener('click', function() {
        clearTimeout(timeout);
        hideToast(toast);
    });
}

function hideToast(toast) {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
}

// ================= RENDER ORDER SUMMARY =================
function renderOrderSummary() {
    const cart = getCart();
    const container = document.getElementById('orderItems');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const grandTotalEl = document.getElementById('grandTotal');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-4"><p class="text-muted">Your cart is empty.</p><a href="products.html" class="btn btn-dark btn-sm">Continue Shopping</a></div>`;
        if (subtotalEl) subtotalEl.textContent = '0 VND';
        if (grandTotalEl) grandTotalEl.textContent = '0 VND';
        return;
    }

    let html = '';
    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        html += `
            <div class="summary-item" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; padding: 16px; border: 1px solid var(--color-gray-200); border-radius: 12px; background: var(--color-white); position: relative;">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div style="width: 80px; height: 80px; border-radius: 8px; background: var(--color-gray-100); display: flex; justify-content: center; align-items: center; overflow: hidden;">
                        <img src="${item.image || 'assets/images/default-product.webp'}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 15px; color: var(--color-black); margin-bottom: 4px; padding-right: 24px;">${item.name}</div>
                        <div style="font-size: 13px; color: var(--color-gray-500); margin-bottom: 8px;">${item.brand} ${item.size ? '| ' + item.size : ''} ${item.color ? '| ' + item.color : ''}</div>
                        <div style="font-size: 13px; font-weight: 500; color: var(--color-gray-600); background: var(--color-gray-100); padding: 4px 10px; border-radius: 20px; display: inline-block;">Qty ${item.quantity} <i class="fa-solid fa-chevron-down ms-1" style="font-size: 10px;"></i></div>
                    </div>
                </div>
                <div style="font-weight: 700; font-size: 16px; color: var(--color-black); align-self: flex-end;">
                    ${formatPrice(itemTotal)}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    const shipping = subtotal > 500000 ? 0 : 30000;
    const grandTotal = subtotal + shipping;

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
    if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal);
}

// ================= ĐẶT HÀNG =================
function placeOrder() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const note = document.getElementById('note').value.trim() || '';
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'cod';

    if (!fullName || !email || !phone || !address) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 500000 ? 0 : 30000;
    const grandTotal = subtotal + shipping;

    const orderId = Date.now();
    const order = {
        id: orderId,
        customer: { fullName, email, phone, address, note },
        items: cart,
        paymentMethod,
        subtotal,
        shipping,
        grandTotal,
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    // Lưu đơn hàng
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Xóa giỏ hàng
    localStorage.removeItem('cart');

    // 🔥 Toast + chuyển hướng
    showToast('🎉 Order placed successfully!', 'success');

    setTimeout(() => {
        window.location.href = `order-success.html?orderId=${orderId}`;
    }, 1500);
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', function() {
    renderOrderSummary();

    const form = document.getElementById('checkoutForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        placeOrder();
    });
});