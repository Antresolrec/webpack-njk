class BackToTop {
  constructor() {
    this.btn = document.querySelector('.back-to-top');
    this.screen = document.querySelector('.js-first-screen');
    this.class = '_show';
    this.offset = null;
    this.height = null;

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
      return true;
    }
    this.btn.classList.remove(this.class);
    return false;
  }

  listener() {
    const THIS = this;
    window.addEventListener('scroll', THIS.check.bind(THIS));
  }

  init() {
    this.check();
    this.listener();
  }
}

export default BackToTop;
