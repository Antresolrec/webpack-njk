class MouseParallax {
  constructor(el) {
    this.el = el;
    this.speed = this.el.getAttribute('data-speed');
    this.x = null;
    this.y = null;

    if (this.el) {
      this.init();
    }
  }

  options(e) {
    this.x = e.clientX / window.innerWidth;
    this.y = e.clientY / window.innerHeight;
    if (this.el.hasAttribute('data-reverse')) {
      this.style(true);
    } else {
      this.style();
    }
  }

  style(state) {
    if (state) {
      this.el.style.transform = `translate3d(${this.x * this.speed}px, ${
        this.y * this.speed
      }px, ${this.x * 30}px)`;
    } else {
      this.el.style.transform = `translate3d(-${this.x * this.speed}px, -${
        this.y * this.speed
      }px, ${this.x * 30}px)`;
    }
  }

  listener() {
    window.addEventListener('mousemove', (e) => {
      this.options(e);
    });
  }

  init() {
    this.listener();
  }
}

export default MouseParallax;
