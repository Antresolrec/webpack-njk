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
  constructor() {
    this.tabs = document.querySelectorAll('.js-tabs:not(._inited)');
    this.openClass = '_open';
    this.initClass = '_inited';
    this.trigger = null;
    this.closedTrigger = null;

    if (this.tabs) {
      this.init();
    }
  }

  options() {
    this.tabs.forEach((tab) => {
      tab.classList.add(this.initClass);
      this.triggers = tab.querySelectorAll('.js-tabs__trigger');
      this.blocks = tab.querySelectorAll('.js-tabs__block');

      for (let index = 0; index < this.triggers.length; index++) {
        this.trigger = this.triggers[index];
        this.listener(this.trigger, this.blocks, index);
        this.checkOpen(this.trigger, this.blocks, index);
      }
    });
  }

  toggleClass(el, state) {
    el.classList.remove(this.openClass);
    if (state) {
      el.classList.add(this.openClass);
    }
  }

  checkOpen(trigger, blocks, index) {
    if (trigger.classList.contains(this.openClass)) {
      this.toggleClass(blocks[index], true);
    }
  }

  listener(trigger, blocks, index) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      for (let i = 0; i < this.triggers.length; i++) {
        this.closedTrigger = this.triggers[i];
        this.toggleClass(this.closedTrigger);
        this.toggleClass(blocks[i]);
      }

      trigger.classList.add(this.openClass);
      this.toggleClass(blocks[index], true);
    });
  }

  init() {
    this.options();
  }
}

export default Tabs;
