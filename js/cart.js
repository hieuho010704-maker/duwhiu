// ================= MINI CART =================

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.textContent = total;
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VND';
}

// ================= TOAST NOTIFICATION =================
function showToast(message, type = 'success') {
    // Kiểm tra container toast
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Icon theo loại
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };

    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '✅'}</span>
        <span class="toast-text">${message}</span>
        <button class="toast-close">&times;</button>
    `;

    container.appendChild(toast);

    // Hiệu ứng xuất hiện (dùng requestAnimationFrame để đảm bảo DOM đã sẵn sàng)
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Tự động ẩn sau 3 giây
    const timeout = setTimeout(() => {
        hideToast(toast);
    }, 3000);

    // Nút đóng
    toast.querySelector('.toast-close')?.addEventListener('click', function(e) {
        e.stopPropagation();
        clearTimeout(timeout);
        hideToast(toast);
    });

    // Click vào toast cũng đóng
    toast.addEventListener('click', function() {
        clearTimeout(timeout);
        hideToast(toast);
    });
}

function hideToast(toast) {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 300);
}

// ================= RENDER MINI CART =================
function renderMiniCart() {
    const cart = getCart();
    const body = document.getElementById('miniCartBody');
    const footer = document.getElementById('miniCartFooter');
    const totalEl = document.getElementById('miniCartTotal');

    if (!body) return;

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="mini-cart-empty">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty.</p>
                <a href="products.html" class="continue-shopping-btn">Continue Shopping</a>
            </div>
        `;
        if (footer) footer.style.display = 'none';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
            <div class="cart-item" data-index="${index}">
                <img src="${item.image || 'assets/images/default-product.webp'}" alt="${item.name}">
                <div class="cart-item-info">
                    <p class="item-name">${item.name}</p>
                    <p class="item-detail">${item.brand} ${item.size ? '| ' + item.size : ''} ${item.color ? '| ' + item.color : ''}</p>
                    <div class="cart-item-qty">
                        <button class="qty-decrease" data-index="${index}">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-increase" data-index="${index}">+</button>
                    </div>
                </div>
                <div class="cart-item-price">
                    <p class="item-price">${formatPrice(itemTotal)}</p>
                </div>
                <button class="cart-item-remove" data-index="${index}">&times;</button>
            </div>
        `;
    });

    body.innerHTML = html;

    if (totalEl) totalEl.textContent = formatPrice(total);
    if (footer) footer.style.display = 'block';

    // Sự kiện tăng/giảm số lượng
    document.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const cart = getCart();
            if (cart[index]) {
                cart[index].quantity += 1;
                saveCart(cart);
                renderMiniCart();
                updateCartCount();
                showToast('Updated cart!', 'info');
            }
        });
    });

    document.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const cart = getCart();
            if (cart[index]) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
                saveCart(cart);
                renderMiniCart();
                updateCartCount();
                showToast('Updated cart!', 'info');
            }
        });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const cart = getCart();
            cart.splice(index, 1);
            saveCart(cart);
            renderMiniCart();
            updateCartCount();
            document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            showToast('Item removed from cart.', 'info');
        });
    });
}

// ================= MỞ / ĐÓNG MINI CART =================
let hoverTimer;

function openMiniCart() {
    const miniCart = document.getElementById('miniCart');
    const overlay = document.getElementById('cartOverlay');
    if (miniCart) {
        miniCart.classList.add('open');
        if (overlay) overlay.classList.add('active');
        renderMiniCart();
        document.body.style.overflow = 'hidden';
    }
}

function closeMiniCart() {
    const miniCart = document.getElementById('miniCart');
    const overlay = document.getElementById('cartOverlay');
    if (miniCart) miniCart.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMiniCart() {
    const miniCart = document.getElementById('miniCart');
    if (miniCart.classList.contains('open')) {
        closeMiniCart();
    } else {
        openMiniCart();
    }
}

// ================= ĐỒNG BỘ GIỎ HÀNG NHIỀU TAB =================
window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateCartCount();
        const miniCart = document.getElementById('miniCart');
        if (miniCart && miniCart.classList.contains('open')) {
            renderMiniCart();
        }
    }
});

// ================= INIT =================
document.addEventListener('DOMContentLoaded', function() {
    const cartToggle = document.getElementById('cartToggle');
    const miniCart = document.getElementById('miniCart');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('cartClose');

    // ---- HOVER: Mở khi di chuột vào icon giỏ hàng ----
    if (cartToggle && miniCart) {
        cartToggle.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            clearTimeout(hoverTimer);
            openMiniCart();
        });

        miniCart.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimer);
        });

        const scheduleClose = function() {
            hoverTimer = setTimeout(function() {
                closeMiniCart();
            }, 300);
        };

        cartToggle.addEventListener('mouseleave', scheduleClose);
        miniCart.addEventListener('mouseleave', scheduleClose);
    }

    // ---- CLICK: Vẫn giữ click để toggle ----
    if (cartToggle) {
        cartToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMiniCart();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeMiniCart();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            closeMiniCart();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMiniCart();
        }
    });

    updateCartCount();
});

// Export các hàm để dùng trong product-detail.js
export { showToast, getCart, saveCart, updateCartCount };