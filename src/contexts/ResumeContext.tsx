import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  ResumeData,
  ResumeState,
  ResumeAction,
  initialState,
} from "@/types/resume";
import { resumeReducer } from "@/reducers/resumeReducer";

interface ResumeContextType {
  state: ResumeState;
  dispatch: React.Dispatch<ResumeAction>;
  updatePersonalInfo: (data: Partial<ResumeData["personalInfo"]>) => void;
  addExperience: (data: Omit<ResumeData["experience"][0], "id">) => void;
  updateExperience: (
    id: string,
    data: Partial<ResumeData["experience"][0]>,
  ) => void;
  removeExperience: (id: string) => void;
  addEducation: (data: Omit<ResumeData["education"][0], "id">) => void;
  updateEducation: (
    id: string,
    data: Partial<ResumeData["education"][0]>,
  ) => void;
  removeEducation: (id: string) => void;
  addProject: (data: Omit<ResumeData["projects"][0], "id">) => void;
  updateProject: (id: string, data: Partial<ResumeData["projects"][0]>) => void;
  removeProject: (id: string) => void;
  addCertification: (data: Omit<ResumeData["certifications"][0], "id">) => void;
  updateCertification: (
    id: string,
    data: Partial<ResumeData["certifications"][0]>,
  ) => void;
  removeCertification: (id: string) => void;
  updateSkills: (data: Partial<ResumeData["skills"]>) => void;
  setTemplate: (template: ResumeData["template"]) => void;
  setStep: (step: number) => void;
  calculateScores: () => void;
  saveVersion: (name: string, jobTitle?: string, company?: string) => void;
  loadVersion: (id: string) => void;
  deleteVersion: (id: string) => void;
  resetResume: () => void;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(
  undefined,
);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Removed console logs for production cleanliness. If debugging is needed, wrap logs in a development check:
  // if (process.env.NODE_ENV === 'development') { console.log('...'); }
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("nkr-resume-builder");
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ type: "LOAD_FROM_STORAGE", payload: parsedState });
      } catch (error) {
        console.error("Failed to load resume data from storage:", error);
      }
    }
  }, []);

  // Save to localStorage on state changes
  useEffect(() => {
    localStorage.setItem("nkr-resume-builder", JSON.stringify(state));
  }, [state]);

  // Auto-calculate scores when data changes
  useEffect(() => {
    dispatch({ type: "CALCULATE_ATS_SCORE" });
    dispatch({ type: "CALCULATE_COMPLETION" });
  }, [state.resumeData]);

  const contextValue: ResumeContextType = {
    state,
    dispatch,

    updatePersonalInfo: (data) => {
      dispatch({ type: "UPDATE_PERSONAL_INFO", payload: data });
    },

    addExperience: (data) => {
      dispatch({
        type: "ADD_EXPERIENCE",
        payload: { ...data, id: Date.now().toString() },
      });
    },

    updateExperience: (id, data) => {
      dispatch({ type: "UPDATE_EXPERIENCE", payload: { id, data } });
    },

    removeExperience: (id) => {
      dispatch({ type: "REMOVE_EXPERIENCE", payload: id });
    },

    addEducation: (data) => {
      dispatch({
        type: "ADD_EDUCATION",
        payload: { ...data, id: Date.now().toString() },
      });
    },

    updateEducation: (id, data) => {
      dispatch({ type: "UPDATE_EDUCATION", payload: { id, data } });
    },

    removeEducation: (id) => {
      dispatch({ type: "REMOVE_EDUCATION", payload: id });
    },

    addProject: (data) => {
      dispatch({
        type: "ADD_PROJECT",
        payload: { ...data, id: Date.now().toString() },
      });
    },

    updateProject: (id, data) => {
      dispatch({ type: "UPDATE_PROJECT", payload: { id, data } });
    },

    removeProject: (id) => {
      dispatch({ type: "REMOVE_PROJECT", payload: id });
    },

    addCertification: (data) => {
      dispatch({
        type: "ADD_CERTIFICATION",
        payload: { ...data, id: Date.now().toString() },
      });
    },

    updateCertification: (id, data) => {
      dispatch({ type: "UPDATE_CERTIFICATION", payload: { id, data } });
    },

    removeCertification: (id) => {
      dispatch({ type: "REMOVE_CERTIFICATION", payload: id });
    },

    updateSkills: (data) => {
      dispatch({ type: "UPDATE_SKILLS", payload: data });
    },

    setTemplate: (template) => {
      dispatch({ type: "SET_TEMPLATE", payload: template });
    },

    setStep: (step) => {
      dispatch({ type: "SET_STEP", payload: step });
    },

    calculateScores: () => {
      dispatch({ type: "CALCULATE_ATS_SCORE" });
      dispatch({ type: "CALCULATE_COMPLETION" });
    },

    saveVersion: (name, jobTitle, company) => {
      dispatch({ type: "SAVE_VERSION", payload: { name, jobTitle, company } });
    },

    loadVersion: (id) => {
      dispatch({ type: "LOAD_VERSION", payload: id });
    },

    deleteVersion: (id) => {
      dispatch({ type: "DELETE_VERSION", payload: id });
    },

    resetResume: () => {
      dispatch({ type: "RESET_RESUME" });
    },
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  // Removed console logs for production cleanliness. If debugging is needed, wrap logs in a development check:
  // if (process.env.NODE_ENV === 'development') { console.log('...'); }
  const context = useContext(ResumeContext);

  if (context === undefined) {
    console.error("useResume: Context is undefined! Provider not found.");
    console.error(
      "useResume: This suggests SentrumResume is rendered outside ResumeProvider tree",
    );
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
