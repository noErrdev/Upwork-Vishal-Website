"use client"
import React, { useState } from "react";
import { PROJECTS_INFO } from "@/constants";

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleProject = (id) => {
    setOpenProjectId(prevId => prevId === id ? null : id);
  };
  return (
    <section className="main-container flex flex-col text-center py-8 bg-primary relative" id="projects">
      <div className="flex items-center justify-center mb-8">
        <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
        <h2 className="text-white mx-2 font-medium">Projects</h2>
        <svg width="18" height="18" viewBox="0 0 16 16" className="ml-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 16 16" className="ml-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div>
      {PROJECTS_INFO.map((project) => (
      <div key={project.id} className="mb-4">
        <button
          className="w-full text-left font-bold flex justify-between items-center text-white py-2 px-4 sm:px-8 md:px-24 lg:px-48 bg-secondary"
          onClick={() => toggleProject(project.id)}
        >
          <div>{project.name}</div>
          <div className="text-sm">{openProjectId === project.id ? '▼' : '▶'}</div> 
        </button>
        {openProjectId === project.id && (
          <div className="py-4 px-48 text-left text-white">
            <div className="font-bold">{project.text.title}</div>
            {project.text.description.map((desc, index) => (
              <div key={index} className="text-white flex items-baseline">
                <p className="inline text-[10px] mr-1">▶</p>{desc}
              </div>
            ))}
            <div className="flex justify-center mx-auto mt-4">
              <img src={project.src} alt={project.name} width={900} height={400} objectFit="cover" layout="responsive" className="rounded-xl"/>
            </div>
          </div>
        )}
      </div>
      ))}
      <div 
        className="absolute -bottom-2 left-0 w-full h-[12px] bg-repeat z-10"
        style={{
          backgroundImage: "url('/design-blue-bottom.png')",
          backgroundSize: "auto",
        }}
      >            
      </div>
    
    </section>
  );
};

export default Projects;