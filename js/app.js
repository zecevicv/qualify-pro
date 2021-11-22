/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner-slider')) {
  new Swiper(".banner-slider .swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".banner-slider .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
}

/* #Product Slider
  ======================================================= */
if (document.querySelector('.product-slider')) {
  new Swiper(".product-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: ".product-slider .next",
      prevEl: ".product-slider .prev",
    },
    pagination: {
      el: ".product-slider .swiper-pagination",
    },
  });
}

/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider')) {
  new Swiper(".post-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        loop: true,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3,
        loop: false,
        centeredSlides: false
      }
    },
  });
}

/* #CS Navigation
  ======================================================= */

// Slider
if (document.querySelector('.cs-navigation .swiper')) {
  new Swiper(".cs-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  });
}