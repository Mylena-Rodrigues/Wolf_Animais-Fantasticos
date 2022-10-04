import SmoothScroll from './modules/smooth-scroll.js';
import initScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initWorking from './modules/working.js';

import initFetchAnimals from './modules/api/animals-fetch.js';
import initFetchBitcoin from './modules/api/bitcoin-fetch.js';

const smoothScroll = new SmoothScroll('[data-menu="list"] a[href^="#"]');
smoothScroll.init();

initScrollAnimation();

const accordion = new Accordion('[data-anime = "accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab = "menu"] li',
  '[data-tab = "content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropDownMenu();
initMenuMobile();
initWorking();

// Fetch APIs
initFetchAnimals();
initFetchBitcoin();
