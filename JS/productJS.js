// Filter System for Product Page
document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterSearch');
    const productView = document.getElementById('productView');
    const products = productView.getElementsByClassName('grid-item');

    filterForm.addEventListener('change', () => {
        const selectedFilters = {
            pinType: [],
            category: [],
            price: []
        };

        filterForm.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            selectedFilters[checkbox.name].push(checkbox.value);
        });

        Array.from(products).forEach(product => {
            const pinTypes = selectedFilters.pinType.length ? selectedFilters.pinType : null;
            const categories = selectedFilters.category.length ? selectedFilters.category : null;
            const prices = selectedFilters.price.length ? selectedFilters.price : null;

            const matchesPinType = !pinTypes || pinTypes.some(type => product.classList.contains(type));
            const matchesCategory = !categories || categories.some(cat => product.classList.contains(cat));
            const matchesPrice = !prices || prices.includes(product.dataset.price);

            if (matchesPinType && matchesCategory && matchesPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    filterForm.dispatchEvent(new Event('change'));
});