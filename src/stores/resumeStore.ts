import { createStore } from "zustand/vanilla";

type Experience = {
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string[];
};

type ResumeData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  nationality: string;
  driversLicense: string;
  placeOfBirth: string;
  dateOfBirth: string;
  professionalSummary: string;
  experience: Experience[];
  skills: string[];
};

export type ResumeStore = {
  data: ResumeData;
  updateField: (field: keyof ResumeData, value: any) => void;
  updateArrayField: (
    arrayName: keyof Pick<ResumeData, "experience" | "skills">,
    index: number,
    field: string,
    value: any
  ) => void;
};

// Initial state
export const initResumeStore = (): ResumeStore => ({
  data: {
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    nationality: "",
    driversLicense: "",
    placeOfBirth: "",
    dateOfBirth: "",
    professionalSummary: "Enter your professional summary here...",
    experience: [
      {
        jobTitle: "",
        employer: "Wells Fargo Advisors",
        startDate: "August 2020",
        endDate: "Present",
        description: [
          "Deliver financial advice to clients.",
          "Optimize investment portfolios.",
        ],
      },
    ],
    skills: ["Portfolio Management", "Risk Assessment", "Strategic Planning"],
  },
  updateField: (field, value) => {},
  updateArrayField: (arrayName, index, field, value) => {},
});

// Create the store
export const createResumeStore = (initialState = initResumeStore()) =>
  createStore<ResumeStore>((set) => ({
    ...initialState,
    updateField: (field, value) =>
      set((state) => ({
        data: { ...state.data, [field]: value },
      })),
    updateArrayField: (arrayName, index, field, value) =>
      set((state) => {
        const updatedArray = [...state.data[arrayName]];
        if (arrayName === "experience") {
          const updatedExperience = updatedArray as Experience[];
          updatedExperience[index] = {
            ...updatedExperience[index],
            [field]: value,
          };
          return {
            data: { ...state.data, experience: updatedExperience },
          };
        } else if (arrayName === "skills") {
          const updatedSkills = updatedArray as string[];
          updatedSkills[index] = value;
          return {
            data: { ...state.data, skills: updatedSkills },
          };
        }
        return state;
      }),
  }));
