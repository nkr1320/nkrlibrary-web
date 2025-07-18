import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificationsSection from "./sections/CertificationsSection";
import { Button } from "@/components/ui/button";

const steps = [
  { label: "Personal Info", component: PersonalInfoSection },
  { label: "Experience", component: ExperienceSection },
  { label: "Education", component: EducationSection },
  { label: "Skills", component: SkillsSection },
  { label: "Projects", component: ProjectsSection },
  { label: "Certifications", component: CertificationsSection },
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
    <div className="glass-card rounded-lg shadow bg-card border border-border">
      {/* Stepper Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.label}
              onClick={() => setStep(index)}
              className={`flex-1 py-2 rounded transition-colors text-xs sm:text-sm font-semibold ${currentStep === index ? 'bg-primary text-primary-foreground shadow' : 'bg-muted text-muted-foreground hover:bg-accent'}`}
              aria-current={currentStep === index ? 'step' : undefined}
            >
              <span className="hidden sm:inline">{step.label}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="mb-4 font-semibold text-lg">{steps[currentStep]?.label}</h3>
          {CurrentStepComponent && <CurrentStepComponent />}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="p-6 border-t border-border flex justify-between items-center">
        <Button
          onClick={handleBack}
          disabled={currentStep === 0}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </Button>
        <span className="text-muted-foreground text-sm">
          Step {currentStep + 1} of {steps.length}
        </span>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          variant="default"
          className="flex items-center gap-2"
        >
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ResumeWizard;
