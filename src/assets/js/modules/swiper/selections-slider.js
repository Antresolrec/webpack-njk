import Swiper from 'swiper/swiper-bundle.js';

class SelectionsSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.control = {
      prevButtons: container.querySelector('.slide-btn--prev'),
      nextButtons: container.querySelector('.slide-btn--next'),
    };
    this.pagination = container.querySelector('.swiper-pagination');
    this.swiperSlider = null;
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 500,
      observer: true,
      slidesPerView: 'auto',
      observeParents: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
      breakpoints: {
        1023: {
          spaceBetween: 40,
        },
        767: {
          spaceBetween: 28,
        },
        319: {
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: this.control.nextButtons,
        prevEl: this.control.prevButtons,
      },
      pagination: {
        el: this.pagination,
      },
    });
  }

  init() {
    this.initSlider();
  }
}

const jsSelectionsSliders = document.querySelectorAll('.js-selections-slider');

jsSelectionsSliders.forEach((el) => {
  new SelectionsSlider(el);
});
