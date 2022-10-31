import SlimSelect from 'slim-select/';

class Select {
  constructor() {
    this.selects = document.querySelectorAll('.js-select');
    this.slimSelect = null;

    if (this.selects) {
      this.init();
    }
  }

  create(el) {
    this.slimSelect = new SlimSelect({
      select: el,
      showSearch: false,
      hideSelectedOption: true,
    });
  }

  init() {
    this.selects.forEach((el) => {
      this.create(el);
    });
  }
}

export default Select;
