import AirDatepicker from 'air-datepicker';

const customRangeCalendars = document.querySelectorAll('.js-calendar-range');
customRangeCalendars.forEach((el) => {
  const pickerContainer = el.closest('.form-input');
  const startDate = pickerContainer.querySelector('.js-calendar-start');
  const endDate = pickerContainer.querySelector('.js-calendar-end');
  new AirDatepicker(el, {
    onSelect({ formattedDate }) {
      if (startDate && endDate) {
        startDate.value = formattedDate[0];
        endDate.value = formattedDate[1];
      }
    },
    range: true,
    multipleDatesSeparator: ' - ',
    buttons: ['clear'],
    position: 'bottom right',
  });
});

const customStaticCalendars = document.querySelectorAll('.js-calendar-static');
customStaticCalendars.forEach((el) => {
  new AirDatepicker(el, {
    buttons: ['clear'],
    position: 'bottom right',
  });
});
