import React from 'react';

export const StreamlitIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12.261 3.00201L5.26196 7.00201V15.002L12.261 19.002L19.262 15.002V7.00201L12.261 3.00201Z" stroke="#FF4B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.26196 7.00201L12.261 11.002L19.262 7.00201" stroke="#FF4B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.261 19.002V11.002" stroke="#FF4B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
