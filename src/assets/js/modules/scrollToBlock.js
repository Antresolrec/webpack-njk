import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min.js';
import Burger from './burger';

class ScrollTo extends Burger {
  constructor(burger) {
    super(burger);
    this.selectors = document.querySelectorAll('.js-to-block');
    this.outer = document.querySelector('.js-fixed');
    this.speed = 300;
    this.isLocation = window.location.hash;
    this.options = {};
    this.library = null;
    this.class = null;
    this.block = null;
    this.curBlock = null;

    if (this.selectors) {
      this.set();
    }

    if (this.isLocation.match('#anchor-')) {
      this.onLoad();
    }

    if (this.burger) {
      super.init();
    }
  }

  goTo(block, speed, offset) {
    this.options = {
      speedAsDuration: true,
      speed,
      offset,
      easing: 'easeOutQuad',
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

  onLoad() {
    this.curBlock = this.isLocation.replace('#', '');
    this.block = document.querySelector(`.${this.curBlock}`);

    setTimeout(() => {
      this.goTo(this.block, this.speed, this.outer.clientHeight);
    }, 1);
  }

  listener(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.unlock) {
        super.close(this.delay);
      }

      this.class = el.getAttribute('href').replace('#', '');
      this.block = document.querySelector(`.${this.class}`);
      this.goTo(this.block, this.speed, this.outer.clientHeight);
    });
  }
}

export default ScrollTo;
