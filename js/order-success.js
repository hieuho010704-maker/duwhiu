// ================= ORDER SUCCESS DETAIL =================

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getOrderById(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    return orders.find(o => o.id === parseInt(orderId));
}

document.addEventListener('DOMContentLoaded', function() {
    // Lấy orderId từ URL
    const orderId = getUrlParam('orderId');
    const container = document.querySelector('.order-details-box');

    if (!orderId) {
        container.innerHTML = `
            <p class="text-center text-muted py-4">
                <i class="fa-solid fa-circle-exclamation fa-2x d-block mb-3" style="color: #dc3545;"></i>
                No order information found.
            </p>
        `;
        return;
    }

    const order = getOrderById(orderId);
    if (!order) {
        container.innerHTML = `
            <p class="text-center text-muted py-4">
                <i class="fa-solid fa-circle-exclamation fa-2x d-block mb-3" style="color: #dc3545;"></i>
                Order not found. It may have been removed.
            </p>
        `;
        return;
    }

    // Hiển thị mã đơn hàng
    document.getElementById('orderIdDisplay').textContent = '#' + order.id;

    // Hiển thị thông tin khách hàng
    document.getElementById('customerName').textContent = order.customer.fullName || '-';
    document.getElementById('customerEmail').textContent = order.customer.email || '-';
    document.getElementById('customerPhone').textContent = order.customer.phone || '-';
    document.getElementById('customerAddress').textContent = order.customer.address || '-';

    const paymentLabels = {
        cod: 'Cash on Delivery',
        bank: 'Bank Transfer',
        momo: 'Momo Wallet'
    };
    document.getElementById('paymentMethod').textContent = paymentLabels[order.paymentMethod] || order.paymentMethod;

    // Hiển thị danh sách sản phẩm
    const itemsContainer = document.getElementById('orderItemsList');
    if (order.items && order.items.length > 0) {
        let itemsHTML = '';
        order.items.forEach(item => {
            itemsHTML += `
                <div class="order-item-row">
                    <img src="${item.image || 'assets/images/default-product.webp'}" alt="${item.name}">
                    <div class="item-info">
                        <p class="item-name">${item.name}</p>
                        <p class="item-detail">${item.brand} ${item.size ? '| Size: ' + item.size : ''} ${item.color ? '| Color: ' + item.color : ''}</p>
                    </div>
                    <span class="item-qty">x${item.quantity}</span>
                    <span class="item-price">${formatPrice(item.price * item.quantity)}</span>
                </div>
            `;
        });
        itemsContainer.innerHTML = itemsHTML;
    } else {
        itemsContainer.innerHTML = '<p class="text-muted">No items found.</p>';
    }

    // Hiển thị tổng tiền
    document.getElementById('subtotalDisplay').textContent = formatPrice(order.subtotal || 0);
    document.getElementById('shippingDisplay').textContent = (order.shipping === 0) ? 'Free' : formatPrice(order.shipping);
    document.getElementById('grandTotalDisplay').textContent = formatPrice(order.grandTotal || 0);
});