import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResumeWizard from "./ResumeWizard";
import ResumePreview from "./ResumePreview";
import ATSAnalyzer from "./ATSAnalyzer";
import ResumeExport from "./ResumeExport";
import CompactResumeBuilder from "./CompactResumeBuilder";
import { useResume } from "@/contexts/ResumeContext";
import { useSentrum } from "@/contexts/SentrumContext";

interface ResumeBuilderProps {
  mode: "ai" | "manual";
}

const ResumeBuilder: React.FC<ResumeBuilderProps> = ({ mode }) => {
  const { state } = useResume();
  const { state: sentrumState } = useSentrum();
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop",
  );
  const [builderTab, setBuilderTab] = useState(0);

  return (
    <div className="w-full">
      {/* Progress Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="p-6 glass-card rounded-lg shadow bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {mode === "ai" && sentrumState.isOpen
                  ? "AI Resume Builder"
                  : "Resume Builder"}
              </h2>
              <p className="text-muted-foreground">
                Complete your professional resume step by step
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 min-w-0 sm:min-w-[300px]">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>Completion</span>
                  <span>{state.resumeData.completionPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${state.resumeData.completionPercentage}%` }} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>ATS Score</span>
                  <span>{state.resumeData.atsScore}/100</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${state.resumeData.atsScore}%`, backgroundColor: state.resumeData.atsScore >= 80 ? '#10b981' : state.resumeData.atsScore >= 60 ? '#f59e0b' : '#ef4444' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Panel - Builder Options */}
        <div
          className={`${mode === "ai" && sentrumState.isOpen ? "lg:col-span-12" : "lg:col-span-5"}`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {mode === "ai" && sentrumState.isOpen ? (
              <div className="p-6 glass-card h-[600px] flex flex-col rounded-lg shadow bg-card border border-border">
                <h3 className="text-lg font-semibold mb-4">AI Assistant Active</h3>
                <p className="text-muted-foreground">
                  Your SENTRUM AI assistant is helping you build your resume.
                  Use the chat to provide information and get suggestions.
                </p>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm">
                    💡 Try saying: "Add my experience at TCS as a Software
                    Developer", "Help me write a professional summary", or
                    "Optimize my resume for ATS"
                  </p>
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-lg shadow bg-card border border-border">
                <div className="flex border-b border-border">
                  <button
                    className={`flex-1 py-3 text-center font-semibold transition-colors ${builderTab === 0 ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
                    onClick={() => setBuilderTab(0)}
                  >
                    Wizard Mode
                  </button>
                  <button
                    className={`flex-1 py-3 text-center font-semibold transition-colors ${builderTab === 1 ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
                    onClick={() => setBuilderTab(1)}
                  >
                    Compact Mode
                  </button>
                </div>
                <div className="p-6">
                  {builderTab === 0 ? <ResumeWizard /> : <CompactResumeBuilder />}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Panel - Preview & Tools */}
        {(mode === "manual" || !sentrumState.isOpen) && (
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
    </div>
  );
};

export default ResumeBuilder;
