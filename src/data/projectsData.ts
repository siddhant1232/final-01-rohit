export interface Project {
  imgSrc?: string;
  tags: string[];
  title: string;
  description: string;
  githubUrl: string;
  // liveUrl?: string;
  // liveUrlText?: string;
}

export const completeProjects: Project[] = [
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
    githubUrl: "https://github.com/RandomRohit-hub/MediPine-FlaskLLM",
    // liveUrl: "#"
  },
  {
    imgSrc: "https://res.cloudinary.com/dzrzlp4bz/image/upload/v1763446549/quick_r4buio.png",
    tags: ["Python", "streamlit", "langchain Groq"],
    title: "Summify",
    description: "A lightweight tool that summarizes YouTube videos and websites into concise, easy-to-read overviews",
    githubUrl: "https://github.com/RandomRohit-hub/Summify"
  },
  {
    imgSrc: "https://res.cloudinary.com/dzrzlp4bz/image/upload/v1763446619/opencv_ctykaz.png",
    tags: ["Yolov8", "python", "OpenCv"],
    title: "RoadFlowYOLO",
    description: "A YOLOv8-based real-time model that detects and counts vehicles from images, videos, or live camera feeds to analyze traffic flow efficiently",
    githubUrl: "https://github.com/RandomRohit-hub/RoadFlowYOLO"
  }
];

export const miniProjects: Project[] = [
  {
    tags: ["Python", "tensorflow", "streamlit"],
    title: "Wordpredict",
    description: "A Next Word Prediction model using NLP that suggests the most probable next word from user input, simulating predictive text systems like Google’s suggestions",
    githubUrl: "https://github.com/RandomRohit-hub/Next-Word-Prediction-Using-LSTM",
    // liveUrlText: "Github"
  },
  {
    tags: ["Python", "tensorflow", "pickel"],
    title: "RAG Doc’s Q&A",
    description: "An AI-powered RAG application that answers queries from PDF documents with accurate, context-aware responses.",
    githubUrl: "https://github.com/RandomRohit-hub/RAG-Document-Q-A-chatbot-with-groq-and-llama3",
    // liveUrlText: "Github"
  },
  {
    tags: ["Yolov8"],
    title: "YoloV8 Obj detection",
    description: "A flexible YOLOv8 project for detecting and classifying objects from photos, videos, and live camera feeds.",
    githubUrl: "https://github.com/RandomRohit-hub/obj-detection-Yolo-v8",
    // liveUrlText: "Github"
  },

  {
    tags: ["Python"],
    title: "Olympic Data Analyser",
    description: "A Summer Olympics data analysis project that cleans, explores, and visualizes athlete and country trends over time, with a Streamlit app reading the dataset directly from a ZIP file.",
    githubUrl: "https://github.com/RandomRohit-hub/Olympic-Data-Analyser",
    // liveUrlText: "Streamlit"
  },
  {
    tags: ["Python", "Jupyter-notebook"],
    title: "NeuroTune",
    description: "NeuroTune is a Streamlit-based music recommendation system that suggests songs using audio and metadata similarity, offering an easy and interactive way to discover tracks",
    githubUrl: "https://github.com/RandomRohit-hub/NeuroTune",
    // liveUrlText: "Github"
  },
  {
    tags: ["python", "seaborn", "scikit-learn"],
    title: "Calories Burnt Prediction",
    description: "An interactive Streamlit app that uses an XGBoost model to predict calories burned from personal and exercise data, featuring real-time predictions, visualizations, and a clean, responsive UI.",
    githubUrl: "https://github.com/RandomRohit-hub/Calories-Burnt-Prediction",
    // liveUrlText: "Streamlit"
  }
];
