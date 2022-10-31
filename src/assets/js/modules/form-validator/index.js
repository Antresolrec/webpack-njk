import Form from './form';

export default function initForm() {
  const forms = document.querySelectorAll('.js-form');

  forms.forEach((form) => {
    new Form(form);
  });
}
