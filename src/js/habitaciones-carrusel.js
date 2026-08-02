function iniciarCarrusel() {
    const slides = document.querySelectorAll('.hero-carrusel__slide');
    const dots = document.querySelectorAll('.hero-carrusel__dot');

    if (slides.length === 0) return;

    let indiceActual = 0;

    setInterval(() => {
        slides[indiceActual].classList.remove('is-active');
        dots[indiceActual]?.classList.remove('is-active');

        indiceActual = (indiceActual + 1) % slides.length;

        slides[indiceActual].classList.add('is-active');
        dots[indiceActual]?.classList.add('is-active');
    }, 4000);
}

document.addEventListener('DOMContentLoaded', iniciarCarrusel);