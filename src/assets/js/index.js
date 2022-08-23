import Burger from './modules/burger';
import Header from './modules/header';
import Popup from './modules/gallery';
import BackToTop from './modules/backToTop';
import LazyLoad from './modules/lazyload';
import Tabs from './modules/tabs';
import MouseParallax from './modules/mouse-parallax';
import BtnEffect from './modules/btnEffect';
import Drop from './modules/custom-drop-menu';
import Ie from './modules/fix-ie';
import DynamicAdapt from './modules/dynamic-adapt';
import PhoneMask from './modules/phone-mask/phone-mask';
import ScrollTo from './modules/scrollToBlock';

// заглушка для бразуера IE
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

  initModule(LazyLoad);
  initModule(Popup);
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
});
