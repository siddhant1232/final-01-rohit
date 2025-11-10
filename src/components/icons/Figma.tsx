import React from 'react';

export const FigmaIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" 
      fill="currentColor"
    />
    <path 
      d="M8.25 8.25H12V15.75H8.25C7.00736 15.75 6 14.7426 6 13.5V10.5C6 9.25736 7.00736 8.25 8.25 8.25Z" 
      fill="currentColor"
    />
  </svg>
);
