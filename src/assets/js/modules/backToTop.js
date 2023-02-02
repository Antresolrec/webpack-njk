class BackToTop {
  btn = document.querySelector('.js-back-to-top');

  screen = document.querySelector('.js-first-screen');

  class = '_show';

  constructor() {
    if (this.btn) {
      this.init();
    }
  }

  check() {
    this.offset = window.scrollY;
    this.height = this.screen
      ? this.screen.clientHeight
      : document.documentElement.clientHeight;
    if (this.offset > this.height) {
      this.btn.classList.add(this.class);
    } else {
      this.btn.classList.remove(this.class);
    }
  }

  addListener() {
    window.addEventListener('scroll', this.check);
  }

  init() {
    this.check = this.check.bind(this);
    this.check();
    this.addListener();
  }
}

export default BackToTop;
