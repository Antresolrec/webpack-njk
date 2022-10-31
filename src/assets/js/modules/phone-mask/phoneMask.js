import * as textMaskCore from './module/module';

class InputMask {
  constructor(el) {
    this.el = el;
    this.time = el.hasAttribute('data-time');
    this.inited = false;
    this.mask = null;

    this.init();
  }

  optionsPhone() {
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

  optionsTime() {
    this.mask = textMaskCore.createTextMaskInputElement({
      inputElement: this.el,
      mask: [/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/],
    });
  }

  upd() {
    this.mask.update();
  }

  listener() {
    if (this.time) {
      this.optionsTime();
    } else {
      this.optionsPhone();
    }
    this.upd = this.upd.bind(this);
    this.el.addEventListener('input', this.upd);
    this.el.classList.add('_mask-inited');
    this.inited = true;
  }

  init() {
    this.listener();
  }
}

export default function initInputMask() {
  const maskElems = document.querySelectorAll(
    '.js-phone-mask:not(._mask-inited)'
  );
  if (maskElems) {
    maskElems.forEach((el) => {
      new InputMask(el);
    });
  }
}
