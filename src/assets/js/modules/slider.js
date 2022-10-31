import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';

class Slider {
  constructor() {
    this.sliders = document.querySelectorAll('.js-slider');
    this.slider = null;
    this.prev = null;
    this.next = null;
    this.pagination = null;
    this.autoplay = null;
    this.loop = null;
    this.swiperSlider = null;
    this.thumbs = null;
    this.speed = 500;

    if (this.sliders) {
      this.init();
    }
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      modules: [Navigation, Pagination, Autoplay, Thumbs],
      speed: this.speed,
      slidesPerView: 'auto',
      loop: !!this.loop,
      autoplay: this.autoplay
        ? {
            delay: this.autoplay,
          }
        : false,
      navigation: {
        nextEl: this.next,
        prevEl: this.prev,
      },
      pagination: {
        el: this.pagination,
        type: 'fraction',
      },
      thumbs: {
        swiper: this.swiperThumbs,
      },
    });
  }

  createTemplate(container) {
    this.thumbs = container.querySelector('.js-thumbs-slider');
    this.slider = container.querySelector('.swiper');
    this.prev = container.querySelector('.button-slider--prev');
    this.next = container.querySelector('.button-slider--next');
    this.pagination = container.querySelector('.pagination-slider');
    this.autoplay = container.getAttribute('data-autoplay');
    this.loop = container.dataset.loop;

    if (this.thumbs) {
      this.initThumbs();
    }

    this.initSlider();
  }

  initThumbs() {
    this.swiperThumbs = new Swiper(this.thumbs, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      speed: this.speed,
      clickable: true,
      observeParents: true,
      observer: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: this.next,
        prevEl: this.prev,
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
          slidesPerView: 'auto',
        },
        1024: {
          direction: 'vertical',
          slidesPerView: 3,
        },
      },
    });
  }

  init() {
    this.sliders.forEach((el) => {
      this.createTemplate(el);
    });
  }
}

export default Slider;
