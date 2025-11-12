import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { SkillCard } from './ui/SkillCard';
import Dots from './ui/Dots';

const skillsData = {
  languages: ["Python", "HTML", "CSS", "JavaScript", "C++", "Java"],
  databases: ["Astra DB", "Pinecone","ChromaDB","FAISS"],
  tools: ["Groq", "GitHub","Uvicorn","Anaconda / Conda","Git / GitHub","Docker","VS Code (IDE)"],
  frameworks: ["OpenCV","PyTorch","llamaIndex","Hugging Face Transformers","FastApi", "Uvicorn", "Tensorflow", "Langchain-groq", "Langserve", "Langchain_community", "Streamlit"],
  other: [ "Ultralytics (YOLO)",  "Torchvision", "Numpy", "Matplotlib", "Pandas", "JAX", "Jaxlib", "Scipy", "Mediapipe", "ONNX Runtime", "Ultralytics-thop"]
};


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <SectionHeader title="skills" />
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-12">
          
          {/* Skills cards */}
          <div className="w-full lg:w-2/3">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Languages Card - Spans 2 rows on desktop */}
                <div className="md:row-span-2">
                    <SkillCard title="Languages" skills={skillsData.languages} />
                </div>

                {/* Databases Card */}
                <div>
                    <SkillCard title="Databases" skills={skillsData.databases} />
                </div>

                {/* Other Card - Spans 2 rows on desktop */}
                <div className="md:row-span-2">
                    <SkillCard title="Other" skills={skillsData.other} />
                </div>

                {/* Tools Card - Placed in 2nd col, 2nd row on desktop */}
                <div className="md:col-start-2 md:row-start-2">
                    <SkillCard title="Tools" skills={skillsData.tools} />
                </div>
                
                {/* Frameworks Card - Spans all 3 columns on desktop */}
                <div className="md:col-span-3">
                    <SkillCard title="Frameworks" skills={skillsData.frameworks} />
                </div>
            </div>
          </div>

          {/* Decorative elements for large screens */}
          <div className="hidden lg:flex w-1/3 justify-center items-center relative self-stretch">
            <Dots className="absolute top-0 left-10" />
            <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-gray-text" />
            <div className="absolute bottom-1/4 left-1/4 w-14 h-14 border border-gray-text" />
            <Dots className="absolute bottom-0 right-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
