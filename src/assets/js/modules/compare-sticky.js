function scrollCompare() {
  const compareSlider = document.querySelector('.js-sticky');
  if (compareSlider) {
    const coordScroll = window.pageYOffset;
    const coordSlider =
      compareSlider.getBoundingClientRect().bottom -
      compareSlider.getBoundingClientRect().height / 2;

    compareSlider.setAttribute('data-offset-top', coordSlider);
    if (compareSlider) {
      if (coordSlider < coordScroll) {
        compareSlider.classList.add('js-sticky-scroll');
      } else {
        compareSlider.classList.remove('js-sticky-scroll');
      }
    }
  }
}

window.addEventListener('scroll', scrollCompare);
// window.addEventListener('resize', initSticky);
// document.addEventListener('DOMContentLoaded', initSticky);

// const compareSlider = document.querySelector('.js-sticky');
// const coordSlider =
//   compareSlider.getBoundingClientRect().bottom -
//   compareSlider.getBoundingClientRect().height / 2;

// function initSticky() {
//   compareSlider.setAttribute('data-offset-top', coordSlider);
// }

// function scrollCompare() {
//   const coordScroll = window.pageYOffset;
//   if (compareSlider) {
//     if (coordSlider < coordScroll) {
//       compareSlider.classList.add('js-sticky-scroll');
//     } else {
//       compareSlider.classList.remove('js-sticky-scroll');
//     }
//   }
// }

// window.addEventListener('scroll', scrollCompare);
// window.addEventListener('resize', initSticky);
// document.addEventListener('DOMContentLoaded', initSticky);
