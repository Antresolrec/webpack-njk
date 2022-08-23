import Cookies from 'js-cookie';

const myCookie = Cookies.get('pts-website');
const cookieContainer = document.querySelector('.cookies-banner');
const cookieButtons = document.querySelectorAll('.cookies-button');
const cookieEnabled = navigator.cookieEnabled;
const warningBanner = document.querySelector('.warning-banner');

function acceptCookie() {
  cookieContainer.classList.add('cookies-banner--show');
  cookieButtons.forEach((cookieButton) => {
    if (cookieContainer) {
      cookieButton.addEventListener('click', () => {
        cookieContainer.classList.remove('cookies-banner--show');
        Cookies.set('pts-website', 'true', { expires: 2 });
      });
    }
  });
}

function closeCookie() {
  if (cookieContainer) {
    cookieContainer.classList.add('cookies-banner--none');
  }
}

function showMessageWarningBanner() {
  if (warningBanner) {
    warningBanner.classList.add('warning-banner--show');
  }
}

function hideMessageWarningBanner() {
  if (warningBanner) {
    warningBanner.classList.remove('warning-banner--show');
  }
}

function popupWarningCookie() {
  const closeWarning = document.querySelectorAll('.close-cookie-warning');
  setTimeout(() => {
    window.popupInit('.popup_cookie-warning');
  }, 2000);
  closeWarning.forEach((el) => {
    el.addEventListener('click', () => {
      setTimeout(showMessageWarningBanner, 1000);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!myCookie && cookieEnabled) {
    setTimeout(acceptCookie, 1000);
  } else {
    closeCookie();
  }

  if (!cookieEnabled) {
    popupWarningCookie();
  } else {
    hideMessageWarningBanner();
  }
});
