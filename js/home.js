import products from './products-data.js';
import brands from './brands-data.js';
import { createProductCard, createBrandCard } from './utils/render.js';

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    let current = 0;
    const show = (index) => {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    };

    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    setInterval(() => show((current + 1) % slides.length), 6000);
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featured = products.filter(p => p.featured || p.badge === 'Best Seller').slice(0, 8);
    const fallback = products.filter(p => p.badge === 'New').slice(0, 8);
    const list = featured.length >= 4 ? featured : fallback;

    container.innerHTML = list.map(p => createProductCard(p)).join('');
}

function renderNewArrivals() {
    const container = document.getElementById('newArrivals');
    if (!container) return;

    const items = products.filter(p => p.badge === 'New').slice(0, 4);
    container.innerHTML = items.map(p => createProductCard(p, { compact: true })).join('');
}

function renderBrandStrip() {
    const container = document.getElementById('homeBrandStrip');
    if (!container) return;

    container.innerHTML = brands.map(b => `
        <a href="brand-detail.html?brand=${encodeURIComponent(b.name)}" class="brand-strip-item">
            <img src="${b.logo}" alt="${b.name}" loading="lazy">
        </a>
    `).join('');
}

function renderLuxuryBrands() {
    const container = document.getElementById('luxuryBrands');
    if (!container) return;

    const luxury = brands.filter(b => b.type === 'luxury' || b.type === 'sport');
    container.innerHTML = luxury.map(b => createBrandCard(b)).join('');
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    renderFeaturedProducts();
    renderNewArrivals();
    renderBrandStrip();
    renderLuxuryBrands();
    initScrollReveal();
});
