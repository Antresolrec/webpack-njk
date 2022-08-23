import Swiper from 'swiper/swiper-bundle.js';

class NewsSlider {
  constructor(container) {
    this.slider = container.querySelector('.swiper');
    this.control = {
      prevButtons: container.querySelector('.slide-btn--prev'),
      nextButtons: container.querySelector('.slide-btn--next'),
    };
    this.swiperSlider = null;
    this.init();
  }

  initSlider() {
    // const self = this;
    this.swiperSlider = new Swiper(this.slider, {
      speed: 500,
      clickable: true,
      observer: true,
      slidesPerView: 'auto',
      observeParents: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
      watchOverflow: true,
      navigation: {
        nextEl: this.control.nextButtons,
        prevEl: this.control.prevButtons,
      },
      // on: {
      //   beforeInit(swiper) {
      //     const wrapper = swiper.el.querySelector('.swiper-wrapper');
      //     wrapper.insertAdjacentHTML(
      //       'beforeEnd',
      //       '<div class="swiper-slide swiper-slide--plug"></div>'
      //     );
      //   },
      // },
    });
  }

  initNavigationSlider() {
    this.control.prevButtons.forEach((prevButton) => {
      prevButton.addEventListener('click', () => {
        this.swiperSlider.slidePrev();
      });
    });
    this.control.nextButtons.forEach((nextButton) => {
      nextButton.addEventListener('click', () => {
        this.swiperSlider.slideNext();
      });
    });
  }

  init() {
    this.initSlider();
    // this.initNavigationSlider();
  }
}

const jsNewsSliders = document.querySelectorAll('.js-news-slider');

jsNewsSliders.forEach((el) => {
  new NewsSlider(el);
});
