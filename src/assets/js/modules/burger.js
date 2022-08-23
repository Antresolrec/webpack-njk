class Burger {
  constructor(el) {
    this.burger = document.querySelector('.burger');
    this.body = document.querySelector('body');
    this.lp = document.querySelectorAll('.js-lp');
    this.menu = document.querySelector('.menu');
    this.openClass = '_open';
    this.lockClass = '_lock';
    this.delay = 500;
    this.unlock = true;
    this.el = el;
    this.width = null;

    if (this.burger) {
      this.init();
    }
  }

  bodyLockRemove(delay) {
    if (this.unlock) {
      setTimeout(() => {
        for (let index = 0; index < this.lp.length; index++) {
          const el = this.lp[index];
          el.style.paddingRight = '0px';
        }
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
      for (let index = 0; index < this.lp.length; index++) {
        const el = this.lp[index];
        el.style.paddingRight = `${
          window.innerWidth - document.querySelector('.wrapper').offsetWidth
        }px`;
      }
      this.body.style.paddingRight = `${
        window.innerWidth - document.querySelector('.wrapper').offsetWidth
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

  click() {
    this.burger.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.unlock) {
        this.bodyLock(this.delay);
        this.burger.classList.toggle(this.openClass);
        this.menu.classList.toggle(this.openClass);
      }
    });
  }

  resize() {
    this.width = this.burger.getAttribute('data-init');
    window.addEventListener('resize', () => {
      if (window.innerWidth > this.width) {
        this.close(this.delay);
        this.bodyLockRemove(this.delay);
      }
    });
  }

  init() {
    this.click();
    this.resize();
  }
}

export default Burger;
