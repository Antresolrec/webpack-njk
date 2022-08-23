class InputNumber {
  constructor(inputContainer) {
    this.inputContainer = inputContainer;
    this.quantityLeft = this.inputContainer.querySelector(
      '.calc-product__left-quantity'
    );
    this.input = this.inputContainer
      ? this.inputContainer.querySelector('input')
      : null;
    this.maxValue = this.input.getAttribute('data-max');
    this.minValue = this.input ? this.input.getAttribute('data-min') : 1;
    this.buttonTop = this.inputContainer
      ? this.inputContainer.querySelector('.calc-product__more')
      : null;
    this.buttonBottom = this.inputContainer
      ? this.inputContainer.querySelector('.calc-product__less')
      : null;

    this.init();
  }

  validValue(value) {
    const intValue = parseFloat(value);
    this.maxValue = this.input.getAttribute('data-max');
    this.minValue = this.input ? this.input.getAttribute('data-min') : 1;
    if (!Number.isNaN(intValue)) {
      if (intValue < this.minValue) {
        return this.minValue;
      }

      if (intValue > this.maxValue) {
        this.quantityLeft.innerText = `Остаток: ${this.maxValue} шт`;
        if (!this.inputContainer.classList.contains('has-error')) {
          this.inputContainer.classList.add('has-error');
          setTimeout(() => {
            this.inputContainer.classList.remove('has-error');
          }, 5000);
        }
        return this.maxValue;
      }
      return parseFloat(value);
    }
    return this.minValue;
  }

  getValue() {
    return this.input.value;
  }

  setValue(value) {
    this.input.value = value;
  }

  increment() {
    const value = this.validValue(parseFloat(this.getValue()) + 1);

    this.setValue(value);
  }

  decrement() {
    const value = this.validValue(parseFloat(this.getValue()) - 1);

    this.setValue(value);
  }

  listenerChange() {
    if ('createEvent' in document) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('change', false, true);
      this.input.dispatchEvent(evt);
    } else this.input.fireEvent('onchange');
  }

  addEventListenersButtons() {
    this.buttonTop.addEventListener('click', () => {
      this.increment();
      this.listenerChange();
    });
    this.buttonBottom.addEventListener('click', () => {
      this.decrement();
      this.listenerChange();
    });

    let timeoutButtonTop = null;
    let timeoutButtonBottom = null;

    this.buttonTop.addEventListener('mousedown', () => {
      timeoutButtonTop = setInterval(() => this.increment(), 200);
    });
    document.addEventListener('mouseup', () => {
      clearInterval(timeoutButtonTop);
    });
    this.buttonBottom.addEventListener('mousedown', () => {
      timeoutButtonBottom = setInterval(() => this.decrement(), 200);
    });
    document.addEventListener('mouseup', () => {
      clearInterval(timeoutButtonBottom);
    });
  }

  addEventListenerInput() {
    this.input.addEventListener('input', () => {
      this.input.value = this.validValue(this.input.value);
      this.listenerChange();
    });
  }

  init() {
    this.setValue(this.validValue(this.input.value));
    this.listenerChange();
    this.addEventListenersButtons();
    this.addEventListenerInput();
  }
}

function initCalcProduct(block) {
  if (block != null) {
    const inputNumbers = block.querySelectorAll('.calc-product');
    inputNumbers.forEach((inputNumber) => {
      new InputNumber(inputNumber);
    });
    return true;
  }
  const inputNumbers = document.querySelectorAll('.calc-product');
  inputNumbers.forEach((inputNumber) => {
    new InputNumber(inputNumber);
  });
  return true;
}
initCalcProduct();

window.initCalcProduct = initCalcProduct;
