// import js library
import 'fslightbox';
import Inputmask from "inputmask";

// import style
import '/scss/main.scss';

// import components
import { useToggle } from './components/toggle.js';
import { useSidebarMenu } from './components/home/accordion-sidebar.js';
import { initializeTyped } from './components/typed.js';
import { marqueeScroll } from './components/home/marquee.js';
import { initSlider } from './components/home/splide.js';
import { reviewsModal } from './components/home/reviews-modal.js';


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
