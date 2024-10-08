export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header-burger');
    const nav = document.querySelector('.sidebar-menu');
    const navLinks = document.querySelectorAll('.sidebar-menu__link');
    const overlay = document.querySelector('.sidebar-overlay');
    const body = document.body;

    function closeNav() {
      toggleButton.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    }

    toggleButton.addEventListener('click', function () {
      const isActive = toggleButton.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      if (isActive) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    });

    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target)) {
        closeNav();
      }
    });

    overlay.addEventListener('click', closeNav);

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('active')) {
        closeNav();
      }
    });

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        closeNav();
      });
    });
  });
}
