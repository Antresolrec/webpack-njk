class Spoller {
  constructor(el) {
    this.spoller = el;
    this.duration = 500;
    this.class = '.js-spollers';
    this.go = true;
    this.max = null;
    this.height = null;
    this.target = null;
    this.current = null;
    this.all = null;

    if (this.spoller) {
      this.init();
    }
  }

  addStyleFirst(target) {
    this.target = target;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${this.duration}ms`;
  }

  addStyleSecond(target) {
    this.target = target;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
  }

  rmStyleFirst(target) {
    this.target = target;
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
  }

  rmStyleSecond(target) {
    this.target = target;
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }

  up(target) {
    this.addStyleFirst(target);
    this.height = target.offsetHeight;
    target.style.height = `${this.height}px`;
    this.height = target.offsetHeight;
    this.addStyleSecond(target);
    window.setTimeout(() => {
      target.style.display = 'none';
      this.rmStyleFirst(target);
      this.rmStyleSecond(target);
    }, this.duration);
  }

  down(target) {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') {
      display = 'block';
    }
    target.style.display = display;
    this.height = target.offsetHeight;
    this.addStyleFirst(target);
    this.addStyleSecond(target);
    window.setTimeout(() => {
      target.style.height = `${this.height}px`;
    }, 1);
    this.rmStyleFirst(target);
    window.setTimeout(() => {
      this.rmStyleSecond(target);
    }, this.duration);
  }

  toggle(target) {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
        return this.down(target);
      }
      return this.up(target);
    }
    return true;
  }

  checkCurrent(cur) {
    this.current = cur;
    this.all = this.current.closest(this.class).querySelectorAll('.js-spoller');
    for (let i = 0; i < this.all.length; i++) {
      const el = this.all[i];
      if (el !== this.current) {
        el.classList.remove('_active');
        this.up(el.nextElementSibling);
      }
    }
  }

  click(e) {
    e.preventDefault();
    this.current = e.target;
    if (this.go) {
      this.go = false;

      if (this.current.closest(this.class).classList.contains('_one')) {
        this.checkCurrent(this.current);
      }
      this.current.classList.toggle('_active');
      this.toggle(this.current.nextElementSibling);

      setTimeout(() => {
        this.go = true;
      }, 500);
    }
  }

  set() {
    const THIS = this;
    if (this.max && window.innerWidth > this.max) {
      if (this.spoller.classList.contains('_init')) {
        this.spoller.classList.remove('_active');
        this.spoller.classList.remove('_init');
        this.spoller.nextElementSibling.style.cssText = '';
        this.spoller.removeEventListener('click', THIS.click.bind(THIS));
      }
    } else if (!this.spoller.classList.contains('_init')) {
      this.spoller.classList.add('_init');
      this.spoller.addEventListener('click', THIS.click.bind(THIS));
    }
  }

  show() {
    if (this.spoller.classList.contains('_active')) {
      this.toggle(this.spoller.nextElementSibling);
    }
  }

  init() {
    this.max = this.spoller.getAttribute('data-max');
    window.addEventListener('resize', () => {
      this.set();
    });
    this.set();
    this.show();
  }
}

export default Spoller;
