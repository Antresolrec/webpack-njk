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
import Slider from './modules/slider';
import ShowBlock from './modules/showBlock';
import initDrop from './modules/dropMenu';
import initSpollers from './modules/spollers';
import initMouseParallax from './modules/mouseParallax';
import initBtnEffect from './modules/btnEffect';

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
  new Select();
  new Slider();
  new Tabs();
  new ShowBlock();
  initSpollers();
  initDrop();
  initForm();
  initInputMask();
  initMouseParallax();
  initBtnEffect();

  document.body.classList.add('_js-loaded');
}

document.addEventListener('DOMContentLoaded', initModules);
