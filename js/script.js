const swiper = new Swiper('.features-slide', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
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
        slideChange: function (swiper) {
            $('.features-slide .swiper-slide').each((index, item) => {
                if (window.innerWidth <= 1024) {
                    $(item).css('right', '0');
                } else if (window.innerWidth <= 1200) {
                    switch (swiper.realIndex + 1) {
                        case 1:
                            $(item).css('right', '-31%');
                            break;
                        case 2:
                            $(item).css('right', '-11%');
                            break;
                        case 3:
                            $(item).css('right', '-21%');
                            break;
                    }
                } else {
                    switch (swiper.realIndex + 1) {
                        case 1:
                            $(item).css('right', '-30%');
                            break;
                        case 2:
                            $(item).css('right', '-10%');
                            break;
                        case 3:
                            $(item).css('right', '-20%');
                            break;
                    }
                }
            });
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
