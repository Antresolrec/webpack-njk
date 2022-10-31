// import Ie from './modules/fixIe';
import initForm from './modules/form-validator/index';
import initInputMask from './modules/phone-mask/phoneMask';
import Select from './modules/select';
import LazyLoad from './modules/lazyload';
import Burger from './modules/burger';
import Header from './modules/header';
import BackToTop from './modules/backToTop';
import ScrollTo from './modules/scrollToBlock';
import Popup from './modules/popup';
import DynamicAdapt from './modules/dynamicAdapt';
import Tabs from './modules/tabs';
import MouseParallax from './modules/mouseParallax';
import BtnEffect from './modules/btnEffect';
import Drop from './modules/dropMenu';
import Spoller from './modules/spollers';
import ShowBlock from './modules/showBlock';
import Slider from './modules/slider';

// import './modules/anime';
import './modules/learning';
import './modules/browserUpdate';

// заглушка для бразуера IE
// new Ie();

function initModules() {
  new LazyLoad();
  new Burger();
  new Header();
  new BackToTop();
  new DynamicAdapt();
  new ScrollTo();
  new Popup();
  initForm();
  initInputMask();
  new Select();
  new Slider();

  const tabs = document.querySelectorAll('.js-tabs');
  if (tabs) {
    tabs.forEach((el) => {
      new Tabs(el);
    });
  }

  const showBlocks = document.querySelectorAll('.js-anim');
  if (showBlocks) {
    showBlocks.forEach((el) => {
      new ShowBlock(el);
    });
  }

  const spollers = document.querySelectorAll('.js-spoller');
  if (spollers) {
    spollers.forEach((el) => {
      new Spoller(el);
    });
  }

  const btnEffect = document.querySelectorAll('.js-btn-effect');
  if (btnEffect) {
    btnEffect.forEach((el) => {
      new BtnEffect(el);
    });
  }

  const drops = document.querySelectorAll('.js-drop');
  if (drops) {
    drops.forEach((el) => {
      new Drop(el);
    });
  }

  const mouseParallax = document.querySelectorAll('.js-mouse-parallax');
  if (mouseParallax) {
    mouseParallax.forEach((el) => {
      new MouseParallax(el);
    });
  }
  document.body.classList.add('_loaded');
}

document.addEventListener('DOMContentLoaded', initModules);
