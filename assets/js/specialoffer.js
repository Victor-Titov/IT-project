document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let index = 0;

    function updateCarousel() {
        const itemWidth = carouselItems[0].offsetWidth;
        const newTransformValue = -index * itemWidth;
        carousel.style.transform = `translateX(${newTransformValue}px)`;
    }

    function moveToNextItem() {
        index++;
        if (index >= carouselItems.length) {
            index = 0; // Go back to the first item
        }
        updateCarousel();
    }

    setInterval(moveToNextItem, 3000); // Move to the next item every 3 seconds
});