import React from 'react';

interface ProjectCardProps {
  imgSrc: string;
  tags: string[];
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, tags, title, description, githubUrl, liveUrl }) => {
  return (
    <div className="border border-gray-text">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover border-b border-gray-text" />
      <div className="p-4 flex flex-wrap gap-2 border-b border-gray-text">
        {tags.map(tag => <span key={tag} className="text-gray-text">{tag}</span>)}
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
        <p className="text-gray-text mb-4">{description}</p>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors">
            Github &lt;~&gt;
          </a>
          {liveUrl && (
             <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-text text-gray-text font-medium hover:bg-gray-text/20 transition-colors">
              Live &gt;=
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
