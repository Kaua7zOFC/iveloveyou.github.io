document.addEventListener("DOMContentLoaded", function () {
    // Animação de entrada de conteúdo
    const content = document.querySelector('.content');
    content.classList.add('fade-in');

    // Efeito de clique nos botões do menu
    const buttons = document.querySelectorAll('nav ul li a');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
                window.location.href = button.href;
            }, 300);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Criar bolhas flutuantes
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * 50 + 20;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (Math.random() * 5 + 5) + "s";
        body.appendChild(bubble);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');

    // Suporte para deslizar em dispositivos móveis
    document.getElementById('slideshow-container').addEventListener('touchstart', handleTouchStart, false);
    document.getElementById('slideshow-container').addEventListener('touchmove', handleTouchMove, false);

    let xStart = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        xStart = firstTouch.clientX;
    }

    function handleTouchMove(event) {
        if (!xStart) return;

        let xEnd = event.touches[0].clientX;
        let xDiff = xStart - xEnd;

        if (Math.abs(xDiff) > 50) {
            if (xDiff > 0) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(currentSlide - 1);
            }
            xStart = null;
        }
    }
});
