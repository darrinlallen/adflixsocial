// src/Logo.jsx
import React from 'react';

const Logo = React.forwardRef((props, ref) => (
  <svg 
    ref={ref} 
    viewBox="0 0 800 200" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff0000" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff5555" stopOpacity="1" />
      </linearGradient>
    </defs>
    <text 
      x="50%" 
      y="50%" 
      textAnchor="middle" 
      dominantBaseline="middle" 
      fill="url(#gradient)" 
      fontSize="30px"  // Changed from 120px to 60px
      fontFamily="Arial Black, sans-serif"
      style={{
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
      }}
    >
    Number one place on the web to watch tv commercials.
    </text>
  </svg>
));

export default Logo;
