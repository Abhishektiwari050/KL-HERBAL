import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", dark = false }) => {
  const primaryColor = dark ? "#FFFFFF" : "#1A3C34"; // Brand Dark or White
  const accentColor = "#D4AF37"; // Brand Gold

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="KL Herbal Logo"
    >
      {/* Stylized K */}
      <path 
        d="M25 15V85" 
        stroke={primaryColor} 
        strokeWidth="8" 
        strokeLinecap="square"
      />
      <path 
        d="M25 55L55 20" 
        stroke={primaryColor} 
        strokeWidth="7" 
        strokeLinecap="square"
      />
      <path 
        d="M25 55L55 85" 
        stroke={primaryColor} 
        strokeWidth="7" 
        strokeLinecap="square"
      />
      
      {/* Intertwined L */}
      <path 
        d="M45 15L45 85L75 85" 
        stroke={primaryColor} 
        strokeWidth="8" 
        strokeLinecap="square"
      />
      
      {/* Leaf Accents */}
      <path 
        d="M25 55C15 45 15 30 30 30C45 30 40 50 25 55Z" 
        fill={accentColor} 
        opacity="0.9"
      />
      <path 
        d="M60 35C70 25 85 25 85 40C85 55 65 50 60 35Z" 
        fill={accentColor}
        opacity="0.9" 
      />
      <path 
        d="M45 50C45 50 55 45 60 55" 
        stroke={accentColor} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;