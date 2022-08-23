function initFilter(e) {
  const target = e.target;
  if (
    target.classList.contains('filter-mobile__trigger') ||
    target.classList.contains('filter-catalog__close')
  ) {
    this.classList.toggle('js-open-filter');
  }
  if (
    !target.closest('.filter-mobile') &&
    !target.closest('.air-datepicker') &&
    !target.closest('.-other-month-') &&
    !target.closest('.-other-year-')
  ) {
    this.classList.remove('js-open-filter');
  }
}

const filterCatalog = document.querySelectorAll('.filter-mobile');
if (filterCatalog) {
  filterCatalog.forEach((el) => {
    window.addEventListener('click', initFilter.bind(el));
  });
}
