
// src/App.jsx
import React, { useRef } from 'react';
import './App.css';
import Logo from './Logo';
import useAnimation from './assets/useAnimation';

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
        
        <div ref={videoRef} className="video-container">
          <video 
            src="/glass.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="video"
          />
        </div>
      </div>
    </div>
  );
}

export default App;