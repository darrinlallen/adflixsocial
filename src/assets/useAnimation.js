
// useAnimation.js
import { useEffect } from 'react';
import gsap from 'gsap';

const useAnimation = (titleRef, comingSoonRef) => {
  useEffect(() => {
    if (!titleRef.current || !comingSoonRef.current) return;

    const title = "AD FLIX";
    const comingSoon = "FALL 2025";

    const container = titleRef.current;
    const comingSoonContainer = comingSoonRef.current;

    // Generate HTML for title and coming soon text
    const html = [...title].map(letter => {
      return letter === " " 
        ? `<span class="main-letter space">&nbsp;</span>`
        : `<span class="main-letter">${letter}</span>`;
    }).join('');

    const comingSoonHtml = [...comingSoon].map(letter => {
      return letter === " " 
        ? `<span class="coming-soon-letter space">&nbsp;</span>`
        : `<span class="coming-soon-letter">${letter}</span>`;
    }).join('');

    container.innerHTML = html;
    comingSoonContainer.innerHTML = comingSoonHtml;

    // Animation timeline
    const tl = gsap.timeline({
      repeat: -1,
      ease: "elastic.out(1, 0.3)",
      repeatDelay: 1
    });

    tl.from(".main-letter", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.5,
        ease: "bounce.out"
      }
    })
    .to(".main-letter", {
      y: 0,
      scale: 1.2,
      duration: 0.3,
      stagger: {
        amount: 0.2
      }
    })
    .to(".main-letter", {
      scale: 1,
      duration: 0.2
    })
    .from(".coming-soon-letter", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.5,
        ease: "power2.out"
      }
    }, "-=0.5")
    .to([".main-letter", ".coming-soon-letter"], {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 2
    });
  }, [titleRef, comingSoonRef]);
};

export default useAnimation;