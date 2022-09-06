import { Fancybox } from '@fancyapps/ui';

window.Fancybox = Fancybox;

class Popup {
  constructor() {
    this.Fancybox = Fancybox;
    this.popupSelector = '[data-fancybox][data-popup]';
    this.gallerySelector = '[data-fancybox][data-gallery]';

    this.init();
  }

  initPopup() {
    this.Fancybox.bind(this.popupSelector, {
      mainClass: 'js-popup',
      groupAttr: false,
      Toolbar: false,
      closeButton: false,
      dragToClose: false,
    });
  }

  initGallery() {
    this.Fancybox.bind(this.gallerySelector, {
      mainClass: 'js-gallery',
      Toolbar: false,
      closeButton: 'top',
      dragToClose: false,
      Image: {
        zoom: false,
        wheel: false,
        click: false,
      },
    });
  }

  init() {
    this.initPopup();
    this.initGallery();
  }
}

export default Popup;
