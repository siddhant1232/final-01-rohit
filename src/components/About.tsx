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
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/7886/716d/a0552e00b2b965caf2ddb10a611f5861?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FXWadPmWnHNkzUSHp1GZb0K9BfEpohhXAvig3sKilyU7E891f-~sdI0HkKYNtwJUzaMBwCy9o331cJmqNPjuAvaSn-DE5iYQllYnusCiCl4XPvCxMW6audIwt5DIQ0z4wVFBQK2ES2ELk1JIFTY3X6VUe1v3z~Z5Zi0PyfPh9L1qDqJZmJTb~1iCxGBvpGcO3TvHkexh2csul9L1~FwpNVyg3nGLH27ffQGfopxne1dDqhfwmT04J7ebDPAep0R8nZf~k9JV~ofT~dLrn~qoz~b9s4AVQO4KJBt6Hn8iY8ihjK227yOidK0zsM0eM8iRIzgl4rqMSFRpIC7ZygKa1g__" 
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
