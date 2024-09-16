// import style
import '/scss/main.scss';

// import home component
import { gsapAnimation } from "./components/home/gsap-animation.js";
// import { reviewsModal } from './components/home/reviews-modal.js';
import { reviewsSlider } from './components/home/splide.js';
import { toggleAccordion } from './components/home/accordion.js';

// connect home home component
gsapAnimation();
// reviewsModal();
reviewsSlider();
toggleAccordion();

// import base component
import { toggleMenu } from './components/base/toggle.js';
import { typedText } from './components/base/typed.js';
import { accordionSidebar } from './components/base/accordion-sidebar.js';
import { modal } from "./components/base/modal.js";
import { mainForm } from './components/base/form.js';

// import base component
toggleMenu();
typedText();
accordionSidebar();
modal();
mainForm ();

// import custmo component
import { customSelect } from './components/custom/custom-select.js';

// connect custmo component
customSelect();








