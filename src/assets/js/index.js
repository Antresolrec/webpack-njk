// import Ie from './modules/fixIe';
import LazyLoad from './modules/lazyload';
import Burger from './modules/burger';
import Header from './modules/header';
import BackToTop from './modules/backToTop';
import Tabs from './modules/tabs';
import MouseParallax from './modules/mouseParallax';
import BtnEffect from './modules/btnEffect';
import Drop from './modules/dropMenu';
import PhoneMask from './modules/phone-mask/phoneMask';
import ScrollTo from './modules/scrollToBlock';
import Spoller from './modules/spollers';
import Popup from './modules/gallery';
import DynamicAdapt from './modules/dynamicAdapt';
import ShowBlock from './modules/showBlock';
import Form from './modules/form-validator/form';
// import './modules/anime';
import './modules/learning';
import './modules/browserUpdate';

// заглушка для бразуера IE
// new Ie();

const modules = [
  { name: LazyLoad },
  { name: Popup },
  { name: Header },
  { name: Burger },
  { name: DynamicAdapt },
  { name: BackToTop },
  { name: ScrollTo },
  { name: Form, selectors: '.js-form' },
  { name: ShowBlock, selectors: '.js-anim' },
  { name: Spoller, selectors: '.js-spoller' },
  { name: Tabs, selectors: '.js-tabs' },
  { name: Drop, selectors: '.js-drop' },
  { name: MouseParallax, selectors: '.js-mouse-parallax' },
  { name: BtnEffect, selectors: '.js-btn-effect' },
  { name: PhoneMask, selectors: '.js-phone-mask' },
];

const initModule = (module) => {
  const Module = module.name;
  if (module.selectors) {
    const selectors = document.querySelectorAll(module.selectors);
    selectors.forEach((selector) => {
      new Module(selector);
    });
  } else {
    new Module();
  }
};

window.initModule = initModule;
window.Tabs = Tabs;
window.Spoller = Spoller;
window.Form = Form;

// Expample for init global
// initModule({name: Tabs, selectors: '.js-tabs'})

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('_loaded');

  modules.forEach((module) => {
    initModule(module);
  });

  // const initModule = (item, selectors) => {
  //   const Module = item;
  //   if (selectors) {
  //     const elements = document.querySelectorAll(selectors);
  //     elements.forEach((el) => {
  //       new Module(el);
  //     });
  //   } else {
  //     new Module();
  //   }
  // };

  // initModule(LazyLoad);
  // initModule(Popup);
  // initModule(Header);
  // initModule(Burger);
  // initModule(BackToTop);
  // initModule(DynamicAdapt);
  // initModule(ScrollTo);
  // initModule(Form, '.js-form');
  // initModule(ShowBlock, '.js-anim');
  // initModule(Spoller, '.js-spoller');
  // initModule(Tabs, '.js-tabs');
  // initModule(Drop, '.js-drop');
  // initModule(MouseParallax, '.js-mouse-parallax');
  // initModule(BtnEffect, '.js-btn-effect');
  // initModule(PhoneMask, '.phone-mask');

  // window.initModule = initModule;
  // window.Tabs = Tabs;
  // window.Spoller = Spoller;
  // window.Form = Form;
});
