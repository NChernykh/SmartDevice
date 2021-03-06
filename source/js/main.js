import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initAccordion} from './modules/init-accordion';
import {initScroll} from './modules/init-scroll';
import {initMask} from './modules/init-mask';


// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initAccordion();
initScroll();
initMask();
