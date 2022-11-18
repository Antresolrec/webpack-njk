class Burger {
  constructor() {
    this.burger = document.querySelector('.js-burger');
    this.wrap = document.querySelector('.wrapper');
    this.body = document.querySelector('body');
    this.lp = document.querySelectorAll('.js-lp');
    this.menu = document.querySelector('.js-menu');
    this.openClass = '_open';
    this.lockClass = '_lock';
    this.initedClass = '_inited';
    this.delay = 500;
    this.unlock = true;
    this.width = null;

    if (this.burger) {
      this.init();
    }
  }

  bodyLockRemove(delay) {
    if (this.unlock) {
      setTimeout(() => {
        this.lp.forEach((el) => {
          el.style.paddingRight = '0px';
        });
        this.body.style.paddingRight = '0px';
        this.body.classList.remove(this.lockClass);
      }, delay);

      this.unlock = false;

      setTimeout(() => {
        this.unlock = true;
      }, delay);
    }
  }

  bodyLockAdd(delay) {
    if (this.unlock) {
      this.lp.forEach((el) => {
        el.style.paddingRight = `${
          window.innerWidth - this.wrap.offsetWidth
        }px`;
      });
      this.body.style.paddingRight = `${
        window.innerWidth - this.wrap.offsetWidth
      }px`;
      this.body.classList.add(this.lockClass);

      this.unlock = false;
      setTimeout(() => {
        this.unlock = true;
      }, delay);
    }
  }

  bodyLock(delay) {
    if (this.body.classList.contains(this.lockClass)) {
      this.bodyLockRemove(delay);
    } else {
      this.bodyLockAdd(delay);
    }
  }

  close(delay) {
    this.burger.classList.remove(this.openClass);
    this.menu.classList.remove(this.openClass);
    this.bodyLockRemove(delay);
  }

  onClick(e) {
    e.preventDefault();
    if (this.unlock) {
      this.bodyLock(this.delay);
      this.burger.classList.toggle(this.openClass);
      this.menu.classList.toggle(this.openClass);
    }
  }

  onResize() {
    if (window.innerWidth > this.width) {
      this.close(this.delay);
      this.bodyLockRemove(this.delay);
    }
  }

  addListeners() {
    this.burger.addEventListener('click', this.onClick.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    this.burger.classList.add(this.initedClass);
  }

  init() {
    if (!this.burger.classList.contains(this.initedClass)) {
      this.width = this.burger.dataset.init;
      this.addListeners();
    }
  }
}

export default Burger;
