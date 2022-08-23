// let ua = window.navigator.userAgent;
// function isIE() {
//   ua = navigator.userAgent;
//   const isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
//   return isIe;
// }
// if (isIE()) {
//   document.querySelector('html').classList.add('fix-ie');
// }

class Ie {
  constructor() {
    this.ua = window.navigator.userAgent;
    this.isIe = null;
    this.class = 'internet-explorer';
    this.init();
  }

  check() {
    this.ua = navigator.userAgent;
    this.isIe =
      this.ua.indexOf('MSIE ') > -1 || this.ua.indexOf('Trident/') > -1;
    return this.isIe;
  }

  init() {
    if (!this.check()) {
      document.querySelector('html').classList.remove(this.class);
    }
  }
}

export default Ie;
