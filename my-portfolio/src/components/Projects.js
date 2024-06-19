import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-300 bg-gradient-to-r from-gray-1000 via-gray-850 to-gray-700 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white border border-gray-400 inline-block px-4 py-2">
            My Projects
          </h1> 
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-6"
              style={{ height: '320px' }} // Ensure each project card has the same height
            >
              <div className="flex relative overflow-hidden w-full h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition duration-500 ease-in-out"
                  src={project.image}
                  style={{ height: '100%' }} // Ensure image takes full height of the container
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
