import React from 'react';
// import { SectionHeader } from './ui/SectionHeader';
import { ProjectCard } from './ui/ProjectCard';
import { Link } from 'react-router-dom';

const projects = [
  {
    imgSrc: "https://res.cloudinary.com/dzrzlp4bz/image/upload/v1763446193/local_b61mli.png",
    tags: ["Python", "Ollama", "Gradio", "json"],
    title: "Local code Assistant",
    description: "offline Ai Code Helper Assistant",
    githubUrl: "https://github.com/RandomRohit-hub/local-code-assistant",
    // liveUrl: "#"
  },
  {
    imgSrc: "https://res.cloudinary.com/dzrzlp4bz/image/upload/v1763446336/traphic_qqbhrg.png",
    tags: ["YOLOv8", "PyTorch", "Labelstudio"],
    title: "RedAmberGreen",
    description: "A YOLO-based custom model that detects traffic lights and their colors from live feeds, images, or videos",
    githubUrl: "https://github.com/RandomRohit-hub/RedAmberGreen"
  },
  {
    imgSrc: "https://res.cloudinary.com/dzrzlp4bz/image/upload/v1763446436/medical_u9ylnx.png",
    tags: ["Langchain", "Python", "Pinecone", "Groq"],
    title: "MediPine",
    description: "Medipine is a medical chatbot that extracts and stores knowledge from textbooks to answer queries and questions accurately",
    githubUrl: "https://github.com/RandomRohit-hub/MediPine-FlaskLLM"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="flex items-center justify-between w-full mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-medium text-white">
              <span className="text-primary">#</span>projects
            </h2>
            <div className="hidden sm:block w-24 md:w-48 h-px bg-primary"></div>
          </div>
          <Link to="/projects" className="text-white font-medium whitespace-nowrap hover:underline">
            View all ~~&gt;
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
