import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";
import { Alert } from "@/components/ui/alert";

const ATSAnalyzer: React.FC = () => {
  const { state } = useResume();
  const { resumeData } = state;
  const [expanded, setExpanded] = useState<string | false>("overview");

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#10b981";
    if (score >= 60) return "#f59e0b";
    return "#ef4444";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
  };

  // ATS Analysis Logic
  const analysisResults = {
    overall: resumeData.atsScore,
    sections: {
      contact: {
        score:
          resumeData.personalInfo.email && resumeData.personalInfo.phone
            ? 100
            : 50,
        issues: [
          ...(resumeData.personalInfo.email ? [] : ["Missing email address"]),
          ...(resumeData.personalInfo.phone ? [] : ["Missing phone number"]),
          ...(resumeData.personalInfo.address
            ? []
            : ["Consider adding location"]),
        ],
      },
      summary: {
        score: resumeData.personalInfo.summary
          ? resumeData.personalInfo.summary.length > 100
            ? 100
            : 70
          : 0,
        issues: [
          ...(resumeData.personalInfo.summary
            ? []
            : ["Missing professional summary"]),
          ...(resumeData.personalInfo.summary &&
          resumeData.personalInfo.summary.length < 50
            ? ["Summary is too short (aim for 50+ words)"]
            : []),
        ],
      },
      experience: {
        score:
          resumeData.experience.length > 0
            ? Math.min(resumeData.experience.length * 25, 100)
            : 0,
        issues: [
          ...(resumeData.experience.length === 0
            ? ["No work experience listed"]
            : []),
          ...resumeData.experience
            .filter((exp) => !exp.description || exp.description.length < 50)
            .map((_, i) => `Experience ${i + 1}: Description too brief`),
        ],
      },
      skills: {
        score: Math.min(
          (resumeData.skills.technical.length + resumeData.skills.soft.length) *
            10,
          100,
        ),
        issues: [
          ...(resumeData.skills.technical.length === 0
            ? ["No technical skills listed"]
            : []),
          ...(resumeData.skills.soft.length === 0
            ? ["No soft skills listed"]
            : []),
          ...(resumeData.skills.technical.length < 5
            ? ["Consider adding more technical skills"]
            : []),
        ],
      },
      education: {
        score: resumeData.education.length > 0 ? 100 : 0,
        issues: [
          ...(resumeData.education.length === 0
            ? ["No education information"]
            : []),
        ],
      },
    },
    keywords: {
      found:
        resumeData.skills.technical.length +
        (resumeData.personalInfo.summary?.split(" ").length || 0),
      recommended: 25,
      missing: [
        "Project Management",
        "Leadership",
        "Communication",
        "Problem Solving",
      ],
    },
    formatting: {
      score: 85,
      issues: ["Use consistent bullet points", "Ensure proper date formatting"],
    },
  };

  const recommendations = [
    {
      priority: "high",
      title: "Add Professional Summary",
      description:
        "Include a 2-3 sentence summary highlighting your key qualifications",
      show: !resumeData.personalInfo.summary,
    },
    {
      priority: "high",
      title: "Include Contact Information",
      description: "Ensure email and phone number are present and professional",
      show: !resumeData.personalInfo.email || !resumeData.personalInfo.phone,
    },
    {
      priority: "medium",
      title: "Expand Work Experience",
      description: "Add detailed descriptions with quantifiable achievements",
      show: resumeData.experience.length === 0,
    },
    {
      priority: "medium",
      title: "Add Technical Skills",
      description: "Include relevant technical skills for your target role",
      show: resumeData.skills.technical.length < 3,
    },
    {
      priority: "low",
      title: "Include Projects",
      description: "Showcase relevant projects to demonstrate your abilities",
      show: resumeData.projects.length === 0,
    },
  ].filter((rec) => rec.show);

  return (
    <div className="glass-card rounded-lg shadow bg-card border border-border">
      <div className="p-4 border-b border-border">
        <div className="font-semibold flex items-center gap-2 text-lg">
          <FileText className="text-primary" />
          ATS Compatibility Analysis
        </div>
      </div>
      <div className="p-4">
        {/* Overall Score */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-xl">Overall ATS Score</h2>
            <span className="rounded-full px-3 py-1 font-bold text-sm" style={{backgroundColor: getScoreColor(analysisResults.overall) + '20', color: getScoreColor(analysisResults.overall)}}>
              {getScoreLabel(analysisResults.overall)}
            </span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="h-3 rounded-full" style={{ width: `${analysisResults.overall}%`, backgroundColor: getScoreColor(analysisResults.overall) }}></div>
            </div>
            <span className="font-bold text-lg">{analysisResults.overall}%</span>
          </div>
        </motion.div>
        {/* Section Scores */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Section Analysis</h3>
          <ul className="space-y-2">
            {Object.entries(analysisResults.sections).map(([section, data]: [string, { score: number; issues: string[] }]) => (
              <li key={section} className="flex items-center gap-3">
                <span className="font-medium capitalize w-32">{section}</span>
                <span className="rounded px-2 py-1 text-xs font-semibold" style={{backgroundColor: getScoreColor(data.score) + '20', color: getScoreColor(data.score)}}>
                  {data.score}%
                </span>
                {data.issues.length > 0 && (
                  <ul className="ml-4 list-disc text-xs text-destructive">
                    {data.issues.map((issue: string, idx: number) => (
                      <li key={idx}>{issue}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Recommendations */}
        {recommendations.length > 0 && (
          <Alert className="mb-4">
            <ul className="list-disc pl-5">
              {recommendations.map((rec, idx) => (
                <li key={idx} className="mb-1">
                  <span className="font-semibold">{rec.title}:</span> {rec.description}
                </li>
              ))}
            </ul>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ATSAnalyzer;
