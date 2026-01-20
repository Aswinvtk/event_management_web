/**
 * Celeganz Events - Asset Manager
 * Central registry for all images and videos to ensure consistent linking.
 */

const ASSET_REGISTRY = {
    // Section Backgrounds
    'why-choose-section': 'images/why_choose.webp',
    'about-team-bg': 'images/index_image.webp',
    'hero-main-bg': 'images/hero_main.webp',
};

/**
 * Applies assets from the registry to elements with matching IDs.
 * If the element is an <img>, sets its src.
 * Otherwise, sets its style.backgroundImage.
 */
function applyAssets() {
    Object.entries(ASSET_REGISTRY).forEach(([id, path]) => {
        const element = document.getElementById(id);
        if (!element) return;

        if (element.tagName.toLowerCase() === 'img') {
            element.src = path;
        } else {
            element.style.backgroundImage = `url('${path}')`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.backgroundRepeat = 'no-repeat';
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', applyAssets);

// Export for other scripts if needed
window.AssetManager = {
    registry: ASSET_REGISTRY,
    apply: applyAssets,
    getPath: (key) => ASSET_REGISTRY[key]
};
