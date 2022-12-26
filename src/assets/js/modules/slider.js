import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';

class Slider {
  constructor() {
    this.sliders = document.querySelectorAll('.js-slider');
    this.speed = 500;
    this.slider = null;
    this.prev = null;
    this.next = null;
    this.pagination = null;
    this.autoplay = null;
    this.loop = null;
    this.swiperSlider = null;
    this.plug = null;
    this.wrapper = null;
    this.plugSlide = null;
    this.swiperThumbs = null;

    if (this.sliders) {
      this.init();
    }
  }

  initSlider(swiperThumbs) {
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
        swiper: swiperThumbs || null,
      },
      on: {
        beforeInit: () => {
          if (this.plug) {
            this.plugSlide = document.createElement('div');
            this.plugSlide.classList.add('swiper-slide', 'swiper-slide--plug');
            this.wrapper.append(this.plugSlide);
          }
        },
      },
    });
  }

  createTemplate(container) {
    const thumbs = container.querySelector('.js-thumbs-slider');
    this.slider = container.querySelector('.swiper');
    this.wrapper = this.slider.querySelector('.swiper-wrapper');
    this.prev = container.querySelector('.button-slider--prev');
    this.next = container.querySelector('.button-slider--next');
    this.pagination = container.querySelector('.pagination-slider');
    this.autoplay = container.getAttribute('data-autoplay');
    this.loop = container.dataset.loop;
    this.plug = container.dataset.plug;

    if (thumbs) {
      this.initSlider(this.initThumbs(thumbs));
    } else {
      this.initSlider();
    }
  }

  initThumbs(thumbs) {
    this.swiperThumbs = new Swiper(thumbs, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      speed: this.speed,
      clickable: true,
      observeParents: true,
      observer: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
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

    return this.swiperThumbs;
  }

  init() {
    this.sliders.forEach((el) => {
      this.createTemplate(el);
    });
  }
}

export default Slider;
