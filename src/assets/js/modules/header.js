class Header {
  constructor() {
    this.fixed = document.querySelector('.js-fixed');
    this.class = '_fixed';
    this.position = null;
    this.offset = null;
    this.outer = null;
    this.mainscreen = document.querySelector('.js-padding');

    if (this.fixed) {
      this.initFixed();
    }
  }

  check() {
    // this.position = document.querySelector('.top-header').clientHeight;
    this.offset = window.scrollY;
    if (this.offset > 0) {
      this.fixed.classList.add(this.class);
      // this.fixed.style.transform = 'none';
    } else {
      // this.fixed.style.transform = `translateY(${`${this.position}px`})`;
      this.fixed.classList.remove(this.class);
    }
  }

  setPadding() {
    this.outer = this.fixed.clientHeight;
    this.mainscreen.style.paddingTop = `${this.outer}px`;
  }

  listener() {
    const THIS = this;
    this.check();
    window.addEventListener('scroll', THIS.check.bind(THIS));
    window.addEventListener('resize', THIS.check.bind(THIS));
    window.addEventListener('resize', THIS.setPadding.bind(THIS));
  }

  initFixed() {
    this.listener();
    this.setPadding();
  }
}

export default Header;
