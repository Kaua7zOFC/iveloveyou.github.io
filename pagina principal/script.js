document.addEventListener("DOMContentLoaded", function() {
      // Animation for content appearance
      const content = document.querySelector('.content');
      content.classList.add('fade-in');
  
      // Button click effect
      const buttons = document.querySelectorAll('nav ul li a');
      buttons.forEach(button => {
          button.addEventListener('click', function(e) {
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
    for (let i = 0; i < 10; i++) { // Ajuste o número de bolhas aqui
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * 50 + 20; // Tamanho aleatório
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
        bubble.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Duração aleatória
        body.appendChild(bubble);
    }
});


  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('previous');
        
        currentSlide = index;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');

    document.getElementById('slideshow-container').addEventListener('touchstart', handleTouchStart, false);
    document.getElementById('slideshow-container').addEventListener('touchmove', handleTouchMove, false);

    let xStart = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        xStart = firstTouch.clientX;
    }

    function handleTouchMove(event) {
        if (!xStart) {
            return;
        }

        let xEnd = event.touches[0].clientX;
        let xDiff = xStart - xEnd;

        if (Math.abs(xDiff) > 50) { // Sensibilidade
            if (xDiff > 0) {
                showSlide(currentSlide + 1); // Próximo slide
            } else {
                showSlide(currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1); // Slide anterior
            }
            xStart = null;
        }
    }
});
