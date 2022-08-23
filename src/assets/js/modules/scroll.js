import * as SmoothScroll from './smoothScroll/smoothScroll';
import menuClose from './burger';

function offsetPage(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
const scrItems = document.querySelectorAll('.js-anim');

function setScroll() {
  if (scrItems) {
    setTimeout(() => {
      const srcValue = window.scrollY;
      for (let index = 0; index < scrItems.length; index++) {
        const scrItem = scrItems[index];
        const scrItemOffset = offsetPage(scrItem).top;
        const scrItemHeight = scrItem.offsetHeight;
        let scrItemPoint =
          window.innerHeight - (window.innerHeight - scrItemHeight / 3);
        if (window.innerHeight > scrItemHeight) {
          scrItemPoint = window.innerHeight - scrItemHeight / 3;
        }
        if (
          srcValue > scrItemOffset - scrItemPoint &&
          srcValue < scrItemOffset + scrItemHeight
        ) {
          scrItem.classList.add('_show');
        }
      }
    }, 100);
  }
}

setScroll();

function goTo(targetBlock, speed, offset = 80) {
  const header = '';
  // OffsetHeader
  // if (window.innerWidth < 992) {
  //	header = 'header';
  // }
  const options = {
    speedAsDuration: true,
    speed,
    header,
    offset,
    easing: 'easeOutQuad',
  };
  const scr = new SmoothScroll();
  scr.animateScroll(targetBlock, '', options);
}

function activeLinks() {
  const link = document.querySelectorAll('._goto');
  const blocks = [];
  for (let index = 0; index < link.length; index++) {
    const el = link[index];
    const blockName = el.getAttribute('href').replace('#', '');
    if (blockName !== '') {
      blocks.push(blockName);
    }
  }
  const oldCurrentLink = document.querySelectorAll('._goto._active');
  if (oldCurrentLink) {
    for (let index = 0; index < oldCurrentLink.length; index++) {
      const test = oldCurrentLink[index];
      test.classList.remove('_active');
    }
  }
  for (let index = 0; index < blocks.length; index++) {
    const block = blocks[index];
    const blockItem = document.querySelector(`.${block}`);
    if (blockItem) {
      const blockOffset = offsetPage(blockItem).top;
      const blockHeight = blockItem.offsetHeight;
      if (
        window.scrollY > blockOffset &&
        window.scrollY < blockOffset + blockHeight
      ) {
        const currentLinks = document.querySelectorAll(
          `._goto[href="#${block}"]`
        );
        for (let i = 0; i < currentLinks.length; i++) {
          const currentLink = currentLinks[i];
          currentLink.classList.add('_active');
        }
      }
    }
  }
}

const link = document.querySelectorAll('._goto');

if (link) {
  for (let index = 0; index < link.length; index++) {
    const el = link[index];
    el.addEventListener('click', (e) => {
      if (document.querySelector('.nav-header__wrapper._open')) {
        menuClose(250);
      }
      const targetBlockClass = el.getAttribute('href').replace('#', '');
      const targetBlock = document.querySelector(`.${targetBlockClass}`);
      goTo(targetBlock, 300);
      e.preventDefault();
    });
  }
}

export { setScroll, activeLinks };
