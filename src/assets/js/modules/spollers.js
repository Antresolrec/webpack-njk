function addStyleFirst(target, duration) {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
}

function addStyleSecond(target) {
  target.style.overflow = 'hidden';
  target.style.height = 0;
}

function rmStyleSecond(target) {
  target.style.removeProperty(
    'height',
    'overflow',
    'transition-duration',
    'transition-property'
  );
  target.classList.remove('_slide');
}

class Spoller {
  constructor(el) {
    this.spoller = el;
    this.duration = 300;
    this.class = '.js-spollers';
    this.go = true;
    // this.max = null;
    // this.height = null;
    // this.target = null;
    // this.current = null;
    // this.all = null;

    if (this.spoller) {
      this.max = this.spoller.getAttribute('data-max');
      this.init();
    }
  }

  up(target) {
    addStyleFirst(target, this.duration);
    this.height = target.offsetHeight;
    target.style.height = `${this.height}px`;
    this.height = target.offsetHeight;
    addStyleSecond(target);
    setTimeout(() => {
      target.style.display = 'none';
      rmStyleSecond(target);
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
    addStyleFirst(target, this.duration);
    addStyleSecond(target);
    setTimeout(() => {
      target.style.height = `${this.height}px`;
    }, 1);
    setTimeout(() => {
      rmStyleSecond(target);
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
    if (this.max && window.innerWidth > this.max) {
      this.spoller.removeEventListener('click', this.click);
      if (this.spoller.classList.contains('_init')) {
        this.spoller.classList.remove('_active', '_init');
        this.spoller.nextElementSibling.style.cssText = '';
        this.spoller.nextElementSibling.style.display = 'none';
      }
    } else if (!this.spoller.classList.contains('_init')) {
      this.spoller.classList.add('_init');
      this.spoller.addEventListener('click', this.click);
    }
  }

  show() {
    if (this.spoller.classList.contains('_active')) {
      this.toggle(this.spoller.nextElementSibling);
    }
  }

  onResize() {
    window.addEventListener('resize', this.set);
  }

  init() {
    this.click = this.click.bind(this);
    this.set = this.set.bind(this);
    this.set();
    this.show();
    this.onResize();
  }
}

export default function initSpollers() {
  const spollers = document.querySelectorAll('.js-spoller');
  if (spollers) {
    spollers.forEach((el) => new Spoller(el));
  }
}
