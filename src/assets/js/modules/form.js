// инпут поиск начало
window.addEventListener('click', (e) => {
  const searchTarget = e.target;
  if (searchTarget.classList.contains('form-result__item')) {
    const searchBox = searchTarget.closest('.form-input-search');
    const searchField = searchBox.querySelector('.form-input input');
    const searchValue = searchTarget.textContent;
    searchField.value = searchValue;
  }
  if (searchTarget.classList.contains('js-delete-input')) {
    const parent = searchTarget.closest('.form-input');
    const input = parent.querySelector('input');
    const icon = parent.querySelector('.js-delete-input');
    input.value = '';
    icon.classList.add('hide');
  }
  if (!searchTarget.classList.contains('form-input-search')) {
    const searchList = document.querySelectorAll('.form-result');
    searchList.forEach((list) => {
      list.classList.remove('show');
    });
  }
  const inputSearch = document.querySelectorAll('.form-input-search');
  if (inputSearch) {
    inputSearch.forEach((parent) => {
      const input = parent.querySelector('.form-input input');
      const searchList = parent.querySelector('.form-result');
      const icon = parent.querySelector('.js-delete-input');
      input.addEventListener('input', () => {
        if (input.value !== '') {
          searchList.classList.add('show');
          icon.classList.remove('hide');
        } else {
          searchList.classList.remove('show');
        }
      });
    });
  }
});
// инпут поиск конец

// летающий плейсхолдер начало
function addLabel(label, input) {
  if (input.value === '' || input.value) {
    label.classList.add('js-move-label--active');
  } else {
    label.classList.remove('js-move-label--active');
  }
}

function removeLabel(label, input) {
  if (input.value === '') {
    label.classList.remove('js-move-label--active');
  }
}

function checkLabel(label, input) {
  if (input.value) {
    label.classList.add('js-move-label--active');
  }
}

const moveLabels = document.querySelectorAll('.js-move-label');

document.addEventListener('DOMContentLoaded', () => {
  if (moveLabels) {
    moveLabels.forEach((label) => {
      const input = label.querySelector(
        'input:not([type="hidden"]), textarea, select'
      );
      input.addEventListener('focus', () => {
        addLabel(label, input);
      });
      input.addEventListener('input', () => {
        addLabel(label, input);
      });
      input.addEventListener('change', () => {
        addLabel(label, input);
        removeLabel(label, input);
      });
      input.addEventListener('blur', () => {
        removeLabel(label, input);
      });
      checkLabel(label, input);
    });
  }
});
// летающий плейсхолдер конец

// скрытые поля для селекта начало
const openOptions = document.querySelectorAll('[data-req-for-open-fields]');
if (openOptions) {
  openOptions.forEach((option) => {
    const form = option.closest('form');
    form.addEventListener('change', () => {
      const attrOption = option.getAttribute('data-req-for-open-fields');
      const fields = document.querySelectorAll(
        `[data-open-field='${attrOption}']`
      );
      if (option.selected || option.checked) {
        fields.forEach((field) => {
          field.classList.remove('field-close');
          field.classList.add('field-open');
        });
      } else {
        fields.forEach((field) => {
          field.classList.remove('field-open');
          field.classList.add('field-close');
        });
      }
      const optionParent = option.closest('[data-open-field]');
      if (optionParent) {
        if (optionParent.classList.contains('field-close')) {
          const fieldChild = document.querySelectorAll(
            `[data-open-field='${attrOption}']`
          );
          fieldChild.forEach((el) => {
            el.classList.remove('field-open');
            el.classList.add('field-close');
          });
        }
      }
    });
  });
}
// скрытые поля для селекта конец

// форма + валидация + отправка начало
const forms = document.querySelectorAll('.js-form');

function validationGroupCheckbox(group) {
  const quantityCheckbox = group.getAttribute('data-quantity');
  const fields = group.querySelectorAll('[data-validate]');
  let counter = 0;

  fields.forEach((item) => {
    if (item.checked) {
      counter++;
    }
  });

  return counter < quantityCheckbox;
}

function validationField(field) {
  const parent = field.parentNode;
  const errorClass = 'has-error';
  const dataValidate = field.getAttribute('data-validate');
  const patternEmail =
    /^[0-9a-z]([.-]?\w+)*@[0-9a-z]([.-]?[0-9a-z])*(\.[0-9a-z]{2,4})+$/;
  const message = field.parentNode.querySelector('.form-input__error');
  const newPassBlock = field.closest('.form__items--pass');

  switch (dataValidate) {
    case 'text':
      if (field.value === '') {
        parent.classList.add(errorClass);
        return false;
      }
      break;
    case 'file':
      if (!field.value) {
        parent.classList.add(errorClass);
        return false;
      }
      break;
    case 'phone':
      if (field.value === '' || field.value.indexOf('_') !== -1) {
        parent.classList.add(errorClass);
        return false;
      }
      break;
    case 'email':
      if (field.value === '') {
        message.innerHTML = 'Поле заполнено некорректно';
        parent.classList.add(errorClass);
        return false; // test
      }
      if (field.value.toLowerCase().search(patternEmail) !== 0) {
        message.innerHTML = 'Поле E-mail должно быть действительным';
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'radio':
      if (field.checked === false) {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'checkbox':
      if (field.checked === false) {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'group-checkbox':
      if (validationGroupCheckbox(field)) {
        field.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'pass':
      if (field.value === '') {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'new-pass-repeat':
      if (
        field.value === '' ||
        field.value !== newPassBlock.querySelector('.input--new-pass').value
      ) {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    default:
      return true;
  }
  return true;
}

function editForm(form) {
  const fields = form.querySelectorAll('input, textarea');
  const selects = form.querySelectorAll('.js-form select');
  form.classList.add('is-edditable');
  selects.forEach((el) => {
    el.slim.enable();
  });
  fields.forEach((field) => {
    field.removeAttribute('disabled', '');
  });
}

function saveForm(form) {
  form.classList.remove('is-edditable');
  const fields = form.querySelectorAll('input, textarea');
  const selects = form.querySelectorAll('.js-form select');
  selects.forEach((el) => {
    el.slim.disable();
  });
  fields.forEach((field) => {
    field.setAttribute('disabled', '');
  });
}

function resetForm(form) {
  const groupCheckboxex = form.querySelectorAll('.checkbox-group');
  const lables = form.querySelectorAll('.js-move-label');
  const fields = form.querySelectorAll('input, textarea');
  const selects = form.querySelectorAll('select');
  if (lables) {
    lables.forEach((label) => {
      label.classList.remove('js-move-label--active');
      label.classList.remove('has-error');
    });
  }
  if (selects) {
    selects.forEach((el) => {
      const option = el.querySelector('[data-default-value]');
      if (option) {
        const optionValue = option.value;
        el.slim.set(optionValue);
        const selectMoveLabel = option.closest('.js-move-label');
        if (selectMoveLabel) {
          selectMoveLabel.classList.add('js-move-label--active');
        }
      } else {
        el.slim.set();
      }
    });
  }
  if (groupCheckboxex) {
    groupCheckboxex.forEach((groupCheckbox) => {
      groupCheckbox.classList.remove('has-error');
      // const checkboxes = groupCheckbox.querySelectorAll('input');
      // checkboxes.forEach((checkbox) => {
      //   checkbox.removeAttribute('checked');
      // });
    });
  }

  fields.forEach((field) => {
    field.value = '';
    // field.removeAttribute('checked');
  });
}

function openBtn(btnSubmit, fieldsCheckbox, fieldsNotCeckbox) {
  for (let index = 0; index < fieldsCheckbox.length; index++) {
    const field = fieldsCheckbox[index];
    btnSubmit.forEach((btn) => {
      btn.classList.add('btn--inactive');
    });
    if (field.checked) {
      btnSubmit.forEach((btn) => {
        btn.classList.remove('btn--inactive');
      });
      return false;
    }
  }
  for (let index = 0; index < fieldsNotCeckbox.length; index++) {
    const field = fieldsNotCeckbox[index];
    btnSubmit.forEach((btn) => {
      btn.classList.add('btn--inactive');
    });
    if (field.value !== '') {
      btnSubmit.forEach((btn) => {
        btn.classList.remove('btn--inactive');
      });
      return false;
    }
  }
  return false;
}

forms.forEach((form) => {
  form.addEventListener('reset', () => {
    resetForm(form);
  });

  const fieldsCheckboxes = form.querySelectorAll(
    '[data-validate="checkbox"], [data-validate="group-checkbox-unit"]'
  );
  const fieldsNotCeckboxes = form.querySelectorAll(
    '[data-validate]:not([data-validate="checkbox"], [data-validate="group-checkbox-unit"], [data-validate="group-checkbox"])'
  );
  const btnSubmit = form.querySelectorAll('button[type="submit"]');
  if ((fieldsCheckboxes || fieldsNotCeckboxes) && btnSubmit) {
    form.addEventListener('change', () => {
      openBtn(btnSubmit, fieldsCheckboxes, fieldsNotCeckboxes);
    });
  }

  const editSection = form.querySelectorAll('.js-edit');
  if (editSection) {
    editSection.forEach((item) => {
      const btnCancel = item.querySelector('.js-edit__cancel');
      const btnEdit = item.querySelector('.js-edit__edit');
      const btnSave = item.querySelector('.js-edit__save');
      if (btnEdit) {
        btnEdit.addEventListener('click', () => {
          editForm(item);
        });
      }
      if (btnSave) {
        btnSave.addEventListener('click', () => {
          saveForm(item);
        });
      }
      if (btnCancel) {
        btnCancel.addEventListener('click', () => {
          resetForm(item);
          saveForm(item);
        });
      }
    });
  }
  const editSimple = form.querySelectorAll('.js-edit-simple');
  if (editSimple) {
    form.addEventListener('change', () => {
      editSimple.forEach((item) => {
        const inputs = item.querySelectorAll('input, textarea, select');
        for (let index = 0; index < inputs.length; index++) {
          const field = inputs[index];
          btnSubmit.forEach((btn) => {
            btn.classList.add('btn--inactive');
          });
          if (field.value !== '') {
            btnSubmit.forEach((btn) => {
              btn.classList.remove('btn--inactive');
            });
            return false;
          }
        }
        return false;
      });
    });
  }
  // form.send = function () {
  //   const fields = this.querySelectorAll('*[data-validate]');
  //   const validationArray = [];
  //   let messageTitle = this.querySelector('.js-form__message-title');
  //   let messageText = this.querySelector('.js-form__message-text');

  //   messageTitle = messageTitle ? messageTitle.innerHTML.trim() : '';
  //   messageText = messageText ? messageText.innerHTML.trim() : '';

  //   fields.forEach((item) => {
  //     const parent = item.parentNode;
  //     item.classList.remove('has-error');
  //     parent.classList.remove('has-error');
  //     validationArray.push(validationField(item));
  //   });

  //   if (!validationArray.includes(false, 0)) {
  //     const data = new FormData(this);
  //     const ajax = new XMLHttpRequest();
  //     const type = 'post';
  //     const action = this.getAttribute('action') || window.location.href;

  //     ajax.open(type, action);

  //     if (type.toLowerCase() === 'post') {
  //       ajax.addEventListener('load', () => {
  //         if (ajax.status === 200) {
  //           if (ajax.response) {
  //             try {
  //               const obj = JSON.parse(ajax.response);
  //               if (obj.reload === 'y') {
  //                 document.location.reload();
  //                 // console.log('reload')
  //               } else if (obj.message || obj.title) {
  //                 popupOpen(
  //                   obj.title ? obj.title : '',
  //                   obj.message ? obj.message : ''
  //                 );
  //               } else {
  //                 popupOpen(messageTitle, messageText);
  //               }
  //             } catch (e) {
  //               console.log(e);
  //               popupOpen(messageTitle, messageText, true);
  //             }
  //           } else {
  //             popupOpen(messageTitle, messageText, true);
  //           }
  //         } else {
  //           // callback ошибки на сервере
  //           // self._callbackError();
  //           popupOpen('Ошибка сервера', 'Повторите попытку позже', true);
  //         }
  //       });

  //       ajax.send(data);
  //     }
  //   }
  // };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fields = this.querySelectorAll(
      '*[data-validate]:not(.js-tabs-form .js-tabs__block [data-validate], .field-close [data-validate]), .js-tabs-form .js-tabs__block.open [data-validate]'
    );
    const validationArray = [];
    // let messageTitle = this.querySelector('.js-form__message-title');
    // let messageText = this.querySelector('.js-form__message-text');

    // messageTitle = messageTitle ? messageTitle.innerHTML.trim() : '';
    // messageText = messageText ? messageText.innerHTML.trim() : '';

    fields.forEach((item) => {
      const parent = item.parentNode;
      item.classList.remove('has-error');
      parent.classList.remove('has-error');
      validationArray.push(validationField(item));
    });

    if (!validationArray.includes(false, 0)) {
      fields.forEach((item) => {
        if (item.hasAttribute('disabled')) {
          item.removeAttribute('disabled');
        }
      });
      const disabledFields = this.querySelectorAll(
        '.js-tabs-form [data-validate]:not(.js-tabs__block.open [data-validate]), .field-close [data-validate]'
      );
      if (disabledFields) {
        disabledFields.forEach((field) => {
          field.setAttribute('disabled', '');
        });
      }
      form.submit();
      return false;
      // const data = new FormData(this);
      // const ajax = new XMLHttpRequest();
      // const type = 'post';
      // const action = this.getAttribute('action') || window.location.href;

      // ajax.open(type, action);

      // if (type.toLowerCase() === 'post') {
      //   ajax.addEventListener('load', () => {
      //     if (ajax.status === 200) {
      //       // callback успешной отправки
      //       // self._callbackDone();
      //       popupOpen(messageTitle, messageText);
      //     } else {
      //       // callback ошибки на сервере
      //       // self._callbackError();
      //       popupOpen('Ошибка сервера', 'Повторите попытку позже');
      //     }
      //   });

      //   ajax.send(data);
      // }
    }
    return false;
  });
});
// форма + валидация + отправка конец

// сервис претензия форма шаги начало
const serviceForm = document.querySelector('.js-form-service-steps');
if (serviceForm) {
  const serviceSteps = serviceForm.querySelectorAll('.form-service-step');
  serviceSteps.forEach((step) => {
    const btnForm = step.querySelectorAll('.form-service-step__btn');
    const fieldsCheckboxes = step.querySelectorAll(
      '[data-validate="checkbox"], [data-validate="group-checkbox-unit"]'
    );
    const fieldsNotCeckboxes = step.querySelectorAll(
      '[data-validate]:not([data-validate="checkbox"], [data-validate="group-checkbox-unit"], [data-validate="group-checkbox"])'
    );
    if ((fieldsCheckboxes || fieldsNotCeckboxes) && btnForm) {
      step.addEventListener('change', () => {
        openBtn(btnForm, fieldsCheckboxes, fieldsNotCeckboxes);
      });
    }
    const openSteps = step.querySelectorAll('[data-req-for-open-step]');
    if (openSteps) {
      openSteps.forEach((openStep) => {
        openStep.addEventListener('click', (e) => {
          e.preventDefault();
          const fields = step.querySelectorAll(
            '*[data-validate]:not(.field-close [data-validate])'
          );
          const validationArray = [];
          fields.forEach((item) => {
            const parent = item.parentNode;
            item.classList.remove('has-error');
            parent.classList.remove('has-error');
            validationArray.push(validationField(item));
          });
          if (!validationArray.includes(false, 0)) {
            openStep.closest('.form-service-step').classList.add('succes');
            const disableChoice = openStep.closest(
              '.form-service-step-initial.succes'
            );
            if (disableChoice) {
              const disabledRadio = disableChoice.querySelectorAll(
                'input[type="radio"]'
              );
              disabledRadio.forEach((radio) => {
                radio.setAttribute('disabled', '');
              });
            }
            const attrStep = openStep.getAttribute('data-req-for-open-step');
            const sections = document.querySelectorAll(
              `[data-open-step='${attrStep}']`
            );
            sections.forEach((section) => {
              section.classList.remove('is-close');
              section.classList.add('is-active');
              const sectionAttr = section.getAttribute('data-open-step');
              if (sectionAttr === 'final-step') {
                section.classList.add('succes');
              }
            });
          }
        });
      });
    }
  });
  serviceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = serviceForm.querySelectorAll(
      '[data-validate]:not(.field-close [data-validate]'
    );
    const validationArray = [];
    fields.forEach((item) => {
      const parent = item.parentNode;
      item.classList.remove('has-error');
      parent.classList.remove('has-error');
      validationArray.push(validationField(item));
    });
    if (!validationArray.includes(false, 0)) {
      fields.forEach((item) => {
        if (item.hasAttribute('disabled')) {
          item.removeAttribute('disabled');
        }
      });
      const disabledFields = serviceForm.querySelectorAll(
        '.field-close [data-validate]'
      );
      if (disabledFields) {
        disabledFields.forEach((field) => {
          field.setAttribute('disabled', '');
        });
      }
      serviceForm.submit();
      return false;
    }
    return false;
  });
}
// сервис претензия форма шаги конец
