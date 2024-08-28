"use client"
import React, { useState } from "react";
import { SERVICES_INFO } from "@/constants";

const Services = () => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleProject = (id) => {
    setOpenProjectId(prevId => prevId === id ? null : id);
  };
  return (
    <section className="flex flex-col text-center py-8 bg-white" id="services">
      <div className="relative">
        <div className="flex items-center justify-center mb-4">
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
          </svg>
          <h2 className="text-primary mb-2 mx-2 font-medium">
            Services
          </h2>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 16 16" className="mr-0">
            <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col text-left justify-between px-4 sm:px-8 md:px-24 lg:px-48">
        <div className="text-black text-left py-4">
          <div className="mb-2">At Meeka, we tailor process designs to meet your unique business needs. Our expert chemical engineers work closely with you to identify challenges and deliver viable solutions for process upgrades and expansions.</div>
          <div>From process design to lifecycle analysis, we are proficient in all aspects of process engineering, ensuring that your operations run as seamlessly and efficiently as possible. Our expert team is adept at strategizing and executing, guaranteeing you get the value-added consultancy service your business needs to excel.</div>
        </div>
        <div className="text-black text-left py-4">
          <div className="font-bold">Our Approach</div>
          <div>We enhance process operations through disciplined front-end loading design, offering:</div>
        </div>
      </div>
      {SERVICES_INFO.map((project) => (
      <div key={project.id} className="mb-4 z-40">
        <button
          className="w-full text-left font-bold flex items-center justify-between text-white py-2 px-4 sm:px-8 md:px-24 lg:px-48 bg-secondary"
          onClick={() => toggleProject(project.id)}
        >
          <div>{project.name}</div>
          <div className="text-sm">{openProjectId === project.id ? '▼' : '▶'}</div> 
        </button>
        {openProjectId === project.id && (
          <div className="py-4 px-4 sm:px-8 md:px-24 lg:px-48 text-left text-primary z-5">
            <div className="font-bold">{project.text.title}</div>
            {project.text.description.map((desc, index) => (
              <div key={index} className="text-primary flex items-baseline">
                <p className="inline text-[10px] mr-1">▶</p>{desc}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
    <div className="text-black text-left px-4 sm:px-8 md:px-24 lg:px-48 py-4">
      <div className="font-bold">Efficiency & Risk Management</div>
      <div>Our detailed design packages minimize risks and maximize efficiency, reliability, and safety. Partner with us for superior, tailored process design solutions.</div>
    </div>
    </section>
  );
};

export default Services;