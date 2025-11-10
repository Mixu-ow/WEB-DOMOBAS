// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
}, {
    threshold: 0.1
});

// Observar todas las tarjetas para animarlas cuando aparezcan en pantalla
document.querySelectorAll('.service-card, .about-card, .why-card').forEach(card => {
    observer.observe(card);
});

// Efecto de parallax suave en el header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.5;
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animación de números (contador) - función auxiliar para futuras implementaciones
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Smooth scroll para navegación (si se agregan enlaces internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mostrar mensaje de bienvenida en consola
console.log('%c¡Bienvenido a DOMOBAS! 🏠', 'color: #87e7d7ff; font-size: 20px; font-weight: bold;');
console.log('%cTu hogar inteligente está a un paso de distancia', 'color: #764ba2; font-size: 14px;');