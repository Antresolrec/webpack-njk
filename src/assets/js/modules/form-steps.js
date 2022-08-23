/* eslint-disable */

class FormStep {
  constructor(propElement = null, propurrentStepIdx = 0) {
    this.element = propElement;
    this.steps = [...this.element.querySelectorAll('.js-step')];
    this.formControls = [...this.element.querySelectorAll('.js-form-control')];
    this.btnNext = this.element.querySelector('.js-btn-next');
    this.progressBar = this.element.querySelector('.js-progress-bar');
    this.currentStepIdx = propurrentStepIdx;

    this.init();
  }

  init() {
    this.showStep(this.currentStepIdx);
    
    this.addEvents();
  }

  showStep(propStepIdx = 0) {
    const stepIdx = propStepIdx;

    this.steps[stepIdx].classList.add('is-active');
    if (this.steps.length >= 2) {
      this.btnNext.classList.add('btn--inactive');
      this.btnNext.innerText = this.btnNext.dataset[
        stepIdx === this.steps.length - 1 ? 'finalStepText' : 'stepText'
      ];
    } else {
      this.btnNext.classList.remove('btn--inactive');
    }
    if (this.progressBar) {
      this.updateProgressBar(stepIdx);
    }
  }

  stepNext(propValue = 0) {
    const value = propValue;

    if (value === 1 && !this.validate()) {
      this.element.classList.add('has-error')
      return false;
    }

    this.steps[this.currentStepIdx].classList.remove('is-active');
    this.currentStepIdx += value;

    if (this.currentStepIdx >= this.steps.length) {
      this.formControls.forEach((el) => {
        if (el.classList.contains('js-select') && el.hasAttribute('disabled')) {
          el.removeAttribute('disabled');
        }
      })
      this.element.submit();
      return false;
    }

    this.showStep(this.currentStepIdx);
  }

  validate() {
    const currentStepRequiredElements = [
      ...this.steps[this.currentStepIdx].querySelectorAll('[data-validate]'),
    ];

    let valid = true;

    for (let element of currentStepRequiredElements) {
      const dataValidate = element.getAttribute('data-validate');
      const inputBox =  element.closest('.js-input-validate');
      switch (dataValidate) {
        case 'text':
            if (element.value === '' || element.value.trim() === '') {
                inputBox.classList.add('has-error');
                valid = false;
            }
            break
        case 'phone':
            if (element.value === "" || element.value.indexOf('_') !== -1) {
                inputBox.classList.add('has-error');
                valid = false;
            }
            break
        case 'email':
            let patternEmail = /^[0-9a-z]([\.-]?\w+)*@[0-9a-z]([\.-]?[0-9a-z])*(\.[0-9a-z]{2,4})+$/;
            let message = inputBox.querySelector('.form-input__error')
            if (element.value === '') {
                inputBox.classList.add('has-error');
                valid = false;
            }
            if (element.value.toLowerCase().search(patternEmail) !== 0) {
                message.innerHTML = 'Email должен быть действительным'
                inputBox.classList.add('has-error');
                valid = false;
            }
            break
        case 'checkbox':
            if (element.checked === false) {
                inputBox.classList.add('has-error');
                valid = false;
            }
            break
        case 'pass':
            if (element.value === '') {
                inputBox.classList.add('has-error');
                valid = false;
            }
            break
        case 'new-pass-repeat':
            if (element.value === '' || element.value !== this.steps[this.currentStepIdx].querySelector('.js-form-control-password').value) {
                inputBox.classList.add('has-error');
                valid = false;
            }
            break
      }
    }
    return valid;
  }

  checkStep(el) {
    if (el.closest('.js-input-validate').classList.contains('has-error')) {
      el.closest('.js-input-validate').classList.remove('has-error');
    }

    const currentStepRequiredElements = [
      ...this.steps[this.currentStepIdx].querySelectorAll('[data-required-for-open-btn]'),
    ];
    for (let element of currentStepRequiredElements) {
      const elementType = element.getAttribute('type');
      if ((elementType !== 'checkbox' || elementType !== 'radio') && (element.value === '' || element.value.trim() === '')) {
        this.btnNext.classList.add('btn--inactive');
        return true;
      }
      this.btnNext.classList.remove('btn--inactive');
    }
    for (let index = 0; index < currentStepRequiredElements.length; index++) {
      const element = currentStepRequiredElements[index];
      const elementType = element.getAttribute('type');
      if (elementType === 'checkbox' || elementType === 'radio') {
        if (element.checked === true) {
          this.btnNext.classList.remove('btn--inactive');
          return false;
        }
        this.btnNext.classList.add('btn--inactive');
      }
    }
    return false;
  }

  updateProgressBar(propStepIdx = 0) {
    propStepIdx++;
    this.progressBar.innerText = `${propStepIdx}/${this.steps.length}`;
  }

  addEvents() {
    for (const formControl of this.formControls) {
      formControl.addEventListener('keyup', () => {
        this.checkStep(formControl)
      });
      formControl.addEventListener('change', () => {
        this.checkStep(formControl)
      });
      this.checkStep(formControl);
    }
    this.btnNext.addEventListener('click', this.stepNext.bind(this, 1));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.formStepsObjs = {};

  const formSteps = [...document.querySelectorAll('.js-form-steps')];

  if (formSteps.length) {
    for (const formStep of formSteps) {
      formStepsObjs[formStep.id] = new FormStep(formStep);
    }
  }
});
/* eslint-enable */
