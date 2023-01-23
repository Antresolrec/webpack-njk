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
    this.delay = 300;
    this.unlock = true;
    this.width = null;

    if (this.burger) {
      this.init();
    }
  }

  bodyLockRemove() {
    if (this.unlock) {
      setTimeout(() => {
        this.lp.forEach((el) => {
          el.style.paddingRight = '0px';
        });
        this.body.style.paddingRight = '0px';
        this.body.classList.remove(this.lockClass);
      }, this.delay);

      this.unlock = false;

      setTimeout(() => {
        this.unlock = true;
      }, this.delay);
    }
  }

  bodyLockAdd() {
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
      }, this.delay);
    }
  }

  bodyLock() {
    if (this.body.classList.contains(this.lockClass)) {
      this.bodyLockRemove(this.delay);
    } else {
      this.bodyLockAdd(this.delay);
    }
  }

  close() {
    this.burger.classList.remove(this.openClass);
    this.menu.classList.remove(this.openClass);
    this.bodyLockRemove(this.delay);
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

const myBurger = new Burger();

export default myBurger;
