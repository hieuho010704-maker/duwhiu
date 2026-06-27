import products from './products-data.js';
import brands from './brands-data.js';
import { getUrlParam } from './utils/dom.js';
import { createProductCard } from './utils/render.js';

document.addEventListener('DOMContentLoaded', () => {
    const brandName = getUrlParam('brand');
    const detailEl = document.getElementById('brandDetail');
    const productsEl = document.getElementById('brandProducts');

    if (!brandName || !detailEl) return;

    const brand = brands.find(b => b.name === brandName);
    if (!brand) {
        detailEl.innerHTML = '<p class="text-muted">Brand not found.</p>';
        return;
    }

    document.title = `${brand.name} - Men's Wear`;

    detailEl.innerHTML = `
        <div class="brand-detail-hero">
            <img src="${brand.banner}" alt="${brand.name}" class="brand-detail-banner">
            <div class="brand-detail-info">
                <img src="${brand.logo}" alt="${brand.name}" class="brand-detail-logo">
                <h1>${brand.name}</h1>
                <p>${brand.description}</p>
            </div>
        </div>
    `;

    const brandProducts = products.filter(p => p.brand === brand.name);
    if (productsEl) {
        if (brandProducts.length === 0) {
            productsEl.innerHTML = '<p class="no-products">No products for this brand yet.</p>';
        } else {
            productsEl.innerHTML = `<div class="row">${brandProducts.map(p => createProductCard(p)).join('')}</div>`;
        }
    }
});
