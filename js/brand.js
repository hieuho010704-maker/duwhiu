import brands from './brands-data.js';
import { createBrandCard, createFeaturedBrandCard } from './utils/render.js';

document.addEventListener('DOMContentLoaded', () => {
    const featuredContainer = document.getElementById('featuredBrands');
    const listContainer = document.getElementById('brandList');
    
    if (!featuredContainer || !listContainer) return;

    // Highlight Gucci and Calvin Klein at the top as featured
    const featuredNames = ["Gucci", "Calvin Klein"];
    const featuredBrands = brands.filter(b => featuredNames.includes(b.name));

    // Render Featured Brands (alternating layouts)
    featuredContainer.innerHTML = featuredBrands.map((b, index) => 
        createFeaturedBrandCard(b, index % 2 !== 0) // Reverse layout every second row
    ).join('');

    // Render ALL brands in standard grid initially (so Luxury is not empty)
    listContainer.innerHTML = brands.map(b => createBrandCard(b)).join('');

    // Category filtering logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and add to clicked
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            
            // Get all current card wrappers
            const currentCards = listContainer.querySelectorAll('.brand-card-wrapper');
            
            // Step 1: Fade out existing cards
            currentCards.forEach(card => {
                card.classList.remove('fade-in');
                card.classList.add('fade-out');
            });

            // Step 2: After fade-out animation completes, update content and fade in from FULL brands list
            setTimeout(() => {
                const filteredBrands = filterValue === 'all'
                    ? brands
                    : brands.filter(b => b.type === filterValue);

                if (filteredBrands.length === 0) {
                    listContainer.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <p class="text-muted" style="font-size: 16px; letter-spacing: 0.05em;">No houses found in this collection.</p>
                        </div>
                    `;
                } else {
                    listContainer.innerHTML = filteredBrands.map(b => createBrandCard(b)).join('');
                    
                    // Trigger fade-in animation on new cards
                    const newCards = listContainer.querySelectorAll('.brand-card-wrapper');
                    newCards.forEach(card => {
                        card.classList.add('fade-out');
                        // Force a browser reflow to register the opacity 0 state
                        card.offsetHeight; 
                        card.classList.remove('fade-out');
                        card.classList.add('fade-in');
                    });
                }
            }, 400);
        });
    });
});
