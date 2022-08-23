import Swiper from 'swiper/swiper-bundle.js';

class GiftSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.swiperSlider = null;
    this.control = {
      prevButtons: container.querySelector('.slide-btn--prev'),
      nextButtons: container.querySelector('.slide-btn--next'),
    };
    this.pagination = container.querySelector('.swiper-pagination');
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 800,
      clickable: true,
      observer: true,
      spaceBetween: 20,
      observeParents: true,
      observeSlideChildren: true,
      watchOverflow: true,
      breakpoints: {
        767: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        319: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: this.pagination,
        clickable: true,
      },
      navigation: {
        nextEl: this.control.nextButtons,
        prevEl: this.control.prevButtons,
      },
    });
  }

  init() {
    this.initSlider();
  }
}

const jsGiftSliders = document.querySelectorAll('.gift-slider');

jsGiftSliders.forEach((el) => {
  new GiftSlider(el);
});
