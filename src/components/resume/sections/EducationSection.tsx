import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Paper, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';

const EducationSection: React.FC = () => {
  const { state, addEducation, updateEducation, removeEducation } = useResume();
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    year: '',
    location: '',
    gpa: ''
  });

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree && newEducation.year) {
      addEducation(newEducation);
      setNewEducation({
        institution: '',
        degree: '',
        year: '',
        location: '',
        gpa: ''
      });
    }
  };

  const handleUpdateEducation = (id: string, field: string, value: string) => {
    updateEducation(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Education Items */}
      {state.resumeData.education.map((edu) => (
        <Paper key={edu.id} className="p-4 glass-card">
          <div className="flex justify-between items-start mb-4">
            <Typography variant="h6" className="font-semibold">
              Education Entry
            </Typography>
            <IconButton
              onClick={() => removeEducation(edu.id)}
              size="small"
              sx={{ color: 'hsl(var(--destructive))' }}
            >
              <Delete />
            </IconButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Institution"
              value={edu.institution}
              onChange={(e) => handleUpdateEducation(edu.id, 'institution', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Degree"
              value={edu.degree}
              onChange={(e) => handleUpdateEducation(edu.id, 'degree', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Graduation Year"
              value={edu.year}
              onChange={(e) => handleUpdateEducation(edu.id, 'year', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="e.g., 2024"
            />
            <TextField
              fullWidth
              label="Location"
              value={edu.location}
              onChange={(e) => handleUpdateEducation(edu.id, 'location', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="GPA (Optional)"
              value={edu.gpa || ''}
              onChange={(e) => handleUpdateEducation(edu.id, 'gpa', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="e.g., 3.8/4.0"
            />
          </div>
        </Paper>
      ))}

      {/* Add New Education Form */}
      <Paper className="p-4 glass-card border-dashed border-2 border-muted">
        <Typography variant="h6" className="mb-4 font-semibold">
          Add New Education
        </Typography>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <TextField
            fullWidth
            label="Institution"
            value={newEducation.institution}
            onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., University Name"
          />
          <TextField
            fullWidth
            label="Degree"
            value={newEducation.degree}
            onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., Bachelor of Computer Science"
          />
          <TextField
            fullWidth
            label="Graduation Year"
            value={newEducation.year}
            onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., 2024"
          />
          <TextField
            fullWidth
            label="Location"
            value={newEducation.location}
            onChange={(e) => setNewEducation({ ...newEducation, location: e.target.value })}
            variant="outlined"
            size="small"
          />
          <TextField
            fullWidth
            label="GPA (Optional)"
            value={newEducation.gpa}
            onChange={(e) => setNewEducation({ ...newEducation, gpa: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., 3.8/4.0"
          />
        </div>

        <Button
          onClick={handleAddEducation}
          disabled={!newEducation.institution || !newEducation.degree || !newEducation.year}
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
          Add Education
        </Button>
      </Paper>
    </div>
  );
};

export default EducationSection;