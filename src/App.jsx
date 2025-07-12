
import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import image from './IMG_0991.svg'; // Ensure the path is correct

function App() {
  useEffect(() => {
    const title = "AD FLIX";
    const subtitle = "COMING FALL 2025";
    const subtitle2 = "*COMING FALL 2025 -----powered by GSAP*";
    const container = document.querySelector('.title-container');
    const subtitleContainer = document.querySelector('.subtitle-container');

    const html = [...title].map(letter => {
      return `<span class="letter">${letter}</span>`;
    }).join('');

    const subtitleHtml = [...subtitle].map(letter => {
      return `<span class="subtitle-letter">${letter}</span>`;
    }).join('');
const subtitleHtml2 = [...subtitle2].map(letter => {
      return `<span class="subtitle-letter">${letter}</span>`;
    }).join('');
    container.innerHTML = html;
    subtitleContainer.innerHTML = subtitleHtml;
    subtitleContainer.innerHTML = subtitleHtml2;
    const tl = gsap.timeline({
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Yoyo effect for back-and-forth
      ease: "power1.inOut"
    });

    tl.fromTo(".letter", {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1
    });

    gsap.fromTo(".subtitle-letter", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5
    });

    gsap.to(".svg-container", {
      opacity: 1,
      duration: 1,
      delay: 5
    });
    
  }, []);

  return (
    <div className="app-container">
      <div className="text-container">
        <div className="title-container">
          {/* Main title animation will handle this */}
        </div>
        <div className="subtitle-container">
          {/* Subtitle animation will handle this */}
        </div>
      </div>
      
    </div>
  );
}

export default App;