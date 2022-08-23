import * as textMaskCore from './module/module';

class PhoneMask {
  constructor(el) {
    this.mask = null;
    this.el = el;

    this.init();
  }

  options() {
    this.mask = textMaskCore.createTextMaskInputElement({
      inputElement: this.el,
      mask: [
        '+',
        '7',
        ' ',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ],
    });
  }

  upd() {
    this.mask.update();
  }

  listener() {
    const THIS = this;
    this.options();
    this.el.addEventListener('input', THIS.upd.bind(THIS));
  }

  init() {
    this.listener();
  }
}

export default PhoneMask;
