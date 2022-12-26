class Field {
  constructor(field) {
    this.field = field;
    this.errorClass = '_error';
    this.correctClass = '_correct';
    this.patternEmail =
      /^[0-9a-z]([.-]?\w+)*@[0-9a-z]([.-]?[0-9a-z])*(\.[0-9a-z]{2,4})+$/;
    this.init();
  }

  /** @private */
  init() {
    this.addEventListeners();
  }

  /** @private */
  addEventListeners() {
    this.field.addEventListener('focus', this.removeError.bind(this));
    this.field.addEventListener('change', this.removeError.bind(this));
    this.field.addEventListener('blur', this.validation.bind(this));
  }

  addError() {
    this.field.classList.add(this.errorClass);
  }

  removeError() {
    this.field.classList.remove(this.errorClass);
  }

  addCorrectMessage() {
    this.field.classList.add(this.correctClass);
  }

  removeCorrectMessage() {
    this.field.classList.remove(this.correctClass);
  }

  validation() {
    switch (this.field.getAttribute('data-required')) {
      case 'text':
        if (this.field.value) {
          this.removeError();
          this.addCorrectMessage();
          return true;
        }
        break;
      case 'checkbox':
        if (this.field.checked) {
          this.removeError();
          this.addCorrectMessage();
          return true;
        }
        break;
      case 'tel':
        if (this.field.value !== '' && this.field.value.indexOf('_') === -1) {
          this.removeError();
          this.addCorrectMessage();
          return true;
        }
        break;
      case 'email':
        if (this.field.value.toLowerCase().search(this.patternEmail) === 0) {
          this.removeError();
          this.addCorrectMessage();
          return true;
        }
        break;
      case 'file':
        if (this.field.value) {
          this.removeError();
          this.addCorrectMessage();
          return true;
        }
        break;
      default:
        this.addCorrectMessage();
        return true;
    }
    this.removeCorrectMessage();
    this.addError();
    return false;
  }
}

export default Field;
