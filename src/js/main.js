// import js library
import 'fslightbox';

// import style
import '/scss/main.scss';

// import components
import { useToggle } from './components/toggle.js';
import { useSidebarMenu } from './components/home/accordion-sidebar.js';
import { initializeTyped } from './components/typed.js';
import { marqueeScroll } from './components/home/marquee.js';

// function call
useToggle();
useSidebarMenu();
initializeTyped();
marqueeScroll();


// АНИМАЦИЯ КУБА
document.addEventListener('DOMContentLoaded', () => {
  const cube = document.querySelector('.about__cube');
  if (!cube) {
    return;
  }

  let lastScrollY = window.scrollY;
  let rotationAngle = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', handleScroll);
      } else {
        document.removeEventListener('scroll', handleScroll);
      }
    });
  });

  observer.observe(cube);
  
  function handleScroll() {
    const scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;
    
    rotationAngle += scrollDelta * 0.3;

    cube.style.transform = `rotate(${rotationAngle}deg)`;

    lastScrollY = scrollY;
  }
});
