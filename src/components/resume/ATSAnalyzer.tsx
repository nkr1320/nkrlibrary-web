import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Paper,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Warning,
  Error,
  Info,
  TrendingUp,
  Search,
  FormatAlignLeft
} from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';

const ATSAnalyzer: React.FC = () => {
  const { state } = useResume();
  const { resumeData } = state;
  const [expanded, setExpanded] = useState<string | false>('overview');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Very Good';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Improvement';
  };

  // ATS Analysis Logic
  const analysisResults = {
    overall: resumeData.atsScore,
    sections: {
      contact: {
        score: resumeData.personalInfo.email && resumeData.personalInfo.phone ? 100 : 50,
        issues: [
          ...(resumeData.personalInfo.email ? [] : ['Missing email address']),
          ...(resumeData.personalInfo.phone ? [] : ['Missing phone number']),
          ...(resumeData.personalInfo.address ? [] : ['Consider adding location']),
        ]
      },
      summary: {
        score: resumeData.personalInfo.summary ? 
          (resumeData.personalInfo.summary.length > 100 ? 100 : 70) : 0,
        issues: [
          ...(resumeData.personalInfo.summary ? [] : ['Missing professional summary']),
          ...(resumeData.personalInfo.summary && resumeData.personalInfo.summary.length < 50 ? 
            ['Summary is too short (aim for 50+ words)'] : []),
        ]
      },
      experience: {
        score: resumeData.experience.length > 0 ? 
          Math.min(resumeData.experience.length * 25, 100) : 0,
        issues: [
          ...(resumeData.experience.length === 0 ? ['No work experience listed'] : []),
          ...resumeData.experience.filter(exp => !exp.description || exp.description.length < 50)
            .map((_, i) => `Experience ${i + 1}: Description too brief`),
        ]
      },
      skills: {
        score: Math.min((resumeData.skills.technical.length + resumeData.skills.soft.length) * 10, 100),
        issues: [
          ...(resumeData.skills.technical.length === 0 ? ['No technical skills listed'] : []),
          ...(resumeData.skills.soft.length === 0 ? ['No soft skills listed'] : []),
          ...(resumeData.skills.technical.length < 5 ? ['Consider adding more technical skills'] : []),
        ]
      },
      education: {
        score: resumeData.education.length > 0 ? 100 : 0,
        issues: [
          ...(resumeData.education.length === 0 ? ['No education information'] : []),
        ]
      }
    },
    keywords: {
      found: resumeData.skills.technical.length + 
             (resumeData.personalInfo.summary?.split(' ').length || 0),
      recommended: 25,
      missing: ['Project Management', 'Leadership', 'Communication', 'Problem Solving']
    },
    formatting: {
      score: 85,
      issues: ['Use consistent bullet points', 'Ensure proper date formatting']
    }
  };

  const recommendations = [
    {
      priority: 'high',
      title: 'Add Professional Summary',
      description: 'Include a 2-3 sentence summary highlighting your key qualifications',
      show: !resumeData.personalInfo.summary
    },
    {
      priority: 'high',
      title: 'Include Contact Information',
      description: 'Ensure email and phone number are present and professional',
      show: !resumeData.personalInfo.email || !resumeData.personalInfo.phone
    },
    {
      priority: 'medium',
      title: 'Expand Work Experience',
      description: 'Add detailed descriptions with quantifiable achievements',
      show: resumeData.experience.length === 0
    },
    {
      priority: 'medium',
      title: 'Add Technical Skills',
      description: 'Include relevant technical skills for your target role',
      show: resumeData.skills.technical.length < 3
    },
    {
      priority: 'low',
      title: 'Include Projects',
      description: 'Showcase relevant projects to demonstrate your abilities',
      show: resumeData.projects.length === 0
    }
  ].filter(rec => rec.show);

  return (
    <Paper className="glass-card">
      <Box className="p-4 border-b border-border">
        <Typography variant="h6" className="font-semibold flex items-center gap-2">
          <TrendingUp className="text-primary" />
          ATS Compatibility Analysis
        </Typography>
      </Box>

      <Box className="p-4">
        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-2">
            <Typography variant="h5" className="font-bold">
              Overall ATS Score
            </Typography>
            <Chip
              label={getScoreLabel(analysisResults.overall)}
              sx={{
                backgroundColor: getScoreColor(analysisResults.overall) + '20',
                color: getScoreColor(analysisResults.overall),
                fontWeight: 'bold'
              }}
            />
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <LinearProgress
              variant="determinate"
              value={analysisResults.overall}
              sx={{
                flex: 1,
                height: 12,
                borderRadius: 6,
                backgroundColor: 'hsl(var(--muted))',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getScoreColor(analysisResults.overall),
                  borderRadius: 6,
                },
              }}
            />
            <Typography variant="h6" className="font-bold min-w-[60px] text-right">
              {analysisResults.overall}/100
            </Typography>
          </div>
          
          <Typography variant="body2" className="text-muted-foreground">
            {analysisResults.overall >= 80 
              ? "Excellent! Your resume is well-optimized for ATS systems."
              : analysisResults.overall >= 60
              ? "Good start! A few improvements will boost your ATS compatibility."
              : "Your resume needs optimization to pass ATS screening effectively."
            }
          </Typography>
        </motion.div>

        {/* Detailed Analysis */}
        <div className="space-y-2">
          {/* Section Scores */}
          <Accordion expanded={expanded === 'sections'} onChange={handleChange('sections')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" className="font-semibold">
                Section Analysis
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-4">
                {Object.entries(analysisResults.sections).map(([section, data]) => (
                  <div key={section} className="p-3 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Typography variant="subtitle2" className="font-medium capitalize">
                        {section.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                      <Chip
                        size="small"
                        label={`${data.score}%`}
                        sx={{
                          backgroundColor: getScoreColor(data.score) + '20',
                          color: getScoreColor(data.score),
                        }}
                      />
                    </div>
                    {data.issues.length > 0 && (
                      <List dense>
                        {data.issues.map((issue, index) => (
                          <ListItem key={index} sx={{ py: 0, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 20 }}>
                              <Warning sx={{ fontSize: 16, color: '#f59e0b' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={issue}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Keywords Analysis */}
          <Accordion expanded={expanded === 'keywords'} onChange={handleChange('keywords')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" className="font-semibold">
                Keyword Analysis
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <Typography variant="h6" className="font-bold text-primary">
                      {analysisResults.keywords.found}
                    </Typography>
                    <Typography variant="body2" className="text-muted-foreground">
                      Keywords Found
                    </Typography>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <Typography variant="h6" className="font-bold text-primary">
                      {analysisResults.keywords.recommended}
                    </Typography>
                    <Typography variant="body2" className="text-muted-foreground">
                      Recommended
                    </Typography>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <Typography variant="h6" className="font-bold text-destructive">
                      {analysisResults.keywords.missing.length}
                    </Typography>
                    <Typography variant="body2" className="text-muted-foreground">
                      Missing
                    </Typography>
                  </div>
                </div>
                
                {analysisResults.keywords.missing.length > 0 && (
                  <div>
                    <Typography variant="subtitle2" className="mb-2 font-medium">
                      Suggested Keywords to Add:
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.keywords.missing.map((keyword, index) => (
                        <Chip
                          key={index}
                          label={keyword}
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: 'hsl(var(--primary))' }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Recommendations */}
          <Accordion expanded={expanded === 'recommendations'} onChange={handleChange('recommendations')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1" className="font-semibold">
                Improvement Recommendations
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <Alert
                    key={index}
                    severity={rec.priority === 'high' ? 'error' : rec.priority === 'medium' ? 'warning' : 'info'}
                    sx={{ 
                      '& .MuiAlert-message': { width: '100%' },
                      backgroundColor: 'transparent',
                      border: '1px solid',
                      borderColor: rec.priority === 'high' ? '#ef4444' : 
                                  rec.priority === 'medium' ? '#f59e0b' : '#3b82f6'
                    }}
                  >
                    <Typography variant="subtitle2" className="font-medium mb-1">
                      {rec.title}
                    </Typography>
                    <Typography variant="body2">
                      {rec.description}
                    </Typography>
                  </Alert>
                ))}
                
                {recommendations.length === 0 && (
                  <Alert severity="success">
                    <Typography variant="subtitle2" className="font-medium">
                      Great job! No major issues found.
                    </Typography>
                    <Typography variant="body2">
                      Your resume follows ATS best practices. Consider reviewing keyword relevance for specific job applications.
                    </Typography>
                  </Alert>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Paper>
  );
};

export default ATSAnalyzer;