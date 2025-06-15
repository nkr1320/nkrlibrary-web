import { ResumeData } from '@/types/resume';

export function calculateATSScore(data: ResumeData): number {
  let score = 0;
  const maxScore = 100;

  // Personal info completeness (20 points)
  const personalFields = Object.values(data.personalInfo).filter(field => field.trim() !== '');
  score += (personalFields.length / 8) * 20;

  // Experience section (25 points)
  if (data.experience.length > 0) {
    score += 15;
    const completeExp = data.experience.filter(exp => 
      exp.company && exp.position && exp.duration && exp.description
    );
    score += (completeExp.length / data.experience.length) * 10;
  }

  // Education section (15 points)
  if (data.education.length > 0) {
    score += 10;
    const completeEdu = data.education.filter(edu => 
      edu.institution && edu.degree && edu.year
    );
    score += (completeEdu.length / data.education.length) * 5;
  }

  // Skills section (20 points)
  const totalSkills = data.skills.technical.length + data.skills.soft.length;
  if (totalSkills > 0) {
    score += Math.min(totalSkills * 2, 20);
  }

  // Projects section (10 points)
  if (data.projects.length > 0) {
    score += Math.min(data.projects.length * 3, 10);
  }

  // Professional summary (10 points)
  if (data.personalInfo.summary && data.personalInfo.summary.length > 50) {
    score += 10;
  }

  return Math.min(Math.round(score), maxScore);
}

export function calculateCompletion(data: ResumeData): number {
  const sections = [
    data.personalInfo.fullName && data.personalInfo.email && data.personalInfo.phone,
    data.personalInfo.summary && data.personalInfo.summary.length > 20,
    data.experience.length > 0,
    data.education.length > 0,
    data.skills.technical.length > 0 || data.skills.soft.length > 0,
  ];

  return Math.round((sections.filter(Boolean).length / sections.length) * 100);
}