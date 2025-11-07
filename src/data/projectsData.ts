export interface Project {
  imgSrc?: string;
  tags: string[];
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  liveUrlText?: string;
}

export const completeProjects: Project[] = [
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/1ba6/5815/7723d9cd83927378d0636a628b21f398?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RyPcjteh-3n3364d4FPNkKTyeFCxegfUwaWUMVdcoWEUY6QHGONNh6kzX8pazam0sRvL879F0V4pf-pMhjUkSyroZshbKtiNTf1yeGXxWM0w5hkh0pn3SvGlgWuIqyy3WyRz3MeYclORw6-7-7OAJ9f~yMytsjWkBtjADGSUtY4I8SAWpxYoPGO-Au5JJ2GrQiWCOSbqPVyfFD78zhvISDdg6C5UtuL9RJvFjzEKcJzA-hknt99hPEWdzuc8lTRodhOCxAxPy8Qafz1BYNyKYFILPvBkfD-5IHdVn4G0U0lTAtxgmpuCWBu0MSzjvKClz-CqLlN00aedCCiRSMbyqA__",
    tags: ["Python", "Ollama", "Gradio", "json"],
    title: "Local code Assistant",
    description: "offline Ai Code Helper Assistant",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cf3d/5ca5/1c430c5feca7d7e9d9f74810e101c995?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XjtkG~nZPJmZsE6-Lxj~GVrUTPyg94zNsSWbxuiVBTE1IoI5IiZhm3lsH5omXTfWxeLk6ZTmWsi7LuUv0OqTpo6~2If4rZy~C0Ky~wgEEB2MnDHkwEHMA~0X7iAYaphztr-p66B3IzN7Mg8WQ6a5tBL-vznCzmgX6LXLdNKDxJD0aL-van8E0S~ZO0DEObJ6-JqMFd8-A2LpkjEjwyTfMRNCIrBkWT9ciAwAOO1KwFKVLbgygJ7kbESoN1aNlEKTanLgcZ8QUHzsO2fQImNIHJIg7rPbzJ11erexDrKQoAAUjVbYWJ0HGlaAWDQTgP7igqIJkDZTZDrriThOmPNFPA__",
    tags: ["YOLOv8", "PyTorch", "Labelstudio"],
    title: "RedAmberGreen",
    description: "A YOLO-based custom model that detects traffic lights and their colors from live feeds, images, or videos",
    githubUrl: "#"
  },
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/2239/0330/2ae3b3beff27bd32670522d54a43e876?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MbLxF8pNp7g7uTnNheL-rq-hbeU2PmQ4epbGHocZCyu1YZop-q3LolK4YVLYWAoQ7hzexVPX7fXOiVeaA1eH-eNy3qo7tzOSvIyib~x0-1aOsCy~PmzYaMB4BfQBvgWViKKhFaCQbHQzjL03wrAjCWcOHhNAU1U10QH~8rS76R2-XnV2~s1crHoOHaZvCv8gW79GciFei-6aeGV7bmNIq5-YEgx24YVgOOQCHXkVA9dLLsIpWeaMjT10smH7arvpEgGtpdxdVeUkDib2s7WKsB4gFR2gIxFMwJpIVYXO3KJxS9h8MR0pQTGb1FTFpvUA39fkwZIExjTYj96pSIhhxg__",
    tags: ["Langchain", "Python", "Pinecone", "Groq"],
    title: "MediPine",
    description: "Medipine is a medical chatbot that extracts and stores knowledge from textbooks to answer queries and questions accurately",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/638e/5825/a780744f89ce9c3bc0546de0177fd7b9?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=suvXsyx6nDaGExoxPHlXz~jNolf4NAqlmN4AdNY7fCEPofwTsiVTsjbLjI9dxMmyjTA3QvoNsLT7pcm61tSqCDxfIkXFN4e~e-WX42t2~RM5xvqZe9j9LFRD4qjv4u2FDql24Gn75dXQxGuiMSt~iq4uCYflR8MbZItT5nd-9cXkvIzDN2zVnmypD3~ODM-F2mVjBJpjSmAAebXVO27afoZFVaAxf-OQQ13lhnUOnSsLE5poBSMmfxhAmYItZcrWL3sZIjHza-hxvyPeoXB7Aw1ZbQH1-bbKh0PqosjsRcCiag3O3ZvZytVBoM6ResZQTE-l5BywPHLf1S5T60U~bQ__",
    tags: ["Python", "streamlit", "langchain Groq"],
    title: "Summify",
    description: "A lightweight tool that summarizes YouTube videos and websites into concise, easy-to-read overviews",
    githubUrl: "#"
  },
  {
    imgSrc: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/785e/6617/4e105d2f99dc00691593594f41c85514?Expires=1763337600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FVvtwDkhOwcRnT-xW~ni5K7tLu0RtY6SibgazTM6wC8fY33gVy5sRL4rdPj0iUP7Hg~uQL9BAb67zUgOx2x6pbu7cEgptHfCNEn88VaCwn6ub9xvuz5egJZECysZBbrhnIiuiMAx~ky2B4uZs3QFtXROV6BjaYnMzdQZe-povOs9Y--q7kV3lwVnq6thS9KW4Xv~a9-6qOTbgJu4bZKOXhpzqOvQm3GuvB09Jhhk-qwo1hWYnO4iwritxaGqHt672g8RFsp-Y1AwNPDQPXe0TdOQDkAr33Mcq3Wdqmsdq6l-vOfVHQVyUowAWN4Js73mpfm2IljxSix~6M7z7JzBfA__",
    tags: ["Yolov8", "python", "OpenCv"],
    title: "RoadFlowYOLO",
    description: "A YOLOv8-based real-time model that detects and counts vehicles from images, videos, or live camera feeds to analyze traffic flow efficiently",
    githubUrl: "#"
  }
];

export const miniProjects: Project[] = [
  {
    tags: ["Python", "tensorflow", "streamlit"],
    title: "Wordpredict",
    description: "A Next Word Prediction model using NLP that suggests the most probable next word from user input, simulating predictive text systems like Google’s suggestions",
    githubUrl: "#",
    liveUrlText: "Github"
  },
  {
    tags: ["Python", "tensorflow", "pickel"],
    title: "RAG Doc’s Q&A",
    description: "An AI-powered RAG application that answers queries from PDF documents with accurate, context-aware responses.",
    githubUrl: "#",
    liveUrlText: "Github"
  },
  {
    tags: ["Yolov8"],
    title: "YoloV8 Obj detection",
    description: "A flexible YOLOv8 project for detecting and classifying objects from photos, videos, and live camera feeds.",
    githubUrl: "#",
    liveUrlText: "Github"
  },

  {
    tags: ["Python"],
    title: "Olympic Data Analyser",
    description: "A Summer Olympics data analysis project that cleans, explores, and visualizes athlete and country trends over time, with a Streamlit app reading the dataset directly from a ZIP file.",
    githubUrl: "#",
    liveUrlText: "Streamlit"
  },
  {
    tags: ["Python", "Jupyter-notebook"],
    title: "NeuroTune",
    description: "NeuroTune is a Streamlit-based music recommendation system that suggests songs using audio and metadata similarity, offering an easy and interactive way to discover tracks",
    githubUrl: "#",
    liveUrlText: "Github"
  },
  {
    tags: ["python", "seaborn", "scikit-learn"],
    title: "Calories Burnt Prediction",
    description: "An interactive Streamlit app that uses an XGBoost model to predict calories burned from personal and exercise data, featuring real-time predictions, visualizations, and a clean, responsive UI.",
    githubUrl: "#",
    liveUrlText: "Streamlit"
  }
];
