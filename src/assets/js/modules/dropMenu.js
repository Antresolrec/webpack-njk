class Drop {
  constructor(trigger) {
    this.trigger = trigger;
    this.class = '_open';
    this.initClass = '_init';
    this.triggers = document.querySelectorAll('.js-drop');
    this.target = null;
    this.isOpen = null;
    this.initSize = null;

    if (this.trigger) {
      this.init();
    }
  }

  clickTrigger() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.isOpen = e.currentTarget.parentNode.classList.contains(this.class);
      this.target = e.currentTarget;
      if (this.isOpen) {
        this.target.parentNode.classList.remove(this.class);
      } else {
        this.triggers.forEach((el) => {
          el.parentNode.classList.remove(this.class);
        });
        this.target.parentNode.classList.add(this.class);
      }
    });
  }

  resize() {
    window.addEventListener('resize', () => {
      this.checkResponsive(this.trigger);
    });
  }

  clickDocument() {
    document.addEventListener('click', (e) => {
      this.target = e.target;
      if (!this.target.closest('._open')) {
        this.triggers.forEach((el) => {
          el.parentNode.classList.remove(this.class);
        });
      }
    });
  }

  checkResponsive(el) {
    this.initSize = el.parentNode.getAttribute('data-init');
    if (this.initSize) {
      if (window.innerWidth <= this.initSize) {
        el.parentNode.classList.add(this.initClass);
      } else {
        el.parentNode.classList.remove(this.initClass);
      }
    } else {
      el.parentNode.classList.add(this.initClass);
    }
  }

  init() {
    this.checkResponsive(this.trigger);
    this.resize();
    this.clickTrigger();
    this.clickDocument();
  }
}

export default function initDrop() {
  const drops = document.querySelectorAll('.js-drop');
  if (drops) {
    drops.forEach((el) => {
      new Drop(el);
    });
  }
}
