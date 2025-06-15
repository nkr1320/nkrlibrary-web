import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Paper, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';

const ExperienceSection: React.FC = () => {
  const { state, addExperience, updateExperience, removeExperience } = useResume();
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    duration: '',
    location: '',
    description: ''
  });

  const handleAddExperience = () => {
    if (newExperience.company && newExperience.position) {
      addExperience(newExperience);
      setNewExperience({
        company: '',
        position: '',
        duration: '',
        location: '',
        description: ''
      });
    }
  };

  const handleUpdateExperience = (id: string, field: string, value: string) => {
    updateExperience(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Experience Items */}
      {state.resumeData.experience.map((exp) => (
        <Paper key={exp.id} className="p-4 glass-card">
          <div className="flex justify-between items-start mb-4">
            <Typography variant="h6" className="font-semibold">
              Experience Entry
            </Typography>
            <IconButton
              onClick={() => removeExperience(exp.id)}
              size="small"
              sx={{ color: 'hsl(var(--destructive))' }}
            >
              <Delete />
            </IconButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Company"
              value={exp.company}
              onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Position"
              value={exp.position}
              onChange={(e) => handleUpdateExperience(exp.id, 'position', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Duration (e.g., Jan 2020 - Present)"
              value={exp.duration}
              onChange={(e) => handleUpdateExperience(exp.id, 'duration', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Location"
              value={exp.location}
              onChange={(e) => handleUpdateExperience(exp.id, 'location', e.target.value)}
              variant="outlined"
              size="small"
            />
            <div className="sm:col-span-2">
              <TextField
                fullWidth
                label="Job Description"
                multiline
                rows={3}
                value={exp.description}
                onChange={(e) => handleUpdateExperience(exp.id, 'description', e.target.value)}
                variant="outlined"
                placeholder="Describe your key responsibilities and achievements..."
              />
            </div>
          </div>
        </Paper>
      ))}

      {/* Add New Experience Form */}
      <Paper className="p-4 glass-card border-dashed border-2 border-muted">
        <Typography variant="h6" className="mb-4 font-semibold">
          Add New Experience
        </Typography>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <TextField
            fullWidth
            label="Company"
            value={newExperience.company}
            onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Position"
            value={newExperience.position}
            onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="Duration"
            value={newExperience.duration}
            onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., Jan 2020 - Present"
          />
          <TextField
            fullWidth
            label="Location"
            value={newExperience.location}
            onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
            variant="outlined"
            size="small"
          />
          <div className="sm:col-span-2">
            <TextField
              fullWidth
              label="Job Description"
              multiline
              rows={3}
              value={newExperience.description}
              onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
              variant="outlined"
              placeholder="Describe your key responsibilities and achievements..."
            />
          </div>
        </div>

        <Button
          onClick={handleAddExperience}
          disabled={!newExperience.company || !newExperience.position}
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
          Add Experience
        </Button>
      </Paper>
    </div>
  );
};

export default ExperienceSection;