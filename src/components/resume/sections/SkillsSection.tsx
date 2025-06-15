import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Chip, 
  Paper, 
  Typography, 
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';

const SkillsSection: React.FC = () => {
  const { state, updateSkills } = useResume();
  const [newTechnicalSkill, setNewTechnicalSkill] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState({ language: '', proficiency: 'Intermediate' as const });

  const handleAddTechnicalSkill = () => {
    if (newTechnicalSkill.trim()) {
      const updatedSkills = [...state.resumeData.skills.technical, newTechnicalSkill.trim()];
      updateSkills({ technical: updatedSkills });
      setNewTechnicalSkill('');
    }
  };

  const handleRemoveTechnicalSkill = (skillToRemove: string) => {
    const updatedSkills = state.resumeData.skills.technical.filter(skill => skill !== skillToRemove);
    updateSkills({ technical: updatedSkills });
  };

  const handleAddSoftSkill = () => {
    if (newSoftSkill.trim()) {
      const updatedSkills = [...state.resumeData.skills.soft, newSoftSkill.trim()];
      updateSkills({ soft: updatedSkills });
      setNewSoftSkill('');
    }
  };

  const handleRemoveSoftSkill = (skillToRemove: string) => {
    const updatedSkills = state.resumeData.skills.soft.filter(skill => skill !== skillToRemove);
    updateSkills({ soft: updatedSkills });
  };

  const handleAddLanguage = () => {
    if (newLanguage.language.trim()) {
      const updatedLanguages = [...state.resumeData.skills.languages, newLanguage];
      updateSkills({ languages: updatedLanguages });
      setNewLanguage({ language: '', proficiency: 'Intermediate' });
    }
  };

  const handleRemoveLanguage = (languageToRemove: string) => {
    const updatedLanguages = state.resumeData.skills.languages.filter(lang => lang.language !== languageToRemove);
    updateSkills({ languages: updatedLanguages });
  };

  return (
    <div className="space-y-6">
      {/* Technical Skills */}
      <Paper className="p-4 glass-card">
        <Typography variant="h6" className="mb-4 font-semibold">
          Technical Skills
        </Typography>
        
        <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
          {state.resumeData.skills.technical.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleRemoveTechnicalSkill(skill)}
              deleteIcon={<Delete />}
              variant="outlined"
              sx={{
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))',
                '&:hover': {
                  backgroundColor: 'hsl(var(--accent))',
                },
              }}
            />
          ))}
          {state.resumeData.skills.technical.length === 0 && (
            <Typography variant="body2" className="text-muted-foreground py-2">
              No technical skills added yet
            </Typography>
          )}
        </div>

        <div className="flex gap-2">
          <TextField
            fullWidth
            label="Add Technical Skill"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTechnicalSkill()}
            variant="outlined"
            size="small"
            placeholder="e.g., React, Python, AWS"
          />
          <Button
            onClick={handleAddTechnicalSkill}
            disabled={!newTechnicalSkill.trim()}
            variant="contained"
            sx={{
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              minWidth: 'auto',
              px: 2,
            }}
          >
            <Add />
          </Button>
        </div>
      </Paper>

      {/* Soft Skills */}
      <Paper className="p-4 glass-card">
        <Typography variant="h6" className="mb-4 font-semibold">
          Soft Skills
        </Typography>
        
        <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
          {state.resumeData.skills.soft.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleRemoveSoftSkill(skill)}
              deleteIcon={<Delete />}
              variant="outlined"
              sx={{
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))',
                '&:hover': {
                  backgroundColor: 'hsl(var(--accent))',
                },
              }}
            />
          ))}
          {state.resumeData.skills.soft.length === 0 && (
            <Typography variant="body2" className="text-muted-foreground py-2">
              No soft skills added yet
            </Typography>
          )}
        </div>

        <div className="flex gap-2">
          <TextField
            fullWidth
            label="Add Soft Skill"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddSoftSkill()}
            variant="outlined"
            size="small"
            placeholder="e.g., Leadership, Communication, Problem Solving"
          />
          <Button
            onClick={handleAddSoftSkill}
            disabled={!newSoftSkill.trim()}
            variant="contained"
            sx={{
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              minWidth: 'auto',
              px: 2,
            }}
          >
            <Add />
          </Button>
        </div>
      </Paper>

      {/* Languages */}
      <Paper className="p-4 glass-card">
        <Typography variant="h6" className="mb-4 font-semibold">
          Languages
        </Typography>
        
        <div className="space-y-2 mb-4 min-h-[40px]">
          {state.resumeData.skills.languages.map((lang) => (
            <div key={lang.language} className="flex items-center justify-between p-2 bg-accent/10 rounded">
              <span className="font-medium">{lang.language}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                <Button
                  onClick={() => handleRemoveLanguage(lang.language)}
                  size="small"
                  sx={{ minWidth: 'auto', p: 0.5, color: 'hsl(var(--destructive))' }}
                >
                  <Delete fontSize="small" />
                </Button>
              </div>
            </div>
          ))}
          {state.resumeData.skills.languages.length === 0 && (
            <Typography variant="body2" className="text-muted-foreground py-2">
              No languages added yet
            </Typography>
          )}
        </div>

        <div className="flex gap-2">
          <TextField
            fullWidth
            label="Language"
            value={newLanguage.language}
            onChange={(e) => setNewLanguage({ ...newLanguage, language: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., English, Spanish"
          />
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Proficiency</InputLabel>
            <Select
              value={newLanguage.proficiency}
              onChange={(e) => setNewLanguage({ ...newLanguage, proficiency: e.target.value as any })}
              label="Proficiency"
            >
              <MenuItem value="Basic">Basic</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Native">Native</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleAddLanguage}
            disabled={!newLanguage.language.trim()}
            variant="contained"
            sx={{
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              minWidth: 'auto',
              px: 2,
            }}
          >
            <Add />
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default SkillsSection;