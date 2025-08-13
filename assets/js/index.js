document.addEventListener("DOMContentLoaded", function (event) {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1299: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1499: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    });

    var swiper = new Swiper(".sharepoint_consulting", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".sharepoint_consulting .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1299: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1499: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    });

    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".blog-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1299: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

});
