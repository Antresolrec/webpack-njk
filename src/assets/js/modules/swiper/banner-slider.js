import Swiper from 'swiper/swiper-bundle.js';

class BannerSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.swiperSlider = null;
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 1000,
      clickable: true,
      observer: true,
      slidesPerView: 1,
      observeParents: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
      autoplay: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  init() {
    this.initSlider();
  }
}

const jsBannerSliders = document.querySelectorAll('.banner-slider');

jsBannerSliders.forEach((el) => {
  new BannerSlider(el);
});
