const swiper = new Swiper('.features-slide', {
    // Optional parameters
    loop: true,
    slidesPerView: 7,
    spaceBetween: 24,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // If we need pagination
    pagination: {
        clickable: true,
        el: '.features-pagination',
    },
});

const swiper2 = new Swiper('.slide-team-inner', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,

    navigation: {
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
    },
});

AOS.init({
    duration: 1000,
});
