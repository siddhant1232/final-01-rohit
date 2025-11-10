import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <div className="border border-gray-text h-full w-full flex flex-col">
    <h3 className="text-white font-semibold p-2 border-b border-gray-text">{title}</h3>
    <div className="p-2 flex-grow">
      <div className="flex flex-col gap-2">
        {skills.map(skill => (
          <span key={skill} className="text-gray-text">{skill}</span>
        ))}
      </div>
    </div>
  </div>
);
