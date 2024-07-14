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
    let itemsToShow = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4;
    const itemWidth = slideshowContent.querySelector('.grid-item').offsetWidth;

    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideshowContent.children.length - itemsToShow;
        }
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > slideshowContent.children.length - itemsToShow) {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slideshowContent.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    window.addEventListener('resize', () => {
        itemsToShow = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4;
        updateSlidePosition();
    });
});
