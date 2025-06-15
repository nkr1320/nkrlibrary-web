import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Paper, Typography } from '@mui/material';
import { Add, Delete, Link } from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';

const ProjectsSection: React.FC = () => {
  const { state, addProject, updateProject, removeProject } = useResume();
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    technologies: '',
    link: '',
    duration: ''
  });

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      addProject(newProject);
      setNewProject({
        name: '',
        description: '',
        technologies: '',
        link: '',
        duration: ''
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
        <Paper key={project.id} className="p-4 glass-card">
          <div className="flex justify-between items-start mb-4">
            <Typography variant="h6" className="font-semibold">
              Project Entry
            </Typography>
            <IconButton
              onClick={() => removeProject(project.id)}
              size="small"
              sx={{ color: 'hsl(var(--destructive))' }}
            >
              <Delete />
            </IconButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Project Name"
              value={project.name}
              onChange={(e) => handleUpdateProject(project.id, 'name', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Duration (Optional)"
              value={project.duration || ''}
              onChange={(e) => handleUpdateProject(project.id, 'duration', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="e.g., 3 months"
            />
            <TextField
              fullWidth
              label="Technologies Used"
              value={project.technologies}
              onChange={(e) => handleUpdateProject(project.id, 'technologies', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="e.g., React, Node.js, MongoDB"
            />
            <TextField
              fullWidth
              label="Project Link (Optional)"
              value={project.link || ''}
              onChange={(e) => handleUpdateProject(project.id, 'link', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="https://github.com/username/project"
              InputProps={{
                startAdornment: <Link sx={{ mr: 1, color: 'hsl(var(--muted-foreground))' }} />,
              }}
            />
            <div className="sm:col-span-2">
              <TextField
                fullWidth
                label="Project Description"
                multiline
                rows={3}
                value={project.description}
                onChange={(e) => handleUpdateProject(project.id, 'description', e.target.value)}
                variant="outlined"
                placeholder="Describe what the project does, your role, and key achievements..."
              />
            </div>
          </div>
        </Paper>
      ))}

      {/* Add New Project Form */}
      <Paper className="p-4 glass-card border-dashed border-2 border-muted">
        <Typography variant="h6" className="mb-4 font-semibold">
          Add New Project
        </Typography>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <TextField
            fullWidth
            label="Project Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., E-commerce Website"
          />
          <TextField
            fullWidth
            label="Duration (Optional)"
            value={newProject.duration}
            onChange={(e) => setNewProject({ ...newProject, duration: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., 3 months"
          />
          <TextField
            fullWidth
            label="Technologies Used"
            value={newProject.technologies}
            onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., React, Node.js, MongoDB"
          />
          <TextField
            fullWidth
            label="Project Link (Optional)"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="https://github.com/username/project"
            InputProps={{
              startAdornment: <Link sx={{ mr: 1, color: 'hsl(var(--muted-foreground))' }} />,
            }}
          />
          <div className="sm:col-span-2">
            <TextField
              fullWidth
              label="Project Description"
              multiline
              rows={3}
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              variant="outlined"
              placeholder="Describe what the project does, your role, and key achievements..."
            />
          </div>
        </div>

        <Button
          onClick={handleAddProject}
          disabled={!newProject.name || !newProject.description}
          startIcon={<Add />}
          variant="contained"
          sx={{
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            '&:hover': {
              backgroundColor: 'hsl(var(--primary))',
              filter: 'brightness(0.9)',
            },
          }}
        >
          Add Project
        </Button>
      </Paper>
    </div>
  );
};

export default ProjectsSection;