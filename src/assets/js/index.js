import Ie from './modules/fix-ie';
import LazyLoad from './modules/lazyload';
import Burger from './modules/burger';
import Header from './modules/header';
import BackToTop from './modules/backToTop';
import Tabs from './modules/tabs';
import MouseParallax from './modules/mouse-parallax';
import BtnEffect from './modules/btnEffect';
import Drop from './modules/custom-drop-menu';
import PhoneMask from './modules/phone-mask/phone-mask';
import ScrollTo from './modules/scrollToBlock';
import Spoller from './modules/spollers';
import Popup from './modules/gallery';
import DynamicAdapt from './modules/dynamic-adapt';
import ShowBlock from './modules/showBlock';

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
  initModule(ShowBlock, '.js-anim');
  initModule(Spoller, '.js-spoller');
  initModule(Tabs, '.js-tabs');
  initModule(Drop, '.js-drop');
  initModule(MouseParallax, '.js-mouse-parallax');
  initModule(BtnEffect, '.js-btn-effect');
  initModule(ScrollTo, '.js-to-block');
  initModule(PhoneMask, '.phone-mask');

  window.initModule = initModule;
  window.Tabs = Tabs;
  window.Spoller = Spoller;
});
