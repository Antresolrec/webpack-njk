const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
const submitBtn = document.querySelector('.submit-form-steps');

let formStepsNum = 0;

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    if (formStep.classList.contains('form-step-active')) {
      formStep.classList.remove('form-step-active');
    }
  });

  formSteps[formStepsNum].classList.add('form-step-active');
  prevBtns.forEach((btn) => {
    if (formStepsNum > 0) {
      btn.classList.add('visible');
    } else if (formStepsNum === 0 && btn.classList.contains('visible')) {
      btn.classList.remove('visible');
    }
  });

  if (
    formSteps.length - 1 === formStepsNum &&
    !submitBtn.classList.contains('btn--black')
  ) {
    submitBtn.classList.add('btn--black');
    submitBtn.classList.remove('btn--inactive');
  } else {
    submitBtn.classList.remove('btn--black');
    submitBtn.classList.add('btn--inactive');
  }
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add('progress-step-active');
    } else {
      progressStep.classList.remove('progress-step-active');
    }
  });
}

nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

formSteps.forEach((formStep) => {
  const selectedBtn = formStep.querySelectorAll('.form-step__radio');
  selectedBtn.forEach((btn) => {
    if (btn.querySelector('input').checked) {
      btn.closest('.product-card').classList.add('product-card--selected');
      btn.querySelector('.btn').innerText = 'Выбрано';
    }
    btn.addEventListener('click', (event) => {
      const target = event.currentTarget;
      selectedBtn.forEach((button) => {
        button.querySelector('.btn').innerText = 'Выбрать';
        button
          .closest('.product-card')
          .classList.remove('product-card--selected');
      });
      target.closest('.product-card').classList.add('product-card--selected');
      target.querySelector('.btn').innerText = 'Выбрано';
      target.querySelector('input').checked = true;
    });
  });
});
