import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min.js';
import myBurger from './burger';
import getOffset from './getOffset';

class ScrollTo {
  constructor() {
    this.selectors = document.querySelectorAll('.js-to-block');
    this.outer = document.querySelector('.js-fixed');
    this.speed = 500;
    // this.isLocation = window.location.hash;
    this.options = {};
    this.blocks = [];
    this.library = null;
    this.elId = null;
    this.block = null;
    this.layer = null;

    if (this.selectors) {
      this.listenerClick();
      // this.burger = new Burger();

      this.pushBlocks();

      this.setLinkToBlock = this.setLinkToBlock.bind(this);
      this.addListeners();
    }

    // if (this.isLocation.match('#anchor-')) {
    //   this.onLoad();
    // }
  }

  goTo(block, speed, offset) {
    this.options = {
      speedAsDuration: true,
      speed,
      offset,
      easing: 'easeOutQuad',
      updateURL: true,
    };

    if (this.library) {
      this.library.destroy();
      this.library = null;
    }

    this.library = new SmoothScroll();
    this.library.animateScroll(block, '', this.options);
  }

  // onLoad() {
  //   this.elId = this.isLocation.replace('#', '');
  //   this.block = document.querySelector(`#${this.elId}`);

  //   setTimeout(() => {
  //     this.goTo(this.block, this.speed, this.outer.clientHeight);
  //   }, 500);
  // }

  listenerClick() {
    this.selectors.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        if (myBurger.unlock) {
          myBurger.close();
        }

        this.onClick(el);
      });
    });
  }

  onClick(el) {
    this.elId = el.getAttribute('href').replace('#', '');
    this.block = document.querySelector(`#${this.elId}`);
    this.goTo(this.block, this.speed, this.outer.clientHeight);
  }

  getPositionBlock(elOffest, elHeight) {
    return {
      top: window.scrollY + this.layer + 1 >= elOffest,
      bottom: window.scrollY + this.layer < elOffest + elHeight - 1,
    };
  }

  setLinkToBlock() {
    this.layer = this.outer.clientHeight;
    const oldCurLinks = document.querySelectorAll('.js-to-block._active');

    if (oldCurLinks) {
      oldCurLinks.forEach((el) => el.classList.remove('_active'));
    }

    this.blocks.forEach((el) => {
      const curEl = document.querySelector(`#${el}`);

      if (curEl) {
        const elOffest = getOffset(curEl).top;
        const elHeight = curEl.clientHeight;
        const links = document.querySelectorAll(`.js-to-block[href="#${el}"]`);
        if (
          this.getPositionBlock(elOffest).top &&
          this.getPositionBlock(elOffest, elHeight).bottom
        ) {
          links.forEach((link) => link.classList.add('_active'));
        }
      }
    });
  }

  pushBlocks() {
    this.selectors.forEach((el) => {
      const block = el.getAttribute('href').replace('#', '');
      // eslint-disable-next-line no-bitwise
      if (block !== '' && !~this.blocks.indexOf(block)) {
        this.blocks.push(block);
      }
    });
  }

  addListeners() {
    ['scroll', 'resize'].forEach((evt) => {
      window.addEventListener(evt, this.setLinkToBlock);
    });
  }
}

export default ScrollTo;
