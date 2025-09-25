export interface JobPayload {
  job_title: string;
  job_type?: string;
  work_mode?: string;
  department: string;
  location: string;
  is_unpaid_role?: boolean;
  salary_min: number;
  salary_max: number;
  salary_currency: string;
  salary_type: string;
  stipend_amount?: number | null;
  no_of_openings: number;
  job_description?: string;
  required_skills?: string[];
  preferred_skills?: string[];
  experience_level?: string;
  no_of_technical_rounds?: number;
  interview_process?: string;
  application_deadline: string;
}

export interface JobResponse {
  id: string;
  message: string;
  // add any response fields your backend returns
}

export interface Job {
  job_id: string;
  job_title: string;
  job_type: string;
  work_mode?: string;
  department?: string;
  location?: string;
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
    type?: string;
  };
  no_of_openings?: number;
  job_description?: string;
  required_skills?: string[];
  preferred_skills?: string[];
  experience_level?: string;
  no_of_technical_rounds?: number;
  interview_process?: string;
  application_deadline?: string;
  custom_form?: {
    id: string;
    name: string;
    questions?: { id: string; question_text: string; is_required: boolean }[];
  };
  status?: string;
  hiring_manager?: {
    id: string;
    name?: string;
    email?: string;
  };
  analytics?: {
    total_views?: number;
    total_applications?: number;
    applications_this_week?: number;
  };
  created_at?: string;
}
