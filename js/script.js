const swiper = new Swiper('.features-slide', {
    // Optional parameters
    loop: true,
    // slidesPerView: 'auto',
    spaceBetween: 24,
    // If we need pagination
    pagination: {
        clickable: true,
        el: '.features-pagination',
    },
    navigation: {
        nextEl: '.features-button-next',
        prevEl: '.features-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    on: {
        init: function () {},
        beforeSlideChangeStart: function (swiper) {
            $('.swiper-slide-active').addClass('active');
            $('.swiper-slide-next').addClass('active');
        },
        beforeTransitionStart: function (swiper) {
            $('.swiper-slide-active').removeClass('active');
            $('.swiper-slide-next').removeClass('active');
        },
        slideChangeTransitionEnd: function (swiper) {
            $('.swiper-slide-active').addClass('active');
            $('.swiper-slide-next').addClass('active');
        },
    },
});

const swiper2 = new Swiper('.slide-team-inner', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
        clickable: true,
        el: '.team-pagination',
    },
    navigation: {
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1368: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        0: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 10,
        },
    },
});

const swiper3 = new Swiper('.game-play-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 23,
    breakpoints: {
        1400: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1368: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        0: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
        },
    },
});

const swiperNft = new Swiper('.nft-item-swiper .swiper', {
    slidesPerView: 1,
    effect: 'cube',
    allowTouchMove: false,
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

$('.player-btn').click(() => {
    console.log('btn');
    let video = $('.gameplay-player video')[0];
    if (video.paused) {
        video.play();
        $('.player-btn').hide();
    } else {
        video.pause();
        $('.player-btn').show();
    }
});

$('.nft-item').click((e) => {
    $(e.currentTarget).siblings().removeClass('active');
    $(e.currentTarget).addClass('active');
    swiperNft.slideTo($(e.currentTarget).data('slide'));
});
