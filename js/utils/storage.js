export function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
        return [];
    }
}

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

export function clearCart() {
    localStorage.removeItem('cart');
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

export function getOrders() {
    try {
        return JSON.parse(localStorage.getItem('orders')) || [];
    } catch {
        return [];
    }
}

export function saveOrder(order) {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrderById(orderId) {
    return getOrders().find(o => o.id === parseInt(orderId, 10));
}

export function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    } catch {
        return [];
    }
}

export function toggleWishlist(productId) {
    let wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    if (index > -1) wishlist.splice(index, 1);
    else wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    return wishlist;
}

export function isInWishlist(productId) {
    return getWishlist().includes(productId);
}

export function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('users')) || [];
    } catch {
        return [];
    }
}

export function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

export function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('currentUser'));
    } catch {
        return null;
    }
}

export function setCurrentUser(user) {
    if (user) localStorage.setItem('currentUser', JSON.stringify(user));
    else localStorage.removeItem('currentUser');
}

export function getAppliedCoupon() {
    return sessionStorage.getItem('appliedCoupon') || '';
}

export function setAppliedCoupon(code) {
    if (code) sessionStorage.setItem('appliedCoupon', code);
    else sessionStorage.removeItem('appliedCoupon');
}
