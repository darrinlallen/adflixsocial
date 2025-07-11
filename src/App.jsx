
// src/App.jsx new
//ad flix app
import { useEffect } from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  useEffect(() => {
    const title = "AD FLIX";
    const subtitle = "COMING FALL 2025";
    const container = document.querySelector('.title-container');
    const subtitleContainer = document.querySelector('.subtitle-container');

    const html = [...title].map(letter => {
      return letter === " " 
        ? `<span class="letter space">&nbsp;</span>`
        : `<span class="letter">${letter}</span>`;
    }).join('');

    const subtitleHtml = [...subtitle].map(letter => {
      return letter === " " 
        ? `<span class="subtitle-letter space">&nbsp;</span>`
        : `<span class="subtitle-letter">${letter}</span>`;
    }).join('');

    container.innerHTML = html;
    subtitleContainer.innerHTML = subtitleHtml;

    // Main title animation
    const tl = gsap.timeline({
      repeat: 0,
      ease: "elastic.out(1, 0.3)"
    });

    tl.from(".letter", {
      y: -200,
      opacity: 0,
      duration: 1.5,
      stagger: {
        amount: 0.8,
        ease: "bounce.out"
      },
      rotation: 360,
      scale: 0
    })
    .to(".letter", {
      y: 0,
      scale: 1.2,
      duration: 0.4,
      stagger: {
        amount: 0.2
      }
    });

    // Subtitle animation
    gsap.from(".subtitle-letter", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: {
        amount: 0.5,
        ease: "power2.out"
      },
      delay: 1.5 // Starts after main title animation
    });

    // Continuous bounce animation for main title
    gsap.to(".letter", {
      y: -30,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      },
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, [])

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="title-container">
          {/* Main title animation will handle this */}
        </div>
        <div className="subtitle-container">
          {/* Subtitle animation will handle this */}
        </div>
      </div>
    </div>
  )
}

export default App