import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min.js';
import Burger from './burger';

class ScrollTo {
  constructor() {
    this.selectors = document.querySelectorAll('.js-to-block');
    this.outer = document.querySelector('.js-fixed');
    this.speed = 300;
    // this.isLocation = window.location.hash;
    this.options = {};
    this.library = null;
    this.getId = null;
    this.block = null;

    if (this.selectors) {
      this.set();
      this.burger = new Burger();
    }

    // if (this.isLocation.match('#anchor-')) {
    //   this.onLoad();
    // }
  }

  goTo(block, speed, offset) {
    this.options = {
      speedAsDuration: true,
      speed,
      offset,
      easing: 'easeOutQuad',
      updateURL: true,
    };

    if (this.library) {
      this.library.destroy();
      this.library = null;
    }

    this.library = new SmoothScroll();
    this.library.animateScroll(block, '', this.options);
  }

  set() {
    this.selectors.forEach((el) => {
      this.listener(el);
    });
  }

  // onLoad() {
  //   this.getId = this.isLocation.replace('#', '');
  //   this.block = document.querySelector(`#${this.getId}`);

  //   setTimeout(() => {
  //     this.goTo(this.block, this.speed, this.outer.clientHeight);
  //   }, 500);
  // }

  listener(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.burger.unlock) {
        this.burger.close(this.burger.delay);
      }

      this.getId = el.getAttribute('href').replace('#', '');
      this.block = document.querySelector(`#${this.getId}`);
      this.goTo(this.block, this.speed, this.outer.clientHeight);
    });
  }
}

export default ScrollTo;
