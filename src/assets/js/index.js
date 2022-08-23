// import './modules/spollers';

// import './modules/tooltips';

// import './modules/form';

// import './modules/select';

// import './modules/calendar';

// import './modules/zoom-image';

// import './modules/popups';

// import './modules/form-steps';

// import './modules/calc-product';

// import './modules/tooltips-mini';

// import './modules/price-range';

// import './modules/filter';

// import './modules/compare-sticky';

// import './modules/stock-steps';

// import './modules/file-doc-uploader';

// import './modules/file-image-uploader';

// import './modules/phone-mask/phone-mask';

// import './modules/cookie';

import Burger from './modules/burger';
import Header from './modules/header';
// import Popup from './modules/gallery';
import BackToTop from './modules/backToTop';
// import LazyLoad from './modules/lazyload';
import Tabs from './modules/tabs';
import MouseParallax from './modules/mouse-parallax';
import BtnEffect from './modules/btnEffect';
import Drop from './modules/custom-drop-menu';
import Ie from './modules/fix-ie';
import DynamicAdapt from './modules/dynamic-adapt';
import PhoneMask from './modules/phone-mask/phone-mask';
import ScrollTo from './modules/scrollToBlock';

// заглушка для Интернет Эксплорера
new Ie();

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('_loaded');

  const initModule = (item, selectors) => {
    const Module = item;
    if (selectors) {
      const elements = document.querySelectorAll(selectors);
      elements.forEach((el) => {
        new Module(el);
      });
    } else {
      new Module();
    }
  };

  // initModule(LazyLoad);
  // initModule(Popup);
  initModule(Header);
  initModule(Burger);
  initModule(BackToTop);
  initModule(DynamicAdapt);
  initModule(Tabs, '.js-tabs');
  initModule(MouseParallax, '.mouse-parallax');
  initModule(BtnEffect, '.btn-effect');
  initModule(Drop, '.js-drop');
  initModule(PhoneMask, '.phone-mask');
  initModule(ScrollTo, '._goto');

  window.initModule = initModule;
  window.Tabs = Tabs;

  // new DynamicAdapt('max');
  // new LazyLoad();
  // new Popup();
  // new Header();
  // new Burger();
  // new BackToTop();

  // const tabs = document.querySelectorAll('.js-tabs');
  // const mouseParallaxes = document.querySelectorAll('.mouse-parallax');
  // const btnEffect = document.querySelectorAll('.btn-effect');
  // const drops = document.querySelectorAll('.js-drop');
  // const phoneMasks = document.querySelectorAll('.phone-mask');
  // const links = document.querySelectorAll('._goto');

  // tabs.forEach((el) => {
  //   new Tabs(el);
  // });
  // mouseParallaxes.forEach((el) => {
  //   new MouseParallax(el);
  // });
  // btnEffect.forEach((el) => {
  //   new BtnEffect(el);
  // });
  // drops.forEach((el) => {
  //   new Drop(el);
  // });
  // phoneMasks.forEach((el) => {
  //   new PhoneMask(el);
  // });
  // links.forEach((el) => {
  //   new ScrollTo(el);
  // });
});
