import React, { useState } from "react";
import { PROJECTS } from "../constants";
import Modal from "./Modal";  // Import the Modal component
import { FaVideo, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleOpenModal = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVideo("");
  };

  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl text-white">My Work</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
          key={project.id}
          className="block cursor-pointer"
        >
          <div
            className="relative mb-4 overflow-hidden rounded-2xl bg-black border border-green-500 
                       drop-shadow-neon transition-transform duration-300 hover:drop-shadow-neon-lg hover:-translate-y-2"
            // Applying the shadow and transform effect to this div
          >
            <div className="p-4">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-auto w-full object-cover rounded-md"  // Add border-radius here if you want a rounder image inside
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-500">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
        
                {/* Two CTA Buttons */}
                <div className="flex flex-col w-fit mx-auto justify-center mt-4 space-y-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Project
                  </a>
        
                  {/* Play Video Button */}
                  <button
                    onClick={() => handleOpenModal(project.videoSrc)}
                    className="bg-black border border-green-500 hover:bg-green-700 text-green-500 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaVideo className="mr-2" />
                    Play Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
                ))}
      </div>
      
      {/* Modal for Video Popup */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} videoSrc={selectedVideo} />
    </section>
  );
};

export default Projects;
