import { ResumeState, ResumeAction, initialResumeData } from "@/types/resume";
import { calculateATSScore, calculateCompletion } from "@/lib/resume-utils";

export function resumeReducer(
  state: ResumeState,
  action: ResumeAction,
): ResumeState {
  switch (action.type) {
    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          personalInfo: { ...state.resumeData.personalInfo, ...action.payload },
        },
      };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          experience: [...state.resumeData.experience, action.payload],
        },
      };

    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          experience: state.resumeData.experience.map((exp) =>
            exp.id === action.payload.id
              ? { ...exp, ...action.payload.data }
              : exp,
          ),
        },
      };

    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          experience: state.resumeData.experience.filter(
            (exp) => exp.id !== action.payload,
          ),
        },
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          education: [...state.resumeData.education, action.payload],
        },
      };

    case "UPDATE_EDUCATION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          education: state.resumeData.education.map((edu) =>
            edu.id === action.payload.id
              ? { ...edu, ...action.payload.data }
              : edu,
          ),
        },
      };

    case "REMOVE_EDUCATION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          education: state.resumeData.education.filter(
            (edu) => edu.id !== action.payload,
          ),
        },
      };

    case "ADD_PROJECT":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          projects: [...state.resumeData.projects, action.payload],
        },
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          projects: state.resumeData.projects.map((project) =>
            project.id === action.payload.id
              ? { ...project, ...action.payload.data }
              : project,
          ),
        },
      };

    case "REMOVE_PROJECT":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          projects: state.resumeData.projects.filter(
            (project) => project.id !== action.payload,
          ),
        },
      };

    case "ADD_CERTIFICATION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          certifications: [...state.resumeData.certifications, action.payload],
        },
      };

    case "UPDATE_CERTIFICATION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          certifications: state.resumeData.certifications.map((cert) =>
            cert.id === action.payload.id
              ? { ...cert, ...action.payload.data }
              : cert,
          ),
        },
      };

    case "REMOVE_CERTIFICATION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          certifications: state.resumeData.certifications.filter(
            (cert) => cert.id !== action.payload,
          ),
        },
      };

    case "UPDATE_SKILLS":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          skills: { ...state.resumeData.skills, ...action.payload },
        },
      };

    case "ADD_CUSTOM_SECTION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          customSections: [...state.resumeData.customSections, action.payload],
        },
      };

    case "UPDATE_CUSTOM_SECTION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          customSections: state.resumeData.customSections.map((section) =>
            section.id === action.payload.id
              ? { ...section, ...action.payload.data }
              : section,
          ),
        },
      };

    case "REMOVE_CUSTOM_SECTION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          customSections: state.resumeData.customSections.filter(
            (section) => section.id !== action.payload,
          ),
        },
      };

    case "SET_TEMPLATE":
      return {
        ...state,
        resumeData: { ...state.resumeData, template: action.payload },
      };

    case "SET_STEP":
      return { ...state, currentStep: action.payload };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "CALCULATE_ATS_SCORE":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          atsScore: calculateATSScore(state.resumeData),
        },
      };

    case "CALCULATE_COMPLETION":
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          completionPercentage: calculateCompletion(state.resumeData),
        },
      };

    case "SAVE_VERSION": {
      const newVersion = {
        id: Date.now().toString(),
        name: action.payload.name,
        data: { ...state.resumeData },
        createdAt: new Date().toISOString(),
        jobTitle: action.payload.jobTitle,
        company: action.payload.company,
      };
      return {
        ...state,
        versions: [...state.versions, newVersion],
        activeVersionId: newVersion.id,
      };
    }

    case "LOAD_VERSION": {
      const version = state.versions.find((v) => v.id === action.payload);
      if (!version) return state;
      return {
        ...state,
        resumeData: { ...version.data },
        activeVersionId: action.payload,
      };
    }

    case "DELETE_VERSION":
      return {
        ...state,
        versions: state.versions.filter((v) => v.id !== action.payload),
        activeVersionId:
          state.activeVersionId === action.payload
            ? null
            : state.activeVersionId,
      };

    case "RESET_RESUME":
      return {
        ...state,
        resumeData: { ...initialResumeData },
        currentStep: 0,
        activeVersionId: null,
      };

    case "LOAD_FROM_STORAGE":
      return action.payload;

    default:
      return state;
  }
}
