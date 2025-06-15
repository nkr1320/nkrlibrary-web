import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stepper, 
  Step, 
  StepLabel, 
  Box, 
  Button, 
  Paper,
  Typography 
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';
import PersonalInfoSection from './sections/PersonalInfoSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';

const steps = [
  { label: 'Personal Info', component: PersonalInfoSection },
  { label: 'Experience', component: ExperienceSection },
  { label: 'Education', component: EducationSection },
  { label: 'Skills', component: SkillsSection },
  { label: 'Projects', component: ProjectsSection },
  { label: 'Certifications', component: CertificationsSection },
];

const ResumeWizard: React.FC = () => {
  const { state, setStep } = useResume();
  const { currentStep } = state;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep]?.component;

  return (
    <Paper className="glass-card">
      {/* Stepper Header */}
      <Box className="p-6 border-b border-border">
        <Stepper 
          activeStep={currentStep} 
          orientation="horizontal"
          sx={{
            '& .MuiStepLabel-label': {
              fontSize: '0.875rem',
              '&.Mui-active': {
                color: 'hsl(var(--primary))',
                fontWeight: 600,
              },
              '&.Mui-completed': {
                color: 'hsl(var(--primary))',
              },
            },
            '& .MuiStepIcon-root': {
              color: 'hsl(var(--muted))',
              '&.Mui-active': {
                color: 'hsl(var(--primary))',
              },
              '&.Mui-completed': {
                color: 'hsl(var(--primary))',
              },
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                onClick={() => setStep(index)}
                sx={{ cursor: 'pointer' }}
              >
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden">{index + 1}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Step Content */}
      <Box className="p-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h6" className="mb-4 font-semibold">
            {steps[currentStep]?.label}
          </Typography>
          
          {CurrentStepComponent && <CurrentStepComponent />}
        </motion.div>
      </Box>

      {/* Navigation */}
      <Box className="p-6 border-t border-border flex justify-between">
        <Button
          onClick={handleBack}
          disabled={currentStep === 0}
          startIcon={<ArrowBack />}
          variant="outlined"
          sx={{
            borderColor: 'hsl(var(--border))',
            color: 'hsl(var(--foreground))',
            '&:hover': {
              borderColor: 'hsl(var(--primary))',
              backgroundColor: 'hsl(var(--accent))',
            },
          }}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          <Typography variant="body2" className="text-muted-foreground self-center">
            Step {currentStep + 1} of {steps.length}
          </Typography>
        </div>

        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          endIcon={<ArrowForward />}
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
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </Box>
    </Paper>
  );
};

export default ResumeWizard;