import lazySizes from 'lazysizes';

class LazyLoad {
  constructor() {
    this.lazySizes = lazySizes;

    this.init();
  }

  init() {
    this.lazySizes.cfg.lazyClass = 'lazyload';
    this.lazySizes.cfg.expand = 300;
  }
}

export default LazyLoad;
