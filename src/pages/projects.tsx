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
  { id: 3, title: 'Project Gamma', description: 'Third project demonstrating various capabilities' },
];

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const handleOpen = (id: number) => setActiveProjectId(id);
  const handleClose = () => setActiveProjectId(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const isActive = activeProjectId === project.id;

          return (
            <div
              key={project.id}
              className={`relative p-6 rounded-xl border shadow-md cursor-pointer transition duration-300 hover:shadow-lg ${
                isActive ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'
              }`}
              onClick={() => handleOpen(project.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <FaFolderOpen className="text-indigo-500" />
              </div>
              <p className={`text-sm ${isActive ? 'text-indigo-100' : 'text-gray-600'}`}>
                {project.description}
              </p>

              {/* Expanded Panel */}
              {isActive && (
                <div
                  className="absolute inset-0 bg-white text-gray-900 p-5 rounded-xl shadow-lg z-10 overflow-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button top-right */}
                  <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                    onClick={handleClose}
                  >
                    <FaTimes size={20} />
                  </button>

                  <h4 className="text-lg font-bold mb-2">Project Description</h4>
                  <p className="text-sm">{project.description}</p>

                  <button
                    onClick={handleClose}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
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
