class Drop {
  triggers = document.querySelectorAll('.js-drop');

  class = '_open';

  initClass = '_init';

  constructor() {
    if (this.triggers) {
      this.init();
    }
  }

  closeAll() {
    this.triggers.forEach((el) => el.parentNode.classList.remove(this.class));
  }

  isOpen(el) {
    return el.parentNode.classList.contains(this.initClass);
  }

  addListenerClick(el) {
    if (!this.isOpen(el)) {
      el.addEventListener('click', this.onTriggerClick);
      el.parentNode.classList.add(this.initClass);
    }
  }

  removeListenerClick(el) {
    if (this.isOpen(el)) {
      el.removeEventListener('click', this.onTriggerClick);
      el.parentNode.classList.remove(this.initClass);
    }
  }

  initTriggers() {
    this.triggers.forEach((el) => {
      const initPoint = el.getAttribute('data-init');
      if (initPoint) {
        if (window.innerWidth <= initPoint) {
          this.addListenerClick(el);
        } else {
          this.removeListenerClick(el);
        }
      } else {
        this.addListenerClick(el);
      }
    });
  }

  onTriggerClick(e) {
    e.preventDefault();
    this.isCurOpen = e.currentTarget.parentNode.classList.contains(this.class);
    this.target = e.currentTarget;
    if (this.isCurOpen) {
      this.target.parentNode.classList.remove(this.class);
    } else {
      this.closeAll();
      this.target.parentNode.classList.add(this.class);
    }
  }

  onDocumentClick(e) {
    if (!e.target.closest(`.${this.class}`)) {
      this.closeAll();
    }
  }

  addListeners() {
    window.addEventListener('resize', this.initTriggers);
    document.addEventListener('click', this.onDocumentClick);
  }

  init() {
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.initTriggers = this.initTriggers.bind(this);
    this.initTriggers();
    this.addListeners();
  }
}

export default Drop;
