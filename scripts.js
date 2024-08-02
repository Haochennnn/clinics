var swiper = new Swiper('.Slider' , {
    autoplay:true,
    speed:2500,
    loop:true,
    parallax:true,

    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

        document.addEventListener('DOMContentLoaded', () => {
            const toggleButton = document.querySelector('.navbar-toggle');
            const menu = document.querySelector('.navbar-menu');
        
            toggleButton.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        });
        
