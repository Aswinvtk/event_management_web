/**
 * Celeganz Events - Gallery Logic
 * This script handles categorization and filtering of images/videos.
 */

const galleryItems = [
    // Wedding
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/1.webp', title: 'Wedding Event 1' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/2.webp', title: 'Wedding Event 2' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/3.webp', title: 'Wedding Event 3' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/4.webp', title: 'Wedding Event 4' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/6.webp', title: 'Wedding Event 5' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/7.jpg', title: 'Wedding Event 6' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/8.jpg', title: 'Wedding Event 7' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/9.webp', title: 'Wedding Event 8' },
    { type: 'image', category: 'wedding', path: 'images/gallery/wedding/10.webp', title: 'Wedding Event 9' },

    // Birthday
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/1.webp', title: 'Birthday Event 1' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/2.webp', title: 'Birthday Event 2' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/3.webp', title: 'Birthday Event 3' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/4.webp', title: 'Birthday Event 4' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/6.webp', title: 'Birthday Event 5' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/7.jpg', title: 'Birthday Event 6' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/8.jpg', title: 'Birthday Event 7' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/9.webp', title: 'Birthday Event 8' },
    { type: 'image', category: 'birthday', path: 'images/gallery/birthday/10.webp', title: 'Birthday Event 9' },

    // Hindu Weddings
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/1.webp', title: 'Hindu Wedding 1' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/2.webp', title: 'Hindu Wedding 2' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/3.webp', title: 'Hindu Wedding 3' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/4.webp', title: 'Hindu Wedding 4' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/6.webp', title: 'Hindu Wedding 5' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/7.jpg', title: 'Hindu Wedding 6' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/8.jpg', title: 'Hindu Wedding 7' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/9.webp', title: 'Hindu Wedding 8' },
    { type: 'image', category: 'hinduWeddings', path: 'images/gallery/hinduWeddings/10.webp', title: 'Hindu Wedding 9' },

    // Muslim Weddings (Nikkah)
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/1.webp', title: 'Nikkah Event 1' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/2.webp', title: 'Nikkah Event 2' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/3.webp', title: 'Nikkah Event 3' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/4.webp', title: 'Nikkah Event 4' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/6.webp', title: 'Nikkah Event 5' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/7.jpg', title: 'Nikkah Event 6' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/8.jpg', title: 'Nikkah Event 7' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/9.webp', title: 'Nikkah Event 8' },
    { type: 'image', category: 'nikkah', path: 'images/gallery/nikkah/10.webp', title: 'Nikkah Event 9' },

    // Stages / Mandapam
    { type: 'image', category: 'stages', path: 'images/gallery/stages/1.webp', title: 'Stage Design 1' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/2.webp', title: 'Stage Design 2' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/3.webp', title: 'Stage Design 3' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/4.webp', title: 'Stage Design 4' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/6.webp', title: 'Stage Design 5' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/7.jpg', title: 'Stage Design 6' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/8.jpg', title: 'Stage Design 7' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/9.webp', title: 'Stage Design 8' },
    { type: 'image', category: 'stages', path: 'images/gallery/stages/10.webp', title: 'Stage Design 9' },

    // Traditional
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/1.webp', title: 'Traditional Event 1' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/2.webp', title: 'Traditional Event 2' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/3.webp', title: 'Traditional Event 3' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/4.webp', title: 'Traditional Event 4' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/6.webp', title: 'Traditional Event 5' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/7.jpg', title: 'Traditional Event 6' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/8.jpg', title: 'Traditional Event 7' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/9.webp', title: 'Traditional Event 8' },
    { type: 'image', category: 'treditional', path: 'images/gallery/treditional/10.webp', title: 'Traditional Event 9' },
];

function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Filter items
    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    // Clear grid
    galleryGrid.innerHTML = '';

    if (filteredItems.length === 0) {
        galleryGrid.innerHTML = `
            <div class="empty-gallery">
                <h3>No items found</h3>
                <p>Try selecting another category.</p>
            </div>
        `;
        return;
    }

    // Render items
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'gallery-item';
        itemElement.setAttribute('data-category', item.category);

        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.path;
            img.alt = item.title || 'Event Image';
            img.loading = 'lazy';
            itemElement.appendChild(img);
        } else if (item.type === 'video') {
            const video = document.createElement('video');
            video.src = item.path;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            itemElement.appendChild(video);

            itemElement.addEventListener('mouseenter', () => video.play());
            itemElement.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }

        galleryGrid.appendChild(itemElement);
    });
}

function initGallery() {
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
    renderGallery();
}

document.addEventListener('DOMContentLoaded', initGallery);
