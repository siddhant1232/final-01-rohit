import React from 'react';

const Dots: React.FC<{ rows?: number; cols?: number; className?: string }> = ({ rows = 5, cols = 5, className = '' }) => {
  return (
    <div className={`grid gap-4 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="w-1 h-1 bg-gray-text/30"></div>
      ))}
    </div>
  );
};

export default Dots;
