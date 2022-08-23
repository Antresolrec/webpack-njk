const tooltipMini = document.querySelector('.tooltip-mini');

function showTooltipMini(title, icon) {
  const titleTooltip = tooltipMini.querySelector('.tooltip-mini__title');
  const iconTooltip = tooltipMini.querySelector('.tooltip-mini__icon');
  function createBody() {
    if (title) {
      titleTooltip.innerText = title;
    }
    if (icon === 'succes') {
      iconTooltip.innerHTML = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0722 23C15.9067 23 15.7479 22.9311 15.6308 22.8085L12.1973 19.2139C12.1362 19.154 12.0873 19.0819 12.0535 19.0018C12.0196 18.9217 12.0014 18.8353 12.0001 18.7478C11.9987 18.6602 12.0142 18.5733 12.0456 18.4921C12.0769 18.4109 12.1236 18.3371 12.1827 18.2752C12.2418 18.2132 12.3122 18.1644 12.3898 18.1315C12.4673 18.0986 12.5503 18.0823 12.634 18.0837C12.7176 18.085 12.8002 18.104 12.8767 18.1394C12.9532 18.1748 13.0221 18.2259 13.0794 18.2898L16.0716 21.4223L23.942 13.1835C24.0597 13.0644 24.2174 12.9985 24.3811 13C24.5448 13.0015 24.7014 13.0702 24.8172 13.1914C24.9329 13.3126 24.9986 13.4765 25 13.6479C25.0014 13.8192 24.9385 13.9843 24.8248 14.1076L16.513 22.8085C16.3961 22.9309 16.2376 22.9998 16.0722 23Z" fill="#A1CDEC"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 34.65C27.1955 34.65 34.65 27.1955 34.65 18C34.65 8.80446 27.1955 1.35 18 1.35C8.80446 1.35 1.35 8.80446 1.35 18C1.35 27.1955 8.80446 34.65 18 34.65ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#A1CDEC"/>
        </svg>
        `;
      iconTooltip.style.display = 'block';
    }
    if (icon === 'warning') {
      iconTooltip.innerHTML = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 34.65C27.1955 34.65 34.65 27.1955 34.65 18C34.65 8.80446 27.1955 1.35 18 1.35C8.80446 1.35 1.35 8.80446 1.35 18C1.35 27.1955 8.80446 34.65 18 34.65ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#797979"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.125 13.25C18.746 13.25 19.25 12.747 19.25 12.125C19.25 11.504 18.746 11 18.125 11C17.503 11 17 11.504 17 12.125C17 12.747 17.503 13.25 18.125 13.25ZM17.125 24.25C17.125 24.802 17.572 25.25 18.125 25.25C18.678 25.25 19.125 24.802 19.125 24.25V17.125C19.125 16.573 18.678 16.125 18.125 16.125C17.572 16.125 17.125 16.573 17.125 17.125V24.25Z" fill="#797979"/>
          </svg>
          `;
      iconTooltip.style.display = 'block';
    }
    if (icon == null) {
      iconTooltip.innerHTML = '';
      iconTooltip.style.display = 'none';
    }
  }
  if (tooltipMini.classList.contains('show')) {
    tooltipMini.classList.remove('show');
    setTimeout(() => {
      createBody();
      tooltipMini.classList.add('show');
    }, 500);
  } else {
    createBody();
    tooltipMini.classList.add('show');
  }
}

function hideTooltipMini() {
  if (tooltipMini.classList.contains('show')) {
    tooltipMini.classList.remove('show');
  }
}
if (tooltipMini) {
  const iconClose = tooltipMini.querySelector('.tooltip-mini__close');
  iconClose.addEventListener('click', hideTooltipMini);
}

window.showTooltipMini = showTooltipMini;
window.hideTooltipMini = hideTooltipMini;

export default showTooltipMini;
