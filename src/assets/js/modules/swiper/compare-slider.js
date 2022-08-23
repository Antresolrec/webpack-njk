import Swiper from 'swiper/swiper-bundle.js';

let goodsPropertyDesktop = [];
let goodsPropertyMobile = [];
let goodsSliders = [];

function initComparsion() {
  const comparsionGoodsSlider = document.querySelectorAll(
    '.js-comparsion-slider'
  );
  const comparsionPropertyDesktop = document.querySelectorAll(
    '.js-property-slider--desktop'
  );
  const comparsionPropertyMobile = document.querySelectorAll(
    '.js-property-slider--mobile'
  );

  comparsionPropertyDesktop.forEach((slider) => {
    const mySwiper = new Swiper(slider, {
      speed: 500,
      breakpoints: {
        1440: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1140: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        880: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        319: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });

    mySwiper.init();

    goodsPropertyDesktop.push(mySwiper);

    goodsSliders.push(mySwiper);
  });

  comparsionPropertyMobile.forEach((slider) => {
    const mySwiper = new Swiper(slider, {
      speed: 500,
      breakpoints: {
        1440: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1140: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        880: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        319: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      init: false,
    });

    mySwiper.init();

    goodsPropertyMobile.push(mySwiper);

    goodsSliders.push(mySwiper);
  });

  comparsionGoodsSlider.forEach((slider, index) => {
    const mySwiper = new Swiper(slider, {
      speed: 500,
      breakpoints: {
        1440: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1140: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        880: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        319: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      navigation: {
        prevEl: slider.querySelector('.slide-btn--prev'),
        nextEl: slider.querySelector('.slide-btn--next'),
      },
      controller: {
        control: index === 0 ? goodsPropertyDesktop : goodsPropertyMobile,
      },

      init: false,
    });

    // let buttonsComparsion = document.querySelectorAll('.button-comparsion')[0];
    // const buttonsContainer = mySwiper.el.closest(
    //   '.goods-comparsion__container'
    // );
    // if (buttonsContainer) {
    //   const leftButton = buttonsContainer.querySelectorAll(
    //     '.slide-btn--prev'
    //   )[0];
    //   const rightButton = buttonsContainer.querySelectorAll(
    //     '.slide-btn--next'
    //   )[0];
    //   mySwiper.on('slideChange init', () => {
    //     if (mySwiper.isBeginning) {
    //       console.log('1');
    //       leftButton.classList.add('swiper-button-disabled');
    //     } else {
    //       leftButton.classList.remove('swiper-button-disabled');
    //       console.log('11');
    //     }
    //     if (mySwiper.isEnd) {
    //       console.log('2');
    //       rightButton.classList.add('swiper-button-disabled');
    //     } else {
    //       rightButton.classList.remove('swiper-button-disabled');
    //       console.log('22');
    //     }
    //   });
    //   leftButton.addEventListener('click', () => {
    //     mySwiper.slidePrev();
    //   });

    //   rightButton.addEventListener('click', () => {
    //     mySwiper.slideNext();
    //   });
    // }

    mySwiper.init();

    goodsSliders.push(mySwiper);

    if (index === 0) {
      goodsPropertyDesktop.forEach((item) => {
        item.controller.control = mySwiper;
      });
    } else {
      goodsPropertyMobile.forEach((item) => {
        item.controller.control = mySwiper;
      });
    }
  });
}

function destroyComparison() {
  goodsSliders.forEach((item) => {
    item.destroy();
  });
  goodsSliders = [];
  goodsPropertyDesktop = [];
  goodsPropertyMobile = [];
}

window.initComparsion = initComparsion;
window.destroyComparison = destroyComparison;

initComparsion();
