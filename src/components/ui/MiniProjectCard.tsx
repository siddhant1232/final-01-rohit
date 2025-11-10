import React from 'react';
import { Github } from 'lucide-react';

interface MiniProjectCardProps {
  tags: string[];
  title: string;
  description: string;
  githubUrl: string;
  liveUrlText?: string;
}

export const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ tags, title, description, githubUrl, liveUrlText }) => {
  return (
    <div className="border border-gray-text flex flex-col">
      <div className="p-2 border-b border-gray-text">
        <p className="text-gray-text text-sm flex-wrap">{tags.join(' ')}</p>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
        <p className="text-gray-text mb-4 flex-grow">{description}</p>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors">
            <Github size={20} />
            <span>{liveUrlText || 'Github'} &lt;~&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
