import products from "./products-data.js";

// ================= PAGINATION CONFIG =================
const ITEMS_PER_PAGE = 8;    // Số sản phẩm mỗi trang
let currentPage = 1;         // Trang hiện tại
let totalPages = 1;          // Tổng số trang
let filteredProductsCache = []; // Lưu kết quả lọc để phân trang
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

    // Helper: filter by multi-value (comma separated)
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

    // Apply filters
    if (category) filterByMulti(category, 'category');
    if (brand) filterByMulti(brand, 'brand');
    if (sub) filterByMulti(sub, 'subCategory');

    // Filter by Special badges (New, Sale, Best Seller)
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
function createProductCard(product) {
    const saleBadge = product.badge === "Sale" ? `<span class="product-badge sale">Sale</span>` : "";
    const newBadge = product.badge === "New" ? `<span class="product-badge new">New</span>` : "";
    const bestBadge = product.badge === "Best Seller" ? `<span class="product-badge best">Best Seller</span>` : "";
    const oldPriceHTML = product.oldPrice > 0 ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : "";

    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4 product-item">
            <div class="product-card">
                <div class="product-image">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/images/default-product.webp'">
                    </a>
                    <div class="product-badges">${saleBadge}${newBadge}${bestBadge}</div>
                </div>
                <div class="product-info">
                    <p class="product-brand">${product.brand}</p>
                    <h3 class="product-name"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <div class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${oldPriceHTML}
                    </div>
                    <a href="product-detail.html?id=${product.id}" class="product-btn">View Detail</a>
                </div>
            </div>
        </div>
    `;
}

// ================= RENDER =================
function renderProducts() {
    const container = document.getElementById("productsList");
    const countSpan = document.getElementById("countNumber");
    const paginationContainer = document.getElementById("paginationControls");
    if (!container) return;

    // 1. Lấy danh sách đã lọc (dữ liệu gốc)
    const filtered = getFilteredProducts();
    filteredProductsCache = filtered; // Lưu lại để dùng cho phân trang

    // 2. Tính tổng số trang
    totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (totalPages === 0) totalPages = 1;

    // 3. Đảm bảo currentPage hợp lệ (nếu bị vượt quá)
    if (currentPage > totalPages) currentPage = totalPages;

    // 4. Lấy sản phẩm của trang hiện tại
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = Math.min(start + ITEMS_PER_PAGE, filtered.length);
    const pageProducts = filtered.slice(start, end);

    // 5. Cập nhật số lượng sản phẩm
    if (countSpan) {
        countSpan.textContent = filtered.length;
        // Hiển thị thêm thông tin trang (tùy chọn)
        const infoEl = document.getElementById("productCount");
        if (infoEl) {
            infoEl.innerHTML = `Showing <strong>${start + 1}–${end}</strong> of <strong>${filtered.length}</strong> products`;
        }
    }

    // 6. Render sản phẩm của trang hiện tại
    if (pageProducts.length === 0) {
        container.innerHTML = `<div class="col-12"><p class="no-products">No products found.</p></div>`;
    } else {
        container.innerHTML = pageProducts.map(p => createProductCard(p)).join("");
    }

    // 7. Render các nút phân trang
    renderPagination(totalPages, currentPage, paginationContainer);
}



// tạo nút trang
function renderPagination(total, current, container) {
    if (!container) return;

    // Nếu chỉ có 1 trang hoặc không có sản phẩm thì ẩn phân trang
    if (total <= 1 || filteredProductsCache.length === 0) {
        container.innerHTML = '';
        return;
    }

    let html = `<ul class="pagination">`;

    // Nút Previous
    const prevDisabled = current === 1 ? 'disabled' : '';
    html += `<li class="page-item ${prevDisabled}">
                <a class="page-link" href="#" data-page="${current - 1}" tabindex="-1">Previous</a>
             </li>`;

    // Các số trang
    for (let i = 1; i <= total; i++) {
        const active = i === current ? 'active' : '';
        html += `<li class="page-item ${active}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                 </li>`;
    }

    // Nút Next
    const nextDisabled = current === total ? 'disabled' : '';
    html += `<li class="page-item ${nextDisabled}">
                <a class="page-link" href="#" data-page="${current + 1}">Next</a>
             </li>`;

    html += `</ul>`;
    container.innerHTML = html;

    // Gắn sự kiện click cho từng nút
    container.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.dataset.page);
            if (isNaN(page) || page < 1 || page > total) return;
            if (page === current) return; // Không làm gì nếu cùng trang

            currentPage = page;
            renderProducts(); // Gọi lại render để hiển thị trang mới

            // Cuộn lên đầu danh sách sản phẩm
            const section = document.querySelector('.products-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}









// ================= MULTI-FILTER LOGIC (CHECKBOX + RADIO) =================

// Price: only one selected at a time
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
     currentPage = 1; // 👈 Reset về trang 1
    renderProducts();
    // Checkboxes (multiple)
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

    // Price (only one)
    const priceChecked = document.querySelector('.price-checkbox:checked');
    if (priceChecked) {
        params.set(priceChecked.dataset.filter, priceChecked.value);
    }

    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.pushState({}, '', newUrl);
    renderProducts();
}

// Listen to changes on common checkboxes
document.addEventListener('change', function (e) {
    if (e.target.matches('.filter-checkbox')) {
        applyFilters();
    }
});

// Clear all
document.getElementById('clearFiltersBtn')?.addEventListener('click', function () {
    document.querySelectorAll('.filter-checkbox, .price-checkbox').forEach(el => el.checked = false);
    window.history.pushState({}, '', window.location.pathname);
    renderProducts();
});

// ================= APPLY FILTER WITH CATEGORY (NO RELOAD) =================
function applyFilterWithCategory(category) {
    // 1. Cập nhật URL param
    const params = new URLSearchParams(window.location.search);
     currentPage = 1; // 👈 Reset về trang 1
    renderProducts();
    params.set('category', category);
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.pushState({}, '', newUrl);

    // 2. Cập nhật UI: tích checkbox category tương ứng, bỏ chọn các category khác
    document.querySelectorAll('.filter-checkbox[data-filter="category"]').forEach(cb => {
        cb.checked = (cb.value === category);
    });

    // 3. Gọi render để cập nhật sản phẩm
    renderProducts();

    // 4. Tự động scroll đến danh sách sản phẩm
    const productSection = document.querySelector('.products-section');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ================= HANDLE SLIDER & CATEGORY NAV BUTTONS =================
document.addEventListener('DOMContentLoaded', function () {
    // ---- Xử lý các nút "Shop ..." trong slider ----
    document.querySelectorAll('.slider-link-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.dataset.category;
            if (category) {
                applyFilterWithCategory(category);
            }
        });
    });

    // ---- Xử lý các icon điều hướng (Tops, Bottoms, Shoes, Accessory) ----
    document.querySelectorAll('.category-nav-card').forEach(function (card) {
        card.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    // Nếu có section, scroll đến đó
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Nếu không có section, dùng data-category để filter (nếu có)
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
    const params = new URLSearchParams(window.location.search);s
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
    // Trigger initial render
    renderProducts();
});

// Silde chạy
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('productCategorySlider');
    if (slider) {
        // Nếu đã có data-bs-ride, không cần khởi tạo lại, nhưng vẫn có thể
        // kiểm tra và khởi tạo nếu chưa
        if (!bootstrap.Carousel.getInstance(slider)) {
            new bootstrap.Carousel(slider, {
                interval: 3500,
                ride: 'carousel',
                pause: false,
                wrap: true
            });
        }
    }
});


// Cau chuyen
// ================= BRAND STORY READ MORE =================
// ================= BRAND STORY READ MORE =================
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('brandReadMoreBtn');
    const storyFull = document.getElementById('brandStoryFull');
    const btnText = document.getElementById('brandBtnText');
    const btnIcon = document.getElementById('brandBtnIcon');

    if (readMoreBtn && storyFull) {
        readMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const isOpen = storyFull.classList.contains('visible');
            if (isOpen) {
                storyFull.classList.remove('visible');
                btnText.textContent = 'Read More';
                this.classList.remove('open');
                if (btnIcon) btnIcon.style.transform = 'rotate(0deg)';
            } else {
                storyFull.classList.add('visible');
                btnText.textContent = 'Read Less';
                this.classList.add('open');
                if (btnIcon) btnIcon.style.transform = 'rotate(180deg)';
            }
        });
    }
});