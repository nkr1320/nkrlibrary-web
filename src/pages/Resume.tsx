import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Box, Card, CardContent, Switch, FormControlLabel } from '@mui/material';
import { Bot, FileText, Wand2, Download } from 'lucide-react';
import ResumeBuilder from '@/components/resume/ResumeBuilder';
import { useSentrum } from '@/contexts/SentrumContext';
const Resume = () => {
  const [buildMode, setBuildMode] = useState<'ai' | 'manual'>('manual');
  const { openSentrum } = useSentrum();

  const handleAIMode = () => {
    setBuildMode('ai');
    openSentrum('resume');
  };

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background"
      >
        {/* Hero Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" className="text-4xl md:text-6xl font-bold mb-6">
                Resume Builder
              </Typography>
              <Typography variant="h5" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Create professional, ATS-friendly resumes with AI assistance or build manually with our guided wizard.
              </Typography>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  onClick={handleAIMode}
                  variant="contained"
                  size="large"
                  startIcon={<Bot />}
                  sx={{
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    minWidth: '200px',
                    '&:hover': {
                      background: 'hsl(var(--primary))',
                      filter: 'brightness(0.9)',
                    },
                  }}
                >
                  Build with AI
                </Button>
                
                <Button
                  onClick={() => setBuildMode('manual')}
                  variant="outlined"
                  size="large"
                  startIcon={<FileText />}
                  sx={{
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    minWidth: '200px',
                    '&:hover': {
                      borderColor: 'hsl(var(--primary))',
                      backgroundColor: 'hsl(var(--accent))',
                    },
                  }}
                >
                  Manual Builder
                </Button>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="glass-card">
                  <CardContent className="p-6 text-center">
                    <Wand2 className="h-12 w-12 text-primary mx-auto mb-4" />
                    <Typography variant="h6" className="font-semibold mb-2">
                      AI-Powered
                    </Typography>
                    <Typography variant="body2" className="text-muted-foreground">
                      Smart suggestions, content optimization, and role-based tailoring
                    </Typography>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                    <Typography variant="h6" className="font-semibold mb-2">
                      ATS-Friendly
                    </Typography>
                    <Typography variant="body2" className="text-muted-foreground">
                      Optimized for applicant tracking systems with score analysis
                    </Typography>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <Typography variant="h6" className="font-semibold mb-2">
                      Multiple Formats
                    </Typography>
                    <Typography variant="body2" className="text-muted-foreground">
                      Export as PDF, HTML, or generate QR codes for easy sharing
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resume Builder Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <ResumeBuilder mode={buildMode} />
          </div>
        </section>
      </motion.div>
  );
};

export default Resume;