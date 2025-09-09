var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 2,
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
        slidesPerView: 3,
        spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".service-page-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
        1299: {
        slidesPerView: 5,
        spaceBetween: 20,
        },
    },
});

    
    var swiper = new Swiper(".sharepoint_consulting", {
        loop: true,
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
            slidesPerView: 3,
            spaceBetween: 30,
            },
            1299: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        },
    });
    var swiper = new Swiper(".blog-slider", {
        loop: true,
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
    
    var swiper = new Swiper('.swiper.portfolio-slider', {
            loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".portfolio-slider ~ .swiper-pagination",
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
            767: {
            slidesPerView: 2,
            spaceBetween: 30,
            },
            1299: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
        },
    });



    // testimonial slider
    var swiper = new Swiper('.swiper.testimonial-slider', {
            loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".testimonial-slider ~ .swiper-pagination",
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
            767: {
            slidesPerView: 2,
            spaceBetween: 30,
            },
            1299: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
        },
    });


    // same text calculated height
    function matchCardHeights(selector) {
        const cards = document.querySelectorAll(selector);
        if (!cards.length) return;
        // Reset heights
        cards.forEach(card => card.style.minHeight = "");
        let rows = [];
        const tolerance = 2; // pixel tolerance for responsive layouts
        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            let foundRow = rows.find(row => Math.abs(row.top - top) <= tolerance);
            if (!foundRow) {
                foundRow = { top: top, cards: [] };
                rows.push(foundRow);
            }
            foundRow.cards.push(card);
        });
        rows.forEach(row => {
            let maxHeight = 0;
            row.cards.forEach(card => {
                maxHeight = Math.max(maxHeight, card.offsetHeight);
            });
            row.cards.forEach(card => {
                card.style.minHeight = maxHeight + "px";
            });
        });
    }
    function initMatchHeights() {
        matchCardHeights(".our-service-card p");
        matchCardHeights(".testimonial-card p");
    }
    let resizeTimer;
    window.addEventListener("load", initMatchHeights);
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initMatchHeights, 150);
    });


    // counter
    const counters = document.querySelectorAll('.counter');
    let started = false;

    function startCounting() {
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                
                // Smaller increment for slower counting
                const increment = target / 200; // Bigger divisor = slower

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 40); // Longer delay = slower
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    window.addEventListener('scroll', () => {
        const section = document.querySelector('.stats-section');
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (!started && sectionTop < windowHeight - 100) {
            startCounting();
            started = true;
        }
    });

   // counter end
