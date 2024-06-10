// JavaScript
let cards = Array.from(document.querySelectorAll('.namecard'));
let currentCard = 0;

// Set initial z-index for the cards
cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
});

cards[currentCard].classList.add('active');

document.getElementById('next').addEventListener('click', () => {
    cards[currentCard].classList.remove('active');
    cards[currentCard].style.zIndex = 1;
    currentCard = (currentCard + 1) % cards.length;
    cards[currentCard].classList.add('active');
    cards[currentCard].style.zIndex = cards.length;
});

// JavaScript
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.sect011, .sect012, .team');
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        if (window.scrollY > sectionTop - window.innerHeight + sectionHeight / 3) {
            section.style.transitionDelay = `${index * 0.2}s`; // Add delay based on index
            section.classList.add('visible');
        } else {
            section.style.transitionDelay = '0s';
            section.classList.remove('visible');
        }
    });
});

//search
