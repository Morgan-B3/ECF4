/**
 * Helper functions for handling product images with fallback support
 */

const PLACEHOLDER_IMAGES = {
    product: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%23999" text-anchor="middle" dy=".3em"%3EProduct Image Not Available%3C/text%3E%3C/svg%3E',
    brand: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23e8e8e8" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23999" text-anchor="middle" dy=".3em"%3EBrand Image%3C/text%3E%3C/svg%3E',
    category: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23e8e8e8" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23999" text-anchor="middle" dy=".3em"%3ECategory Image%3C/text%3E%3C/svg%3E'
};

/**
 * Get fallback image placeholder
 * @param {string} type - Type of image: 'product', 'brand', 'category'
 * @returns {string} Base64 SVG placeholder or default product placeholder
 */
export const getFallbackImage = (type = 'product') => {
    return PLACEHOLDER_IMAGES[type] || PLACEHOLDER_IMAGES.product;
};

/**
 * Handle image error by using fallback
 * @param {Event} event - Image error event
 * @param {string} type - Type of image for fallback selection
 */
export const handleImageError = (event, type = 'product') => {
    event.target.src = getFallbackImage(type);
    // Prevent infinite loop if fallback also fails
    event.target.onerror = null;
};

/**
 * Wrap image URL with error handling
 * Usage: <img src={imageURL} onError={(e) => handleImageError(e, 'product')} />
 */
export default {
    getFallbackImage,
    handleImageError
};
