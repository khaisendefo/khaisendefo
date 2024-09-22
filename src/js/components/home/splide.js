import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

export const reviewsSlider = () => {
  const splide = new Splide('.splide', {
    perPage: 3, 
    perMove: 1,
    pagination: false,
    arrows: false,

    breakpoints: {
      1100: {
        perPage: 2, 
      },
      900: {
        perPage: 1,
      }
    },
  });

  splide.mount();

  const prevButton = document.querySelector('.reviews__slider-nav-prev');
  const nextButton = document.querySelector('.reviews__slider-nav-next');

  prevButton.addEventListener('click', () => splide.go('<'));
  nextButton.addEventListener('click', () => splide.go('>'));

  updateArrowState();

  splide.on('move', updateArrowState);
  splide.on('updated', updateArrowState); 

  function updateArrowState() {
    if (splide.index === 0) {
      prevButton.classList.add('reviews__slider-arrow--is-disabled');
    } else {
      prevButton.classList.remove('reviews__slider-arrow--is-disabled');
    }

    const lastSlideIndex = splide.Components.Controller.getEnd();

    if (splide.index === lastSlideIndex) {
      nextButton.classList.add('reviews__slider-arrow--is-disabled');
    } else {
      nextButton.classList.remove('reviews__slider-arrow--is-disabled');
    }
  }
}
