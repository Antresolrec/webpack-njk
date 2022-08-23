// import Swiper from 'swiper/swiper-bundle.js';

// class DoubleSliders {
//   constructor(container) {
//     this.slider = container.querySelector('.double-slider__main-container');
//     this.control = {
//       prevButtons: container.querySelectorAll('.button-prev'),
//       nextButtons: container.querySelectorAll('.button-next'),
//     };
//     this.thumbs = container.querySelector('.double-slider__thumb-container');
//     this.slidesSlider = this.slider.querySelectorAll('.swiper-slide');
//     this.slidesThumbs = this.thumbs.querySelectorAll('.swiper-slide');
//     this.swiperSlider = null;
//     this.swiperThumbs = null;
//     this.init();
//   }

//   initSlider() {
//     this.swiperSlider = new Swiper(this.slider, {
//       speed: 500,
//       observeParents: true,
//       observer: true,
//       observeSlideChildren: true,
//       clickable: true,
//       thumbs: {
//         swiper: this.swiperThumbs,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   }

//   initThumbs() {
//     this.swiperThumbs = new Swiper(this.thumbs, {
//       direction: 'vertical',
//       slidesPerView: 5,
//       speed: 500,
//       clickable: true,
//       observeParents: true,
//       observer: true,
//       observeSlideChildren: true,
//       slideToClickedSlide: true,
//     });
//   }

//   initNavigationSlider() {
//     this.control.prevButtons.forEach((prevButton) => {
//       if (
//         (this.slidesThumbs.length < 6 &&
//           prevButton.classList.contains('double-slider__thumb-button')) ||
//         (this.slidesSlider.length < 2 &&
//           prevButton.classList.contains('slide-btn'))
//       ) {
//         prevButton.classList.add('lock');
//       }
//       prevButton.addEventListener('click', () => {
//         this.swiperSlider.slidePrev();
//       });
//     });
//     this.control.nextButtons.forEach((nextButton) => {
//       if (
//         (this.slidesThumbs.length < 6 &&
//           nextButton.classList.contains('double-slider__thumb-button')) ||
//         (this.slidesSlider.length < 2 &&
//           nextButton.classList.contains('slide-btn'))
//       ) {
//         nextButton.classList.add('lock');
//       }
//       nextButton.addEventListener('click', () => {
//         this.swiperSlider.slideNext();
//       });
//     });
//   }

//   init() {
//     if (this.thumbs) {
//       this.initThumbs();
//       // this.controllerSlider();
//     }
//     this.initSlider();
//     this.initNavigationSlider();
//   }
// }

// const jsDoubleSliders = document.querySelectorAll('.double-slider');

// jsDoubleSliders.forEach((el) => {
//   new DoubleSliders(el);
// });

import Swiper from 'swiper/swiper-bundle.js';

class DoubleSliders {
  constructor(container) {
    this.slider = container.querySelector('.double-slider__main-container');
    this.control = {
      prevButtons: container.querySelectorAll('.button-thumb-prev'),
      nextButtons: container.querySelectorAll('.button-thumb-next'),
    };
    this.thumbs = container.querySelector('.double-slider__thumb-container');
    this.slidesSlider = this.slider.querySelectorAll('.swiper-slide');
    this.slidesThumbs = this.thumbs.querySelectorAll('.swiper-slide');
    this.swiperSlider = null;
    this.swiperThumbs = null;
    this.init();
  }

  initSlider() {
    this.swiperSlider = new Swiper(this.slider, {
      speed: 500,
      observeParents: true,
      observer: true,
      observeSlideChildren: true,
      clickable: true,
      thumbs: {
        swiper: this.swiperThumbs,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    });
  }

  initThumbs() {
    this.swiperThumbs = new Swiper(this.thumbs, {
      direction: 'vertical',
      slidesPerView: 5,
      speed: 500,
      clickable: true,
      observeParents: true,
      observer: true,
      observeSlideChildren: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: this.control.nextButtons,
        prevEl: this.control.prevButtons,
      },
    });
  }

  initNavigationSlider() {
    this.control.prevButtons.forEach((prevButton) => {
      if (
        (this.slidesThumbs.length < 6 &&
          prevButton.classList.contains('double-slider__thumb-button')) ||
        (this.slidesSlider.length < 2 &&
          prevButton.classList.contains('slide-btn'))
      ) {
        prevButton.classList.add('lock');
      }
      prevButton.addEventListener('click', () => {
        this.swiperSlider.slidePrev();
      });
    });
    this.control.nextButtons.forEach((nextButton) => {
      if (
        (this.slidesThumbs.length < 6 &&
          nextButton.classList.contains('double-slider__thumb-button')) ||
        (this.slidesSlider.length < 2 &&
          nextButton.classList.contains('slide-btn'))
      ) {
        nextButton.classList.add('lock');
      }
      nextButton.addEventListener('click', () => {
        this.swiperSlider.slideNext();
      });
    });
  }

  init() {
    if (this.thumbs) {
      this.initThumbs();
      // this.controllerSlider();
    }
    this.initSlider();
    this.initNavigationSlider();
  }
}

const jsDoubleSliders = document.querySelectorAll('.double-slider');

jsDoubleSliders.forEach((el) => {
  new DoubleSliders(el);
});
