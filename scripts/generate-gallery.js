const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, '../images/gallery');
const OUTPUT_FILE = path.join(__dirname, '../gallery-manifest.json');
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function generateManifest() {
    console.log('Scanning gallery directory:', GALLERY_DIR);

    if (!fs.existsSync(GALLERY_DIR)) {
        console.error('Gallery directory does not exist!');
        return;
    }

    const manifest = {};
    const categories = fs.readdirSync(GALLERY_DIR).filter(file => {
        return fs.statSync(path.join(GALLERY_DIR, file)).isDirectory();
    });

    categories.forEach(category => {
        const categoryPath = path.join(GALLERY_DIR, category);
        const files = fs.readdirSync(categoryPath).filter(file => {
            return SUPPORTED_EXTENSIONS.includes(path.extname(file).toLowerCase());
        });

        if (files.length > 0) {
            manifest[category] = files;
        } else {
            console.warn(`No valid images found in category: ${category}`);
            // Still include empty categories if we want the filter to show up, 
            // but the requirement says "Gracefully handle empty folders"
            manifest[category] = [];
        }
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
    console.log(`Manifest generated successfully at: ${OUTPUT_FILE}`);
    console.log('Categories found:', Object.keys(manifest).join(', '));
}

generateManifest();
