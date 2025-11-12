import React from "react";

export const StreamlitIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
  >
    <path
      fill="#FF4B4B"
      d="M128 16L16 96l112 144L240 96 128 16zM128 48l80 56-80 36-80-36 80-56z"
    />
  </svg>
);
