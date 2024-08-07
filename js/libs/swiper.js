var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3.1,
      spaceBetween: 30,
    },
  },
})

var swiper = new Swiper(".contents", {
  slidesPerView: 4.3,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4.3,
      spaceBetween: 32,
    },
  },
})
