import getOffset from './getOffset';

class ShowBlock {
  elems = document.querySelectorAll('.js-anim:not(._is-show)');

  showedElemsCount = 0;

  constructor() {
    if (this.elems) {
      this.init();
    }
  }

  checkPosition() {
    if (this.elems.length === this.showedElemsCount) {
      ['scroll', 'resize'].forEach((e) => {
        window.removeEventListener(e, this.checkPosition);
      });
    } else {
      this.value = window.scrollY + document.documentElement.clientHeight;
      this.showElems();
    }
  }

  showElems() {
    this.elems.forEach((el) => {
      if (
        !el.classList.contains('_is-show') &&
        this.value > getOffset(el).top
      ) {
        el.classList.add('_is-show');
        this.showedElemsCount++;
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
