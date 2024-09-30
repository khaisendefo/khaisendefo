import 'aos/dist/aos.css';
import AOS from 'aos';

export const aosAnimation = () => {
  AOS.init(
    {
      duration: 500, 
      offset: 100,
      easing: 'ease-in-out', 
      once: false,
    }
  );
}