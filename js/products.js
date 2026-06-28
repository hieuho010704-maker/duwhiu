import products from "./products-data.js";
import { createProductCard } from "./utils/render.js";

// ================= PAGINATION CONFIG =================
const ITEMS_PER_PAGE = 8;
let currentPage = 1;
let totalPages = 1;
let filteredProductsCache = [];

// ================= UTILITY =================
function formatPrice(price) {
    return price.toLocaleString("vi-VN") + " VND";
}

function getUrlParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
}

// ================= FILTER PRODUCTS =================
function getFilteredProducts() {
    let filtered = [...products];

    const category = getUrlParam("category");
    const brand = getUrlParam("brand");
    const filter = getUrlParam("filter");
    const search = getUrlParam("search");
    const sub = getUrlParam("sub");
    const price = getUrlParam("price");
    const size = getUrlParam("size");
    const color = getUrlParam("color");

    function filterByMulti(param, field, isArray = false) {
        if (!param) return;
        const values = param.split(',').map(v => v.trim());
        filtered = filtered.filter(p => {
            const fieldValue = p[field];
            if (isArray && Array.isArray(fieldValue)) {
                return values.some(v => fieldValue.includes(v));
            } else {
                return values.includes(fieldValue);
            }
        });
    }

    if (category) filterByMulti(category, 'category');
    if (brand) filterByMulti(brand, 'brand');
    if (sub) filterByMulti(sub, 'subCategory');

    if (filter) {
        const filters = filter.split(',').map(f => f.trim());
        const badgeMap = {
            'new': 'New',
            'sale': 'Sale',
            'best-seller': 'Best Seller'
        };
        const allowedBadges = filters.map(f => badgeMap[f]).filter(Boolean);
        if (allowedBadges.length > 0) {
            filtered = filtered.filter(p => allowedBadges.includes(p.badge));
        }
    }

    if (search) {
        const kw = search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(kw) ||
            p.brand.toLowerCase().includes(kw) ||
            p.category.toLowerCase().includes(kw) ||
            (p.subCategory && p.subCategory.toLowerCase().includes(kw))
        );
    }

    if (price) {
        filtered = filtered.filter(p => {
            switch (price) {
                case "under1m": return p.price < 1000000;
                case "1to3m": return p.price >= 1000000 && p.price <= 3000000;
                case "3to5m": return p.price > 3000000 && p.price <= 5000000;
                case "over5m": return p.price > 5000000;
                default: return true;
            }
        });
    }

    if (size) filterByMulti(size, 'sizes', true);
    if (color) filterByMulti(color, 'colors', true);

    return filtered;
}

// ================= CREATE PRODUCT CARD =================
// Using shared createProductCard from utils/render.js

// ================= RENDER =================
function renderProducts() {
    const container = document.getElementById("productsList");
    const countSpan = document.getElementById("countNumber");
    const paginationContainer = document.getElementById("paginationControls");
    if (!container) return;

    const filtered = getFilteredProducts();
    filteredProductsCache = filtered;

    totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (totalPages === 0) totalPages = 1;

    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = Math.min(start + ITEMS_PER_PAGE, filtered.length);
    const pageProducts = filtered.slice(start, end);

    if (countSpan) {
        countSpan.textContent = filtered.length;
        const infoEl = document.getElementById("productCount");
        if (infoEl) {
            infoEl.innerHTML = `Showing <strong>${start + 1}–${end}</strong> of <strong>${filtered.length}</strong> products`;
        }
    }

    if (pageProducts.length === 0) {
        container.innerHTML = `<div class="col-12"><p class="no-products">No products found.</p></div>`;
    } else {
        container.innerHTML = pageProducts.map(p => createProductCard(p)).join("");
    }

    renderPagination(totalPages, currentPage, paginationContainer);
}

function renderPagination(total, current, container) {
    if (!container) return;

    if (total <= 1 || filteredProductsCache.length === 0) {
        container.innerHTML = '';
        return;
    }

    let html = `<ul class="pagination">`;

    const prevDisabled = current === 1 ? 'disabled' : '';
    html += `<li class="page-item ${prevDisabled}">
                <a class="page-link" href="#" data-page="${current - 1}" tabindex="-1">Previous</a>
             </li>`;

    for (let i = 1; i <= total; i++) {
        const active = i === current ? 'active' : '';
        html += `<li class="page-item ${active}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                 </li>`;
    }

    const nextDisabled = current === total ? 'disabled' : '';
    html += `<li class="page-item ${nextDisabled}">
                <a class="page-link" href="#" data-page="${current + 1}">Next</a>
             </li>`;

    html += `</ul>`;
    container.innerHTML = html;

    container.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.dataset.page);
            if (isNaN(page) || page < 1 || page > total) return;
            if (page === current) return;

            currentPage = page;
            renderProducts();

            const section = document.querySelector('.products-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ================= MULTI-FILTER LOGIC =================

document.querySelectorAll('.price-checkbox').forEach(function (cb) {
    cb.addEventListener('change', function () {
        if (this.checked) {
            document.querySelectorAll('.price-checkbox').forEach(function (other) {
                if (other !== cb) other.checked = false;
            });
        }
        applyFilters();
    });
});

function applyFilters() {
    const params = new URLSearchParams();

    const checkedBoxes = document.querySelectorAll('.filter-checkbox:checked');
    const filterMap = {};
    checkedBoxes.forEach(cb => {
        const key = cb.dataset.filter;
        const val = cb.value;
        if (!filterMap[key]) filterMap[key] = [];
        filterMap[key].push(val);
    });
    Object.keys(filterMap).forEach(key => {
        params.set(key, filterMap[key].join(','));
    });

    const priceChecked = document.querySelector('.price-checkbox:checked');
    if (priceChecked) {
        params.set(priceChecked.dataset.filter, priceChecked.value);
    }

    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.pushState({}, '', newUrl);

    currentPage = 1;
    renderProducts();
}

document.addEventListener('change', function (e) {
    if (e.target.matches('.filter-checkbox')) {
        applyFilters();
    }
});

document.getElementById('clearFiltersBtn')?.addEventListener('click', function () {
    document.querySelectorAll('.filter-checkbox, .price-checkbox').forEach(el => el.checked = false);
    window.history.pushState({}, '', window.location.pathname);
    currentPage = 1;
    renderProducts();
});

// ================= APPLY FILTER WITH CATEGORY =================
function applyFilterWithCategory(category) {
    const params = new URLSearchParams(window.location.search);
    params.set('category', category);
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.pushState({}, '', newUrl);

    document.querySelectorAll('.filter-checkbox[data-filter="category"]').forEach(cb => {
        cb.checked = (cb.value === category);
    });

    currentPage = 1;
    renderProducts();

    const productSection = document.querySelector('.products-section');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ================= HANDLE SLIDER & CATEGORY NAV =================
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slider-link-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.dataset.category;
            if (category) {
                applyFilterWithCategory(category);
            }
        });
    });

    document.querySelectorAll('.category-nav-card').forEach(function (card) {
        card.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    const category = this.dataset.category || targetId;
                    if (category) {
                        applyFilterWithCategory(category);
                    }
                }
            }
        });
    });
});

// ================= SYNC UI WITH URL ON LOAD =================
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    document.querySelectorAll('.filter-checkbox, .price-checkbox').forEach(el => {
        const key = el.dataset.filter;
        const val = el.value;
        const paramVal = params.get(key);
        if (paramVal) {
            if (el.type === 'checkbox' && paramVal.split(',').includes(val)) {
                el.checked = true;
            }
        }
    });
    renderProducts();
});

// ================= SLIDER AUTO PLAY =================
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('heroCarousel');
    if (slider) {
        if (!bootstrap.Carousel.getInstance(slider)) {
            new bootstrap.Carousel(slider, {
                interval: 6000,
                ride: 'carousel',
                pause: false,
                wrap: true
            });
        }
    }
});

// ================= BRAND STORY TOGGLE =================
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('storyToggle');
    const full = document.getElementById('storyFull');
    const text = document.getElementById('storyBtnText');
    const icon = document.getElementById('storyBtnIcon');

    if (btn && full) {
        btn.addEventListener('click', function () {
            const isOpen = full.style.display === 'block';
            full.style.display = isOpen ? 'none' : 'block';
            text.textContent = isOpen ? 'Read More' : 'Read Less';
            this.classList.toggle('open');
            if (icon) {
                icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    }
});