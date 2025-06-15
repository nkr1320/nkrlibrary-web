export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    portfolio: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    location: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    year: string;
    gpa?: string;
    location: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: Array<{
      language: string;
      proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native';
    }>;
  };
  projects: Array<{
    id: string;
    name: string;
    description: string;
    technologies: string;
    link?: string;
    duration?: string;
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
    expiryDate?: string;
    credentialId?: string;
  }>;
  customSections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  template: 'swiss' | 'modern' | 'ats' | 'executive';
  atsScore: number;
  completionPercentage: number;
}

export interface ResumeState {
  resumeData: ResumeData;
  currentStep: number;
  isLoading: boolean;
  versions: Array<{
    id: string;
    name: string;
    data: ResumeData;
    createdAt: string;
    jobTitle?: string;
    company?: string;
  }>;
  activeVersionId: string | null;
}

export type ResumeAction =
  | { type: 'UPDATE_PERSONAL_INFO'; payload: Partial<ResumeData['personalInfo']> }
  | { type: 'ADD_EXPERIENCE'; payload: ResumeData['experience'][0] }
  | { type: 'UPDATE_EXPERIENCE'; payload: { id: string; data: Partial<ResumeData['experience'][0]> } }
  | { type: 'REMOVE_EXPERIENCE'; payload: string }
  | { type: 'ADD_EDUCATION'; payload: ResumeData['education'][0] }
  | { type: 'UPDATE_EDUCATION'; payload: { id: string; data: Partial<ResumeData['education'][0]> } }
  | { type: 'REMOVE_EDUCATION'; payload: string }
  | { type: 'ADD_PROJECT'; payload: ResumeData['projects'][0] }
  | { type: 'UPDATE_PROJECT'; payload: { id: string; data: Partial<ResumeData['projects'][0]> } }
  | { type: 'REMOVE_PROJECT'; payload: string }
  | { type: 'ADD_CERTIFICATION'; payload: ResumeData['certifications'][0] }
  | { type: 'UPDATE_CERTIFICATION'; payload: { id: string; data: Partial<ResumeData['certifications'][0]> } }
  | { type: 'REMOVE_CERTIFICATION'; payload: string }
  | { type: 'UPDATE_SKILLS'; payload: Partial<ResumeData['skills']> }
  | { type: 'ADD_CUSTOM_SECTION'; payload: ResumeData['customSections'][0] }
  | { type: 'UPDATE_CUSTOM_SECTION'; payload: { id: string; data: Partial<ResumeData['customSections'][0]> } }
  | { type: 'REMOVE_CUSTOM_SECTION'; payload: string }
  | { type: 'SET_TEMPLATE'; payload: ResumeData['template'] }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CALCULATE_ATS_SCORE' }
  | { type: 'CALCULATE_COMPLETION' }
  | { type: 'SAVE_VERSION'; payload: { name: string; jobTitle?: string; company?: string } }
  | { type: 'LOAD_VERSION'; payload: string }
  | { type: 'DELETE_VERSION'; payload: string }
  | { type: 'RESET_RESUME' }
  | { type: 'LOAD_FROM_STORAGE'; payload: ResumeState };

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    portfolio: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
  },
  projects: [],
  certifications: [],
  customSections: [],
  template: 'swiss',
  atsScore: 0,
  completionPercentage: 0,
};

export const initialState: ResumeState = {
  resumeData: initialResumeData,
  currentStep: 0,
  isLoading: false,
  versions: [],
  activeVersionId: null,
};