function getScrollValue() {
  return window.scrollY;
}

function getPageHeight() {
  return (
    (document.querySelector('.wrapper').clientHeight -
      document.body.clientHeight) /
    100
  );
}

export default class Progress {
  constructor() {
    this.container = document.querySelector('.js-progress');
    if (this.container) {
      this.line = this.container.querySelector('.js-progress__line');
      this.init();
    }
  }

  updProgress() {
    this.percent = getScrollValue() / getPageHeight();
    this.line.style.width = `${this.percent.toFixed(0)}%`;
    this.line.innerText =
      this.percent >= 2 ? `${this.percent.toFixed(0)}%` : '';
  }

  addListener() {
    window.addEventListener('scroll', this.updProgress);
  }

  init() {
    this.updProgress = this.updProgress.bind(this);
    this.addListener();
  }
}
