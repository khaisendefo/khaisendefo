export function marqueeScroll() {
  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const marqueeLeft = document.querySelector('.marquee__list--left');
    const marqueeRight = document.querySelector('.marquee__list--right');

    // Устанавливаем прокрутку для списка слева
    if (marqueeLeft) {
      marqueeLeft.style.transform = `translateX(-${scrollY}px)`;
    }

    // Устанавливаем прокрутку для списка справа
    if (marqueeRight) {
      marqueeRight.style.transform = `translateX(${scrollY}px)`;
    }
  });
}
