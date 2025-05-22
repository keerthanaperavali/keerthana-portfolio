import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import "./Projects.css";

const projects = [
  {
    title: "Echo Step: Smart Shoe for the Visually and Hearing Impaired",
    description: "Developed a smart shoe with real-time obstacle detection to aid visually and hearing-impaired individuals. Showcased at the IoT Project Expo, PSCMRCET, it offers hands-free navigation to improve mobility and safety.",
    images: [
      "/smartshoe1.jpg",
      "/smartshoe2.jpg",
    ],
    github: "https://drive.google.com/drive/folders/14EnV3PSVoFtB6QTvE-amFOH0GrZpRh07?usp=sharing",
  },
  {
    title: "Novaversity Club Website Development",
    description: "Built a responsive and user-friendly website for the Novaversity Club at PSCMRCET using HTML, CSS, Bootstrap, and JavaScript. The site features smooth navigation, interactive elements, and optimized performance to enhance user engagement.",
    images: [
      "/novaversity1.jpg",
      "/novaversity2.jpg",
    ],
    github: "https://cseds-novaversityclub.netlify.app/",
  },
  {
    title: "Data Visualization and Analysis Using Tableau",
    description: "Analyzed datasets like Omega HR, Super Store, Netflix, and Australia Wine Revenue using Tableau. Delivered key insights through interactive dashboards, enabling data-driven decisions and improving strategic planning.",
    images: [
      "/tableau1.jpg",
      "/tableau2.jpg",
    ],
    github: "https://public.tableau.com/app/profile/peravali.keerthana/vizzes",
  },
  

  // {
  //   title: "Smooth Pass Tollway",
  //   description: "Presented at the IEEE Project Expo, PSCMRCET — this Arduino-based project enables seamless toll collection to reduce traffic congestion and improve operational efficiency.",
  //   images: [
  //     "/smooth tolgate1.jpg",
  //   ],
  //   github: "https://drive.google.com/drive/folders/14EnV3PSVoFtB6QTvE-amFOH0GrZpRh07?usp=sharing",
  // },
];

const Projects = () => {
  return (
<div className="bg-gray-900 flex flex-col items-center justify-center pt-16 pb-8 px-4 sm:pt-20 sm:pb-12 sm:px-6">
      <p className="text-center text-green-500 italic mb-12 sm:mb-16 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-lg">
        My Projects
      </p>

      <div className="w-full max-w-6xl h-[700px] overflow-y-auto custom-scrollbar px-3 space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 p-6 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-green-300">{project.title}</h2>
              <p className="text-gray-300 mt-2 text-lg">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-lg"
              >
                <GoProjectSymlink className="text-xl" />
                Project Link
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
