import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <div className="border border-gray-text">
    <h3 className="text-white font-semibold p-2 border-b border-gray-text">{title}</h3>
    <div className="p-2">
      <p className="text-gray-text leading-relaxed">{skills.join(' ')}</p>
    </div>
  </div>
);
