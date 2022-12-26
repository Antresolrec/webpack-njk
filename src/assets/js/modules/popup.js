import { Fancybox } from '@fancyapps/ui';

class Popup {
  constructor() {
    this.fancybox = Fancybox;
    this.popupSelector = '.js-popup-trigger[data-fancybox]';
    this.gallerySelector = '.js-gallery-trigger[data-fancybox]';
    this.mobilePopup = document.querySelectorAll('.popup[data-mobile-close]');

    if (this.fancybox) {
      this.init();
    }

    if (this.mobilePopup) {
      this.checkRezise();
    }
  }

  initPopup() {
    this.fancybox.bind(this.popupSelector, {
      mainClass: 'js-popup',
      groupAttr: false,
      Toolbar: false,
      closeButton: 'inside',
      dragToClose: false,
      autoFocus: false,
    });
  }

  initGallery() {
    this.fancybox.bind(this.gallerySelector, {
      mainClass: 'js-gallery',
      Toolbar: false,
      closeButton: 'top',
      dragToClose: false,
      Thumbs: false,
      Image: {
        zoom: false,
        wheel: false,
        click: false,
      },
    });
  }

  checkRezise() {
    window.addEventListener('resize', this.closeMobile.bind(this));
  }

  closeMobile() {
    this.mobilePopup.forEach((el) => {
      if (
        window.innerWidth >= el.dataset.mobileClose &&
        el.closest('.js-popup')
      ) {
        this.fancybox.close();
      }
    });
  }

  static showPopup(selector) {
    Fancybox.close();
    Fancybox.show([
      {
        src: selector,
        mainClass: 'js-popup',
        groupAttr: false,
        Toolbar: false,
        closeButton: 'inside',
        dragToClose: false,
        autoFocus: false,
      },
    ]);
  }

  static hidePopup() {
    Fancybox.close();
  }

  init() {
    this.initPopup();
    this.initGallery();
  }
}

export default Popup;

// открыть попап глобально (передать айди попапа)
// Popup.showPopup('#popup-feedback');

// закрыть попап глобально. закроет любой открытый
// Popup.hidePopup();
