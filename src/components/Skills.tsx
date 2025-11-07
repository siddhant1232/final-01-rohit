import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { SkillCard } from './ui/SkillCard';

const skillsData = {
  languages: ["Python", "JupyterNotebook", "HTML", "CSS", "JavaScript", "C++", "Java"],
  databases: ["Astra DB", "Pinecone"],
  tools: ["Groq", "GitHub"],
  frameworks: ["FastApi", "Uvicorn", "Tensorflow", "Langchain-groq", "Langserve", "Langchain_community", "Streamlit"],
  other: ["OpenCV", "Ultralytics (YOLO)", "PyTorch", "Torchvision", "Numpy", "Matplotlib", "Pandas", "JAX", "Jaxlib", "Scipy", "Mediapipe", "ONNX Runtime", "Ultralytics-thop"]
};


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title="skills" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="hidden lg:block lg:w-1/3 relative h-64">
            {/* Decorative elements can be added here */}
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard title="Languages" skills={skillsData.languages} />
            <div className="flex flex-col gap-4">
              <SkillCard title="Databases" skills={skillsData.databases} />
              <SkillCard title="Tools" skills={skillsData.tools} />
            </div>
            <SkillCard title="Frameworks" skills={skillsData.frameworks} />
            <div className="col-span-2 md:col-span-1">
              <SkillCard title="Other" skills={skillsData.other} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
