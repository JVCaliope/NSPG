let currentSlide = 0; // Começa no primeiro slide
const slides = document.querySelectorAll('.slides_CE-images img'); // Seleciona todas as imagens

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove a classe 'active' de todas as imagens
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe 'active' à imagem atual
        }
    });
}

function nextImage() {
    currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide
    showSlide(currentSlide); // Mostra o slide atual
}

function prevImage() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Volta para o slide anterior
    showSlide(currentSlide); // Mostra o slide atual
}

// Exibe o primeiro slide inicialmente
showSlide(currentSlide);






let currentEventSlide = 0;
const eventSlides = document.querySelectorAll('.slides_eventos-images img');

function showEventSlide(index) {
    eventSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextEventImage() {
    currentEventSlide = (currentEventSlide + 1) % eventSlides.length;
    showEventSlide(currentEventSlide);
}

function prevEventImage() {
    currentEventSlide = (currentEventSlide - 1 + eventSlides.length) % eventSlides.length;
    showEventSlide(currentEventSlide);
}

// Exibe o primeiro slide de eventos inicialmente
showEventSlide(currentEventSlide);
