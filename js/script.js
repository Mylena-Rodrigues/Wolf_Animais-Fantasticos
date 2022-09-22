import initSmoothScroll from './modules/smooth-scroll.js';
import initScrollAnimation from './modules/scroll-animation.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initWorking from './modules/working.js';

import initFetchAnimals from './modules/api/animals-fetch.js';
import initFetchBitcoin from './modules/api/bitcoin-fetch.js';

initSmoothScroll();
initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initWorking();

//Fetch APIs
initFetchAnimals();
initFetchBitcoin();