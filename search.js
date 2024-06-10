document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const products = document.querySelectorAll('.product');
    const categories = document.querySelectorAll('.product-category');
    const notFoundMessage = document.querySelector('.not-found-message');

    if (searchInput && products.length > 0) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            let productFound = false;

            products.forEach(function (product) {
                const productName = product.querySelector('h3').textContent.toLowerCase();

                if (productName.includes(searchTerm)) {
                    product.style.display = 'block';
                    productFound = true;
                } else {
                    product.style.display = 'none';
                }
            });

            categories.forEach(function (category) {
                if (searchTerm) {
                    category.style.display = 'none';
                } else {
                    category.style.display = 'block';
                }
            });

            if (!productFound && searchTerm) {
                notFoundMessage.style.display = 'block';
            } else {
                notFoundMessage.style.display = 'none';
            }
        });
    } else {
        console.error('Search input or products not found');
    }
});