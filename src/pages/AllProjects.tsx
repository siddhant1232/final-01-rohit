import React from 'react';
import { ProjectCard } from '../components/ui/ProjectCard';
import { MiniProjectCard } from '../components/ui/MiniProjectCard';
import { completeProjects, miniProjects } from '../data/projectsData';

const AllProjects: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          <span className="text-primary">/</span>projects
        </h1>
        <p className="text-gray-text mt-2">List of my projects</p>
      </div>

      <section id="complete-projects" className="mb-24">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium text-white">
                <span className="text-primary">#</span>complete-Projects
            </h2>
            <div className="hidden sm:block flex-grow h-px bg-primary"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completeProjects.map(p => (
            <ProjectCard key={p.title} {...p} imgSrc={p.imgSrc ?? ''} />
          ))}
        </div>
      </section>

      <section id="mini-projects">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-medium text-white">
                <span className="text-primary">#</span>mini-projects
            </h2>
            <div className="hidden sm:block flex-grow h-px bg-primary"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miniProjects.map(p => <MiniProjectCard key={p.title} {...p} />)}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
