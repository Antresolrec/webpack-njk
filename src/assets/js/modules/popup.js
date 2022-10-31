import { Fancybox } from '@fancyapps/ui';

class Popup {
  constructor() {
    this.Fancybox = Fancybox;
    this.popupSelector = '.js-popup-trigger[data-fancybox]';
    this.gallerySelector = '.js-gallery-trigger[data-fancybox]';
    this.mobilePopup = document.querySelectorAll('.popup[data-mobile-close]');

    if (this.Fancybox) {
      this.init();
    }

    if (this.mobilePopup) {
      this.checkRezise();
    }
  }

  initPopup() {
    this.Fancybox.bind(this.popupSelector, {
      mainClass: 'js-popup',
      groupAttr: false,
      Toolbar: false,
      closeButton: 'inside',
      dragToClose: false,
      autoFocus: false,
    });
  }

  initGallery() {
    this.Fancybox.bind(this.gallerySelector, {
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

  show() {
    this.Fancybox.show();
  }

  checkRezise() {
    const THIS = this;
    window.addEventListener('resize', THIS.closeMobile.bind(this));
  }

  closeMobile() {
    this.mobilePopup.forEach((el) => {
      if (
        window.innerWidth >= el.dataset.mobileClose &&
        el.closest('.js-popup')
      ) {
        this.Fancybox.close();
      }
    });
  }

  init() {
    this.initPopup();
    this.initGallery();
  }
}

window.Fancybox = Fancybox;

// открыть попап глобально
// Fancybox.show([
//   {
//     src: '#popup-feedback',
//   },
// ]);

// закрыть попап глобально
// Fancybox.close();

export default Popup;
