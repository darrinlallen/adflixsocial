import React, { useRef } from 'react';
import './App.css';
import Logo from './Logo';
import useAnimation from './assets/useAnimation';
import ninjaVideo from '/Ninja.mp4';

function App() {
  const svgRef = useRef(null);
  const titleRef = useRef(null);
  const comingSoonRef = useRef(null);
  const netflixRef = useRef(null);
  const videoRef = useRef(null);

  useAnimation(titleRef, comingSoonRef);

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="main-title-section">
          <div ref={titleRef} className="title-container" />
          <div ref={comingSoonRef} className="coming-soon-container" />
        </div>

        <div className="divider"></div>

      </div>
    </div>
  );
}

export default App;

