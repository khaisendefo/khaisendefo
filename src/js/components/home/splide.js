import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

export const reviewsSlider = () => {
  const splide = new Splide('.splide', {
    perPage: 3,
    perMove: 1,
    pagination: false,
    arrows: false,
  });

  splide.mount();

  const prevButton = document.querySelector('.reviews__slider-nav-prev');
  const nextButton = document.querySelector('.reviews__slider-nav-next');

  prevButton.addEventListener('click', () => splide.go('<'));
  nextButton.addEventListener('click', () => splide.go('>'));

  updateArrowState();

  splide.on('move', updateArrowState);

  function updateArrowState() {
    if (splide.index === 0) {
      prevButton.classList.add('reviews__slider-arrow--is-disabled');
    } else {
      prevButton.classList.remove('reviews__slider-arrow--is-disabled');
    }

    if (splide.index === splide.length - splide.options.perPage) {
      nextButton.classList.add('reviews__slider-arrow--is-disabled');
    } else {
      nextButton.classList.remove('reviews__slider-arrow--is-disabled');
    }
  }
}
