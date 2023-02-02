class MouseParallax {
  elements = document.querySelectorAll('.js-mouse-parallax');

  destroyPoint = 1023;

  isInit = false;

  constructor() {
    if (this.elements) {
      this.init();
    }
  }

  onMouseMove(e) {
    this.x = e.clientX / window.innerWidth;
    this.y = e.clientY / window.innerHeight;
    this.elements.forEach((el) => this.addAction(el));
  }

  addAction(el) {
    const speed = el.dataset.speed;

    if (el.hasAttribute('data-reverse')) {
      el.style.transform = `translate(${this.x * speed}px, ${
        this.y * speed
      }px)`;
    } else {
      el.style.transform = `translate(-${this.x * speed}px, -${
        this.y * speed
      }px)`;
    }
  }

  addMouseListener() {
    if (!this.isInit) {
      window.addEventListener('mousemove', this.onMouseMove);
      this.isInit = true;
    }
  }

  removeMouseListener() {
    if (this.isInit) {
      window.removeEventListener('mousemove', this.onMouseMove);
      this.isInit = false;
    }
  }

  checkWindowSize() {
    if (window.innerWidth > this.destroyPoint) {
      this.addMouseListener();
    } else {
      this.removeMouseListener();
    }
  }

  addResizeListener() {
    window.addEventListener('resize', this.checkWindowSize);
  }

  init() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.checkWindowSize = this.checkWindowSize.bind(this);
    this.checkWindowSize();
    this.addResizeListener();
  }
}

export default MouseParallax;
