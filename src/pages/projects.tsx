import { useState } from 'react';
import { FaFolderOpen, FaTimes } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
}

const projects: Project[] = [
  { id: 1, title: 'Project Alpha', description: 'A sample project showing basic functionality' },
  { id: 2, title: 'Project Beta', description: 'Another sample project with different features' },
  { id: 3, title: 'Project Gamma', description: 'Third project demonstrating various capabilities' }
];

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const handleOpen = (id: number) => setActiveProjectId(id);
  const handleClose = () => setActiveProjectId(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => {
          const isActive = activeProjectId === project.id;
          return (
            <div
              key={project.id}
              className={`relative group p-6 rounded-2xl shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg border ${
                isActive ? 'bg-indigo-600 text-white' : 'bg-white'
              }`}
              onClick={() => handleOpen(project.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                <FaFolderOpen className="text-indigo-500 group-hover:animate-pulse text-lg" />
              </div>
              <p className={`text-sm ${isActive ? 'text-indigo-100' : 'text-gray-600'}`}>
                {project.description}
              </p>

              {isActive && (
                <div className="absolute top-0 left-0 w-full h-full bg-white text-gray-800 rounded-2xl shadow-xl p-6 flex flex-col justify-between z-10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold">Project Description</h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                      className="text-gray-600 hover:text-red-500 transition-colors duration-300"
                      aria-label="Close"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                  <p className="text-sm mb-4">{project.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClose();
                    }}
                    className="self-start mt-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 font-medium"
                  >
                    Close Project
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
