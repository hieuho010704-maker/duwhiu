// ================= ORDERS HISTORY =================

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('ordersList');
    const orders = getOrders();

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="no-orders">
                <i class="fa-solid fa-receipt"></i>
                <p>You haven't placed any orders yet.</p>
                <a href="products.html" class="btn btn-dark mt-3">Start Shopping</a>
            </div>
        `;
        return;
    }

    // Sắp xếp mới nhất lên đầu
    orders.sort((a, b) => b.id - a.id);

    let html = '';
    orders.forEach(order => {
        const statusClass = order.status === 'pending' ? 'pending' : '';
        const statusText = order.status === 'pending' ? '⏳ Pending' : '✅ Completed';

        html += `
            <a href="order-success.html?orderId=${order.id}" class="order-card">
                <div>
                    <div class="order-id">#${order.id}</div>
                    <div class="order-date">${formatDate(order.createdAt)}</div>
                </div>
                <div>
                    <span class="order-items-count">📦 ${order.items.length} items</span>
                </div>
                <div>
                    <span class="order-status ${statusClass}">${statusText}</span>
                </div>
                <div class="order-total">${formatPrice(order.grandTotal)}</div>
            </a>
        `;
    });

    container.innerHTML = html;
});