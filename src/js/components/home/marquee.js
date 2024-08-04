export function marqueeScroll() {
  const marqueeSection = document.querySelector('.marquee');

  if (!marqueeSection) {
    return;
  }

  const marqueeLeft = document.querySelector('.marquee__list--left');
  const marqueeRight = document.querySelector('.marquee__list--right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', handleScroll);
      } else {
        document.removeEventListener('scroll', handleScroll);
      }
    });
  });

  observer.observe(marqueeSection);

  function handleScroll() {
    const scrollY = window.scrollY;

    if (marqueeLeft) {
      marqueeLeft.style.transform = `translateX(-${scrollY}px)`;
    }

    if (marqueeRight) {
      marqueeRight.style.transform = `translateX(${scrollY}px)`;
    }
  }
}
