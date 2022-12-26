import getOffset from './getOffset';

class ShowBlock {
  constructor() {
    this.elems = document.querySelectorAll('.js-anim:not(._show)');

    if (this.elems) {
      this.init();
    }
  }

  checkPosition() {
    this.value = window.scrollY + document.documentElement.clientHeight;
    this.elems.forEach((el) => {
      if (!el.classList.contains('_show')) {
        const elOffset = getOffset(el).top;

        if (this.value > elOffset) {
          el.classList.add('_show');
        }
      }
    });
  }

  addListeners() {
    ['scroll', 'resize'].forEach((e) => {
      window.addEventListener(e, this.checkPosition);
    });
  }

  init() {
    this.checkPosition = this.checkPosition.bind(this);
    this.checkPosition();
    this.addListeners();
  }
}

export default ShowBlock;
