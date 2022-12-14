import SmoothScroll from './modules/smooth-scroll.js';
import ScrollAnimation from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Working from './modules/working.js';
import SlideNav from './modules/slide-nav.js';

import animalsFetch from './modules/api/animals-fetch.js';
import bitcoinFetch from './modules/api/bitcoin-fetch.js';

const smoothScroll = new SmoothScroll('[data-menu="list"] a[href^="#"]');
smoothScroll.init();

const scrollAnimation = new ScrollAnimation('.js-scroll');
scrollAnimation.init();

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

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"');
menuMobile.init();

const working = new Working('[data-semana]', 'open');
working.init();

const slide = new SlideNav('.slide', '.slide-wrapper', 0);
slide.init();

slide.addControl('.custom-controls');
slide.addArrow('.prev', '.next');

// Fetch APIs
animalsFetch('../../animals-api.json', '.numeros-grid');
bitcoinFetch('https://blockchain.info/ticker', '.btc-preco');
