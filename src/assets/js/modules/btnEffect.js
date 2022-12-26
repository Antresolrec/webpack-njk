class BtnEffect {
  constructor(el) {
    this.el = el;
    this.i = this.el.querySelector('i');
    this.parentOffset = null;
    this.relX = null;
    this.relY = null;

    if (this.el) {
      this.init();
    }
  }

  options(evt) {
    this.el.addEventListener(evt, (e) => {
      this.parentOffset = this.el.getBoundingClientRect();
      this.relX = e.pageX - this.parentOffset.left;
      this.relY = e.clientY - this.parentOffset.top;
      this.i.style.top = `${this.relY}px`;
      this.i.style.left = `${this.relX}px`;
    });
  }

  listeners() {
    ['mouseenter', 'mouseout'].forEach((evt) => this.options(evt));
  }

  init() {
    this.listeners();
  }
}

export default function initBtnEffect() {
  const btnEffect = document.querySelectorAll('.js-btn-effect');
  if (btnEffect) {
    btnEffect.forEach((el) => {
      new BtnEffect(el);
    });
  }
}
