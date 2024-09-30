// import style
import '/scss/main.scss';

// import home component
import { reviewsSlider } from './components/home/splide.js';
import { toggleAccordion } from './components/home/accordion.js';
import { aosAnimation } from './components/base/aos.js';

// connect home home component
reviewsSlider();
toggleAccordion();
aosAnimation();

// import base component
import { toggleMenu } from './components/base/toggle.js';
import { accordionSidebar } from './components/base/accordion-sidebar.js';
import { modal } from "./components/base/modal.js";
import { mainForm, customSelect } from './components/base/form.js';
import { accordionFooter } from './components/base/accordion-footer.js';

// import base component
toggleMenu();
accordionSidebar();
modal();
mainForm ();
customSelect();
accordionFooter();








