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
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const slideshowContent = document.querySelector('.slideshow-content');
    let currentIndex = 0;
    const itemsToShow = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4;
    const itemWidth = slideshowContent.querySelector('.grid-item').offsetWidth;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slideshowContent.children.length - itemsToShow) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    function updateSlidePosition() {
        slideshowContent.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    window.addEventListener('resize', () => {
        const itemsToShow = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4;
        updateSlidePosition();
    });
});
