import React from 'react';
import { SectionHeader } from './ui/SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about-me" className="py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <SectionHeader title="about-me" />
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-text mb-7 leading-relaxed">
              I'm Rohit, a developer passionate about AI, machine learning, and computer vision, especially YOLO and OpenCV. I enjoy combining creativity and technology to build innovative projects like real-time object detection, facial landmark recognition, and AI-powered chatbots using the latest frameworks.
            </p>
            <p className="text-gray-text mb-7 leading-relaxed hidden sm:block">
              I focus on turning complex AI/ML concepts into practical applications that solve real-world problems. By experimenting with tools like LangChain and Streamlit, I continuously improve my skills and contribute to the open-source community with projects that fuse technology with creativity.
            </p>
            <a href="#" className="inline-block px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors">
              Read more -&gt;
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://res.cloudinary.com/dzrzlp4bz/image/upload/v1763455046/about_iebl0b.png" 
              alt="Rohit holding a laptop" 
              className="max-w-xs md:max-w-sm w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
