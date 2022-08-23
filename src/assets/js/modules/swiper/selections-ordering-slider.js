import Swiper from 'swiper/swiper-bundle.js';

class OrderingSelectionsSlider {
  constructor(container) {
    this.modal = document.querySelector('.popup_selections.open');
    this.slider = container.querySelector('.swiper');
    this.swiperSlider = null;
    this.pagination = container.querySelector('.swiper-pagination');
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 500,
      clickable: true,
      observer: true,
      spaceBetween: 20,
      observeParents: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
      watchOverflow: true,
      breakpoints: {
        580: {
          slidesPerView: 5,
        },
        319: {
          slidesPerView: 4,
        },
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

const jsOrderingSelectionsSliders = document.querySelectorAll(
  '.js-ordering-selections-slider'
);

window.jsOrderingSelectionsSliders = [];

jsOrderingSelectionsSliders.forEach((el) => {
  const slider = new OrderingSelectionsSlider(el);
  window.jsOrderingSelectionsSliders.push(slider);
});
