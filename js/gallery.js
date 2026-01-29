/**
 * iBex Events - Dynamic Gallery Logic
 * This script handles automatic discovery and filtering of images.
 */

let galleryManifest = {};

async function fetchGalleryManifest() {
    try {
        const response = await fetch('gallery-manifest.json');
        if (!response.ok) throw new Error('Failed to load gallery manifest');
        galleryManifest = await response.json();
        return galleryManifest;
    } catch (error) {
        console.error('Error loading gallery:', error);
        return null;
    }
}

function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Clear grid
    galleryGrid.innerHTML = '';

    let itemsToRender = [];

    if (filter === 'all') {
        // Flatten all categories into a single array
        Object.entries(galleryManifest).forEach(([category, files]) => {
            files.forEach(fileName => {
                itemsToRender.push({
                    category,
                    path: `images/gallery/${category}/${fileName}`,
                    title: `${category} - ${fileName}`
                });
            });
        });
        // Shuffle or sort if needed, here we just keep folder order
    } else if (galleryManifest[filter]) {
        galleryManifest[filter].forEach(fileName => {
            itemsToRender.push({
                category: filter,
                path: `images/gallery/${filter}/${fileName}`,
                title: `${filter} - ${fileName}`
            });
        });
    }

    if (itemsToRender.length === 0) {
        galleryGrid.innerHTML = `
            <div class="empty-gallery">
                <h3>No items found</h3>
                <p>Try selecting another category or check back later.</p>
            </div>
        `;
        return;
    }

    // Render items
    itemsToRender.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'gallery-item';
        itemElement.setAttribute('data-category', item.category);

        const img = document.createElement('img');
        img.src = item.path;
        img.alt = item.title;
        img.loading = 'lazy';

        // Handle broken paths specifically
        img.onerror = () => {
            console.warn(`Failed to load image: ${item.path}`);
            itemElement.style.display = 'none'; // Hide if failed
        };

        itemElement.appendChild(img);
        galleryGrid.appendChild(itemElement);
    });
}

async function initGallery() {
    const manifest = await fetchGalleryManifest();
    if (!manifest) {
        const galleryGrid = document.getElementById('galleryGrid');
        if (galleryGrid) {
            galleryGrid.innerHTML = `
                <div class="empty-gallery">
                    <h3>Gallery Offline</h3>
                    <p>Unable to load images at this time.</p>
                </div>
            `;
        }
        return;
    }

    // Optional: Dynamically generate filter buttons if they aren't in the HTML
    // For now, we'll use the existing buttons in gallery.html

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Render filtered gallery
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });

    // Initial render
    renderGallery('all');
}

document.addEventListener('DOMContentLoaded', initGallery);
