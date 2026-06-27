import { formatPrice, formatDate } from './utils/format.js';
import { getOrders } from './utils/storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ordersList');
    if (!container) return;

    const orders = getOrders().sort((a, b) => b.id - a.id);

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="orders-empty">
                <i class="fa-solid fa-receipt"></i>
                <h2>No orders yet</h2>
                <p>When you place an order, it will appear here.</p>
                <a href="products.html" class="btn-luxury">Start Shopping</a>
            </div>`;
        return;
    }

    container.innerHTML = orders.map(order => {
        const statusClass = order.status === 'pending' ? 'pending' : 'completed';
        const statusText = order.status === 'pending' ? 'Pending' : 'Completed';
        return `
            <a href="order-success.html?orderId=${order.id}" class="order-card">
                <div class="order-card-left">
                    <span class="order-id">Order #${order.id}</span>
                    <span class="order-date">${formatDate(order.createdAt)}</span>
                </div>
                <div class="order-card-center">
                    <span class="order-items-count">${order.items.length} item${order.items.length > 1 ? 's' : ''}</span>
                </div>
                <div class="order-card-right">
                    <span class="order-status ${statusClass}">${statusText}</span>
                    <span class="order-total">${formatPrice(order.grandTotal)}</span>
                </div>
            </a>`;
    }).join('');
});
