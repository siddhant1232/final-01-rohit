import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Mail, MessageSquare } from 'lucide-react';
import Dots from './ui/Dots';

const Contact: React.FC = () => {
  return (
    <section id="contacts" className="py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <SectionHeader title="contacts" />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-gray-text leading-relaxed">
              I am interested in internship opportunities and collaborating on projects. If you have any other requests or questions, please feel free to reach out to me.
            </p>
          </div>
          <div className="w-full lg:w-auto flex items-center gap-8">
            <div className="hidden lg:block">
              <Dots />
            </div>
            <div className="w-full lg:w-auto border border-gray-text p-4">
              <h3 className="text-white font-semibold mb-4">Message me here</h3>
              <a href="#" className="flex items-center gap-2 mb-2 text-gray-text hover:text-white transition-colors">
                <MessageSquare size={24} />
                <span>!ECLIPSE#2517</span>
              </a>
              <a href="mailto:rohit@example.com" className="flex items-center gap-2 text-gray-text hover:text-white transition-colors">
                <Mail size={24} />
                <span>rohit@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
