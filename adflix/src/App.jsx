
// src/App.jsx
import { useEffect } from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  useEffect(() => {
    const title = "AD FLIX";
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
    <div>
      <div className="title-container">
        {/* Animation will handle the content */}
      </div>
    </div>
  )
}

export default App