export function reviewsModal() {
  document.addEventListener('DOMContentLoaded', function() {
    const sliderCards = document.querySelectorAll('.reviews__slider-card');
    const popup = document.querySelector('.reviews__popup');
    const popupCards = document.querySelectorAll('.reviews__popup-card');
    const popupClose = document.querySelector('.reviews__popup-close');

    popupCards.forEach(popupCard => {
      popupCard.style.display = 'none';
    });

    sliderCards.forEach((card, index) => {
      card.addEventListener('click', function() {
        popupCards.forEach(popupCard => {
          popupCard.style.display = 'none';
        });

        const selectedPopupCard = document.querySelector(`.reviews__popup-card--${index + 1}`);
        if (selectedPopupCard) {
          selectedPopupCard.style.display = 'block'; 
        }

        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    popupClose.addEventListener('click', closePopup);

    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        closePopup();
      } else if (!event.target.closest('.reviews__popup-card')) {
        closePopup(); 
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closePopup();
      }
    });

    function closePopup() {
      popup.classList.remove('active');
      popupCards.forEach(popupCard => {
        popupCard.style.display = 'none'; 
      });
      document.body.style.overflow = ''; 
    }
  });
}
