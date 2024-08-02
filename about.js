AOS.init({
    duration: 800, // Durasi animasi dalam ms
    easing: 'ease-out', // Jenis easing animasi
    once: true // Animasi hanya dimainkan sekali
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
