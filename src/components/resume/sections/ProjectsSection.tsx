import React, { useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResume } from "@/contexts/ResumeContext";

const ProjectsSection: React.FC = () => {
  const { state, addProject, updateProject, removeProject } = useResume();
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    technologies: "",
    link: "",
    duration: "",
  });

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      addProject(newProject);
      setNewProject({
        name: "",
        description: "",
        technologies: "",
        link: "",
        duration: "",
      });
    }
  };

  const handleUpdateProject = (id: string, field: string, value: string) => {
    updateProject(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Projects */}
      {state.resumeData.projects.map((project) => (
        <div key={project.id} className="p-4 glass-card rounded-lg border border-border">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">Project Entry</h3>
            <Button
              onClick={() => removeProject(project.id)}
              size="icon"
              variant="destructive"
              className="ml-2"
              aria-label="Remove Project"
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Project Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={project.name}
                onChange={(e) => handleUpdateProject(project.id, "name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration (Optional)</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={project.duration || ""}
                onChange={(e) => handleUpdateProject(project.id, "duration", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                rows={3}
                value={project.description}
                onChange={(e) => handleUpdateProject(project.id, "description", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={project.technologies || ""}
                onChange={(e) => handleUpdateProject(project.id, "technologies", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add New Project Form */}
      <div className="p-4 glass-card border-dashed border-2 border-muted rounded-lg">
        <h3 className="mb-4 font-semibold">Add New Project</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
              placeholder="e.g., E-commerce Website"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration (Optional)</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newProject.duration}
              onChange={(e) =>
                setNewProject({ ...newProject, duration: e.target.value })
              }
              placeholder="e.g., 3 months"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Technologies Used</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newProject.technologies}
              onChange={(e) =>
                setNewProject({ ...newProject, technologies: e.target.value })
              }
              placeholder="e.g., React, Node.js, MongoDB"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Project Link (Optional)</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newProject.link}
              onChange={(e) =>
                setNewProject({ ...newProject, link: e.target.value })
              }
              placeholder="https://github.com/username/project"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Project Description</label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              rows={3}
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              placeholder="Describe what the project does, your role, and key achievements..."
            />
          </div>
        </div>

        <Button
          onClick={handleAddProject}
          disabled={!newProject.name || !newProject.description}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Add Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
