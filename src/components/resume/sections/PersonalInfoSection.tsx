import React from 'react';
import { TextField } from '@mui/material';
import { useResume } from '@/contexts/ResumeContext';

const PersonalInfoSection: React.FC = () => {
  const { state, updatePersonalInfo } = useResume();
  const { personalInfo } = state.resumeData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <TextField
          fullWidth
          label="Full Name"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo({ email: e.target.value })}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="Phone"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="Address"
          value={personalInfo.address}
          onChange={(e) => updatePersonalInfo({ address: e.target.value })}
          variant="outlined"
        />
      </div>
      <div className="sm:col-span-2">
        <TextField
          fullWidth
          label="Professional Summary"
          multiline
          rows={4}
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;