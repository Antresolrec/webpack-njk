import wnumb from 'wnumb';
import noUiSlider from '../../../../node_modules/nouislider/dist/nouislider';

const priceSlider = document.querySelector('[data-range-price]');
const priceStart = document.querySelector('[data-range-from]');
const priceEnd = document.querySelector('[data-range-to]');

function testValue() {
  if (this.value === '') {
    this.value = '0';
  } else if (parseInt(this.value, 10) > parseInt(priceSlider.dataset.max, 10)) {
    this.value = priceSlider.dataset.max;
  }
}

function setPriceValues() {
  this.value = `${parseInt(this.value, 10)}`;
  priceSlider.noUiSlider.set([priceStart.value, priceEnd.value]);
}

if (priceSlider) {
  noUiSlider.create(priceSlider, {
    start: [
      parseInt(priceSlider.dataset.start, 10),
      parseInt(priceSlider.dataset.end, 10),
    ],
    connect: true,
    format: wnumb({
      decimals: 0,
    }),
    step: 1,
    range: {
      min: [parseInt(priceSlider.dataset.min, 10)],
      max: [parseInt(priceSlider.dataset.max, 10)],
    },
  });

  priceStart.addEventListener('input', setPriceValues);
  priceEnd.addEventListener('input', setPriceValues);
  priceStart.addEventListener('change', testValue);
  priceEnd.addEventListener('change', testValue);

  priceSlider.noUiSlider.on('slide', (values) => {
    priceStart.value = values[0];
    priceEnd.value = values[1];
  });
  const startValue = priceSlider.noUiSlider.get();
  priceStart.value = startValue[0];
  priceEnd.value = startValue[1];
}
