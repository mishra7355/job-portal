"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type JobFormData = {
  jobTitle: string;
  location: string;
  department: string;
  jobType?: string;
  workMode?: string;
  openings?: string;
  unpaid?: boolean;
  salaryMin?: string | null;
  salaryMax?: string | null;
  currency?: string | null;
  rounds?: string | null;
  requiredSkills: string[];
  preferredSkills: string[];
  experienceRequirements: string;
  technicalRounds: string;
  jobDescription: string;
  interviewProcess: string;
  applicationDeadline: string;
  hiringManagerId: string;
  experience: string;
  publishStatus: string;
};

type JobFormContextType = {
  formData: JobFormData;
  updateForm: (data: Partial<JobFormData>) => void;
  resetForm: () => void;
};

const initialFormData: JobFormData = {
  jobTitle: "",
  location: "",
  department: "",
  jobType: "",
  workMode: "",
  openings: "",
  rounds: "",
  unpaid: false,
  salaryMin: null,
  salaryMax: null,
  currency: null,
  requiredSkills: [],
  preferredSkills: [],
  experienceRequirements: "",
  technicalRounds: "",
  jobDescription: "",
  interviewProcess: "",
  applicationDeadline: "",
  hiringManagerId: "",
  experience: "",
  publishStatus: "public",
};

const JobFormContext = createContext<JobFormContextType | undefined>(undefined);

export const JobFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<JobFormData>(initialFormData);

  const updateForm = (data: Partial<JobFormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const resetForm = () => setFormData(initialFormData);

  console.log(formData);
  return (
    <JobFormContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </JobFormContext.Provider>
  );
};

export const useJobForm = () => {
  const ctx = useContext(JobFormContext);
  if (!ctx) throw new Error("useJobForm must be used inside JobFormProvider");
  return ctx;
};
