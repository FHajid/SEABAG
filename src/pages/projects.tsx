import { useState } from 'react';

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
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md ${
              activeProjectId === project.id ? 'bg-gray-800 text-white' : 'bg-white'
            }`}
            onClick={() => handleOpen(project.id)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            {activeProjectId === project.id && (
              <div className="mt-4 p-4 bg-white text-gray-800 shadow-lg rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                <p>{project.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
                >
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