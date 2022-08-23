import * as SmoothScroll from './smoothScroll/smoothScroll';
import Burger from './burger';

class ScrollTo extends Burger {
  constructor(el) {
    super(el);
    this.el = el;
    this.scr = null;
    this.class = null;
    this.block = null;
    this.options = {};

    if (this.el) {
      this.init();
    }
  }

  closeMenu() {
    super.close(500);
  }

  goTo(block, speed, offset = 80) {
    this.options = {
      speedAsDuration: true,
      speed,
      offset,
      easing: 'easeOutQuad',
    };
    this.scr = new SmoothScroll();
    this.scr.animateScroll(block, '', this.options);
  }

  listener() {
    const THIS = this;
    THIS.el.addEventListener('click', (e) => {
      if (document.querySelector('.menu._open')) {
        THIS.closeMenu();
      }
      this.class = this.el.getAttribute('data-href');
      this.block = document.querySelector(`.${this.class}`);
      THIS.goTo(this.block, 300);
      e.preventDefault();
    });
  }

  init() {
    this.listener();
  }
}

export default ScrollTo;
