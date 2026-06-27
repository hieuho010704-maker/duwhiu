import { getCart } from './utils/storage.js';

export function loadHeader() {
    const header = document.getElementById('header');
    if (header && typeof createHeader === 'function') {
        header.innerHTML = createHeader();
    }
}

export function loadFooter() {
    const footer = document.getElementById('footer');
    if (footer && typeof createFooter === 'function') {
        footer.innerHTML = createFooter();
    }
}

export function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const cart = getCart();
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

export function setupHeaderSearch() {
    const searchInput = document.getElementById('headerSearchInput');
    const searchBtn = document.getElementById('headerSearchBtn');
    if (!searchInput || !searchBtn) return;

    function searchProduct() {
        const keyword = searchInput.value.trim();
        if (keyword) {
            window.location.href = `products.html?search=${encodeURIComponent(keyword)}`;
        }
    }

    searchBtn.addEventListener('click', searchProduct);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') searchProduct();
    });
}

export function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu > li > a').forEach((link) => {
        const linkPage = link.getAttribute('href').split('?')[0];
        if (linkPage === currentPage) link.classList.add('active');
    });
}

export function updateAccountLink() {
    const accountLink = document.querySelector('.header-actions a[href="login.html"]');
    if (!accountLink) return;
    try {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            accountLink.setAttribute('data-tooltip', user.fullName || 'Account');
            accountLink.innerHTML = '<i class="fa-solid fa-circle-user"></i>';
        }
    } catch { /* ignore */ }
}

export function initLayout() {
    loadHeader();
    loadFooter();
    updateCartCount();
    setupHeaderSearch();
    setActiveMenu();
    updateAccountLink();
}
