// import js library
import Inputmask from "inputmask";

// import style
import '/scss/main.scss';

// import base components
import { useToggle } from './components/base/toggle.js';
import { initializeTyped } from './components/base/typed.js';
import { useSidebarMenu } from './components/base/accordion-sidebar.js';

// import home components
import { reviewsModal } from './components/home/reviews-modal.js';
import { initSlider } from './components/home/splide.js';
import { useAccordion } from './components/home/accordion.js';
import { marqueeScroll } from './components/home/marquee.js';

// import custmo components
import { customSelect } from './components/custom/custom-select.js';
import { customCursor } from './components/custom/custom-cursor.js';


// input mask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7(999) 999-99-99');
    im.mask(inputs);

document.addEventListener('DOMContentLoaded', () => {
    initSlider(); 
});

// function call
useToggle();
useSidebarMenu();
initializeTyped();
marqueeScroll();
reviewsModal();
useAccordion();
customSelect();
customCursor();


// Открытие модалки
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const modalButtons = document.querySelectorAll('.open-modal');
    const modalClose = document.querySelector('.modal__close');
    const form = document.querySelector('.modal__form'); 
      if (modal && modalClose) {
        modalButtons.forEach(button => {
          button.addEventListener('click', openModal);
        });
      modalClose.addEventListener('click', closeModal);
      window.addEventListener('click', outsideClick);
      window.addEventListener('keydown', escapeClose);
      }
      function openModal() {
        if (modal) {modal.style.display = 'block';}
      }
      function closeModal() {
        if (modal) {modal.style.display = 'none'; clearForm();}
      }
      function outsideClick(e) {
        if (modal && e.target === modal) {modal.style.display = 'none'; clearForm(); }
      }
      function escapeClose(e) {
        if (modal && e.key === 'Escape') {modal.style.display = 'none'; clearForm();}
      }
      function clearForm() {
        if (form) {form.reset();}
      }
    });
  

// АНИМАЦИЯ КУБА
// document.addEventListener('DOMContentLoaded', () => {
//   const cube = document.querySelector('.about__cube');
//   if (!cube) {
//     return;
//   }
//   let lastScrollY = window.scrollY;
//   let rotationAngle = 0;
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         document.addEventListener('scroll', handleScroll);
//       } else {
//         document.removeEventListener('scroll', handleScroll);
//       }
//     });
//   });
//   observer.observe(cube); 
//   function handleScroll() {
//     const scrollY = window.scrollY;
//     const scrollDelta = scrollY - lastScrollY; 
//     rotationAngle += scrollDelta * 0.3;
//     cube.style.transform = `rotate(${rotationAngle}deg)`;
//     lastScrollY = scrollY;
//   }
// });

// АНИМАЦИЯ СМЕЩЕНИЯ ЭЛЕМЕНТА ВНИЗ
// document.addEventListener('DOMContentLoaded', () => {
//   const cubeVector = document.querySelector('.hero__cube-vector');
//   if (!cubeVector) {
//     return;
//   }
//   let lastScrollY = window.scrollY;
//   let translateY = 0;
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         document.addEventListener('scroll', handleScroll);
//       } else {
//         document.removeEventListener('scroll', handleScroll);
//       }
//     });
//   });
//   observer.observe(cubeVector);
//   function handleScroll() {
//     if (window.innerWidth <= 768) {
//       return; 
//     }
//     const scrollY = window.scrollY;
//     const scrollDelta = scrollY - lastScrollY;
//     translateY += scrollDelta * 0.2; 
//     cubeVector.style.transform = `translateY(${translateY}px)`;
//     lastScrollY = scrollY;
//   }
// });

// АНИМАЦИЯ СМЕЩЕНИЯ ЭЛЕМЕНТОВ ВНИЗ
// document.addEventListener('DOMContentLoaded', () => {
//   const elements = document.querySelectorAll(
//     '.animate-on-scroll, '
//   );

//   if (elements.length === 0) {
//     return;
//   }

//   let lastScrollY = window.scrollY;
//   const translateYValues = new Map();

//   elements.forEach((element) => {
//     translateYValues.set(element, 0);

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           document.addEventListener('scroll', handleScroll);
//         } else {
//           document.removeEventListener('scroll', handleScroll);
//         }
//       });
//     });

//     observer.observe(element);
//   });

//   function handleScroll() {
//     if (window.innerWidth <= 768) {
//       return;
//     }

//     const scrollY = window.scrollY;
//     const scrollDelta = scrollY - lastScrollY;

//     elements.forEach((element) => {
//       let translateY = translateYValues.get(element);
//       translateY += scrollDelta * 0.2;
//       element.style.transform = `translateY(${translateY}px)`;
//       translateYValues.set(element, translateY);
//     });

//     lastScrollY = scrollY;
//   }
// });
