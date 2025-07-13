
// src/App.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'
import Logo from './Logo'

function App() {
  const svgRef = useRef(null);
  const titleRef = useRef(null);
  const comingSoonRef = useRef(null);
  const netflixRef = useRef(null);

  useEffect(() => {
    const title = "AD FLIX";
    const comingSoon = "FALL 2025 [scroll down]";
    
    const container = titleRef.current;
    const comingSoonContainer = comingSoonRef.current;

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
    });

    // Coming soon animation
    tl.from(".coming-soon-letter", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.5,
        ease: "power2.out"
      }
    }, "-=0.5")
    
    // Reset animation
    .to([".main-letter", ".coming-soon-letter"], {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 2
    });

  }, [])

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="main-title-section">
          <div ref={titleRef} className="title-container">
            {/* Animation will handle the content */}
          </div>
          <div ref={comingSoonRef} className="coming-soon-container">
            {/* Coming soon animation will handle this */}
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div ref={netflixRef} className="netflix-container">
          <Logo ref={svgRef} className="my-svg" />
        </div>
      </div>
    </div>
  )
}

export default App