import { Fancybox } from '@fancyapps/ui';

class Popup {
  constructor() {
    this.Fancybox = Fancybox;

    this.init();
  }

  init() {
    this.Fancybox.bind('[data-fancybox]', {
      mainClass: 'js-popup',
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
}

export default Popup;
