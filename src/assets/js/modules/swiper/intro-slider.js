import Swiper from 'swiper/swiper-bundle.js';

class IntroSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.swiperSlider = null;
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 500,
      clickable: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
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

const introSliders = document.querySelectorAll('.slider-intro');

introSliders.forEach((el) => {
  new IntroSlider(el);
});
