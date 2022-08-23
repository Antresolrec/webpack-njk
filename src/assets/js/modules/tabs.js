// const tabs = document.querySelectorAll('.js-tabs');

// tabs.forEach((tab) => {
//   const tabsTriggers = tab.querySelectorAll('.js-tabs__trigger');
//   const tabsBlocks = tab.querySelectorAll('.js-tabs__block');
//   for (let index = 0; index < tabsTriggers.length; index++) {
//     const tabsTrigger = tabsTriggers[index];
//     tabsTrigger.addEventListener('click', (e) => {
//       for (let i = 0; i < tabsTriggers.length; i++) {
//         const tabsTitle = tabsTriggers[i];
//         tabsTitle.classList.remove('open');
//         tabsBlocks[i].classList.remove('open');
//       }
//       tabsTrigger.classList.add('open');
//       tabsBlocks[index].classList.add('open');
//       e.preventDefault();
//     });
//   }
// });

class Tabs {
  constructor(el) {
    this.triggers = el.querySelectorAll('.js-tabs__trigger');
    this.blocks = el.querySelectorAll('.js-tabs__block');
    this.trigger = null;
    this.closedTrigger = null;
    this.class = '_open';

    if (el) {
      this.init();
    }
  }

  options() {
    for (let index = 0; index < this.triggers.length; index++) {
      this.trigger = this.triggers[index];
      this.listener(this.trigger, index);
      this.checkOpen(this.trigger, index);
    }
  }

  toggleClass(el, state) {
    el.classList.remove(this.class);
    if (state) {
      el.classList.add(this.class);
    }
  }

  checkOpen(trigger, index) {
    if (trigger.classList.contains(this.class)) {
      this.toggleClass(this.blocks[index], true);
    }
  }

  listener(trigger, index) {
    trigger.addEventListener('click', (e) => {
      for (let i = 0; i < this.triggers.length; i++) {
        this.closedTrigger = this.triggers[i];
        this.toggleClass(this.closedTrigger);
        this.toggleClass(this.blocks[i]);
      }
      trigger.classList.add(this.class);
      this.toggleClass(this.blocks[index], true);
      e.preventDefault();
    });
  }

  init() {
    this.options();
  }
}

export default Tabs;
