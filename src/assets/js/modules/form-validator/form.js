import Field from './fields';

class Form {
  constructor(form) {
    this.form = form;
    this.fields = [];
    this.submit = this.form.querySelector('.js-form__submit');
    if (this.form) {
      this.init();
    }
  }

  /** @private */
  init() {
    this.initFields();
    this.addEventListeners();
    this.setGlobalMethodsForm();
    this.submitForm();
    // this.validateSubmitButton();
  }

  /** @private */
  initFields() {
    const inputs = this.form.querySelectorAll('[data-required]');
    inputs.forEach((item) => {
      this.fields.push(new Field(item));
    });
  }

  /** @private */
  addEventListeners() {
    this.form.addEventListener('submit', (e) => {
      if (!this.validationForm()) {
        e.preventDefault();
      }
    });
  }

  /** @private */
  submitForm() {
    if (this.submit) {
      this.submit.addEventListener('click', () => {
        if (this.validationForm()) {
          this.form.requestSubmit();
        }
      });
    }
  }

  validateSubmitButton() {
    if (this.submit) {
      this.form.addEventListener('change', () => {
        if (this.validationForm()) {
          this.submit.classList.remove('_inactive-submit');
        } else {
          this.submit.classList.add('_inactive-submit');
        }
      });
    }
  }

  /** @private */
  setGlobalMethodsForm() {
    const self = this;
    this.form.validationForm = () => self.validationForm();
    this.form.resetValidationForm = () => self.resetValidationForm();
  }

  validationForm() {
    return this.fields.reduce((accumulator, field) => {
      const resultValiudation = field.validation();
      return accumulator ? resultValiudation : false;
    }, true);
  }

  resetValidationForm() {
    this.fields.forEach((field) => {
      field.removeError();
    });
  }
}

export default Form;
