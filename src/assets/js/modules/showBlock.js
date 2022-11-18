import getOffset from './getOffset';

class ShowBlock {
  constructor() {
    this.elems = document.querySelectorAll('.js-anim:not(._show)');
    this.value = null;

    if (this.elems) {
      this.init();
    }
  }

  checkPosition() {
    this.value = window.scrollY;
    this.elems.forEach((el) => {
      if (!el.classList.contains('_show')) {
        const elOffset = getOffset(el).top;
        const elHeight = el.offsetHeight;
        let elPoint = window.innerHeight - (window.innerHeight - elHeight / 3);
        if (window.innerHeight > elHeight) {
          elPoint = window.innerHeight - elHeight / 3;
        }
        if (this.value > elOffset - elPoint.toFixed(0)) {
          el.classList.add('_show');
        }
      }
    });
  }

  addListeners() {
    ['scroll', 'resize'].forEach((evt) => {
      window.addEventListener(evt, this.checkPosition.bind(this));
    });
  }

  init() {
    this.checkPosition();
    this.addListeners();
  }
}

export default ShowBlock;
