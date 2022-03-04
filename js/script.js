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
    breakpoints: {
        1024: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
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
    breakpoints: {
        1368: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

AOS.init({
    duration: 1000,
});

$('.btn-toggle-menu').click(() => {
    $('.main-menu-wrap').toggleClass('active');
});

$('.btn-close-menu').click(() => {
    $('.main-menu-wrap').removeClass('active');
});
