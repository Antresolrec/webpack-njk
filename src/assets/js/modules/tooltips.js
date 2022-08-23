import tippy from 'tippy.js';

const menus = document.querySelectorAll('.tooltip-menu__hover');

menus.forEach((menu) => {
  const parentMenu = menu.parentNode;
  tippy(parentMenu, {
    content: menu,
    interactive: true,
    placement: menu.getAttribute('data-tippy-placement')
      ? menu.getAttribute('data-tippy-placement')
      : 'top',
    theme: menu.getAttribute('data-tippy-theme'),
    appendTo: () => document.body,
  });
});

const tooltips = document.querySelectorAll('.tooltip-tippy');

tooltips.forEach((tooltip) => {
  tippy(tooltip, {
    content: tooltip.getAttribute('data-tippy-content'),
    placement: tooltip.getAttribute('data-tippy-placement')
      ? tooltip.getAttribute('data-tippy-placement')
      : 'top',
    theme: tooltip.getAttribute('data-tippy-theme'),
  });
});
