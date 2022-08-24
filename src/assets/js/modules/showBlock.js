class ShowBlock {
  constructor(el) {
    this.el = el;
    this.elOffset = null;
    this.elHeight = null;
    this.elPoint = null;
    this.rect = null;
    this.scrollLeft = null;
    this.scrollTop = null;
    this.value = null;

    if (this.el) {
      this.init();
    }
  }

  offset(el) {
    this.rect = el.getBoundingClientRect();
    this.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: this.rect.top + this.scrollTop,
      left: this.rect.left + this.scrollLeft,
    };
  }

  set() {
    this.value = window.scrollY;
    this.elOffset = this.offset(this.el).top;
    this.elHeight = this.el.offsetHeight;
    this.elPoint =
      window.innerHeight - (window.innerHeight - this.elHeight / 3);
    if (window.innerHeight > this.elHeight) {
      this.elPoint = window.innerHeight - this.elHeight / 3;
    }
    if (
      this.value > this.elOffset - this.elPoint &&
      this.value < this.elOffset + this.elHeight
    ) {
      this.el.classList.add('_show');
    }
  }

  listeners() {
    const THIS = this;
    ['scroll', 'resize'].forEach((evt) => {
      window.addEventListener(evt, THIS.set.bind(THIS));
    });
  }

  init() {
    this.set();
    this.listeners();
  }
}

export default ShowBlock;
