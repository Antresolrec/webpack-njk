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

  getOffset(el) {
    this.rect = el.getBoundingClientRect();
    this.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: this.rect.top + this.scrollTop,
      left: this.rect.left + this.scrollLeft,
    };
  }

  checkPosition() {
    this.value = window.scrollY;
    this.elOffset = this.getOffset(this.el).top;
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

  addListeners() {
    const THIS = this;
    ['scroll', 'resize'].forEach((evt) => {
      window.addEventListener(evt, THIS.checkPosition.bind(THIS));
    });
  }

  init() {
    this.checkPosition();
    this.addListeners();
  }
}

export default ShowBlock;
