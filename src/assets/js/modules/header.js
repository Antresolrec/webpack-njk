class Header {
  constructor() {
    this.header = document.querySelector('.js-header');
    this.fixed = document.querySelector('.js-fixed');
    this.class = '_fixed';
    this.position = null;
    this.offset = null;
    this.outer = null;

    if (this.fixed) {
      this.init();
    }
  }

  check() {
    this.offset = window.scrollY;
    if (this.offset > 0) {
      this.fixed.classList.add(this.class);
    } else {
      this.fixed.classList.remove(this.class);
    }
  }

  setHeight() {
    this.outer = this.fixed.clientHeight;
    this.header.style.height = `${this.outer}px`;
  }

  addListeners() {
    window.addEventListener('scroll', this.check);
    window.addEventListener('resize', () => {
      this.check();
      this.setHeight();
    });
  }

  init() {
    this.check = this.check.bind(this);
    this.check();
    this.setHeight();
    this.addListeners();
  }
}

export default Header;
