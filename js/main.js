// ================= LOAD HEADER AND FOOTER =================

function loadHeader() {
    const header = document.getElementById("header");

    if (header) {
        header.innerHTML = createHeader();
    }
}

function loadFooter() {
    const footer = document.getElementById("footer");

    if (footer) {
        footer.innerHTML = createFooter();
    }
}


// ================= CART COUNT =================

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const cart = getCart();

    const totalQuantity = cart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = totalQuantity;
}


// ================= HEADER SEARCH =================

function setupHeaderSearch() {
    const searchInput = document.getElementById("headerSearchInput");
    const searchBtn = document.getElementById("headerSearchBtn");

    if (!searchInput || !searchBtn) return;

    function searchProduct() {
        const keyword = searchInput.value.trim();

        if (keyword === "") {
            return;
        }

        window.location.href = `products.html?search=${encodeURIComponent(keyword)}`;
    }

    searchBtn.addEventListener("click", searchProduct);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });
}


// ================= ACTIVE MENU =================

function setActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href").split("?")[0];

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}


// ================= INIT =================

document.addEventListener("DOMContentLoaded", function () {
    loadHeader();
    loadFooter();
    updateCartCount();
    setupHeaderSearch();
    setActiveMenu();
});