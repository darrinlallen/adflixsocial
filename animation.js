
// animation-alt.js
import gsap from 'gsap';

export const titleAnimation = () => {
  gsap.set(".title-container", {
    perspective: 400
  });

  const tl = gsap.timeline({
    repeat: 0
  });

  tl.from(".title-container", {
    opacity: 0,
    scale: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)"
  })
  .from(".letter", {
    rotationX: -180,
    opacity: 0,
    duration: 0.6,
    stagger: {
      amount: 0.4
    },
    ease: "back.out(1.7)"
  })
  .to(".letter", {
    y: -20,
    duration: 0.4,
    stagger: {
      amount: 0.2
    },
    ease: "power2.out"
  })
  .to(".letter", {
    y: 0,
    duration: 0.4,
    stagger: {
      amount: 0.2
    },
    ease: "bounce.out"
  });
};