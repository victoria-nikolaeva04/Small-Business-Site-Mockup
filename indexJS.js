// Toggle Navigation for Header
function toggleNav() {
    var navContainer = document.getElementById('navContainer');
    if (navContainer.style.display === 'block') {
        navContainer.style.display = 'none';
    } else {
        navContainer.style.display = 'block';
    }
}

// Slideshow for Best Seller
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const slideshowWrapper = document.querySelector('.slideshow-wrapper');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.product-card').length;
const itemWidth = document.querySelector('.product-card').clientWidth + 20; // Add margin

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlideshowPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateSlideshowPosition();
    }
});

function updateSlideshowPosition() {
    const newTransformValue = -currentIndex * itemWidth;
    slideshowWrapper.style.transform = `translateX(${newTransformValue}px)`;
}
