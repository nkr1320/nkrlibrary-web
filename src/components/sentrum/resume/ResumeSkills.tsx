import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useResume } from '@/contexts/ResumeContext';

const ResumeSkills: React.FC = () => {
  const { state, updateSkills } = useResume();
  const { resumeData } = state;
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim()) {
      const newTechnical = [...resumeData.skills.technical, newSkill.trim()];
      updateSkills({ technical: newTechnical });
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    const newTechnical = resumeData.skills.technical.filter((_, i) => i !== index);
    updateSkills({ technical: newTechnical });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-4"
    >
      <h4 className="font-medium text-foreground">Skills</h4>
      
      <div className="flex gap-2">
        <Input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill..."
          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
        />
        <Button onClick={addSkill} size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.technical.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md text-sm"
          >
            {skill}
            <Button
              onClick={() => removeSkill(index)}
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResumeSkills;