import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const gsapAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

// ScrollSmoother.create({

//     wrapper: '.wrapper',
//     content: '.content',
//     smooth: 1.5,
//     effects: true,

// });

gsap.utils.toArray(".title-animation").forEach((element) => {
  gsap.from(element, {
      scrollTrigger: {
          trigger: element,
          start: "top 90%", 
          end: "top 10%", // Измени конец анимации на более низкий процент
          scrub: true,
      },
      opacity: 0,
      x: 50,
      duration: 1,
  });
});
}