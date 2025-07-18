import { createContext } from "react";
import { ResumeState, ResumeAction } from "@/types/resume";

export interface ResumeContextType {
  state: ResumeState;
  dispatch: React.Dispatch<ResumeAction>;
  updatePersonalInfo: (
    data: Partial<ResumeState["resumeData"]["personalInfo"]>,
  ) => void;
  addExperience: (
    data: Omit<ResumeState["resumeData"]["experience"][0], "id">,
  ) => void;
  updateExperience: (
    id: string,
    data: Partial<ResumeState["resumeData"]["experience"][0]>,
  ) => void;
  removeExperience: (id: string) => void;
  addEducation: (
    data: Omit<ResumeState["resumeData"]["education"][0], "id">,
  ) => void;
  updateEducation: (
    id: string,
    data: Partial<ResumeState["resumeData"]["education"][0]>,
  ) => void;
  removeEducation: (id: string) => void;
  addProject: (
    data: Omit<ResumeState["resumeData"]["projects"][0], "id">,
  ) => void;
  updateProject: (
    id: string,
    data: Partial<ResumeState["resumeData"]["projects"][0]>,
  ) => void;
  removeProject: (id: string) => void;
  addCertification: (
    data: Omit<ResumeState["resumeData"]["certifications"][0], "id">,
  ) => void;
  updateCertification: (
    id: string,
    data: Partial<ResumeState["resumeData"]["certifications"][0]>,
  ) => void;
  removeCertification: (id: string) => void;
  updateSkills: (data: Partial<ResumeState["resumeData"]["skills"]>) => void;
  setTemplate: (template: ResumeState["resumeData"]["template"]) => void;
  setStep: (step: number) => void;
  calculateScores: () => void;
  saveVersion: (name: string, jobTitle?: string, company?: string) => void;
  loadVersion: (id: string) => void;
  deleteVersion: (id: string) => void;
  resetResume: () => void;
}

export const ResumeContextObject = createContext<ResumeContextType | undefined>(
  undefined,
);
