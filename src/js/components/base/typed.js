import Typed from 'typed.js';

export const typedText = () => {
  new Typed('.typed-text', {
    strings: [
      'Разработка <span>уникального сайта</span> для вашего бизнеса',
      '<span>Кроссбраузерная верстка</span> по макету figma',
      'Разработка сайта от <span>концепции до запуска</span>',
    ],
    typeSpeed: 50,
    loop: true,
    backSpeed: 25,
    backDelay: 1000,
    loopCount: Infinity,
  });
};
