import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { ProjectCard } from './ui/ProjectCard';
import { Link } from 'react-router-dom';

const projects = [
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/1ba6/5815/7723d9cd83927378d0636a628b21f398?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RyPcjteh-3n3364d4FPNkKTyeFCxegfUwaWUMVdcoWEUY6QHGONNh6kzX8pazam0sRvL879F0V4pf-pMhjUkSyroZshbKtiNTf1yeGXxWM0w5hkh0pn3SvGlgWuIqyy3WyRz3MeYclORw6-7-7OAJ9f~yMytsjWkBtjADGSUtY4I8SAWpxYoPGO-Au5JJ2GrQiWCOSbqPVyfFD78zhvISDdg6C5UtuL9RJvFjzEKcJzA-hknt99hPEWdzuc8lTRodhOCxAxPy8Qafz1BYNyKYFILPvBkfD-5IHdVn4G0U0lTAtxgmpuCWBu0MSzjvKClz-CqLlN00aedCCiRSMbyqA__",
    tags: ["Python", "Ollama", "Gradio", "json"],
    title: "Local code Assistant",
    description: "offline Ai Code Helper Assistant",
    githubUrl: "https://github.com/RandomRohit-hub/local-code-assistant",
    // liveUrl: "#"
  },
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cf3d/5ca5/1c430c5feca7d7e9d9f74810e101c995?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XjtkG~nZPJmZsE6-Lxj~GVrUTPyg94zNsSWbxuiVBTE1IoI5IiZhm3lsH5omXTfWxeLk6ZTmWsi7LuUv0OqTpo6~2If4rZy~C0Ky~wgEEB2MnDHkwEHMA~0X7iAYaphztr-p66B3IzN7Mg8WQ6a5tBL-vznCzmgX6LXLdNKDxJD0aL-van8E0S~ZO0DEObJ6-JqMFd8-A2LpkjEjwyTfMRNCIrBkWT9ciAwAOO1KwFKVLbgygJ7kbESoN1aNlEKTanLgcZ8QUHzsO2fQImNIHJIg7rPbzJ11erexDrKQoAAUjVbYWJ0HGlaAWDQTgP7igqIJkDZTZDrriThOmPNFPA__",
    tags: ["YOLOv8", "PyTorch", "Labelstudio"],
    title: "RedAmberGreen",
    description: "A YOLO-based custom model that detects traffic lights and their colors from live feeds, images, or videos",
    githubUrl: "https://github.com/RandomRohit-hub/RedAmberGreen"
  },
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/2239/0330/2ae3b3beff27bd32670522d54a43e876?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MbLxF8pNp7g7uTnNheL-rq-hbeU2PmQ4epbGHocZCyu1YZop-q3LolK4YVLYWAoQ7hzexVPX7fXOiVeaA1eH-eNy3qo7tzOSvIyib~x0-1aOsCy~PmzYaMB4BfQBvgWViKKhFaCQbHQzjL03wrAjCWcOHhNAU1U10QH~8rS76R2-XnV2~s1crHoOHaZvCv8gW79GciFei-6aeGV7bmNIq5-YEgx24YVgOOQCHXkVA9dLLsIpWeaMjT10smH7arvpEgGtpdxdVeUkDib2s7WKsB4gFR2gIxFMwJpIVYXO3KJxS9h8MR0pQTGb1FTFpvUA39fkwZIExjTYj96pSIhhxg__",
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
