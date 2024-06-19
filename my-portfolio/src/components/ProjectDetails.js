import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data'; // Import your project data

export default function ProjectDetails() {
  const { id } = useParams(); // Fetch the id parameter from the URL
  const project = projects[parseInt(id, 10)]; // Convert id to integer and fetch corresponding project

  if (!project) {
    return <div>Project not found</div>; // Handle case where project with given id doesn't exist
  }

  return (
    <section className="text-gray-300 bg-gradient-to-r from-gray-1000 via-gray-850 to-gray-700 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt={project.title}
              className="object-cover object-center rounded-lg"
              src={project.image}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-3xl font-medium title-font mb-4 text-white">{project.title}</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
              {project.subtitle}
            </h2>
            <p className="leading-relaxed">{project.description}</p>
            {/* Additional project details as needed */}
            <a
              href={project.link}
              className="text-green-400 inline-flex items-center mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
