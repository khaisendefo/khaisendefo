// import style
import '/scss/main.scss';

// import components
import { useToggle } from './components/toggle.js';
import { useSidebarMenu } from './components/home/accordion-sidebar.js';
import { initializeTyped } from './components/typed.js';

// function call
useToggle();
useSidebarMenu();
initializeTyped();
