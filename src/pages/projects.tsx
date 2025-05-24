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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group p-6 rounded-2xl shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg border ${
              activeProjectId === project.id ? 'bg-indigo-600 text-white' : 'bg-white'
            }`}
            onClick={() => handleOpen(project.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <FaFolderOpen className="text-indigo-500 group-hover:animate-pulse text-lg" />
            </div>
            <p className={`text-sm ${activeProjectId === project.id ? 'text-indigo-100' : 'text-gray-600'}`}>
              {project.description}
            </p>

            {activeProjectId === project.id && (
              <div className="mt-5 p-4 bg-white text-gray-800 shadow-md rounded-xl transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                <p className="text-sm">{project.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 font-medium"
                >
                  <FaTimes />
                  Close Project
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
