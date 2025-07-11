
// src/animations/titleAnimation.js
import gsap from 'gsap';

export const titleAnimation = () => {
  // Split "AD FLIX" into individual characters for separate animation
  const title = "AD FLIX";
  const container = document.querySelector('.title-container');

  // Create spans for each character
  const html = [...title].map(letter => {
    return letter === " " 
      ? `<span class="letter space">&nbsp;</span>`
      : `<span class="letter">${letter}</span>`;
  }).join('');

  container.innerHTML = html;

  // Main animation timeline
  const tl = gsap.timeline({
    repeat: 0,
    ease: "elastic.out(1, 0.3)"
  });

  // Animate each letter
  tl.from(".letter", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: {
      amount: 0.5,
      ease: "bounce.out"
    }
  })
  .to(".letter", {
    y: 0,
    scale: 1.2,
    duration: 0.3,
    stagger: {
      amount: 0.2
    }
  })
  .to(".letter", {
    scale: 1,
    duration: 0.2
  });
};