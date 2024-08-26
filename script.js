const searchIcon = document.getElementById('search-icon');
const overlay = document.getElementById('overlay');
const keyboardInput = document.getElementById('keyboard-input');

let overlayVisible = false;

searchIcon.addEventListener('click', () => {
    overlayVisible = !overlayVisible;
    overlay.style.display = overlayVisible ? 'flex' : 'none';
    document.body.style.overflow = overlayVisible ? 'hidden' : 'auto';

    if (overlayVisible) {
        keyboardInput.innerHTML = '';
        document.addEventListener('keydown', showKey);
    } else {
        document.removeEventListener('keydown', showKey);
    }
});

function showKey(event) {
    if (event.key === 'Backspace') {
        keyboardInput.innerHTML = '';
    } else if (event.key === ' ') {
        keyboardInput.innerHTML += '&nbsp;';
    } else if (event.key.length === 1) {
        keyboardInput.innerHTML += `<span>${event.key}</span>`;
    }
}

const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const productGrid = document.querySelector('.product-grid');
let offset = 0;

prevButton.addEventListener('click', () => {
    if (offset > 0) {
        offset--;
    } else {
        offset = productGrid.children.length - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (offset < productGrid.children.length - 1) {
        offset++;
    } else {
        offset = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const cardWidth = productGrid.children[0].getBoundingClientRect().width;
    productGrid.style.transform = `translateX(-${offset * (cardWidth + 20)}px)`;
}
