
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const title = "AD FLIX";
    const container = document.querySelector('.title-container');

    const html = [...title].map((letter, i) =>
      letter === " "
        ? `<span class="letter space">&nbsp;</span>`
        : `<span class="letter">${letter}</span>`
    ).join('');

    container.innerHTML = html;

    // Pulsate animation for each letter
    import('gsap').then(({ default: gsap }) => {
      gsap.to('.letter', {
        scale: 1.25,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        duration: 0.7,
        ease: "power1.inOut"
      });
    });
  }, []);

  return (
    <div className="hero-section">
      <div className="title-container" />
      <div className="hero-content">
        <p className="hero-subtitle">Streaming commercials</p>
      </div>
    </div>
  )
}

export default App