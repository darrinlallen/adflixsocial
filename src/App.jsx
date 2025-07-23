
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const title = "AD FLIX";
    const container = document.querySelector('.title-container');

    const html = [...title].map((letter) =>
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
      // Slide in subtitle
      gsap.fromTo(
        '.hero-subtitle',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 0.85, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    });
  }, []);

  return (
    <div className="hero-section">
      <div className="title-container" />
      <div className="hero-content">
        <p className="hero-subtitle">Searchable streaming commercials .... beginning FALL 2025</p>
        <div className="hero-enter">
          <a href="/home.html" className="enter-btn">ENTER</a>
        </div>
      </div>
    </div>
  )
}
export default App