import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Paper, Typography, LinearProgress, Tab, Tabs } from '@mui/material';
import ResumeWizard from './ResumeWizard';
import ResumePreview from './ResumePreview';
import ATSAnalyzer from './ATSAnalyzer';
import ResumeExport from './ResumeExport';
import CompactResumeBuilder from './CompactResumeBuilder';
import { useResume } from '@/contexts/ResumeContext';
import { useSentrum } from '@/contexts/SentrumContext';

interface ResumeBuilderProps {
  mode: 'ai' | 'manual';
}

const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ mode }) => {
  const { state } = useResume();
  const { state: sentrumState } = useSentrum();
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [builderTab, setBuilderTab] = useState(0);

  return (
    <Box className="w-full">
      {/* Progress Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Paper className="p-6 glass-card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Typography variant="h5" className="font-semibold mb-2">
                {mode === 'ai' && sentrumState.isOpen ? 'AI Resume Builder' : 'Resume Builder'}
              </Typography>
              <Typography variant="body2" className="text-muted-foreground">
                Complete your professional resume step by step
              </Typography>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 min-w-0 sm:min-w-[300px]">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>Completion</span>
                  <span>{state.resumeData.completionPercentage}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={state.resumeData.completionPercentage}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'hsl(var(--muted))',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'hsl(var(--primary))',
                      borderRadius: 4,
                    },
                  }}
                />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>ATS Score</span>
                  <span>{state.resumeData.atsScore}/100</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={state.resumeData.atsScore}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'hsl(var(--muted))',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: state.resumeData.atsScore >= 80 ? '#10b981' : 
                                     state.resumeData.atsScore >= 60 ? '#f59e0b' : '#ef4444',
                      borderRadius: 4,
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </Paper>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Panel - Builder Options */}
        <div className={`${mode === 'ai' && sentrumState.isOpen ? 'lg:col-span-12' : 'lg:col-span-5'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {mode === 'ai' && sentrumState.isOpen ? (
              <Paper className="p-6 glass-card h-[600px] flex flex-col">
                <Typography variant="h6" className="mb-4">
                  AI Assistant Active
                </Typography>
                <Typography variant="body2" className="text-muted-foreground">
                  Your SENTRUM AI assistant is helping you build your resume. 
                  Use the chat to provide information and get suggestions.
                </Typography>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <Typography variant="body2" className="text-sm">
                    💡 Try saying: "Add my experience at TCS as a Software Developer", 
                    "Help me write a professional summary", or "Optimize my resume for ATS"
                  </Typography>
                </div>
              </Paper>
            ) : (
              <Paper className="glass-card">
                <Tabs 
                  value={builderTab} 
                  onChange={(_, newValue) => setBuilderTab(newValue)}
                  sx={{ borderBottom: 1, borderColor: 'hsl(var(--border))' }}
                >
                  <Tab label="Wizard Mode" />
                  <Tab label="Compact Mode" />
                </Tabs>
                
                <div className="p-6">
                  {builderTab === 0 ? (
                    <ResumeWizard />
                  ) : (
                    <CompactResumeBuilder />
                  )}
                </div>
              </Paper>
            )}
          </motion.div>
        </div>

        {/* Right Panel - Preview & Tools */}
        {(mode === 'manual' || !sentrumState.isOpen) && (
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-4">
                {/* Resume Preview */}
                <ResumePreview mode={previewMode} />
                
                {/* ATS Analyzer */}
                <ATSAnalyzer />
                
                {/* Export Tools */}
                <ResumeExport />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default ResumeBuilder;