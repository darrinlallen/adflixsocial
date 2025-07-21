import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'
import {ReactComponent as Logo} from './text.svg'

function App() {
  const svgRef = useRef(null);

  useEffect(() => {
    const title = "AD FLIX streaming";
    const container = document.querySelector('.title-container');

    const html = [...title].map(letter => {
      return letter === " " 
        ? `<span class="letter space">&nbsp;</span>`
        : `<span class="letter">${letter}</span>`;
    }).join('');

    container.innerHTML = html;

    const tl = gsap.timeline({
      repeat: 0,
      ease: "elastic.out(1, 0.3)"
    });

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
  }, [])

  return (
    <div className="hero-section">
      <div className="title-container">
        {/* Animation will handle the content */}
      </div>
      <div>
        <Logo ref={svgRef} className="my-svg" />
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">Your gateway to streaming ads and content.</p>
        <button className="hero-cta">Get Started</button>
      </div>
    </div>
  )
}

export default App